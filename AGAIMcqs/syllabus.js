const SYLLABUS_MODULES = [
  {
    "id": "mod1",
    "num": 1,
    "title": "Module 1: Scaled Dot-Product & Self-Attention Fundamentals",
    "lectures": "Lectures 24-25 & 32-33",
    "desc": "Foundational attention mechanism: Query, Key, Value routing, Softmax normalization, and 1/√d_k variance scaling.",
    "topics": [
      "Why Scaled Dot-Product Uses the 1/√d_k Normalizing Factor",
      "Role of Softmax in Converting Attention Scores to Probability Weights",
      "Value Vector Aggregation via Attention Weights",
      "Linear Projections for Query (Q), Key (K), and Value (V)",
      "Quadratic Computational Complexity O(N²) in Self-Attention"
    ],
    "q_ids": [
      "q1",
      "q2",
      "q3",
      "q4",
      "q11"
    ]
  },
  {
    "id": "mod2",
    "num": 2,
    "title": "Module 2: Multi-Head Attention (MHA) Mechanism",
    "lectures": "Lecture 26",
    "desc": "Running multiple attention heads in parallel to capture distinct linguistic and semantic relationships simultaneously.",
    "topics": [
      "Concatenation of Multiple Attention Heads & Output Linear Projection",
      "Per-Head Feature Dimension Calculation (d_k = d_model / h)",
      "Multi-Head Attention Projection Subspaces (Capturing Diverse Linguistic Relationships)",
      "Head Dimension and Attention Score Matrix Size ($d_{head}$ and $N \\times N$)",
      "Multi-Head Attention Intermediate Tensor Shapes Calculation"
    ],
    "q_ids": [
      "q5",
      "q12",
      "q_mt1_18",
      "q_mt1_38",
      "q_mt1_40"
    ]
  },
  {
    "id": "mod3",
    "num": 3,
    "title": "Module 3: Transformer Architecture Deep-Dive",
    "lectures": "Lectures 27-28",
    "desc": "Internal mechanics: LayerNorm, Residual Skip Connections, Position-wise Feed-Forward Networks, Cross-Attention, and Causal/Padding Masks.",
    "topics": [
      "Purpose of Padding Mask (Ignoring Non-Content Padding Tokens)",
      "Bidirectional Context Awareness in Standard Transformer Encoders",
      "Residual (Skip) Connections & Feature Dimension Matching",
      "Position-Wise Feed-Forward Network (FFN) Operation",
      "Cross-Attention Score Matrix Dimensions (Decoder Queries × Encoder Keys)",
      "Cross-Attention Source Routing (Keys and Values from Encoder)",
      "Layer Normalization (LayerNorm) for Activation Stability",
      "Residual Connection as an Uninterrupted Gradient Highway",
      "Causal (Autoregressive) Self-Attention Masking",
      "Parallel Training with Triangular Causal Masks (Teacher Forcing)",
      "Pre-Softmax Logit Masking using Large Negative Values (-∞)",
      "Token Independence in the Position-Wise Feed-Forward Sublayer",
      "Layer Normalization Token Independence (Normalizing Features Across Channels Without Batch Inter-dependence)",
      "Position-Wise Feed-Forward Sublayer Application Across Sequence Positions"
    ],
    "q_ids": [
      "q6",
      "q7",
      "q8",
      "q10",
      "q13",
      "q14",
      "q15",
      "q16",
      "q17",
      "q18",
      "q19",
      "q20",
      "q_mt1_19",
      "q_mt1_20"
    ]
  },
  {
    "id": "mod4",
    "num": 4,
    "title": "Module 4: Positional Encoding & Sequence Modeling",
    "lectures": "Lectures 29-30",
    "desc": "Injecting word order and 2D spatial coordinates into permutation-equivariant attention blocks.",
    "topics": [
      "Why Self-Attention Requires Positional Information (Permutation Equivariance)",
      "2D Spatial Coordinate Representation in Vision Transformers",
      "Position-Dependent Encodings for Resolving Sequence Permutation Equivariance"
    ],
    "q_ids": [
      "q9",
      "q32",
      "q_mt1_21"
    ]
  },
  {
    "id": "mod5",
    "num": 5,
    "title": "Module 5: Vision Transformers (ViT, Swin, CaiT)",
    "lectures": "Lecture 31",
    "desc": "Applying Transformers to images: Patch extraction, linear projection, [CLS] classification tokens, and global receptive fields.",
    "topics": [
      "Image Patch Partitioning Formula (16×16 Patches on 224×224 Image)",
      "Encoder Sequence Length with the Added [CLS] Classification Token",
      "Image Patch Partitioning with Larger Patches (32×32 Patches)",
      "Effect of Halving Patch Size on Total Token Count (Inverse Quadratic Law)",
      "Flattened Patch Dimensionality Calculation (Height × Width × Channels = 768)",
      "Role of Linear Patch Projection in Mapping Pixels to Transformer Hidden Space",
      "Total Number of Positional Embeddings Required (N patches + 1 [CLS])",
      "Nature and Initialization of the Learned [CLS] Token",
      "Global Receptive Field in Vision Transformers vs Local CNN Filters",
      "Effect of Doubling Image Resolution on Patch Token Count",
      "Computational Bottleneck of Small Patches and Shifted Windows (Swin)",
      "Primary Function of Linear Patch Projection",
      "Independence of Patch Count from Transformer Hidden Size",
      "ViT Patch Sequence Length Calculation (192×192 Image with [CLS] Token)",
      "Swin Transformer Shifted Window Mechanism for Cross-Boundary Attention"
    ],
    "q_ids": [
      "q21",
      "q22",
      "q23",
      "q24",
      "q25",
      "q26",
      "q27",
      "q28",
      "q29",
      "q30",
      "q31",
      "q33",
      "q34",
      "q_mt1_22",
      "q_mt1_23"
    ]
  },
  {
    "id": "mod6",
    "num": 6,
    "title": "Module 6: LLM Architecture & Autoregressive Pre-training",
    "lectures": "Lectures 33-35",
    "desc": "Decoder-only LLMs (GPT): Next-token prediction, shifted targets, token embeddings, and sampling methods (Temperature, Top-k, Top-p).",
    "topics": [
      "Autoregressive Probability Factorization (Chain Rule of Next-Token Prediction)",
      "Shifted Target Alignment in Next-Token Training",
      "Autoregressive Generation Loop & KV Caching",
      "Temperature Scaling for Controlling Randomness vs Determinism",
      "Top-k Sampling (Restricting to the k Most Likely Tokens)",
      "Top-p (Nucleus) Dynamic Cumulative Probability Sampling",
      "End-of-Sequence (EOS) Token for Natural Generation Termination",
      "Context Window Boundary & Handling History Overflow",
      "Token ID to Continuous Vector Embedding Lookup",
      "Decoder-Only Architecture Characteristics (Absence of Cross-Attention)",
      "The Two-Stage Paradigm: Self-Supervised Pre-training followed by Fine-Tuning",
      "GPT-Style Decoder-Only Next-Token Prediction Objective",
      "Pre-Training Negative Log-Likelihood (NLL) Loss Calculation from Token Probabilities"
    ],
    "q_ids": [
      "q35",
      "q36",
      "q37",
      "q38",
      "q39",
      "q40",
      "q41",
      "q42",
      "q43",
      "q44",
      "q45",
      "q_mt1_24",
      "q_mt1_43"
    ]
  },
  {
    "id": "mod7",
    "num": 7,
    "title": "Module 7: Prompt Engineering Fundamentals",
    "lectures": "Lectures 35-37",
    "desc": "Steering LLMs effectively: Zero-Shot, Few-Shot In-Context Learning, Roles, XML Delimiters, JSON constraints, and Meta-Prompting.",
    "topics": [
      "Explicit Formatting & Column Constraints for Predictable Output",
      "Delimiters for Clean Separation of Instructions from User Data",
      "Zero-Shot Prompting (Direct Task Instruction Without Examples)",
      "Iterative Prompt Refinement (Conversational Feedback Loops)",
      "Few-Shot In-Context Learning (Demonstrating Input-Output Patterns)",
      "Context Grounding & Prompt Enrichment for Domain Accuracy",
      "Role & Persona Prompting (System Level Guidance)",
      "Prompt Templates & Parameterization for Software Reusability",
      "Ambiguity Reduction via Structured Outputs (JSON Schema)",
      "Enforcing Length & Concrete Boundary Constraints",
      "Meta-Prompting (Prompting an LLM to Design and Optimize Prompts)",
      "Zero-Shot Prompting Foundations & In-Context Execution",
      "Few-Shot Prompting with Demonstrations for Format Alignment",
      "Prompt Formatting & Output Template Design for Structured Responses"
    ],
    "q_ids": [
      "q46",
      "q47",
      "q48",
      "q49",
      "q50",
      "q51",
      "q52",
      "q53",
      "q54",
      "q55",
      "q56",
      "q_mt1_25",
      "q_mt1_26",
      "q_mt1_42"
    ]
  },
  {
    "id": "mod8",
    "num": 8,
    "title": "Module 8: Fine-Tuning & Parameter-Efficient Adaptation (LoRA & PEFT)",
    "lectures": "Lectures 36-37",
    "desc": "Adapting foundation models: Freezing base weights, Low-Rank Decomposition (ΔW = B·A), rank-r math, multi-adapters, and weight merging.",
    "topics": [
      "PEFT vs Full Fine-Tuning (Why We Train <1% Parameters)",
      "Base Model Weight Freezing in LoRA to Save GPU VRAM",
      "Low-Rank Matrix Decomposition (ΔW = B · A)",
      "Linear Parameter Scaling with Rank r (Params = r × (d_in + d_out))",
      "Exact LoRA Parameter Calculation (4096×4096 Layer at Rank 8)",
      "Exact LoRA Parameter Calculation (1024×1024 Layer at Rank 4)",
      "Effect of Doubling Rank r on Trainable Adapter Parameters",
      "Multi-Adapter Serving & Storage Efficiency on a Shared Base Model",
      "Weight Merging for Zero Inference Latency Overhead",
      "LoRA Multi-Task Adapter Architecture with Frozen Base Model",
      "LoRA Trainable Parameter Count Calculation (2048 × 1024 at Rank 4)"
    ],
    "q_ids": [
      "q57",
      "q58",
      "q59",
      "q60",
      "q61",
      "q62",
      "q63",
      "q64",
      "q65",
      "q_mt1_27",
      "q_mt1_41"
    ]
  }
];

