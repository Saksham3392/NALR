{"step_index":615,"source":"MODEL","type":"GENERIC","status":"DONE","created_at":"2026-09-07T14:17:51Z","content":"Created At: 2026-09-07T19:47:51+05:30\nCompleted At: 2026-09-07T19:47:52+05:30\nFile Path: `file:///c:/Users/Asus/Downloads/CSE%20AI%205th%20Sem/AGAI/AGAIMcqs/quiz_questions.js`\nTotal Lines: 3513\nTotal Bytes: 226648\nShowing lines 1 to 100\nThe following code has been modified to include a line number before every line, in the format: <line_number>: <original_line>. Please note that any changes targeting the original code should remove the line number, colon, and leading space.\n1: const QUIZ_QUESTIONS = [\r\n2:   {\r\n3:     \"id\": \"q1\",\r\n4:     \"module_id\": \"mod1\",\r\n5:     \"module_name\": \"Module 1: Scaled Dot-Product & Self-Attention Fundamentals\",\r\n6:     \"syllabus_lec\": \"Lectures 24-25 & 32-33\",\r\n7:     \"topic\": \"Why Scaled Dot-Product Uses the 1 / √Head Dimension Normalizing Factor\",\r\n8:     \"difficulty\": \"Medium\",\r\n9:     \"points\": 1,\r\n10:     \"question\": \"Why is the Query-Key dot product divided by √d_k in scaled dot-product attention?\",\r\n11:     \"options\": [\r\n12:       \"To make every attention head use identical weights\",\r\n13:       \"To keep attention scores from growing too large as key dimension increases\",\r\n14:       \"To convert value vectors into probability distributions\",\r\n15:       \"To remove the need for positional information\"\r\n16:     ],\r\n17:     \"correct\": \"To keep attention scores from growing too large as key dimension increases\",\r\n18:     \"explanation\": \"Dividing by √d_k keeps attention score magnitudes bounded as the key dimension grows. Without this divisor, large dot products push the Softmax function into saturated regions where gradients become near zero (vanishing gradient problem), stalling training.\",\r\n19:     \"theory\": {\r\n20:       \"title\": \"Scaling Factor (1 / √d_k) in Scaled Dot-Product Attention\",\r\n21:       \"what_is_it\": \"In scaled dot-product attention, words compare themselves to other words by computing dot products between Query (what information a token searches for) and Key (what a token advertises). The term d_k represents the feature dimension of these vectors (e.g., d_k = 64). The scaling factor 1 / √d_k is a variance normalizing divider applied to the dot products before Softmax.\\n\\n💡 Subject-Related Example:\\nFor key dimension d_k = 64, multiplying two 64-dimensional vectors produces dot products with variance 64 and standard deviation √64 = 8. Dividing by √64 = 8 scales the scores back to unit variance 1.0, keeping values in the active, steep gradient region of Softmax.\\n\\n🚀 Real-World AI Use Case:\\nUsed in the self-attention layers of all Transformer models (BERT, GPT-4, LLaMA-3). Without √d_k scaling, large dot products would push Softmax into flat saturated tails, causing vanishing gradients that freeze backpropagation during training.\",\r\n22:       \"why_we_need_it\": \"Without dividing by √d_k, as vector size d_k grows, dot-product numbers become huge (e.g. +80 or -50). When huge numbers enter Softmax, Softmax saturates: it outputs 1.0 for the highest number and 0.0 for everything else. In these flat regions, gradients become virtually zero (vanishing gradient problem), which completely freezes neural network learning!\",\r\n23:       \"how_it_works\": \"• Step 1: Multiply Query vector by Key vector (q · k = q₁k₁ + ... + q_d k_d).\\n• Step 2: Assuming vector components have mean 0 and variance 1, the raw dot product has variance equal to d_k and standard deviation √d_k.\\n• Step 3: Divide by √d_k. For d_k = 64, we divide by √64 = 8. This pulls variance back to exactly 1.0, keeping Softmax in its sensitive, steep gradient zone.\",\r\n24:       \"formula\": \"Attention(Q, K, V) = Softmax( (Q · Kᵀ) / √d_k ) · V\",\r\n25:       \"key_takeaways\": [\r\n26:         \"⭐ Primary Purpose: Prevents dot products from growing large and causing Softmax saturation (vanishing gradients).\",\r\n27:         \"⭐ Numerical Rule: For key dimension d_k = 64, divide by √64 = 8 (multiply by 1/8 = 0.125).\",\r\n28:         \"⭐ Variance Control: Reduces dot-product variance from d_k back to 1.0.\"\r\n29:       ]\r\n30:     },\r\n31:     \"sample_questions\": [\r\n32:       {\r\n33:         \"q\": \"If key dimension d_k = 64, what is the exact numerical scaling factor applied to Query · Key Transpose?\",\r\n34:         \"options\": [\r\n35:           \"1/8 (since √64 = 8)\",\r\n36:           \"1/64\",\r\n37:           \"1/16\",\r\n38:           \"1/32\"\r\n39:         ],\r\n40:         \"ans\": \"1/8 (since √64 = 8)\",\r\n41:         \"exp\": \"The divisor is √d_k = √64 = 8, so the multiplier is 1/8 = 0.125.\"\r\n42:       },\r\n43:       {\r\n44:         \"q\": \"What training failure happens if we omit √d_k when d_k is large?\",\r\n45:         \"options\": [\r\n46:           \"Softmax saturation causing vanishing gradients\",\r\n47:           \"Exploding activations in layer norm\",\r\n48:           \"Loss of positional awareness\",\r\n49:           \"Matrix dimension mismatch\"\r\n50:         ],\r\n51:         \"ans\": \"Softmax saturation causing vanishing gradients\",\r\n52:         \"exp\": \"Large inputs push softmax outputs into extreme tails where the slope (derivative) is almost zero.\"\r\n53:       }\r\n54:     ]\r\n55:   },\r\n56:   {\r\n57:     \"id\": \"q2\",\r\n58:     \"module_id\": \"mod1\",\r\n59:     \"module_name\": \"Module 1: Scaled Dot-Product & Self-Attention Fundamentals\",\r\n60:     \"syllabus_lec\": \"Lectures 24-25 & 32-33\",\r\n61:     \"topic\": \"Role of Softmax in Converting Attention Scores to Probability Weights\",\r\n62:     \"difficulty\": \"Easy\",\r\n63:     \"points\": 1,\r\n64:     \"question\": \"After attention scores are computed for a query, what is the main role of softmax?\",\r\n65:     \"options\": [\r\n66:       \"Convert the scores into normalized attention weights\",\r\n67:       \"Project the query into the model vocabulary\",\r\n68:       \"Create a positional index for each token\",\r\n69:       \"Freeze the key and value projections\"\r\n70:     ],\r\n71:     \"correct\": \"Convert the scores into normalized attention weights\",\r\n72:     \"explanation\": \"Softmax transforms raw attention dot-product scores into a normalized probability distribution where all weights are non-negative and sum to exactly 1.0 across the sequence positions.\",\r\n73:     \"theory\": {\r\n74:       \"title\": \"Softmax Normalization in Attention Routing\",\r\n75:       \"what_is_it\": \"Softmax is an activation function that converts raw dot-product similarity scores (logits) into a normalized probability distribution where every value is non-negative (between 0.0 and 1.0) and all weights across the sequence sum to exactly 1.0 (100%).\\n\\n💡 Subject-Related Example:\\nIn the sentence 'The animal didn't cross the street because it was tired', the Query for 'it' computes raw scores against all words. Softmax transforms raw scores [+4.2, -1.8, +0.1] into probabilities [0.72, 0.04, 0.24], assigning 72% attention weight to 'animal'.\\n\\n🚀 Real-World AI Use Case:\\nEnables differentiable soft routing of information across tokens in all attention layers, allowing neural networks to learn which words to focus on via gradient descent.\",\r\n76:       \"why_we_need_it\": \"The dot product produces arbitrary raw numbers like +8.4, -3.2, 0.0. To blend word meanings proportionally, we need non-negative weights that act as valid percentages summing to 1.0.\",\r\n77:       \"how_it_works\": \"• Step 1: Exponentiate each score e^(Score). This turns all negative numbers positive.\\n• Step 2: Sum all exponentials across the row (Sum = Σ e^z_j).\\n• Step 3: Divide each e^(Score) by the Sum. Each result is between 0.0 and 1.0, and the entire row sum is exactly 1.0.\",\r\n78:       \"formula\": \"α_i = exp(Score_i) / Σ_j exp(Score_j), where Σ α_i = 1.0 (100%)\",\r\n79:       \"key_takeaways\": [\r\n80:         \"⭐ Normalization: Ensures attention weights are non-negative and sum to exactly 1.0 across the sequence.\",\r\n81:         \"⭐ Differentiability: Unlike 'hard argmax' (which just picks 1 word and gives 0 gradient), Softmax provides smooth gradients for backpropagation.\",\r\n82:         \"⭐ Exponential Property: Exponential scaling naturally emphasizes strong matches while still assigning small non-zero weights to relevant context.\"\r\n83:       ]\r\n84:     },\r\n85:     \"sample_questions\": [\r\n86:       {\r\n87:         \"q\": \"What is the mathematical sum of the attention weights assigned by one query across all tokens in a sequence?\",\r\n88:         \"options\": [\r\n89:           \"Always exactly 1.0 (100%)\",\r\n90:           \"Depends on sequence length N\",\r\n91:           \"Equal to d_model\",\r\n92:           \"Zero\"\r\n93:         ],\r\n94:         \"ans\": \"Always exactly 1.0 (100%)\",\r\n95:         \"exp\": \"Softmax normalizes the row so all probabilities sum to 1.0.\"\r\n96:       },\r\n97:       {\r\n98:         \"q\": \"Why is Softmax used instead of hard argmax (picking the single highest score)?\",\r\n99:         \"options\": [\r\n100:           \"Softmax is differentiable allowing backpropagation, while argmax has zero gradient\",\r\nThe above content does NOT show the entire file contents. If you need to view any lines of the file which were not shown to complete your task, call this tool again to view those lines.\n"}
const path = require('path');
const vm = require('vm');

