// ST-1 Complete Module Foundation Guides (Lectures 1–25)
// Fully detailed, ground-zero pedagogical crash courses with beginner intuitions, real-world AI applications,
// step-by-step mathematical walkthroughs, and high-yield exam traps.

const ST1_MODULE_GUIDES = {
  "st1_mod1": {
    "id": "st1_mod1",
    "num": 1,
    "title": "Module 1: Introduction to Neural Networks & The Biological Model",
    "lectures": "Lectures 1–2",
    "why_study": "Deep learning originated from trying to replicate biological intelligence in silicon. The Rosenblatt Perceptron (1958) is the historical foundation of all artificial neural networks. Understanding how a single artificial neuron calculates weighted inputs, fires an activation, and updates its weights via error feedback provides the essential intuition needed for multi-layer perceptrons, backpropagation, and transformer attention heads.",
    "what_is_it": "An Artificial Neuron (Perceptron) is a mathematical function that models biological synaptic integration:\n\n🧠 The Biological Neuron Metaphor:\n• 🌿 Dendrites (Inputs x₁, x₂, ..., xₙ): Receive incoming chemical signals from neighboring neurons.\n• 🔌 Synaptic Weights (w₁, w₂, ..., wₙ): Represent the synaptic strength/efficiency of each junction. A positive weight excites the neuron; a negative weight inhibits it.\n• 🧬 Soma / Cell Body (Summation ∑ wᵢxᵢ + b): The nucleus integrates and sums all incoming electrical potentials plus an intrinsic resting baseline bias b.\n• ⚡ Axon Hillock (Activation Threshold): If the accumulated cell potential reaches a critical threshold (z ≥ 0), an all-or-nothing electrical action potential fires down the axon (ŷ = 1). Otherwise, the neuron remains quiescent (ŷ = 0).\n\nGeometric Meaning:\nThe equation w · x + b = 0 defines an (n-1)-dimensional hyperplane acting as a flat decision boundary that slices input feature space into two distinct decision half-spaces.",
    "real_world_use": "• 🛡️ Binary Spam Detection: Weights determine whether the presence of words like 'lottery' (+3.5) or 'meeting' (-2.0) flips an email into Spam (Class 1) or Ham (Class 0).\n• 💳 Automated Credit Card Fraud Scoring: Slices transaction dollar volume and user location distance against an allowable threshold.\n• 🚦 Basic Sensor Triggering: Industrial IoT systems activating alarms when vibration and heat exceed a linear boundary.",
    "core_mechanics": [
      "1. Linear Combination (Pre-activation): z = ∑ᵢ wᵢ xᵢ + b = w · x + b.",
      "2. Heaviside Step Activation: ŷ = 1 if z ≥ 0 else 0 (non-differentiable step function).",
      "3. Perceptron Learning Update Rule: Δw = η · (y_target - ŷ) · x, where η is the learning rate.",
      "4. Directional Correction: If the model predicts 0 when target is 1 (False Negative), weights shift in the direction of +x. If it predicts 1 when target is 0 (False Positive), weights shift in the direction of -x. If correct, Δw = 0.",
      "5. Novikoff's Convergence Theorem: If the training dataset is strictly linearly separable by some margin γ, the perceptron learning algorithm is mathematically guaranteed to converge to zero training errors in a finite number of steps (at most (R/γ)² steps)."
    ],
    "diagram_html": `
      <div class="visual-diagram-card animated-diagram">
        <div class="visual-diagram-title">⚡ Artificial Perceptron Architecture & Synaptic Flow</div>
        <div class="flow-container">
          <div class="flow-split-3">
            <div class="flow-box"><strong>Input x₁</strong><br><small>Synapse Weight w₁</small></div>
            <div class="flow-box"><strong>Input x₂</strong><br><small>Synapse Weight w₂</small></div>
            <div class="flow-box"><strong>Bias b (+1)</strong><br><small>Threshold Offset</small></div>
          </div>
          <div class="flow-connector">↓ Dendritic Summation: z = w₁x₁ + w₂x₂ + b</div>
          <div class="flow-step">
            <strong>Soma Membrane Potential (Linear Sum z)</strong><br>
            <small>Evaluates distance and orientation relative to decision hyperplane</small>
          </div>
          <div class="flow-connector">↓ Threshold Activation: Step(z) = 1 if z ≥ 0 else 0</div>
          <div class="flow-step output-step">
            <strong>Axon Output Action Potential ŷ ∈ {0, 1}</strong>
          </div>
        </div>
      </div>
    `,
    "step_by_step_example": `📐 Perceptron Numerical Weight Update Walkthrough:
• Problem Statement: Initial weight vector w = [0.2, -0.1], bias b = 0.0, learning rate η = 0.1.
• Input Vector: x = [1.0, 2.0], Ground-truth Target: y = 1.
• Step 1 (Forward Pass): Compute pre-activation sum z:
  z = (w₁ · x₁) + (w₂ · x₂) + b = (0.2 × 1.0) + (-0.1 × 2.0) + 0.0 = 0.2 - 0.2 = 0.0.
• Step 2 (Threshold Activation): With threshold rule z > 0 => 1 else 0 (or misclassification test):
  Suppose prediction ŷ = 0.
• Step 3 (Error Calculation): Error = (y_target - ŷ) = (1 - 0) = +1 (False Negative).
• Step 4 (Weight Delta Calculation):
  Δw = η · (y - ŷ) · x = 0.1 × (+1) × [1.0, 2.0] = [0.1, 0.2].
• Step 5 (New Weight Vector):
  w_new = w_old + Δw = [0.2 + 0.1, -0.1 + 0.2] = [0.3, 0.1].
• Verification: Re-evaluating z with new weights: z = (0.3 × 1) + (0.1 × 2) = +0.5 ≥ 0 => ŷ = 1 ✅ Correctly classified!`,
    "expected_exam_questions": [
      "Q1 (Mock Test 1): Given weights [0.2, -0.1], input [1, 2], target 1, prediction 0, and η = 0.1. What are the new weights after one update?\n-> Answer: [0.3, 0.1].",
      "Q2: What happens to the perceptron weights when an input pattern is already correctly classified?\n-> Answer: Error is 0, so Δw = 0 and no weights change.",
      "Q3: Under what exact geometric condition is the perceptron learning rule guaranteed to converge?\n-> Answer: When the two classes are strictly linearly separable by a hyperplane (Novikoff's Theorem)."
    ]
  },
  "st1_mod2": {
    "id": "st1_mod2",
    "num": 2,
    "title": "Module 2: Limitations of the Perceptron & MLP Architecture",
    "lectures": "Lecture 3",
    "why_study": "In 1969, Marvin Minsky and Seymour Papert published their landmark book 'Perceptrons', proving that a single-layer perceptron cannot solve the elementary Exclusive-OR (XOR) logic function. This sparked the first 'AI Winter'. Understanding why single layers fail geometrically and how stacking hidden layers with non-linear activations overcomes this limitation is fundamental to modern deep learning.",
    "what_is_it": "Multi-Layer Perceptrons (MLPs) overcome linear inseparability by inserting intermediate 'hidden' layers of neurons between the raw inputs and final outputs.\n\n🧠 The Folding Origami Metaphor:\nImagine drawing two red dots at coordinates (0,1) and (1,0) and two blue dots at (0,0) and (1,1) on a flat sheet of paper (the XOR problem). You can never draw a single straight line that isolates red from blue.\nHowever, if you fold the paper in half (a non-linear transformation), the red dots align on top of one another! Now, a single straight slice cleanly separates red from blue.\nHidden layers with non-linear activations fold, warp, and stretch coordinate space so complex entangled data becomes linearly separable at the final layer.",
    "real_world_use": "• 🧩 Complex Pattern Recognition: Classifying overlapping risk profiles where neither feature alone dictates the outcome.\n• 📈 Non-linear regression: Modeling non-linear physics, aerodynamic drag, and financial option pricing surfaces.\n• 🔍 Foundation of Feature Extractors: Early MLP layers learn basic edge/boundary combinations that subsequent layers assemble into complex representations.",
    "core_mechanics": [
      "1. The XOR Dilemma: XOR outputs 1 only when inputs differ (0,1 or 1,0). A single linear boundary w₁x₁ + w₂x₂ + b = 0 can separate AND or OR, but never XOR, because the positive diagonal intersects the negative diagonal.",
      "2. Hidden Neurons as Feature Extractors: In an MLP with 2 hidden units, neuron h₁ implements an OR boundary (x₁ + x₂ ≥ 0.5) while neuron h₂ implements a NAND boundary (x₁ + x₂ ≤ 1.5).",
      "3. Output Synthesis: The output neuron acts as an AND gate combining h₁ and h₂: AND(OR, NAND) = XOR.",
      "4. The Linear Collapse Theorem: If all activation functions in an L-layer network are linear (e.g. g(z) = z), then: y = W_L ··· W₂ W₁ x + b* = W_effective · x + b*. Stacking 100 linear layers provides zero additional expressive power compared to a single linear layer! Non-linear activations are mandatory."
    ],
    "diagram_html": `
      <div class="visual-diagram-card animated-diagram">
        <div class="visual-diagram-title">⚡ Multi-Layer Perceptron (MLP) Solving Non-Linear XOR</div>
        <div class="flow-container">
          <div class="flow-step"><strong>Input Space (x₁, x₂) — Non-Linearly Separable</strong></div>
          <div class="flow-connector">↓ Hidden Layer Projection + Non-Linearity (ReLU)</div>
          <div class="flow-split-2">
            <div class="flow-box"><strong>Hidden Neuron h₁ (OR Boundary)</strong><br><small>Fires when x₁ + x₂ ≥ 0.5</small></div>
            <div class="flow-box"><strong>Hidden Neuron h₂ (NAND Boundary)</strong><br><small>Fires when x₁ + x₂ ≤ 1.5</small></div>
          </div>
          <div class="flow-connector">↓ Transformed Feature Space (h₁, h₂) — Linearly Separable!</div>
          <div class="flow-step output-step">
            <strong>Output Neuron (AND Combination) ➔ Clean XOR Decision</strong>
          </div>
        </div>
      </div>
    `,
    "step_by_step_example": `📐 Proof of Linear Collapse Theorem:
• Consider a 2-layer network with purely linear activations:
  Hidden layer: h = W₁ · x + b₁
  Output layer: ŷ = W₂ · h + b₂
• Substitute h into ŷ:
  ŷ = W₂ · (W₁ · x + b₁) + b₂
  ŷ = (W₂ · W₁) · x + (W₂ · b₁ + b₂)
• Define new unified matrix W* = W₂ · W₁ and unified bias b* = W₂ · b₁ + b₂:
  ŷ = W* · x + b*
• Conclusion: Stacking linear layers collapses algebraically into a single linear matrix multiplication. No non-linear boundaries can ever be formed without non-linear activations!`,
    "expected_exam_questions": [
      "Q1 (Mock Test 1): A multi-layer network contains several affine layers but no non-linear activations. Which statement best explains its decision capacity?\n-> Answer: It behaves like one affine transformation despite the added depth (Linear Collapse).",
      "Q2: Why can't a single-layer perceptron solve the XOR problem?\n-> Answer: Because XOR is not linearly separable; no single hyperplane can separate (0,1) and (1,0) from (0,0) and (1,1).",
      "Q3: How many hidden neurons are minimally required in a 2-layer MLP to solve XOR with threshold activations?\n-> Answer: Exactly 2 hidden neurons (one for OR, one for NAND)."
    ]
  },
  "st1_mod3": {
    "id": "st1_mod3",
    "num": 3,
    "title": "Module 3: MLP Forward Pass & Network Representation",
    "lectures": "Lecture 4",
    "why_study": "Evaluating deep networks requires structured matrix algebra for GPU acceleration. Moreover, deep networks with poor weight initializations suffer catastrophic training failures: activations either blow up to infinity (exploding activations) or shrink to zero (vanishing activations). Masterclass understanding of forward tensor flows, parameter counts, and variance-scaled initializations (He / Xavier) is essential.",
    "what_is_it": "The forward pass computes layer-by-layer activations via vectorized matrix multiplications. Proper weight initialization ensures that the variance of activations remains constant across all 50+ layers.\n\n🧠 The Audio Amplifier Metaphor:\nThink of deep layers as a chain of 50 audio amplifiers connected in series:\n• If each amplifier increases signal power by just 1.1x (variance > 1), after 50 stages the sound volume explodes to 1.1⁵⁰ ≈ 117x, causing deafening distortion (numerical overflow / NaN).\n• If each amplifier attenuates signal power to 0.9x (variance < 1), after 50 stages the signal drops to 0.9⁵⁰ ≈ 0.005x, fading into complete silence (vanishing activations).\n• Proper initialization sets each amplifier's gain to exactly 1.0x so signal strength remains perfectly preserved from start to finish.",
    "real_world_use": "• 🧮 GPU Matrix Acceleration: Vectorizing dense forward passes as Batch Matrix Multiplications (GEMM) in cuBLAS.\n• 🏗️ Architecture Sizing: Calculating parameter counts and GPU memory budgets for fully connected sublayers in ViTs and Transformer FFNs.\n• 🎯 Stable Pre-training: Initializing deep convolutional and dense backbones with He initialization to prevent immediate gradient failure at epoch 1.",
    "core_mechanics": [
      "1. Vectorized Forward Propagation: For layer l, pre-activation z^{[l]} = W^{[l]} a^{[l-1]} + b^{[l]}, and activated state a^{[l]} = g^{[l]}(z^{[l]}).",
      "2. Dense Layer Parameter Formula: A layer connecting n_in inputs to n_out neurons requires: Parameters = (n_in × n_out) weights + n_out biases = n_out · (n_in + 1).",
      "3. He (Kaiming) Initialization: W ~ N(0, 2 / n_in). Designed for ReLU activations because ReLU sets 50% of activations to zero, halving variance. The factor of 2 compensates for this loss.",
      "4. Xavier (Glorot) Initialization: W ~ N(0, 2 / (n_in + n_out)) or N(0, 1 / n_in). Designed for symmetric zero-centered activations (Tanh, Linear) to preserve variance."
    ],
    "diagram_html": `
      <div class="visual-diagram-card animated-diagram">
        <div class="visual-diagram-title">⚡ MLP Vectorized Matrix Forward Flow</div>
        <div class="flow-container">
          <div class="flow-step"><strong>Input Matrix X (Shape: Batch × n_in)</strong></div>
          <div class="flow-connector">↓ Multiply W^[1] (n_in × n_h) + Broadcast Bias b^[1] (1 × n_h)</div>
          <div class="flow-step"><strong>Pre-activation Matrix Z^[1] (Batch × n_h)</strong></div>
          <div class="flow-connector">↓ Element-wise Non-Linearity: A^[1] = ReLU(Z^[1])</div>
          <div class="flow-step"><strong>Hidden Activations A^[1] (Batch × n_h)</strong></div>
          <div class="flow-connector">↓ Multiply W^[2] (n_h × n_out) + Broadcast Bias b^[2] (1 × n_out)</div>
          <div class="flow-step output-step"><strong>Output Predictions Ŷ (Batch × n_out)</strong></div>
        </div>
      </div>
    `,
    "step_by_step_example": `📐 Multi-Layer Parameter Calculation Walkthrough:
• Architecture Specifications:
  Input Layer: 10 features (n_in = 10)
  Hidden Layer 1: 6 neurons with biases (n_h = 6)
  Output Layer: 3 classes with biases (n_out = 3)
• Layer 1 (Input -> Hidden):
  Weights: 10 inputs × 6 neurons = 60 weight parameters.
  Biases: 1 bias per hidden neuron = 6 bias parameters.
  Subtotal Layer 1 = 60 + 6 = 66 parameters.
• Layer 2 (Hidden -> Output):
  Weights: 6 inputs × 3 neurons = 18 weight parameters.
  Biases: 1 bias per output neuron = 3 bias parameters.
  Subtotal Layer 2 = 18 + 3 = 21 parameters.
• Total Trainable Parameters = 66 + 21 = 87 parameters.
• Memory Impact: At 4 bytes per float32 parameter, storing these 87 weights takes 348 bytes.`,
    "expected_exam_questions": [
      "Q1 (Mock Test 1): An MLP has 10 inputs, 6 hidden neurons, and 3 output neurons (all with biases). How many trainable parameters exist?\n-> Answer: 87 parameters.",
      "Q2 (Mock Test 1): In a deep MLP using ReLU, initial activations become excessively large. Which initialization controls variance for ReLU?\n-> Answer: He-style variance-scaled initialization (Var = 2 / n_in).",
      "Q3: Why does He initialization use 2/n_in instead of 1/n_in as used in Xavier initialization?\n-> Answer: Because ReLU zeroes out approximately half of all activations (all negative inputs), so variance is cut in half; the factor of 2 restores unit variance."
    ]
  },
  "st1_mod4": {
    "id": "st1_mod4",
    "num": 4,
    "title": "Module 4: Backpropagation Algorithm & Gradient Descent",
    "lectures": "Lectures 5–6",
    "why_study": "Backpropagation is the universal engine that powers all modern artificial intelligence. It computes the exact gradient of the loss function with respect to every single weight in a network by systematically applying the calculus chain rule backwards from output to input. Understanding iteration counts, learning rate dynamics, and analytical derivative steps is critical for training stability.",
    "what_is_it": "A two-pass optimization procedure:\n1. ➡️ Forward Pass: Inputs propagate through layers to produce prediction ŷ and scalar loss L.\n2. ⬅️ Backward Pass: Autograd propagates error gradients backwards via the chain rule ∂L/∂w = (∂L/∂z) · (∂z/∂w).\n3. ⚡ Gradient Descent Step: Parameters update in the negative gradient direction: w ← w - η ∇_w L.\n\n🧠 The Corporate Feedback Metaphor:\nImagine a multi-tier corporation where the CEO (output layer) makes a product announcement that loses $10M (loss L). The Board identifies the CEO's error. The CEO tells the VPs how much their department reports contributed to the mistake (chain rule). The VPs pass feedback down to line managers, who adjust employee protocols (weight updates). Blame flows strictly from top to bottom.",
    "real_world_use": "• 🚀 Training Massive Foundation Models: Distributing backpropagation across thousands of GPUs via data-parallel and pipeline-parallel frameworks (DeepSpeed, Megatron-LM).\n• 📉 Learning Rate Scheduling: Tuning step sizes via warmups and cosine decay to navigate narrow loss valleys without divergence.\n• 🏎️ Mini-batch Scheduling: Balancing GPU saturation against gradient variance using batch sizes of 32, 64, or 128.",
    "core_mechanics": [
      "1. The Calculus Chain Rule: For composite function L(z(w)), ∂L/∂w = (∂L/∂z) · (∂z/∂w) = (prediction error) · (input feature).",
      "2. Mini-Batch Iteration Math: For a dataset of N samples and batch size B, one full epoch requires ⌈N / B⌉ distinct parameter update steps.",
      "3. Learning Rate Hyperparameter η: Governs update step size: w_new = w_old - η · ∇L. If η is too large, the optimizer overshoots the minimum and diverges; if too small, training takes weeks or gets stuck in saddle points.",
      "4. Single-Neuron Base Case: For linear neuron z = w·x and loss L = 0.5(z - y)², the analytical gradient is exactly (z - y) · x.",
      "5. Momentum Acceleration: Maintains an exponentially decaying moving average of past gradients v_t = γ · v_{t-1} + η · ∇L, dampening oscillations along steep ravines and accelerating descent along consistent directions.",
      "6. Gradient Clipping (Exploding Gradient Remedy): Rescales the gradient vector if its L2 norm exceeds a maximum threshold: g ← g · (threshold / max(threshold, ||g||_2)), ensuring optimization stability."
    ],
    "diagram_html": `
      <div class="visual-diagram-card animated-diagram">
        <div class="visual-diagram-title">⚡ Backpropagation Reverse Gradient Flow</div>
        <div class="flow-container">
          <div class="flow-step" style="background:var(--primary-blue-bg); border-color:var(--primary-blue);">
            <strong>1. Scalar Loss Computation L(y, ŷ)</strong>
          </div>
          <div class="flow-connector">↓ Output Sensitivity: ∂L/∂z_out = (ŷ - y)</div>
          <div class="flow-step">
            <strong>2. Output Layer Gradients (∂L/∂W_out, ∂L/∂b_out)</strong>
          </div>
          <div class="flow-connector">↓ Reverse Matrix Multiply by (W_out)ᵀ and multiply by activation derivative g'(z_hidden)</div>
          <div class="flow-step">
            <strong>3. Hidden Layer Gradients (∂L/∂W_hidden, ∂L/∂b_hidden)</strong>
          </div>
          <div class="flow-connector">↓ Gradient Descent Update: W ← W - η · ∇_W L</div>
          <div class="flow-step output-step">
            <strong>4. Updated Network Weights (Reduced Loss on Next Pass)</strong>
          </div>
        </div>
      </div>
    `,
    "step_by_step_example": `📐 Single-Neuron Analytical Gradient Descent Step:
• Given:
  Input feature x = 4.0, Initial weight w = 0.5, Target y = 1.0, Learning rate η = 0.1.
  Loss function: Mean Squared Error L = 0.5 · (z - y)².
• Step 1 (Forward Pass):
  z = w · x = 0.5 × 4.0 = 2.0.
• Step 2 (Error Residual):
  Error = (z - y) = 2.0 - 1.0 = +1.0.
• Step 3 (Loss Value):
  L = 0.5 · (1.0)² = 0.5.
• Step 4 (Analytical Gradient via Chain Rule):
  ∂L/∂z = (z - y) = 1.0.
  ∂z/∂w = x = 4.0.
  ∂L/∂w = (∂L/∂z) · (∂z/∂w) = 1.0 × 4.0 = 4.0.
• Step 5 (Gradient Descent Update):
  w_new = w_old - η · (∂L/∂w) = 0.5 - (0.1 × 4.0) = 0.5 - 0.4 = 0.1.
• New Forward Check: z_new = 0.1 × 4.0 = 0.4 => New error = (0.4 - 1.0) = -0.6 (Loss drops from 0.50 to 0.18!).`,
    "expected_exam_questions": [
      "Q1 (Mock Test 1): 1,000 training samples are trained with mini-batch size 100. How many parameter updates occur in one epoch?\n-> Answer: 10 updates (1000 / 100 = 10).",
      "Q2 (Mock Test 1): During gradient descent, training loss oscillates wildly and diverges across a steep valley. Which adjustment directly fixes this?\n-> Answer: Reduce the learning rate to make smaller, stable updates.",
      "Q3 (Mock Test 1): Linear neuron z = w*x has w = 0.5, x = 4. For target y = 1 and loss L = 0.5*(z - y)^2, what is updated w with η = 0.1?\n-> Answer: 0.1."
    ]
  },
  "st1_mod5": {
    "id": "st1_mod5",
    "num": 5,
    "title": "Module 5: Activation Functions & Loss Functions",
    "lectures": "Lecture 7",
    "why_study": "The choice of non-linear activation and loss function determines whether error signals survive backpropagation or die in deep layers. The classic Sigmoid function caused severe gradient vanishing, capping network depth at 3–4 layers until the Rectified Linear Unit (ReLU) revolutionized deep vision networks.",
    "what_is_it": "Activation functions map linear sums to non-linear spaces; loss functions quantify objective divergence:\n• Sigmoid: σ(z) = 1 / (1 + e⁻ᶻ), outputs probabilities in (0, 1).\n• ReLU: f(z) = max(0, z), zero for negative inputs, linear identity for positive inputs.\n• Softmax: Converts arbitrary unconstrained logit vectors into valid categorical probability distributions summing to 1.0.",
    "real_world_use": "• 🖼️ Multi-class Image Classification: Softmax + Categorical Cross-Entropy across ImageNet 1,000 classes.\n• ⚡ Hidden Layer Speedup: Using ReLU in convolutional backbones to accelerate convergence 6x faster than Tanh/Sigmoid.\n• 🛡️ Numerical Softmax Stability: Subtracting max(logits) in PyTorch nn.CrossEntropyLoss to prevent exponential float32 overflow.",
    "core_mechanics": [
      "1. Sigmoid Saturation & Vanishing Gradients: σ'(z) = σ(z)(1 - σ(z)). The maximum derivative is only 0.25 (at z = 0). When |z| is large, σ'(z) ≈ 0. Across 10 layers, gradient scales as (0.25)¹⁰ ≈ 9.5 × 10⁻⁷, completely freezing learning in early layers.",
      "2. ReLU Gradient Highway: ReLU'(z) = 1.0 for all z > 0. The gradient flows through 100+ layers with 1.0x attenuation, enabling ultra-deep architectures.",
      "3. Softmax Translation Invariance: Softmax(z - C) = Softmax(z). Proof: exp(zᵢ - C) / ∑ exp(zⱼ - C) = [exp(zᵢ)exp(-C)] / [exp(-C) ∑ exp(zⱼ)] = exp(zᵢ) / ∑ exp(zⱼ). Subtracting C = max(z) guarantees maximum exponent is 0, preventing float32 overflow (inf / inf = NaN)."
    ],
    "diagram_html": `
      <div class="visual-diagram-card animated-diagram">
        <div class="visual-diagram-title">⚡ Sigmoid Vanishing Gradients vs ReLU Gradient Highway</div>
        <div class="flow-container">
          <div class="flow-split-2">
            <div class="flow-box" style="border-color:#ef4444; background:rgba(239, 68, 68, 0.08);">
              <strong style="color:#ef4444;">Sigmoid σ(z)</strong><br>
              <small>• Range: (0, 1)<br>• Max Derivative: 0.25 at z=0<br>• As |z| > 4, σ'(z) ➔ 0.0 (Vanishing Gradients!)</small>
            </div>
            <div class="flow-box" style="border-color:var(--emerald-green); background:var(--emerald-green-bg);">
              <strong style="color:var(--emerald-green-text);">ReLU max(0, z)</strong><br>
              <small>• Range: [0, ∞)<br>• Constant Derivative: 1.0 for z > 0<br>• ✨ Unattenuated Gradient Highway through 100+ layers!</small>
            </div>
          </div>
        </div>
      </div>
    `,
    "step_by_step_example": `📐 Softmax Shift Invariance Numerical Proof:
• Given raw logits: z = [7.0, 5.0, 4.0].
• Step 1 (Direct Softmax):
  e⁷ ≈ 1096.63, e⁵ ≈ 148.41, e⁴ ≈ 54.60. Sum = 1299.64.
  P = [1096.63/1299.64, 148.41/1299.64, 54.60/1299.64] = [0.8438, 0.1142, 0.0420].
• Step 2 (Subtract C = max(z) = 7.0):
  z_shifted = [7.0 - 7, 5.0 - 7, 4.0 - 7] = [0.0, -2.0, -3.0].
• Step 3 (Shifted Softmax):
  e⁰ = 1.0, e⁻² ≈ 0.1353, e⁻³ ≈ 0.0498. Sum = 1.1851.
  P_shifted = [1.0/1.1851, 0.1353/1.1851, 0.0498/1.1851] = [0.8438, 0.1142, 0.0420].
• Conclusion: Probabilities are identical to 4 decimal places, but numbers never exceed 1.0, preventing GPU float overflow!`,
    "expected_exam_questions": [
      "Q1 (Mock Test 1): In a deep network with sigmoid activations, early layers learn extremely slowly when pre-activations are large in magnitude. Why?\n-> Answer: Sigmoid saturation produces near-zero local derivatives (≤ 0.25).",
      "Q2 (Mock Test 1): Before applying softmax, the same constant is subtracted from every logit. What happens to the output probabilities?\n-> Answer: They preserve exactly the same class probabilities (translation invariance).",
      "Q3: What is the maximum possible value of the derivative of the Sigmoid activation function?\n-> Answer: 0.25 (at z = 0)."
    ]
  },
  "st1_mod6": {
    "id": "st1_mod6",
    "num": 6,
    "title": "Module 6: Hands-on: NumPy Implementation",
    "lectures": "Lectures 8–10",
    "why_study": "Deep learning frameworks (PyTorch, TensorFlow) hide tensor mechanics behind autograd. Implementing a multi-layer neural network from scratch using pure NumPy provides absolute mastery over matrix batch dimensions, broadcasting, and explicit backpropagation matrix calculus.",
    "what_is_it": "Constructing vectorized 2-layer MLPs, ReLU activations, Cross-Entropy Loss, and mini-batch SGD weight updates using only NumPy array operations.\n\nKey Matrix Identities:\n• Forward: Z₁ = X · W₁ + b₁, A₁ = np.maximum(0, Z₁), Z₂ = A₁ · W₂ + b₂.\n• Backward: dZ₂ = (Ŷ - Y) / B, dW₂ = A₁ᵀ · dZ₂, db₂ = np.sum(dZ₂, axis=0, keepdims=True).\n• Hidden Backprop: dA₁ = dZ₂ · W₂ᵀ, dZ₁ = dA₁ * (Z₁ > 0), dW₁ = Xᵀ · dZ₁.",
    "real_world_use": "• ⚡ Embedded Microcontroller Deployment: Running lightweight neural network inference on Raspberry Pi / Arduino without heavy PyTorch binaries.\n• 🛠️ Custom C++/CUDA Operator Development: Translating NumPy index math into parallel CUDA thread blocks.\n• 🔬 High-Precision Numerical Debugging: Validating complex loss formulas against analytical finite-difference checks.",
    "core_mechanics": [
      "1. Vectorized Matrix Multiplication (@): Dotting X (Batch × n_in) with W₁ (n_in × n_h) computes all batch samples in parallel in a single BLAS call.",
      "2. Bias Broadcasting: A bias vector of shape (1, n_h) is automatically broadcast across all B rows of the batch matrix.",
      "3. ReLU Masking Derivative: If pre-activation Z > 0, the incoming gradient passes through untouched; if Z ≤ 0, the gradient is blocked: dZ = dA * (Z > 0).",
      "4. Batch Gradient Averaging: Weight gradient dW = (1/B) · Xᵀ · dZ computes the average gradient across all batch examples."
    ],
    "diagram_html": `
      <div class="visual-diagram-card animated-diagram">
        <div class="visual-diagram-title">⚡ Pure NumPy Forward & Backward Tensor Dimensions</div>
        <div class="flow-container">
          <div class="flow-step"><strong>Input Batch X: (B × n_in)</strong></div>
          <div class="flow-connector">↓ Forward GEMM: Z1 = X @ W1 + b1 ➔ (B × n_h)</div>
          <div class="flow-step"><strong>Hidden Activations A1 = np.maximum(0, Z1) ➔ (B × n_h)</strong></div>
          <div class="flow-connector">↓ Forward GEMM: Z2 = A1 @ W2 + b2 ➔ (B × n_out)</div>
          <div class="flow-step"><strong>Softmax Probabilities Ŷ ➔ Error dZ2 = (Ŷ - Y)/B ➔ (B × n_out)</strong></div>
          <div class="flow-connector">↓ Backward GEMM: dW2 = A1.T @ dZ2 ➔ (n_h × n_out)</div>
          <div class="flow-step"><strong>Hidden Error: dZ1 = (dZ2 @ W2.T) * (Z1 > 0) ➔ (B × n_h)</strong></div>
          <div class="flow-connector">↓ Backward GEMM: dW1 = X.T @ dZ1 ➔ (n_in × n_h)</div>
          <div class="flow-step output-step"><strong>Gradient Updates Applied: W = W - η · dW</strong></div>
        </div>
      </div>
    `,
    "step_by_step_example": `📐 NumPy Tensor Shape Verification Walkthrough:
• Batch size B = 32, Input features n_in = 10, Hidden neurons n_h = 5.
• X shape: (32, 10).
• Incoming error gradient at hidden layer dZ₁ has shape: (32, 5).
• Weight gradient dW₁ formula: dW₁ = Xᵀ · dZ₁.
  Shape check: (10, 32) @ (32, 5) = (10, 5) ✅ Matches W₁ shape (n_in × n_h)!
• Bias gradient db₁ formula: db₁ = np.sum(dZ₁, axis=0, keepdims=True).
  Shape check: sum along batch axis 0 => (1, 5) ✅ Matches b₁ shape!`,
    "expected_exam_questions": [
      "Q1 (Mock Test 1): In a vectorized NumPy implementation of a dense layer, what is the gradient of loss with respect to weight matrix W?\n-> Answer: dW = (1/B) · X.T @ dZ.",
      "Q2 (Mock Test 1): What is the NumPy expression for computing the gradient of a ReLU activation given incoming gradient dA and pre-activation Z?\n-> Answer: dZ = dA * (Z > 0).",
      "Q3: Why is keepdims=True required when computing db = np.sum(dZ, axis=0, keepdims=True)?\n-> Answer: To preserve shape (1, n_out) for seamless broadcasting during parameter update w = w - η · db."
    ]
  },
  "st1_mod7": {
    "id": "st1_mod7",
    "num": 7,
    "title": "Module 7: Convolutional Neural Networks (CNNs)",
    "lectures": "Lectures 11–12",
    "why_study": "Dense MLPs completely fail on high-resolution images because they flatten 2D spatial pixel layouts into 1D vectors, destroying neighborhood relationships and demanding millions of parameters. CNNs revolutionized computer vision by introducing 2D sliding kernels with local receptive fields and translation-invariant parameter sharing.",
    "what_is_it": "A deep vision architecture that slides learned 2D/3D filter tensors across an image to generate hierarchical spatial feature maps:\n• Local Receptive Field: Each neuron connects only to a small spatial patch (e.g. 3×3 or 5×5 pixels).\n• Parameter Sharing: The same filter weights slide across the entire image, detecting the feature anywhere it appears.\n• Spatial Downsampling: Pooling layers reduce spatial dimensions to build translation invariance.",
    "real_world_use": "• 🚗 Autonomous Driving: Real-time object and lane detection in camera feeds (Tesla Vision, Waymo).\n• 🏥 Radiology: Automated CT scan and chest X-ray pneumonia classification.\n• 📱 Mobile Face Unlock: Feature map extraction from front camera sensors.",
    "core_mechanics": [
      "1. Convolution Spatial Dimension Formula: W_out = ⌊(W_in - K + 2P) / S⌋ + 1, where W_in is input size, K is kernel size, P is padding, and S is stride.",
      "2. Same Padding Rule: For stride S = 1 and odd kernel K, choosing padding P = (K - 1) / 2 preserves identical spatial dimensions (e.g. 3×3 conv with P = 1).",
      "3. Max Pooling Spatial Dimension Formula: W_pool = ⌊(W_in - K_pool) / S_pool⌋ + 1 (normally halves size with K=2, S=2, P=0).",
      "4. Zero Trainable Parameters in Pooling: Max pooling performs pure fixed local comparisons (argmax); it contains exactly 0 learned weights and 0 biases.",
      "5. Global Average Pooling (GAP): Averages each H × W feature channel into a single scalar value (1×1×C), eliminating millions of dense connection weights without learnable parameters.",
      "6. Convolutional Parameter Accounting: For C_out filters of spatial size K_h × K_w operating over C_in channels: Parameters = C_out · (K_h · K_w · C_in + 1). Note that spatial image dimensions W_in and H_in have ZERO effect on parameter count!"
    ],
    "diagram_html": `
      <div class="visual-diagram-card animated-diagram">
        <div class="visual-diagram-title">⚡ 2D Convolution & Max Pooling Dimension Flow</div>
        <div class="flow-container">
          <div class="flow-step"><strong>Input Image / Feature Map (31 × 31 × 8 Channels)</strong></div>
          <div class="flow-connector">↓ 3 × 3 Conv, Stride S=2, Padding P=1 (24 Filters)</div>
          <div class="flow-step">
            <strong>Conv Output: ⌊(31 - 3 + 2×1)/2⌋ + 1 = 16 × 16 × 24 Channels</strong><br>
            <small>Parameters: 24 × (3 × 3 × 8 + 1) = 1,752 trainable weights</small>
          </div>
          <div class="flow-connector">↓ 2 × 2 Max Pooling, Stride 2, Padding 0 (0 Parameters)</div>
          <div class="flow-step output-step">
            <strong>Pooled Output: ⌊(16 - 2)/2⌋ + 1 = 8 × 8 × 24 Channels</strong><br>
            <small>Halves spatial dimensions while preserving dominant activations</small>
          </div>
        </div>
      </div>
    `,
    "step_by_step_example": `📐 End-to-End Convolution & Pooling Numerical Walkthrough:
• Problem: Input image spatial size W_in = 31, C_in = 8 channels.
  Layer 1: 24 filters of size 3 × 3, stride S = 2, padding P = 1.
  Layer 2: 2 × 2 Max Pooling with stride S = 2, padding P = 0.
• Step 1 (Conv Spatial Output):
  W_conv = ⌊(W_in - K + 2P) / S⌋ + 1 = ⌊(31 - 3 + 2(1)) / 2⌋ + 1
         = ⌊(31 - 3 + 2) / 2⌋ + 1 = ⌊30 / 2⌋ + 1 = 15 + 1 = 16.
  Conv feature map has spatial size 16 × 16 with 24 channels.
• Step 2 (Conv Trainable Parameters):
  Weights per filter = K × K × C_in = 3 × 3 × 8 = 72 weights.
  Biases per filter = 1 bias.
  Total per filter = 72 + 1 = 73 parameters.
  Total for 24 filters = 24 × 73 = 1,752 parameters.
• Step 3 (Max Pooling Output):
  W_pool = ⌊(16 - 2 + 0) / 2⌋ + 1 = ⌊14 / 2⌋ + 1 = 7 + 1 = 8.
  Final spatial size = 8 × 8 with 0 added parameters!`,
    "expected_exam_questions": [
      "Q1 (Mock Test 1): 31 × 31 map processed by 3 × 3 conv with stride 2, padding 1. Output spatial size?\n-> Answer: 16 × 16.",
      "Q2 (Mock Test 1): 32 × 32 map passes through 2 × 2 max pool with stride 2 and no padding. Output spatial size and parameter count?\n-> Answer: 16 × 16 with 0 trainable parameters.",
      "Q3 (Mock Test 1): Conv layer receives 8 input channels, uses 24 filters of 3 × 3 with one bias per filter. Total parameters?\n-> Answer: 1,752 parameters."
    ]
  },
  "st1_mod8": {
    "id": "st1_mod8",
    "num": 8,
    "title": "Module 8: Overview of CNN Architectures (AlexNet, VGG, ResNet)",
    "lectures": "Lectures 13–14",
    "why_study": "Studying the architectural evolution from LeNet (1998) to ResNet (2015) reveals the central design patterns of modern deep learning. The introduction of VGG's small 3×3 filter stacking and ResNet's identity skip connections solved the fundamental degradation problem that had stopped networks from scaling past 20–30 layers.",
    "what_is_it": "Landmark CNN architectural paradigms:\n• AlexNet (2012): 8 layers, introduced ReLU, Dropout, and GPU parallelization, winning ImageNet by an unprecedented 10.8% margin.\n• VGG-16 (2014): Proved that stacking multiple small 3×3 filters replaces large 5×5 or 7×7 filters with fewer parameters and greater non-linearity.\n• ResNet (2015): Introduced residual shortcut identity connections H(x) = F(x) + x, enabling training of networks with 152+ layers without degradation.\n\n🧠 The Degradation Problem:\nCounter-intuitively, stacking more layers in a plain CNN does NOT lead to overfitting; rather, it leads to higher TRAINING error! The optimizer struggles to learn even identity mappings across 30+ unconstrained layers.",
    "real_world_use": "• 🏆 Standard Backbone Feature Extractors: Pre-trained ResNet-50 and ResNet-101 backbones powering modern detection systems (Faster R-CNN, Mask R-CNN, RetinaNet).\n• 🛰️ Satellite & Aerial Imagery: Using deep residual features to classify agricultural crop patterns.\n• 🔍 Medical Histopathology: 152-layer ResNets identifying micro-metastases in gigapixel lymph node biopsy slides.",
    "core_mechanics": [
      "1. VGG 3×3 Filter Stacking Theorem: Stacking two 3×3 convolutions covers an effective receptive field of 5×5 (3 + (3-1) = 5), but uses 2 × (3²C²) = 18C² parameters instead of 1 × (5²C²) = 25C² parameters — a 28% parameter reduction with two separate non-linear activations instead of one!",
      "2. The Residual Learning Framework: Instead of forcing layers to fit an underlying mapping H(x), layers explicitly learn the residual difference F(x) = H(x) - x, so H(x) = F(x) + x.",
      "3. Identity Shortcut Gradient Highway: The backpropagation gradient is dH/dx = dF/dx + 1. Even if the convolutional gradient dF/dx vanishes to 0, the '+1' identity term ensures gradients propagate backwards completely unattenuated across 100+ layers!",
      "4. Zero Added Parameters: Identity skip connections perform simple element-wise addition (F(x) + x); they require zero additional weights or training parameters."
    ],
    "diagram_html": `
      <div class="visual-diagram-card animated-diagram">
        <div class="visual-diagram-title">⚡ ResNet Residual Block & Identity Gradient Highway</div>
        <div class="flow-container">
          <div class="flow-step"><strong>Input Activations x (Dimension C)</strong></div>
          <div class="flow-connector">↓ Splits into two parallel paths</div>
          <div class="flow-split-2">
            <div class="flow-box" style="border-color:var(--primary-blue);">
              <strong>Weight Layer 1 (Conv 3×3)</strong><br>
              <small>ReLU Activation</small><br>
              <strong>Weight Layer 2 (Conv 3×3)</strong><br>
              <small>Residual Residual F(x)</small>
            </div>
            <div class="flow-box" style="border-color:var(--emerald-green); background:var(--emerald-green-bg);">
              <strong style="color:var(--emerald-green-text);">⚡ Identity Shortcut Highway (x)</strong><br>
              <small>Bypasses layers with 0 weight parameters</small><br>
              <small>Guarantees gradient dH/dx = dF/dx + 1.0</small>
            </div>
          </div>
          <div class="flow-connector">↓ Element-wise Addition: H(x) = F(x) + x</div>
          <div class="flow-step output-step">
            <strong>Combined Output: ReLU(F(x) + x) ➔ Zero Degradation</strong>
          </div>
        </div>
      </div>
    `,
    "step_by_step_example": `📐 VGG 3×3 Parameter Savings Proof:
• Target: Receptive field of 5 × 5 on feature maps with C channels.
• Option A (Single 5 × 5 Conv Layer):
  Kernel size: 5 × 5 = 25.
  Weights = 25 × C_in × C_out = 25 C² weights.
• Option B (Two Stacked 3 × 3 Conv Layers):
  Layer 1: 3 × 3 × C × C = 9 C² weights.
  Layer 2: 3 × 3 × C × C = 9 C² weights.
  Total Weights = 9 C² + 9 C² = 18 C² weights.
• Parameter Savings:
  (25 C² - 18 C²) / 25 C² = 7 / 25 = 28% reduction in weights!
• Bonus: Two non-linear activation functions (ReLU after each 3×3) instead of only one, allowing more discriminative feature representations.`,
    "expected_exam_questions": [
      "Q1 (Mock Test 1): A very deep plain CNN exhibits higher training error after adding more convolutional layers. Which modification targets this optimization problem?\n-> Answer: Insert identity shortcut paths around groups of layers (ResNet residual learning).",
      "Q2: What is the gradient of a residual block with respect to its input x?\n-> Answer: dH/dx = dF/dx + 1, ensuring gradients flow backwards even if dF/dx is zero.",
      "Q3: How many 3×3 conv layers must be stacked to match the effective receptive field of one 7×7 conv layer?\n-> Answer: Three 3×3 layers (Receptive field = 1 + 3×(3-1) = 7), saving 44% parameters."
    ]
  },
  "st1_mod9": {
    "id": "st1_mod9",
    "num": 9,
    "title": "Module 9: Image Preprocessing & Data Augmentation",
    "lectures": "Lecture 15",
    "why_study": "Computer vision models are extremely sensitive to input distribution shifts, sensor artifacts, and camera orientations. Proper preprocessing standardizes pixel inputs to match the statistics of pre-trained weights, while data augmentation acts as an essential regularizer that prevents overfitting by synthetically expanding the training dataset.",
    "what_is_it": "Preparing raw image bytes for neural consumption:\n• Preprocessing (Deterministic): Resizing to 224×224, scaling byte integers [0, 255] to floats [0.0, 1.0], and standardizing channels: z = (x - μ) / σ.\n• Augmentation (Stochastic): Synthesizing novel training variations via random crops, rotations, color jitter, affine shears, and horizontal flips.\n\nCrucial Rule: Augmentations must be LABEL-PRESERVING. A transformation must never alter the ground-truth semantic class.",
    "real_world_use": "• 🚗 Autonomous Vehicle Vision: Adding artificial rain, snow, lens flare, and shadow augmentations to train robust perception models.\n• 🏥 Medical Imaging: Random affine rotations on tumor pathology scans (while avoiding horizontal flips on asymmetric anatomical organs).\n• 🏷️ Retail Product Recognition: Color jittering and perspective warping to recognize packaged goods under varied supermarket lighting.",
    "core_mechanics": [
      "1. Channel-Wise Normalization: Input tensors are normalized using source dataset statistics: ImageNet Mean = [0.485, 0.456, 0.406], Std = [0.229, 0.224, 0.225].",
      "2. Distribution Matching: When using pre-trained backbones (ResNet, ViT), target images MUST use the exact same normalization constants used during the model's pre-training.",
      "3. Domain-Specific Invariance Constraints: In natural photos, a cat flipped horizontally is still a cat (horizontal flip is valid). In handwritten digit recognition (MNIST), flipping a '6' creates a '9' (label corruption!). In medical chest X-rays, flipping left-to-right confuses heart orientation (dextrocardia) and destroys diagnostic validity.",
      "4. Regularization Effect: Augmentation injects controlled noise into training batches, preventing models from memorizing exact background pixel textures."
    ],
    "diagram_html": `
      <div class="visual-diagram-card animated-diagram">
        <div class="visual-diagram-title">⚡ Computer Vision Preprocessing & Augmentation Pipeline</div>
        <div class="flow-container">
          <div class="flow-step"><strong>Raw Image File (JPEG/PNG, [0, 255], Arbitrary Size)</strong></div>
          <div class="flow-connector">↓ Resize to (224 × 224) & Random Augmentation (Training only)</div>
          <div class="flow-split-2">
            <div class="flow-box"><strong>Training Pipeline (Stochastic)</strong><br><small>Random Crop + Rotation + Jitter</small></div>
            <div class="flow-box"><strong>Validation Pipeline (Deterministic)</strong><br><small>Center Crop 224×224 (No noise)</small></div>
          </div>
          <div class="flow-connector">↓ Convert to Tensor [0.0, 1.0] and Normalize: (x - μ) / σ</div>
          <div class="flow-step output-step">
            <strong>Standardized PyTorch Tensor (Batch × 3 × 224 × 224)</strong>
          </div>
        </div>
      </div>
    `,
    "step_by_step_example": `📐 ImageNet Channel Standardization Walkthrough:
• Given: A raw pixel in the Red channel has integer intensity value = 200 (in range [0, 255]).
• Pre-trained Backbone: ImageNet ResNet-50 (Red channel Mean μ_R = 0.485, Std σ_R = 0.229).
• Step 1 (Float Scaling to [0.0, 1.0]):
  x_float = 200 / 255 = 0.7843.
• Step 2 (Channel Standardization):
  z_R = (x_float - μ_R) / σ_R = (0.7843 - 0.485) / 0.229 = 0.2993 / 0.229 = +1.307.
• Result: The pixel value +1.307 is centered near zero with unit variance, perfectly matching the distribution of activations expected by the pre-trained conv layers!`,
    "expected_exam_questions": [
      "Q1 (Mock Test 1): When fine-tuning a pre-trained backbone on a new image dataset, which preprocessing choice is most appropriate?\n-> Answer: Apply the same channel normalization statistics expected by the backbone during its pre-training.",
      "Q2 (Mock Test 1): In a medical image dataset where horizontal flips exchange left/right clinical findings, which augmentation policy is defensible?\n-> Answer: Use modest random rotations and scaling, but avoid horizontal flips.",
      "Q3: What fundamental property must all data augmentation transformations satisfy?\n-> Answer: They must be label-preserving (must not alter the ground-truth semantic class)."
    ]
  },
  "st1_mod10": {
    "id": "st1_mod10",
    "num": 10,
    "title": "Module 10: Object Detection & Image Segmentation",
    "lectures": "Lectures 16–17",
    "why_study": "Standard image classification only answers 'What is in this picture?'. Real-world robotics, self-driving cars, and healthcare require spatial intelligence: 'Where are the objects, and which exact pixels belong to which individual entity?'. This module formalizes the computer vision task hierarchy from bounding box detection to pixel-level instance segmentation.",
    "what_is_it": "The 3 Spatial Computer Vision Tasks:\n1. 🔲 Object Detection: Predicts rectangular bounding boxes [x, y, w, h] + class labels for every object instance (YOLO, Faster R-CNN).\n2. 🎨 Semantic Segmentation: Labels every single pixel in the image with a category class (e.g. all road pixels are grey, all pedestrian pixels are red). It does NOT distinguish between individual instances.\n3. ✂️ Instance Segmentation: Combines object detection and segmentation to delineate a separate, distinct pixel mask for every individual object of the same class (Mask R-CNN).",
    "real_world_use": "• 🚗 Self-Driving Cars: Distinguishing 'Pedestrian #1' from 'Pedestrian #2' so collision avoidance systems track their distinct velocity trajectories.\n• 🤖 Robotic Bin Picking: Precise instance mask boundaries enabling robotic grippers to grasp individual overlapping metal parts.\n• 🔬 Oncology: Delineating micro-margins of malignant tumor boundaries for robotic laser surgery.",
    "core_mechanics": [
      "1. Bounding Box Formats: Pascal VOC format [x_min, y_min, x_max, y_max] vs COCO / YOLO format [x_center, y_center, width, height].",
      "2. Intersection over Union (IoU): Metric measuring bounding box overlap: IoU = Area of Overlap / Area of Union = |A ∩ B| / |A ∪ B|.",
      "3. Non-Maximum Suppression (NMS): Post-processing algorithm that eliminates redundant duplicate bounding box predictions by sorting scores and discarding boxes with IoU > threshold (e.g. 0.5).",
      "4. Two-Stage Detectors (R-CNN, Fast R-CNN, Faster R-CNN): Stage 1 generates candidate region proposals via a Region Proposal Network (RPN); Stage 2 classifies and refines proposal boundaries (high accuracy, slower inference ~5-10 FPS).",
      "5. Single-Stage Detectors (YOLO, SSD): Reframes object detection as a single unified regression problem, predicting bounding boxes and class probabilities directly from full images in one forward pass (real-time speed 45-150+ FPS).",
      "6. Semantic vs Instance Differentiation: If two cats sit side-by-side: Semantic segmentation assigns all their pixels the single label 'Cat' (one connected blob). Instance segmentation assigns 'Cat #1' and 'Cat #2' with distinct masks."
    ],
    "diagram_html": `
      <div class="visual-diagram-card animated-diagram">
        <div class="visual-diagram-title">⚡ Computer Vision Task Hierarchy</div>
        <div class="flow-container">
          <div class="flow-split-3">
            <div class="flow-box">
              <strong>1. Image Classification</strong><br>
              <small>Global Label: "Dog"</small><br>
              <small>No spatial location</small>
            </div>
            <div class="flow-box">
              <strong>2. Object Detection</strong><br>
              <small>Bounding Boxes: [x,y,w,h]</small><br>
              <small>Localizes "Dog #1", "Dog #2"</small>
            </div>
            <div class="flow-box">
              <strong>3. Instance Segmentation</strong><br>
              <small>Pixel-Level Masks</small><br>
              <small>Precise contour per animal</small>
            </div>
          </div>
        </div>
      </div>
    `,
    "step_by_step_example": `📐 Intersection over Union (IoU) Calculation Walkthrough:
• Given:
  Predicted Box A: Area = 100 pixels².
  Ground-truth Box B: Area = 100 pixels².
  Intersection Area (Overlap) = 50 pixels².
• Step 1 (Compute Union Area):
  Area of Union = Area(A) + Area(B) - Intersection Area
                = 100 + 100 - 50 = 150 pixels².
• Step 2 (Compute IoU Ratio):
  IoU = Intersection / Union = 50 / 150 = 1/3 ≈ 0.333 (33.3%).
• Evaluation Check: Since IoU = 0.333 is less than the standard 0.50 threshold, this prediction is classified as a False Positive!`,
    "expected_exam_questions": [
      "Q1 (Mock Test 1): An application requires the class label and rectangular bounding box of every object without pixel masks. Which task matches?\n-> Answer: Object detection.",
      "Q2 (Mock Test 1): Two neighbouring objects share the same category class, but must be distinguished as separate physical individuals with pixel boundaries. Which output is required?\n-> Answer: Separate instance segmentation masks for the individual objects.",
      "Q3: What does an IoU of 1.0 indicate?\n-> Answer: Perfect spatial overlap between predicted bounding box and ground truth."
    ]
  },
  "st1_mod11": {
    "id": "st1_mod11",
    "num": 11,
    "title": "Module 11: Transfer Learning with Pre-trained Models",
    "lectures": "Lectures 18–19",
    "why_study": "Training a deep vision network (like ResNet-50) from scratch requires weeks of compute on clusters of GPUs and millions of labeled images. Transfer learning allows developers to leverage feature representations pre-trained on ImageNet and adapt them to new custom tasks in minutes with superior accuracy.",
    "what_is_it": "Reusing representations learned on large source datasets for downstream target tasks:\n• Feature Extraction: Keep the entire pre-trained backbone 100% frozen (`param.requires_grad = False`). Train ONLY a newly replaced final classification head.\n• Fine-Tuning: Unfreeze selected upper convolutional blocks of the backbone and train them alongside the new head using a much smaller learning rate (e.g. 10x to 100x smaller).\n\nKey Trade-Off: Unfreezing the entire backbone on small target datasets causes catastrophic forgetting and rapid overfitting. Unfreezing only upper blocks provides the optimal balance.",
    "real_world_use": "• 🌿 Agricultural Pest Detection: Fine-tuning an ImageNet ResNet-50 on 500 crop leaf photos to identify tomato blight.\n• 🏭 Factory Defect Inspection: Classifying micro-fractures in metal joints with only 200 labeled defective samples.\n• 🔬 Rare Disease Biomarkers: Adapting vision transformers to recognize cellular mutations from small clinical trials.",
    "core_mechanics": [
      "1. Hierarchical Feature Representation: Early backbone layers capture universal low-level primitives (edges, gradients, color textures) that apply to all vision tasks. Late backbone layers capture high-level semantic abstractions.",
      "2. Classifier Head Replacement: Replace the original 1,000-class ImageNet fully connected layer (`nn.Linear(2048, 1000)`) with a new task-specific linear layer (`nn.Linear(2048, num_classes)`).",
      "3. Learning Rate Differential: When fine-tuning unfrozen backbone blocks, use a learning rate 10x to 100x smaller than the new head (e.g. η_backbone = 1e-5, η_head = 1e-3) to avoid destroying pre-trained weights.",
      "4. Overfitting vs Underfitting Balance: On small datasets, a frozen backbone may underfit, but an entirely unfrozen backbone rapidly overfits. The optimal sweet spot is unfreezing only the top 1–2 convolutional blocks."
    ],
    "diagram_html": `
      <div class="visual-diagram-card animated-diagram">
        <div class="visual-diagram-title">⚡ Transfer Learning Fine-Tuning Strategy</div>
        <div class="flow-container">
          <div class="flow-step">
            <strong>Early Backbone Blocks (Layers 1–3)</strong><br>
            <small>🔒 100% Frozen (Preserves universal edge and texture filters)</small>
          </div>
          <div class="flow-connector">↓ Forward Activations Flow Untouched</div>
          <div class="flow-step" style="background:var(--primary-blue-bg); border-color:var(--primary-blue);">
            <strong>Upper Backbone Blocks (Layer 4)</strong><br>
            <small>🔓 Unfrozen (Trained with small learning rate η = 1e-5)</small>
          </div>
          <div class="flow-connector">↓ Adapts Domain Semantics</div>
          <div class="flow-step output-step">
            <strong>New Custom Classifier Head (e.g., 5 Classes)</strong><br>
            <small>✨ Fully Trainable (Trained with standard learning rate η = 1e-3)</small>
          </div>
        </div>
      </div>
    `,
    "step_by_step_example": `📐 PyTorch Transfer Learning Recipe Walkthrough:
• Step 1: Load pre-trained ResNet-50 weights:
  model = torchvision.models.resnet50(weights='IMAGENET1K_V2')
• Step 2: Freeze all backbone parameters:
  for param in model.parameters():
      param.requires_grad = False
• Step 3: Replace final classification head for 5 custom classes:
  model.fc = nn.Linear(model.fc.in_features, 5) # 2048 -> 5
• Step 4 (Stage 1 Warmup): Train ONLY model.fc for 5 epochs with η = 1e-3.
• Step 5 (Stage 2 Fine-Tuning): Unfreeze upper block (layer4):
  for param in model.layer4.parameters():
      param.requires_grad = True
• Step 6: Train with differential learning rates:
  optimizer = optim.Adam([
      {'params': model.layer4.parameters(), 'lr': 1e-5},
      {'params': model.fc.parameters(), 'lr': 1e-3}
  ])`,
    "expected_exam_questions": [
      "Q1 (Mock Test 1): Training a newly replaced classifier head has stabilized on a small target dataset. What is the most suitable next step?\n-> Answer: Unfreeze selected upper backbone layers and fine-tune with a smaller learning rate.",
      "Q2 (Mock Test 1): A pre-trained CNN underfits when frozen, but rapidly overfits when fully unfrozen. Which strategy provides the best balance?\n-> Answer: Unfreeze only upper backbone blocks, use a smaller learning rate, and retain suitable augmentation."
    ]
  },
  "st1_mod12": {
    "id": "st1_mod12",
    "num": 12,
    "title": "Module 12: Hands-on: Building Image Classifiers with PyTorch",
    "lectures": "Lectures 20–21",
    "why_study": "Translating theory into robust code requires mastering PyTorch's fundamental execution patterns. Understanding the exact 5-step canonical training loop, gradient buffer accumulation mechanics, loss calculation, and inference optimization modes is essential for bug-free deep learning development.",
    "what_is_it": "The end-to-end PyTorch framework workflow:\n• `nn.Module`: Subclass defining network layers in `__init__` and data flow in `forward(x)`.\n• `DataLoader`: Manages multi-threaded mini-batch generation, shuffling, and GPU memory pinning.\n• The Canonical 5-Step Loop: `optimizer.zero_grad()` ➔ `outputs = model(inputs)` ➔ `loss = criterion(outputs, labels)` ➔ `loss.backward()` ➔ `optimizer.step()`.\n• Inference Mode: `model.eval()` + `with torch.no_grad():` disabling Dropout and freezing BatchNorm stats.",
    "real_world_use": "• 🚀 Production Training Pipelines: Writing distributed PyTorch vision training scripts running on cloud GPU instances (AWS EC2, Google Cloud Vertex AI).\n• ⚡ Real-Time Edge Deployment: Converting trained PyTorch `nn.Module` objects to TorchScript / ONNX for low-latency smartphone inference.\n• 🏎️ Inference Optimization: Using `torch.no_grad()` to cut inference GPU VRAM consumption in half by disabling the autograd computation graph.",
    "core_mechanics": [
      "1. Gradient Buffer Accumulation: PyTorch accumulates gradients by default (param.grad += grad). This allows developers to simulate large batch sizes over multiple backward passes. Consequently, optimizer.zero_grad() MUST be explicitly called before loss.backward() in every training iteration to prevent past gradients from corrupting the current step.",
      "2. CrossEntropyLoss Input Format: PyTorch's nn.CrossEntropyLoss expects raw, unnormalized logits directly from the model. It automatically applies LogSoftmax and NLLLoss in a single numerically stable fused CUDA kernel.",
      "3. Model Modes (Train vs Eval): model.train() enables Dropout and dynamic BatchNorm statistics. model.eval() disables Dropout and locks BatchNorm to running dataset averages.",
      "4. Memory Optimization via torch.no_grad(): Disables autograd tracking during validation, reducing inference GPU VRAM usage by over 50% and accelerating speed."
    ],
    "diagram_html": `
      <div class="visual-diagram-card animated-diagram">
        <div class="visual-diagram-title">⚡ PyTorch Canonical 5-Step Training Loop</div>
        <div class="flow-container">
          <div class="flow-step" style="border-color:#ef4444;">
            <strong>Step 1: optimizer.zero_grad()</strong><br>
            <small>Erases previous batch gradients in .grad buffers</small>
          </div>
          <div class="flow-connector">↓ Forward Evaluation</div>
          <div class="flow-step">
            <strong>Step 2: outputs = model(inputs)</strong><br>
            <small>Executes forward pass and builds autograd graph</small>
          </div>
          <div class="flow-connector">↓ Loss Metric</div>
          <div class="flow-step">
            <strong>Step 3: loss = criterion(outputs, labels)</strong><br>
            <small>Computes scalar divergence metric</small>
          </div>
          <div class="flow-connector">↓ Reverse Graph Traversal</div>
          <div class="flow-step" style="border-color:var(--primary-blue);">
            <strong>Step 4: loss.backward()</strong><br>
            <small>Calculates ∂Loss/∂Weight and stores in .grad tensors</small>
          </div>
          <div class="flow-connector">↓ Parameter Optimization</div>
          <div class="flow-step output-step">
            <strong>Step 5: optimizer.step()</strong><br>
            <small>Applies optimizer update rule: W ← W - η · W.grad</small>
          </div>
        </div>
      </div>
    `,
    "step_by_step_example": `📐 PyTorch Canonical Training Loop Code Walkthrough:
• Step-by-Step Code Structure:
  for epoch in range(num_epochs):
      model.train() # Enable training layers (Dropout, BatchNorm)
      for inputs, labels in dataloader:
          # Step 1: Clear old gradients
          optimizer.zero_grad()
          
          # Step 2: Forward pass
          outputs = model(inputs)
          
          # Step 3: Compute scalar loss
          loss = criterion(outputs, labels)
          
          # Step 4: Backpropagation (computes gradients)
          loss.backward()
          
          # Step 5: Update weights using optimizer rule (SGD / Adam)
          optimizer.step()
• Inference Mode Pattern:
  model.eval() # Disable Dropout and freeze BatchNorm
  with torch.no_grad(): # Disable autograd graph to save 50%+ GPU memory
      for inputs, labels in val_loader:
          preds = model(inputs).argmax(dim=1)`,
    "expected_exam_questions": [
      "Q1 (Mock Test 1): In a standard PyTorch CNN training loop, why is optimizer.zero_grad() explicitly called before loss.backward()?\n-> Answer: PyTorch accumulates gradients in parameter .grad buffers by default; zeroing prevents past batch gradients from compounding.",
      "Q2 (Mock Test 1): What input format does PyTorch nn.CrossEntropyLoss expect from the model?\n-> Answer: Raw, unnormalized model logits (Softmax must NOT be called manually).",
      "Q3 (Mock Test 1): Which combination is standard practice for evaluating a PyTorch model on validation data?\n-> Answer: model.eval() combined with with torch.no_grad()."
    ]
  },
  "st1_mod13": {
    "id": "st1_mod13",
    "num": 13,
    "title": "Module 13: Limitations of RNNs/CNNs with Attention Mechanism",
    "lectures": "Lectures 22–23",
    "why_study": "Before the 2017 Transformer revolution, sequence modeling relied on Recurrent Neural Networks (RNNs, LSTMs, GRUs). While RNNs handled sequential data, their sequential nature created a massive computational bottleneck that prevented GPU parallelization and suffered from vanishing gradients over long sequences. Understanding these limitations explains why Attention became the dominant AI paradigm.",
    "what_is_it": "The historical transition from sequential recurrence to parallel attention:\n• The RNN Sequential Bottleneck: Processing token t strictly requires the hidden state h_{t-1} of the previous token, forcing O(N) sequential steps that cannot be parallelized on GPUs.\n• Long-Range Gradient Decay: Gradients backpropagating through time (BPTT) across 100+ recurrence steps vanish or explode exponentially.\n• LSTM Additive Cell State: Mitigated vanishing gradients via gating (forget, input, output gates), but still suffered from the O(N) sequential time bottleneck.",
    "real_world_use": "• 🌐 Historical Machine Translation: Early Google Translate and sequence-to-sequence encoder-decoder models (Sutskever et al., 2014).\n• 📈 Real-Time Sensor Processing: Ultra-low-power microcontrollers still use small GRUs for audio keyword spotting where latency is strictly 1 token per tick.\n• 🧬 Genome Sequencing: Explains why modern bioinformatics moved from LSTMs to Attention models (Hyena, Transformers) for million-base-pair DNA sequences.",
    "core_mechanics": [
      "1. Sequential Time Complexity O(N): Because hidden state h_t = f(h_{t-1}, x_t), GPUs must wait for token 1 to complete before starting token 2. Training cannot be parallelized across the sequence.",
      "2. Maximum Path Length: In an RNN, connecting word 1 to word N requires traversing N sequential steps. In Self-Attention, any word connects to any other word in a single O(1) step.",
      "3. LSTM Gating Highway: LSTMs introduced an additive cell state c_t = f_t ⊙ c_{t-1} + i_t ⊙ c̃_t. The additive update allows gradients to flow backwards through time without multiplying by weight matrices at every step.",
      "4. Receptive Field in CNNs: Dilated convolutions can model sequences, but require stacking O(log N) layers to achieve a global receptive field."
    ],
    "diagram_html": `
      <div class="visual-diagram-card animated-diagram">
        <div class="visual-diagram-title">⚡ RNN Sequential Bottleneck vs Self-Attention Parallelism</div>
        <div class="flow-container">
          <div class="flow-step" style="border-color:#ef4444; background:rgba(239, 68, 68, 0.08);">
            <strong style="color:#ef4444;">RNN / LSTM: Sequential O(N) Chain (No GPU Parallelism)</strong><br>
            <small>Token 1 ➔ Token 2 ➔ Token 3 ➔ ... ➔ Token N (Slow sequential dependency!)</small>
          </div>
          <div class="flow-connector">↓ Evolution to Attention (Vaswani et al., 2017)</div>
          <div class="flow-step output-step">
            <strong style="color:var(--emerald-green-text);">Self-Attention: Parallel O(1) Matrix Operations</strong><br>
            <small>All N tokens attend to all N tokens simultaneously in a single parallel GPU forward pass!</small>
          </div>
        </div>
      </div>
    `,
    "step_by_step_example": `📐 Computational Path Length Comparison:
• Task: Connect token at position 1 with token at position 1,000.
• RNN / LSTM:
  Must step through 1,000 sequential recurrent steps.
  Gradient dL/dh₁ = (dL/dh₁₀₀₀) · ∏_{t=2}^{1000} (dh_t / dh_{t-1}).
  Multiplying 1,000 Jacobian matrices leads to exponential decay (vanishing gradient).
• Self-Attention:
  Computes direct pairwise dot product Q₁ · K₁₀₀₀ᵀ.
  Path length = O(1) single matrix multiplication step!
  Information routes immediately with zero attenuation.`,
    "expected_exam_questions": [
      "Q1 (Mock Test 1): Which architectural limitation of standard RNNs made them difficult to scale on modern GPUs for long sequences?\n-> Answer: Sequential dependency across time steps prevents parallelization during training.",
      "Q2 (Mock Test 1): How does an LSTM mitigate vanishing gradients across long time spans compared to basic RNNs?\n-> Answer: The additive cell state gradient highway allows gradients to flow backwards through time with minimal attenuation.",
      "Q3: What is the maximum path length between any two tokens in a Self-Attention layer?\n-> Answer: O(1) (a single operation step)."
    ]
  },
  "st1_mod14": {
    "id": "st1_mod14",
    "num": 14,
    "title": "Module 14: Self-Attention & Scaled Dot-Product Attention",
    "lectures": "Lectures 24–25",
    "why_study": "Scaled Dot-Product Attention is the foundational mathematical core of the Transformer architecture (Vaswani et al., 2017). It replaces recurrent loops entirely, allowing every word in a sequence to dynamically attend to every other word in parallel. Understanding Query-Key-Value routing, 1/√d_k scaling stability, padding masks, and O(N²) complexity is mandatory for foundation models.",
    "what_is_it": "The mathematical attention equation:\nAttention(Q, K, V) = Softmax( (Q · Kᵀ) / √d_k ) · V\n\n🧠 The Library / YouTube Search Metaphor:\n• 🔍 Query (Q): What information the current word is searching for.\n• 🏷️ Key (K): What information each word advertises about itself.\n• 📹 Value (V): The actual informational content passed forward.\n• (Q · Kᵀ) / √d_k: The search engine computes dot-product relevance scores between your Query and all Keys, scaled by √d_k to prevent Softmax saturation.\n• Softmax: Converts scores into percentages summing to 100%.\n• · V: Computes a weighted blend of all Values based on relevance.",
    "real_world_use": "• 🤖 Large Language Models (LLMs): Powering context integration in GPT-4, Gemini, Claude, and LLaMA.\n• 👁️ Vision Transformers (ViT): Computing self-attention across 16×16 visual image patches.\n• 🔗 Pronoun Resolution: Automatically routing 70%+ attention weight from 'it' to 'animal' in ambiguous sentences.",
    "core_mechanics": [
      "1. Linear Projections: Input tokens X are projected into Queries Q = X W_Q, Keys K = X W_K, and Values V = X W_V.",
      "2. Scaling Factor 1/√d_k: For independent zero-mean unit-variance components, the dot product has variance d_k. Dividing by √d_k normalizes variance back to 1.0, keeping Softmax out of flat saturated regions with vanishing gradients.",
      "3. Softmax Normalization: Converts raw scaled scores into non-negative weights (0.0 to 1.0) where each row sums to 1.0 (100%).",
      "4. Value Aggregation: Multiplies attention weights by Value matrix V to produce context-enriched output vectors.",
      "5. Padding Mask: Adds -∞ to [PAD] key positions before Softmax: exp(-∞) = 0, ensuring dummy padding tokens receive exactly 0% attention.",
      "6. Quadratic Complexity O(N²): Computing pairwise attention across N tokens produces an N × N score matrix. Doubling sequence length quadruples memory and FLOPs (4x)."
    ],
    "diagram_html": `
      <div class="visual-diagram-card animated-diagram">
        <div class="visual-diagram-title">⚡ Scaled Dot-Product Attention Pipeline</div>
        <div class="flow-container">
          <div class="flow-step"><strong>Input Sentence Tokens X (Length = N, Dim = d_model)</strong></div>
          <div class="flow-connector">↓ Multiply W_Q, W_K, W_V</div>
          <div class="flow-split-3">
            <div class="flow-box"><strong>Query (Q)</strong><br><small>Searches for context</small></div>
            <div class="flow-box"><strong>Key (K)</strong><br><small>Advertises relevance</small></div>
            <div class="flow-box"><strong>Value (V)</strong><br><small>Semantic content</small></div>
          </div>
          <div class="flow-connector">↓ Compute Pairwise Similarity: (Q · Kᵀ) / √d_k + Mask</div>
          <div class="flow-step"><strong>Scaled Score Matrix (N × N, Variance = 1.0)</strong></div>
          <div class="flow-connector">↓ Softmax (Rows sum to 100%)</div>
          <div class="flow-step"><strong>Attention Probability Weights α (N × N)</strong></div>
          <div class="flow-connector">↓ Weighted Sum of Values: α · V</div>
          <div class="flow-step output-step"><strong>Context-Enriched Output Representation (N × d_v)</strong></div>
        </div>
      </div>
    `,
    "step_by_step_example": `📐 Softmax Logit Difference Numerical Walkthrough:
• Given: A query compares against two keys k₁ and k₂.
  Scaled logit for key 1: s₁ = 1.0.
  Scaled logit for key 2: s₂ = 1.707 (leads by Δs = 0.707).
  Given: e^{0.707} ≈ 2.03.
• Step 1 (Express in terms of logit difference):
  P(k₂) = e^{s₂} / (e^{s₁} + e^{s₂}) = e^{s₂ - s₁} / (1 + e^{s₂ - s₁})
• Step 2 (Substitute Δs = 0.707):
  P(k₂) = 2.03 / (1 + 2.03) = 2.03 / 3.03 ≈ 0.670 (67.0%).
• Step 3 (Key 1 Probability):
  P(k₁) = 1 - 0.670 = 0.330 (33.0%).
• Result: Key 2 receives approximately 67% attention weight while Key 1 receives 33% (a 2:1 attention ratio).`,
    "expected_exam_questions": [
      "Q1 (Mock Test 1): In self-attention, if a query vector has a much larger dot-product with key j than all other keys, what happens after softmax?\n-> Answer: Token j's value vector receives the dominant contribution weight in the output.",
      "Q2 (Mock Test 1): An encoder processes padded sequences. Which masking choice prevents padded positions from influencing real tokens?\n-> Answer: Mask the key positions corresponding to padding tokens with large negative values (-∞).",
      "Q3 (Mock Test 1): For two keys differing by logit margin 0.707 (e^0.707 ≈ 2.03), what softmax weight is assigned to key 2?\n-> Answer: Approximately 0.67 (67%).",
      "Q4 (Mock Test 1): When sequence length increases from 128 to 256, by what factor does the attention score matrix size increase?\n-> Answer: 4x (Quadratic scaling: (256/128)² = 2² = 4)."
    ]
  }
};

if (typeof window !== "undefined") {
  window.ST1_MODULE_GUIDES = ST1_MODULE_GUIDES;
  window.MODULE_GUIDES = ST1_MODULE_GUIDES;
}
if (typeof globalThis !== "undefined") {
  globalThis.ST1_MODULE_GUIDES = ST1_MODULE_GUIDES;
  globalThis.MODULE_GUIDES = ST1_MODULE_GUIDES;
}

