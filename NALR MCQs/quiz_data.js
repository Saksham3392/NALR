const SYLLABUS_MODULES = [
  {
    "id": "mod1",
    "num": 1,
    "title": "Module 1: Scaled Dot-Product & Self-Attention Fundamentals",
    "lectures": "Lectures 24-25 & 32-33",
    "desc": "Foundational attention mechanism: Query, Key, Value routing, Softmax normalization, and 1/\u221ad_k variance scaling.",
    "topics": [
      "Why Scaled Dot-Product Uses the 1/\u221ad_k Normalizing Factor",
      "Role of Softmax in Converting Attention Scores to Probability Weights",
      "Value Vector Aggregation via Attention Weights",
      "Linear Projections for Query (Q), Key (K), and Value (V)",
      "Quadratic Computational Complexity O(N\u00b2) in Self-Attention"
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
      "Per-Head Feature Dimension Calculation (d_k = d_model / h)"
    ],
    "q_ids": [
      "q5",
      "q12"
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
      "Cross-Attention Score Matrix Dimensions (Decoder Queries \u00d7 Encoder Keys)",
      "Cross-Attention Source Routing (Keys and Values from Encoder)",
      "Layer Normalization (LayerNorm) for Activation Stability",
      "Residual Connection as an Uninterrupted Gradient Highway",
      "Causal (Autoregressive) Self-Attention Masking",
      "Parallel Training with Triangular Causal Masks (Teacher Forcing)",
      "Pre-Softmax Logit Masking using Large Negative Values (-\u221e)",
      "Token Independence in the Position-Wise Feed-Forward Sublayer"
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
      "q20"
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
      "2D Spatial Coordinate Representation in Vision Transformers"
    ],
    "q_ids": [
      "q9",
      "q32"
    ]
  },
  {
    "id": "mod5",
    "num": 5,
    "title": "Module 5: Vision Transformers (ViT, Swin, CaiT)",
    "lectures": "Lecture 31",
    "desc": "Applying Transformers to images: Patch extraction, linear projection, [CLS] classification tokens, and global receptive fields.",
    "topics": [
      "Image Patch Partitioning Formula (16\u00d716 Patches on 224\u00d7224 Image)",
      "Encoder Sequence Length with the Added [CLS] Classification Token",
      "Image Patch Partitioning with Larger Patches (32\u00d732 Patches)",
      "Effect of Halving Patch Size on Total Token Count (Inverse Quadratic Law)",
      "Flattened Patch Dimensionality Calculation (Height \u00d7 Width \u00d7 Channels = 768)",
      "Role of Linear Patch Projection in Mapping Pixels to Transformer Hidden Space",
      "Total Number of Positional Embeddings Required (N patches + 1 [CLS])",
      "Nature and Initialization of the Learned [CLS] Token",
      "Global Receptive Field in Vision Transformers vs Local CNN Filters",
      "Effect of Doubling Image Resolution on Patch Token Count",
      "Computational Bottleneck of Small Patches and Shifted Windows (Swin)",
      "Primary Function of Linear Patch Projection",
      "Independence of Patch Count from Transformer Hidden Size"
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
      "q34"
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
      "The Two-Stage Paradigm: Self-Supervised Pre-training followed by Fine-Tuning"
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
      "q45"
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
      "Meta-Prompting (Prompting an LLM to Design and Optimize Prompts)"
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
      "q56"
    ]
  },
  {
    "id": "mod8",
    "num": 8,
    "title": "Module 8: Fine-Tuning & Parameter-Efficient Adaptation (LoRA & PEFT)",
    "lectures": "Lectures 36-37",
    "desc": "Adapting foundation models: Freezing base weights, Low-Rank Decomposition (\u0394W = B\u00b7A), rank-r math, multi-adapters, and weight merging.",
    "topics": [
      "PEFT vs Full Fine-Tuning (Why We Train <1% Parameters)",
      "Base Model Weight Freezing in LoRA to Save GPU VRAM",
      "Low-Rank Matrix Decomposition (\u0394W = B \u00b7 A)",
      "Linear Parameter Scaling with Rank r (Params = r \u00d7 (d_in + d_out))",
      "Exact LoRA Parameter Calculation (4096\u00d74096 Layer at Rank 8)",
      "Exact LoRA Parameter Calculation (1024\u00d71024 Layer at Rank 4)",
      "Effect of Doubling Rank r on Trainable Adapter Parameters",
      "Multi-Adapter Serving & Storage Efficiency on a Shared Base Model",
      "Weight Merging for Zero Inference Latency Overhead"
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
      "q65"
    ]
  }
];