// ============================================================================
// ST-1 COMPLETE SYLLABUS ROADMAP (Lectures 1–25)
// ============================================================================
const ST1_SYLLABUS_MODULES = [
  {
    "id": "st1_mod1",
    "num": 1,
    "title": "Module 1: Introduction to Neural Networks",
    "lectures": "Lectures 1–2",
    "desc": "Biological inspiration, Perceptrons, decision boundaries, and linear classifiers.",
    "topics": [
      "Biological Inspiration & Artificial Neuron Structure",
      "Perceptrons & Mathematical Formulation",
      "Linear Classifiers & Hyperplane Decision Boundaries",
      "Perceptron Learning Rule & Convergence Foundations",
      "Perceptron Weight Update Calculation (Lect 1–2)"
    ],
    "q_ids": [
      "st1_q1",
      "st1_q65"
    ]
  },
  {
    "id": "st1_mod2",
    "num": 2,
    "title": "Module 2: Limitations of the Perceptron & MLP Architecture",
    "lectures": "Lecture 3",
    "desc": "Limitations of the Perceptron (XOR problem), motivation and architecture of Multi-Layer Networks (MLPs).",
    "topics": [
      "Linear Separability Constraint & The XOR Problem Failure",
      "Motivation for Hidden Layers & Non-Linear Mapping",
      "Multi-Layer Networks (MLPs) Architecture & Capabilities",
      "Limitations of Linear/Affine Activations in MLPs (Lect 3)"
    ],
    "q_ids": [
      "st1_q2",
      "st1_q67",
      "st1_q77"
    ]
  },
  {
    "id": "st1_mod3",
    "num": 3,
    "title": "Module 3: MLP Forward Pass & Network Representation",
    "lectures": "Lecture 4",
    "desc": "MLP forward pass, weight initialization, and network representation.",
    "topics": [
      "Layer-by-Layer Forward Pass Computation",
      "Matrix Representation of Weights, Biases, and Activations",
      "Weight Initialization Strategies (Zero, Random, Xavier/He)",
      "Weight Initialization (He-Style for ReLU) (Lect 4)",
      "MLP Forward Pass Computation (Lect 4)",
      "Fully Connected Network Trainable Parameter Calculation (Lect 4)"
    ],
    "q_ids": [
      "st1_q3",
      "st1_q31",
      "st1_q33",
      "st1_q57",
      "st1_q62",
      "st1_q84"
    ]
  },
  {
    "id": "st1_mod4",
    "num": 4,
    "title": "Module 4: Backpropagation Algorithm & Gradient Descent",
    "lectures": "Lectures 5–6",
    "desc": "Backpropagation algorithm; Gradient Descent, Stochastic and Mini-Batch variants.",
    "topics": [
      "Backpropagation Algorithm & Multivariate Chain Rule",
      "Batch Gradient Descent Mechanics",
      "Stochastic Gradient Descent (SGD) Updates",
      "Mini-Batch Gradient Descent Variants & Vectorization",
      "Mini-Batch Gradient Descent / Epoch Calculations (Lect 5–6)",
      "Gradient Descent Learning Rate Tuning (Lect 5–6)",
      "Single-Neuron Gradient Descent Step (Lect 5–6)"
    ],
    "q_ids": [
      "st1_q5",
      "st1_q7",
      "st1_q32",
      "st1_q55",
      "st1_q69",
      "st1_q71",
      "st1_q75",
      "st1_q76",
      "st1_q80",
      "st1_q81",
      "st1_q85"
    ]
  },
  {
    "id": "st1_mod5",
    "num": 5,
    "title": "Module 5: Activation Functions & Loss Functions",
    "lectures": "Lecture 7",
    "desc": "Activation Functions (Sigmoid, Tanh, ReLU, Softmax) and Loss Functions.",
    "topics": [
      "Sigmoid & Tanh Activation Characteristics",
      "ReLU & Leaky ReLU (Mitigating Vanishing Gradients)",
      "Softmax Activation for Categorical Probability Distributions",
      "Loss Functions: MSE, Binary Cross-Entropy, Categorical Cross-Entropy",
      "Vanishing Gradient / Sigmoid Saturation (Lect 7)",
      "Softmax Translation Invariance / Loss Functions (Lect 7)"
    ],
    "q_ids": [
      "st1_q4",
      "st1_q6",
      "st1_q54",
      "st1_q58",
      "st1_q68",
      "st1_q74"
    ]
  },
  {
    "id": "st1_mod6",
    "num": 6,
    "title": "Module 6: Hands-on: NumPy Implementation",
    "lectures": "Lectures 8–10",
    "desc": "Hands-on: NumPy implementation of forward and backward passes.",
    "topics": [
      "NumPy Implementation of Vectorized Forward Pass",
      "NumPy Implementation of Backward Pass & Gradients",
      "Weight Updates & Loss History Tracking",
      "Building an End-to-End Neural Network without Deep Learning Libraries"
    ],
    "q_ids": [
      "st1_q49",
      "st1_q50",
      "st1_q59",
      "st1_q61",
      "st1_q89",
      "st1_q92"
    ]
  },
  {
    "id": "st1_mod7",
    "num": 7,
    "title": "Module 7: Convolutional Neural Networks (CNNs)",
    "lectures": "Lectures 11–12",
    "desc": "Introduction to Convolutional Neural Networks (CNNs): convolution, stride, padding, pooling and flattening layers.",
    "topics": [
      "2D Convolution Operations & Feature Extraction",
      "Stride and Receptive Field Dynamics",
      "Padding Techniques ('Valid' vs. 'Same')",
      "Pooling Layers (Max Pooling, Average Pooling)",
      "Flattening Layers & Transition to Dense Classification Heads",
      "CNN Spatial Output Dimension Calculation (Lect 11–12)",
      "Max Pooling Spatial Output and Properties (Lect 11–12)",
      "Convolutional Layer Trainable Parameter Calculation (Lect 11–12)",
      "Conv + Max Pooling Combined Output Size Calculation (Lect 11–12)"
    ],
    "q_ids": [
      "st1_q8",
      "st1_q9",
      "st1_q34",
      "st1_q35",
      "st1_q60",
      "st1_q64",
      "st1_q82",
      "st1_q86",
      "st1_q87",
      "st1_q88",
      "st1_q91"
    ]
  },
  {
    "id": "st1_mod8",
    "num": 8,
    "title": "Module 8: Overview of CNN Architectures",
    "lectures": "Lectures 13–14",
    "desc": "Overview of CNN architectures: LeNet, AlexNet, VGG, ResNet models.",
    "topics": [
      "LeNet Architecture: Historical Pioneer for Digit Recognition",
      "AlexNet Architecture: Deep ConvNets & GPU Acceleration",
      "VGG Models: Small 3×3 Filters & Deep Layer Stacking",
      "ResNet Models: Residual Learning & Skip Connections",
      "ResNet Identity Shortcuts for Degradation Problem (Lect 13–14)"
    ],
    "q_ids": [
      "st1_q10",
      "st1_q72",
      "st1_q90"
    ]
  },
  {
    "id": "st1_mod9",
    "num": 9,
    "title": "Module 9: Image Preprocessing & Data Augmentation",
    "lectures": "Lecture 15",
    "desc": "Image Preprocessing and Data Augmentation techniques.",
    "topics": [
      "Image Normalization, Standardization & Rescaling",
      "Geometric Augmentations (Flips, Rotations, Crops, Affine)",
      "Photometric Augmentations (Brightness, Contrast, Jitter)",
      "Data Augmentation as a Regularizer to Combat Overfitting",
      "Image Preprocessing for Pre-trained Backbones (Lect 15)",
      "Data Augmentation Strategy Selection (Lect 15)"
    ],
    "q_ids": [
      "st1_q11",
      "st1_q12",
      "st1_q70"
    ]
  },
  {
    "id": "st1_mod10",
    "num": 10,
    "title": "Module 10: Object Detection & Image Segmentation",
    "lectures": "Lectures 16–17",
    "desc": "Object Detection (R-CNN family, YOLO overview) and Image Segmentation.",
    "topics": [
      "Object Detection Foundations & Bounding Box Regression",
      "R-CNN Family Overview (R-CNN, Fast R-CNN, Faster R-CNN)",
      "YOLO Overview (Single-Stage Real-Time Object Detection)",
      "Intersection over Union (IoU) & Non-Maximum Suppression (NMS)",
      "Image Segmentation Principles (Semantic vs. Instance Segmentation)",
      "Object Detection Task Definition (Lect 16–17)",
      "Instance Segmentation Output Requirements (Lect 16–17)"
    ],
    "q_ids": [
      "st1_q13",
      "st1_q15",
      "st1_q56",
      "st1_q66",
      "st1_q73"
    ]
  },
  {
    "id": "st1_mod11",
    "num": 11,
    "title": "Module 11: Transfer Learning with Pre-trained Models",
    "lectures": "Lectures 18–19",
    "desc": "Transfer Learning with Pre-trained Models.",
    "topics": [
      "Foundations of Transfer Learning in Computer Vision",
      "Feature Extraction Mode (Freezing Pre-trained Weights)",
      "Fine-Tuning Mode & Learning Rate Selection",
      "Domain Adaptation from Large Datasets (ImageNet)",
      "Transfer Learning & Backbone Fine-Tuning Strategy (Lect 18–19)",
      "Backbone Fine-Tuning vs. Overfitting Trade-Off (Lect 18–19)"
    ],
    "q_ids": [
      "st1_q14",
      "st1_q36",
      "st1_q53"
    ]
  },
  {
    "id": "st1_mod12",
    "num": 12,
    "title": "Module 12: Hands-on: Building Image Classifiers with PyTorch",
    "lectures": "Lectures 20–21",
    "desc": "Hands-on: Building Image Classifiers with PyTorch.",
    "topics": [
      "PyTorch Tensors, CUDA Acceleration & Autograd",
      "Defining CNN Models using torch.nn.Module",
      "Dataset & DataLoader Pipelines with torchvision",
      "Writing Complete Training, Evaluation, and Validation Loops"
    ],
    "q_ids": [
      "st1_q46",
      "st1_q47",
      "st1_q48",
      "st1_q78"
    ]
  },
  {
    "id": "st1_mod13",
    "num": 13,
    "title": "Module 13: Limitations of RNNs/CNNs with Attention Mechanism",
    "lectures": "Lectures 22–23",
    "desc": "Limitations of RNNs/CNNs for sequence modeling with Attention mechanism.",
    "topics": [
      "Sequential Processing Bottlenecks in RNNs and LSTMs",
      "Long-Range Dependency Degradation & Vanishing Gradients",
      "Receptive Field Constraints in CNNs for Sequence Modeling",
      "Emergence & Motivation of the Attention Mechanism"
    ],
    "q_ids": [
      "st1_q51",
      "st1_q52",
      "st1_q83"
    ]
  },
  {
    "id": "st1_mod14",
    "num": 14,
    "title": "Module 14: Self-Attention & Scaled Dot-Product Attention",
    "lectures": "Lectures 24–25",
    "desc": "Self-Attention and Scaled Dot-Product Attention mechanism along with their implementation in Python.",
    "topics": [
      "Self-Attention Architecture: Query (Q), Key (K), Value (V) Projections",
      "Scaled Dot-Product Attention Formula: softmax(QK^T / √d_k) V",
      "Why Scaling by 1/√d_k is Essential for Gradient Stability",
      "Hands-on Implementation of Scaled Dot-Product in Python",
      "Self-Attention Mechanism / Softmax Weights (Lect 24–25)",
      "Padding Mask in Sequence Models (Lect 24–25)",
      "Scaled Dot-Product Attention Softmax Computation (Lect 24–25)",
      "Quadratic Scaling Complexity (O(N^2)) of Self-Attention (Lect 24–25)"
    ],
    "q_ids": [
      "st1_q16",
      "st1_q17",
      "st1_q37",
      "st1_q39",
      "st1_q63",
      "st1_q79"
    ]
  }
];

