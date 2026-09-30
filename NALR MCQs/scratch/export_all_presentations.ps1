# Automated PowerPoint Slide & PDF Exporter for NALR Presentation Viewer
$ErrorActionPreference = "Stop"

$baseDir = (Get-Location).Path
$pptDir = Join-Path $baseDir "PPTs"
$pdfDir = Join-Path $pptDir "pdf"
$slidesDir = Join-Path $pptDir "slides"

if (!(Test-Path $pdfDir)) { New-Item -ItemType Directory -Path $pdfDir -Force | Out-Null }
if (!(Test-Path $slidesDir)) { New-Item -ItemType Directory -Path $slidesDir -Force | Out-Null }

$modules = @{
    "mod1" = "BLOOD RELATION .pptx"
    "mod2" = "CODED RELATION 45 min.pptx"
    "mod3" = "Direction.pptx"
    "mod4" = "ANALOGY .pptx"
    "mod5" = "NUMBER SYSTEM.pptx"
    "mod6" = "HCF AND LCM.pptx"
    "mod7" = "AVERAGE  .pptx"
    "mod8" = "Remainder Theorem .pptx"
    "mod9" = "RATIO & PROPORTION.pptx"
    "mod10" = "PROBLEM ON AGES.pptx"
    "mod11" = "PARTNERSHIP.pptx"
    "mod13" = "ODD ONE OUT.pptx"
    "mod14" = "SYLLOGISM.pptx"
}

Write-Output "Starting PowerPoint Application COM..."
$ppt = New-Object -ComObject PowerPoint.Application

$manifest = @{}

foreach ($modKey in $modules.Keys | Sort-Object) {
    $fileName = $modules[$modKey]
    $fullPath = Join-Path $pptDir $fileName
    
    if (!(Test-Path $fullPath)) {
        Write-Warning "File not found: $fullPath"
        continue
    }

    Write-Output "Processing $modKey ($fileName)..."
    try {
        $presentation = $ppt.Presentations.Open($fullPath, [Microsoft.Office.Core.MsoTriState]::msoTrue, [Microsoft.Office.Core.MsoTriState]::msoFalse, [Microsoft.Office.Core.MsoTriState]::msoFalse)
        $count = $presentation.Slides.Count
        
        # 1. Export PDF
        $pdfPath = Join-Path $pdfDir "$modKey.pdf"
        $presentation.SaveAs($pdfPath, 32) # 32 = ppSaveAsPDF
        
        # 2. Export Slide PNGs
        $modSlidesDir = Join-Path $slidesDir $modKey
        if (!(Test-Path $modSlidesDir)) { New-Item -ItemType Directory -Path $modSlidesDir -Force | Out-Null }
        
        for ($i = 1; $i -le $count; $i++) {
            $slideImgPath = Join-Path $modSlidesDir "slide_$i.png"
            $presentation.Slides.Item($i).Export($slideImgPath, "PNG", 1280, 720)
        }
        
        $manifest[$modKey] = @{
            "title" = $fileName.Replace(".pptx", "").Trim()
            "fileName" = $fileName
            "slideCount" = $count
            "pdfUrl" = "PPTs/pdf/$modKey.pdf"
            "slidesDir" = "PPTs/slides/$modKey"
        }
        
        $presentation.Close()
        Write-Output ("  Finished " + $modKey + ": " + $count + " slides exported to PNG & PDF")
    } catch {
        Write-Error "Failed to process $modKey : $_"
    }
}

$ppt.Quit()
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($ppt) | Out-Null
[System.GC]::Collect()
[System.GC]::WaitForPendingFinalizers()

$manifestJson = $manifest | ConvertTo-Json -Depth 4
$manifestPath = Join-Path $slidesDir "manifest.json"
Set-Content -Path $manifestPath -Value $manifestJson -Encoding UTF8

$manifestJsPath = Join-Path $baseDir "ppt_manifest.js"
$manifestJsContent = "const PPT_MANIFEST = " + $manifestJson + ";"
Set-Content -Path $manifestJsPath -Value $manifestJsContent -Encoding UTF8

Write-Output "All presentations exported successfully! Manifest saved."