const QUIZ_QUESTIONS = [
  {
    "id": "q1",
    "module_id": "mod1",
    "module_name": "Module 1: Scaled Dot-Product & Self-Attention Fundamentals",
    "syllabus_lec": "Lectures 24-25 & 32-33",
    "topic": "Why Scaled Dot-Product Uses the 1 / √Head Dimension Normalizing Factor",
    "difficulty": "Medium",
    "points": 1,
    "question": "Why is the Query-Key dot product divided by √d_k in scaled dot-product attention?",
    "options": [
      "To make every attention head use identical weights",
      "To keep attention scores from growing too large as key dimension increases",
      "To convert value vectors into probability distributions",
      "To remove the need for positional information"
    ],
    "correct": "To keep attention scores from growing too large as key dimension increases",
    "explanation": "Dividing by √d_k keeps attention score magnitudes bounded as the key dimension grows. Without this divisor, large dot products push the Softmax function into saturated regions where gradients become near zero (vanishing gradient problem), stalling training.",
    "theory": {
      "title": "Scaling Factor (1 / √d_k) in Scaled Dot-Product Attention",
      "what_is_it": "In scaled dot-product attention, words compare themselves to other words by computing dot products between Query (what information a token searches for) and Key (what a token advertises). The term d_k represents the feature dimension of these vectors (e.g., d_k = 64). The scaling factor 1 / √d_k is a variance normalizing divider applied to the dot products before Softmax.\n\n💡 Subject-Related Example:\nFor key dimension d_k = 64, multiplying two 64-dimensional vectors produces dot products with variance 64 and standard deviation √64 = 8. Dividing by √64 = 8 scales the scores back to unit variance 1.0, keeping values in the active, steep gradient region of Softmax.\n\n🚀 Real-World AI Use Case:\nUsed in the self-attention layers of all Transformer models (BERT, GPT-4, LLaMA-3). Without √d_k scaling, large dot products would push Softmax into flat saturated tails, causing vanishing gradients that freeze backpropagation during training.",
      "why_we_need_it": "Without dividing by √d_k, as vector size d_k grows, dot-product numbers become huge (e.g. +80 or -50). When huge numbers enter Softmax, Softmax saturates: it outputs 1.0 for the highest number and 0.0 for everything else. In these flat regions, gradients become virtually zero (vanishing gradient problem), which completely freezes neural network learning!",
      "how_it_works": "• Step 1: Multiply Query vector by Key vector (q · k = q₁k₁ + ... + q_d k_d).\n• Step 2: Assuming vector components have mean 0 and variance 1, the raw dot product has variance equal to d_k and standard deviation √d_k.\n• Step 3: Divide by √d_k. For d_k = 64, we divide by √64 = 8. This pulls variance back to exactly 1.0, keeping Softmax in its sensitive, steep gradient zone.",
      "formula": "Attention(Q, K, V) = Softmax( (Q · Kᵀ) / √d_k ) · V",
      "key_takeaways": [
        "⭐ Primary Purpose: Prevents dot products from growing large and causing Softmax saturation (vanishing gradients).",
        "⭐ Numerical Rule: For key dimension d_k = 64, divide by √64 = 8 (multiply by 1/8 = 0.125).",
        "⭐ Variance Control: Reduces dot-product variance from d_k back to 1.0."
      ]
    },
    "sample_questions": [
      {
        "q": "If key dimension d_k = 64, what is the exact numerical scaling factor applied to Query · Key Transpose?",
        "options": [
          "1/8 (since √64 = 8)",
          "1/64",
          "1/16",
          "1/32"
        ],
        "ans": "1/8 (since √64 = 8)",
        "exp": "The divisor is √d_k = √64 = 8, so the multiplier is 1/8 = 0.125."
      },
      {
        "q": "What training failure happens if we omit √d_k when d_k is large?",
        "options": [
          "Softmax saturation causing vanishing gradients",
          "Exploding activations in layer norm",
          "Loss of positional awareness",
          "Matrix dimension mismatch"
        ],
        "ans": "Softmax saturation causing vanishing gradients",
        "exp": "Large inputs push softmax outputs into extreme tails where the slope (derivative) is almost zero."
      }
    ]
  },
  {
    "id": "q2",
    "module_id": "mod1",
    "module_name": "Module 1: Scaled Dot-Product & Self-Attention Fundamentals",
    "syllabus_lec": "Lectures 24-25 & 32-33",
    "topic": "Role of Softmax in Converting Attention Scores to Probability Weights",
    "difficulty": "Easy",
    "points": 1,
    "question": "After attention scores are computed for a query, what is the main role of softmax?",
    "options": [
      "Convert the scores into normalized attention weights",
      "Project the query into the model vocabulary",
      "Create a positional index for each token",
      "Freeze the key and value projections"
    ],
    "correct": "Convert the scores into normalized attention weights",
    "explanation": "Softmax transforms raw attention dot-product scores into a normalized probability distribution where all weights are non-negative and sum to exactly 1.0 across the sequence positions.",
    "theory": {
      "title": "Softmax Normalization in Attention Routing",
      "what_is_it": "Softmax is an activation function that converts raw dot-product similarity scores (logits) into a normalized probability distribution where every value is non-negative (between 0.0 and 1.0) and all weights across the sequence sum to exactly 1.0 (100%).\n\n💡 Subject-Related Example:\nIn the sentence 'The animal didn't cross the street because it was tired', the Query for 'it' computes raw scores against all words. Softmax transforms raw scores [+4.2, -1.8, +0.1] into probabilities [0.72, 0.04, 0.24], assigning 72% attention weight to 'animal'.\n\n🚀 Real-World AI Use Case:\nEnables differentiable soft routing of information across tokens in all attention layers, allowing neural networks to learn which words to focus on via gradient descent.",
      "why_we_need_it": "The dot product produces arbitrary raw numbers like +8.4, -3.2, 0.0. To blend word meanings proportionally, we need non-negative weights that act as valid percentages summing to 1.0.",
      "how_it_works": "• Step 1: Exponentiate each score e^(Score). This turns all negative numbers positive.\n• Step 2: Sum all exponentials across the row (Sum = Σ e^z_j).\n• Step 3: Divide each e^(Score) by the Sum. Each result is between 0.0 and 1.0, and the entire row sum is exactly 1.0.",
      "formula": "α_i = exp(Score_i) / Σ_j exp(Score_j), where Σ α_i = 1.0 (100%)",
      "key_takeaways": [
        "⭐ Normalization: Ensures attention weights are non-negative and sum to exactly 1.0 across the sequence.",
        "⭐ Differentiability: Unlike 'hard argmax' (which just picks 1 word and gives 0 gradient), Softmax provides smooth gradients for backpropagation.",
        "⭐ Exponential Property: Exponential scaling naturally emphasizes strong matches while still assigning small non-zero weights to relevant context."
      ]
    },
    "sample_questions": [
      {
        "q": "What is the mathematical sum of the attention weights assigned by one query across all tokens in a sequence?",
        "options": [
          "Always exactly 1.0 (100%)",
          "Depends on sequence length N",
          "Equal to d_model",
          "Zero"
        ],
        "ans": "Always exactly 1.0 (100%)",
        "exp": "Softmax normalizes the row so all probabilities sum to 1.0."
      },
      {
        "q": "Why is Softmax used instead of hard argmax (picking the single highest score)?",
        "options": [
          "Softmax is differentiable allowing backpropagation, while argmax has zero gradient",
          "Softmax uses less memory",
          "Softmax deletes low-scoring tokens",
          "Softmax creates word tokens"
        ],
        "ans": "Softmax is differentiable allowing backpropagation, while argmax has zero gradient",
        "exp": "Differentiability is required for gradient descent to update weights."
      }
    ]
  },
  {
    "id": "q3",
    "module_id": "mod1",
    "module_name": "Module 1: Scaled Dot-Product & Self-Attention Fundamentals",
    "syllabus_lec": "Lectures 24-25 & 32-33",
    "topic": "Value Vector Aggregation via Attention Weights",
    "difficulty": "Easy",
    "points": 1,
    "question": "Once attention weights have been obtained, which vectors are combined using those weights to form the attention output?",
    "options": [
      "Value vectors",
      "Query vectors",
      "Positional vectors",
      "Token-ID vectors"
    ],
    "correct": "Value vectors",
    "explanation": "The output of self-attention is computed as a weighted sum (linear combination) of the Value vectors, where the weights are the Softmax-normalized attention scores.",
    "theory": {
      "title": "Value Vector Aggregation via Attention Weights",
      "what_is_it": "Value vector aggregation is the final step of self-attention where the model computes a weighted linear combination of all Value vectors (V) using the normalized Softmax attention weights (α).\n\n💡 Subject-Related Example:\nFor the polysemous word 'bank' in 'river bank', the attention mechanism assigns 80% weight to 'river' and 20% to surrounding tokens. Multiplying these weights by the respective Value vectors produces an aggregated representation that embeds geographic riverbank semantics.\n\n🚀 Real-World AI Use Case:\nActs as the dynamic information retrieval engine in modern foundation models (Gemini, Claude, GPT-4), retrieving context-specific factual features from input sequences.",
      "why_we_need_it": "A word like 'bank' needs information from surrounding words ('river' or 'money') to clarify its meaning. Weighted aggregation injects exactly the right amount of context from related words into the current word's representation.",
      "how_it_works": "• Step 1: Query and Key dot products produce Softmax weights α = [α₁, α₂, ..., α_N].\n• Step 2: Multiply each weight α_i by the corresponding Value vector V_i.\n• Step 3: Sum the weighted vectors together: Output = Σ (α_i · V_i) = α · V.",
      "formula": "Attention Output = Σ_i (α_i · V_i) = Softmax((Q · Kᵀ) / √d_k) · V",
      "key_takeaways": [
        "⭐ Weighted Linear Combination: Output is the linear combination Σ α_i V_i of Value vectors.",
        "⭐ Dimension Match: The output retains the exact same dimension as the Value vectors (d_v).",
        "⭐ Information Flow: Softmax weights act as routing valves deciding how much information to retrieve from each word's Value."
      ]
    },
    "sample_questions": [
      {
        "q": "If word 1 has weight 0.8 and Value vector V₁, and word 2 has weight 0.2 and Value vector V₂, what is the output vector?",
        "options": [
          "0.8 V₁ + 0.2 V₂",
          "V₁ + V₂",
          "0.8 Q₁ + 0.2 K₂",
          "max(V₁, V₂)"
        ],
        "ans": "0.8 V₁ + 0.2 V₂",
        "exp": "Attention output is the linear combination Σ α_i V_i."
      },
      {
        "q": "In the search engine analogy, what does the Value vector represent?",
        "options": [
          "The actual content/data returned to the user",
          "The search bar query",
          "The database index key",
          "The internet speed"
        ],
        "ans": "The actual content/data returned to the user",
        "exp": "The Value is the content retrieved proportional to the Query-Key similarity."
      }
    ]
  },
  {
    "id": "q4",
    "module_id": "mod1",
    "module_name": "Module 1: Scaled Dot-Product & Self-Attention Fundamentals",
    "syllabus_lec": "Lectures 24-25 & 32-33",
    "topic": "Linear Projections for Query (Q), Key (K), and Value (V)",
    "difficulty": "Easy",
    "points": 1,
    "question": "In self-attention, how are Query, Key, and Value representations usually produced from a token's hidden state?",
    "options": [
      "Using three independent tokenizers",
      "Using one shared scalar multiplier only",
      "Using three fixed sinusoidal functions",
      "Using separate learned linear projections"
    ],
    "correct": "Using separate learned linear projections",
    "explanation": "In self-attention, Query, Key, and Value vectors are generated by multiplying the input token representations by separate, learned linear projection matrices (W_Q, W_K, W_V).",
    "theory": {
      "title": "Linear Projection Matrices (W_Q, W_K, W_V)",
      "what_is_it": "Linear projections are learned weight matrices (W_Q, W_K, W_V) that multiply each input token vector X to project it into three distinct operational feature spaces: Query (Q = X · W_Q), Key (K = X · W_K), and Value (V = X · W_V).\n\n💡 Subject-Related Example:\nGiven an input tensor X of shape (Sequence Length N × Hidden Dimension 768), multiplying by learned matrix W_Q of shape (768 × 64) produces Query tensor Q of shape (N × 64).\n\n🚀 Real-World AI Use Case:\nAllows asymmetric, directional attention modeling in Transformers (e.g. allowing a transitive verb to attend strongly to its direct object without forcing the direct object to attend identically back).",
      "why_we_need_it": "Without separate projection matrices, Query and Key would be identical (symmetric), meaning word A looking at word B would always force word B to look at word A with the exact same strength. Separate learned matrices allow asymmetric, direction-specific attention (e.g. 'kick' attends heavily to 'ball', but 'ball' doesn't need to attend equally to 'kick').",
      "how_it_works": "• Input tensor X has shape (Sequence Length N × Hidden Dimension d_model).\n• Multiply by W_Q (d_model × d_k) to get Q (N × d_k).\n• Multiply by W_K (d_model × d_k) to get K (N × d_k).\n• Multiply by W_V (d_model × d_v) to get V (N × d_v).\n• The weights in W_Q, W_K, W_V are learned end-to-end through backpropagation.",
      "formula": "Q = X · W_Q,  K = X · W_K,  V = X · W_V",
      "key_takeaways": [
        "⭐ Independent Projections: Q, K, and V are generated via three separate learned weight matrices.",
        "⭐ Asymmetric Attention: Enables directional reasoning where token A attends to token B without enforcing symmetric attention.",
        "⭐ Dimensional Flexibility: Allows projecting high-dimensional input (e.g. 768) into smaller head dimensions (e.g. 64)."
      ]
    },
    "sample_questions": [
      {
        "q": "If input X has shape (Batch B, Length N, Dimension 512) and projection matrix W_Q has shape (512, 64), what is the shape of Query tensor Q?",
        "options": [
          "(B, N, 64)",
          "(B, N, 512)",
          "(B, 64, 512)",
          "(N, N, 64)"
        ],
        "ans": "(B, N, 64)",
        "exp": "Multiplying (B, N, 512) × (512, 64) produces (B, N, 64)."
      },
      {
        "q": "Why don't we just compute attention directly on raw input X without W_Q, W_K, W_V?",
        "options": [
          "Without projections, attention would be symmetric and unable to learn specialized roles for queries vs keys",
          "It would be too fast",
          "It would cause zero division",
          "Input tokens cannot be multiplied"
        ],
        "ans": "Without projections, attention would be symmetric and unable to learn specialized roles for queries vs keys",
        "exp": "Separate matrices give the network the expressiveness to model asymmetric directional relationships."
      }
    ]
  },
  {
    "id": "q11",
    "module_id": "mod1",
    "module_name": "Module 1: Scaled Dot-Product & Self-Attention Fundamentals",
    "syllabus_lec": "Lectures 24-25 & 32-33",
    "topic": "Quadratic Computational Complexity O(N²) in Self-Attention",
    "difficulty": "Medium",
    "points": 2,
    "question": "If the sequence length doubles while hidden dimensions stay fixed, how does the size of a full self-attention score matrix change?",
    "options": [
      "It remains unchanged",
      "It becomes eight times as large",
      "It becomes twice as large",
      "It becomes four times as large"
    ],
    "correct": "It becomes four times as large",
    "explanation": "A full self-attention score matrix has dimensions N × N (where N is the sequence length). Doubling the sequence length from N to 2N increases the matrix entries to (2N)² = 4N², making it 4 times as large.",
    "theory": {
      "title": "Quadratic Computational Complexity O(N²) of Self-Attention",
      "what_is_it": "Because self-attention computes pairwise dot-product comparisons between every token and every other token in a sequence of length N, the attention score matrix has dimensions N × N, resulting in quadratic time and memory complexity O(N²).\n\n💡 Subject-Related Example:\nProcessing a sequence of 1,000 tokens requires computing a 1,000 × 1,000 = 1,000,000 score grid. Doubling sequence length to 2,000 tokens quadruples the score grid to 2,000 × 2,000 = 4,000,000 entries (a 4x increase).\n\n🚀 Real-World AI Use Case:\nExplains the primary computational bottleneck in processing ultra-long documents in LLMs and motivates optimizations like FlashAttention, Sliding Window Attention, and RingAttention.",
      "why_we_need_it": "Understanding O(N²) complexity is vital for understanding LLM memory limits and why long context windows require specialized hardware or linear attention mechanisms.",
      "how_it_works": "• Q (N × d_k) multiplied by Kᵀ (d_k × N) produces an N × N score matrix.\n• If sequence length N doubles to 2N, the score matrix size becomes (2N) × (2N) = 4N² (quadrupled).",
      "formula": "Attention Matrix Size = N × N = N² ==> Doubling length (2N)² = 4N²",
      "key_takeaways": [
        "⭐ O(N²) Complexity: Attention compute and memory scale quadratically with sequence length N.",
        "⭐ Scaling Multiplier: Doubling sequence length (2x) increases attention matrix memory by 4x; tripling length (3x) increases memory by 9x.",
        "⭐ Context Bottleneck: Primary reason why naive Transformers struggle with ultra-long documents without KV-cache/sparse attention."
      ]
    },
    "sample_questions": [
      {
        "q": "If context window increases from 1,000 to 4,000 tokens (4x), by what factor does the attention score matrix grow?",
        "options": [
          "16 times (since 4² = 16)",
          "4 times",
          "8 times",
          "64 times"
        ],
        "ans": "16 times (since 4² = 16)",
        "exp": "Quadratic growth: (4)² = 16x."
      },
      {
        "q": "Which component in a Transformer scales linearly O(N) with sequence length rather than quadratically O(N²)?",
        "options": [
          "Position-wise Feed-Forward Network (FFN)",
          "Query-Key dot product",
          "Attention Softmax",
          "Causal mask matrix"
        ],
        "ans": "Position-wise Feed-Forward Network (FFN)",
        "exp": "FFN processes each token position independently, so its compute scales as O(N)."
      }
    ]
  },
  {
    "id": "q5",
    "module_id": "mod2",
    "module_name": "Module 2: Multi-Head Attention (MHA) Mechanism",
    "syllabus_lec": "Lecture 26",
    "topic": "Concatenation of Multiple Attention Heads & Output Linear Projection",
    "difficulty": "Medium",
    "points": 1,
    "question": "What normally happens to the outputs of the individual attention heads in multi-head attention before the next sub-layer?",
    "options": [
      "They are concatenated and passed through an output projection",
      "Only the first head is retained and the rest are discarded",
      "They are averaged into a single scalar for each token",
      "They are converted back into raw token IDs"
    ],
    "correct": "They are concatenated and passed through an output projection",
    "explanation": "Multi-head attention combines the outputs of all parallel attention heads by concatenating their output vectors side-by-side and passing them through a learned linear output projection matrix (W_O).",
    "theory": {
      "title": "Multi-Head Attention Concatenation & Output Projection (W_O)",
      "what_is_it": "Multi-Head Attention (MHA) runs multiple attention heads in parallel. The output vectors from all h individual heads are concatenated side-by-side into a single combined vector, which is then multiplied by a learned linear output projection matrix (W_O) to restore the model dimension and mix features.\n\n💡 Subject-Related Example:\nWith h = 12 heads and head dimension d_k = 64, each head outputs an (N × 64) tensor. Concatenating all 12 heads yields an (N × 768) tensor, which is then multiplied by Output Matrix W_O (768 × 768) to produce the final (N × 768) output.\n\n🚀 Real-World AI Use Case:\nAllows models like BERT and LLaMA to simultaneously attend to different linguistic relationships (Head 1 attends to syntax, Head 2 to pronoun coreference, Head 3 to adjectives) and fuse them into a unified token embedding.",
      "why_we_need_it": "Each head produces a smaller vector (e.g. dimension 64). To restore the original model dimension (e.g. 768) and allow features from different heads to interact and mix, we concatenate them and project through W_O.",
      "how_it_works": "• Step 1: Run h parallel heads, each producing output of shape (N × d_k).\n• Step 2: Concatenate all h heads side-by-side: Shape becomes N × (h · d_k) = (N × d_model).\n• Step 3: Multiply by Output Matrix W_O (shape d_model × d_model) to project back to d_model.",
      "formula": "MultiHead(Q, K, V) = Concat(head_1, head_2, ..., head_h) · W_O",
      "key_takeaways": [
        "⭐ Two-Step Synthesis: Head outputs are first concatenated side-by-side, then linearly projected using W_O.",
        "⭐ Dimension Preservation: Multi-head attention input and output have the exact same shape (N × d_model).",
        "⭐ Inter-Head Mixing: Matrix W_O blends the distinct linguistic signals discovered by individual heads."
      ]
    },
    "sample_questions": [
      {
        "q": "If a model has h = 8 heads and each head produces a 64-dimensional vector, what is the width of the concatenated vector before W_O?",
        "options": [
          "512 (since 8 × 64 = 512)",
          "64",
          "8",
          "1024"
        ],
        "ans": "512 (since 8 × 64 = 512)",
        "exp": "Concatenating 8 vectors of size 64 gives 8 × 64 = 512."
      },
      {
        "q": "What is the primary benefit of having multiple attention heads?",
        "options": [
          "Allows the model to attend to information from different representation subspaces simultaneously",
          "Reduces parameter count to zero",
          "Forces left-to-right reading",
          "Removes the need for GPUs"
        ],
        "ans": "Allows the model to attend to information from different representation subspaces simultaneously",
        "exp": "Each head specializes in learning distinct linguistic and syntactic relationships."
      }
    ]
  },
  {
    "id": "q12",
    "module_id": "mod2",
    "module_name": "Module 2: Multi-Head Attention (MHA) Mechanism",
    "syllabus_lec": "Lecture 26",
    "topic": "Per-Head Feature Dimension Calculation (Head Dimension = Model Dimension / Number of Heads)",
    "difficulty": "Medium",
    "points": 2,
    "question": "A Transformer has d_model = 768 and 12 equal-sized attention heads. What is the usual dimension of each head?",
    "options": [
      "64",
      "128",
      "32",
      "96"
    ],
    "correct": "64",
    "explanation": "In standard Multi-Head Attention, the feature dimension per head (d_k) is calculated as d_model / h. For d_model = 768 and h = 12 heads, each head has dimension 768 / 12 = 64.",
    "theory": {
      "title": "Per-Head Feature Dimension Calculation (d_k = d_model / h)",
      "what_is_it": "In standard Multi-Head Attention, the total model hidden dimension (d_model) is divided equally among all h attention heads, so each individual head operates on a reduced dimension d_k = d_model / h.\n\n💡 Subject-Related Example:\nIn BERT-Base with model dimension d_model = 768 and h = 12 attention heads, the feature dimension per head is d_k = 768 / 12 = 64. In LLaMA-2 70B with d_model = 8192 and h = 64 heads, d_k = 8192 / 64 = 128.\n\n🚀 Real-World AI Use Case:\nEnsures that running 12 heads in parallel requires the exact same total parameter count and FLOPs as running a single full-size 768-dimensional head.",
      "why_we_need_it": "Splitting the dimension ensures that running 12 heads in parallel uses the exact same total parameters and compute as running a single full-size head.",
      "how_it_works": "• Given model dimension d_model = 768 and h = 12 heads.\n• Per-head dimension d_k = 768 / 12 = 64.\n• When all 12 heads (each of size 64) are concatenated: 12 × 64 = 768 (restoring original d_model).",
      "formula": "d_k = d_model / h",
      "key_takeaways": [
        "⭐ Standard Division: Head dimension equals total model dimension divided by the number of heads.",
        "⭐ Common Benchmark: BERT-Base uses d_model = 768, h = 12 ==> d_k = 64.",
        "⭐ FLOP Invariance: Keeps overall computation constant regardless of head count."
      ]
    },
    "sample_questions": [
      {
        "q": "If a Transformer has d_model = 1024 and 16 heads, what is the dimension d_k of each head?",
        "options": [
          "64 (since 1024 / 16 = 64)",
          "32",
          "128",
          "256"
        ],
        "ans": "64 (since 1024 / 16 = 64)",
        "exp": "d_k = 1024 / 16 = 64."
      },
      {
        "q": "A model has 32 heads and d_k = 128. What is the model hidden dimension d_model?",
        "options": [
          "4096 (since 32 × 128 = 4096)",
          "2048",
          "1024",
          "8192"
        ],
        "ans": "4096 (since 32 × 128 = 4096)",
        "exp": "d_model = h × d_k = 32 × 128 = 4096."
      }
    ]
  },
  {
    "id": "q6",
    "module_id": "mod3",
    "module_name": "Module 3: Transformer Architecture Deep-Dive",
    "syllabus_lec": "Lectures 27-28",
    "topic": "Purpose of Padding Mask (Ignoring Non-Content Padding Tokens)",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the purpose of a padding mask in Transformer attention?",
    "options": [
      "Make the model generate exactly one token",
      "Prevent attention from assigning weight to padded positions",
      "Force every token to attend only to itself",
      "Increase the number of trainable attention heads"
    ],
    "correct": "Prevent attention from assigning weight to padded positions",
    "explanation": "A padding mask ensures that dummy padding tokens (used to batch sentences of varying lengths together) receive zero attention weight, preventing them from influencing representations of real content tokens.",
    "theory": {
      "title": "Padding Masking in Transformer Sequences",
      "what_is_it": "A Padding Mask is an additive mask used during batch processing to prevent the model from attending to dummy [PAD] tokens that were added to make variable-length sequences match rectangular tensor dimensions.\n\n💡 Subject-Related Example:\nIn a batch containing a 4-token sentence and an 8-token sentence padded with 4 [PAD] tokens, attention logits connecting to the [PAD] tokens are set to -∞ before Softmax. Because exp(-∞) = 0, [PAD] tokens receive exactly 0.0% attention weight.\n\n🚀 Real-World AI Use Case:\nStandard batch training in PyTorch/Hugging Face where variable-length user prompts are batched together efficiently without dummy padding corrupting real token representations.",
      "why_we_need_it": "GPUs require fixed matrix shapes for parallel batch processing. Shorter sentences are padded with [PAD] tokens. If unmasked, real words would waste attention looking at meaningless [PAD] tokens, corrupting representations.",
      "how_it_works": "• Before Softmax, any attention score connecting to a [PAD] token is replaced with negative infinity (-∞).\n• When Softmax calculates exp(-∞), the result is exactly 0.00.\n• As a result, [PAD] tokens receive exactly 0% attention weight.",
      "formula": "Score_masked = Score + Mask, where Mask = 0 for valid tokens and -∞ for [PAD] tokens",
      "key_takeaways": [
        "⭐ Core Purpose: Prevents the model from attending to dummy padding positions added for batch uniformity.",
        "⭐ Implementation: Adds -∞ to attention logits before Softmax normalization.",
        "⭐ Result: Softmax assigns exactly 0.0 attention weight to padding tokens."
      ]
    },
    "sample_questions": [
      {
        "q": "What numerical value is added to [PAD] token logits prior to Softmax?",
        "options": [
          "-∞ (or a very large negative number like -1e9)",
          "0",
          "+1.0",
          "0.5"
        ],
        "ans": "-∞ (or a very large negative number like -1e9)",
        "exp": "Because e^(-∞) = 0, ensuring zero attention probability."
      },
      {
        "q": "What happens if a model forgets to use a padding mask during batch training?",
        "options": [
          "Real tokens will attend to dummy [PAD] tokens, corrupting word embeddings",
          "The model runs twice as fast",
          "The tokenizer crashes",
          "All outputs become positive"
        ],
        "ans": "Real tokens will attend to dummy [PAD] tokens, corrupting word embeddings",
        "exp": "Attention weights would be diluted across meaningless filler tokens."
      }
    ]
  },
  {
    "id": "q7",
    "module_id": "mod3",
    "module_name": "Module 3: Transformer Architecture Deep-Dive",
    "syllabus_lec": "Lectures 27-28",
    "topic": "Bidirectional Context Awareness in Standard Transformer Encoders",
    "difficulty": "Medium",
    "points": 1,
    "question": "In a standard Transformer encoder without a causal restriction, which tokens may a non-padding token attend to within the same input sequence?",
    "options": [
      "Any non-padding token in the input sequence",
      "Only tokens that occur earlier in the sequence",
      "Only tokens at even-numbered positions",
      "Only the immediately adjacent tokens"
    ],
    "correct": "Any non-padding token in the input sequence",
    "explanation": "In a standard Transformer Encoder (such as BERT), self-attention is bidirectional, allowing every token to attend to all preceding and following tokens simultaneously across the full sequence.",
    "theory": {
      "title": "Bidirectional Context in Transformer Encoders",
      "what_is_it": "In a standard Transformer Encoder, self-attention is bidirectional: every token in the sequence has full visibility to attend to all preceding tokens (left context) AND all following tokens (right context) simultaneously.\n\n💡 Subject-Related Example:\nIn the sentence 'The bank was steep and muddy', the token 'bank' can look ahead to the right-side word 'muddy' in the very same layer to disambiguate its meaning as a riverbank rather than a financial building.\n\n🚀 Real-World AI Use Case:\nPowers encoder-only understanding models like BERT and RoBERTa for classification, named entity recognition (NER), and semantic search embeddings.",
      "why_we_need_it": "For understanding tasks (classification, sentiment analysis, named entity recognition), knowing what comes after a word is just as important as knowing what came before it. (e.g. In 'The bank of the river', 'bank' needs the word 'river' on its right to know it means riverbank).",
      "how_it_works": "In standard encoder self-attention, no causal mask is applied. The attention matrix is a full N × N square where every cell (i, j) is calculated.",
      "formula": "Encoder Attention: Token_i attends to Token_j for all j ∈ {1, 2, ..., N}",
      "key_takeaways": [
        "⭐ Full Receptive Field: Encoders (like BERT) have unconstrained bidirectional attention.",
        "⭐ Contrast with Decoders: Decoders use causal masks (left-to-right only); Encoders look both left and right.",
        "⭐ Best For: Language understanding, sentence embeddings, classification, and feature extraction."
      ]
    },
    "sample_questions": [
      {
        "q": "Which famous model architecture relies on bidirectional encoder self-attention?",
        "options": [
          "BERT",
          "GPT-2",
          "LLaMA",
          "Mistral"
        ],
        "ans": "BERT",
        "exp": "BERT stands for Bidirectional Encoder Representations from Transformers."
      },
      {
        "q": "Why is bidirectional attention NOT used for next-word text generation in GPT?",
        "options": [
          "Because seeing future words during text generation would cause 'cheating' during training",
          "It requires 10x more GPU memory",
          "It disables residual connections",
          "It deletes token embeddings"
        ],
        "ans": "Because seeing future words during text generation would cause 'cheating' during training",
        "exp": "During autoregressive generation, future words don't exist yet, so attention must be causal (left-to-right)."
      }
    ]
  },
  {
    "id": "q8",
    "module_id": "mod3",
    "module_name": "Module 3: Transformer Architecture Deep-Dive",
    "syllabus_lec": "Lectures 27-28",
    "topic": "Residual (Skip) Connections & Feature Dimension Matching",
    "difficulty": "Medium",
    "points": 1,
    "question": "For a residual addition x + Sublayer(x) to be performed directly, what must normally match?",
    "options": [
      "The number of training epochs and attention heads",
      "The feature dimensions of the two tensors",
      "The vocabulary size and sequence length",
      "The tokenizer size and batch size"
    ],
    "correct": "The feature dimensions of the two tensors",
    "explanation": "A residual (skip) connection adds the input of a sublayer directly to its output (Output = Input + Sublayer(Input)), enabling stable gradient flow throughout deep Transformer networks.",
    "theory": {
      "title": "Residual (Skip) Connections in Transformer Blocks",
      "what_is_it": "A Residual (Skip) Connection adds the original input of a sublayer directly to its output: Output = Input + Sublayer(Input). In backpropagation, the derivative dy/dx = 1 + dF/dx contains a constant '+1' identity term that allows gradients to flow backwards through deep layers without diminishing.\n\n💡 Subject-Related Example:\nFor an input vector x of dimension 768 passing through a Multi-Head Attention sublayer, the output is computed as x + Attention(LayerNorm(x)), preserving the original vector scale while learning incremental residual refinements.\n\n🚀 Real-World AI Use Case:\nCrucial architectural building block enabling stable training of ultra-deep networks (e.g. GPT-3 with 96 stacked Transformer layers and LLaMA-3 with 128 layers) without suffering from vanishing or exploding gradients.",
      "why_we_need_it": "As neural networks grow deeper (e.g. 50-100 layers), gradients vanish or explode during backpropagation, making training impossible. Residual connections provide an open identity path where gradient signals flow backwards without diminishing.",
      "how_it_works": "• Sublayer computes transformation F(x) (e.g. Attention or FFN).\n• The original input x is added element-wise: y = x + F(x).\n• In backpropagation, derivative dy/dx = 1 + dF/dx. The '+1' term guarantees that gradient flows backwards even if dF/dx is near zero!",
      "formula": "Output = x + Sublayer(x)",
      "key_takeaways": [
        "⭐ Identity Gradient Highway: The '+1' term in the derivative prevents vanishing gradients in deep networks.",
        "⭐ Dimension Requirement: The input x and sublayer output F(x) must have the exact same tensor dimensions to add element-wise.",
        "⭐ Layer Stacking: Enables training ultra-deep architectures with hundreds of layers."
      ]
    },
    "sample_questions": [
      {
        "q": "If input x has shape (B, N, 768), what must be the shape of the Attention sublayer output before residual addition?",
        "options": [
          "(B, N, 768)",
          "(B, N, 64)",
          "(B, 768, N)",
          "(N, N)"
        ],
        "ans": "(B, N, 768)",
        "exp": "Element-wise addition requires exactly matching dimensions."
      },
      {
        "q": "What critical training problem do residual connections solve in 100+ layer Transformers?",
        "options": [
          "Vanishing gradients during backpropagation",
          "Tokenization errors",
          "Memory leaks in CPU RAM",
          "Dataset bias"
        ],
        "ans": "Vanishing gradients during backpropagation",
        "exp": "Residual connections allow gradients to flow backwards without repeated attenuation."
      }
    ]
  },
  {
    "id": "q10",
    "module_id": "mod3",
    "module_name": "Module 3: Transformer Architecture Deep-Dive",
    "syllabus_lec": "Lectures 27-28",
    "topic": "Position-Wise Feed-Forward Network (FFN) Operation",
    "difficulty": "Easy",
    "points": 1,
    "question": "Which statement best describes the position-wise feed-forward network inside a Transformer block?",
    "options": [
      "It changes the tokenizer vocabulary after every layer",
      "It transforms each token representation independently using the same learned network",
      "It computes attention scores between every pair of tokens",
      "It creates the causal mask used by the decoder"
    ],
    "correct": "It transforms each token representation independently using the same learned network",
    "explanation": "The Position-Wise Feed-Forward Network applies the exact same two-layer linear transformation with a non-linear activation (typically expanding dimension 4x) to each token position independently.",
    "theory": {
      "title": "Position-Wise Feed-Forward Networks (FFN)",
      "what_is_it": "The Position-Wise Feed-Forward Network (FFN) is a two-layer Multi-Layer Perceptron (MLP) applied to each token vector independently and identically, typically expanding feature dimension by 4x before projecting back to d_model.\n\n💡 Subject-Related Example:\nFor a token vector x of dimension 512, the FFN computes intermediate features h = max(0, x · W₁ + b₁) with dimension 2048 (4x expansion), followed by Output = h · W₂ + b₂ projecting back to 512.\n\n🚀 Real-World AI Use Case:\nActs as the key-value factual knowledge memory inside Transformer layers, storing learned semantic facts and associations acquired during pre-training.",
      "why_we_need_it": "Self-attention only mixes information between tokens (linear combinations). The FFN introduces non-linear feature transformation and memory retrieval for each token individually.",
      "how_it_works": "• Layer 1 expands feature dimension 4x (e.g. 512 -> 2048) and applies ReLU/GELU activation: h = max(0, x · W1 + b1).\n• Layer 2 projects back to original dimension (e.g. 2048 -> 512): Output = h · W2 + b2.\n• Applied to every token position with the exact same shared weights.",
      "formula": "FFN(x) = max(0, x · W₁ + b₁) · W₂ + b₂",
      "key_takeaways": [
        "⭐ Token Independence: Processes each token position separately without cross-token interaction.",
        "⭐ 4x Dimension Expansion: Typically expands intermediate dimension by 4x (e.g., 512 → 2048 → 512).",
        "⭐ Shared Parameters: The exact same weight matrices (W1, W2) are reused across all sequence positions."
      ]
    },
    "sample_questions": [
      {
        "q": "If d_model = 512, what is the typical inner hidden dimension d_ff of the FFN sublayer?",
        "options": [
          "2048 (since 4 × 512 = 2048)",
          "512",
          "1024",
          "256"
        ],
        "ans": "2048 (since 4 × 512 = 2048)",
        "exp": "Standard Transformer uses a 4x expansion factor: 4 × 512 = 2048."
      },
      {
        "q": "Does the position-wise FFN exchange information between different words in the sequence?",
        "options": [
          "No, it operates on each token independently without cross-token interaction",
          "Yes, by multiplying all token vectors together",
          "Yes, through convolution",
          "Only if bidirectional attention is enabled"
        ],
        "ans": "No, it operates on each token independently without cross-token interaction",
        "exp": "Self-attention mixes words across positions; FFN processes each word independently."
      }
    ]
  },
  {
    "id": "q13",
    "module_id": "mod3",
    "module_name": "Module 3: Transformer Architecture Deep-Dive",
    "syllabus_lec": "Lectures 27-28",
    "topic": "Cross-Attention Score Matrix Dimensions (Decoder Queries × Encoder Keys)",
    "difficulty": "Hard",
    "points": 2,
    "question": "A cross-attention layer has 20 decoder query positions and 50 encoder key positions. Ignoring batch and heads, what is the shape of its attention-score matrix?",
    "options": [
      "50 × 50",
      "20 × 20",
      "20 × 50",
      "50 × 20"
    ],
    "correct": "20 × 50",
    "explanation": "Cross-attention computes dot products between Decoder Queries (length L_dec) and Encoder Keys (length L_enc), producing a score matrix of shape L_dec × L_enc (e.g. 20 × 50).",
    "theory": {
      "title": "Cross-Attention Matrix Dimensions (Decoder Queries × Encoder Keys)",
      "what_is_it": "In Transformer Encoder-Decoder architectures, Cross-Attention computes attention between Decoder Queries and Encoder Keys, producing an attention score matrix of shape: (Decoder Sequence Length × Encoder Sequence Length).\n\n💡 Subject-Related Example:\nWhen translating an English sentence of 50 tokens (Encoder) into French, if the Decoder has generated 20 French tokens so far, the cross-attention matrix has shape (20 Decoder Queries × 50 Encoder Keys) = 20 × 50.\n\n🚀 Real-World AI Use Case:\nUsed in sequence-to-sequence translation models (T5, MarianMT) and speech-to-text models (OpenAI Whisper) to align target generated text with source audio/text features.",
      "why_we_need_it": "The Decoder must selectively extract relevant factual information from the source text processed by the Encoder.",
      "how_it_works": "• Decoder produces Queries Q of shape (L_dec × d_model).\n• Encoder produces Keys K of shape (L_enc × d_model).\n• Q · Kᵀ produces an attention score matrix of shape (L_dec × L_enc).",
      "formula": "Shape(Cross-Attention Scores) = L_decoder × L_encoder",
      "key_takeaways": [
        "⭐ Shape Rule: (Decoder Sequence Length) × (Encoder Sequence Length).",
        "⭐ Numerical Example: 20 decoder tokens and 50 encoder tokens produce a 20 × 50 matrix.",
        "⭐ Asymmetric Lengths: Unlike self-attention (N × N), cross-attention handles different input and output lengths."
      ]
    },
    "sample_questions": [
      {
        "q": "If an English source sentence has 30 tokens and the German translated output has 25 tokens, what is the cross-attention score matrix shape per head?",
        "options": [
          "25 × 30 (Decoder × Encoder)",
          "30 × 30",
          "25 × 25",
          "30 × 25"
        ],
        "ans": "25 × 30 (Decoder × Encoder)",
        "exp": "Shape is N_dec × N_enc = 25 × 30."
      },
      {
        "q": "In cross-attention, along which dimension is Softmax applied?",
        "options": [
          "Along the encoder key dimension (columns, summing to 1 for each decoder query)",
          "Along the decoder query dimension (rows)",
          "Along the batch dimension",
          "Along the model dimension"
        ],
        "ans": "Along the encoder key dimension (columns, summing to 1 for each decoder query)",
        "exp": "For each generated word, the attention weights across all input words sum to 1.0."
      }
    ]
  },
  {
    "id": "q14",
    "module_id": "mod3",
    "module_name": "Module 3: Transformer Architecture Deep-Dive",
    "syllabus_lec": "Lectures 27-28",
    "topic": "Cross-Attention Source Routing (Keys and Values from Encoder)",
    "difficulty": "Medium",
    "points": 2,
    "question": "In encoder-decoder cross-attention, where do the Value representations normally come from?",
    "options": [
      "The decoder's final vocabulary logits",
      "The tokenizer's merge rules",
      "The encoder output",
      "The positional encoding table only"
    ],
    "correct": "The encoder output",
    "explanation": "In Transformer cross-attention, Keys (K) and Values (V) are generated from the Encoder's output representations, while Queries (Q) originate from the Decoder's hidden states.",
    "theory": {
      "title": "Cross-Attention Source Routing (Encoder vs Decoder Roles)",
      "what_is_it": "In Transformer cross-attention, the Queries (Q) originate from the Decoder's previous sublayer, while the Keys (K) and Values (V) are derived from the final output representations of the Encoder.\n\n💡 Subject-Related Example:\nDuring English-to-German translation, the German Decoder emits a Query asking 'what source word corresponds to the next verb?', while the English Encoder provides the Keys (index of source concepts) and Values (semantic meanings of English words).\n\n🚀 Real-World AI Use Case:\nCore routing mechanism in vision-language models (e.g. Flamingo, BLIP-2) where text decoder queries visual encoder feature maps.",
      "why_we_need_it": "This separation allows the generation process to be dynamically guided by the source document representation.",
      "how_it_works": "• Decoder hidden states are projected to Queries: Q = H_dec · W_Q.\n• Encoder output H_enc is projected to Keys and Values: K = H_enc · W_K, V = H_enc · W_V.\n• Attention is computed as: Softmax((Q · Kᵀ) / √d_k) · V.",
      "formula": "Q from Decoder; K & V from Encoder Output",
      "key_takeaways": [
        "⭐ Key & Value Source: Derived directly from the final output of the Encoder.",
        "⭐ Query Source: Derived from the previous layer of the Decoder.",
        "⭐ Information Flow: Source knowledge flows one-way from Encoder into Decoder."
      ]
    },
    "sample_questions": [
      {
        "q": "In a French-to-English translation model, which part of the network provides the Query vectors for cross-attention?",
        "options": [
          "The English output Decoder",
          "The French input Encoder",
          "The tokenizer",
          "The embedding table"
        ],
        "ans": "The English output Decoder",
        "exp": "Decoder generates the queries looking for relevant French source tokens."
      },
      {
        "q": "Are the Encoder Keys and Values recomputed at every auto-regressive decoding step?",
        "options": [
          "No, the Encoder runs once and its K/V outputs are cached and reused for all decoding steps",
          "Yes, the full Encoder runs again for every single token",
          "Only on even steps",
          "Only during fine-tuning"
        ],
        "ans": "No, the Encoder runs once and its K/V outputs are cached and reused for all decoding steps",
        "exp": "The encoder memory is static; only the decoder advances step-by-step."
      }
    ]
  },
  {
    "id": "q15",
    "module_id": "mod3",
    "module_name": "Module 3: Transformer Architecture Deep-Dive",
    "syllabus_lec": "Lectures 27-28",
    "topic": "Layer Normalization (LayerNorm) for Activation Stability",
    "difficulty": "Easy",
    "points": 1,
    "question": "Which operation is intended to stabilize the scale of hidden activations within a Transformer block rather than mix information between token positions?",
    "options": [
      "Patch projection",
      "Layer normalization",
      "Self-attention",
      "Cross-attention"
    ],
    "correct": "Layer normalization",
    "explanation": "Layer Normalization computes the mean and variance across feature dimensions for each individual token independently, stabilizing hidden state dynamics across layers.",
    "theory": {
      "title": "Layer Normalization (LayerNorm) Mechanics",
      "what_is_it": "Layer Normalization standardizes activations across the feature channels independently for each token position, normalizing activations to zero mean (μ = 0) and unit variance (σ² = 1), followed by learnable scale (γ) and shift (β) transformations.\n\n💡 Subject-Related Example:\nFor a token vector x with 768 hidden features, LayerNorm calculates the mean and variance across those 768 numbers and scales them to mean 0, variance 1 independently of other tokens in the sequence or batch.\n\n🚀 Real-World AI Use Case:\nEssential for training stability in large models. Modern LLMs use Pre-LayerNorm or RMSNorm (e.g. LLaMA, Mistral) to ensure clean gradient propagation across thousands of GPU training nodes.",
      "why_we_need_it": "In deep networks, activations can explode or drift across layers. LayerNorm stabilizes the internal distribution of features, accelerating convergence and stabilizing training.",
      "how_it_works": "• For a token vector x with d features, compute mean μ and variance σ² across its d features.\n• Normalize: x_norm = (x - μ) / √(σ² + ε).\n• Scale and shift using learnable parameters γ and β: y = γ · x_norm + β.",
      "formula": "LN(x) = ((x - μ) / √(σ² + ε)) ⊙ γ + β",
      "key_takeaways": [
        "⭐ Independent Per-Token: Computes mean and variance across feature channels for each token independently.",
        "⭐ Batch Independence: Unlike BatchNorm, LayerNorm works identically during training and inference and does not depend on batch size.",
        "⭐ Learnable Parameters: Uses learned scale (γ) and shift (β) vectors to preserve model capacity."
      ]
    },
    "sample_questions": [
      {
        "q": "Why is LayerNorm preferred over BatchNorm in NLP Transformers?",
        "options": [
          "BatchNorm depends on fixed batch statistics which fails with variable sequence lengths and small batch sizes",
          "LayerNorm requires zero parameters",
          "BatchNorm cannot run on GPUs",
          "LayerNorm performs token mixing"
        ],
        "ans": "BatchNorm depends on fixed batch statistics which fails with variable sequence lengths and small batch sizes",
        "exp": "LayerNorm computes statistics per token, making it independent of batch size."
      },
      {
        "q": "In modern models like LLaMA, what simplification does RMSNorm make to LayerNorm?",
        "options": [
          "Removes the mean-centering step and normalizes purely by the root-mean-square of activations",
          "Removes the scaling factor γ",
          "Normalizes across the batch axis",
          "Replaces Softmax"
        ],
        "ans": "Removes the mean-centering step and normalizes purely by the root-mean-square of activations",
        "exp": "RMSNorm saves computation by omitting mean calculation while maintaining stability."
      }
    ]
  },
  {
    "id": "q16",
    "module_id": "mod3",
    "module_name": "Module 3: Transformer Architecture Deep-Dive",
    "syllabus_lec": "Lectures 27-28",
    "topic": "Residual Connection as an Uninterrupted Gradient Highway",
    "difficulty": "Medium",
    "points": 2,
    "question": "A deep Transformer must preserve a direct path for earlier representations around a sub-layer. Which connection provides that path?",
    "options": [
      "Padding mask",
      "Vocabulary projection",
      "Residual connection",
      "Positional lookup"
    ],
    "correct": "Residual connection",
    "explanation": "Because the derivative of the residual connection Output = x + F(x) with respect to input x contains a constant '+1' term (1 + F'(x)), gradients can flow back directly through layers without diminishing to zero.",
    "theory": {
      "title": "Residual Connection Gradient Flow (+1 Highway)",
      "what_is_it": "The residual skip connection computes Output = x + F(x). Because the mathematical derivative with respect to input x is ∂Output/∂x = 1 + ∂F/∂x, the '+1' identity term guarantees an uninterrupted pathway for backpropagation gradients.\n\n💡 Subject-Related Example:\nEven in deeply stacked Transformer blocks where sublayer weights produce near-zero derivatives (∂F/∂x ≈ 0), the gradient ∂Loss/∂x = ∂Loss/∂Output · (1 + 0) = ∂Loss/∂Output flows directly back to early layers without decay.\n\n🚀 Real-World AI Use Case:\nPrevents vanishing gradients in deep architectures, enabling models like GPT-4 and Claude to stack over 100 Transformer blocks stably.",
      "why_we_need_it": "In deep 100-layer Transformers, backpropagation gradients would vanish to zero if repeatedly multiplied by fractional weights. The '+1' term guarantees an uninterrupted gradient highway.",
      "how_it_works": "• During backpropagation: ∂Loss/∂x = ∂Loss/∂y · (1 + ∂F/∂x) = ∂Loss/∂y + ∂Loss/∂y · ∂F/∂x.\n• Even if ∂F/∂x vanishes to 0, ∂Loss/∂x retains the full signal ∂Loss/∂y directly.",
      "formula": "∂(x + F(x)) / ∂x = 1 + F'(x)",
      "key_takeaways": [
        "⭐ Solves Vanishing Gradients: The '+1' identity term ensures gradients pass directly to earlier layers.",
        "⭐ Enables Ultra-Deep Models: Allows training architectures with hundreds of stacked layers.",
        "⭐ Additive Identity: Preserves input information while sublayers learn small incremental refinements F(x)."
      ]
    },
    "sample_questions": [
      {
        "q": "What identity component in the derivative of x + F(x) ensures gradients do not vanish?",
        "options": [
          "The constant +1 (identity term) in the derivative",
          "The Softmax function",
          "The learned positional bias",
          "The temperature scalar"
        ],
        "ans": "The constant +1 (identity term) in the derivative",
        "exp": "The +1 term passes the gradient backward directly without decay."
      },
      {
        "q": "If a sublayer learns weights such that F(x) ≈ 0, what does the residual block output?",
        "options": [
          "x (the identity mapping of the input)",
          "0",
          "LayerNorm(0)",
          "Undefined"
        ],
        "ans": "x (the identity mapping of the input)",
        "exp": "x + 0 = x, preserving the original signal unchanged."
      }
    ]
  },
  {
    "id": "q17",
    "module_id": "mod3",
    "module_name": "Module 3: Transformer Architecture Deep-Dive",
    "syllabus_lec": "Lectures 27-28",
    "topic": "Causal (Autoregressive) Self-Attention Masking",
    "difficulty": "Medium",
    "points": 1,
    "question": "Under a causal self-attention mask, which source positions may the token at position t normally attend to?",
    "options": [
      "Only positions after t",
      "All positions without restriction",
      "Position t and positions before t",
      "Only position t + 1"
    ],
    "correct": "Position t and positions before t",
    "explanation": "Causal (autoregressive) masking sets attention scores to future positions (j > i) to negative infinity (-∞), ensuring tokens can only attend to current and previous positions during next-token prediction.",
    "theory": {
      "title": "Causal (Autoregressive) Masking in Decoder Self-Attention",
      "what_is_it": "Causal (Autoregressive) Masking is an upper-triangular mask that sets attention scores to future token positions (j > i) to negative infinity (-∞), ensuring that each token can only attend to positions up to and including its own index.\n\n💡 Subject-Related Example:\nWhen predicting the 4th word in a sentence, the causal mask sets attention logits for words at positions 5, 6, 7 to -∞. Softmax exponentiates exp(-∞) = 0, giving future words exactly 0% attention weight.\n\n🚀 Real-World AI Use Case:\nDefines the decoder-only generative LLM paradigm (ChatGPT, LLaMA) by enforcing strict left-to-right next-token generation.",
      "why_we_need_it": "During text generation, future words do not exist yet! If the model could look ahead during training, it would simply copy future words (cheat) instead of learning to predict the next word.",
      "how_it_works": "• Create a mask where upper-triangular positions (j > i) are set to -∞.\n• Add mask to raw attention scores: Scores_masked = Q·Kᵀ/√d_k + Mask.\n• When Softmax calculates exp(-∞), future positions receive exactly 0% attention.",
      "formula": "Mask[i, j] = 0 for j ≤ i,  and  -∞ for j > i",
      "key_takeaways": [
        "⭐ Prevents Cheating: Ensures token at position t can only attend to positions ≤ t.",
        "⭐ Triangular Structure: Implemented as a lower-triangular attention mask.",
        "⭐ Core to GPT: Defines the decoder-only generative LLM paradigm (autoregressive generation)."
      ]
    },
    "sample_questions": [
      {
        "q": "In a causal decoder with 4 tokens, which tokens can position 3 attend to?",
        "options": [
          "Tokens 1, 2, and 3",
          "Only token 3",
          "Tokens 3 and 4",
          "All 4 tokens"
        ],
        "ans": "Tokens 1, 2, and 3",
        "exp": "Causal attention permits positions <= 3 (positions 1, 2, and 3)."
      },
      {
        "q": "What visual shape does the causal attention mask have?",
        "options": [
          "A lower-triangular matrix",
          "An identity diagonal line only",
          "An upper-triangular matrix",
          "A full square of ones"
        ],
        "ans": "A lower-triangular matrix",
        "exp": "Valid positions form the lower triangle on and below the main diagonal."
      }
    ]
  },
  {
    "id": "q18",
    "module_id": "mod3",
    "module_name": "Module 3: Transformer Architecture Deep-Dive",
    "syllabus_lec": "Lectures 27-28",
    "topic": "Parallel Training with Triangular Causal Masks (Teacher Forcing)",
    "difficulty": "Hard",
    "points": 2,
    "question": "Why can causal-language-model training still process many target positions in parallel even though each position is forbidden from seeing future tokens?",
    "options": [
      "Each token is trained in a separate model copy",
      "Future tokens are deleted from the training sequence before every layer",
      "The decoder removes all attention operations during training",
      "A triangular mask enforces the dependency rule inside a parallel matrix computation"
    ],
    "correct": "A triangular mask enforces the dependency rule inside a parallel matrix computation",
    "explanation": "During training, teacher forcing with a triangular causal mask allows the model to process all token positions in parallel within a single GPU matrix pass while strictly preventing information leakage from future tokens.",
    "theory": {
      "title": "Parallel Training with Triangular Causal Masks (Teacher Forcing)",
      "what_is_it": "During pre-training of autoregressive language models, Teacher Forcing with a triangular causal mask allows all sequence positions to be trained in parallel within a single GPU forward-backward matrix pass.\n\n💡 Subject-Related Example:\nGiven a 4,096-token training document, the GPU processes all 4,096 next-token predictions simultaneously in parallel using a 4096 × 4096 triangular causal mask, evaluating cross-entropy loss across all positions in one step.\n\n🚀 Real-World AI Use Case:\nEnables pre-training LLMs on trillions of tokens across massive GPU superclusters in weeks rather than decades.",
      "why_we_need_it": "Sequential token-by-token training on GPUs would be extremely slow. Parallel teacher forcing allows GPUs to compute gradients for all sequence positions in a single matrix pass.",
      "how_it_works": "• Input full sentence of length N into the decoder.\n• Apply N × N triangular causal mask in the self-attention layer.\n• Every position t predicts target t+1 simultaneously across the entire batch.",
      "formula": "Loss = Σ_t CrossEntropy(Model(x_{≤t}), Target_{t+1}) evaluated in parallel",
      "key_takeaways": [
        "⭐ Highly Parallel: Training processes all tokens simultaneously on GPU in one forward-backward pass.",
        "⭐ Teacher Forcing: Ground-truth tokens are fed as input context rather than model's own generated tokens.",
        "⭐ Mask Enforces Causality: The triangular mask prevents future token leakage during parallel execution."
      ]
    },
    "sample_questions": [
      {
        "q": "Why were RNNs slower to train on GPUs than masked Transformers?",
        "options": [
          "RNNs had sequential time dependencies (h_t = f(h_{t-1}, x_t)) preventing parallelization across time",
          "RNNs had more parameters",
          "RNNs could not use floating-point numbers",
          "RNNs required causal masking"
        ],
        "ans": "RNNs had sequential time dependencies (h_t = f(h_{t-1}, x_t)) preventing parallelization across time",
        "exp": "RNNs had to wait for step t-1 to finish before computing step t."
      },
      {
        "q": "During text generation (inference), can an LLM generate 100 output words simultaneously in parallel?",
        "options": [
          "No, inference is autoregressive and generates one token at a time sequentially",
          "Yes, because of the causal mask",
          "Yes, using teacher forcing",
          "Only when temperature is 0"
        ],
        "ans": "No, inference is autoregressive and generates one token at a time sequentially",
        "exp": "During inference, future words don't exist yet, so generation proceeds one token per step."
      }
    ]
  },
  {
    "id": "q19",
    "module_id": "mod3",
    "module_name": "Module 3: Transformer Architecture Deep-Dive",
    "syllabus_lec": "Lectures 27-28",
    "topic": "Pre-Softmax Logit Masking using Large Negative Values (-∞)",
    "difficulty": "Medium",
    "points": 2,
    "question": "How are disallowed attention positions commonly handled immediately before softmax?",
    "options": [
      "They are assigned the maximum positive score",
      "They receive a very large negative score so their softmax weight is effectively zero",
      "Their Value vectors are doubled",
      "Their Query vectors are replaced by token IDs"
    ],
    "correct": "They receive a very large negative score so their softmax weight is effectively zero",
    "explanation": "Adding -∞ to attention logits before Softmax ensures their exponentiated value is zero (e^-∞ = 0), resulting in exactly zero attention probability for disallowed positions.",
    "theory": {
      "title": "Pre-Softmax Logit Masking using Negative Infinity (-∞)",
      "what_is_it": "In Transformer attention masking, disallowed positions (such as padding tokens or future tokens in causal attention) have their pre-softmax attention logits set to a large negative number (-∞ or -1e9).\n\n💡 Subject-Related Example:\nA raw attention score of +4.5 is overridden with -∞ before Softmax. When Softmax calculates exp(-∞), the result is exactly 0.000, ensuring 0% attention weight allocation.\n\n🚀 Real-World AI Use Case:\nUniversal implementation of attention masking across deep learning frameworks (PyTorch `torch.nn.functional.scaled_dot_product_attention`, FlashAttention).",
      "why_we_need_it": "If we simply subtracted scores or set them to 0, Softmax would still assign them positive probability (since e^0 = 1.0). Setting scores to -∞ guarantees true 0 probability.",
      "how_it_works": "• Raw score z entering Softmax becomes -∞ for masked positions.\n• Softmax numerator: exp(-∞) = 0.\n• The masked position receives 0 / Sum = 0.0 weight in the output.",
      "formula": "exp(-∞) = 0 ==> Softmax(-∞) = 0.0 (0% attention)",
      "key_takeaways": [
        "⭐ Mathematical Certainty: exp(-∞) = 0 guarantees exact 0.0 probability.",
        "⭐ Pre-Softmax Application: Must be added before the Softmax exponentiation step.",
        "⭐ Universal Masking Mechanism: Used for both padding masks and causal look-ahead masks."
      ]
    },
    "sample_questions": [
      {
        "q": "If a forbidden attention logit was replaced by 0 instead of -∞ before Softmax, what would happen?",
        "options": [
          "The token receives non-zero weight (e^0 = 1), polluting the output",
          "The token receives zero weight",
          "The network crashes with division by zero",
          "Attention weights sum to 0"
        ],
        "ans": "The token receives non-zero weight (e^0 = 1), polluting the output",
        "exp": "e^0 = 1, which would incorrectly give positive attention probability to the forbidden token."
      },
      {
        "q": "What is the typical FP16 representation of negative infinity used in PyTorch masks?",
        "options": [
          "-65504 (or torch.finfo(torch.float16).min)",
          "-1e9",
          "-1.0",
          "-256"
        ],
        "ans": "-65504 (or torch.finfo(torch.float16).min)",
        "exp": "In FP16, the lowest representable finite number is -65504."
      }
    ]
  },
  {
    "id": "q20",
    "module_id": "mod3",
    "module_name": "Module 3: Transformer Architecture Deep-Dive",
    "syllabus_lec": "Lectures 27-28",
    "topic": "Token Independence in the Position-Wise Feed-Forward Sublayer",
    "difficulty": "Medium",
    "points": 1,
    "question": "Which Transformer sub-layer changes features within each token but does not directly exchange information between different token positions?",
    "options": [
      "Masked self-attention",
      "Encoder-decoder attention",
      "Multi-head self-attention",
      "Position-wise feed-forward network"
    ],
    "correct": "Position-wise feed-forward network",
    "explanation": "The Position-Wise Feed-Forward Network sublayer operates on each token representation independently and in parallel, applying identical weights without mixing information across different token positions.",
    "theory": {
      "title": "Position-Wise FFN Token Independence",
      "what_is_it": "In the Position-Wise Feed-Forward Network (FFN) sublayer, the exact same 2-layer MLP transformation is applied to each token vector independently, with zero cross-token parameter sharing or spatial mixing.\n\n💡 Subject-Related Example:\nIn a sequence of 50 tokens, each of the 50 token vectors is multiplied by weight matrices W₁ and W₂ at its own position independently, with no mathematical interaction between token i and token j.\n\n🚀 Real-World AI Use Case:\nAllows efficient batch matrix multiplication on GPUs `(Batch × Length, d_model) @ (d_model, d_ff)` while keeping token interaction isolated to the self-attention sublayer.",
      "why_we_need_it": "Token mixing is handled exclusively by the Self-Attention sublayer. The FFN focuses on transforming and refining the individual feature channels of each token.",
      "how_it_works": "• For input matrix X of shape (Batch B, Length N, Dim d_model), FFN treats it as (B · N) individual vectors of dimension d_model.\n• Each vector undergoes identical linear projection -> activation -> linear projection.",
      "formula": "FFN(x_i) depends ONLY on x_i (No terms involving x_j where j ≠ i)",
      "key_takeaways": [
        "⭐ Zero Token Mixing: FFN contains no inter-token connections or cross-position weights.",
        "⭐ Weight Sharing: Identical parameters (W1, b1, W2, b2) are applied across all token positions.",
        "⭐ Separation of Roles: Attention handles communication between tokens; FFN handles individual token feature transformation."
      ]
    },
    "sample_questions": [
      {
        "q": "Which sublayer in a Transformer accounts for the majority of trainable parameters (~66%) in that layer?",
        "options": [
          "Position-wise Feed-Forward Network (FFN)",
          "Multi-Head Attention",
          "LayerNorm scale and shift parameters",
          "Positional embeddings"
        ],
        "ans": "Position-wise Feed-Forward Network (FFN)",
        "exp": "Because FFN projects d_model -> 4d_model -> d_model, it holds the bulk of parameters."
      },
      {
        "q": "If you scramble the order of input tokens entering the FFN sublayer, how does each individual token's output change?",
        "options": [
          "Each token output remains completely identical (permutation equivariant)",
          "Outputs change drastically",
          "Outputs become zero",
          "The FFN throws an error"
        ],
        "ans": "Each token output remains completely identical (permutation equivariant)",
        "exp": "Because FFN processes each token in isolation without looking at other tokens."
      }
    ]
  },
  {
    "id": "q9",
    "module_id": "mod4",
    "module_name": "Module 4: Positional Encoding & Sequence Modeling",
    "syllabus_lec": "Lectures 29-30",
    "topic": "Why Self-Attention Requires Positional Information (Permutation Equivariance)",
    "difficulty": "Medium",
    "points": 1,
    "question": "Why does a Transformer need positional information in addition to token content for sequence modelling?",
    "options": [
      "Self-attention alone does not inherently encode token order",
      "Softmax cannot operate on token embeddings",
      "Residual connections erase token identities",
      "Value vectors cannot contain semantic information"
    ],
    "correct": "Self-attention alone does not inherently encode token order",
    "explanation": "Because self-attention operates on sets of tokens without inherent notion of sequence order (permutation-equivariant), positional encodings must be added to provide word order and position information.",
    "theory": {
      "title": "Permutation Equivariance & Need for Positional Encoding",
      "what_is_it": "Self-attention by itself is permutation-equivariant (order-agnostic): shuffling the input tokens produces the exact same representations, just in shuffled order. Positional encodings are unique vectors added element-wise to token embeddings to explicitly inject word sequence order.\n\n💡 Subject-Related Example:\nWithout positional encodings, the sentences 'Dog bites man' and 'Man bites dog' contain identical words and produce 100% identical attention score matrices. Adding positional vectors P₁, P₂, P₃ enables the model to distinguish subject from object.\n\n🚀 Real-World AI Use Case:\nImplemented via Sinusoidal encodings (original Transformer), Learned embeddings (BERT, ViT), or Rotary Position Embeddings (RoPE in LLaMA-3, Mistral) for long-context sequence modeling.",
      "why_we_need_it": "Human language and visual images depend completely on order and syntax. We must explicitly inject positional information into token embeddings.",
      "how_it_works": "• Generate a unique positional vector pos_i for each position i.\n• Add pos_i element-wise to the semantic token embedding token_i: Input = token_i + pos_i.",
      "formula": "x_final = Embedding(token) + Positional_Encoding(pos)",
      "key_takeaways": [
        "⭐ Permutation Equivariance: Without positional encodings, self-attention cannot distinguish word order.",
        "⭐ Method: Position vectors are added element-wise to token embeddings before Layer 1.",
        "⭐ Essential for Order: Differentiates sentences with identical words like 'Cat chased mouse' vs 'Mouse chased cat'."
      ]
    },
    "sample_questions": [
      {
        "q": "What mathematical property explains why self-attention cannot distinguish 'Dog bites man' from 'Man bites dog' without positional encodings?",
        "options": [
          "Permutation Equivariance (order invariance)",
          "Orthogonality",
          "Convexity",
          "Linear Separability"
        ],
        "ans": "Permutation Equivariance (order invariance)",
        "exp": "Without positional information, attention treats inputs as an unordered set of tokens."
      },
      {
        "q": "How were positional encodings constructed in the original 'Attention Is All You Need' paper?",
        "options": [
          "Using fixed sinusoidal functions of various frequencies (sine and cosine)",
          "Random Gaussian noise",
          "One-hot integer indices",
          "Learned discrete hash tables"
        ],
        "ans": "Using fixed sinusoidal functions of various frequencies (sine and cosine)",
        "exp": "The original Transformer used fixed sine and cosine functions: PE(pos, 2i) = sin(pos / 10000^(2i/d))."
      }
    ]
  },
  {
    "id": "q32",
    "module_id": "mod4",
    "module_name": "Module 4: Positional Encoding & Sequence Modeling",
    "syllabus_lec": "Lectures 29-30",
    "topic": "2D Spatial Coordinate Representation in Vision Transformers",
    "difficulty": "Medium",
    "points": 2,
    "question": "A ViT receives the same patch-content vectors in two different spatial orders but is given no positional information. What key distinction is the model least able to represent?",
    "options": [
      "The numerical values inside each patch vector",
      "The hidden dimension of the encoder",
      "The number of channels used by the input image",
      "Which patch content occurred at which image location"
    ],
    "correct": "Which patch content occurred at which image location",
    "explanation": "Vision Transformers use 2D positional representations (row and column coordinates) to preserve the spatial geometry and 2D layout of image patches.",
    "theory": {
      "title": "2D Spatial Coordinate Representation in Vision Transformers",
      "what_is_it": "In Vision Transformers, image patches are organized on a 2D spatial grid (rows and columns). Positional encodings represent both the horizontal (X) and vertical (Y) coordinates of each patch.\n\n💡 Subject-Related Example:\nA patch located at row 3, column 7 on a 14 × 14 grid receives a positional embedding representing its specific 2D coordinates on the image canvas.\n\n🚀 Real-World AI Use Case:\nPreserves geometric structure and spatial topology in vision models, enabling the network to differentiate top from bottom and foreground from background.",
      "why_we_need_it": "An image is fundamentally a 2D spatial surface. Without 2D spatial awareness, a patch from the sky could be confused with a patch from the ground.",
      "how_it_works": "• Patches are indexed by their grid position (i, j) where i ∈ [1, 14] and j ∈ [1, 14].\n• Learned 2D vectors (or decomposed 1D horizontal + 1D vertical vectors) are added to each patch embedding.",
      "formula": "Patch_Input[i, j] = Patch_Token[i, j] + Pos_Embedding[i, j]",
      "key_takeaways": [
        "⭐ Spatial Awareness: Injects 2D spatial layout (rows and columns) into patch representations.",
        "⭐ Bicubic Interpolation: When fine-tuning on larger images, 2D positional grids can be smoothly resized using 2D bicubic interpolation.",
        "⭐ Crucial for Vision: Preserves spatial geometry and structural relationships."
      ]
    },
    "sample_questions": [
      {
        "q": "Why do standard CNNs not strictly require positional encodings for classification while ViTs do?",
        "options": [
          "CNNs have built-in spatial inductive bias through local sliding 2D convolution filters",
          "CNNs do not use matrices",
          "CNNs have no parameters",
          "CNNs process text"
        ],
        "ans": "CNNs have built-in spatial inductive bias through local sliding 2D convolution filters",
        "exp": "Convolution operations naturally preserve 2D spatial grid neighborhood structures."
      },
      {
        "q": "When fine-tuning a ViT on higher resolution images (e.g. 224x224 to 384x384), what is done to the positional embedding table?",
        "options": [
          "2D bicubic interpolation to match the new patch grid count",
          "Discard the model weights",
          "Zero padding only",
          "Halve the hidden dimension"
        ],
        "ans": "2D bicubic interpolation to match the new patch grid count",
        "exp": "The increased grid of patches requires interpolating the learned positional embeddings."
      }
    ]
  },
  {
    "id": "q21",
    "module_id": "mod5",
    "module_name": "Module 5: Vision Transformers (ViT, Swin, CaiT)",
    "syllabus_lec": "Lecture 31",
    "topic": "Image Patch Partitioning Formula (16×16 Patches on 224×224 Image)",
    "difficulty": "Medium",
    "points": 1,
    "question": "A 224 × 224 image is split into non-overlapping 16 × 16 patches. How many image patches are produced?",
    "options": [
      "144",
      "196",
      "256",
      "224"
    ],
    "correct": "196",
    "explanation": "The number of patches is calculated as N = (H × W) / P² = (224 × 224) / (16 × 16) = 14 × 14 = 196 patches.",
    "theory": {
      "title": "Image Patch Partitioning Formula (16×16 on 224×224)",
      "what_is_it": "A Vision Transformer (ViT) processes a 2D photograph by slicing it into a grid of non-overlapping square patches of size P × P. The total number of patches is calculated as N = (H × W) / P².\n\n💡 Subject-Related Example:\nFor a standard 224 × 224 pixel input image with 16 × 16 pixel patches: Vertical patches = 224 / 16 = 14, Horizontal patches = 224 / 16 = 14. Total patches = 14 × 14 = 196 patches.\n\n🚀 Real-World AI Use Case:\nStandard visual tokenization in Vision Transformers (ViT-Base/16, CLIP, DALL-E, Google Gemini Vision) to convert continuous 2D images into 1D sequences of discrete visual tokens.",
      "why_we_need_it": "Transformers cannot process 224×224 = 50,176 individual pixels directly because self-attention on 50,176 tokens would require a 2.5-Billion cell matrix (O(N²))! Slicing into 196 patches reduces sequence length to a manageable 196 tokens.",
      "how_it_works": "• Number of vertical patches: H / P = 224 / 16 = 14.\n• Number of horizontal patches: W / P = 224 / 16 = 14.\n• Total patches: N = 14 × 14 = 196 patches.",
      "formula": "N = (H × W) / P² = (H / P) × (W / P) = (224 / 16)² = 14² = 196",
      "key_takeaways": [
        "⭐ Standard ViT Benchmark: 224×224 image with 16×16 patches produces exactly 196 patches.",
        "⭐ Grid Shape: Forms a 14 × 14 spatial patch grid.",
        "⭐ Resolution Scaling: Doubling image resolution quadruples the patch count."
      ]
    },
    "sample_questions": [
      {
        "q": "For a 256 × 256 image split into 16 × 16 patches, how many patches are produced?",
        "options": [
          "256 (since 16 × 16 = 256)",
          "196",
          "144",
          "512"
        ],
        "ans": "256 (since 16 × 16 = 256)",
        "exp": "(256/16) × (256/16) = 16 × 16 = 256."
      },
      {
        "q": "If an image is 384 × 384 and patch size is 32 × 32, how many patches are obtained?",
        "options": [
          "144 (since 12 × 12 = 144)",
          "196",
          "169",
          "256"
        ],
        "ans": "144 (since 12 × 12 = 144)",
        "exp": "(384/32) × (384/32) = 12 × 12 = 144."
      }
    ]
  },
  {
    "id": "q22",
    "module_id": "mod5",
    "module_name": "Module 5: Vision Transformers (ViT, Swin, CaiT)",
    "syllabus_lec": "Lecture 31",
    "topic": "Encoder Sequence Length with the Added [CLS] Classification Token",
    "difficulty": "Medium",
    "points": 2,
    "question": "For the 224 × 224 image with 16 × 16 patches, what is the encoder sequence length after one CLS token is prepended?",
    "options": [
      "198",
      "196",
      "197",
      "225"
    ],
    "correct": "197",
    "explanation": "Prepending one learned classification token ([CLS]) to the 196 visual patch tokens yields a total sequence length of 196 + 1 = 197 tokens.",
    "theory": {
      "title": "Sequence Length with the Added [CLS] Classification Token",
      "what_is_it": "Before feeding the 196 image patch tokens into the Transformer encoder, ViT prepends a single extra learnable [CLS] classification token at index 0, resulting in a total sequence length of N + 1 = 196 + 1 = 197 tokens.\n\n💡 Subject-Related Example:\nFor 196 visual patches, prepending [CLS] at position index 0 expands sequence length to 197. After passing through 12 Transformer layers, the final-layer representation of [CLS] is fed into an MLP classification head to predict the image class.\n\n🚀 Real-World AI Use Case:\nStandard classification architecture for ImageNet-1k benchmark models and visual feature extraction in multimodal systems.",
      "why_we_need_it": "Since no single patch represents the whole image, the [CLS] token interacts with all 196 patches via self-attention and aggregates global image meaning into a single feature vector for classification.",
      "how_it_works": "• Start with 196 image patch tokens.\n• Prepend 1 [CLS] token at position index 0.\n• Total sequence length entering Layer 1: N_total = 196 + 1 = 197 tokens.",
      "formula": "Total Sequence Length = N_patches + 1 = 196 + 1 = 197",
      "key_takeaways": [
        "⭐ +1 Rule: The sequence length is always (Number of Patches + 1).",
        "⭐ Output Routing: Only the final-layer representation of the [CLS] token is sent to the MLP classification head.",
        "⭐ Direct Analogy to BERT: Borrowed directly from BERT's [CLS] token for sentence classification."
      ]
    },
    "sample_questions": [
      {
        "q": "If a ViT receives 49 image patches and includes one [CLS] token, what is the total sequence length?",
        "options": [
          "50 (since 49 + 1 = 50)",
          "49",
          "98",
          "100"
        ],
        "ans": "50 (since 49 + 1 = 50)",
        "exp": "N + 1 = 49 + 1 = 50."
      },
      {
        "q": "What is an alternative to using a [CLS] token for image classification in ViT?",
        "options": [
          "Global Average Pooling (GAP) across all output patch tokens",
          "Taking only the last patch token",
          "Discarding all patch embeddings",
          "Adding an RNN layer"
        ],
        "ans": "Global Average Pooling (GAP) across all output patch tokens",
        "exp": "Averaging all patch tokens is an alternative way to get a global image vector."
      }
    ]
  },
  {
    "id": "q23",
    "module_id": "mod5",
    "module_name": "Module 5: Vision Transformers (ViT, Swin, CaiT)",
    "syllabus_lec": "Lecture 31",
    "topic": "Image Patch Partitioning with Larger Patches (32×32 Patches)",
    "difficulty": "Medium",
    "points": 1,
    "question": "A 224 × 224 image uses 32 × 32 non-overlapping patches. How many patch tokens are created before adding any special token?",
    "options": [
      "49",
      "196",
      "98",
      "64"
    ],
    "correct": "49",
    "explanation": "Dividing a 224 × 224 image into 32 × 32 patches produces (224 / 32) × (224 / 32) = 7 × 7 = 49 patches.",
    "theory": {
      "title": "Image Patch Partitioning with 32×32 Patches",
      "what_is_it": "When using larger 32 × 32 pixel patches on a 224 × 224 image, fewer patches are created: N = (224 / 32) × (224 / 32) = 7 × 7 = 49 patches.\n\n💡 Subject-Related Example:\nViT-B/32 produces (224/32)² = 49 patches (+1 [CLS] token = 50 tokens total), which is 4 times fewer tokens than ViT-B/16 (196 patches).\n\n🚀 Real-World AI Use Case:\nUsed in lightweight vision models (ViT-B/32) to achieve faster inference and lower GPU memory usage for edge devices and real-time video processing.",
      "why_we_need_it": "Larger patches mean fewer tokens (49 vs 196), making the model 16x faster to train, though with slightly coarser fine detail.",
      "how_it_works": "• Vertical patches = 224 / 32 = 7.\n• Horizontal patches = 224 / 32 = 7.\n• Total patches = 7 × 7 = 49 patches.",
      "formula": "N = (224 / 32)² = 7² = 49 patches",
      "key_takeaways": [
        "⭐ Calculation: (224 / 32) × (224 / 32) = 7 × 7 = 49 patches.",
        "⭐ With [CLS]: Total sequence length with [CLS] is 49 + 1 = 50 tokens.",
        "⭐ Speed vs Detail: 32×32 is much faster than 16×16 but captures less fine spatial detail."
      ]
    },
    "sample_questions": [
      {
        "q": "In the standard naming convention 'ViT-B/32', what does the number 32 represent?",
        "options": [
          "32 × 32 pixel patch size",
          "32 encoder layers",
          "32 attention heads",
          "32 color channels"
        ],
        "ans": "32 × 32 pixel patch size",
        "exp": "In ViT notation, the suffix after '/' denotes patch dimension P in pixels."
      },
      {
        "q": "How does attention memory in ViT-B/32 (49 tokens) compare to ViT-B/16 (196 tokens)?",
        "options": [
          "ViT-B/32 uses 16x less attention matrix memory (since 196/49 = 4, and 4² = 16)",
          "They use equal memory",
          "ViT-B/32 uses 2x more memory",
          "ViT-B/32 uses 4x more memory"
        ],
        "ans": "ViT-B/32 uses 16x less attention matrix memory (since 196/49 = 4, and 4² = 16)",
        "exp": "Attention matrix memory scales quadratically with sequence length."
      }
    ]
  },
  {
    "id": "q24",
    "module_id": "mod5",
    "module_name": "Module 5: Vision Transformers (ViT, Swin, CaiT)",
    "syllabus_lec": "Lecture 31",
    "topic": "Effect of Halving Patch Size on Total Token Count (Inverse Quadratic Law)",
    "difficulty": "Hard",
    "points": 2,
    "question": "A ViT changes its patch size from 16 × 16 to 8 × 8 while image resolution stays unchanged. By what factor does the number of patch tokens change?",
    "options": [
      "It becomes 4 times larger",
      "It becomes 8 times larger",
      "It becomes 2 times larger",
      "It is unchanged"
    ],
    "correct": "It becomes 4 times larger",
    "explanation": "Because patch count scales as 1/P², halving the patch dimension (from 16 to 8) multiplies the total number of patches by (16/8)² = 2² = 4 (e.g. 196 becomes 784).",
    "theory": {
      "title": "Effect of Halving Patch Size (Inverse Quadratic Scaling)",
      "what_is_it": "Because patch count scales inversely with the square of patch size (N ∝ 1/P²), halving the patch size (e.g. from 16×16 down to 8×8) quadruples (4x) the total number of patches produced from the same image.\n\n💡 Subject-Related Example:\nFor a 224 × 224 image: at P = 16, patch count is (224/16)² = 196 patches. At P = 8, patch count is (224/8)² = 784 patches (784 = 4 × 196). Self-attention computation increases by (4)² = 16x.\n\n🚀 Real-World AI Use Case:\nHigh-resolution fine-grained visual recognition (e.g. medical pathology scans and satellite imagery) where capturing tiny spatial details warrants higher token counts.",
      "why_we_need_it": "Understanding how token count scales with patch size is essential for balancing visual granularity against quadratic attention compute.",
      "how_it_works": "• Patch count formula: N = (H · W) / P².\n• If patch size becomes P/2: N_new = (H · W) / (P/2)² = (H · W) / (P² / 4) = 4 · N.\n• For a 224×224 image: at P=16 -> 196 patches; at P=8 -> (224/8)² = 28² = 784 patches (784 = 4 × 196).",
      "formula": "N ∝ 1 / P² ==> Halving P (P/2) multiplies N by (2)² = 4",
      "key_takeaways": [
        "⭐ Inverse Quadratic Law: Patch count scales inversely with the square of the patch size.",
        "⭐ Token Factor: Halving patch size increases token count by exactly 4x.",
        "⭐ Attention Impact: 4x tokens increases self-attention computation by 4² = 16x!"
      ]
    },
    "sample_questions": [
      {
        "q": "If patch size is doubled from 8×8 to 16×16, the number of tokens:",
        "options": [
          "Decreases to 1/4th",
          "Decreases to 1/2",
          "Increases 4x",
          "Stays constant"
        ],
        "ans": "Decreases to 1/4th",
        "exp": "Doubling P multiplies denominator by 4, reducing N to 1/4."
      },
      {
        "q": "If patch size is halved from 16 to 8, what happens to the attention matrix memory cost?",
        "options": [
          "Increases by 16x (since 4² = 16)",
          "Increases by 4x",
          "Increases by 8x",
          "Stays constant"
        ],
        "ans": "Increases by 16x (since 4² = 16)",
        "exp": "Token count grows by 4x, and attention cost scales quadratically (4)² = 16x."
      }
    ]
  },
  {
    "id": "q25",
    "module_id": "mod5",
    "module_name": "Module 5: Vision Transformers (ViT, Swin, CaiT)",
    "syllabus_lec": "Lecture 31",
    "topic": "Flattened Patch Dimensionality Calculation (Height × Width × Channels = 768)",
    "difficulty": "Medium",
    "points": 2,
    "question": "For an RGB image, how many scalar pixel values are contained in a flattened 16 × 16 patch before linear projection?",
    "options": [
      "256",
      "512",
      "768",
      "1024"
    ],
    "correct": "768",
    "explanation": "A 16 × 16 patch in a 3-channel RGB image contains 16 × 16 × 3 = 768 scalar pixel values when flattened into a 1D vector.",
    "theory": {
      "title": "Flattened Patch Dimensionality (P × P × C = 768)",
      "what_is_it": "Before an image patch is linearly projected into the Transformer, its 3D pixel block (Height P × Width P × Color Channels C) is flattened into a 1D vector containing P × P × C scalar pixel values.\n\n💡 Subject-Related Example:\nFor a 16 × 16 patch from a 3-channel RGB image, flattened patch dimensionality is 16 × 16 × 3 = 256 × 3 = 768 scalar pixel numbers.\n\n🚀 Real-World AI Use Case:\nForms the 768-dimensional input vector that is multiplied by linear patch projection matrix E (768 × d_model) in ViT-Base models.",
      "why_we_need_it": "Neural network linear layers expect 1D feature vectors as input. Flattening unrolls the 3D RGB patch into a 1D vector of 768 numbers.",
      "how_it_works": "• Patch Height = 16 pixels.\n• Patch Width = 16 pixels.\n• Color Channels = 3 (Red, Green, Blue).\n• Total scalar pixel values = 16 × 16 × 3 = 256 × 3 = 768 numbers.",
      "formula": "Flattened Size = P × P × C = 16 × 16 × 3 = 768",
      "key_takeaways": [
        "⭐ Flattened RGB Dimension: Exactly 768 raw pixel values per 16×16 RGB patch.",
        "⭐ Input to Linear Projection: The 768-dim vector is multiplied by projection matrix E (768 × d_model).",
        "⭐ Grayscale Contrast: For a 1-channel grayscale image, flattened size would be 16 × 16 × 1 = 256."
      ]
    },
    "sample_questions": [
      {
        "q": "For a grayscale image (Channels=1) with 16×16 patches, what is the flattened vector length?",
        "options": [
          "256 (since 16 × 16 × 1 = 256)",
          "768",
          "16",
          "512"
        ],
        "ans": "256 (since 16 × 16 × 1 = 256)",
        "exp": "16 × 16 × 1 = 256."
      },
      {
        "q": "For an RGB image (Channels=3) with 32×32 patches, what is the flattened vector length?",
        "options": [
          "3072 (since 32 × 32 × 3 = 3072)",
          "1024",
          "2048",
          "4096"
        ],
        "ans": "3072 (since 32 × 32 × 3 = 3072)",
        "exp": "32 × 32 × 3 = 1024 × 3 = 3072."
      }
    ]
  },
  {
    "id": "q26",
    "module_id": "mod5",
    "module_name": "Module 5: Vision Transformers (ViT, Swin, CaiT)",
    "syllabus_lec": "Lecture 31",
    "topic": "Role of Linear Patch Projection in Mapping Pixels to Transformer Hidden Space",
    "difficulty": "Easy",
    "points": 1,
    "question": "What determines the dimensionality of each patch token after the ViT patch-projection layer?",
    "options": [
      "The Transformer's chosen hidden size",
      "The image filename length",
      "The number of training epochs",
      "The number of image classes only"
    ],
    "correct": "The Transformer's chosen hidden size",
    "explanation": "The linear patch projection maps flattened raw pixel vectors into the continuous latent hidden space (d_model) of the Transformer encoder.",
    "theory": {
      "title": "Linear Patch Projection in Vision Transformers",
      "what_is_it": "Linear patch projection is a learned weight matrix E that linearly transforms the flattened raw pixel values (e.g. 768 numbers) of each patch into the Transformer hidden embedding dimension (d_model).\n\n💡 Subject-Related Example:\nMultiplying flattened patch vector (1 × 768) by projection matrix E (768 × 768) produces a (1 × 768) visual token vector ready for self-attention.\n\n🚀 Real-World AI Use Case:\nImplemented efficiently in PyTorch as a 2D convolution (`torch.nn.Conv2d(in_channels=3, out_channels=768, kernel_size=16, stride=16)`).",
      "why_we_need_it": "Raw pixel numbers are noisy and high-dimensional. Projection maps them into a semantic hidden space where the Transformer can learn abstract visual relationships.",
      "how_it_works": "• Flattened patch vector x_p has dimension 768.\n• Multiply by learned projection matrix E of shape (768 × d_model).\n• Result is a token vector of dimension d_model ready for self-attention.",
      "formula": "Patch_Token = x_patch · E, where E ∈ ℝ^(768 × d_model)",
      "key_takeaways": [
        "⭐ Dimensional Bridge: Projects flattened pixel tensors into the Transformer hidden dimension.",
        "⭐ Learnable Weights: The projection weights are trained end-to-end via gradient descent.",
        "⭐ Implementation Trick: Can be implemented efficiently as a 2D convolution with kernel size 16×16 and stride 16."
      ]
    },
    "sample_questions": [
      {
        "q": "In PyTorch, which nn.Conv2d layer implements non-overlapping patch projection for P=16 and d_model=768 on RGB images?",
        "options": [
          "nn.Conv2d(in_channels=3, out_channels=768, kernel_size=16, stride=16)",
          "nn.Conv2d(in_channels=3, out_channels=768, kernel_size=1, stride=1)",
          "nn.Conv2d(in_channels=768, out_channels=3, kernel_size=16, stride=1)",
          "nn.Conv2d(in_channels=3, out_channels=196, kernel_size=3, stride=1)"
        ],
        "ans": "nn.Conv2d(in_channels=3, out_channels=768, kernel_size=16, stride=16)",
        "exp": "A convolution with kernel size and stride equal to patch size (16) extracts and linearly projects non-overlapping patches."
      },
      {
        "q": "If we change our classification dataset from 10 classes to 1,000 classes, does the patch projection dimension change?",
        "options": [
          "No, it remains equal to d_model (only the final classification head changes)",
          "Yes, it becomes 1000",
          "Yes, patch size must decrease",
          "It resets to 3"
        ],
        "ans": "No, it remains equal to d_model (only the final classification head changes)",
        "exp": "Patch projection maps pixels into d_model; only the final linear head output changes."
      }
    ]
  },
  {
    "id": "q27",
    "module_id": "mod5",
    "module_name": "Module 5: Vision Transformers (ViT, Swin, CaiT)",
    "syllabus_lec": "Lecture 31",
    "topic": "Total Number of Positional Embeddings Required (N patches + 1 [CLS])",
    "difficulty": "Medium",
    "points": 1,
    "question": "In a standard ViT with a CLS token, how many positional embeddings are needed for an input sequence of 196 patches?",
    "options": [
      "392",
      "196",
      "195",
      "197"
    ],
    "correct": "197",
    "explanation": "A ViT with 196 image patches and 1 added [CLS] classification token has a total sequence length of 197, requiring exactly 197 learned positional embeddings.",
    "theory": {
      "title": "Total Positional Embeddings in ViT (N patches + 1 [CLS])",
      "what_is_it": "In Vision Transformers, every token in the input sequence—including all N image patches plus the prepended [CLS] classification token—requires its own dedicated learned positional embedding vector.\n\n💡 Subject-Related Example:\nFor a ViT with 196 image patches and 1 [CLS] token, the positional embedding table contains exactly 196 + 1 = 197 vectors of dimension d_model (e.g. shape 197 × 768), added element-wise before Layer 1.\n\n🚀 Real-World AI Use Case:\nMaintains spatial awareness in ViT models, allowing the self-attention mechanism to recognize relative and absolute spatial patch positions on the 2D canvas.",
      "why_we_need_it": "Without positional embeddings for all tokens, the model would not know which patch came from which image location, and the [CLS] token wouldn't have a designated position at index 0.",
      "how_it_works": "• Total input tokens = 196 patches + 1 [CLS] token = 197 tokens.\n• Positional embedding table has shape: (197 × d_model).\n• Added element-wise to the token embeddings: Input = Tokens + Pos_Embeddings.",
      "formula": "Total Positional Vectors = N + 1 = 196 + 1 = 197",
      "key_takeaways": [
        "⭐ Exact Count: Requires 197 positional embeddings for 196 patches + 1 [CLS] token.",
        "⭐ 1D or 2D Learned: Usually initialized randomly and learned during pre-training.",
        "⭐ Element-Wise Addition: Positional vectors are added directly to the projected patch tokens."
      ]
    },
    "sample_questions": [
      {
        "q": "If a ViT has 64 image patches and uses both a [CLS] token and a [DISTILLATION] token (like DeiT), how many positional embeddings are needed?",
        "options": [
          "66 (since 64 + 1 + 1 = 66)",
          "64",
          "65",
          "128"
        ],
        "ans": "66 (since 64 + 1 + 1 = 66)",
        "exp": "64 + 1 + 1 = 66."
      },
      {
        "q": "What happens if you try to add 196 positional embeddings to a sequence that has 197 tokens?",
        "options": [
          "PyTorch throws a tensor shape mismatch runtime error during element-wise addition",
          "The model works fine",
          "The [CLS] token is automatically deleted",
          "Image size doubles"
        ],
        "ans": "PyTorch throws a tensor shape mismatch runtime error during element-wise addition",
        "exp": "Element-wise addition requires identical tensor shapes."
      }
    ]
  },
  {
    "id": "q28",
    "module_id": "mod5",
    "module_name": "Module 5: Vision Transformers (ViT, Swin, CaiT)",
    "syllabus_lec": "Lecture 31",
    "topic": "Nature and Initialization of the Learned [CLS] Token",
    "difficulty": "Medium",
    "points": 1,
    "question": "Which statement best describes the initial CLS token used in a standard Vision Transformer?",
    "options": [
      "It is the average RGB value of the image",
      "It is a learned embedding prepended to the patch sequence",
      "It is the brightest image patch selected at runtime",
      "It is a fixed one-hot vector for the predicted class"
    ],
    "correct": "It is a learned embedding prepended to the patch sequence",
    "explanation": "The [CLS] token is a randomly initialized, learnable 1D vector prepended at index 0 that learns to aggregate global image context for classification.",
    "theory": {
      "title": "Learned Nature & Initialization of the [CLS] Token",
      "what_is_it": "The [CLS] token is a standalone, randomly initialized, learnable 1D parameter vector prepended to the patch sequence at index 0, rather than being extracted from any image pixels.\n\n💡 Subject-Related Example:\nInitialized as a trainable parameter of shape (1 × d_model), the [CLS] token attends to all 196 visual patches across all 12 layers to aggregate global image context for final classification.\n\n🚀 Real-World AI Use Case:\nStandard design pattern borrowed from BERT for global sequence classification in Vision Transformers and vision-language models.",
      "why_we_need_it": "Because self-attention allows all tokens to communicate, the [CLS] token gathers summary information from all patches across all 12 layers, serving as a clean aggregate representation for the classification head.",
      "how_it_works": "• Initialized as a trainable parameter vector of shape (1 × d_model).\n• Prepended to patch embeddings at index 0 before Layer 1.\n• Updates via backpropagation just like any other model weight.",
      "formula": "[CLS] ∈ ℝ^(1 × d_model) initialized randomly and learned end-to-end",
      "key_takeaways": [
        "⭐ Not from Pixels: Contains no image pixels; it is a purely learnable parameter.",
        "⭐ Prepended at Index 0: Positioned at the very front of the sequence.",
        "⭐ Classifier Input: Final-layer output of [CLS] is passed directly to the MLP classification head."
      ]
    },
    "sample_questions": [
      {
        "q": "How is the [CLS] token initialized in standard PyTorch ViT implementations?",
        "options": [
          "As zeros, small random normal values, or truncated normal weights",
          "From the first 16x16 pixels of the image",
          "As the class label integer",
          "As an empty tensor"
        ],
        "ans": "As zeros, small random normal values, or truncated normal weights",
        "exp": "It is a learnable parameter tensor initialized before training."
      },
      {
        "q": "Why does the [CLS] token attend to all other patches in the image?",
        "options": [
          "To collect high-level semantic features needed to classify the image",
          "To average pixel RGB values",
          "To compress the image into JPEG",
          "To compute optical flow"
        ],
        "ans": "To collect high-level semantic features needed to classify the image",
        "exp": "Attention allows it to act as an information sponge for classification."
      }
    ]
  },
  {
    "id": "q29",
    "module_id": "mod5",
    "module_name": "Module 5: Vision Transformers (ViT, Swin, CaiT)",
    "syllabus_lec": "Lecture 31",
    "topic": "Global Receptive Field in Vision Transformers vs Local CNN Filters",
    "difficulty": "Medium",
    "points": 2,
    "question": "Which ViT component directly allows a patch token in the top-left region to incorporate information from a distant bottom-right patch in one encoder layer?",
    "options": [
      "Patch flattening",
      "Self-attention",
      "Linear patch projection",
      "Classification softmax"
    ],
    "correct": "Self-attention",
    "explanation": "Unlike Convolutional Neural Networks whose initial layers have small, local receptive fields (e.g. 3×3), Vision Transformers possess a global receptive field from Layer 1 via full self-attention.",
    "theory": {
      "title": "Global Receptive Field: ViT vs Local CNN Filters",
      "what_is_it": "Unlike Convolutional Neural Networks (CNNs) whose initial layers are restricted to small local receptive fields (e.g. 3×3 pixels), Vision Transformers possess an immediate global receptive field in Layer 1 via full self-attention.\n\n💡 Subject-Related Example:\nIn Layer 1 of a ViT, a patch in the top-left corner of an image can compute attention directly with a patch in the bottom-right corner, capturing whole-image spatial context immediately.\n\n🚀 Real-World AI Use Case:\nAllows Vision Transformers to excel at global semantic scene understanding and long-range visual relationship modeling compared to traditional CNN backbones.",
      "why_we_need_it": "Global receptive field allows ViT to instantly connect opposite corners of an image (e.g. connecting a dog's nose in the top-left to its tail in the bottom-right) without needing 50 convolutional layers.",
      "how_it_works": "• Self-attention computes pairwise scores between all 196 patches in Layer 1.\n• Receptive field is 100% global from the very first self-attention operation.",
      "formula": "ViT Layer 1 Receptive Field = Full Image (Global)",
      "key_takeaways": [
        "⭐ Immediate Global Context: ViT captures whole-image relationships right from Layer 1.",
        "⭐ CNN Contrast: CNNs require stacking many layers to gradually expand their receptive field.",
        "⭐ Long-Range Dependencies: Excels at understanding complex spatial scenes and relationships."
      ]
    },
    "sample_questions": [
      {
        "q": "How many layers does a ViT need to connect opposite corners of an image compared to a CNN?",
        "options": [
          "1 layer for ViT, but many deep layers for CNN",
          "1 layer for CNN, 10 layers for ViT",
          "They are identical",
          "CNNs can never connect opposite corners"
        ],
        "ans": "1 layer for ViT, but many deep layers for CNN",
        "exp": "ViT self-attention is global across all patches in every layer."
      },
      {
        "q": "What is the tradeoff for ViT's immediate global receptive field compared to CNNs?",
        "options": [
          "ViT has higher quadratic computational cost and requires larger training datasets due to lack of local inductive bias",
          "ViT cannot handle color images",
          "ViT cannot run on GPUs",
          "ViT has no parameters"
        ],
        "ans": "ViT has higher quadratic computational cost and requires larger training datasets due to lack of local inductive bias",
        "exp": "Without CNN's built-in 2D bias, ViTs require more data (e.g. ImageNet-21k / JFT) to learn spatial patterns."
      }
    ]
  },
  {
    "id": "q30",
    "module_id": "mod5",
    "module_name": "Module 5: Vision Transformers (ViT, Swin, CaiT)",
    "syllabus_lec": "Lecture 31",
    "topic": "Effect of Doubling Image Resolution on Patch Token Count",
    "difficulty": "Hard",
    "points": 2,
    "question": "Image resolution increases from 224 × 224 to 448 × 448 while patch size remains 16 × 16. How does the number of patch tokens change?",
    "options": [
      "It becomes 8 times larger",
      "It becomes 4 times larger",
      "It remains the same",
      "It becomes 2 times larger"
    ],
    "correct": "It becomes 4 times larger",
    "explanation": "Doubling both height and width quadruples the 2D area (2 × 2 = 4), increasing the total patch count by a factor of 4 at fixed patch size.",
    "theory": {
      "title": "Effect of Doubling Image Resolution on Patch Count",
      "what_is_it": "If you double both the height and width of an image (e.g. from 224×224 to 448×448) at fixed patch size (16×16), the total 2D area quadruples (2 × 2 = 4), increasing the patch token count by exactly 4x.\n\n💡 Subject-Related Example:\nOriginal 224×224: (224/16)² = 196 patches. Doubled 448×448: (448/16)² = 28 × 28 = 784 patches (784 = 4 × 196).\n\n🚀 Real-World AI Use Case:\nFine-tuning pre-trained Vision Transformers at higher resolutions for object detection and image segmentation tasks using 2D bicubic positional interpolation.",
      "why_we_need_it": "Higher resolution yields more fine visual details, but dramatically increases token count and attention compute.",
      "how_it_works": "• Original 224×224: (224 / 16)² = 14 × 14 = 196 patches.\n• Doubled 448×448: (448 / 16)² = 28 × 28 = 784 patches.\n• 784 / 196 = 4x more patches.",
      "formula": "Patches = (2H × 2W) / P² = 4 × ((H × W) / P²)",
      "key_takeaways": [
        "⭐ 4x Scaling: Doubling 2D image dimensions quadruples the patch count.",
        "⭐ 16x Attention FLOPs: Because attention is O(N²), 4x patches causes (4)² = 16x more compute!",
        "⭐ Interpolation: Position embeddings must be bicubic-interpolated when moving to higher resolutions."
      ]
    },
    "sample_questions": [
      {
        "q": "If image resolution is tripled along both dimensions (e.g. 100×100 to 300×300) with constant patch size, token count grows by:",
        "options": [
          "9x (since 3² = 9)",
          "3x",
          "6x",
          "27x"
        ],
        "ans": "9x (since 3² = 9)",
        "exp": "3 × 3 = 9x."
      },
      {
        "q": "What happens to self-attention memory when image resolution doubles from 224 to 448?",
        "options": [
          "Increases by 16x",
          "Increases by 4x",
          "Increases by 2x",
          "Remains unchanged"
        ],
        "ans": "Increases by 16x",
        "exp": "Patch tokens increase by 4x, and attention cost scales quadratically (4)² = 16x."
      }
    ]
  },
  {
    "id": "q31",
    "module_id": "mod5",
    "module_name": "Module 5: Vision Transformers (ViT, Swin, CaiT)",
    "syllabus_lec": "Lecture 31",
    "topic": "Computational Bottleneck of Small Patches and Shifted Windows (Swin)",
    "difficulty": "Hard",
    "points": 2,
    "question": "What is the main self-attention cost implication of using substantially smaller patches in a ViT at fixed image resolution?",
    "options": [
      "The number of image channels automatically increases",
      "The token sequence becomes shorter and attention becomes more expensive",
      "Patch projection disappears completely",
      "A longer token sequence makes the attention matrix much larger"
    ],
    "correct": "A longer token sequence makes the attention matrix much larger",
    "explanation": "Swin Transformer restricts self-attention computation to local shifted windows, achieving linear computational complexity O(N) with respect to image token count.",
    "theory": {
      "title": "Shifted Local Windows in Swin Transformers (O(N) Complexity)",
      "what_is_it": "The Swin Transformer restricts self-attention computation to local non-overlapping windows (e.g. 7×7 patches) and shifts window boundaries between consecutive layers, achieving linear computational complexity O(N) instead of quadratic O(N²).\n\n💡 Subject-Related Example:\nIn a high-resolution image with 10,000 patches, standard ViT requires 100,000,000 attention comparisons (quadratic), whereas Swin computes attention in local 7×7 windows, scaling strictly linearly with patch count.\n\n🚀 Real-World AI Use Case:\nWidely used as the vision backbone for dense downstream computer vision tasks like dense object detection (Cascade Mask R-CNN) and semantic segmentation.",
      "why_we_need_it": "Standard ViT's quadratic complexity O(N²) becomes computationally impossible for high-resolution images (e.g. 4K images or dense object detection). Swin makes attention scalable.",
      "how_it_works": "• Layer L: Computes attention within non-overlapping M × M local windows.\n• Layer L+1: Shifts window boundaries by (⌊M/2⌋, ⌊M/2⌋) pixels, allowing cross-window communication.\n• Computational complexity is strictly linear O(N) with image size.",
      "formula": "Swin Complexity = O(N · M²), where window size M is a small constant (e.g. 7)",
      "key_takeaways": [
        "⭐ Linear Complexity O(N): Solves the quadratic bottleneck for high-resolution images.",
        "⭐ Shifted Window Mechanism: Shifts window partitions between consecutive layers for cross-window interaction.",
        "⭐ Vision Backbone: Widely used for dense prediction tasks like object detection and segmentation."
      ]
    },
    "sample_questions": [
      {
        "q": "Which Vision Transformer architecture solves the quadratic attention bottleneck by computing attention inside local shifted windows?",
        "options": [
          "Swin Transformer",
          "ViT-Base",
          "AlexNet",
          "BERT-Vision"
        ],
        "ans": "Swin Transformer",
        "exp": "Swin restricts attention to local windows, achieving linear O(N) complexity."
      },
      {
        "q": "Why is pixel-level attention (P = 1 × 1) impractical for standard 224 × 224 images?",
        "options": [
          "Sequence length would be 50,176 tokens, creating an attention matrix of ~2.5 billion elements per head",
          "Images cannot be split into pixels",
          "Pixels have negative values",
          "Color information is lost"
        ],
        "ans": "Sequence length would be 50,176 tokens, creating an attention matrix of ~2.5 billion elements per head",
        "exp": "The resulting 2.5B float score matrix would instantly crash GPU VRAM."
      }
    ]
  },
  {
    "id": "q33",
    "module_id": "mod5",
    "module_name": "Module 5: Vision Transformers (ViT, Swin, CaiT)",
    "syllabus_lec": "Lecture 31",
    "topic": "Primary Function of Linear Patch Projection",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the primary job of the initial linear projection applied to each flattened image patch in a ViT?",
    "options": [
      "Generate a causal language-model mask",
      "Compute relationships between every pair of patches",
      "Map the patch vector into the Transformer embedding space",
      "Predict the final image class directly"
    ],
    "correct": "Map the patch vector into the Transformer embedding space",
    "explanation": "The primary role of the linear patch projection is to map raw flattened image patch pixels into the continuous hidden embedding dimension (d_model) of the Transformer.",
    "theory": {
      "title": "Primary Function of Linear Patch Projection",
      "what_is_it": "The primary role of the linear patch projection is to map raw flattened image patch pixels (e.g. 768 values) into the continuous latent hidden embedding space (d_model) of the Transformer.\n\n💡 Subject-Related Example:\nMaps discrete RGB pixel intensity values [0-255] into high-dimensional continuous feature vectors (e.g. dimension 768) that can interact in self-attention layers.\n\n🚀 Real-World AI Use Case:\nUniversal visual tokenizer in multimodal architectures (CLIP, LLaVA, GPT-4o) converting raw pixels into Transformer tokens.",
      "why_we_need_it": "Transformers require all tokens to have a consistent vector dimension (d_model) throughout all encoder layers.",
      "how_it_works": "• Each 16×16 RGB patch has 16 × 16 × 3 = 768 numbers.\n• Linear projection matrix E has shape (768 × d_model).\n• Multiplying (1 × 768) × (768 × d_model) produces a (1 × d_model) token vector.",
      "formula": "Token = Flattened_Patch · E",
      "key_takeaways": [
        "⭐ Pixel-to-Hidden Mapping: Converts raw pixel values into the latent embedding dimension.",
        "⭐ Preserves Sequence: Produces 1 token vector per image patch.",
        "⭐ Trainable Feature Extractor: Learns optimal low-level visual filters."
      ]
    },
    "sample_questions": [
      {
        "q": "What is the role of projection matrix E in ViT?",
        "options": [
          "Projects each flattened patch vector into a d_model-dimensional token embedding",
          "Computes Softmax weights",
          "Performs backpropagation",
          "Normalizes image brightness"
        ],
        "ans": "Projects each flattened patch vector into a d_model-dimensional token embedding",
        "exp": "It acts as the visual equivalent of an NLP word-embedding lookup table."
      },
      {
        "q": "Can the linear patch projection be replaced by a shallow CNN backbone in a Hybrid ViT?",
        "options": [
          "Yes, CNN feature maps can be flattened into input tokens",
          "No, ViT strictly forbids convolutions",
          "Only for black-and-white images",
          "Only during inference"
        ],
        "ans": "Yes, CNN feature maps can be flattened into input tokens",
        "exp": "Hybrid architectures use CNN layers to extract feature maps before the Transformer."
      }
    ]
  },
  {
    "id": "q34",
    "module_id": "mod5",
    "module_name": "Module 5: Vision Transformers (ViT, Swin, CaiT)",
    "syllabus_lec": "Lecture 31",
    "topic": "Independence of Patch Count from Transformer Hidden Size",
    "difficulty": "Medium",
    "points": 1,
    "question": "If a ViT increases its hidden size but keeps image resolution and patch size unchanged, which quantity stays unchanged at the encoder input?",
    "options": [
      "The width of attention projection matrices",
      "The dimension of each token embedding",
      "The number of patch tokens",
      "The number of parameters in the patch projection"
    ],
    "correct": "The number of patch tokens",
    "explanation": "The number of patches produced from an image is determined solely by image resolution and patch size ((H × W) / P²) and is completely independent of the Transformer's hidden dimension (d_model).",
    "theory": {
      "title": "Independence of Patch Count from Hidden Dimension (d_model)",
      "what_is_it": "The number of patches produced from an image depends solely on the image resolution (H, W) and patch size (P), and is completely independent of the Transformer's hidden dimension (d_model).\n\n💡 Subject-Related Example:\nA 224 × 224 image with 16 × 16 patches produces exactly 196 patches whether the model hidden size is d_model = 768 (ViT-Base), d_model = 1024 (ViT-Large), or d_model = 1280 (ViT-Huge).\n\n🚀 Real-World AI Use Case:\nEnables scaling model capacity (depth and width) across different parameter tiers without modifying image tokenization or patch count.",
      "why_we_need_it": "Separating spatial resolution (number of patches N) from model capacity (hidden size d_model) allows scaling model depth and width without changing patch slicing.",
      "how_it_works": "• Patch Count N = (H × W) / P² (only uses H, W, P).\n• Changing d_model from 768 (ViT-Base) to 1024 (ViT-Large) leaves N at 196 patches.",
      "formula": "N = (H × W) / P² (Independent of d_model)",
      "key_takeaways": [
        "⭐ Patch Count Factors: Determined ONLY by image height, width, and patch size.",
        "⭐ d_model Independence: Model width (hidden size) does not change the number of patches.",
        "⭐ Common Exam Trap: Don't confuse token count N with feature dimension d_model."
      ]
    },
    "sample_questions": [
      {
        "q": "When moving from ViT-Base (d_model=768) to ViT-Large (d_model=1024) on 224×224 images with 16×16 patches, what happens to the number of tokens?",
        "options": [
          "Remains exactly 196",
          "Increases to 256",
          "Decreases to 144",
          "Doubles"
        ],
        "ans": "Remains exactly 196",
        "exp": "Patch count is fixed by spatial resolution: (224/16)² = 196."
      },
      {
        "q": "Which parameter count DOES change when increasing d_model from 768 to 1024?",
        "options": [
          "The size of the linear patch projection matrix E",
          "The number of pixels in the input image",
          "The number of patches N",
          "The patch size P"
        ],
        "ans": "The size of the linear patch projection matrix E",
        "exp": "The projection matrix weights grow from 768 × 768 to 768 × 1024."
      }
    ]
  },
  {
    "id": "q35",
    "module_id": "mod6",
    "module_name": "Module 6: LLM Architecture & Autoregressive Pre-training",
    "syllabus_lec": "Lectures 33-35",
    "topic": "Autoregressive Probability Factorization (Chain Rule of Next-Token Prediction)",
    "difficulty": "Medium",
    "points": 1,
    "question": "Which probability factorization matches an autoregressive language model for token x_t?",
    "options": [
      "Predict x_t only from the sequence length",
      "Predict every token independently of the sequence",
      "Predict x_t using only tokens after x_t",
      "Predict x_t conditioned on tokens before x_t"
    ],
    "correct": "Predict x_t conditioned on tokens before x_t",
    "explanation": "Autoregressive language modeling factorizes the joint probability of a sequence into the product of conditional next-token probabilities conditioned on all prior tokens.",
    "theory": {
      "title": "Autoregressive Probability Factorization (Chain Rule)",
      "what_is_it": "Autoregressive language modeling factorizes the joint probability of a sequence of tokens into the product of conditional next-token probabilities conditioned on all prior tokens via the probability chain rule.\n\n💡 Subject-Related Example:\nThe probability of the sentence 'The capital of France is Paris' is calculated as P('The') × P('capital'|'The') × P('of'|'The capital') × ... × P('Paris'|'The capital of France is').\n\n🚀 Real-World AI Use Case:\nThe core pre-training objective of modern decoder-only Large Language Models (GPT-4, LLaMA-3, Claude, Mistral).",
      "why_we_need_it": "Allows breaking down complex natural language generation into a mathematically tractable sequence of conditional next-token predictions.",
      "how_it_works": "• Sentence: 'The cat sat on the mat'.\n• P(Sentence) = P('The') × P('cat' | 'The') × P('sat' | 'The cat') × ... × P('mat' | 'The cat sat on the').",
      "formula": "P(w₁, w₂, ..., w_T) = ∏_{t=1}^T P(w_t | w_{<t})",
      "key_takeaways": [
        "⭐ Chain Rule of Probability: Decomposes joint sentence probability into a product of conditional probabilities.",
        "⭐ Left-to-Right Factorization: Each token is conditioned strictly on previous context (w_{<t}).",
        "⭐ Foundation of LLMs: The mathematical basis of all decoder-only language models."
      ]
    },
    "sample_questions": [
      {
        "q": "How is the joint probability P(w₁, w₂, w₃) broken down in an autoregressive model?",
        "options": [
          "P(w₁) * P(w₂ | w₁) * P(w₃ | w₁, w₂)",
          "P(w₁) * P(w₂) * P(w₃)",
          "P(w₃) * P(w₂ | w₃) * P(w₁ | w₂, w₃)",
          "P(w₁ | w₂, w₃)"
        ],
        "ans": "P(w₁) * P(w₂ | w₁) * P(w₃ | w₁, w₂)",
        "exp": "By the probability chain rule conditioning on historical context."
      },
      {
        "q": "Which of the following models is an autoregressive causal language model?",
        "options": [
          "GPT-4",
          "BERT",
          "RoBERTa",
          "DeBERTa"
        ],
        "ans": "GPT-4",
        "exp": "GPT is an autoregressive decoder-only model."
      }
    ]
  },
  {
    "id": "q36",
    "module_id": "mod6",
    "module_name": "Module 6: LLM Architecture & Autoregressive Pre-training",
    "syllabus_lec": "Lectures 33-35",
    "topic": "Shifted Target Alignment in Next-Token Training",
    "difficulty": "Medium",
    "points": 2,
    "question": "During causal language-model training on tokens [w₁, w₂, w₃, w₄], which target is paired with the model state that reads context through w₂?",
    "options": [
      "w₁",
      "w₃",
      "w₂",
      "w₄ only"
    ],
    "correct": "w₃",
    "explanation": "In causal language model training, the target paired with context ending at position t is the token at position t+1 (shifted by +1).",
    "theory": {
      "title": "Shifted Target Alignment in Next-Token Training",
      "what_is_it": "In causal language model training, the target sequence is the input context sequence shifted to the left by +1 position, pairing context ending at token t with target token t+1.\n\n💡 Subject-Related Example:\nGiven input tokens ['The', 'robot', 'built', 'a'], the target tokens are ['robot', 'built', 'a', 'car']. At position 2 ('The robot'), the model's loss is calculated against target 'built'.\n\n🚀 Real-World AI Use Case:\nStandard cross-entropy loss computation in causal next-token pre-training pipelines across all modern LLMs.",
      "why_we_need_it": "Aligns the model to constantly predict the immediate next token from the context up to that point.",
      "how_it_works": "• Input Context: [token₁, token₂, token₃].\n• Target Labels: [token₂, token₃, token₄].\n• At position 2 (context ending at token₂), the loss is computed against target token₃.",
      "formula": "Target_t = Token_{t+1} (Shifted by +1)",
      "key_takeaways": [
        "⭐ Shift by +1: Context ending at index t is paired with target token at index t+1.",
        "⭐ Parallel Loss: Evaluated across all positions simultaneously using cross-entropy loss.",
        "⭐ Standard Causal Setup: The standard training paradigm for GPT and LLaMA."
      ]
    },
    "sample_questions": [
      {
        "q": "For training sentence ['The', 'sun', 'rises', 'daily'], what is the training target after reading ['The', 'sun']?",
        "options": [
          "'rises'",
          "'sun'",
          "'daily'",
          "'The'"
        ],
        "ans": "'rises'",
        "exp": "The context ending at 'sun' must predict the next word 'rises'."
      },
      {
        "q": "Why are labels shifted by 1 to the left in CrossEntropyLoss?",
        "options": [
          "To align predicted logits at position t with actual token at position t+1",
          "To delete the first layer",
          "To convert text to numbers",
          "To reverse the word order"
        ],
        "ans": "To align predicted logits at position t with actual token at position t+1",
        "exp": "Logit at index t predicts token at index t+1."
      }
    ]
  },
  {
    "id": "q37",
    "module_id": "mod6",
    "module_name": "Module 6: LLM Architecture & Autoregressive Pre-training",
    "syllabus_lec": "Lectures 33-35",
    "topic": "Autoregressive Generation Loop & KV Caching",
    "difficulty": "Easy",
    "points": 1,
    "question": "After GPT selects a new token during generation, what normally happens before the following token is predicted?",
    "options": [
      "The causal mask is permanently removed",
      "The tokenizer vocabulary is rebuilt",
      "The selected token is appended to the context",
      "The entire model is retrained from scratch"
    ],
    "correct": "The selected token is appended to the context",
    "explanation": "In autoregressive text generation, tokens are produced iteratively one by one; KV Caching prevents redundant recomputation of past token Keys and Values, drastically speeding up generation.",
    "theory": {
      "title": "Autoregressive Generation Loop & KV Caching",
      "what_is_it": "During autoregressive text generation, tokens are produced iteratively one at a time. KV Caching stores the Key and Value matrices of past tokens in GPU VRAM so they do not need to be recomputed at each new generation step.\n\n💡 Subject-Related Example:\nWhen generating token #101, instead of recomputing attention over all 100 previous tokens, the model computes Q, K, V only for token #101 and reuses the cached K and V matrices for tokens 1–100.\n\n🚀 Real-World AI Use Case:\nEnables 20x to 50x faster token generation in inference engines (vLLM, TensorRT-LLM, Hugging Face TGI).",
      "why_we_need_it": "Without KV Caching, generating 1,000 words would require recomputing self-attention on 1 word, then 2 words, then 3 words... taking 20x to 50x longer! KV Caching makes generation lightning fast.",
      "how_it_works": "• Step 1: Prompt is processed; compute and save Keys and Values in GPU VRAM.\n• Step 2: Predict new token t.\n• Step 3: Compute only Query, Key, Value for token t; append new K and V to the cache.\n• Step 4: Repeat until [EOS] token is generated.",
      "formula": "KV_Cache_new = [KV_Cache_old, (K_t, V_t)]",
      "key_takeaways": [
        "⭐ 20x Speedup: Eliminates redundant computation of past tokens during text generation.",
        "⭐ GPU VRAM Tradeoff: Stores past K and V matrices in GPU memory.",
        "⭐ Loop Termination: Stops when [EOS] is generated or max length is reached."
      ]
    },
    "sample_questions": [
      {
        "q": "What optimization avoids recomputing past Key and Value vectors during autoregressive generation?",
        "options": [
          "KV Caching (Key-Value Cache)",
          "Prompt Truncation",
          "Weight Quantization",
          "Softmax Pruning"
        ],
        "ans": "KV Caching (Key-Value Cache)",
        "exp": "KV Cache preserves past Keys and Values in VRAM."
      },
      {
        "q": "When does the autoregressive generation loop stop?",
        "options": [
          "When an [EOS] (End-of-Sequence) token is generated or max token limit is reached",
          "When temperature becomes 0",
          "Always after exactly 10 tokens",
          "When weights become negative"
        ],
        "ans": "When an [EOS] (End-of-Sequence) token is generated or max token limit is reached",
        "exp": "Generation stops on [EOS] token or maximum length limit."
      }
    ]
  },
  {
    "id": "q38",
    "module_id": "mod6",
    "module_name": "Module 6: LLM Architecture & Autoregressive Pre-training",
    "syllabus_lec": "Lectures 33-35",
    "topic": "Temperature Scaling for Controlling Randomness vs Determinism",
    "difficulty": "Medium",
    "points": 1,
    "question": "What is the usual effect of lowering the sampling temperature while keeping other decoding settings fixed?",
    "options": [
      "The token distribution becomes more peaked toward high-probability choices",
      "The model can use future tokens",
      "The context window automatically doubles",
      "The vocabulary becomes larger"
    ],
    "correct": "The token distribution becomes more peaked toward high-probability choices",
    "explanation": "Lowering the sampling temperature T makes the probability distribution sharper and more peaked around the highest-scoring tokens, producing more deterministic and predictable text.",
    "theory": {
      "title": "Temperature Scaling in Probabilistic Sampling",
      "what_is_it": "Sampling Temperature (T) is a divider applied to raw model logits (z/T) before Softmax to control the sharpness (determinism) vs flatness (randomness) of the predicted token probability distribution.\n\n💡 Subject-Related Example:\nAt low temperature (T = 0.2), the highest logit dominates, producing strict, deterministic code and math answers. At high temperature (T = 0.9), probabilities flatten, producing creative and diverse vocabulary in creative writing.\n\n🚀 Real-World AI Use Case:\nStandard hyperparameter in LLM inference APIs (`temperature=0.0` for deterministic coding/reasoning, `temperature=0.7` for general chat).",
      "why_we_need_it": "Gives developers control over whether the AI should produce deterministic factual outputs (coding/math) or creative, varied text (brainstorming/storytelling).",
      "how_it_works": "• Divide logits z by temperature T: z' = z / T.\n• As T -> 0: The highest logit dominates; probability distribution becomes extremely sharp (peaked).\n• As T -> ∞: All probabilities become equal (uniform distribution).",
      "formula": "P(token_i) = exp(z_i / T) / Σ_j exp(z_j / T)",
      "key_takeaways": [
        "⭐ Lower Temperature (T < 0.3): Sharper distribution, more deterministic, factual, and repetitive.",
        "⭐ Higher Temperature (T > 0.8): Flatter distribution, more creative, diverse, and risky.",
        "⭐ Zero Temperature (T = 0): Equivalent to pure greedy decoding (argmax)."
      ]
    },
    "sample_questions": [
      {
        "q": "For coding and mathematical reasoning tasks, which temperature setting is recommended?",
        "options": [
          "Low temperature (e.g. T = 0.0 or 0.2)",
          "High temperature (e.g. T = 1.8)",
          "Negative temperature",
          "Infinite temperature"
        ],
        "ans": "Low temperature (e.g. T = 0.0 or 0.2)",
        "exp": "Low temperature produces focused, deterministic, and accurate logic."
      },
      {
        "q": "What happens as temperature T approaches infinity?",
        "options": [
          "The probability distribution becomes uniform (all words equally likely)",
          "Model generates only the top token",
          "Loss becomes zero",
          "Attention weights disappear"
        ],
        "ans": "The probability distribution becomes uniform (all words equally likely)",
        "exp": "Dividing logits by infinity makes them all 0, producing uniform random output."
      }
    ]
  },
  {
    "id": "q39",
    "module_id": "mod6",
    "module_name": "Module 6: LLM Architecture & Autoregressive Pre-training",
    "syllabus_lec": "Lectures 33-35",
    "topic": "Top-k Sampling (Restricting to the k Most Likely Tokens)",
    "difficulty": "Medium",
    "points": 1,
    "question": "What does top-k sampling do before the next token is sampled?",
    "options": [
      "Keeps tokens whose cumulative probability is exactly k percent",
      "Removes the k highest-probability tokens",
      "Restricts candidates to the k highest-probability tokens",
      "Forces the kth token to be selected every time"
    ],
    "correct": "Restricts candidates to the k highest-probability tokens",
    "explanation": "Top-k sampling restricts the candidate pool for next-token generation to the k highest-probability tokens in the vocabulary, discarding the rest before sampling.",
    "theory": {
      "title": "Top-k Sampling Mechanics",
      "what_is_it": "Top-k sampling restricts the candidate pool for next-token generation to the k highest-probability tokens in the vocabulary, discarding all lower-probability tokens before sampling.\n\n💡 Subject-Related Example:\nOut of a 50,000-token vocabulary, setting k = 50 keeps only the 50 top-scoring words, re-normalizes their probabilities to sum to 1.0, and samples from this filtered candidate pool.\n\n🚀 Real-World AI Use Case:\nPrevents the model from generating rare, nonsensical, or long-tail gibberish tokens during text generation.",
      "why_we_need_it": "Without filtering, low-probability bizarre words in the long tail of the vocabulary could accidentally be sampled, causing gibberish text.",
      "how_it_works": "• Step 1: Rank all vocabulary words by probability.\n• Step 2: Keep top k words (e.g. k = 40).\n• Step 3: Re-normalize their probabilities using Softmax so they sum to 1.0.\n• Step 4: Sample the next token from this filtered pool.",
      "formula": "Vocabulary_Filtered = {w ∈ Top-k(Vocab)}, with probabilities re-normalized to 1.0",
      "key_takeaways": [
        "⭐ Fixed Candidate Pool: Restricts sampling pool to a fixed number k of top tokens.",
        "⭐ Eliminates Long-Tail Gibberish: Prevents sampling extremely rare or absurd tokens.",
        "⭐ Re-normalization: Probabilities of the top k candidates are re-normalized to sum to 1.0."
      ]
    },
    "sample_questions": [
      {
        "q": "If vocabulary size is 32,000 and k = 40, from how many candidates does the model sample?",
        "options": [
          "40 candidates",
          "32,000 candidates",
          "40% of vocabulary",
          "1,280 candidates"
        ],
        "ans": "40 candidates",
        "exp": "Top-k explicitly restricts the pool to the top 40 candidate tokens."
      },
      {
        "q": "What is the main limitation of a fixed k in Top-k sampling?",
        "options": [
          "It cannot adapt to varying uncertainty: k may be too large for obvious contexts or too small for diverse contexts",
          "It increases vocabulary size",
          "It breaks backpropagation",
          "It disables LayerNorm"
        ],
        "ans": "It cannot adapt to varying uncertainty: k may be too large for obvious contexts or too small for diverse contexts",
        "exp": "Fixed k does not adjust dynamically when confidence fluctuates."
      }
    ]
  },
  {
    "id": "q40",
    "module_id": "mod6",
    "module_name": "Module 6: LLM Architecture & Autoregressive Pre-training",
    "syllabus_lec": "Lectures 33-35",
    "topic": "Top-p (Nucleus) Dynamic Cumulative Probability Sampling",
    "difficulty": "Hard",
    "points": 2,
    "question": "How does nucleus (top-p) sampling choose its candidate set?",
    "options": [
      "It keeps a smallest high-probability set whose cumulative probability reaches the chosen threshold p",
      "It removes all tokens with probability above p",
      "It selects only tokens whose positions are below p",
      "It always keeps exactly p tokens"
    ],
    "correct": "It keeps a smallest high-probability set whose cumulative probability reaches the chosen threshold p",
    "explanation": "Top-p (nucleus) sampling dynamically selects the smallest subset of highest-probability tokens whose cumulative probability meets or exceeds threshold p.",
    "theory": {
      "title": "Top-p (Nucleus) Cumulative Probability Sampling",
      "what_is_it": "Top-p (Nucleus) sampling dynamically selects the smallest subset of highest-probability tokens whose cumulative probability meets or exceeds a predefined threshold p (e.g. p = 0.90 / 90%).\n\n💡 Subject-Related Example:\nIf the next word is obvious ('The capital of France is ___'), 'Paris' has 95% probability, so the pool shrinks to 1 token. For open-ended creative prompts, the pool dynamically expands to 20 candidate tokens until their sum reaches 90%.\n\n🚀 Real-World AI Use Case:\nIndustry standard sampling method used in ChatGPT, Claude, and Gemini for natural, high-quality conversational output.",
      "why_we_need_it": "Unlike Top-k (which is rigid and always picks k words), Top-p dynamically expands or contracts the pool based on how confident the model is.",
      "how_it_works": "• Step 1: Sort vocabulary by probability in descending order.\n• Step 2: Sum probabilities from highest to lowest until cumulative sum ≥ p (e.g. 0.90).\n• Step 3: Discard all remaining tokens; re-normalize and sample.",
      "formula": "Smallest set V^{(p)} such that Σ_{i ∈ V^{(p)}} P(token_i) ≥ p",
      "key_takeaways": [
        "⭐ Dynamic Pool Size: Candidate pool size adapts dynamically to context certainty.",
        "⭐ Cumulative Threshold: Sums top probabilities until threshold p (e.g. 0.90) is reached.",
        "⭐ Industry Standard: Used by default in ChatGPT, Claude, and Gemini."
      ]
    },
    "sample_questions": [
      {
        "q": "If word A has probability 0.92 and threshold p = 0.90, how many candidates are in the nucleus sample set?",
        "options": [
          "1 candidate (only word A)",
          "10 candidates",
          "90 candidates",
          "All vocabulary"
        ],
        "ans": "1 candidate (only word A)",
        "exp": "Word A alone reaches 92% (exceeding 90%), dynamically restricting the pool to 1."
      },
      {
        "q": "What is the typical recommended value range for top-p in conversational chatbots?",
        "options": [
          "0.85 to 0.95",
          "0.01 to 0.05",
          "1.5 to 2.0",
          "50 to 100"
        ],
        "ans": "0.85 to 0.95",
        "exp": "A threshold of 0.85 to 0.95 removes odd tail tokens while preserving natural variation."
      }
    ]
  },
  {
    "id": "q41",
    "module_id": "mod6",
    "module_name": "Module 6: LLM Architecture & Autoregressive Pre-training",
    "syllabus_lec": "Lectures 33-35",
    "topic": "End-of-Sequence (EOS) Token for Natural Generation Termination",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the usual purpose of an end-of-sequence token during autoregressive generation?",
    "options": [
      "Signal that generation may stop",
      "Create positional encodings",
      "Choose the attention-head count",
      "Increase the hidden dimension"
    ],
    "correct": "Signal that generation may stop",
    "explanation": "The End-of-Sequence ([EOS]) token signals that text generation is complete, prompting the autoregressive generation loop to terminate.",
    "theory": {
      "title": "End-of-Sequence ([EOS]) Token Termination",
      "what_is_it": "The End-of-Sequence ([EOS]) token is a special learned marker emitted by the LLM to signal that it has completed its answer, prompting the autoregressive generation loop to terminate.\n\n💡 Subject-Related Example:\nThe model generates tokens in a while loop until the sampled token matches [EOS] (e.g. `<|endoftext|>` or `</s>`), at which point the generation loop cleanly terminates.\n\n🚀 Real-World AI Use Case:\nControls clean termination of chatbot responses in production APIs without hitting arbitrary max length limits.",
      "why_we_need_it": "Without an [EOS] token, the generation loop would keep generating words endlessly until hitting the hard max token limit, producing rambling repetition.",
      "how_it_works": "• The model predicts next tokens in a while loop: `while token != [EOS] and length < max_limit`.\n• When the model assigns highest probability to [EOS] and samples it, the loop cleanly terminates.",
      "formula": "if token == [EOS]: break",
      "key_takeaways": [
        "⭐ Natural Termination: Signals that the model has completed its response.",
        "⭐ Loop Condition: The generation loop terminates immediately upon emitting [EOS].",
        "⭐ Special Token: Learned during pre-training and fine-tuning."
      ]
    },
    "sample_questions": [
      {
        "q": "What happens if an LLM is prompted without recognizing or emitting an EOS token?",
        "options": [
          "It continues generating repetitive or rambling text until reaching max_tokens limit",
          "It crashes immediately",
          "It deletes previous tokens",
          "It switches to French"
        ],
        "ans": "It continues generating repetitive or rambling text until reaching max_tokens limit",
        "exp": "Without an EOS trigger, the loop only halts when reaching the hard limit."
      },
      {
        "q": "In OpenAI's GPT-2 tokenizer, what is the default EOS special token string?",
        "options": [
          "<|endoftext|>",
          "</s>",
          "[SEP]",
          "<STOP>"
        ],
        "ans": "<|endoftext|>",
        "exp": "GPT-2 uses <|endoftext|> as both document boundary and EOS token."
      }
    ]
  },
  {
    "id": "q42",
    "module_id": "mod6",
    "module_name": "Module 6: LLM Architecture & Autoregressive Pre-training",
    "syllabus_lec": "Lectures 33-35",
    "topic": "Context Window Boundary & Handling History Overflow",
    "difficulty": "Medium",
    "points": 2,
    "question": "A model has a fixed maximum context window. What happens when a prompt plus generated history exceeds that limit without any special long-context mechanism?",
    "options": [
      "The vocabulary size grows to hold the extra text",
      "The model automatically adds new Transformer layers",
      "Some tokens must be omitted, truncated, or otherwise managed to fit the window",
      "Causal masking changes into bidirectional attention"
    ],
    "correct": "Some tokens must be omitted, truncated, or otherwise managed to fit the window",
    "explanation": "When input context exceeds an LLM's maximum context window limit, oldest tokens in the conversation history are truncated to fit within the supported boundary.",
    "theory": {
      "title": "Context Window Limits & History Truncation",
      "what_is_it": "The context window defines the maximum number of tokens an LLM can process in a single forward pass. When conversation history exceeds this limit, oldest tokens must be truncated.\n\n💡 Subject-Related Example:\nIn a model with an 8,192-token context window, when total conversation history reaches 8,500 tokens, the oldest 308 tokens are truncated (dropped) from the input prompt.\n\n🚀 Real-World AI Use Case:\nContext management in production conversational agents, Retrieval-Augmented Generation (RAG), and long-document processing.",
      "why_we_need_it": "GPU memory and positional embedding tables have finite limits. When conversation history exceeds the context window, oldest messages must be truncated or summarized.",
      "how_it_works": "• System checks: Total_Tokens = System_Prompt + History + New_Query.\n• If Total_Tokens > Context_Limit, the oldest conversation turns are dropped (sliding window truncation).",
      "formula": "Total_Length ≤ Max_Context_Window",
      "key_takeaways": [
        "⭐ Hard Boundary: Maximum sequence length supported by the model architecture.",
        "⭐ Truncation Strategy: Oldest context tokens are truncated when limit is exceeded.",
        "⭐ Memory Constraint: Driven by GPU VRAM and attention complexity limits."
      ]
    },
    "sample_questions": [
      {
        "q": "What is the simplest conversation management strategy when chat history exceeds the context window?",
        "options": [
          "Sliding window / FIFO dropping of earliest messages",
          "Training a new base model",
          "Doubling GPU clock speed",
          "Disabling tokenization"
        ],
        "ans": "Sliding window / FIFO dropping of earliest messages",
        "exp": "Discarding the oldest conversational turns keeps current context within allowable limits."
      },
      {
        "q": "Which positional embedding technique allows modern LLMs to scale to 32k-128k context lengths via RoPE scaling?",
        "options": [
          "Rotary Position Embeddings (RoPE) with frequency interpolation (YaRN / NTK-aware)",
          "Absolute learned tables",
          "One-hot encodings",
          "Fixed sinusoidal addition"
        ],
        "ans": "Rotary Position Embeddings (RoPE) with frequency interpolation (YaRN / NTK-aware)",
        "exp": "RoPE encodes relative positions via rotation matrices, allowing frequency scaling for long context extension."
      }
    ]
  },
  {
    "id": "q43",
    "module_id": "mod6",
    "module_name": "Module 6: LLM Architecture & Autoregressive Pre-training",
    "syllabus_lec": "Lectures 33-35",
    "topic": "Token ID to Continuous Vector Embedding Lookup",
    "difficulty": "Easy",
    "points": 1,
    "question": "What happens immediately after text is converted into token IDs in a GPT input pipeline?",
    "options": [
      "Token IDs are converted directly into final probabilities",
      "Every token ID becomes an attention mask",
      "The IDs are replaced by image patches",
      "Token IDs are mapped to learned vector embeddings"
    ],
    "correct": "Token IDs are mapped to learned vector embeddings",
    "explanation": "Token IDs are converted into continuous vectors via a row lookup in the learned token embedding matrix (W_E), mapping discrete IDs into dense d_model feature space.",
    "theory": {
      "title": "Token ID to Continuous Vector Embedding Lookup",
      "what_is_it": "Token IDs are discrete integers produced by the tokenizer that are mapped into continuous dense feature vectors (d_model) via a table row lookup in the model's learned token embedding matrix W_E.\n\n💡 Subject-Related Example:\nThe word 'apple' is converted by the tokenizer to integer ID 4251, which retrieves row #4251 from embedding matrix W_E (shape 50,000 × 768) to produce a 768-dimensional continuous vector.\n\n🚀 Real-World AI Use Case:\nFirst layer in all Transformer models (`torch.nn.Embedding(vocab_size, d_model)`).",
      "why_we_need_it": "Computers cannot do matrix calculus on raw strings or discrete integers. Dense embedding vectors map discrete words into a continuous semantic space.",
      "how_it_works": "• Tokenizer maps word 'apple' -> Integer ID 4251.\n• Model has embedding matrix W_E of shape (Vocab_Size × d_model).\n• Vector x = W_E[4251] (row slicing).\n• Shape of x is (1 × d_model).",
      "formula": "x = Embedding_Matrix[Token_ID]",
      "key_takeaways": [
        "⭐ Table Lookup: Slices a single row from the learned embedding matrix W_E.",
        "⭐ Discrete to Continuous: Converts discrete integer token IDs into dense continuous vectors.",
        "⭐ Dimension: Output vector has dimension equal to model hidden size (d_model)."
      ]
    },
    "sample_questions": [
      {
        "q": "If vocabulary size V = 32,000 and d_model = 4096, how many parameters are in the token embedding matrix?",
        "options": [
          "131,072,000 (~131M parameters)",
          "32,000",
          "4,096",
          "1 Billion"
        ],
        "ans": "131,072,000 (~131M parameters)",
        "exp": "32,000 × 4,096 = 131,072,000 parameters."
      },
      {
        "q": "What is 'weight tying' in language models?",
        "options": [
          "Sharing the exact same matrix for both input token embedding lookup and final output vocabulary projection",
          "Setting all weights to 1",
          "Freezing all weights",
          "Connecting encoder to decoder"
        ],
        "ans": "Sharing the exact same matrix for both input token embedding lookup and final output vocabulary projection",
        "exp": "Weight tying reuses W_embed as output projection, saving substantial parameter memory."
      }
    ]
  },
  {
    "id": "q44",
    "module_id": "mod6",
    "module_name": "Module 6: LLM Architecture & Autoregressive Pre-training",
    "syllabus_lec": "Lectures 33-35",
    "topic": "Decoder-Only Architecture Characteristics (Absence of Cross-Attention)",
    "difficulty": "Medium",
    "points": 2,
    "question": "A base GPT-style model contains no separate encoder. Which attention mechanism is therefore absent from its ordinary decoder-only stack?",
    "options": [
      "Scaled dot-product attention",
      "Causal self-attention",
      "Encoder-decoder cross-attention",
      "Multi-head attention"
    ],
    "correct": "Encoder-decoder cross-attention",
    "explanation": "Decoder-only architectures (like GPT) contain only causal masked self-attention and feed-forward sublayers, completely omitting encoder-decoder cross-attention.",
    "theory": {
      "title": "Decoder-Only Architecture Characteristics",
      "what_is_it": "A Decoder-Only architecture (like GPT and LLaMA) consists exclusively of Masked Causal Self-Attention and Feed-Forward Networks, completely omitting encoders and cross-attention sublayers.\n\n💡 Subject-Related Example:\nLLaMA-3 processes both the user prompt and its generated response within the exact same causal decoder stack using a single unified attention mechanism.\n\n🚀 Real-World AI Use Case:\nDominant architecture for modern generative AI foundation models (GPT-4, Claude, LLaMA-3, Mistral, Gemma).",
      "why_we_need_it": "Decoder-only models are simpler to scale, share KV caches efficiently, and excel at unified multi-turn generative tasks.",
      "how_it_works": "• Both prompt and generated tokens pass through the same causal attention stack.\n• Triangular causal mask prevents looking ahead.\n• No separate encoder or cross-attention sublayers exist.",
      "formula": "Layer = LayerNorm(x + CausalSelfAttention(x)) + LayerNorm(x + FFN(x))",
      "key_takeaways": [
        "⭐ Absence of Cross-Attention: Completely omits encoder-decoder cross-attention sublayers.",
        "⭐ Unified Processing: Both prompt tokens and generated tokens use the same causal self-attention mechanism.",
        "⭐ Standard Industry Paradigm: GPT, LLaMA, Mistral, and Claude all use decoder-only architectures."
      ]
    },
    "sample_questions": [
      {
        "q": "Which of the following models is an Encoder-Decoder architecture?",
        "options": [
          "T5 (Text-to-Text Transfer Transformer)",
          "GPT-3",
          "LLaMA-3",
          "Claude"
        ],
        "ans": "T5 (Text-to-Text Transfer Transformer)",
        "exp": "T5 uses both an explicit encoder and an explicit decoder with cross-attention."
      },
      {
        "q": "In a decoder-only model, how is the input prompt provided to the network?",
        "options": [
          "Concatenated at the start of the sequence and processed through the causal self-attention stack",
          "Through a separate visual encoder",
          "Through cross-attention keys only",
          "Via a separate classification head"
        ],
        "ans": "Concatenated at the start of the sequence and processed through the causal self-attention stack",
        "exp": "Prompt and generated tokens share the same causal sequence."
      }
    ]
  },
  {
    "id": "q45",
    "module_id": "mod6",
    "module_name": "Module 6: LLM Architecture & Autoregressive Pre-training",
    "syllabus_lec": "Lectures 33-35",
    "topic": "The Two-Stage Paradigm: Self-Supervised Pre-training followed by Fine-Tuning",
    "difficulty": "Medium",
    "points": 2,
    "question": "Why is broad pretraining typically performed before task-specific fine-tuning for a GPT-style model?",
    "options": [
      "Pretraining learns general language patterns that later adaptation can specialize",
      "Pretraining permanently prevents any later weight updates",
      "Pretraining removes the need for next-token prediction",
      "Fine-tuning is required to create the tokenizer vocabulary from nothing"
    ],
    "correct": "Pretraining learns general language patterns that later adaptation can specialize",
    "explanation": "Modern LLMs are built via self-supervised pre-training on large-scale text to learn language representations, followed by supervised fine-tuning / alignment for instruction following.",
    "theory": {
      "title": "Two-Stage LLM Paradigm: Pre-training & Fine-Tuning",
      "what_is_it": "Modern LLMs are created via a two-stage paradigm: Stage 1 (Self-Supervised Pre-training on massive uncurated text to learn world knowledge) followed by Stage 2 (Supervised Fine-Tuning and RLHF for instruction following and alignment).\n\n💡 Subject-Related Example:\nLLaMA-3 was pre-trained on 15 Trillion tokens of internet text, then fine-tuned on curated instruction datasets and human preference feedback (DPO/RLHF) to create LLaMA-3-Instruct.\n\n🚀 Real-World AI Use Case:\nStandard industry workflow for building production-ready AI assistants from raw foundation models.",
      "why_we_need_it": "Pre-training creates a raw knowledge engine, but it tends to babble or repeat internet junk. Fine-tuning aligns the model into a helpful chatbot assistant.",
      "how_it_works": "• Step 1: Pre-train on 15 Trillion tokens (cost: millions of dollars).\n• Step 2: Fine-tune on 100,000 curated instruction-response pairs (SFT) + RLHF / DPO.",
      "formula": "Raw Base Model (Pre-trained) + Alignment (SFT/RLHF) = Production Assistant",
      "key_takeaways": [
        "⭐ Stage 1: Self-supervised next-token pre-training on massive uncurated corpora.",
        "⭐ Stage 2: Supervised fine-tuning (SFT) and preference alignment (RLHF/DPO) on instruction datasets.",
        "⭐ Foundation Model Lifecycle: Standard two-phase training foundation for all modern LLMs."
      ]
    },
    "sample_questions": [
      {
        "q": "What type of data is used for self-supervised LLM pre-training?",
        "options": [
          "Massive unlabelled raw text corpora without human annotations",
          "Small human-labeled tabular spreadsheets only",
          "Handcrafted regex rules",
          "Image-mask pairs only"
        ],
        "ans": "Massive unlabelled raw text corpora without human annotations",
        "exp": "Next-token prediction creates its own supervisory signal directly from raw text."
      },
      {
        "q": "What is the primary goal of Supervised Fine-Tuning (SFT) on a pre-trained base model?",
        "options": [
          "To teach the model how to respond as an assistant following instructions (Prompt-Response pairs)",
          "To learn English grammar from scratch",
          "To double the vocabulary size",
          "To remove all attention heads"
        ],
        "ans": "To teach the model how to respond as an assistant following instructions (Prompt-Response pairs)",
        "exp": "SFT guides the base model to format its extensive pre-trained knowledge as helpful conversational responses."
      }
    ]
  },
  {
    "id": "q46",
    "module_id": "mod7",
    "module_name": "Module 7: Prompt Engineering Fundamentals",
    "syllabus_lec": "Lectures 35-37",
    "topic": "Explicit Formatting & Column Constraints for Predictable Output",
    "difficulty": "Easy",
    "points": 1,
    "question": "An LLM response must contain exactly the columns Name, Risk, and Action. What prompt change most directly controls this?",
    "options": [
      "Change the model's attention-head count",
      "Remove all formatting instructions",
      "Increase the tokenizer vocabulary",
      "State the required output format and column names explicitly"
    ],
    "correct": "State the required output format and column names explicitly",
    "explanation": "Providing explicit column headers and table formatting instructions ensures that the model outputs structured, easily parsable data without unwanted conversational text.",
    "theory": {
      "title": "Explicit Formatting & Output Constraints",
      "what_is_it": "Explicit formatting constraints are instructions that command the LLM to output its response in a structured format (such as a markdown table with predefined column headers).\n\n💡 Subject-Related Example:\nPrompting: 'Analyze the server error logs. Output a markdown table with columns: | Timestamp | Error_Code | Affected_Service | Severity |'.\n\n🚀 Real-World AI Use Case:\nUsed in automated report generation and data extraction pipelines to ensure responses can be parsed directly into spreadsheets or databases.",
      "why_we_need_it": "Prevents conversational filler and ensures the output can be reliably parsed by downstream software programs.",
      "how_it_works": "• Specify exact column headers: `| Product | Price | Stock |`.\n• Specify delimiter format and prohibit introductory conversational text.",
      "formula": "Instruction + Explicit Structure Template ==> Deterministic Output Format",
      "key_takeaways": [
        "⭐ Predictable Parsing: Guarantees output structure matches expected software schemas.",
        "⭐ Eliminates Ambiguity: Prevents conversational fluff like 'Here is your table:'.",
        "⭐ Column Constraints: Explicit headers ensure all required data fields are populated."
      ]
    },
    "sample_questions": [
      {
        "q": "Which prompt instruction is most reliable for automated database ingestion?",
        "options": [
          "'Output a JSON object with keys: {\"status\": string, \"code\": int}. Output only valid JSON.'",
          "'Give me some info about status.'",
          "'Can you tell me what happened in your own words?'",
          "'Write a creative essay on status codes.'"
        ],
        "ans": "'Output a JSON object with keys: {\"status\": string, \"code\": int}. Output only valid JSON.'",
        "exp": "Explicit schema instructions yield clean machine-readable responses."
      },
      {
        "q": "Why are positive instructions ('Do X') usually better than negative instructions ('Don't do Y') in prompts?",
        "options": [
          "Positive instructions clearly define the target behavior, whereas negative instructions still prime attention on the forbidden concept",
          "LLMs cannot parse the word 'not'",
          "Negative words crash the GPU",
          "Negative instructions increase cost"
        ],
        "ans": "Positive instructions clearly define the target behavior, whereas negative instructions still prime attention on the forbidden concept",
        "exp": "Positive instructions guide attention toward the desired output format."
      }
    ]
  },
  {
    "id": "q47",
    "module_id": "mod7",
    "module_name": "Module 7: Prompt Engineering Fundamentals",
    "syllabus_lec": "Lectures 35-37",
    "topic": "Delimiters for Clean Separation of Instructions from User Data",
    "difficulty": "Medium",
    "points": 1,
    "question": "Why are delimiters such as triple quotes or XML-like tags useful when a prompt contains both instructions and a block of source text?",
    "options": [
      "They increase the model's number of layers",
      "They guarantee that every answer is factually correct",
      "They convert few-shot prompting into fine-tuning",
      "They help separate the instruction from the data to be processed"
    ],
    "correct": "They help separate the instruction from the data to be processed",
    "explanation": "Delimiters like XML tags or triple quotes clearly demarcate user input from developer instructions, preventing ambiguity and protecting against prompt injection attacks.",
    "theory": {
      "title": "Delimiters for Clean Context Separation & Injection Defense",
      "what_is_it": "Delimiters (such as XML tags `<context>...</context>` or triple quotes `\"\"\"`) are structural markers that clearly separate developer system instructions from untrusted user-provided data.\n\n💡 Subject-Related Example:\nPrompt: 'Summarize the document enclosed in <doc> tags: <doc>{user_uploaded_document}</doc>'. Malicious instructions inside the document cannot override the system rules.\n\n🚀 Real-World AI Use Case:\nEssential security practice to prevent Prompt Injection attacks and jailbreak attempts in enterprise AI applications.",
      "why_we_need_it": "1. Defends against Prompt Injection attacks.\n2. Prevents the model from confusing developer rules with user data to be processed.",
      "how_it_works": "• Prompt: `Summarize the article enclosed inside <article> tags.`\n• Input: `<article>{user_text}</article>`\n• The LLM treats anything inside the tags strictly as passive data.",
      "formula": "<delimiter> Untrusted User Content </delimiter>",
      "key_takeaways": [
        "⭐ Injection Defense: Critical security practice against prompt injection attacks.",
        "⭐ Clear Separation: Distinguishes system prompt instructions from raw input data.",
        "⭐ Standard Delimiters: XML tags (`<data>`), triple quotes (`\"\"\"`), or markdown code fences (` ``` `)."
      ]
    },
    "sample_questions": [
      {
        "q": "Which prompt format is most secure against prompt injection when summarizing user reviews?",
        "options": [
          "Summarize the text inside <review> tags:\\n<review>\\n{review_text}\\n</review>",
          "Summarize this: {review_text}",
          "{review_text} Summarize it.",
          "Tell me about {review_text}"
        ],
        "ans": "Summarize the text inside <review> tags:\\n<review>\\n{review_text}\\n</review>",
        "exp": "Explicit XML tags clearly quarantine the input text from instructions."
      },
      {
        "q": "Commonly used prompt delimiter symbols include:",
        "options": [
          "Triple quotes (\"\"\"), Markdown backticks (```), and XML tags (<tag></tag>)",
          "Binary null bytes only",
          "Only single spaces",
          "Mathematical integrals"
        ],
        "ans": "Triple quotes (\"\"\"), Markdown backticks (```), and XML tags (<tag></tag>)",
        "exp": "Standard clear textual delimiters clearly delineate prompt sections."
      }
    ]
  },
  {
    "id": "q48",
    "module_id": "mod7",
    "module_name": "Module 7: Prompt Engineering Fundamentals",
    "syllabus_lec": "Lectures 35-37",
    "topic": "Zero-Shot Prompting (Direct Task Instruction Without Examples)",
    "difficulty": "Easy",
    "points": 1,
    "question": "A prompt asks an LLM to classify a review but provides no solved examples. Which prompting style does this represent?",
    "options": [
      "Few-shot prompting",
      "Adapter switching",
      "Parameter-efficient fine-tuning",
      "Zero-shot prompting"
    ],
    "correct": "Zero-shot prompting",
    "explanation": "Zero-shot prompting describes the task directly in the prompt without providing any solved input-output demonstration examples.",
    "theory": {
      "title": "Zero-Shot Prompting (Direct Task Instruction)",
      "what_is_it": "Zero-Shot Prompting provides direct task instructions to the LLM without including any solved demonstration examples in the prompt context.\n\n💡 Subject-Related Example:\nPrompt: 'Translate the following English sentence to German: \"The meeting is scheduled for tomorrow at 9 AM.\"' -> Output: 'Das Treffen ist für morgen um 9 Uhr geplant.'\n\n🚀 Real-World AI Use Case:\nFast, token-efficient prompting for common tasks where the pre-trained model already has strong zero-shot parametric capabilities.",
      "why_we_need_it": "Fastest and most token-efficient prompting method. Works great for standard tasks where the pre-trained model already knows what to do.",
      "how_it_works": "• Prompt: `Classify the sentiment of this review as Positive or Negative: 'The battery lasted 20 hours.'`\n• Model output: `Positive`.",
      "formula": "Prompt = Task_Instruction + Input_Data (0 Exemplars)",
      "key_takeaways": [
        "⭐ Zero Demonstrations: Relies solely on pre-trained parametric knowledge without examples.",
        "⭐ Low Token Cost: Highly efficient and fast.",
        "⭐ Baseline Technique: The starting point before moving to few-shot or chain-of-thought."
      ]
    },
    "sample_questions": [
      {
        "q": "Which of the following is a zero-shot prompt?",
        "options": [
          "'Translate the following English sentence to German: \"Good morning!\"'",
          "'Translate: Cat -> Chat, Dog -> Chien, Cow -> ?'",
          "'Review 1: Pos, Review 2: Neg, Review 3: ?'",
          "A prompt with 5 example input-output pairs"
        ],
        "ans": "'Translate the following English sentence to German: \"Good morning!\"'",
        "exp": "Contains instruction and input only, with zero sample demonstrations."
      },
      {
        "q": "When should you prefer zero-shot over few-shot prompting?",
        "options": [
          "When saving prompt token budget / cost and the task is straightforward for the LLM",
          "When fine-tuning weights",
          "When the format is extremely obscure and unknown to the LLM",
          "When using a 50M parameter model"
        ],
        "ans": "When saving prompt token budget / cost and the task is straightforward for the LLM",
        "exp": "Zero-shot uses fewer prompt tokens and works well for standard tasks."
      }
    ]
  },
  {
    "id": "q49",
    "module_id": "mod7",
    "module_name": "Module 7: Prompt Engineering Fundamentals",
    "syllabus_lec": "Lectures 35-37",
    "topic": "Iterative Prompt Refinement (Conversational Feedback Loops)",
    "difficulty": "Medium",
    "points": 1,
    "question": "A user first asks for a draft, then provides the model's draft back with targeted corrections, and repeats this process. Which approach is being used?",
    "options": [
      "Weight quantization",
      "Zero-shot prompting",
      "Iterative prompting",
      "Patch projection"
    ],
    "correct": "Iterative prompting",
    "explanation": "Iterative prompt refinement involves analyzing model outputs on test cases, identifying errors or ambiguities, and progressively refining instructions and constraints.",
    "theory": {
      "title": "Iterative Prompt Refinement",
      "what_is_it": "Iterative Prompt Refinement is the engineering methodology of evaluating prompt outputs on test cases, diagnosing failure modes, and progressively tightening instructions and constraints.\n\n💡 Subject-Related Example:\nIf initial testing reveals the model includes conversational preambles like 'Sure! Here is the JSON:', updating the prompt with 'Respond strictly in valid JSON with no introductory text' fixes the failure.\n\n🚀 Real-World AI Use Case:\nStandard prompt engineering lifecycle for developing production-grade enterprise LLM pipelines.",
      "why_we_need_it": "Complex enterprise tasks require multiple iterations to eliminate edge-case errors, hallucinations, and formatting glitches.",
      "how_it_works": "• Step 1: Draft initial prompt.\n• Step 2: Test on 50 diverse inputs.\n• Step 3: Identify errors (e.g. model outputted markdown instead of JSON).\n• Step 4: Add explicit negative constraints and re-evaluate.",
      "formula": "Draft -> Test -> Analyze Errors -> Refine Constraints -> Re-test",
      "key_takeaways": [
        "⭐ Engineering Process: Treat prompts like software code requiring test cases and iteration.",
        "⭐ Failure-Driven: Refinements should directly target observed edge-case failures.",
        "⭐ Progressive Improvement: Tightens constraints and edge-case handling systematically."
      ]
    },
    "sample_questions": [
      {
        "q": "What is the recommended first step when an LLM produces output with unwanted extra commentary?",
        "options": [
          "Inspect output, add an explicit rule 'Output ONLY the result without commentary', and test again",
          "Retrain the entire neural network",
          "Delete the API key",
          "Reduce sequence length to 5"
        ],
        "ans": "Inspect output, add an explicit rule 'Output ONLY the result without commentary', and test again",
        "exp": "Iterative prompt adjustment quickly corrects behavioral flaws."
      },
      {
        "q": "What is 'Self-Refinement' (e.g. Reflexion / Self-Refine) in agentic AI workflows?",
        "options": [
          "The LLM generates output, critiques its own work against criteria, and generates a refined version autonomously",
          "Hardware self-cooling",
          "Backpropagation on personal laptops",
          "Quantizing model to 4 bits"
        ],
        "ans": "The LLM generates output, critiques its own work against criteria, and generates a refined version autonomously",
        "exp": "Self-refine prompts the agent to critique and iteratively polish its own draft."
      }
    ]
  },
  {
    "id": "q50",
    "module_id": "mod7",
    "module_name": "Module 7: Prompt Engineering Fundamentals",
    "syllabus_lec": "Lectures 35-37",
    "topic": "Few-Shot In-Context Learning (Demonstrating Input-Output Patterns)",
    "difficulty": "Medium",
    "points": 1,
    "question": "A sentiment prompt includes four representative reviews together with their correct labels before presenting a new review. What is the main purpose of those demonstrations?",
    "options": [
      "Increase the model's hidden size",
      "Disable token sampling",
      "Show the model the intended task pattern and output mapping",
      "Modify the base model weights permanently"
    ],
    "correct": "Show the model the intended task pattern and output mapping",
    "explanation": "Few-shot prompting provides a few demonstration examples of input-output pairs within the prompt context, guiding the model via in-context learning without weight updates.",
    "theory": {
      "title": "Few-Shot In-Context Learning (Demonstration Exemplars)",
      "what_is_it": "Few-Shot In-Context Learning provides 2 to 5 solved demonstration input-output pairs inside the prompt context to guide the model's output format and reasoning style without updating any model weights.\n\n💡 Subject-Related Example:\nPrompt: 'Example 1: Apple -> Fruit\\nExample 2: Carrot -> Vegetable\\nExample 3: Salmon -> Fish\\nInput: Broccoli -> Output:' -> Model generates 'Vegetable'.\n\n🚀 Real-World AI Use Case:\nEnforces domain-specific formatting and complex reasoning patterns across API calls without requiring model fine-tuning.",
      "why_we_need_it": "Dramatically improves accuracy on difficult formatting, uncommon domains, or custom classification tasks WITHOUT modifying any model weights.",
      "how_it_works": "• Input: Example 1 (Input -> Output) + Example 2 (Input -> Output) + New Input.\n• The model recognizes the pattern through self-attention in its context window.",
      "formula": "Prompt = [Example_1, Example_2, ..., Example_k] + New_Query",
      "key_takeaways": [
        "⭐ In-Context Learning: Operates entirely in inference memory; updates zero model weights.",
        "⭐ Format Alignment: Teaches complex output styles and domain reasoning by demonstration.",
        "⭐ Typical Count: 2 to 5 examples are typically sufficient."
      ]
    },
    "sample_questions": [
      {
        "q": "How does few-shot in-context learning differ fundamentally from fine-tuning?",
        "options": [
          "Few-shot updates 0 weights and operates purely within the prompt context, while fine-tuning permanently updates model parameters via backpropagation",
          "Few-shot uses more GPU memory for backpropagation",
          "Fine-tuning only works in zero-shot mode",
          "They are identical"
        ],
        "ans": "Few-shot updates 0 weights and operates purely within the prompt context, while fine-tuning permanently updates model parameters via backpropagation",
        "exp": "Few-shot is inference-only; fine-tuning modifies network weights."
      },
      {
        "q": "How many example demonstrations are typically provided in few-shot prompting?",
        "options": [
          "1 to 5 examples",
          "100,000 examples",
          "0 examples",
          "1 million examples"
        ],
        "ans": "1 to 5 examples",
        "exp": "A small set of 2 to 5 representative examples is typically sufficient."
      }
    ]
  },
  {
    "id": "q51",
    "module_id": "mod7",
    "module_name": "Module 7: Prompt Engineering Fundamentals",
    "syllabus_lec": "Lectures 35-37",
    "topic": "Context Grounding & Prompt Enrichment for Domain Accuracy",
    "difficulty": "Easy",
    "points": 1,
    "question": "An answer is too general because the model lacks project details. What prompt revision is most appropriate before considering model fine-tuning?",
    "options": [
      "Add the relevant project context and constraints",
      "Delete all domain-specific information",
      "Reduce the number of Transformer layers",
      "Replace the tokenizer"
    ],
    "correct": "Add the relevant project context and constraints",
    "explanation": "Context grounding enriches prompts with verified reference documentation, enabling the LLM to generate factual, hallucination-free answers anchored in real source data.",
    "theory": {
      "title": "Context Grounding & Prompt Enrichment",
      "what_is_it": "Context Grounding enriches the prompt with verified external reference documents (Retrieval-Augmented Generation / RAG) so the model answers questions based strictly on factual source evidence.\n\n💡 Subject-Related Example:\nPrompt: 'Answer the customer query based ONLY on the refund policy enclosed in <policy> tags: <policy>{policy_text}</policy> Query: {user_query}'.\n\n🚀 Real-World AI Use Case:\nEliminates hallucinations in customer support bots, legal document search, and internal company knowledge bases.",
      "why_we_need_it": "Foundation models hallucinate when asked about proprietary company data or recent news. Grounding eliminates hallucinations by providing verifiable factual source text.",
      "how_it_works": "• Step 1: User asks a question.\n• Step 2: Search engine retrieves relevant documentation.\n• Step 3: Inject documentation into prompt: `Answer based ONLY on this context: <doc>{text}</doc>`.",
      "formula": "Prompt = Grounding_Documents + Instruction + Query ==> Hallucination-Free Answer",
      "key_takeaways": [
        "⭐ Stops Hallucinations: Forces the model to rely on provided verified facts rather than parametric memory.",
        "⭐ RAG Foundation: The core mechanism of all Retrieval-Augmented Generation systems.",
        "⭐ Up-to-Date Knowledge: Allows models to answer questions on real-time or private proprietary data."
      ]
    },
    "sample_questions": [
      {
        "q": "Why is adding context in the prompt preferred over fine-tuning for constantly changing company policies?",
        "options": [
          "Updating prompt context is instantaneous and free, whereas fine-tuning is expensive, slow, and risks catastrophic forgetting",
          "Fine-tuning cannot memorize facts",
          "Prompt context modifies GPU hardware",
          "Tokenizers reject fine-tuning"
        ],
        "ans": "Updating prompt context is instantaneous and free, whereas fine-tuning is expensive, slow, and risks catastrophic forgetting",
        "exp": "In-context grounding provides fresh data instantly without retraining."
      },
      {
        "q": "What is the primary cause of an LLM hallucinating about proprietary private company code?",
        "options": [
          "Lack of proprietary repository context inside the prompt",
          "Too many attention heads",
          "Presence of LayerNorm",
          "Low learning rate during pretraining"
        ],
        "ans": "Lack of proprietary repository context inside the prompt",
        "exp": "The model has never seen proprietary code, so it requires explicit in-context facts."
      }
    ]
  },
  {
    "id": "q52",
    "module_id": "mod7",
    "module_name": "Module 7: Prompt Engineering Fundamentals",
    "syllabus_lec": "Lectures 35-37",
    "topic": "Role & Persona Prompting (System Level Guidance)",
    "difficulty": "Easy",
    "points": 1,
    "question": "Which prompt element is being used in the instruction, “Act as a database administrator reviewing this migration plan”?",
    "options": [
      "A role instruction",
      "A causal mask",
      "A low-rank adapter",
      "A positional encoding"
    ],
    "correct": "A role instruction",
    "explanation": "Role prompting instructs the LLM to adopt a specific persona or domain expertise, priming its vocabulary, analytical depth, and tone for the target domain.",
    "theory": {
      "title": "Role & Persona Prompting (System Guidance)",
      "what_is_it": "Role & Persona Prompting instructs the LLM to adopt a specific professional identity, priming its internal probability distribution toward domain-specific vocabulary, tone, and analytical depth.\n\n💡 Subject-Related Example:\nSystem Message: 'You are a Principal Cyber-Security Incident Responder auditing Linux kernel logs for privilege escalation attempts.'\n\n🚀 Real-World AI Use Case:\nStandard system prompt design pattern to enforce professional tone and domain-specific reasoning in enterprise chatbots.",
      "why_we_need_it": "Primes the model's latent probability space toward specialized professional vocabulary, tone, and domain-specific analytical reasoning.",
      "how_it_works": "• Set System Message: `You are a Principal Database Administrator.`\n• When asked a question, the model prioritizes SQL performance, ACID compliance, and indexing over generic advice.",
      "formula": "System: 'You are an expert {Role}' + User Query",
      "key_takeaways": [
        "⭐ Vocabulary Priming: Shifts model distribution toward domain-specific terms and perspectives.",
        "⭐ Professional Tone: Enforces appropriate formality and perspective.",
        "⭐ System Message Placement: Best placed at the top of the prompt or in the system role."
      ]
    },
    "sample_questions": [
      {
        "q": "How does asking an LLM to 'Act as a 5-year-old teacher' change output compared to 'Act as a PhD researcher'?",
        "options": [
          "It adjusts vocabulary, tone, simplicity, and metaphors to be accessible to children",
          "It makes the GPU run faster",
          "It modifies the model's neural weights",
          "It has no effect"
        ],
        "ans": "It adjusts vocabulary, tone, simplicity, and metaphors to be accessible to children",
        "exp": "Role prompting anchors tone, vocabulary level, and intended target audience."
      },
      {
        "q": "In OpenAI's Chat Completions API, where is a role/persona instruction conventionally placed?",
        "options": [
          "Inside the message with role='system'",
          "In the temperature parameter",
          "In the model ID string",
          "Inside the logit bias field"
        ],
        "ans": "Inside the message with role='system'",
        "exp": "The system message sets the overarching persona and behavioral rules."
      }
    ]
  },
  {
    "id": "q53",
    "module_id": "mod7",
    "module_name": "Module 7: Prompt Engineering Fundamentals",
    "syllabus_lec": "Lectures 35-37",
    "topic": "Prompt Templates & Parameterization for Software Reusability",
    "difficulty": "Medium",
    "points": 1,
    "question": "A team repeatedly runs the same prompt structure with different customer names and incident descriptions. Which design makes this easiest to reuse consistently?",
    "options": [
      "A larger patch size",
      "A prompt template with variable placeholders",
      "A different tokenizer for each incident",
      "A new pretrained model for every customer"
    ],
    "correct": "A prompt template with variable placeholders",
    "explanation": "Prompt templates use parameterized placeholders (e.g. {user_input}) to enable software modularity, dynamic data injection, and automated prompt reuse in production applications.",
    "theory": {
      "title": "Prompt Templates & Parameterization for Software Reuse",
      "what_is_it": "A Prompt Template is a parameterized reusable string containing `{placeholders}` that software applications dynamically populate with runtime variables before sending to an LLM API.\n\n💡 Subject-Related Example:\n`template = 'Draft a formal {tone} email to {client_name} regarding project milestone {milestone_id}.'` populated via `template.format(...)`.\n\n🚀 Real-World AI Use Case:\nFoundational component in LLM application frameworks (LangChain, LlamaIndex, Semantic Kernel) for modular software integration.",
      "why_we_need_it": "Enables software engineering best practices (modularity, version control, programmatic reuse) for AI prompt pipelines.",
      "how_it_works": "• Define template: `template = 'Summarize this {doc_type} in {language}: {content}'`\n• Execute in code: `prompt = template.format(doc_type='contract', language='Spanish', content=user_data)`.",
      "formula": "Prompt = Template.format(var₁=val₁, var₂=val₂)",
      "key_takeaways": [
        "⭐ Software Reusability: Allows standardizing prompts across an enterprise codebase.",
        "⭐ Programmatic Injection: Fills `{placeholders}` dynamically from databases or user inputs.",
        "⭐ Version Controlled: Templates can be unit-tested and stored in Git repositories."
      ]
    },
    "sample_questions": [
      {
        "q": "In Python f-strings and LangChain, what syntax represents a dynamic variable slot in a prompt template?",
        "options": [
          "{variable_name}",
          "<<variable_name>>",
          "$$$variable_name$$$",
          "int(variable_name)"
        ],
        "ans": "{variable_name}",
        "exp": "Curly braces {variable_name} denote replaceable slots in standard prompt templates."
      },
      {
        "q": "What is the primary software engineering benefit of prompt templates in production?",
        "options": [
          "Separation of concerns: Prompts can be versioned and tested independently of backend code",
          "Eliminates API costs completely",
          "Makes the model 100% deterministic",
          "Removes the need for an LLM"
        ],
        "ans": "Separation of concerns: Prompts can be versioned and tested independently of backend code",
        "exp": "Templates allow systematic prompt testing, CI/CD versioning, and clean parameter binding."
      }
    ]
  },
  {
    "id": "q54",
    "module_id": "mod7",
    "module_name": "Module 7: Prompt Engineering Fundamentals",
    "syllabus_lec": "Lectures 35-37",
    "topic": "Ambiguity Reduction via Structured Outputs (JSON Schema)",
    "difficulty": "Medium",
    "points": 2,
    "question": "Which instruction most directly reduces ambiguity when an LLM must produce a short, machine-readable response?",
    "options": [
      "Use as much detail as possible without a format",
      "Return valid JSON with exactly the keys status and reason",
      "Think about the topic and respond naturally",
      "Give a useful response in any form you prefer"
    ],
    "correct": "Return valid JSON with exactly the keys status and reason",
    "explanation": "Enforcing structured JSON schema outputs ensures that LLM responses adhere to strict data types and keys, enabling reliable downstream software and database integration.",
    "theory": {
      "title": "Structured Outputs (JSON Schema Enforcing)",
      "what_is_it": "Structured output prompting forces the LLM to respond exclusively in schema-validated JSON format conforming to predefined keys and data types.\n\n💡 Subject-Related Example:\nConstraining the model output to schema `{'type': 'object', 'properties': {'status': {'type': 'string'}, 'confidence': {'type': 'number'}}, 'required': ['status', 'confidence']}`.\n\n🚀 Real-World AI Use Case:\nReliable tool calling, autonomous agent action execution, and backend database ingestion.",
      "why_we_need_it": "Downstream software cannot parse erratic conversational English. Strict JSON schemas guarantee 100% reliable database ingestion and API interoperability.",
      "how_it_works": "• Define schema: `{\"type\": \"object\", \"properties\": {\"sentiment\": {\"type\": \"string\"}, \"score\": {\"type\": \"number\"}}, \"required\": [\"sentiment\", \"score\"]}`.\n• Model generates tokens constrained strictly to valid JSON tokens.",
      "formula": "Output strictly conforming to JSON_Schema",
      "key_takeaways": [
        "⭐ Programmatic Reliability: Eliminates parsing crashes in backend applications.",
        "⭐ Schema Enforcement: Specifies required keys, data types, and enum values.",
        "⭐ No Conversational Fluff: Suppresses unwanted preambles and explanations."
      ]
    },
    "sample_questions": [
      {
        "q": "Which instruction prevents unwanted conversational preamble before a JSON output?",
        "options": [
          "'Output ONLY valid JSON. Do not include markdown ticks, greetings, or explanations.'",
          "'Feel free to explain your thoughts first.'",
          "'Write as conversationally as possible.'",
          "'What do you think about JSON?'"
        ],
        "ans": "'Output ONLY valid JSON. Do not include markdown ticks, greetings, or explanations.'",
        "exp": "Direct negative constraints against conversational preamble ensure clean parseable strings."
      },
      {
        "q": "What modern API feature guarantees that an LLM strictly outputs valid JSON matching a Pydantic schema?",
        "options": [
          "Structured Outputs with JSON Schema / Grammar Constrained Decoding",
          "Higher temperature",
          "Lower top-k",
          "Padding masks"
        ],
        "ans": "Structured Outputs with JSON Schema / Grammar Constrained Decoding",
        "exp": "Constrained decoding masks invalid tokens during sampling, mathematically guaranteeing adherence to the schema."
      }
    ]
  },
  {
    "id": "q55",
    "module_id": "mod7",
    "module_name": "Module 7: Prompt Engineering Fundamentals",
    "syllabus_lec": "Lectures 35-37",
    "topic": "Enforcing Length & Concrete Boundary Constraints",
    "difficulty": "Medium",
    "points": 2,
    "question": "A prompt produced a correct answer but ignored an important length limit. What is the most direct next step in prompt engineering?",
    "options": [
      "Remove all task instructions",
      "Revise the prompt to state the length constraint clearly and retry",
      "Retrain every parameter in the language model",
      "Replace the attention mechanism"
    ],
    "correct": "Revise the prompt to state the length constraint clearly and retry",
    "explanation": "Specifying concrete numerical boundaries (e.g. 'under 3 sentences and 50 words') provides unambiguous limits that force the model to produce concise, tightly constrained output.",
    "theory": {
      "title": "Concrete Boundary & Length Constraints",
      "what_is_it": "Concrete Boundary & Length Constraints place explicit numerical limits on generated responses (such as sentence or word count limits).\n\n💡 Subject-Related Example:\nPrompting: 'Summarize the quarterly financial report in exactly 3 bullet points and under 60 words total.'\n\n🚀 Real-World AI Use Case:\nPrevents verbosity, reduces API token consumption, and fits generated responses into fixed UI display components.",
      "why_we_need_it": "LLMs tend to be verbose by default. Numerical constraints force concise, high-density summaries and prevent token budget exhaustion.",
      "how_it_works": "• Prompt: `Summarize the article in exactly 2 sentences and under 40 words.`\n• Model adjusts attention and text generation to terminate within the specified limits.",
      "formula": "Constraint: Length ≤ N sentences / M words",
      "key_takeaways": [
        "⭐ Controls Verbosity: Prevents models from generating unnecessarily long responses.",
        "⭐ Concrete Numbers: Explicit counts ('under 3 sentences') work far better than vague words ('be brief').",
        "⭐ Token Efficiency: Conserves token budget and reduces API latency."
      ]
    },
    "sample_questions": [
      {
        "q": "Which length instruction is most reliably followed by an LLM?",
        "options": [
          "'Summarize in exactly 3 bullet points, each under 15 words.'",
          "'Keep it brief.'",
          "'Don't write too much.'",
          "'Make it short if possible.'"
        ],
        "ans": "'Summarize in exactly 3 bullet points, each under 15 words.'",
        "exp": "Quantifiable, concrete constraints provide explicit evaluation criteria for generation."
      },
      {
        "q": "Why does placing constraints at the very end of a long prompt improve adherence?",
        "options": [
          "Recency bias in self-attention gives high weight to the most recent tokens before generation starts",
          "The tokenizer deletes early prompt tokens",
          "It reduces parameter count",
          "It switches the model to few-shot mode"
        ],
        "ans": "Recency bias in self-attention gives high weight to the most recent tokens before generation starts",
        "exp": "Tokens right before the generation boundary receive strong attention focus."
      }
    ]
  },
  {
    "id": "q56",
    "module_id": "mod7",
    "module_name": "Module 7: Prompt Engineering Fundamentals",
    "syllabus_lec": "Lectures 35-37",
    "topic": "Meta-Prompting (Prompting an LLM to Design and Optimize Prompts)",
    "difficulty": "Hard",
    "points": 2,
    "question": "Which task is the clearest example of meta-prompting?",
    "options": [
      "Ask the model to extract requirements from one report directly",
      "Fine-tune the model on a requirements dataset",
      "Add a LoRA adapter to the model",
      "Ask the model to design a better prompt for extracting requirements from reports"
    ],
    "correct": "Ask the model to design a better prompt for extracting requirements from reports",
    "explanation": "Meta-prompting involves using an LLM to automatically generate, optimize, evaluate, or refine prompts for other downstream AI tasks.",
    "theory": {
      "title": "Meta-Prompting (LLMs Designing Prompts for LLMs)",
      "what_is_it": "Meta-Prompting is the practice of using an advanced LLM to design, optimize, evaluate, or generate prompts for other downstream AI tasks.\n\n💡 Subject-Related Example:\nAsking GPT-4: 'You are an expert prompt engineer. Write an optimal system prompt with few-shot examples for classifying clinical trial eligibility criteria.'\n\n🚀 Real-World AI Use Case:\nAutomated prompt optimization frameworks (DSPy, AutoPrompt, Promptbreeder) that systematically evolve high-performing prompts.",
      "why_we_need_it": "Humans often write ambiguous prompts. An LLM understands its own cognitive architecture and can generate highly detailed, edge-case-proof system prompts automatically.",
      "how_it_works": "• Prompt to Meta-LLM: `You are an expert prompt engineer. Write an optimal system prompt with few-shot examples for classifying financial invoices.`\n• Meta-LLM generates a production-grade prompt pipeline.",
      "formula": "Meta_LLM(Task_Description) ==> Optimized_Production_Prompt",
      "key_takeaways": [
        "⭐ Automated Optimization: Uses AI to refine and generate prompts systematically.",
        "⭐ Edge-Case Coverage: Meta-prompts anticipate failure modes and add protective delimiters automatically.",
        "⭐ Prompt Evolution: Foundation of automated prompt optimization tools like DSPy."
      ]
    },
    "sample_questions": [
      {
        "q": "What is the role of an LLM in a meta-prompting pipeline?",
        "options": [
          "Serving as a prompt creator, optimizer, or evaluator rather than just performing the task directly",
          "Executing SQL queries only",
          "Training PyTorch weights",
          "Compressing images"
        ],
        "ans": "Serving as a prompt creator, optimizer, or evaluator rather than just performing the task directly",
        "exp": "Meta-prompting elevates the LLM to an architect that crafts and refines prompts."
      },
      {
        "q": "Which framework automatically compiles and optimizes prompts using meta-prompting?",
        "options": [
          "DSPy",
          "NumPy",
          "Matplotlib",
          "Gunicorn"
        ],
        "ans": "DSPy",
        "exp": "DSPy compiles declarative LLM pipelines by automatically optimizing prompt strategies and few-shot examples."
      }
    ]
  },
  {
    "id": "q57",
    "module_id": "mod8",
    "module_name": "Module 8: Fine-Tuning & Parameter-Efficient Adaptation (LoRA & PEFT)",
    "syllabus_lec": "Lectures 36-37",
    "topic": "PEFT vs Full Fine-Tuning (Why We Train <1% Parameters)",
    "difficulty": "Easy",
    "points": 1,
    "question": "Which statement best distinguishes parameter-efficient fine-tuning from full fine-tuning?",
    "options": [
      "PEFT requires replacing the Transformer with a recurrent network",
      "PEFT updates or adds a relatively small set of trainable parameters instead of updating the full model",
      "PEFT removes the need for any task data",
      "PEFT always trains more parameters than full fine-tuning"
    ],
    "correct": "PEFT updates or adds a relatively small set of trainable parameters instead of updating the full model",
    "explanation": "PEFT freezes the base pre-trained model and trains only a tiny fraction of parameters (<1%), drastically reducing GPU VRAM requirements and preventing catastrophic forgetting.",
    "theory": {
      "title": "PEFT vs Full Fine-Tuning (Why We Train <1% Parameters)",
      "what_is_it": "Parameter-Efficient Fine-Tuning (PEFT) adapts pre-trained foundation models by training a tiny fraction of parameters (<1%) via small adapter modules while keeping the base model weights completely frozen.\n\n💡 Subject-Related Example:\nFine-tuning a 70B parameter model with LoRA updates only ~65 Million parameters (0.09%), allowing fine-tuning on a single 24 GB GPU instead of requiring 8 × 80 GB A100 GPUs (560+ GB VRAM).\n\n🚀 Real-World AI Use Case:\nDemocratizes custom LLM fine-tuning for enterprises, dramatically cutting compute costs while preventing catastrophic forgetting.",
      "why_we_need_it": "Full fine-tuning a 70B model requires 560+ GB of GPU VRAM (for Adam optimizer states) and causes catastrophic forgetting. PEFT trains on a single commercial GPU and prevents catastrophic forgetting.",
      "how_it_works": "• Freeze base weights W₀ (requires_grad = False).\n• Attach small trainable adapters ΔW.\n• Train only <1% of parameters, reducing optimizer VRAM by up to 75%.",
      "formula": "Trainable_Params(PEFT) < 0.01 × Total_Params(Full)",
      "key_takeaways": [
        "⭐ Massive VRAM Savings: Eliminates hundreds of gigabytes of Adam optimizer state memory.",
        "⭐ Prevents Catastrophic Forgetting: Preserves the base model's general knowledge and reasoning.",
        "⭐ Single-GPU Feasibility: Allows fine-tuning 70B models on accessible commercial hardware."
      ]
    },
    "sample_questions": [
      {
        "q": "What fraction of total parameters is typically updated in PEFT (like LoRA)?",
        "options": [
          "0.01% to 1.0%",
          "100% of parameters",
          "50% of parameters",
          "0% (no parameters at all)"
        ],
        "ans": "0.01% to 1.0%",
        "exp": "PEFT updates a tiny fraction (<1%) of the total parameter count."
      },
      {
        "q": "Which of the following is NOT a parameter-efficient fine-tuning (PEFT) method?",
        "options": [
          "Full Parameter Backpropagation (Full Fine-Tuning)",
          "LoRA (Low-Rank Adaptation)",
          "Prefix Tuning",
          "Prompt Tuning"
        ],
        "ans": "Full Parameter Backpropagation (Full Fine-Tuning)",
        "exp": "Full parameter backpropagation updates 100% of model weights, making it full fine-tuning."
      }
    ]
  },
  {
    "id": "q58",
    "module_id": "mod8",
    "module_name": "Module 8: Fine-Tuning & Parameter-Efficient Adaptation (LoRA & PEFT)",
    "syllabus_lec": "Lectures 36-37",
    "topic": "Base Model Weight Freezing in LoRA to Save GPU VRAM",
    "difficulty": "Easy",
    "points": 1,
    "question": "When LoRA is applied with the base model frozen, which parameters are excluded from optimizer updates?",
    "options": [
      "Any trainable task-specific adapter parameters",
      "The parameters intentionally selected for LoRA training",
      "The newly introduced low-rank adapter matrices",
      "The original pretrained weight matrices"
    ],
    "correct": "The original pretrained weight matrices",
    "explanation": "In LoRA, the original pre-trained base model weights (W₀) are completely frozen and excluded from optimizer updates, eliminating optimizer memory overhead for base parameters.",
    "theory": {
      "title": "Base Model Weight Freezing in LoRA",
      "what_is_it": "In LoRA, the original pre-trained weight matrices (W₀) are completely frozen (`requires_grad = False`), excluding them from optimizer gradient tracking and weight updates.\n\n💡 Subject-Related Example:\nFor a 70B parameter base model, freezing W₀ eliminates 8 bytes of Adam optimizer memory per parameter (4 bytes momentum + 4 bytes variance), saving over 560 GB of GPU VRAM.\n\n🚀 Real-World AI Use Case:\nEnables fine-tuning multi-billion parameter models on accessible consumer/cloud hardware (QLoRA, Hugging Face PEFT).",
      "why_we_need_it": "Each trainable parameter in Adam optimizer requires 8 bytes of GPU memory (4 bytes for momentum + 4 bytes for variance). Freezing 70 Billion weights saves over 560 GB of GPU VRAM!",
      "how_it_works": "• Set `W₀.requires_grad = False` for all base linear layers.\n• Gradients are only computed and stored for the small adapter matrices A and B.",
      "formula": "requires_grad(W₀) = False",
      "key_takeaways": [
        "⭐ Zero Optimizer Memory for W₀: Saves 8 bytes of Adam state memory per base parameter.",
        "⭐ Gradient Exclusion: Base weights receive zero gradient updates during backpropagation.",
        "⭐ Shared Foundation: The same frozen base weights can be reused across dozens of different tasks."
      ]
    },
    "sample_questions": [
      {
        "q": "Why does freezing base weights in LoRA drastically reduce GPU VRAM during training with AdamW?",
        "options": [
          "Adam optimizer requires 8 bytes of state per trainable parameter; freezing base weights eliminates optimizer memory for 99% of parameters",
          "It turns off the GPU cooling fan",
          "It halves the sequence length",
          "It deletes the tokenizer"
        ],
        "ans": "Adam optimizer requires 8 bytes of state per trainable parameter; freezing base weights eliminates optimizer memory for 99% of parameters",
        "exp": "Freezing weights eliminates Adam's first and second momentum states for base weights."
      },
      {
        "q": "In PyTorch PEFT code, how are base weights frozen?",
        "options": [
          "for param in model.parameters(): param.requires_grad = False",
          "model.delete()",
          "model.freeze_gpu()",
          "torch.no_grad_forever()"
        ],
        "ans": "for param in model.parameters(): param.requires_grad = False",
        "exp": "Setting requires_grad = False prevents gradient computation and optimizer tracking."
      }
    ]
  },
  {
    "id": "q59",
    "module_id": "mod8",
    "module_name": "Module 8: Fine-Tuning & Parameter-Efficient Adaptation (LoRA & PEFT)",
    "syllabus_lec": "Lectures 36-37",
    "topic": "Low-Rank Matrix Decomposition (Weight Update = Matrix B · Matrix A)",
    "difficulty": "Medium",
    "points": 1,
    "question": "How is the LoRA update to a dense weight matrix represented conceptually?",
    "options": [
      "As the product of two trainable low-rank matrices",
      "As a sequence of tokenizer merge rules",
      "As a new full-size copy of every model weight",
      "As a fixed sinusoidal lookup table"
    ],
    "correct": "As the product of two trainable low-rank matrices",
    "explanation": "LoRA parameterizes the weight update as the product of two low-rank matrices (ΔW = B · A) with rank r ≪ min(d_in, d_out), drastically reducing trainable parameters.",
    "theory": {
      "title": "Low-Rank Matrix Decomposition (ΔW = B · A)",
      "what_is_it": "LoRA decomposes the high-dimensional weight update matrix ΔW (d_out × d_in) into the product of two low-rank matrices: ΔW = B · A, where Matrix A has shape (r × d_in) and Matrix B has shape (d_out × r) with rank r ≪ min(d_in, d_out).\n\n💡 Subject-Related Example:\nFor a 4096 × 4096 layer with rank r = 8, Matrix A is (8 × 4096) and Matrix B is (4096 × 8). Instead of training 16.7M weights, LoRA trains only 32,768 + 32,768 = 65,536 parameters.\n\n🚀 Real-World AI Use Case:\nCore low-rank parameterization used in LoRA, QLoRA, and DoRA for parameter-efficient adaptation of LLMs and Diffusion models.",
      "why_we_need_it": "Research shows weight updates during task adaptation have a very low 'intrinsic rank'. Decomposing into B · A drastically reduces trainable parameter count without losing task performance.",
      "how_it_works": "• Matrix A has shape (r × d_in), initialized with random Gaussian noise.\n• Matrix B has shape (d_out × r), initialized to all zeros.\n• Weight update ΔW = B · A has rank at most r ≪ min(d_in, d_out).",
      "formula": "ΔW = B · A, where A ∈ ℝ^(r × d_in) and B ∈ ℝ^(d_out × r)",
      "key_takeaways": [
        "⭐ Low-Rank Factorization: Factorizes large ΔW (d_out × d_in) into B (d_out × r) and A (r × d_in).",
        "⭐ Rank r ≪ d: Typical rank values are r = 4, 8, 16, or 32.",
        "⭐ Zero Initialization: Matrix B is initialized to 0 so ΔW = 0 at the start of training."
      ]
    },
    "sample_questions": [
      {
        "q": "Why is matrix B initialized to zero in LoRA?",
        "options": [
          "So that Weight Update = Matrix B · Matrix A = 0 at step 0, preserving exact base model behavior initially",
          "To save GPU RAM",
          "Because matrix A is also zero",
          "To disable self-attention"
        ],
        "ans": "So that Weight Update = Matrix B · Matrix A = 0 at step 0, preserving exact base model behavior initially",
        "exp": "Zero initialization of B ensures training begins smoothly from the pre-trained baseline."
      },
      {
        "q": "What is the purpose of the constant scaling factor α/r in LoRA?",
        "options": [
          "It scales the update magnitude, keeping hyperparameter tuning stable when rank r is varied",
          "It reduces sequence length",
          "It replaces LayerNorm",
          "It normalizes RGB pixels"
        ],
        "ans": "It scales the update magnitude, keeping hyperparameter tuning stable when rank r is varied",
        "exp": "The α/r scaling constant stabilizes training when experimenting with different ranks."
      }
    ]
  },
  {
    "id": "q60",
    "module_id": "mod8",
    "module_name": "Module 8: Fine-Tuning & Parameter-Efficient Adaptation (LoRA & PEFT)",
    "syllabus_lec": "Lectures 36-37",
    "topic": "Linear Parameter Scaling with Rank r (Params = r × (d_in + d_out))",
    "difficulty": "Medium",
    "points": 1,
    "question": "For fixed input and output dimensions, what happens to LoRA's trainable parameter count when rank r is increased?",
    "options": [
      "It decreases quadratically with r",
      "It stays exactly constant",
      "It changes only the tokenizer size",
      "It increases approximately linearly with r"
    ],
    "correct": "It increases approximately linearly with r",
    "explanation": "LoRA adapter parameter count equals r × (d_in + d_out), which scales strictly linearly with the rank r.",
    "theory": {
      "title": "Linear Parameter Scaling with Rank r",
      "what_is_it": "The total number of trainable parameters in a LoRA adapter equals r × (d_in + d_out), which scales strictly linearly with the rank hyperparameter r.\n\n💡 Subject-Related Example:\nFor a 4096 × 4096 layer: at rank r = 4, trainable parameters = 4 × (4096 + 4096) = 32,768; at rank r = 8, parameters = 8 × 8192 = 65,536 (exactly double).\n\n🚀 Real-World AI Use Case:\nAllows precise memory and parameter budgeting when configuring LoRA rank hyperparameters for downstream task fine-tuning.",
      "why_we_need_it": "Allows predictable memory and compute budgeting when choosing hyperparameter r.",
      "how_it_works": "• Matrix A parameter count: r × d_in.\n• Matrix B parameter count: d_out × r.\n• Total = r · d_in + r · d_out = r · (d_in + d_out).\n• If r doubles (2r), total parameters become 2r · (d_in + d_out) (exactly 2x).",
      "formula": "Total Parameters = r × (d_in + d_out)",
      "key_takeaways": [
        "⭐ Strictly Linear: Parameter count is directly proportional to rank r.",
        "⭐ Doubling Rule: Doubling r from 8 to 16 exactly doubles adapter parameters.",
        "⭐ Efficiency: Linear scaling contrasts with quadratic d² scaling of full weight matrices."
      ]
    },
    "sample_questions": [
      {
        "q": "If a LoRA adapter with rank r = 8 has 32,000 parameters, how many parameters will it have if rank is tripled to r = 24?",
        "options": [
          "96,000 (since 32,000 × 3 = 96,000)",
          "32,000",
          "64,000",
          "288,000"
        ],
        "ans": "96,000 (since 32,000 × 3 = 96,000)",
        "exp": "Parameter count is directly proportional to rank: 32,000 × 3 = 96,000."
      },
      {
        "q": "How does LoRA parameter count compare to full fine-tuning for a 4096 × 4096 layer at r = 8?",
        "options": [
          "LoRA has 65,536 parameters vs 16,777,216 for full fine-tuning (256x fewer parameters)",
          "LoRA has more parameters",
          "They have equal parameters",
          "LoRA has 0 parameters"
        ],
        "ans": "LoRA has 65,536 parameters vs 16,777,216 for full fine-tuning (256x fewer parameters)",
        "exp": "LoRA uses 8 × (4096 + 4096) = 65,536 parameters."
      }
    ]
  },
  {
    "id": "q61",
    "module_id": "mod8",
    "module_name": "Module 8: Fine-Tuning & Parameter-Efficient Adaptation (LoRA & PEFT)",
    "syllabus_lec": "Lectures 36-37",
    "topic": "Exact LoRA Parameter Calculation (4096×4096 Layer at Rank 8)",
    "difficulty": "Hard",
    "points": 2,
    "question": "LoRA is applied to a 4096 × 4096 linear layer with rank r = 8. Ignoring biases and scaling terms, how many trainable parameters are added by the two low-rank matrices?",
    "options": [
      "131,072",
      "16,777,216",
      "32,768",
      "65,536"
    ],
    "correct": "65,536",
    "explanation": "For d_in = 4096, d_out = 4096, and rank r = 8, the trainable parameters are (8 × 4096) + (4096 × 8) = 32,768 + 32,768 = 65,536 parameters.",
    "theory": {
      "title": "Exact LoRA Parameter Calculation (4096×4096 Layer at Rank 8)",
      "what_is_it": "For a 4096 × 4096 linear layer adapted with LoRA rank r = 8, Matrix A has 8 × 4096 = 32,768 parameters and Matrix B has 4096 × 8 = 32,768 parameters, totaling exactly 65,536 trainable parameters (<0.39% of 16.7M base weights).\n\n💡 Subject-Related Example:\nTotal base weights = 4096 × 4096 = 16,777,216. Total LoRA parameters = 8 × (4096 + 4096) = 65,536. Ratio = 65,536 / 16,777,216 = 0.0039 (0.39%).\n\n🚀 Real-World AI Use Case:\nStandard calculation for adapting attention projection layers in 7B/13B parameter architectures (LLaMA, Mistral).",
      "why_we_need_it": "This exact calculation appears frequently on AI exams and serves as the benchmark example for LoRA parameter efficiency.",
      "how_it_works": "• Param(A) = 8 × 4096 = 32,768.\n• Param(B) = 4096 × 8 = 32,768.\n• Total = 32,768 + 32,768 = 65,536.",
      "formula": "Params = r × (d_in + d_out) = 8 × (4096 + 4096) = 8 × 8192 = 65,536",
      "key_takeaways": [
        "⭐ Exact Exam Number: 65,536 trainable parameters.",
        "⭐ Efficiency Percentage: Less than 0.39% of the original 16.7M weights.",
        "⭐ Formula: 8 × (4096 + 4096) = 65,536."
      ]
    },
    "sample_questions": [
      {
        "q": "For a 4096 × 4096 linear layer adapted with LoRA rank r = 16, what is the trainable parameter count?",
        "options": [
          "131,072 (since 16 × 4096 + 4096 × 16 = 131,072)",
          "65,536",
          "262,144",
          "16,777,216"
        ],
        "ans": "131,072 (since 16 × 4096 + 4096 × 16 = 131,072)",
        "exp": "16 × 4096 + 4096 × 16 = 65,536 + 65,536 = 131,072."
      },
      {
        "q": "For a 4096 × 4096 linear layer adapted with LoRA rank r = 4, what is the trainable parameter count?",
        "options": [
          "32,768 (since 4 × 4096 + 4096 × 4 = 32,768)",
          "65,536",
          "16,384",
          "8,192"
        ],
        "ans": "32,768 (since 4 × 4096 + 4096 × 4 = 32,768)",
        "exp": "4 × 4096 + 4096 × 4 = 16,384 + 16,384 = 32,768."
      }
    ]
  },
  {
    "id": "q62",
    "module_id": "mod8",
    "module_name": "Module 8: Fine-Tuning & Parameter-Efficient Adaptation (LoRA & PEFT)",
    "syllabus_lec": "Lectures 36-37",
    "topic": "Exact LoRA Parameter Calculation (1024×1024 Layer at Rank 4)",
    "difficulty": "Hard",
    "points": 2,
    "question": "A 1024 × 1024 weight matrix is adapted with LoRA rank 4. Ignoring biases, how many adapter parameters are used for that matrix?",
    "options": [
      "4,096",
      "1,048,576",
      "8,192",
      "16,384"
    ],
    "correct": "8,192",
    "explanation": "For d_in = 1024, d_out = 1024, and rank r = 4, the trainable parameters are (4 × 1024) + (1024 × 4) = 4,096 + 4,096 = 8,192 parameters.",
    "theory": {
      "title": "Exact LoRA Parameter Calculation (1024×1024 Layer at Rank 4)",
      "what_is_it": "For a 1024 × 1024 linear layer adapted with LoRA rank r = 4, Matrix A has 4 × 1024 = 4,096 parameters and Matrix B has 1024 × 4 = 4,096 parameters, totaling exactly 8,192 trainable parameters (<0.78% of 1M base weights).\n\n💡 Subject-Related Example:\nBase weights = 1024 × 1024 = 1,048,576. LoRA parameters = 4 × (1024 + 1024) = 8,192. Parameter savings = 99.22%.\n\n🚀 Real-World AI Use Case:\nStandard benchmark calculation for adapting medium-sized foundation models (GPT-2 Large, RoBERTa-Large).",
      "why_we_need_it": "Demonstrates how LoRA scales down for standard Transformer sizes (e.g. GPT-2 Large or RoBERTa-Large).",
      "how_it_works": "• Matrix A: 4 × 1024 = 4,096.\n• Matrix B: 1024 × 4 = 4,096.\n• Total = 4,096 + 4,096 = 8,192.",
      "formula": "Params = r × (d_in + d_out) = 4 × (1024 + 1024) = 4 × 2048 = 8,192",
      "key_takeaways": [
        "⭐ Exact Exam Number: 8,192 trainable parameters.",
        "⭐ Matrix Breakdown: 4,096 in Matrix A + 4,096 in Matrix B.",
        "⭐ Formula: 4 × (1024 + 1024) = 8,192."
      ]
    },
    "sample_questions": [
      {
        "q": "For a 2048 × 2048 linear layer adapted with LoRA rank r = 8, what is the total number of adapter parameters?",
        "options": [
          "32,768 (since 8 × (2048 + 2048) = 32,768)",
          "16,384",
          "65,536",
          "4,194,304"
        ],
        "ans": "32,768 (since 8 × (2048 + 2048) = 32,768)",
        "exp": "8 × 4096 = 32,768."
      },
      {
        "q": "For a 512 × 512 linear layer adapted with LoRA rank r = 2, how many adapter parameters are trained?",
        "options": [
          "2,048 (since 2 × (512 + 512) = 2,048)",
          "1,024",
          "4,096",
          "8,192"
        ],
        "ans": "2,048 (since 2 × (512 + 512) = 2,048)",
        "exp": "2 × 1024 = 2,048."
      }
    ]
  },
  {
    "id": "q63",
    "module_id": "mod8",
    "module_name": "Module 8: Fine-Tuning & Parameter-Efficient Adaptation (LoRA & PEFT)",
    "syllabus_lec": "Lectures 36-37",
    "topic": "Effect of Doubling Rank r on Trainable Adapter Parameters",
    "difficulty": "Medium",
    "points": 2,
    "question": "For the same target layer dimensions, rank increases from 8 to 16. What happens to the number of LoRA matrix parameters?",
    "options": [
      "It halves",
      "It doubles",
      "It remains unchanged",
      "It quadruples"
    ],
    "correct": "It doubles",
    "explanation": "Since LoRA parameter count is directly proportional to rank r (Params = r × (d_in + d_out)), doubling the rank from r to 2r exactly doubles the number of trainable parameters.",
    "theory": {
      "title": "Effect of Doubling LoRA Rank r",
      "what_is_it": "Because LoRA adapter parameters equal r × (d_in + d_out), doubling the rank from r to 2r exactly doubles the number of trainable adapter parameters.\n\n💡 Subject-Related Example:\nFor a layer with d_in = 1024, d_out = 1024: at r = 4, params = 8,192; doubling rank to r = 8 gives params = 8 × 2048 = 16,384 (exactly 2x).\n\n🚀 Real-World AI Use Case:\nUnderstanding linear scaling properties when tuning adapter capacity for complex multi-task benchmarks.",
      "why_we_need_it": "Allows simple mental math when increasing rank to capture higher task complexity.",
      "how_it_works": "• Let P₁(r) = r · (d_in + d_out).\n• Let P₂(2r) = (2r) · (d_in + d_out) = 2 · P₁(r).\n• Parameter count scales by a factor of 2.",
      "formula": "Parameters(2r) = 2 × Parameters(r)",
      "key_takeaways": [
        "⭐ 2x Scaling: Doubling rank r doubles adapter parameters.",
        "⭐ Linear Relation: Parameters scale directly proportional to r.",
        "⭐ Contrast with Full Tuning: Full weights scale with d², but LoRA scales with r · d."
      ]
    },
    "sample_questions": [
      {
        "q": "If rank is quadrupled from r = 4 to r = 16, by what factor do adapter parameters increase?",
        "options": [
          "4x (since 16 / 4 = 4)",
          "2x",
          "8x",
          "16x"
        ],
        "ans": "4x (since 16 / 4 = 4)",
        "exp": "Parameter count scales strictly linearly with rank: 16/4 = 4x."
      },
      {
        "q": "Does doubling rank r increase inference latency when LoRA weights are merged into the base model?",
        "options": [
          "No, merged inference latency is 0% added overhead regardless of rank r",
          "Yes, latency doubles",
          "Latency quadruples",
          "Only during batching"
        ],
        "ans": "No, merged inference latency is 0% added overhead regardless of rank r",
        "exp": "Merged inference executes a single standard matrix multiplication."
      }
    ]
  },
  {
    "id": "q64",
    "module_id": "mod8",
    "module_name": "Module 8: Fine-Tuning & Parameter-Efficient Adaptation (LoRA & PEFT)",
    "syllabus_lec": "Lectures 36-37",
    "topic": "Multi-Adapter Serving & Storage Efficiency on a Shared Base Model",
    "difficulty": "Medium",
    "points": 2,
    "question": "A company needs one foundation model to serve finance, support, and legal tasks while keeping each adaptation separately replaceable. Which PEFT deployment is most storage-efficient?",
    "options": [
      "Duplicate the full base model before loading each adapter",
      "Store one shared base model and three small task-specific adapters",
      "Store three complete independently fine-tuned copies of the base model",
      "Retrain the tokenizer for every request"
    ],
    "correct": "Store one shared base model and three small task-specific adapters",
    "explanation": "Multi-adapter serving keeps one frozen base model in GPU VRAM and dynamically attaches task-specific LoRA adapters per request, enabling extreme storage and compute efficiency.",
    "theory": {
      "title": "Multi-Adapter Serving on a Shared Base Model",
      "what_is_it": "Multi-Adapter Serving keeps one frozen 70B base model (140 GB) loaded in GPU VRAM and dynamically attaches lightweight 20 MB LoRA adapters per request on the fly.\n\n💡 Subject-Related Example:\nA single GPU server hosts 1 shared base model and hot-swaps separate 20 MB adapters for Legal, Medical, Finance, and Coding requests in milliseconds.\n\n🚀 Real-World AI Use Case:\nMulti-tenant enterprise serving architectures (vLLM, S-LoRA, Predibase) serving hundreds of fine-tuned models on a single GPU cluster.",
      "why_we_need_it": "Full fine-tuning requires 5 separate 140 GB models (700 GB total), needing 5 expensive GPU servers. Multi-adapter serving runs 100 specialized models on a single GPU server!",
      "how_it_works": "• GPU loads 1 frozen base model W₀.\n• Request 1 (Legal) routes through Base + Adapter_Legal.\n• Request 2 (Medical) routes through Base + Adapter_Medical in the same batch (vLLM / S-LoRA).",
      "formula": "Shared GPU VRAM = Base_Model (140 GB) + N × Adapter_Size (20 MB)",
      "key_takeaways": [
        "⭐ Massive Multi-Tenant Savings: 1 shared base model serves dozens of custom enterprise adapters.",
        "⭐ Lightweight Storage: Each adapter is only ~20 MB to 50 MB on disk (vs 140 GB per full model).",
        "⭐ Dynamic Hot-Swapping: Adapters can be loaded and swapped into GPU memory in milliseconds."
      ]
    },
    "sample_questions": [
      {
        "q": "How much storage is saved by storing 10 LoRA adapters (50 MB each) on a 13B model (26 GB) versus 10 full fine-tuned model copies?",
        "options": [
          "~234 GB saved (260 GB vs 26.5 GB)",
          "0 MB saved",
          "1 GB saved",
          "100 GB saved"
        ],
        "ans": "~234 GB saved (260 GB vs 26.5 GB)",
        "exp": "10 full models = 260 GB. 1 base + 10 adapters = 26.5 GB (saving ~234 GB)."
      },
      {
        "q": "What server framework specializes in serving thousands of different LoRA adapters concurrently on a single base model?",
        "options": [
          "S-LoRA / vLLM Multi-LoRA",
          "Flask",
          "SQLite",
          "NumPy"
        ],
        "ans": "S-LoRA / vLLM Multi-LoRA",
        "exp": "S-LoRA and vLLM support dynamic batched multi-adapter routing in production."
      }
    ]
  },
  {
    "id": "q65",
    "module_id": "mod8",
    "module_name": "Module 8: Fine-Tuning & Parameter-Efficient Adaptation (LoRA & PEFT)",
    "syllabus_lec": "Lectures 36-37",
    "topic": "Weight Merging for Zero Inference Latency Overhead",
    "difficulty": "Hard",
    "points": 2,
    "question": "After a LoRA adapter has been trained, what is one practical effect of merging its learned update into the corresponding base weights for deployment?",
    "options": [
      "The original tokenizer is automatically replaced",
      "The model can use the adapted weights without a separate LoRA matrix path for those layers",
      "The model no longer needs any input tokens",
      "The merged model becomes an encoder-decoder architecture"
    ],
    "correct": "The model can use the adapted weights without a separate LoRA matrix path for those layers",
    "explanation": "Permanently merging the learned LoRA adapter weights into the pre-trained base model weights (W_merged = W₀ + (α/r)(BA)) eliminates separate adapter computation paths, resulting in zero extra inference latency overhead.",
    "theory": {
      "title": "Weight Merging for Zero Inference Latency Overhead",
      "what_is_it": "Weight Merging permanently fuses the learned LoRA adapter weights directly into the base weights (W_merged = W₀ + (α/r) · (B · A)) before deployment, eliminating the separate adapter path.\n\n💡 Subject-Related Example:\nMultiplying B (4096 × 8) by A (8 × 4096) produces a (4096 × 4096) matrix ΔW, which is added directly into base weights W₀. The merged model runs as a single weight matrix.\n\n🚀 Real-World AI Use Case:\nZero-overhead deployment in production systems and edge devices, eliminating extra matrix multiplication latency during live inference.",
      "why_we_need_it": "Running two separate matrix multiplications (W₀ · x + (B·A) · x) during live production inference adds small latency overhead. Fusing the weights into W_merged eliminates the adapter path completely, resulting in exactly 0% extra latency!",
      "how_it_works": "• Compute product ΔW = (α / r) · (B · A).\n• Add directly: W_merged = W₀ + ΔW.\n• Deploy W_merged as a standard single weight matrix: Output = W_merged · x.",
      "formula": "W_merged = W₀ + (α / r) · (B · A)",
      "key_takeaways": [
        "⭐ 0% Extra Latency: Produces a single fused weight matrix with zero inference latency overhead.",
        "⭐ Architectural Equivalence: The merged model runs identically to a standard non-adapter model.",
        "⭐ Irreversible Convenience: Eliminates separate adapter matrix paths in production deployment."
      ]
    },
    "sample_questions": [
      {
        "q": "In Hugging Face PEFT, which method permanently fuses LoRA adapter weights into base weights?",
        "options": [
          "model.merge_and_unload()",
          "model.delete_adapter()",
          "model.train()",
          "model.split()"
        ],
        "ans": "model.merge_and_unload()",
        "exp": "merge_and_unload() fuses B · A into base weights."
      },
      {
        "q": "Is there any extra inference latency when using a merged LoRA model compared to the original base model?",
        "options": [
          "No, exactly 0 latency penalty because computation remains a single standard matrix multiplication",
          "Yes, 2x slower",
          "Yes, 50ms per token",
          "Only on CPUs"
        ],
        "ans": "No, exactly 0 latency penalty because computation remains a single standard matrix multiplication",
        "exp": "Because the weights are fused into W_merged, inference runs standard matrix multiplications."
      }
    ]
  }
];