// ============================================================================
// END-TERM COMPLETE SYLLABUS ROADMAP (Lectures 38–45)
// ============================================================================
const ENDTERM_SYLLABUS_MODULES = [
  {
    "id": "et_mod1",
    "num": 1,
    "title": "Module 1: Retrieval-Augmented Generation (RAG)",
    "lectures": "Lectures 38–39",
    "desc": "Retrieval-Augmented Generation (RAG): embeddings, vector stores and retrieval pipelines.",
    "topics": [
      "Motivation for RAG: Parametric vs. Non-Parametric Memory",
      "Mitigating Hallucinations in LLMs via Grounded Retrieval",
      "Text Embedding Models & High-Dimensional Semantic Spaces",
      "Document Chunking Strategies (Fixed-Size, Sliding-Window, Semantic)",
      "Vector Databases (Pinecone, ChromaDB, FAISS, Milvus)",
      "Vector Similarity Metrics (Cosine Similarity, Dot Product, Euclidean)",
      "End-to-End Retrieval Pipelines: Query Embedding, Top-k Search & Context Injection",
      "RAG Pipeline Sequence & Semantic Chunk Retrieval (Lect 38–39)",
      "RAG Chunk Overlap Trade-Offs & Index Redundancy (Lect 38–39)",
      "RAG Boundary Re-Chunking & Overlap Adjustment Strategies (Lect 38–39)"
    ],
    "q_ids": [
      "et_q28",
      "et_q29",
      "et_q44"
    ]
  },
  {
    "id": "et_mod2",
    "num": 2,
    "title": "Module 2: Hands-on: Working with OpenAI / Hugging Face APIs",
    "lectures": "Lecture 40",
    "desc": "Hands-on: Working with OpenAI / Hugging Face APIs.",
    "topics": [
      "OpenAI API Integration: Chat Completions, System Prompts & Hyperparameters",
      "Function Calling & Structured Outputs via JSON Schema",
      "Hugging Face Transformers: Pipeline API, AutoModel, and AutoTokenizer",
      "Hugging Face Model Hub, Open-Weights Checkpoints & Inference Endpoints",
      "API Rate Limiting, Streaming Responses, Error Handling & Token Cost Management"
    ],
    "q_ids": []
  },
  {
    "id": "et_mod3",
    "num": 3,
    "title": "Module 3: Introduction to Agentic AI Systems",
    "lectures": "Lectures 41–43",
    "desc": "Introduction to Agentic AI Systems: concepts, architectures, tool use, planning, and real-world applications.",
    "topics": [
      "From Passive LLMs to Autonomous Agents: Perception, Reasoning & Action",
      "Agent Architectures & Reasoning Loops (ReAct: Thought, Action, Observation)",
      "Tool Use & Function Calling: Integrating Calculators, APIs, SQL & Web Browsers",
      "Planning Frameworks: Task Decomposition, Subgoal Execution, Self-Reflection & Tree-of-Thoughts",
      "Memory Architectures: Short-Term Working Memory vs. Long-Term Episodic/Vector Memory",
      "Multi-Agent Collaboration: Specialized Roles, Teamwork & Supervisory Orchestration",
      "Real-World Agentic Applications & Workflow Automation",
      "Agentic AI Closed-Loop Reasoning Conditioned on Tool Observations (Lect 41–43)"
    ],
    "q_ids": [
      "et_q30"
    ]
  },
  {
    "id": "et_mod4",
    "num": 4,
    "title": "Module 4: Ethics, Responsible AI & Case Studies",
    "lectures": "Lectures 44–45",
    "desc": "Ethics, Responsible AI, and Case Studies in Generative and Agentic AI.",
    "topics": [
      "AI Safety & Alignment: RLHF, DPO & Constitutional AI Guardrails",
      "Algorithmic Bias, Fairness & Representation in Large Generative Models",
      "Hallucination Detection, Red-Teaming, Prompt Injection & Jailbreaks",
      "Intellectual Property, Copyright, Data Privacy & Content Watermarking",
      "Enterprise AI Governance & Responsible AI Frameworks",
      "Case Studies in Generative & Agentic AI: Healthcare, Software Engineering, Finance & Society",
      "Responsible AI: Human-in-the-Loop (HITL) Controls for Irreversible Agent Actions (Lect 44–45)"
    ],
    "q_ids": [
      "et_q45"
    ]
  }
];

if (typeof window !== "undefined") {
  window.SYLLABUS_MODULES = SYLLABUS_MODULES;
  window.ST1_SYLLABUS_MODULES = ST1_SYLLABUS_MODULES;
  window.ENDTERM_SYLLABUS_MODULES = ENDTERM_SYLLABUS_MODULES;
}
if (typeof globalThis !== "undefined") {
  globalThis.SYLLABUS_MODULES = SYLLABUS_MODULES;
  globalThis.ST1_SYLLABUS_MODULES = ST1_SYLLABUS_MODULES;
  globalThis.ENDTERM_SYLLABUS_MODULES = ENDTERM_SYLLABUS_MODULES;
}