const baseDir = 'c:/Users/Asus/Downloads/CSE AI 5th Sem/AGAI/AGAIMcqs';
const quizPath = path.join(baseDir, 'quiz_questions.js');
const syllabusPath = path.join(baseDir, 'syllabus.js');

// 1. Read existing quiz questions
const quizCode = fs.readFileSync(quizPath, 'utf8');
const ctx = {};
vm.createContext(ctx);
const existingQuestions = vm.runInContext(quizCode + '\n;QUIZ_QUESTIONS;', ctx);
console.log('Existing questions count:', existingQuestions.length);

// 2. Define the 15 Mock Test 1 questions with full rich pedagogy
const newQuestions = [
  // --- MODULE 2 (MHA, Lecture 26) ---
  {
    "id": "q_mt1_18",
    "module_id": "mod2",
    "module_name": "Module 2: Multi-Head Attention (MHA) Mechanism",
    "syllabus_lec": "Lecture 26",
    "topic": "Multi-Head Attention Projection Subspaces",
    "difficulty": "Medium",
    "points": 1,
    "question": "Why can multi-head attention represent relationships that may be harder for a single head of the same total dimension to capture?",
    "options": [
      "Different heads learn separate projection subspaces before their outputs are combined",
      "Different heads use identical projections but apply different softmax functions",
      "Each head attends to a fixed non-overlapping part of the sequence",
      "Each head receives a different positional encoding length for the same tokens"
    ],
    "correct": "Different heads learn separate projection subspaces before their outputs are combined",
    "explanation": "Multi-head attention projects the input embeddings into multiple lower-dimensional representation subspaces in parallel (e.g., h = 8 or 12 heads of dimension d_k = d_model / h). Each head possesses its own learned projection matrices (W_Q^i, W_K^i, W_V^i), allowing different heads to simultaneously focus on distinct linguistic and semantic relationships (such as syntactic dependencies, coreference resolution, and verb-argument structures). A single large attention head averages all interactions together into a single distribution, losing these nuanced, multi-faceted subspace interactions.",
    "theory": {
      "title": "Representation Subspaces in Multi-Head Attention",
      "what_is_it": "Instead of performing a single attention function with d_model-dimensional queries, keys, and values, Multi-Head Attention linearly projects queries, keys, and values h times with different, learned linear projections to dimensions d_k, d_k, and d_v. On each of these projected versions, the attention function is performed in parallel, producing d_v-dimensional output values that are concatenated and projected again.\n\n💡 Subject-Related Example:\nIn the sentence 'The server crashed because it overloaded', Head 1 might focus on the syntactic relationship between the verb 'crashed' and subject 'server', while Head 2 focuses on coreference linking pronoun 'it' to antecedent 'server', and Head 3 attends to causal structure ('because').\n\n🚀 Real-World AI Use Case:\nIn modern LLMs like GPT-4 and Claude 3.5 Sonnet, multi-head attention allows the model to simultaneously maintain grammatical parsing, factual lookups, and conversational context across long contexts.",
      "why_we_need_it": "With a single attention head, the softmax operation forces the model to choose a single set of attention weights across the entire sequence. If token A needs to attend to token B for syntax and token C for semantic meaning, a single head must compromise. Multiple heads divide and conquer across orthogonal subspaces.",
      "how_it_works": "• Step 1: Input X (N × d_model) is multiplied by h distinct parameter matrices W_Q^i, W_K^i, W_V^i to obtain head_i projections of dimension d_k = d_model / h.\n• Step 2: Each head independently computes scaled dot-product attention: head_i = Softmax(Q_i · K_iᵀ / √d_k) · V_i.\n• Step 3: All h outputs (each N × d_k) are concatenated horizontally along the feature dimension to form an N × (h · d_k) = N × d_model matrix.\n• Step 4: Multiplied by final output projection matrix W_O (d_model × d_model) to synthesize multi-subspace features.",
      "formula": "MultiHead(Q, K, V) = Concat(head₁, ..., head_h) W^O, \\quad \\text{where } head_i = Attention(Q W_i^Q, K W_i^K, V W_i^V)",
      "key_takeaways": [
        "⭐ Parallel Subspaces: Each head operates in a unique learned linear projection subspace.",
        "⭐ Multi-Aspect Focus: Different heads simultaneously capture syntax, semantics, coreference, and long-range dependencies.",
        "⭐ Computational Invariance: Total computational cost matches single-head attention because each head dimension is scaled down to d_k = d_model / h."
      ]
    },
    "sample_questions": [
      {
        "q": "What allows different attention heads in MHA to specialize in different types of linguistic relationships?",
        "options": [
          "Independent learned projection weight matrices (W_Q, W_K, W_V) for each head",
          "Different learning rates assigned to each head",
          "Applying different activation functions per head",
          "Masking out different tokens for each head"
        ],
        "ans": "Independent learned projection weight matrices (W_Q, W_K, W_V) for each head",
        "exp": "Each head has its own projection weights, allowing it to project tokens into distinct representation subspaces."
      },
      {
        "q": "If a single attention head was used with full dimension d_model, what primary capability is diminished?",
        "options": [
          "The ability to attend to information from different representation subspaces simultaneously",
          "The ability to compute dot products",
          "The ability to use positional encodings",
          "The ability to perform backpropagation"
        ],
        "ans": "The ability to attend to information from different representation subspaces simultaneously",
        "exp": "A single head produces only one attention distribution, averaging out multifaceted relationships."
      }
    ]
  },
  {
    "id": "q_mt1_38",
    "module_id": "mod2",
    "module_name": "Module 2: Multi-Head Attention (MHA) Mechanism",
    "syllabus_lec": "Lecture 26",
    "topic": "Head Dimension ($d_{head}$) and Attention Score Matrix Size",
    "difficulty": "Medium",
    "points": 1,
    "question": "A Transformer has d_model = 768, 12 equal-sized attention heads, and sequence length 100. Which pair correctly gives the dimension per head and the attention-score matrix size per head?",
    "options": [
      "64 and 100 × 100",
      "64 and 100 × 64",
      "768 and 100 × 100",
      "768 and 100 × 64"
    ],
    "correct": "64 and 100 × 100",
    "explanation": "1. Dimension per head: d_head = d_k = d_model / h = 768 / 12 = 64.\n2. Attention score matrix size per head: Attention scores are computed by multiplying Query (shape: sequence_length × d_k = 100 × 64) by Key Transpose (shape: d_k × sequence_length = 64 × 100). The resulting attention score matrix has shape sequence_length × sequence_length = 100 × 100 for each head.",
    "theory": {
      "title": "Attention Head Dimension & Score Matrix Shape Calculation",
      "what_is_it": "In Multi-Head Attention, the total model hidden dimension d_model is evenly split across h heads. Each head operates on projection vectors of dimension d_head = d_model / h. When computing attention, each of the N tokens compares against all N tokens, producing an N × N score matrix per head.\n\n💡 Subject-Related Example:\nIn BERT-Base: d_model = 768, h = 12 heads. Each head has dimension d_k = 768 / 12 = 64. For a sentence of length N = 100, each head produces a 100 × 100 attention matrix. Across all 12 heads, there are 12 separate 100 × 100 matrices.\n\n🚀 Real-World AI Use Case:\nCrucial for calculating memory allocation and GPU kernel grid shapes in FlashAttention and PyTorch transformer implementations.",
      "why_we_need_it": "Understanding tensor shapes is essential to avoid out-of-memory errors and verify matrix multiplication compatibility in transformer layers.",
      "how_it_works": "• Step 1: Head dimension = d_model / num_heads = 768 / 12 = 64.\n• Step 2: Per-head Q shape: (N × d_k) = (100 × 64).\n• Step 3: Per-head Kᵀ shape: (d_k × N) = (64 × 100).\n• Step 4: Q · Kᵀ shape: (100 × 64) × (64 × 100) = (100 × 100).",
      "formula": "d_{\\text{head}} = \\frac{d_{\\text{model}}}{h} = \\frac{768}{12} = 64, \\quad \\text{Score Matrix Shape} = N \\times N = 100 \\times 100",
      "key_takeaways": [
        "⭐ Per-Head Feature Dimension: d_head = d_model / h (e.g. 768 / 12 = 64).",
        "⭐ Attention Score Matrix: Always N × N where N is sequence length, regardless of head dimension.",
        "⭐ Output Projection: Concatenating h outputs of (N × d_head) restores the original (N × d_model) shape."
      ]
    },
    "sample_questions": [
      {
        "q": "If d_model = 1024, num_heads = 16, and sequence length = 50, what is the head dimension and per-head attention score matrix shape?",
        "options": [
          "64 and 50 × 50",
          "64 and 50 × 64",
          "1024 and 50 × 50",
          "16 and 50 × 50"
        ],
        "ans": "64 and 50 × 50",
        "exp": "Dimension per head = 1024 / 16 = 64; score matrix shape = 50 × 50."
      },
      {
        "q": "Does the attention score matrix shape depend on d_model?",
        "options": [
          "No, it depends strictly on sequence length N (shape is N × N)",
          "Yes, it is d_model × d_model",
          "Yes, it is N × d_model",
          "Only in decoder layers"
        ],
        "ans": "No, it depends strictly on sequence length N (shape is N × N)",
        "exp": "The attention score matrix represents pairwise similarities between all tokens in the sequence, so its shape is always N × N."
      }
    ]
  },
  {
    "id": "q_mt1_40",
    "module_id": "mod2",
    "module_name": "Module 2: Multi-Head Attention (MHA) Mechanism",
    "syllabus_lec": "Lecture 26",
    "topic": "Multi-Head Attention Tensor Shapes Calculation",
    "difficulty": "Hard",
    "points": 1,
    "question": "A self-attention layer receives a sequence of length 40 with d_model = 512 and 8 equal heads. Which set of shapes is consistent with standard multi-head attention?",
    "options": [
      "Per-head Q: 40 × 64, per-head scores: 40 × 40, concatenated output: 40 × 512",
      "Per-head Q: 40 × 512, per-head scores: 40 × 64, concatenated output: 40 × 512",
      "Per-head Q: 64 × 40, per-head scores: 64 × 64, concatenated output: 40 × 64",
      "Per-head Q: 40 × 64, per-head scores: 64 × 64, concatenated output: 40 × 512"
    ],
    "correct": "Per-head Q: 40 × 64, per-head scores: 40 × 40, concatenated output: 40 × 512",
    "explanation": "Let sequence length N = 40, d_model = 512, and number of heads h = 8:\n1. Head dimension: d_k = d_model / h = 512 / 8 = 64.\n2. Per-head Query matrix Q_i: sequence_length × d_k = 40 × 64.\n3. Per-head attention scores (Q_i · K_iᵀ): (40 × 64) × (64 × 40) = 40 × 40.\n4. Per-head value output (Scores · V_i): (40 × 40) × (40 × 64) = 40 × 64.\n5. Concatenated multi-head output: 8 heads concatenated horizontally = 40 × (8 × 64) = 40 × 512.",
    "theory": {
      "title": "Tensor Shape Transformations Across Multi-Head Attention Pipeline",
      "what_is_it": "Tracking tensor dimensions through the Multi-Head Attention pipeline is fundamental to understanding Transformer mechanics. Input X has shape (N, d_model). Linear projections slice into h heads of shape (N, d_k). Dot products produce (N, N) score matrices. Concatenation reassembles (N, h · d_k) = (N, d_model).\n\n💡 Subject-Related Example:\nInput sequence: N = 40 tokens, d_model = 512, h = 8 heads.\n• Each head Q_i, K_i, V_i: (40, 64)\n• Raw attention scores Q_i · K_iᵀ: (40, 40)\n• Softmax probabilities α_i: (40, 40)\n• Head output α_i · V_i: (40, 64)\n• Concatenated all 8 heads: (40, 512)\n• Final projection W_O (512, 512): Output is (40, 512).\n\n🚀 Real-World AI Use Case:\nEssential for GPU tensor operations in PyTorch (e.g. view, transpose, bmm) when building custom Transformer architectures.",
      "why_we_need_it": "Mismatch in tensor dimensions is the #1 debugging challenge in deep learning architectures. Verifying dimension flow guarantees matrix compatibility.",
      "how_it_works": "• Step 1: d_k = d_model / h = 512 / 8 = 64.\n• Step 2: Project X (40 × 512) with W_Q^i (512 × 64) -> Q_i (40 × 64).\n• Step 3: Compute attention matrix Q_i · K_iᵀ -> Scores (40 × 40).\n• Step 4: Multiply by V_i (40 × 64) -> Head_i (40 × 64).\n• Step 5: Concat 8 heads along feature axis -> (40 × 512).",
      "formula": "Q_i \\in \\mathbb{R}^{N \\times d_k}, \\quad S_i = Q_i K_i^T \\in \\mathbb{R}^{N \\times N}, \\quad \\text{Concat}(\\text{heads}) \\in \\mathbb{R}^{N \\times (h \\cdot d_k)}",
      "key_takeaways": [
        "⭐ Per-head Query/Key/Value: Shape is (N × d_k), here (40 × 64).",
        "⭐ Per-head Attention Scores: Shape is always (N × N), here (40 × 40).",
        "⭐ Concatenated Output: Restores original model dimension (N × d_model), here (40 × 512)."
      ]
    },
    "sample_questions": [
      {
        "q": "For a sequence of length 20, d_model = 256, and 4 heads, what is the shape of the per-head attention score matrix?",
        "options": [
          "20 × 20",
          "20 × 64",
          "64 × 64",
          "20 × 256"
        ],
        "ans": "20 × 20",
        "exp": "Attention score matrix is always sequence length × sequence length (20 × 20)."
      },
      {
        "q": "What is the shape of the per-head value matrix V_i for sequence length 20, d_model = 256, and 4 heads?",
        "options": [
          "20 × 64",
          "20 × 256",
          "64 × 20",
          "256 × 64"
        ],
        "ans": "20 × 64",
        "exp": "d_k = d_model / h = 256 / 4 = 64. V_i has shape sequence length × d_k = 20 × 64."
      }
    ]
  },

  // --- MODULE 3 (Transformer Architecture Deep-Dive, Lectures 27–28) ---
  {
    "id": "q_mt1_19",
    "module_id": "mod3",
    "module_name": "Module 3: Transformer Architecture Deep-Dive",
    "syllabus_lec": "Lectures 27–28",
    "topic": "Layer Normalization Token Independence",
    "difficulty": "Medium",
    "points": 1,
    "question": "A Transformer uses layer normalization within its blocks. Which normalization behaviour is most consistent with layer normalization in sequence models?",
    "options": [
      "Normalize hidden features of each token independently of other batch examples",
      "Normalize each feature using statistics collected across the complete dataset",
      "Normalize attention heads using one shared statistic across the training batch",
      "Normalize only the final class probabilities after the softmax layer"
    ],
    "correct": "Normalize hidden features of each token independently of other batch examples",
    "explanation": "Layer Normalization (LayerNorm) computes mean and variance across the hidden channel feature dimension (d_model) for each individual token position independently of all other examples in the mini-batch and independent of other sequence positions. Unlike Batch Normalization (which depends on batch statistics and fails with variable sequence lengths or small batch sizes), LayerNorm operates identically during both training and inference without requiring running batch statistics.",
    "theory": {
</html>
</html>
</html>
</html>


        "options": [
          "65,536",
          "32,768",
          "16,777,216",
          "131,072"
        ],
        "ans": "65,536",
        "exp": "8 × (4096 + 4096) = 8 × 8192 = 65,536 parameters."
      },
      {
        "q": "What happens to the total number of LoRA parameters if rank r is doubled from 4 to 8?",
        "options": [
          "The number of trainable adapter parameters exactly doubles",
          "The parameter count quadruples",
          "The parameter count remains unchanged",
          "The parameter count increases exponentially"
        ],
        "ans": "The number of trainable adapter parameters exactly doubles",
        "exp": "Because parameter count is linear with r (params = r × (d_in + d_out)), doubling r exactly doubles the parameters."
      }
    ]
  }
];
