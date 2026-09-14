// ST1_QUIZ_QUESTIONS: Sessional Test-1 Questions (Lectures 1–25)
// Total questions: 72 (32 Original + 40 Newly Integrated)
const ST1_QUIZ_QUESTIONS = [
  {
    "id": "st1_q1",
    "module_id": "st1_mod1",
    "module_name": "Module 1: Introduction to Neural Networks",
    "syllabus_lec": "Lectures 1–2",
    "topic": "Perceptron Weight Update Calculation",
    "difficulty": "Medium",
    "points": 1,
    "question": "A perceptron has weights [0.2, -0.1], receives x = [1, 2], predicts 0 for target 1, and uses learning rate 0.1. After one perceptron update, what are the new weights?",
    "options": [
      "[0.1, -0.3]",
      "[0.3, 0.1]",
      "[0.3, -0.2]",
      "[0.2, 0.1]"
    ],
    "correct": 1,
    "explanation": "The perceptron learning update rule is: w_new = w_old + η · (target - prediction) · x. Here, target = 1, prediction = 0, so error = (1 - 0) = 1. Learning rate η = 0.1, and x = [1, 2]. Therefore, Δw = 0.1 × 1 × [1, 2] = [0.1, 0.2]. Adding to w_old = [0.2, -0.1] gives w_new = [0.2 + 0.1, -0.1 + 0.2] = [0.3, 0.1].",
    "theory": {
      "title": "The Perceptron Learning Rule & Decision Hyperplane Shifts",
      "what_is_it": "The Rosenblatt Perceptron is the fundamental building block of artificial neural networks. It computes an affine combination of inputs z = w · x + b and passes it through a step function (Heaviside step) to classify inputs into binary categories (+1 or 0).\n\n💡 Beginner Intuition:\nImagine adjusting the tilt and height of a flat sheet of plywood (decision boundary) separating red apples from green apples on a table. Every time the perceptron misclassifies a fruit, it tilts the plywood slightly towards the misclassified sample.",
      "why_we_need_it": "The perceptron learning rule guarantees mathematical convergence (Novikoff's Perceptron Convergence Theorem) if the training data is linearly separable, providing the earliest proven algorithm for iterative machine learning.",
      "how_it_works": "• Step 1: Compute pre-activation sum z = ∑ w_i · x_i + b.\n• Step 2: Compute threshold prediction ŷ = 1 if z ≥ 0 else 0.\n• Step 3: Compute classification error: e = (y_target - ŷ).\n• Step 4: If error ≠ 0, update weight vector: w_new = w_old + η · e · x.",
      "formula": "w^(t+1) = w^(t) + η · (y_target - ŷ) · x",
      "key_takeaways": [
        "If the prediction matches the target (error = 0), weights do not change (Δw = 0).",
        "If prediction is 0 but target is 1 (false negative), the weight vector shifts in the direction of x.",
        "If prediction is 1 but target is 0 (false positive), the weight vector shifts in the opposite direction of x.",
        "Perceptron convergence only holds when classes are strictly linearly separable by a hyperplane."
      ]
    },
    "sample_questions": [
      {
        "q": "If a perceptron with learning rate 0.2 receives x = [2, -1], predicts 1 for target 0, what is the weight change Δw?",
        "options": [
          "[-0.4, 0.2]",
          "[0.4, -0.2]",
          "[0.2, -0.1]",
          "[0.0, 0.0]"
        ],
        "ans": "[-0.4, 0.2]",
        "exp": "Δw = η · (target - prediction) · x = 0.2 × (0 - 1) × [2, -1] = -0.2 × [2, -1] = [-0.4, 0.2]."
      },
      {
        "q": "Under what condition will the classical perceptron learning rule stop making updates?",
        "options": [
          "When all training instances are correctly classified (zero training error)",
          "When learning rate reaches 1.0",
          "When hidden layer activations saturate",
          "When cross-entropy loss reaches zero"
        ],
        "ans": "When all training instances are correctly classified (zero training error)",
        "exp": "When all predictions match their targets, (y - y_hat) = 0 for every sample, halting further weight updates."
      }
    ]
  },
  {
    "id": "st1_q2",
    "module_id": "st1_mod2",
    "module_name": "Module 2: Limitations of the Perceptron & MLP Architecture",
    "syllabus_lec": "Lecture 3",
    "topic": "Limitations of Linear/Affine Activations in MLPs",
    "difficulty": "Medium",
    "points": 1,
    "question": "A multi-layer network contains several affine layers but no nonlinear activation between them. Which statement best explains its resulting decision capacity?",
    "options": [
      "It behaves like one affine transformation despite the added depth",
      "It gains nonlinear boundaries because each layer has separate weights",
      "It behaves like a kernel classifier once more than two layers are stacked",
      "It gains piecewise-linear boundaries because biases differ across layers"
    ],
    "correct": 0,
    "explanation": "The composition of linear (affine) transformations is mathematically equivalent to a single linear transformation: W_2 · (W_1 · x + b_1) + b_2 = (W_2 · W_1) · x + (W_2 · b_1 + b_2) = W_eff · x + b_eff. Stacking 100 purely linear layers without non-linear activations adds zero expressive power and cannot solve non-linear problems like XOR.",
    "theory": {
      "title": "Linear Collapse Theorem & Why Neural Networks Need Non-Linearity",
      "what_is_it": "An affine layer computes y = W · x + b. If we stack multiple affine layers together without inserting non-linear activation functions (like ReLU, Sigmoid, or GELU) between them, the entire network collapses into a single affine matrix multiplication.\n\n💡 Real-World Analogy:\nScaling a photo by 2x, then rotating it by 45°, and translating it 5cm is mathematically equivalent to a single combined transformation matrix. You can never create a curved spherical lens purely by stacking flat flat-sheet glass mirrors.",
      "why_we_need_it": "Real-world data (images, language, medical signals) is fundamentally non-linear. Non-linear activations allow MLPs to warp feature space and act as Universal Function Approximators (Cybenko's Theorem).",
      "how_it_works": "• Layer 1: h_1 = W_1 · x + b_1\n• Layer 2: h_2 = W_2 · h_1 + b_2 = W_2 · (W_1 · x + b_1) + b_2 = (W_2 W_1) x + (W_2 b_1 + b_2)\n• Let W* = W_2 W_1 and b* = W_2 b_1 + b_2 ==> h_2 = W* · x + b* (A single linear layer!).",
      "formula": "f(x) = W_L · ... · W₂ · W₁ · x + b_eff = W_combined · x + b_combined",
      "key_takeaways": [
        "Stacking linear layers without non-linear activations yields zero non-linear decision capacity.",
        "Non-linear activation functions are strictly required to solve non-linearly separable problems like XOR.",
        "With non-linear activations, an MLP with even a single hidden layer can approximate any continuous function (Universal Approximation Theorem)."
      ]
    },
    "sample_questions": [
      {
        "q": "Why couldn't a single-layer perceptron solve the XOR problem according to Minsky & Papert (1969)?",
        "options": [
          "XOR outputs are not linearly separable by any single straight line/hyperplane",
          "XOR truth table has too many rows",
          "Perceptrons cannot use binary inputs",
          "The learning rate cannot be adjusted"
        ],
        "ans": "XOR outputs are not linearly separable by any single straight line/hyperplane",
        "exp": "In the 2D plane, (0,0) and (1,1) produce 0, while (0,1) and (1,0) produce 1. No single straight line can separate these two classes."
      },
      {
        "q": "What is the primary role of non-linear activations between dense layers in an MLP?",
        "options": [
          "To prevent the collapse of deep layers into a single linear map and enable complex boundary formation",
          "To speed up GPU matrix multiplication",
          "To force all weights to remain positive",
          "To eliminate the need for bias terms"
        ],
        "ans": "To prevent the collapse of deep layers into a single linear map and enable complex boundary formation",
        "exp": "Non-linearities prevent linear collapse and allow neural networks to bend decision boundaries to fit complex non-linear manifolds."
      }
    ]
  },
  {
    "id": "st1_q3",
    "module_id": "st1_mod3",
    "module_name": "Module 3: MLP Forward Pass & Network Representation",
    "syllabus_lec": "Lecture 4",
    "topic": "Weight Initialization (He-Style for ReLU)",
    "difficulty": "Medium",
    "points": 1,
    "question": "A deep MLP uses ReLU activations and its initial activations become excessively large as depth increases. Which initialization is most directly intended to control variance for ReLU layers?",
    "options": [
      "Large constant initialization",
      "He-style variance-scaled initialization",
      "All-zero weight initialization",
      "Uniform initialization with identical weights"
    ],
    "correct": 1,
    "explanation": "He (Kaiming) initialization scales the weight variance specifically for ReLU activations by setting Var(W) = 2 / n_in (standard deviation σ = √(2 / n_in)). Because ReLU zeroes out approximately half the incoming activations (where x < 0), the factor of 2 compensates for this halving of variance, preventing activations from exploding or vanishing across deep layers.",
    "theory": {
      "title": "Weight Initialization: Xavier vs. He (Kaiming) Initialization",
      "what_is_it": "Weight initialization determines the initial numerical values assigned to network weights before training begins.\n\n• Xavier (Glorot) Initialization: Designed for symmetric, zero-centered activations (Tanh/Sigmoid). Sets Var(W) = 1 / n_in (or 2 / (n_in + n_out)).\n• He (Kaiming) Initialization: Designed for ReLU and Leaky ReLU activations. Sets Var(W) = 2 / n_in.",
      "why_we_need_it": "If initial weights are too large, activations explode exponentially with depth (overflow / NaN gradients). If initial weights are too small, signals diminish to 0, leaving hidden units inactive (vanishing signal). Proper variance scaling keeps activation variance constant across 100+ layers.",
      "how_it_works": "Because ReLU(z) = max(0, z), roughly 50% of neurons output 0. Thus, E[ReLU(z)²] = (1/2) · Var(z). To keep Var(y) = Var(x), we scale weight variance by 2: Var(W) = 2 / n_in.",
      "formula": "He Initialization: W ~ N(0, σ² = 2 / n_in)   or   Uniform( -√(6 / n_in), +√(6 / n_in) )",
      "key_takeaways": [
        "He (Kaiming) initialization is optimal for ReLU, Leaky ReLU, and GELU.",
        "Xavier (Glorot) initialization is optimal for Tanh and Sigmoid activations.",
        "All-zero weight initialization causes symmetry breaking failure: all hidden units compute identical gradients and remain identical forever."
      ]
    },
    "sample_questions": [
      {
        "q": "What catastrophic failure occurs if all weights in a hidden layer are initialized to exactly zero?",
        "options": [
          "Symmetry is preserved: all neurons in the layer compute identical features and receive identical gradients",
          "Gradients immediately explode to infinity",
          "The learning rate dynamically doubles every epoch",
          "ReLU activations convert to Sigmoid functions"
        ],
        "ans": "Symmetry is preserved: all neurons in the layer compute identical features and receive identical gradients",
        "exp": "When weights are initialized identically to zero, every neuron computes the same output and receives the same gradient, preventing them from learning distinct features (symmetry breaking failure)."
      },
      {
        "q": "For a layer with 50 input neurons using ReLU, what is the standard deviation σ for He normal initialization?",
        "options": [
          "√(2 / 50) = 0.2",
          "√(1 / 50) = 0.141",
          "50 / 2 = 25",
          "2 / 50 = 0.04"
        ],
        "ans": "√(2 / 50) = 0.2",
        "exp": "For He normal, σ = √(2 / n_in) = √(2 / 50) = √(0.04) = 0.2."
      }
    ]
  },
  {
    "id": "st1_q31",
    "module_id": "st1_mod3",
    "module_name": "Module 3: MLP Forward Pass & Network Representation",
    "syllabus_lec": "Lecture 4",
    "topic": "MLP Forward Pass Computation",
    "difficulty": "Medium",
    "points": 1,
    "question": "An MLP receives x1 = 1 and x2 = 2. Its hidden units are h1 = ReLU(2*x1 - x2 + 1) and h2 = ReLU(-x1 + x2 - 0.5). If the output is o = 1.5*h1 + 2*h2 - 0.5, what is o?",
    "options": [
      "1.5",
      "2.0",
      "2.5",
      "3.0"
    ],
    "correct": 1,
    "explanation": "Step 1: Calculate h1 = ReLU(2*(1) - 2 + 1) = ReLU(2 - 2 + 1) = ReLU(1) = 1.\nStep 2: Calculate h2 = ReLU(-1 + 2 - 0.5) = ReLU(0.5) = 0.5.\nStep 3: Calculate output o = 1.5*(1) + 2*(0.5) - 0.5 = 1.5 + 1.0 - 0.5 = 2.0.",
    "theory": {
      "title": "Step-by-Step Forward Pass Evaluation in Feed-Forward Networks",
      "what_is_it": "The forward pass evaluates input vectors through successive linear combinations and non-linear activations to yield the final network prediction.\n\n💡 Mental Model:\nA multi-tier assembly line where raw materials (input features) are weighted, summed with biases, passed through activation gates, and blended into finished predictions.",
      "why_we_need_it": "Forward pass computation produces the predicted output ŷ needed to evaluate the objective loss function L(y, ŷ) during training.",
      "how_it_works": "1. Hidden pre-activation: z^(1) = W^(1) · x + b^(1).\n2. Hidden activation: a^(1) = g(z^(1)).\n3. Output pre-activation: z^(2) = W^(2) · a^(1) + b^(2).\n4. Final output: ŷ = g_out(z^(2)).",
      "formula": "o = Σ_j w_j^(2) · ReLU( Σ_i w_ji^(1) · x_i + b_j^(1) ) + b^(2)",
      "key_takeaways": [
        "ReLU(z) evaluates to z if z > 0, and 0 if z ≤ 0.",
        "Biases shift the activation function threshold left or right.",
        "The forward pass must be completely executed and intermediate activations stored (cached) before backpropagation can calculate gradients."
      ]
    },
    "sample_questions": [
      {
        "q": "If hidden unit z = -3.4, what is the output of ReLU(z)?",
        "options": [
          "0",
          "-3.4",
          "3.4",
          "1.0"
        ],
        "ans": "0",
        "exp": "ReLU is defined as max(0, z). For any negative input, ReLU outputs 0."
      },
      {
        "q": "For inputs x1 = 3, x2 = -1 with weights w1 = 2, w2 = 4 and bias b = -1, what is the pre-activation z?",
        "options": [
          "1",
          "2",
          "-1",
          "9"
        ],
        "ans": "1",
        "exp": "z = (3 * 2) + (-1 * 4) + (-1) = 6 - 4 - 1 = 1."
      }
    ]
  },
  {
    "id": "st1_q33",
    "module_id": "st1_mod3",
    "module_name": "Module 3: MLP Forward Pass & Network Representation",
    "syllabus_lec": "Lecture 4",
    "topic": "Fully Connected Network Trainable Parameter Calculation",
    "difficulty": "Medium",
    "points": 1,
    "question": "A fully connected MLP has 10 input features, one hidden layer with 6 neurons, and 3 output neurons. Every neuron in the hidden and output layers has a bias. How many trainable parameters are present?",
    "options": [
      "81",
      "84",
      "87",
      "90"
    ],
    "correct": 2,
    "explanation": "Input-to-hidden layer: 10 inputs × 6 neurons = 60 weights, plus 6 biases for the hidden neurons = 66 parameters.\nHidden-to-output layer: 6 hidden inputs × 3 output neurons = 18 weights, plus 3 biases for the output neurons = 21 parameters.\nTotal trainable parameters = 66 + 21 = 87 parameters.",
    "theory": {
      "title": "Parameter Counting in Multi-Layer Perceptrons & Dense Projections",
      "what_is_it": "Trainable parameters represent the learned numerical degrees of freedom (scalar weights and additive bias offsets) updated via gradient descent during backpropagation.\n\n💡 Beginner Intuition:\nImagine an electrical switchboard where every incoming wire connects to every outgoing bulb. If you have 10 input wires and 6 light bulbs, there are 10 × 6 = 60 connection knobs (weights). Furthermore, each of the 6 bulbs has its own dedicated brightness trim slider (bias), bringing the total controls to 60 + 6 = 66 knobs.\n\n🚀 Real-World AI Use Case:\nExact parameter accounting determines the minimum GPU VRAM required for forward activations and optimizer states (e.g. Adam requires 8 bytes per parameter for first and second moments), preventing Out-Of-Memory (OOM) crashes in production clusters.",
      "why_we_need_it": "Parameter calculation is critical for analyzing model capacity (Vapnik-Chervonenkis dimension), balancing bias-variance trade-offs to prevent catastrophic overfitting on small training corpuses, and verifying tensor allocations across embedded edge accelerators.",
      "how_it_works": "• Step 1: Compute input-to-hidden connection matrix W_1 of shape (n_h1 × n_in), yielding (n_in × n_h1) weight scalars.\n• Step 2: Add 1 independent bias parameter for each neuron in hidden layer 1: b_1 has length n_h1.\n• Step 3: Compute hidden-to-output matrix W_2 of shape (n_out × n_h1) with n_out biases.\n• Step 4: Sum all layer parameters: Total = n_h1 · (n_in + 1) + n_out · (n_h1 + 1).",
      "formula": "\\text{Total Parameters} = \\sum_{l=1}^{L} \\left( n_{l-1} \\times n_l + n_l \\right) = \\sum_{l=1}^{L} n_l \\cdot (n_{l-1} + 1)",
      "key_takeaways": [
        "Every directed connection between two distinct layer neurons constitutes exactly 1 trainable weight parameter.",
        "Each receiving neuron in a hidden or classification layer contains exactly 1 learned additive bias parameter.",
        "Input layer nodes are passive data distribution channels containing 0 weights and 0 biases."
      ]
    },
    "sample_questions": [
      {
        "q": "How many trainable parameters are in a dense layer with 128 inputs and 64 outputs, including biases?",
        "options": [
          "8,256",
          "8,192",
          "8,320",
          "16,384"
        ],
        "ans": "8,256",
        "exp": "Parameters = (128 × 64) + 64 = 8192 + 64 = 8,256."
      },
      {
        "q": "If a layer has 20 inputs and 10 outputs without biases, how many parameters does it contain?",
        "options": [
          "200",
          "210",
          "220",
          "100"
        ],
        "ans": "200",
        "exp": "Without biases: 20 × 10 = 200 weights."
      }
    ]
  },
  {
    "id": "st1_q5",
    "module_id": "st1_mod4",
    "module_name": "Module 4: Backpropagation Algorithm & Gradient Descent",
    "syllabus_lec": "Lectures 5–6",
    "topic": "Mini-Batch Gradient Descent / Epoch Calculations",
    "difficulty": "Easy",
    "points": 1,
    "question": "A dataset has 1,000 training samples and mini-batch gradient descent uses a batch size of 100. Ignoring an incomplete final batch, how many parameter updates occur in one epoch?",
    "options": [
      "5",
      "10",
      "100",
      "1,000"
    ],
    "correct": 1,
    "explanation": "An epoch is one complete pass through the entire training dataset. The number of parameter updates (iterations or steps) per epoch is: Number of Samples / Batch Size = 1000 / 100 = 10 updates.",
    "theory": {
      "title": "Batch, Mini-Batch, and Stochastic Gradient Descent Dynamics",
      "what_is_it": "Gradient descent variants differ by how many samples are evaluated before computing gradients and updating model weights:\n• Batch GD: Uses entire dataset (1 update/epoch). Stable but memory-heavy and slow.\n• Stochastic GD (SGD): Uses 1 sample per update (N updates/epoch). Fast but highly noisy/jittery.\n• Mini-Batch GD: Uses small batches (e.g. 32, 64, 128). Best balance of GPU vectorization and smooth convergence.",
      "why_we_need_it": "Full batch cannot fit inside modern GPU memory for millions of samples. Mini-batching leverages SIMD tensor cores for maximum hardware throughput.",
      "how_it_works": "1. Dataset of size N is shuffled and sliced into batches of size B.\n2. Total iterations per epoch = ⌊N / B⌋.\n3. Model weights are updated after every single batch.",
      "formula": "Iterations per Epoch = ⌊ N / Batch Size ⌋",
      "key_takeaways": [
        "1 Epoch = 1 full pass through all N training samples.",
        "1 Iteration / Step = 1 forward + backward pass on a single batch followed by 1 weight update.",
        "Number of updates per epoch = N / Batch_Size."
      ]
    },
    "sample_questions": [
      {
        "q": "If training dataset has 50,000 images and batch size is 250, how many parameter updates occur per epoch?",
        "options": [
          "200",
          "500",
          "250",
          "2,000"
        ],
        "ans": "200",
        "exp": "Iterations = 50,000 / 250 = 200 updates per epoch."
      },
      {
        "q": "What is the primary computational advantage of Mini-Batch GD over pure Stochastic GD (batch size = 1)?",
        "options": [
          "Leverages GPU parallel matrix acceleration (tensor cores) for high throughput",
          "Guarantees finding the global minimum in non-convex losses",
          "Eliminates the need for a learning rate",
          "Reduces total training epochs to 1"
        ],
        "ans": "Leverages GPU parallel matrix acceleration (tensor cores) for high throughput",
        "exp": "Mini-batch operations are vectorized matrix multiplications, utilizing parallel GPU architectures far more efficiently than serial 1-sample operations."
      }
    ]
  },
  {
    "id": "st1_q7",
    "module_id": "st1_mod4",
    "module_name": "Module 4: Backpropagation Algorithm & Gradient Descent",
    "syllabus_lec": "Lectures 5–6",
    "topic": "Gradient Descent Learning Rate Tuning",
    "difficulty": "Medium",
    "points": 1,
    "question": "During full-batch gradient descent, training loss repeatedly crosses a narrow minimum and alternates between two nearby but higher values. Which adjustment most directly addresses this optimisation behaviour?",
    "options": [
      "Increase the learning rate to cross the valley faster",
      "Reduce the learning rate to make smaller updates near the minimum",
      "Replace the loss with softmax while keeping the same step size",
      "Increase the batch size beyond the complete training set"
    ],
    "correct": 1,
    "explanation": "When loss oscillates back and forth across a valley minimum without descending into it (overshooting), the step size (learning rate η) is too large. Reducing the learning rate decreases the step magnitude, allowing gradient descent to converge smoothly into the narrow minimum.",
    "theory": {
      "title": "Learning Rate Dynamics & Loss Surface Oscillation",
      "what_is_it": "The learning rate η dictates the step size taken along the negative gradient direction: w_new = w_old - η ∇L(w).\n\n💡 Physical Metaphor:\nA ball rolling down a steep V-shaped canyon. If velocity/step is too high, the ball overshoots the valley bottom and bounces back and forth against canyon walls instead of settling at the base.",
      "why_we_need_it": "Proper learning rate tuning ensures fast convergence without diverging or oscillating endlessly.",
      "how_it_works": "• Too Large η: Overshooting, loss oscillation, and numerical divergence (loss -> NaN).\n• Too Small η: Painfully slow progress, risk of getting trapped in local plateaus.\n• Optimal η: Steady exponential decay of loss.",
      "formula": "w^(t+1) = w^(t) - η · ∇_w L(w^(t))",
      "key_takeaways": [
        "Oscillation around a minimum indicates that the learning rate is too aggressive for the local curvature.",
        "Learning rate decay schedules or adaptive optimizers (Adam, RMSprop) dynamically reduce step size near minima.",
        "Gradient clipping prevents explosion, but reducing learning rate prevents overshooting."
      ]
    },
    "sample_questions": [
      {
        "q": "What typically happens to training loss when the learning rate is set excessively high in a deep neural network?",
        "options": [
          "Loss oscillates wildly and rapidly diverges to infinity/NaN",
          "Loss smoothly reaches zero in the first epoch",
          "Gradients immediately vanish to exact zero",
          "The model automatically converts to batch gradient descent"
        ],
        "ans": "Loss oscillates wildly and rapidly diverges to infinity/NaN",
        "exp": "An excessive learning rate causes gradient descent to take huge steps that overshoot valleys, leading to exponential divergence."
      },
      {
        "q": "What technique dynamically scales learning rate based on running estimates of first and second gradient moments?",
        "options": [
          "Adam optimizer",
          "Perceptron step rule",
          "Max pooling",
          "Xavier initialization"
        ],
        "ans": "Adam optimizer",
        "exp": "Adam (Adaptive Moment Estimation) computes individual adaptive learning rates for each parameter using exponentially decaying averages of past gradients and squared gradients."
      }
    ]
  },
  {
    "id": "st1_q32",
    "module_id": "st1_mod4",
    "module_name": "Module 4: Backpropagation Algorithm & Gradient Descent",
    "syllabus_lec": "Lectures 5–6",
    "topic": "Single-Neuron Gradient Descent Step",
    "difficulty": "Medium",
    "points": 1,
    "question": "A linear neuron uses z = w*x with w = 0.5 and x = 4. For target y = 1 and loss L = 0.5*(z - y)^2, one gradient-descent step uses learning rate 0.1. What is the updated weight?",
    "options": [
      "0.1",
      "0.3",
      "0.4",
      "0.9"
    ],
    "correct": 0,
    "explanation": "Step 1: Compute output z = w * x = 0.5 * 4 = 2.0.\nStep 2: Error term = (z - y) = (2.0 - 1.0) = 1.0.\nStep 3: Loss derivative with respect to w: dL/dw = (z - y) * dz/dw = (z - y) * x = 1.0 * 4 = 4.0.\nStep 4: Gradient descent update: w_new = w_old - η * (dL/dw) = 0.5 - (0.1 * 4.0) = 0.5 - 0.4 = 0.1.",
    "theory": {
      "title": "Analytical Derivation of Single-Neuron Gradient Descent Update",
      "what_is_it": "Analytical parameter optimization applies the chain rule of differential calculus to determine how an infinitesimal perturbation in a weight scalar reduces the scalar Mean Squared Error (MSE) loss.\n\n💡 Beginner Intuition:\nImagine standing on the slope of a bowl in dense fog. The gradient tells you the direction of steepest upward climb. To reach the minimum (bottom of the bowl), you take a calibrated step in the exact opposite direction scaled by the learning rate η.\n\n🚀 Real-World AI Use Case:\nForms the exact atomic derivative operation executed billions of times per second inside CUDA autograd engines (PyTorch backward graph) during model pre-training.",
      "why_we_need_it": "Understanding single-neuron analytical derivatives grounds backpropagation from an abstract matrix algorithm into deterministic calculus, proving why learning rate scaling and feature magnitude normalization (e.g. LayerNorm, BatchNorm) prevent exploding or vanishing gradient updates.",
      "how_it_works": "• Step 1 (Forward Pass): Compute linear activation z = w · x = 0.5 × 4 = 2.0.\n• Step 2 (Loss Computation): Evaluate half-squared error L = 0.5 · (z - y)² = 0.5 · (2.0 - 1.0)² = 0.5.\n• Step 3 (Inner Error Gradient): Differentiate loss with respect to activation: ∂L/∂z = (z - y) = 1.0.\n• Step 4 (Local Sensitivity): Differentiate activation with respect to weight: ∂z/∂w = x = 4.0.\n• Step 5 (Chain Rule Gradient): Compute total gradient ∂L/∂w = (∂L/∂z) · (∂z/∂w) = 1.0 × 4.0 = 4.0.\n• Step 6 (Descent Step): Update weight w_new = w - η · (∂L/∂w) = 0.5 - 0.1 × 4.0 = 0.1.",
      "formula": "w^{(t+1)} = w^{(t)} - \\eta \\cdot \\frac{\\partial \\mathcal{L}}{\\partial w} = w^{(t)} - \\eta \\cdot (z - y) \\cdot x",
      "key_takeaways": [
        "The weight gradient is directly proportional to both prediction residual (z - y) and input signal strength x.",
        "Unnormalized high-magnitude inputs inflate gradients, necessitating batch normalization and standard scaling.",
        "The 1/2 factor in L = 1/2(z - y)² cleanly cancels during differentiation via the power rule, leaving clean linear residuals."
      ]
    },
    "sample_questions": [
      {
        "q": "For z = 3, y = 1, x = 2, what is dL/dw when L = 0.5 * (z - y)^2?",
        "options": [
          "4.0",
          "2.0",
          "6.0",
          "1.0"
        ],
        "ans": "4.0",
        "exp": "dL/dw = (z - y) * x = (3 - 1) * 2 = 2 * 2 = 4.0."
      },
      {
        "q": "If prediction z exactly equals target y, what is the gradient dL/dw?",
        "options": [
          "0",
          "w",
          "x",
          "η"
        ],
        "ans": "0",
        "exp": "When z = y, error (z - y) = 0, so dL/dw = 0 * x = 0."
      }
    ]
  },
  {
    "id": "st1_q4",
    "module_id": "st1_mod5",
    "module_name": "Module 5: Activation Functions & Loss Functions",
    "syllabus_lec": "Lecture 7",
    "topic": "Vanishing Gradient / Sigmoid Saturation",
    "difficulty": "Medium",
    "points": 1,
    "question": "In a deep network using sigmoid units, many hidden neurons operate at very large positive or negative pre-activations and early layers learn extremely slowly. Which mechanism best accounts for this behaviour?",
    "options": [
      "Softmax competition increases early-layer gradients",
      "Sigmoid saturation produces very small local derivatives",
      "Mini-batch averaging reverses the sign of most gradients",
      "Cross-entropy forces hidden activations towards exact zero"
    ],
    "correct": 1,
    "explanation": "The derivative of the sigmoid function σ'(z) = σ(z)(1 - σ(z)) has a maximum value of only 0.25 at z = 0. When |z| is large (saturated positive or negative regions), σ'(z) approaches 0. When backpropagating through multiple deep layers, multiplying these tiny local derivatives (e.g. 0.1 × 0.1 × 0.05...) causes gradients in early layers to vanish to near zero.",
    "theory": {
      "title": "The Vanishing Gradient Problem & Activation Function Saturation",
      "what_is_it": "Sigmoid maps any real number to (0, 1): σ(z) = 1 / (1 + e^(-z)). Its derivative is σ'(z) = σ(z) · (1 - σ(z)).\n\nWhen z >> 0 (e.g. z = +10), σ(z) ≈ 1.0 and σ'(z) ≈ 1 · 0 = 0.\nWhen z << 0 (e.g. z = -10), σ(z) ≈ 0.0 and σ'(z) ≈ 0 · 1 = 0.\n\nIn both flat tails, the gradient is practically zero.",
      "why_we_need_it": "Understanding sigmoid saturation motivated the invention and adoption of ReLU (f(z) = max(0,z)), whose derivative is constant 1.0 for all z > 0, solving vanishing gradients in deep networks.",
      "how_it_works": "By the chain rule: ∂L/∂w₁ = (∂L/∂z_L) · (∂z_L/∂a_(L-1)) · σ'(z_(L-1)) · ... · σ'(z₁) · x.\nBecause each σ'(z) ≤ 0.25, multiplying 10 layers yields (0.25)¹⁰ ≈ 9.5 × 10⁻⁷ (vanishing to zero!).",
      "formula": "σ'(z) = σ(z) · (1 - σ(z)) ≤ 0.25",
      "key_takeaways": [
        "Maximum derivative of sigmoid is 0.25 at z = 0.",
        "Maximum derivative of tanh is 1.0 at z = 0 (better than sigmoid, but still saturates at extremes).",
        "ReLU has derivative 1.0 for all positive inputs, allowing gradient flow through 100+ layers without decay."
      ]
    },
    "sample_questions": [
      {
        "q": "What is the maximum possible value of the derivative of the Sigmoid activation function?",
        "options": [
          "0.25",
          "1.00",
          "0.50",
          "Infinity"
        ],
        "ans": "0.25",
        "exp": "At z = 0, σ(0) = 0.5, so σ'(0) = 0.5 * (1 - 0.5) = 0.25."
      },
      {
        "q": "Which activation function completely avoids vanishing gradients for all positive pre-activations (z > 0)?",
        "options": [
          "ReLU (Rectified Linear Unit)",
          "Sigmoid",
          "Tanh",
          "Softmax"
        ],
        "ans": "ReLU (Rectified Linear Unit)",
        "exp": "For all z > 0, d/dz(ReLU(z)) = 1.0, preserving gradient magnitude during backpropagation."
      }
    ]
  },
  {
    "id": "st1_q6",
    "module_id": "st1_mod5",
    "module_name": "Module 5: Activation Functions & Loss Functions",
    "syllabus_lec": "Lecture 7",
    "topic": "Softmax Translation Invariance / Loss Functions",
    "difficulty": "Medium",
    "points": 1,
    "question": "A softmax classifier produces logits [7, 5, 4]. Before applying softmax, the same constant is subtracted from every logit for numerical stability. What happens to the output probabilities?",
    "options": [
      "They preserve exactly the same class probabilities",
      "They preserve only the highest-probability class",
      "They become uniformly distributed across the classes",
      "They change proportionally to the subtracted constant"
    ],
    "correct": 0,
    "explanation": "Softmax is mathematically translation-invariant: subtracting a constant C from all logits does not change the resulting probabilities. Softmax(z_i - C) = exp(z_i - C) / ∑ exp(z_j - C) = [exp(z_i) * exp(-C)] / [exp(-C) * ∑ exp(z_j)] = exp(z_i) / ∑ exp(z_j) = Softmax(z_i). In practice, C = max(z) is subtracted to prevent floating-point numerical overflow (inf / NaN).",
    "theory": {
      "title": "Softmax Translation Invariance & Numerical Stability",
      "what_is_it": "Softmax converts a vector of K unconstrained real logits z into a probability distribution where all values are non-negative and sum to 1.0.\n\nNumerical stability trick: In computer systems, computing e^800 causes floating-point overflow (inf). Subtracting max(z) shifts the maximum exponent to e^0 = 1.0, eliminating overflow while preserving mathematical probabilities exactly.",
      "why_we_need_it": "Essential in all deep learning frameworks (PyTorch `log_softmax`, TensorFlow) to ensure stable gradient computation without precision errors.",
      "how_it_works": "Let z_shift = z - max(z). Then exp(z_shift) ≤ 1.0 for all elements, guaranteeing safe computation.",
      "formula": "Softmax(z - C)_i = exp(z_i - C) / Σ_j exp(z_j - C) = (exp(z_i) · e^(-C)) / (e^(-C) · Σ_j exp(z_j)) = Softmax(z)_i",
      "key_takeaways": [
        "Softmax is shift-invariant (translation-invariant).",
        "Subtracting max(z) prevents float overflow (e^large -> inf) and division by zero.",
        "Output probabilities and class rankings remain 100% identical."
      ]
    },
    "sample_questions": [
      {
        "q": "If logits [1000, 1000, 998] are shifted to [0, 0, -2] by subtracting 1000, what happens to the resulting Softmax distribution?",
        "options": [
          "The output probabilities are mathematically identical",
          "The probabilities become zero",
          "The third class probability becomes negative",
          "The first two classes become 0.5 each regardless of values"
        ],
        "ans": "The output probabilities are mathematically identical",
        "exp": "Because exp(-C) cancels out from the numerator and denominator, shifting logits by a constant preserves the exact probability distribution."
      },
      {
        "q": "What is the sum of all output probabilities produced by the Softmax function?",
        "options": [
          "Exactly 1.0 (100%)",
          "Equal to the number of classes K",
          "Dependent on the learning rate",
          "Always between 0.0 and 0.5"
        ],
        "ans": "Exactly 1.0 (100%)",
        "exp": "By construction, the denominator of Softmax is the sum of all numerators, guaranteeing ∑ p_i = 1.0."
      }
    ]
  },
  {
    "id": "st1_q8",
    "module_id": "st1_mod7",
    "module_name": "Module 7: Convolutional Neural Networks (CNNs)",
    "syllabus_lec": "Lectures 11–12",
    "topic": "CNN Spatial Output Dimension Calculation",
    "difficulty": "Medium",
    "points": 1,
    "question": "A 31 × 31 feature map is processed by a 3 × 3 convolution with stride 2 and padding 1. What is the spatial size of the output feature map?",
    "options": [
      "15 × 15",
      "16 × 16",
      "17 × 17",
      "18 × 18"
    ],
    "correct": 1,
    "explanation": "The standard CNN spatial output dimension formula is: Output Size = ⌊(W - K + 2P) / S⌋ + 1. Here, input W = 31, kernel K = 3, padding P = 1, stride S = 2. Calculation: Output = ⌊(31 - 3 + 2*(1)) / 2⌋ + 1 = ⌊(31 - 3 + 2) / 2⌋ + 1 = ⌊30 / 2⌋ + 1 = 15 + 1 = 16. Thus, the output spatial dimension is 16 × 16.",
    "theory": {
      "title": "Convolutional Output Dimensions & Receptive Field Math",
      "what_is_it": "Convolution slides a spatial filter of size K × K across an input feature map of size W × H with step size (stride) S and border zero-padding P.\n\n💡 Mental Grid:\nImagine scanning a barcode with a scanner window. Padding adds extra white margins so edge pixels are fully scanned; stride controls how many pixels the scanner jumps each step.",
      "why_we_need_it": "Accurately calculating spatial dimensions is critical for designing CNN architectures and matching tensor dimensions before dense classification layers.",
      "how_it_works": "1. Total padded width: W_pad = W + 2P.\n2. Pixels traversed: (W + 2P - K).\n3. Steps taken: ⌊(W + 2P - K) / S⌋.\n4. Add initial position: + 1.",
      "formula": "W_out = ⌊ (W_in - K + 2P) / S ⌋ + 1",
      "key_takeaways": [
        "With kernel K = 3, padding P = 1, and stride S = 1, output spatial size is unchanged (W_out = W_in, 'same' padding).",
        "With stride S = 2, spatial dimensions are roughly halved (downsampling).",
        "Padding P adds P pixels to both sides (total added width = 2P)."
      ]
    },
    "sample_questions": [
      {
        "q": "What is the output spatial size of a 28 × 28 image after a 5 × 5 convolution with stride 1 and padding 0 ('valid' padding)?",
        "options": [
          "24 × 24",
          "28 × 28",
          "23 × 23",
          "14 × 14"
        ],
        "ans": "24 × 24",
        "exp": "W_out = (28 - 5 + 0)/1 + 1 = 23 + 1 = 24 × 24."
      },
      {
        "q": "If you want a 3 × 3 convolution with stride 1 to keep the output size identical to input ('same' padding), what padding P is required?",
        "options": [
          "P = 1",
          "P = 2",
          "P = 0",
          "P = 3"
        ],
        "ans": "P = 1",
        "exp": "P = (K - 1) / 2 = (3 - 1) / 2 = 1."
      }
    ]
  },
  {
    "id": "st1_q9",
    "module_id": "st1_mod7",
    "module_name": "Module 7: Convolutional Neural Networks (CNNs)",
    "syllabus_lec": "Lectures 11–12",
    "topic": "Max Pooling Spatial Output and Properties",
    "difficulty": "Easy",
    "points": 1,
    "question": "A 32 × 32 feature map passes through 2 × 2 max pooling with stride 2 and no padding. Which description of the output is correct?",
    "options": [
      "16 × 16 with no trainable pooling weights",
      "16 × 16 with one trainable weight per window",
      "31 × 31 with no trainable pooling weights",
      "31 × 31 with one trainable weight per window"
    ],
    "correct": 0,
    "explanation": "Max pooling computes the maximum value across each 2 × 2 spatial window. With input size 32 × 32, kernel 2 × 2, stride 2, and padding 0, the output size is: (32 - 2) / 2 + 1 = 16 × 16. Importantly, max pooling is a fixed non-linear mathematical operation and contains ZERO trainable weights or parameters.",
    "theory": {
      "title": "Max Pooling Mechanics & Translation Invariance",
      "what_is_it": "Max pooling partitions the input into non-overlapping or overlapping spatial grids and selects the maximum activation in each region.\n\n💡 Intuition:\nFinding the brightest star in each quadrant of the sky. If the star shifts slightly, it is still the brightest point in that quadrant (translational invariance).",
      "why_we_need_it": "1. Downsamples spatial dimensions by 75% (reducing computational FLOPs and VRAM).\n2. Introduces local translational invariance.\n3. Expands the effective receptive field of subsequent layers.",
      "how_it_works": "For each window of size P_h × P_w, Output(i, j) = max(Input Window). Contains no learned parameters.",
      "formula": "W_out = ⌊ (W_in - P_w) / S ⌋ + 1,   Trainable Parameters = 0",
      "key_takeaways": [
        "Pooling layers (Max, Average) have ZERO trainable parameters.",
        "Standard 2 × 2 pooling with stride 2 reduces spatial area by a factor of 4 (50% width, 50% height).",
        "During backpropagation, max pooling routes gradients exclusively to the neuron that had the maximum activation in the forward pass."
      ]
    },
    "sample_questions": [
      {
        "q": "How many trainable parameters are added to a neural network by inserting three 2 × 2 Max Pooling layers?",
        "options": [
          "0 parameters",
          "12 parameters",
          "6 parameters",
          "24 parameters"
        ],
        "ans": "0 parameters",
        "exp": "Max pooling is a fixed mathematical function with zero learned weights or biases."
      },
      {
        "q": "What happens during backpropagation through a Max Pooling layer?",
        "options": [
          "The gradient passes only to the specific index that had the maximum value during the forward pass",
          "The gradient is divided equally across all 4 pixels",
          "The gradient is multiplied by the learning rate",
          "The gradient is set to zero for all positions"
        ],
        "ans": "The gradient passes only to the specific index that had the maximum value during the forward pass",
        "exp": "Max pooling routes the incoming gradient 100% to the winner unit (argmax) and assigns 0 gradient to non-maximal units."
      }
    ]
  },
  {
    "id": "st1_q34",
    "module_id": "st1_mod7",
    "module_name": "Module 7: Convolutional Neural Networks (CNNs)",
    "syllabus_lec": "Lectures 11–12",
    "topic": "Convolutional Layer Trainable Parameter Calculation",
    "difficulty": "Medium",
    "points": 1,
    "question": "A convolutional layer receives 8 input channels and uses 24 filters of size 3 × 3, with one bias per filter. How many trainable parameters does the layer contain?",
    "options": [
      "1,728",
      "1,752",
      "1,776",
      "1,800"
    ],
    "correct": 1,
    "explanation": "Each of the 24 filters must operate across all 8 input channels. Weight parameters per filter = (Kernel Width × Kernel Height × Input Channels) = 3 × 3 × 8 = 72 weights per filter. Total weights for 24 filters = 24 × 72 = 1,728 weights. Adding 1 bias per filter = 24 biases. Total trainable parameters = 1,728 + 24 = 1,752 parameters.",
    "theory": {
      "title": "Parameter Counting in 2D Convolutional Layers & Channel Weight Sharing",
      "what_is_it": "In Convolutional Neural Networks (CNNs), weights are organized into spatial kernel tensors shared across all spatial coordinate patches of the input feature map via the principle of translational equivariance.\n\n💡 Beginner Intuition:\nRather than training a separate sensor for every single pixel coordinate in a 1000×1000 image (which would require millions of weights), a CNN uses a tiny 3×3 magnifying glass (filter) and slides it across the entire canvas, testing for the exact same edge feature everywhere.\n\n🚀 Real-World AI Use Case:\nAllows state-of-the-art vision backbones like ResNet, ConvNeXt, and YOLO to process megapixel images with only a few million parameters, fitting on mobile phones and edge microcontrollers.",
      "why_we_need_it": "Weight sharing drastically curtails parameter count compared to dense linear layers. Without weight sharing, connecting a 224×224×3 image to a 64-channel hidden layer would demand over 9.6 million weights in a single layer instead of just 1,792 weights!",
      "how_it_works": "• Step 1: Identify single filter spatial volume: K_h × K_w across all input channels C_in (e.g. 3 × 3 × 8 = 72 weights per filter).\n• Step 2: Include the scalar bias term per filter (72 + 1 = 73 parameters per filter).\n• Step 3: Multiply by the number of distinct output filters C_out (e.g. 24 filters × 73 = 1,752 parameters).\n• Step 4: Note that input image spatial height H and width W have ZERO influence on the trainable parameter count.",
      "formula": "\\text{Conv Parameters} = C_{\\text{out}} \\times \\left( K_h \\times K_w \\times C_{\\text{in}} + 1 \\right)",
      "key_takeaways": [
        "Convolutional parameter counts depend exclusively on kernel size and channel counts, completely independent of image resolution!",
        "Each individual output channel represents the convolution output of exactly 1 distinct 3D filter volume.",
        "Every filter kernel spans the entire channel depth (C_in) of the incoming representation volume."
      ]
    },
    "sample_questions": [
      {
        "q": "How many trainable parameters are in a Conv layer with 3 input channels, 16 filters of size 5 × 5, and biases?",
        "options": [
          "1,216",
          "1,200",
          "1,248",
          "400"
        ],
        "ans": "1,216",
        "exp": "Params = 16 × (5 × 5 × 3 + 1) = 16 × (75 + 1) = 16 × 76 = 1,216."
      },
      {
        "q": "Does changing the input image resolution from 224 × 224 to 512 × 512 change the number of trainable parameters in a Conv layer?",
        "options": [
          "No, Conv layer parameter count depends only on kernel dimensions and channels, not image resolution",
          "Yes, parameter count quadruples",
          "Yes, parameter count doubles",
          "No, but biases are removed"
        ],
        "ans": "No, Conv layer parameter count depends only on kernel dimensions and channels, not image resolution",
        "exp": "Because weights are shared across the entire spatial map, Conv parameters remain constant regardless of input spatial dimensions."
      }
    ]
  },
  {
    "id": "st1_q35",
    "module_id": "st1_mod7",
    "module_name": "Module 7: Convolutional Neural Networks (CNNs)",
    "syllabus_lec": "Lectures 11–12",
    "topic": "Conv + Max Pooling Combined Output Size Calculation",
    "difficulty": "Medium",
    "points": 1,
    "question": "A 64 × 64 feature map passes through a 5 × 5 convolution with stride 2 and padding 2, followed by 2 × 2 max pooling with stride 2. What is the final spatial size?",
    "options": [
      "15 × 15",
      "16 × 16",
      "17 × 17",
      "32 × 32"
    ],
    "correct": 1,
    "explanation": "Stage 1 (Convolution): W_conv = ⌊(64 - 5 + 2*(2)) / 2⌋ + 1 = ⌊(64 - 5 + 4) / 2⌋ + 1 = ⌊63 / 2⌋ + 1 = 31 + 1 = 32 × 32.\nStage 2 (Max Pooling): W_pool = ⌊(32 - 2 + 0) / 2⌋ + 1 = ⌊30 / 2⌋ + 1 = 15 + 1 = 16 × 16.\nFinal spatial size is 16 × 16.",
    "theory": {
      "title": "Chained Convolutional and Pooling Spatial Transformations",
      "what_is_it": "Sequential spatial downsampling models the hierarchical compression pipeline in deep vision architectures where alternating convolutional feature extraction and pooling operations progressively shrink spatial height/width while expanding receptive fields.\n\n💡 Beginner Intuition:\nThink of viewing a landscape painting from across the room. First, you squint through binoculars that sample every 2nd step (strided conv), halving the visual span. Then, you step back further and take only the brightest highlight in each 2×2 tile (max pooling), halving the resolution once more.\n\n🚀 Real-World AI Use Case:\nFound in classical vision backbones (VGG, ResNet, EfficientNet) where spatial dimensions downsample from 224×224 → 112×112 → 56×56 → 28×28 → 14×14 → 7×7 to enable invariant high-level object classification.",
      "why_we_need_it": "Accurately calculating spatial output dimensions across chained operations ensures matching tensor shapes for residual skip connections and prevents shape mismatch runtime errors in deep networks.",
      "how_it_works": "• Step 1 (Convolution Output): Apply spatial convolution formula W_out1 = ⌊(W_in - K + 2P)/S⌋ + 1 = ⌊(64 - 5 + 2×2)/2⌋ + 1 = ⌊63/2⌋ + 1 = 31 + 1 = 32.\n• Step 2 (Intermediate Volume): The intermediate feature map has spatial resolution 32 × 32.\n• Step 3 (Max Pooling Output): Apply pooling formula W_out2 = ⌊(W_out1 - P_k)/P_s⌋ + 1 = ⌊(32 - 2)/2⌋ + 1 = 15 + 1 = 16.\n• Step 4 (Final Resolution): The final spatial size is 16 × 16.",
      "formula": "W_{\\text{out}} = \\left\\lfloor \\frac{W_{\\text{in}} - K + 2P}{S} \\right\\rfloor + 1, \\quad W_{\\text{pool}} = \\left\\lfloor \\frac{W - K_{\\text{pool}}}{S_{\\text{pool}}} \\right\\rfloor + 1",
      "key_takeaways": [
        "Always evaluate multi-stage convolutional and pooling layers sequentially from input to output.",
        "Padding P = (K - 1)/2 preserves spatial resolution when stride S = 1; when S = 2, spatial size is halved.",
        "A 2×2 max-pool with stride 2 halves spatial resolution without introducing any trainable parameters."
      ]
    },
    "sample_questions": [
      {
        "q": "A 100 × 100 map passes through 2 × 2 pooling (stride 2) followed by another 2 × 2 pooling (stride 2). What is the final size?",
        "options": [
          "25 × 25",
          "50 × 50",
          "24 × 24",
          "12 × 12"
        ],
        "ans": "25 × 25",
        "exp": "First pool: 100 / 2 = 50. Second pool: 50 / 2 = 25."
      },
      {
        "q": "If an input image is 128 × 128, how many successive stride-2 downsamplings are needed to reach 8 × 8?",
        "options": [
          "4 stages (128 -> 64 -> 32 -> 16 -> 8)",
          "3 stages",
          "5 stages",
          "2 stages"
        ],
        "ans": "4 stages (128 -> 64 -> 32 -> 16 -> 8)",
        "exp": "128 / 2^4 = 128 / 16 = 8, so exactly 4 stages."
      }
    ]
  },
  {
    "id": "st1_q10",
    "module_id": "st1_mod8",
    "module_name": "Module 8: Overview of CNN Architectures",
    "syllabus_lec": "Lectures 13–14",
    "topic": "ResNet Identity Shortcuts for Degradation Problem",
    "difficulty": "Medium",
    "points": 1,
    "question": "A very deep plain CNN shows higher training error after adding more convolutional layers. Which architectural modification most closely targets the optimisation problem addressed by ResNet?",
    "options": [
      "Insert identity shortcut paths around groups of layers",
      "Replace all 3 × 3 filters with larger 7 × 7 filters",
      "Move every pooling layer ahead of its convolutional block",
      "Replace convolutional blocks with additional dense layers"
    ],
    "correct": 0,
    "explanation": "As plain networks become very deep, their training accuracy saturates and then degrades rapidly (the degradation problem, where deeper networks exhibit HIGHER training error than shallower ones, not caused by overfitting). ResNet (He et al., 2015) solves this by introducing identity shortcut (residual skip) connections: H(x) = F(x) + x. This allows gradients to flow backwards unimpeded through the identity path, making it easy for layers to learn identity mappings.",
    "theory": {
      "title": "ResNet Residual Learning & The Degradation Problem",
      "what_is_it": "In a plain CNN, stacked layers learn an underlying mapping H(x). In ResNet, layers explicitly learn a residual mapping F(x) = H(x) - x, giving H(x) = F(x) + x via an additive skip connection.\n\n💡 Highway Analogy:\nA multi-lane expressway (the skip connection) running alongside local city streets (the conv layers). If the local streets have traffic jams (vanishing gradients), cars (gradients) bypass them completely on the expressway.",
      "why_we_need_it": "Before ResNet, training networks deeper than 20-30 layers failed due to optimization degradation. ResNet enabled training networks with 50, 101, and 152+ layers, winning ImageNet 2015 with superhuman accuracy.",
      "how_it_works": "During backpropagation: dL/dx = dL/dH · (dF/dx + 1). The '+1' identity term ensures that even if dF/dx vanishes, the gradient dL/dx never becomes zero.",
      "formula": "H(x) = F(x, {W_i}) + x   ⟹   ∂E/∂x = (∂E/∂H) · (∂F/∂x + I)",
      "key_takeaways": [
        "The degradation problem is NOT overfitting: training error itself increases in deep plain networks.",
        "Identity shortcuts allow deep networks to easily learn identity functions (F(x) = 0 => H(x) = x).",
        "The '+1' derivative term guarantees an unobstructed gradient highway across hundreds of layers."
      ]
    },
    "sample_questions": [
      {
        "q": "What is the mathematical formulation of a residual block with input x and learned transformation F(x)?",
        "options": [
          "Output = F(x) + x",
          "Output = F(x) * x",
          "Output = F(x) - x",
          "Output = F(x) / x"
        ],
        "ans": "Output = F(x) + x",
        "exp": "ResNet adds the input identity x directly to the residual function output: H(x) = F(x) + x."
      },
      {
        "q": "Why does the derivative of a residual block prevent the vanishing gradient problem?",
        "options": [
          "The derivative d(F(x) + x)/dx contains a '+1' identity matrix term",
          "It forces all weights to be non-negative",
          "It replaces convolution with matrix inversion",
          "It multiplies gradients by the batch size"
        ],
        "ans": "The derivative d(F(x) + x)/dx contains a '+1' identity matrix term",
        "exp": "The '+1' term allows gradients to flow backwards directly without being repeatedly attenuated by small weight matrices."
      }
    ]
  },
  {
    "id": "st1_q11",
    "module_id": "st1_mod9",
    "module_name": "Module 9: Image Preprocessing & Data Augmentation",
    "syllabus_lec": "Lecture 15",
    "topic": "Image Preprocessing for Pre-trained Backbones",
    "difficulty": "Medium",
    "points": 1,
    "question": "A pre-trained image classifier was trained with a specific channel-wise mean and standard deviation. Which preprocessing choice is most appropriate when reusing its backbone?",
    "options": [
      "Apply the same normalization expected during pre-training",
      "Normalize each image independently to zero mean and unit range",
      "Use only min-max scaling because the backbone is already trained",
      "Skip normalization so pre-trained convolution filters remain unchanged"
    ],
    "correct": 0,
    "explanation": "Pre-trained convolution filters and weights (e.g., ImageNet models trained with mean=[0.485, 0.456, 0.406] and std=[0.229, 0.224, 0.225]) are calibrated to respond to feature distributions normalized with those exact statistics. Using different normalization alters the input feature scale, degrading pre-trained feature activations.",
    "theory": {
      "title": "Input Normalization & Distribution Alignment for Pre-Trained Backbones",
      "what_is_it": "Standardizing input image channels via z = (x - μ_channel) / σ_channel using the exact dataset statistics from the original pre-training dataset (e.g. ImageNet-1k).\n\n💡 Analogy:\nIf a calibrated electronic sensor expects voltage between -1V and +1V with mean 0V, feeding it un-normalized signals between 0V and 255V will saturate and distort all internal readings.",
      "why_we_need_it": "Ensures the pre-trained first-layer filters (Gabor-like edge detectors, color blobs) receive input distributions identical to the training phase.",
      "how_it_works": "1. Convert pixel values from [0, 255] to [0.0, 1.0].\n2. Subtract ImageNet channel means: [0.485, 0.456, 0.406].\n3. Divide by ImageNet channel stds: [0.229, 0.224, 0.225].",
      "formula": "x_norm^(c) = (x^(c) - μ_c) / σ_c,   where c ∈ {R, G, B}",
      "key_takeaways": [
        "Always match the normalization statistics (mean and std) used during the model's pre-training phase.",
        "ImageNet RGB statistics: Mean = [0.485, 0.456, 0.406], Std = [0.229, 0.224, 0.225].",
        "Failing to normalize correctly leads to severe performance degradation even if model weights are frozen."
      ]
    },
    "sample_questions": [
      {
        "q": "What are the standard ImageNet channel means used in torchvision transforms?",
        "options": [
          "[0.485, 0.456, 0.406]",
          "[0.5, 0.5, 0.5]",
          "[0.0, 0.0, 0.0]",
          "[1.0, 1.0, 1.0]"
        ],
        "ans": "[0.485, 0.456, 0.406]",
        "exp": "ImageNet pre-training standardizes RGB channels using mean=[0.485, 0.456, 0.406] and std=[0.229, 0.224, 0.225]."
      },
      {
        "q": "Why should you avoid skipping normalization when fine-tuning a pre-trained ResNet?",
        "options": [
          "Input pixel scale mismatch causes pre-trained convolutional filters to produce incorrect feature activations",
          "PyTorch raises a runtime tensor dimension error",
          "Backpropagation becomes impossible without normalization",
          "The classifier automatically converts to a linear SVM"
        ],
        "ans": "Input pixel scale mismatch causes pre-trained convolutional filters to produce incorrect feature activations",
        "exp": "Pre-trained convolution filters are fine-tuned for zero-centered normalized inputs; raw pixels [0, 255] would saturate initial layer activations."
      }
    ]
  },
  {
    "id": "st1_q12",
    "module_id": "st1_mod9",
    "module_name": "Module 9: Image Preprocessing & Data Augmentation",
    "syllabus_lec": "Lecture 15",
    "topic": "Data Augmentation Strategy Selection",
    "difficulty": "Medium",
    "points": 1,
    "question": "In a medical image dataset, small rotations preserve the diagnosis but horizontal flipping can exchange left- and right-sided findings. Which augmentation policy is most defensible?",
    "options": [
      "Use modest random rotations but avoid horizontal flips",
      "Use horizontal flips but avoid all small rotations",
      "Use both transformations with equal probability",
      "Use neither transformation and only duplicate the images"
    ],
    "correct": 0,
    "explanation": "Data augmentations must strictly preserve semantic label validity. In medical radiography (e.g. chest X-rays detecting dextrocardia or distinguishing left-lung vs right-lung pneumonia), horizontal flipping changes anatomical laterality, destroying diagnostic correctness. Modest rotations (e.g. ±10°) reflect natural patient posture variations and are safe, while horizontal flips must be avoided.",
    "theory": {
      "title": "Domain-Specific Data Augmentation & Label Preservation",
      "what_is_it": "Data augmentation artificially expands training diversity by applying label-preserving transformations (rotations, crops, color jitter).\n\n💡 Rule of Thumb:\nAn augmentation is only valid if a human expert looking at the transformed image would still assign the exact same label as the original image.",
      "why_we_need_it": "Prevents overfitting on small datasets and builds invariance to irrelevant real-world variations (camera angle, lighting).",
      "how_it_works": "• Digit 6 vs 9: 180° rotation is invalid (turns '6' into '9').\n• Chest X-ray: Horizontal flip is invalid (swaps left/right lung and heart position).\n• General photos (dogs/cats): Horizontal flip is valid (a flipped dog is still a dog).",
      "formula": "Valid Augmentation T:   y(T(x)) = y(x)",
      "key_takeaways": [
        "Data augmentation must never alter the ground-truth semantic class of an image.",
        "Medical imaging requires strict awareness of anatomical laterality before applying horizontal flips.",
        "Modest affine rotations and slight contrast adjustments are broadly label-preserving."
      ]
    },
    "sample_questions": [
      {
        "q": "In an optical character recognition (OCR) dataset containing digits '6' and '9', why is vertical flipping an invalid augmentation?",
        "options": [
          "It alters the semantic meaning by turning '6' into '9'",
          "It reduces the number of training images",
          "It increases training time by 4x",
          "It is mathematically non-differentiable"
        ],
        "ans": "It alters the semantic meaning by turning '6' into '9'",
        "exp": "Flipping digit '6' vertically turns it into digit '9', creating incorrect ground truth training labels."
      },
      {
        "q": "What is the primary regularizing benefit of random cropping and color jittering during training?",
        "options": [
          "Forces the network to learn invariant features rather than memorizing exact pixel layouts",
          "Reduces the number of parameters in the model",
          "Eliminates the need for validation testing",
          "Guarantees 100% training accuracy"
        ],
        "ans": "Forces the network to learn invariant features rather than memorizing exact pixel layouts",
        "exp": "Augmentations act as strong regularizers, preventing the network from overfitting to specific backgrounds, alignments, or lighting conditions."
      }
    ]
  },
  {
    "id": "st1_q13",
    "module_id": "st1_mod10",
    "module_name": "Module 10: Object Detection & Image Segmentation",
    "syllabus_lec": "Lectures 16–17",
    "topic": "Object Detection Task Definition",
    "difficulty": "Easy",
    "points": 1,
    "question": "A vision application needs the class label and bounding box of every visible object, but it does not require a pixel-level mask. Which task best matches the requirement?",
    "options": [
      "Image classification",
      "Object detection",
      "Semantic segmentation",
      "Image reconstruction"
    ],
    "correct": 1,
    "explanation": "Object Detection predicts both the semantic class category and the spatial bounding box coordinates [x_min, y_min, width, height] for every object instance in an image. Image classification only outputs a single class label per image; semantic segmentation assigns class labels to every individual pixel; instance segmentation provides pixel masks for individual objects.",
    "theory": {
      "title": "Computer Vision Task Hierarchy: Classification to Segmentation",
      "what_is_it": "• Image Classification: 'Is there a car in this image?' (1 class label for whole image).\n• Object Detection: 'Where are the cars?' (Bounding box [x, y, w, h] + class for each car).\n• Semantic Segmentation: 'Which pixels belong to car vs road?' (Pixel-wise class map without separating instances).\n• Instance Segmentation: 'Which pixels belong to Car #1 vs Car #2?' (Individual pixel mask per object).",
      "why_we_need_it": "Different applications require different spatial granularities (e.g. autonomous driving needs bounding boxes for cars/pedestrians, medical surgery needs pixel-level segmentation).",
      "how_it_works": "Object detectors (YOLO, Faster R-CNN) output a tuple per object: (x, y, w, h, class_id, confidence_score).",
      "formula": "Prediction = { (x_i, y_i, w_i, h_i, c_i, s_i) }_(i=1)^M",
      "key_takeaways": [
        "Object detection combines classification with spatial bounding box regression.",
        "Intersection over Union (IoU) measures overlap between predicted box and ground truth box.",
        "Non-Maximum Suppression (NMS) filters out redundant overlapping bounding boxes."
      ]
    },
    "sample_questions": [
      {
        "q": "Which computer vision task outputs bounding box coordinates [x, y, w, h] alongside class labels?",
        "options": [
          "Object Detection",
          "Image Classification",
          "Semantic Segmentation",
          "Style Transfer"
        ],
        "ans": "Object Detection",
        "exp": "Object Detection specifically outputs rectangular bounding boxes and category labels for all instances."
      },
      {
        "q": "What algorithm is used in object detection to eliminate multiple overlapping duplicate bounding boxes for the same object?",
        "options": [
          "Non-Maximum Suppression (NMS)",
          "Batch Normalization",
          "Xavier Initialization",
          "Heuristic Pruning"
        ],
        "ans": "Non-Maximum Suppression (NMS)",
        "exp": "NMS sorts boxes by confidence score and iteratively suppresses lower-confidence boxes that overlap significantly (IoU > threshold) with the top detection."
      }
    ]
  },
  {
    "id": "st1_q15",
    "module_id": "st1_mod10",
    "module_name": "Module 10: Object Detection & Image Segmentation",
    "syllabus_lec": "Lectures 16–17",
    "topic": "Instance Segmentation Output Requirements",
    "difficulty": "Medium",
    "points": 1,
    "question": "Two neighbouring image regions have the same semantic class, but an application must distinguish them as separate physical objects. Which output representation is required?",
    "options": [
      "One class label for the whole image",
      "One semantic class map shared by all objects",
      "Separate instance masks for the individual objects",
      "One feature vector for each convolutional channel"
    ],
    "correct": 2,
    "explanation": "When two adjacent objects share the same category (e.g., two people standing shoulder-to-shoulder), Semantic Segmentation colors all person pixels with the same label, merging them into one blob. Instance Segmentation (e.g. Mask R-CNN) outputs distinct pixel masks for each individual person instance, allowing the system to separate and count them.",
    "theory": {
      "title": "Semantic Segmentation vs. Instance Segmentation",
      "what_is_it": "• Semantic Segmentation: Assigns a class to every pixel (e.g., all 'sheep' pixels are blue). If two sheep overlap, they merge into one continuous blue region.\n• Instance Segmentation: Assigns both a class AND an instance ID (e.g., Sheep #1 has red mask, Sheep #2 has green mask).",
      "why_we_need_it": "Crucial for counting objects, robotics grasping (grabbing one specific cup among many), and medical cell separation.",
      "how_it_works": "Mask R-CNN extends Faster R-CNN by adding a third parallel branch: along with class and bounding box, it outputs a binary pixel mask for each detected RoI.",
      "formula": "Loss = L_cls + L_box + L_mask",
      "key_takeaways": [
        "Semantic segmentation cannot separate touching objects of the same class.",
        "Instance segmentation provides separate, distinct binary masks for every individual object.",
        "Panoptic segmentation combines semantic segmentation (stuff: sky, road) with instance segmentation (things: cars, people)."
      ]
    },
    "sample_questions": [
      {
        "q": "If three cars are parked touching each other, what will Semantic Segmentation output?",
        "options": [
          "A single continuous mask where all car pixels share the 'car' class label",
          "Three separate bounding boxes with individual masks",
          "An error because cars are touching",
          "Only the middle car"
        ],
        "ans": "A single continuous mask where all car pixels share the 'car' class label",
        "exp": "Semantic segmentation does not distinguish between separate instances of the same class; all car pixels are assigned the same class index."
      },
      {
        "q": "Which popular neural network architecture pioneered end-to-end instance segmentation with RoIAlign?",
        "options": [
          "Mask R-CNN",
          "AlexNet",
          "LeNet-5",
          "VGG-16"
        ],
        "ans": "Mask R-CNN",
        "exp": "Mask R-CNN introduced RoIAlign and a dedicated pixel-mask branch on top of Faster R-CNN."
      }
    ]
  },
  {
    "id": "st1_q14",
    "module_id": "st1_mod11",
    "module_name": "Module 11: Transfer Learning with Pre-trained Models",
    "syllabus_lec": "Lectures 18–19",
    "topic": "Transfer Learning & Backbone Fine-Tuning Strategy",
    "difficulty": "Medium",
    "points": 1,
    "question": "A small target dataset is visually similar to the data used to pre-train a CNN. Training a newly replaced classifier head has stabilised. Which next step is most suitable if additional adaptation is required?",
    "options": [
      "Unfreeze selected upper backbone layers and fine-tune with a smaller learning rate",
      "Reinitialise the complete backbone and keep only the classifier weights",
      "Freeze the classifier and update only the earliest convolutional layers",
      "Increase the learning rate and update every layer from the pre-trained values"
    ],
    "correct": 0,
    "explanation": "In transfer learning on small, similar datasets, early convolutional layers contain universal low-level features (edges, textures) that should remain frozen. If further fine-tuning is needed after the new head stabilizes, the recommended strategy is to unfreeze the top (upper) backbone blocks and fine-tune them using a much smaller learning rate (e.g., 10x to 100x smaller) to adapt domain-specific high-level representations without catastrophic forgetting.",
    "theory": {
      "title": "Transfer Learning Strategies: Feature Extraction vs Fine-Tuning",
      "what_is_it": "Transfer learning reuses knowledge learned from a massive dataset (ImageNet) on a smaller downstream target task.\n\nTwo Main Stages:\n1. Feature Extraction: Freeze entire backbone, train only the newly initialized classifier head.\n2. Fine-Tuning: Unfreeze upper backbone layers and train end-to-end with a small learning rate (e.g. 1e-5).",
      "why_we_need_it": "Training deep CNNs from scratch on small datasets causes severe overfitting. Transfer learning achieves state-of-the-art accuracy in minutes with 90% less data.",
      "how_it_works": "• Early Layers: Low-level features (Gabor edges, color transitions) -> Generalizable across all vision tasks.\n• Upper Layers: High-level features (dog snouts, car wheels) -> Task-specific, benefit from fine-tuning.\n• Use a small learning rate (1e-4 or 1e-5) to avoid destroying pre-trained weights.",
      "formula": "η_backbone ≪ η_head   (e.g., η_backbone = 0.1 × η_head)",
      "key_takeaways": [
        "Always train the new classifier head first while the backbone is frozen.",
        "When fine-tuning the backbone, unfreeze from top to bottom (upper layers first).",
        "Use a significantly smaller learning rate on pre-trained layers to prevent catastrophic forgetting."
      ]
    },
    "sample_questions": [
      {
        "q": "Why should you use a smaller learning rate when fine-tuning pre-trained backbone layers compared to a newly initialized classifier head?",
        "options": [
          "To gently adapt pre-trained feature weights without destroying existing learned representations",
          "To force the loss function to become convex",
          "Because pre-trained layers have fewer parameters",
          "To speed up forward pass execution"
        ],
        "ans": "To gently adapt pre-trained feature weights without destroying existing learned representations",
        "exp": "A large learning rate would overwrite and destroy the rich, generalizable feature representations already stored in the pre-trained weights."
      },
      {
        "q": "What types of visual features are primarily captured in the earliest (first 1-2) convolutional layers of a deep CNN?",
        "options": [
          "Generic low-level features like edges, corners, and color gradients",
          "High-level class-specific object semantics",
          "Full object shapes and identity masks",
          "Text labels and classification logits"
        ],
        "ans": "Generic low-level features like edges, corners, and color gradients",
        "exp": "Early layers act as universal edge and texture filters, which are identical across virtually all visual domains."
      }
    ]
  },
  {
    "id": "st1_q36",
    "module_id": "st1_mod11",
    "module_name": "Module 11: Transfer Learning with Pre-trained Models",
    "syllabus_lec": "Lectures 18–19",
    "topic": "Backbone Fine-Tuning vs. Overfitting Trade-Off",
    "difficulty": "Medium",
    "points": 1,
    "question": "A pre-trained CNN underfits a small target dataset when the whole backbone is frozen, but rapidly overfits when the entire backbone is unfrozen. Which next strategy provides the best balance?",
    "options": [
      "Unfreeze only upper backbone blocks, use a smaller learning rate, and retain suitable augmentation",
      "Keep every backbone block frozen, increase only the head learning rate, and remove augmentation",
      "Unfreeze the entire backbone, increase the learning rate, and reduce regularisation",
      "Reinitialise the entire backbone, freeze the classifier head, and train from scratch"
    ],
    "correct": 0,
    "explanation": "When a frozen model underfits (lacks capacity for target domain nuances) and a fully unfrozen model overfits (too many trainable parameters for a small dataset), the ideal sweet spot is partial fine-tuning: keep early layers frozen, unfreeze only the upper backbone blocks, use a reduced learning rate to prevent large weight drifts, and maintain data augmentation to regularize training.",
    "theory": {
      "title": "Balancing Capacity and Regularization in Fine-Tuning",
      "what_is_it": "A fine-tuning trade-off balancing model expressivity against sample efficiency.\n\n• Fully Frozen: Low variance, high bias (underfitting risk if target domain differs).\n• Fully Unfrozen: High variance, low bias (overfitting risk on small datasets).\n• Top-K Layer Fine-Tuning: Optimal bias-variance balance.",
      "why_we_need_it": "Enables deploying massive models (ResNet-50, ViT) on specialized small datasets (e.g. 500 medical biopsy images).",
      "how_it_works": "1. Freeze layers 1 through L-k.\n2. Unfreeze top k layers.\n3. Apply strong data augmentation (mixup, RandAugment).\n4. Train with learning rate warmup and cosine decay.",
      "formula": "Loss = L_CE(y, ŷ) + λ · ||W_unfrozen||₂²",
      "key_takeaways": [
        "Partial fine-tuning (top blocks only) provides the ideal compromise between underfitting and overfitting.",
        "Data augmentation is crucial when unfreezing backbone layers on small target datasets.",
        "Early layers should remain frozen as they contain general low-level visual primitives."
      ]
    },
    "sample_questions": [
      {
        "q": "When fine-tuning on a small dataset, what is the primary risk of unfreezing all layers of a deep pre-trained CNN?",
        "options": [
          "The model will overfit rapidly due to having too many trainable parameters relative to dataset size",
          "The model will underfit and refuse to update weights",
          "The GPU will run out of integer precision",
          "All convolution filters will convert to linear perceptrons"
        ],
        "ans": "The model will overfit rapidly due to having too many trainable parameters relative to dataset size",
        "exp": "With small sample sizes, updating millions of backbone weights allows the model to memorize the training samples rather than generalize."
      },
      {
        "q": "Which technique helps prevent overfitting when fine-tuning upper backbone layers?",
        "options": [
          "Data augmentation and weight decay (L2 regularization)",
          "Removing all dropout layers",
          "Increasing the learning rate 100x",
          "Initializing all weights to zero"
        ],
        "ans": "Data augmentation and weight decay (L2 regularization)",
        "exp": "Augmentation expands data variability and weight decay penalizes large weight magnitudes, effectively combating overfitting."
      }
    ]
  },
  {
    "id": "st1_q16",
    "module_id": "st1_mod14",
    "module_name": "Module 14: Self-Attention & Scaled Dot-Product Attention",
    "syllabus_lec": "Lectures 24–25",
    "topic": "Self-Attention Mechanism / Softmax Weights",
    "difficulty": "Medium",
    "points": 1,
    "question": "In self-attention, a query at one token has a much larger similarity score with the key of token j than with other keys. What is the most direct consequence after softmax?",
    "options": [
      "Token j's value receives a larger contribution weight",
      "Token j's query replaces the current token's query",
      "Token j's key is added directly to the output vector",
      "Token j's positional encoding is removed from the sequence"
    ],
    "correct": 0,
    "explanation": "In self-attention, attention scores α_ij = Softmax((q_i · k_j) / √d_k) determine how much weight is assigned to each Value vector v_j when constructing the contextual output representation: Output_i = ∑ α_ij · v_j. A higher similarity score with key k_j produces a larger Softmax weight α_ij, causing token j's Value vector v_j to dominate the weighted sum.",
    "theory": {
      "title": "Self-Attention Mechanism & Query-Key-Value Dynamic Routing",
      "what_is_it": "Self-attention computes dynamic, data-dependent weighted aggregations of sequence representations where every token routes information from all other tokens in parallel based on semantic compatibility.\n\n💡 Beginner Intuition:\nImagine a classroom discussion. Each student has a question they want answered (Query), a badge describing their areas of expertise (Key), and the actual textbook knowledge they can share (Value). When a question is asked, it is compared against all badges to determine who has the relevant answer, and the most relevant textbook passages are weighted and combined.\n\n🚀 Real-World AI Use Case:\nForms the core information-routing backbone of modern foundation models (GPT-4, Gemini, Claude, LLaMA), enabling context-dependent word disambiguation (e.g. knowing whether 'bank' refers to a financial institution or a river edge based on surrounding sentence tokens).",
      "why_we_need_it": "Unlike RNNs that process tokens sequentially through an informational bottleneck, self-attention provides direct O(1) path lengths between any two tokens in the sequence, completely eliminating vanishing gradients over long spans.",
      "how_it_works": "• Step 1: Compute pairwise similarity scores between all Queries and Keys: S = Q · Kᵀ / √d_k.\n• Step 2: Apply Softmax row-wise across the score matrix to generate normalized non-negative attention distribution weights α summing to 1.0.\n• Step 3: Compute output representation as linear combination of Value vectors: Output = α · V.",
      "formula": "\\text{Attention}(Q, K, V) = \\text{softmax}\\left( \\frac{QK^T}{\\sqrt{d_k}} \\right) V",
      "key_takeaways": [
        "Query vectors represent what a token searches for; Key vectors represent what each token offers; Value vectors contain the actual semantic content.",
        "Softmax ensures all attention weights across a sequence row are non-negative and sum to exactly 1.0 (100%).",
        "Self-attention achieves constant O(1) path length for long-range dependency routing across sequences."
      ]
    },
    "sample_questions": [
      {
        "q": "In the self-attention formula Attention(Q, K, V) = Softmax(QKᵀ / √d_k) V, what role does the Value matrix V play?",
        "options": [
          "It provides the semantic content vectors that are weighted and summed to form the output",
          "It computes the similarity angles between tokens",
          "It masks out future padding tokens",
          "It scales down the variance to prevent vanishing gradients"
        ],
        "ans": "It provides the semantic content vectors that are weighted and summed to form the output",
        "exp": "The Softmax matrix provides the percentage weights, while the Value matrix V contains the content vectors being aggregated."
      },
      {
        "q": "If query 1 has attention weights [0.1, 0.8, 0.1] over values [v1, v2, v3], what is the output vector?",
        "options": [
          "0.1*v1 + 0.8*v2 + 0.1*v3",
          "v2 only",
          "v1 + v2 + v3",
          "0.8 * (v1 + v3)"
        ],
        "ans": "0.1*v1 + 0.8*v2 + 0.1*v3",
        "exp": "The output is the linear combination of value vectors weighted by their Softmax attention probabilities."
      }
    ]
  },
  {
    "id": "st1_q17",
    "module_id": "st1_mod14",
    "module_name": "Module 14: Self-Attention & Scaled Dot-Product Attention",
    "syllabus_lec": "Lectures 24–25",
    "topic": "Padding Mask in Sequence Models",
    "difficulty": "Medium",
    "points": 1,
    "question": "An encoder processes batches of sequences padded to a common length. Which masking choice prevents padded positions from influencing representations of real tokens?",
    "options": [
      "Mask only positions occurring after the current token",
      "Mask the key positions corresponding to padding tokens",
      "Mask every token having the same embedding as padding tokens",
      "Mask the query positions corresponding to all non-padding tokens"
    ],
    "correct": 1,
    "explanation": "In batched sequence processing, shorter sequences are padded with dummy [PAD] tokens to reach equal length. To prevent real tokens from attending to dummy padding positions, the attention logits corresponding to padding Keys are set to -∞ before Softmax. Because e^-∞ = 0, padding tokens receive exactly 0.0 Softmax attention weight, preventing their Value vectors from contaminating the contextual representations of real tokens.",
    "theory": {
      "title": "Padding Masks & Attention Logit Masking Mechanics",
      "what_is_it": "Padding masks prevent non-content filler tokens ([PAD]) in variable-length batches from receiving attention weights or contaminating representations of genuine contextual tokens.\n\n💡 Beginner Intuition:\nImagine grading a stack of exam sheets where short essays are padded with blank lines to match the thickness of long essays. A padding mask is like placing an opaque black cardboard strip over the blank lines so the grader never reads or assigns marks to empty space.\n\n🚀 Real-World AI Use Case:\nRequired in BERT, RoBERTa, T5, and transformer batch inference where sentences of different token lengths are padded to the maximum batch length for parallel GPU tensor processing.",
      "why_we_need_it": "Without padding masks, the Softmax exponent exp(z) would assign positive non-zero probabilities (e.g. 5-10%) to useless [PAD] tokens, corrupting sentence contextual embeddings with empty token noise.",
      "how_it_works": "• Step 1: Query-Key raw score matrix S = (Q · Kᵀ) / √d_k is computed with shape (Batch, Heads, N, N).\n• Step 2: Construct binary mask where M[i, j] = 0 for valid content keys and -1e9 (-∞) for [PAD] keys.\n• Step 3: Add mask to logits: S_masked = S + M. Real tokens keep their raw scores; [PAD] entries become -1e9.\n• Step 4: Apply Softmax: exp(-1e9) ≈ 0.0, ensuring [PAD] columns receive exactly 0.0% attention probability.",
      "formula": "\\text{Attention}(Q, K, V) = \\text{softmax}\\left( \\frac{QK^T}{\\sqrt{d_k}} + M_{\\text{pad}} \\right) V, \\quad M_{\\text{pad}}[i, j] = \\begin{cases} 0 & \\text{if token } j \\text{ is valid} \\\\ -\\infty & \\text{if token } j \\text{ is [PAD]} \\end{cases}",
      "key_takeaways": [
        "Masking is applied to Key columns before Softmax to ensure Query tokens never route attention to padding positions.",
        "Logit replacement with -∞ (or -1e9 in float32) guarantees zero probability after Softmax exponentiation.",
        "Padding masks handle variable sequence lengths, unlike causal masks which enforce unidirectional autoregression."
      ]
    },
    "sample_questions": [
      {
        "q": "What numerical value is added to padding token logits in the attention matrix before Softmax?",
        "options": [
          "-∞ (or a very large negative number like -1e9)",
          "0",
          "+1.0",
          "NaN"
        ],
        "ans": "-∞ (or a very large negative number like -1e9)",
        "exp": "Adding -∞ ensures exp(-∞) = 0 in the Softmax numerator, resulting in exactly 0 attention probability."
      },
      {
        "q": "What is the primary purpose of a padding mask in a Transformer encoder?",
        "options": [
          "To prevent dummy padding tokens from contributing to the representations of real tokens",
          "To enforce left-to-right unidirectional generation",
          "To normalize weights across the batch",
          "To calculate cross-entropy loss"
        ],
        "ans": "To prevent dummy padding tokens from contributing to the representations of real tokens",
        "exp": "Padding masks isolate real tokens from dummy tokens used to align batch sequence lengths."
      }
    ]
  },
  {
    "id": "st1_q37",
    "module_id": "st1_mod14",
    "module_name": "Module 14: Self-Attention & Scaled Dot-Product Attention",
    "syllabus_lec": "Lectures 24–25",
    "topic": "Scaled Dot-Product Attention Softmax Computation",
    "difficulty": "Hard",
    "points": 1,
    "question": "For one attention query, the scaled logits for two keys differ by 0.707 in favour of key 2. Using e^0.707 ≈ 2.03, what softmax weight is assigned approximately to key 2?",
    "options": [
      "0.33",
      "0.50",
      "0.67",
      "0.73"
    ],
    "correct": 2,
    "explanation": "Let the scaled logits be s1 and s2, with s2 - s1 = 0.707. Using translation invariance, subtract s1 from both logits: z1 = 0, z2 = 0.707. Exponentiating: exp(z1) = exp(0) = 1.0, and exp(z2) = exp(0.707) ≈ 2.03. Sum of exponentials = 1.0 + 2.03 = 3.03. Softmax weight for key 2: p2 = exp(z2) / Sum = 2.03 / 3.03 ≈ 0.67 (67%). Softmax weight for key 1: p1 = 1.0 / 3.03 ≈ 0.33 (33%).",
    "theory": {
      "title": "Analytical Softmax Probability Derivation from Scaled Logits",
      "what_is_it": "Computing closed-form Softmax probabilities directly from logit differences highlights that Softmax is strictly translation invariant and depends entirely on relative score differences rather than absolute logit values.\n\n💡 Beginner Intuition:\nImagine a 2-horse race. The winning probability depends solely on how many metres one horse is ahead of the other (the lead margin Δs), not whether the race takes place at sea level or on top of Mount Everest (an additive baseline shift).\n\n🚀 Real-World AI Use Case:\nUnderpins log-odds ratios and contrastive temperature tuning in modern LLM generation and scaled dot-product attention routing.",
      "why_we_need_it": "Proves why attention distributions remain stable when constant offsets are added to logits, and demonstrates that a logit advantage of ~0.707 produces approximately a 2:1 attention routing ratio (67% vs 33%).",
      "how_it_works": "• Step 1: Let logits for key 1 and key 2 be s_1 and s_2 = s_1 + 0.707.\n• Step 2: Compute Softmax for key 2: P_2 = exp(s_2) / (exp(s_1) + exp(s_2)).\n• Step 3: Divide numerator and denominator by exp(s_1): P_2 = exp(s_2 - s_1) / (1 + exp(s_2 - s_1)).\n• Step 4: Substitute Δs = 0.707 and exp(0.707) ≈ 2.03: P_2 = 2.03 / (1 + 2.03) = 2.03 / 3.03 ≈ 0.670 (67.0%).\n• Step 5: By conservation of probability: P_1 = 1 - 0.670 = 0.330 (33.0%).",
      "formula": "P(k_2) = \\frac{e^{s_2}}{e^{s_1} + e^{s_2}} = \\frac{1}{1 + e^{-(s_2 - s_1)}} = \\sigma(s_2 - s_1)",
      "key_takeaways": [
        "In any 2-item comparison, Softmax reduces mathematically to the Sigmoid function of the logit difference: P_2 = σ(s_2 - s_1).",
        "Softmax is translation invariant: adding any constant C to all logits leaves output probabilities completely unchanged.",
        "A logit difference of Δs ≈ 0.707 yields a ~2:1 probability ratio (~67% vs ~33%)."
      ]
    },
    "sample_questions": [
      {
        "q": "If scaled attention logits for two keys are s1 = 3.0 and s2 = 3.0, what attention weight does key 2 receive?",
        "options": [
          "0.50 (50%)",
          "1.00 (100%)",
          "0.00 (0%)",
          "0.75 (75%)"
        ],
        "ans": "0.50 (50%)",
        "exp": "When logits are equal (difference = 0), Softmax divides probability equally: exp(3)/(exp(3)+exp(3)) = 1/2 = 0.50."
      },
      {
        "q": "If key 2 has logit 4.0 and key 1 has logit 0.0, why does key 2 receive almost 98% of the attention?",
        "options": [
          "Because e^4 ≈ 54.6, so p2 = 54.6 / (1 + 54.6) ≈ 0.982",
          "Because attention ignores the lower logit",
          "Because division by √d_k is skipped",
          "Because key 1 is masked with -∞"
        ],
        "ans": "Because e^4 ≈ 54.6, so p2 = 54.6 / (1 + 54.6) ≈ 0.982",
        "exp": "Softmax exponentiates differences: a logit lead of 4.0 yields an exponential ratio of ~55:1."
      }
    ]
  },
  {
    "id": "st1_q39",
    "module_id": "st1_mod14",
    "module_name": "Module 14: Self-Attention & Scaled Dot-Product Attention",
    "syllabus_lec": "Lectures 24–25",
    "topic": "Quadratic Scaling Complexity (O(N^2)) of Self-Attention",
    "difficulty": "Medium",
    "points": 1,
    "question": "The sequence length entering full self-attention increases from 128 to 256 while head dimension and number of heads remain unchanged. By what factor does the number of attention-score entries increase?",
    "options": [
      "2",
      "4",
      "8",
      "16"
    ],
    "correct": 1,
    "explanation": "Self-attention computes an N × N attention score matrix for every attention head (since every token attends to every token). The number of score entries is proportional to N^2. When sequence length N doubles from 128 to 256 (a factor of 2x), the total number of attention score entries increases by (2)^2 = 4x.",
    "theory": {
      "title": "Quadratic Complexity O(N²) of Full Self-Attention & Context Scaling Limits",
      "what_is_it": "Full pairwise self-attention computes an interaction score between every token and every other token in a sequence of length N, resulting in both time complexity and memory consumption that scale quadratically with sequence length O(N²).\n\n💡 Beginner Intuition:\nImagine a party with N guests where every guest must introduce themselves to every other guest individually. If 10 guests attend, there are 10 × 10 = 100 handshakes. If the party grows to 1,000 guests, the number of handshakes explodes to 1,000,000 (100x increase in guests produces a 10,000x increase in interactions!).\n\n🚀 Real-World AI Use Case:\nExplains why expanding LLM context windows (e.g. from 4k to 128k tokens) required breakthroughs like FlashAttention (GPU tiling and kernel fusion) and RingAttention to prevent GPU VRAM from exploding quadratically.",
      "why_we_need_it": "Understanding O(N²) scaling is essential for memory profiling in deep sequence modeling. For an 8,192-token sequence, the raw attention matrix contains 67.1 million entries per head per layer, demanding careful optimization strategies.",
      "how_it_works": "• Step 1 (Score Matrix Computation): Multiplying Q (shape N × d_k) by Kᵀ (shape d_k × N) requires N × N × d_k operations, generating an N × N score matrix.\n• Step 2 (Softmax & Value Aggregation): Softmax over N × N logits followed by multiplication with V (shape N × d_v) takes another N × N × d_v operations.\n• Step 3 (Quadratic Law): If sequence length N doubles (2N), the score matrix quadruples in size ((2N)² = 4N²). If N multiplies by 10x, memory and FLOPs increase by 100x.",
      "formula": "\\text{Memory}(QK^T) = \\mathcal{O}(B \\times H \\times N^2), \\quad \\text{FLOPs} = 4 B H N^2 d",
      "key_takeaways": [
        "Self-attention memory and computation scale quadratically: doubling sequence length N increases compute/memory by 4×.",
        "The quadratic bottleneck resides in the N × N Query-Key attention score matrix.",
        "Techniques like FlashAttention, Linear Attention, and Windowed Local Attention were developed specifically to mitigate this O(N²) scaling limit."
      ]
    },
    "sample_questions": [
      {
        "q": "If sequence length in full self-attention increases by a factor of 3 (from 1,000 to 3,000 tokens), by what factor does the attention score matrix memory increase?",
        "options": [
          "9x",
          "3x",
          "6x",
          "27x"
        ],
        "ans": "9x",
        "exp": "Because memory is O(N^2), scaling N by 3 scales memory by 3^2 = 9x."
      },
      {
        "q": "What is the primary computational bottleneck of standard self-attention when processing long documents (N > 32,000)?",
        "options": [
          "O(N^2) quadratic memory and FLOP scaling of the N × N attention matrix",
          "Linear layer projections running out of weights",
          "Positional encodings resetting to zero",
          "Softmax dividing by zero"
        ],
        "ans": "O(N^2) quadratic memory and FLOP scaling of the N × N attention matrix",
        "exp": "The N × N attention matrix consumes quadratic GPU memory and computation as sequence length grows."
      }
    ]
  },
  {
    "id": "st1_q49",
    "module_id": "st1_mod6",
    "module_name": "Module 6: Hands-on: NumPy Implementation of Forward & Backward Passes",
    "syllabus_lec": "Lectures 8–10",
    "topic": "Vectorized Dense Layer Gradient Matrix Product in NumPy",
    "difficulty": "Medium",
    "points": 1,
    "question": "In a vectorized NumPy implementation of a Dense layer with input matrix X of shape (B, D_in) and weight matrix W of shape (D_in, D_out), how is the gradient with respect to weights dW computed given upstream gradient dZ of shape (B, D_out)?",
    "options": [
      "dW = np.dot(X.T, dZ) of shape (D_in, D_out)",
      "dW = np.dot(X, dZ.T) of shape (B, B)",
      "dW = X * dZ (element-wise multiplication)",
      "dW = np.dot(dZ, X.T) of shape (D_out, D_in)"
    ],
    "correct": 0,
    "explanation": "During backpropagation for a linear layer Z = X @ W + b: the gradient with respect to weights is dL/dW = X^T @ dL/dZ. In NumPy: np.dot(X.T, dZ). X.T has shape (D_in, B) and dZ has shape (B, D_out), producing dW of shape (D_in, D_out) matching the exact dimensions of weight matrix W.",
    "theory": {
      "title": "Matrix Calculus for Vectorized Backpropagation in NumPy",
      "what_is_it": "Vectorized backpropagation computes analytic gradients across entire mini-batches using high-performance matrix operations rather than slow Python loops.\n\n💡 Mental Model:\nDimension Matching Rule: The gradient of a loss scalar L with respect to any matrix W MUST have the exact same shape as W.",
      "why_we_need_it": "Vectorization compiles linear algebra into BLAS/LAPACK C libraries, speeding up neural network training by 100x–1000x compared to nested Python for-loops.",
      "how_it_works": "1. Forward pass: Z = np.dot(X, W) + b (shapes: (B, D_in) @ (D_in, D_out) -> (B, D_out)).\n2. Upstream gradient: dZ = dL/dZ (shape: (B, D_out)).\n3. Weight gradient: dW = np.dot(X.T, dZ) (shape: (D_in, B) @ (B, D_out) -> (D_in, D_out)).\n4. Bias gradient: db = np.sum(dZ, axis=0, keepdims=True) (shape: (1, D_out)).\n5. Input gradient for previous layer: dX = np.dot(dZ, W.T) (shape: (B, D_out) @ (D_out, D_in) -> (B, D_in)).",
      "formula": "\\frac{\\partial L}{\\partial W} = X^T \\cdot \\frac{\\partial L}{\\partial Z}, \\quad \\frac{\\partial L}{\\partial b} = \\sum_{i=1}^B \\frac{\\partial L}{\\partial z_i}, \\quad \\frac{\\partial L}{\\partial X} = \\frac{\\partial L}{\\partial Z} \\cdot W^T",
      "key_takeaways": [
        "The gradient dW always matches the shape of W: (D_in, D_out).",
        "The gradient db sums over the batch dimension axis=0 because bias is broadcast across all batch samples.",
        "The downstream gradient dX = dZ @ W^T is passed backward to preceding layers in the computational graph."
      ]
    },
    "sample_questions": [
      {
        "q": "If batch size B = 32, input features D_in = 100, and output neurons D_out = 10, what is the shape of np.dot(X.T, dZ)?",
        "options": [
          "(100, 10)",
          "(32, 32)",
          "(10, 100)",
          "(32, 10)"
        ],
        "ans": "(100, 10)",
        "exp": "X.T is (100, 32) and dZ is (32, 10). Matrix multiplication produces shape (100, 10), matching weight matrix W."
      },
      {
        "q": "Why must bias gradient db sum across axis=0 in NumPy?",
        "options": [
          "Because a single bias vector of length D_out was broadcast and added to all B rows in the mini-batch",
          "Because biases have zero gradient in backprop",
          "Because bias is multiplied by weights",
          "Because NumPy requires all gradients to be 1D vectors"
        ],
        "ans": "Because a single bias vector of length D_out was broadcast and added to all B rows in the mini-batch",
        "exp": "During the forward pass, b is broadcast across all B examples. By multivariable chain rule, its total gradient is the sum of contributions from all examples in the batch."
      }
    ]
  },
  {
    "id": "st1_q50",
    "module_id": "st1_mod6",
    "module_name": "Module 6: Hands-on: NumPy Implementation of Forward & Backward Passes",
    "syllabus_lec": "Lectures 8–10",
    "topic": "Vectorized ReLU Activation & Derivative Implementation",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the correct vectorized NumPy implementation for the forward pass and backward pass derivative of the Rectified Linear Unit (ReLU) activation function?",
    "options": [
      "Forward: A = np.maximum(0, Z) ; Backward: dZ = dA * (Z > 0)",
      "Forward: A = np.max(Z) ; Backward: dZ = np.ones_like(dA)",
      "Forward: A = 1 / (1 + np.exp(-Z)) ; Backward: dZ = A * (1 - A)",
      "Forward: A = np.clip(Z, -1, 1) ; Backward: dZ = dA * (Z != 0)"
    ],
    "correct": 0,
    "explanation": "In NumPy, ReLU is computed element-wise as np.maximum(0, Z) (clamping negative numbers to 0). For the backward pass, the derivative of ReLU is 1 if Z > 0 and 0 if Z <= 0. By chain rule: dL/dZ = (dL/dA) * (dReLU/dZ) = dA * (Z > 0).",
    "theory": {
      "title": "NumPy Implementation of Activation Functions & Elementwise Derivatives",
      "what_is_it": "Implementing non-linear transformation layers and masking upstream gradients using boolean index arrays in NumPy.\n\n💡 Mental Model:\nA one-way diode gate: allows positive signals to pass with slope 1.0, and completely shuts off negative signals with slope 0.0.",
      "why_we_need_it": "ReLU is the foundational default activation function for deep feed-forward and convolutional neural networks due to its linear gradient behavior for positive values.",
      "how_it_works": "• Forward: Every element z_ij is replaced with max(0, z_ij).\n• Backward: (Z > 0) evaluates to a boolean matrix of True/False. In arithmetic multiplication with dA, True acts as 1.0 and False acts as 0.0, zeroing out gradients for all inactive units.",
      "formula": "A = \\max(0, Z), \\quad \\frac{\\partial L}{\\partial Z} = \\frac{\\partial L}{\\partial A} \\odot \\mathbb{I}(Z > 0)",
      "key_takeaways": [
        "np.maximum(0, Z) is element-wise, whereas np.max(Z) computes the global scalar maximum.",
        "Gradient masking via boolean arrays (Z > 0) is computationally instantaneous in NumPy.",
        "If Z <= 0, the neuron is 'dead' and blocks gradient propagation backwards to earlier layers."
      ]
    },
    "sample_questions": [
      {
        "q": "If pre-activation array Z = np.array([-2.0, 0.0, 3.5]) and upstream gradient dA = np.array([1.0, 1.0, 1.0]), what is dZ?",
        "options": [
          "np.array([0.0, 0.0, 1.0])",
          "np.array([-2.0, 0.0, 3.5])",
          "np.array([1.0, 1.0, 1.0])",
          "np.array([0.0, 1.0, 1.0])"
        ],
        "ans": "np.array([0.0, 0.0, 1.0])",
        "exp": "Z > 0 yields [False, False, True]. Multiplying dA * [False, False, True] produces [0.0, 0.0, 1.0]."
      },
      {
        "q": "Why does np.maximum(0, Z) execute faster than Python list comprehension [max(0, x) for x in Z]?",
        "options": [
          "np.maximum utilizes SIMD vector CPU instructions and contiguous C memory buffers",
          "List comprehensions convert numbers to strings",
          "NumPy automatically offloads all arrays to TPU",
          "Python lists ignore negative numbers"
        ],
        "ans": "np.maximum utilizes SIMD vector CPU instructions and contiguous C memory buffers",
        "exp": "NumPy arrays are stored in contiguous memory blocks and compiled with low-level SIMD (Single Instruction Multiple Data) processor instructions."
      }
    ]
  },
  {
    "id": "st1_q46",
    "module_id": "st1_mod12",
    "module_name": "Module 12: Hands-on: Building Image Classifiers with PyTorch",
    "syllabus_lec": "Lectures 20–21",
    "topic": "PyTorch Training Loop Mechanics: Gradient Zeroing & Optimization Step",
    "difficulty": "Medium",
    "points": 1,
    "question": "In a standard PyTorch CNN training loop, why is optimizer.zero_grad() explicitly called before loss.backward() in every training iteration?",
    "options": [
      "PyTorch accumulates gradients in parameter .grad buffers by default, so zeroing prevents stale gradients from previous mini-batches from compounding",
      "It resets model weights to zero to ensure uniform weight distribution",
      "It clears GPU VRAM cache allocated by CUDA kernels",
      "It disables dropout layers during backpropagation"
    ],
    "correct": 0,
    "explanation": "In PyTorch, calling loss.backward() adds newly computed gradients to existing parameter .grad tensors (accumulative behavior: param.grad += grad). Therefore, optimizer.zero_grad() must be called before backward() to clear out the gradient buffers from the previous mini-batch, ensuring each weight update uses only current batch gradients.",
    "theory": {
      "title": "PyTorch Autograd & The Canonical 5-Step Training Loop",
      "what_is_it": "The standardized 5-step optimization pattern executed for every mini-batch in PyTorch deep learning pipelines.\n\n💡 Mental Model:\nA clean chalkboard: Before solving the next math problem (computing new batch gradients), you must erase previous chalk marks (zero_grad), otherwise answers mix together!",
      "why_we_need_it": "Gradient accumulation is intentionally supported in PyTorch (e.g., simulating larger batch sizes across multiple forward-backward passes), requiring explicit user clearing.",
      "how_it_works": "The 5 Canonical Steps:\n1. optimizer.zero_grad() -> Clears old .grad tensors.\n2. outputs = model(inputs) -> Executes forward pass.\n3. loss = criterion(outputs, labels) -> Computes scalar loss.\n4. loss.backward() -> Autograd traverses computation graph and computes dLoss/dWeight.\n5. optimizer.step() -> Updates weights via w = w - η · w.grad.",
      "formula": "\\text{Step 1: } \\nabla_W L = 0, \\quad \\text{Step 4: } \\nabla_W L = \\frac{\\partial L}{\\partial W}, \\quad \\text{Step 5: } W \\leftarrow W - \\eta \\cdot \\nabla_W L",
      "key_takeaways": [
        "Omitting optimizer.zero_grad() causes gradients from successive mini-batches to sum up, leading to exploding gradient updates.",
        "loss.backward() computes gradients; optimizer.step() applies the optimizer rule (SGD/Adam) to update parameters.",
        "Always call model.train() before training and model.eval() before validation."
      ]
    },
    "sample_questions": [
      {
        "q": "What happens if a developer accidentally forgets to write optimizer.zero_grad() in their PyTorch training loop?",
        "options": [
          "Gradients will accumulate across batches, causing learning rates to effectively multiply and optimization to diverge",
          "The code throws a syntax error on loss.backward()",
          "The model achieves 100% accuracy in epoch 1",
          "Weights remain completely frozen and never update"
        ],
        "ans": "Gradients will accumulate across batches, causing learning rates to effectively multiply and optimization to diverge",
        "exp": "Without zero_grad(), param.grad contains the sum of all past batch gradients, causing massive step updates and divergence."
      },
      {
        "q": "Which method in PyTorch performs the actual weight update W = W - η * W.grad?",
        "options": [
          "optimizer.step()",
          "loss.backward()",
          "model.forward()",
          "torch.autograd.grad()"
        ],
        "ans": "optimizer.step()",
        "exp": "optimizer.step() iterates over model parameters and applies the optimizer's update rule using their accumulated .grad values."
      }
    ]
  },
  {
    "id": "st1_q47",
    "module_id": "st1_mod12",
    "module_name": "Module 12: Hands-on: Building Image Classifiers with PyTorch",
    "syllabus_lec": "Lectures 20–21",
    "topic": "PyTorch nn.CrossEntropyLoss Input Format & Numerical Stability",
    "difficulty": "Medium",
    "points": 1,
    "question": "When training a multi-class image classifier in PyTorch using nn.CrossEntropyLoss(), what format should the model's forward pass output and target tensor have?",
    "options": [
      "Raw unnormalized logits of shape (N, C) without Softmax in the model, and 1D integer class indices of shape (N)",
      "Softmax probability distributions of shape (N, C) and one-hot encoded float targets of shape (N, C)",
      "Sigmoid activations between 0 and 1 with binary target masks",
      "Normalized embeddings with cosine distance loss"
    ],
    "correct": 0,
    "explanation": "PyTorch's nn.CrossEntropyLoss() internally combines nn.LogSoftmax() and nn.NLLLoss() into a single numerically stable kernel using the log-sum-exp trick. Therefore, the network's final layer must output raw, unnormalized logits of shape (N, C) (do NOT include nn.Softmax in the forward pass), and target labels must be 1D class indices (0 to C-1) of shape (N).",
    "theory": {
      "title": "Log-Sum-Exp Trick & Numerical Stability in PyTorch Loss Functions",
      "what_is_it": "Designing neural network output layers to work seamlessly with fused loss functions for multi-class classification.\n\n💡 Mental Model:\nRaw scores directly into the scorer: Let the loss function handle the probability conversion internally so it can avoid dividing by tiny float fractions.",
      "why_we_need_it": "Computing Softmax followed by Logarithm (log(Softmax(z))) causes floating-point underflow when probabilities approach zero. Fused Log-Sum-Exp solves this completely.",
      "how_it_works": "• Model output: Final layer is nn.Linear(in_features, num_classes) without activation -> outputs logits z.\n• Target format: torch.tensor([2, 0, 1, 3], dtype=torch.long) (integer class IDs).\n• Loss evaluation: loss = criterion(logits, targets).",
      "formula": "\\text{Loss}(z, y) = -z_y + \\log\\left(\\sum_{j=1}^C e^{z_j}\\right)",
      "key_takeaways": [
        "Never add nn.Softmax() at the end of a PyTorch network when using nn.CrossEntropyLoss().",
        "Target labels for nn.CrossEntropyLoss() must have data type torch.long (integer IDs, not one-hot).",
        "During test-time inference, use torch.softmax(logits, dim=1) if predicted class percentages are required."
      ]
    },
    "sample_questions": [
      {
        "q": "What fatal numerical bug occurs if you put an explicit nn.Softmax(dim=1) layer at the end of a PyTorch network and feed it to nn.CrossEntropyLoss()?",
        "options": [
          "Double Softmax is applied: loss takes log(Softmax(Softmax(z))), causing severely corrupted gradients and underflow",
          "CUDA automatically corrects it without any performance impact",
          "The model trains twice as fast",
          "Target labels convert to one-hot vectors"
        ],
        "ans": "Double Softmax is applied: loss takes log(Softmax(Softmax(z))), causing severely corrupted gradients and underflow",
        "exp": "CrossEntropyLoss expects raw logits. Feeding it probabilities causes double softmax exponentiation, degrading learning."
      },
      {
        "q": "For a batch of 16 images across 10 classes, what is the shape of logits and targets for nn.CrossEntropyLoss?",
        "options": [
          "logits: (16, 10), targets: (16)",
          "logits: (16, 10), targets: (16, 10)",
          "logits: (16), targets: (16, 10)",
          "logits: (10, 16), targets: (16)"
        ],
        "ans": "logits: (16, 10), targets: (16)",
        "exp": "Logits shape is (Batch, Classes) = (16, 10) and targets shape is (Batch) = (16) holding class integer IDs."
      }
    ]
  },
  {
    "id": "st1_q48",
    "module_id": "st1_mod12",
    "module_name": "Module 12: Hands-on: Building Image Classifiers with PyTorch",
    "syllabus_lec": "Lectures 20–21",
    "topic": "Evaluation Mode (model.eval()) & Inference Memory Optimization (torch.no_grad())",
    "difficulty": "Medium",
    "points": 1,
    "question": "During validation and inference of a PyTorch image classifier, why is it standard practice to combine model.eval() and 'with torch.no_grad():'?",
    "options": [
      "model.eval() configures Dropout and BatchNorm layers for deterministic inference, while torch.no_grad() disables autograd graph construction to save memory and compute",
      "model.eval() freezes model weights to disk permanently",
      "torch.no_grad() converts Python code to C++ binaries",
      "model.eval() and torch.no_grad() are 100% identical and redundant"
    ],
    "correct": 0,
    "explanation": "model.eval() and torch.no_grad() serve two distinct, complementary purposes:\n1. model.eval(): Changes layer behaviors (disables Dropout and sets BatchNorm to use running dataset statistics rather than current batch statistics).\n2. torch.no_grad(): Disables the dynamic computation graph engine, preventing intermediate activation storage and cutting GPU memory consumption by ~60% while accelerating inference.",
    "theory": {
      "title": "Deterministic Inference & Autograd Memory Deactivation in PyTorch",
      "what_is_it": "Preparing trained deep neural networks for accurate, high-throughput validation and production serving.\n\n💡 Mental Model:\n1. model.eval() = Putting the factory in 'Quality Control' mode (stop dropping random parts).\n2. torch.no_grad() = Turning off the security cameras (don't record steps for playback/backprop).",
      "why_we_need_it": "Without model.eval(), validation accuracy fluctuates wildly due to active Dropout. Without torch.no_grad(), GPU runs out of VRAM due to cached activations.",
      "how_it_works": "• Syntax pattern:\n  model.eval()\n  with torch.no_grad():\n      for images, labels in val_loader:\n          outputs = model(images.to(device))\n          preds = outputs.argmax(dim=1)",
      "formula": "\\text{Memory Savings: } \\Delta \\text{VRAM} \\approx \\sum_{l=1}^L \\text{Size}(A^{(l)}) \\quad \\text{(Activation Graph Deletion)}",
      "key_takeaways": [
        "model.eval() does NOT disable gradient computation on its own; weights will still track gradients unless torch.no_grad() is wrapped around it.",
        "torch.no_grad() does NOT disable Dropout or adjust BatchNorm on its own; model.eval() must be called explicitly.",
        "Always switch back to model.train() when resuming training after a validation epoch."
      ]
    },
    "sample_questions": [
      {
        "q": "What happens if a developer evaluates a model with 50% Dropout without calling model.eval()?",
        "options": [
          "50% of the hidden units will continue to be randomly zeroed out during testing, causing degraded and erratic validation scores",
          "The model will crash with a CUDA out-of-memory error",
          "Dropout is automatically disabled by Python",
          "Predictions become 100% deterministic"
        ],
        "ans": "50% of the hidden units will continue to be randomly zeroed out during testing, causing degraded and erratic validation scores",
        "exp": "Unless model.eval() is called, nn.Dropout remains active in training mode, randomly turning off neurons during inference."
      },
      {
        "q": "Why does wrapping inference in 'with torch.no_grad():' prevent CUDA Out-of-Memory (OOM) errors on large test batches?",
        "options": [
          "It prevents PyTorch from storing forward pass activation tensors in memory for backpropagation",
          "It deletes all model weights from GPU memory",
          "It downsizes images to 16x16 resolution",
          "It switches GPU precision from float32 to binary 1-bit"
        ],
        "ans": "It prevents PyTorch from storing forward pass activation tensors in memory for backpropagation",
        "exp": "Autograd tracks all intermediate activations to compute gradients later. Disabling autograd immediately frees activation memory after forward execution."
      }
    ]
  },
  {
    "id": "st1_q51",
    "module_id": "st1_mod13",
    "module_name": "Module 13: Limitations of RNNs/CNNs with Attention Mechanism",
    "syllabus_lec": "Lectures 22–23",
    "topic": "Sequential Computation Bottleneck in Recurrent Neural Networks",
    "difficulty": "Medium",
    "points": 1,
    "question": "What is the fundamental architectural limitation that prevents standard Recurrent Neural Networks (RNNs/LSTMs) from fully exploiting massive parallel GPU hardware during training?",
    "options": [
      "Temporal recurrence: Hidden state h_t strictly depends on preceding state h_(t-1), enforcing sequential O(T) execution that cannot be parallelized across time steps",
      "RNNs require non-differentiable step activation functions",
      "Recurrent weight matrices are too large to fit in GPU SRAM memory",
      "RNNs cannot accept mini-batches larger than batch size 1"
    ],
    "correct": 0,
    "explanation": "Recurrent neural architectures process sequences step-by-step in temporal order: h_t = f(h_(t-1), x_t). Because time step t strictly requires the output of time step t-1, training cannot be parallelized across sequence length T. This linear O(T) temporal dependency creates a severe computational bottleneck on massively parallel hardware (GPUs/TPUs), directly motivating non-recurrent Transformer architectures.",
    "theory": {
      "title": "The Recurrence Bottleneck & Why Parallel Attention Replaced RNNs",
      "what_is_it": "Comparing sequential time-step execution (RNNs) with all-at-once parallel matrix multiplication (Transformers).\n\n💡 Mental Model:\n• RNN: A single chef preparing a 100-course meal one dish at a time in strict sequence (Dish 50 cannot start until Dish 49 finishes).\n• Transformer: 100 chefs working simultaneously in a massive kitchen, communicating instantly across all stations in parallel!",
      "why_we_need_it": "Training on billions of web tokens (LLMs) is impossible with sequential O(T) dependencies; parallelizability across the entire sequence length is mandatory.",
      "how_it_works": "• RNN Forward: t=1 -> t=2 -> ... -> t=T (Sequential chain: O(T) operations).\n• Transformer Forward: Q, K, V computed for ALL T tokens in a single matrix multiplication: O(1) parallel GPU operations with O(T^2) score matrix.",
      "formula": "\\text{RNN: } h_t = \\tanh(W_{hh} h_{t-1} + W_{xh} x_t + b) \\quad [\\text{Sequential } O(T)]",
      "key_takeaways": [
        "RNNs have O(T) sequential path length and cannot parallelize training over time steps.",
        "Transformers eliminate recurrence entirely, enabling full O(1) sequential training depth.",
        "Self-attention allows direct O(1) path length connection between any two distant words, solving long-range information loss."
      ]
    },
    "sample_questions": [
      {
        "q": "What is the maximum path length for information to flow between the first token and last token in a sequence of length T for (1) an RNN vs (2) a Transformer?",
        "options": [
          "RNN: O(T) sequential steps ; Transformer: O(1) direct self-attention path",
          "RNN: O(1) ; Transformer: O(T)",
          "Both have O(log T) path length",
          "RNN: O(T^2) ; Transformer: O(T^3)"
        ],
        "ans": "RNN: O(T) sequential steps ; Transformer: O(1) direct self-attention path",
        "exp": "In RNNs, signals must traverse T intermediate hidden states. In Transformers, every token directly attends to every other token in 1 step (O(1))."
      },
      {
        "q": "Why do standard RNNs suffer from vanishing and exploding gradients over long sequences (e.g. T > 100)?",
        "options": [
          "Repeated multiplication by weight matrix W_hh across T time steps causes gradients to scale as (W_hh)^T, decaying exponentially to zero or blowing up",
          "Because Softmax divides by sequence length T",
          "Because GPU float precision resets every 10 steps",
          "Because input words are shuffled randomly"
        ],
        "ans": "Repeated multiplication by weight matrix W_hh across T time steps causes gradients to scale as (W_hh)^T, decaying exponentially to zero or blowing up",
        "exp": "By backpropagation through time (BPTT), chain rule multiplies the recurrent Jacobian T times, yielding exponential gradient vanishing or explosion."
      }
    ]
  },
  {
    "id": "st1_q52",
    "module_id": "st1_mod13",
    "module_name": "Module 13: Limitations of RNNs/CNNs with Attention Mechanism",
    "syllabus_lec": "Lectures 22–23",
    "topic": "LSTM Gating Mechanisms & Additive Cell State Gradient Highway",
    "difficulty": "Hard",
    "points": 1,
    "question": "In a Long Short-Term Memory (LSTM) network, which architectural component acts as an additive gradient highway across time steps to alleviate the vanishing gradient problem?",
    "options": [
      "The Cell State (C_t) updated via linear additive operations: C_t = f_t ⊙ C_(t-1) + i_t ⊙ C̃_t",
      "The Hidden State (h_t) passed through repetitive non-linear tanh activations",
      "The Output Gate (o_t) scaling token embeddings",
      "The Softmax temperature normalizer"
    ],
    "correct": 0,
    "explanation": "LSTMs introduce a dedicated Cell State (C_t) that runs straight down the entire chain with only minor linear interactions. The update equation C_t = f_t * C_(t-1) + i_t * C̃_t uses additive linear accumulation rather than multiplicative matrix transformations. During backpropagation, gradients flow backwards along the cell state with minimal attenuation (acting like ResNet skip connections across time).",
    "theory": {
      "title": "LSTM Cell State & Gating Mathematics (Forget, Input, Output)",
      "what_is_it": "How gated recurrent networks regulate information retention and preserve long-term temporal dependencies.\n\n💡 Mental Model:\nA conveyor belt with three smart robotic arms:\n1. Forget Gate (f_t): Throws away useless past items.\n2. Input Gate (i_t): Places newly learned facts onto the belt.\n3. Output Gate (o_t): Reads filtered information from the belt to decide current actions.",
      "why_we_need_it": "Standard vanilla RNNs forget facts after 10–20 time steps. LSTMs can retain context across hundreds of time steps.",
      "how_it_works": "1. Forget gate: f_t = σ(W_f · [h_(t-1), x_t] + b_f).\n2. Input gate: i_t = σ(W_i · [h_(t-1), x_t] + b_i).\n3. Candidate state: C̃_t = tanh(W_c · [h_(t-1), x_t] + b_c).\n4. Cell state update: C_t = f_t ⊙ C_(t-1) + i_t ⊙ C̃_t (Additive!).\n5. Output gate: o_t = σ(W_o · [h_(t-1), x_t] + b_o).\n6. Hidden state: h_t = o_t ⊙ tanh(C_t).",
      "formula": "C_t = f_t \\odot C_{t-1} + i_t \\odot \\tilde{C}_t, \\quad h_t = o_t \\odot \\tanh(C_t)",
      "key_takeaways": [
        "The forget gate f_t uses Sigmoid (values 0 to 1): 0 = completely wipe past memory, 1 = completely keep past memory.",
        "The additive cell state update avoids exponential decay of gradients during Backpropagation Through Time (BPTT).",
        "GRUs (Gated Recurrent Units) simplify LSTMs by merging cell and hidden states into a single Reset and Update gate architecture."
      ]
    },
    "sample_questions": [
      {
        "q": "If the LSTM forget gate vector f_t is saturated with values close to 1.0, what happens to the previous cell state C_(t-1)?",
        "options": [
          "The previous memory C_(t-1) is preserved almost completely unaltered across the time step",
          "The entire cell state is erased to zero",
          "Gradients immediately explode to infinity",
          "The hidden state converts to one-hot vectors"
        ],
        "ans": "The previous memory C_(t-1) is preserved almost completely unaltered across the time step",
        "exp": "Because C_t = f_t * C_(t-1) + i_t * C̃_t, when f_t ≈ 1.0, 100% of the past memory passes through to the next time step."
      },
      {
        "q": "How many trainable gate matrices does a standard LSTM cell have compared to a GRU (Gated Recurrent Unit)?",
        "options": [
          "LSTM has 3 gates (Forget, Input, Output) + 1 candidate state ; GRU has 2 gates (Reset, Update)",
          "LSTM has 1 gate ; GRU has 4 gates",
          "Both have exactly 5 gates",
          "LSTM has 2 gates ; GRU has 0 gates"
        ],
        "ans": "LSTM has 3 gates (Forget, Input, Output) + 1 candidate state ; GRU has 2 gates (Reset, Update)",
        "exp": "LSTMs use 3 gating mechanisms (f, i, o) and candidate cell state, whereas GRUs streamline this into 2 gates (r, z)."
      }
    ]
  },
  {
    "id": "st1_q53",
    "module_id": "st1_mod11",
    "module_name": "Module 11: Transfer Learning with Pre-trained Models",
    "syllabus_lec": "Lectures 18–19",
    "topic": "Transfer Learning and Fine-Tuning Strategy",
    "difficulty": "Medium",
    "points": 1,
    "question": "What happens when a pre-trained model is fine-tuned for a new task?",
    "options": [
      "All weights are reinitialized",
      "Selected weights are updated",
      "Feature layers are removed",
      "All weights remain frozen"
    ],
    "correct": 1,
    "explanation": "In fine-tuning, the pre-trained backbone weights are not reinitialized from scratch or kept completely static. Instead, selected weights (such as upper feature extraction layers and newly attached task-specific classification heads) are iteratively updated with a small learning rate while early generic layers are typically kept frozen.",
    "theory": {
      "title": "Transfer Learning: Selective Parameter Adaptation & Layer Freezing",
      "what_is_it": "Fine-tuning is a transfer learning strategy where a model trained on a vast source dataset (like ImageNet with 1.4M images) is adapted to a new target domain by continuing gradient descent on a subset of its layers.\n\n💡 Beginner Intuition:\nImagine hiring an experienced concert pianist to learn jazz organ. You do not wipe their memory clean or teach them from middle C (reinitialization), nor do you tie their hands (freezing). You preserve their fundamental hand-eye coordination (early feature extractors) and gently adjust their technique for jazz chord progressions (selective fine-tuning of upper layers).",
      "why_we_need_it": "🎯 Problem it Solves / Core Insight:\nTraining modern deep neural networks from random initialization requires massive labeled datasets and substantial GPU compute. Without transfer learning, small datasets (e.g. 500 rare pathology scans) suffer severe overfitting. By updating only selected weights with small learning rates (η ≈ 10⁻⁵), we retain rich visual priors while specializing the model to downstream domain tasks.",
      "how_it_works": "• Step 1 (Backbone Initialization): Load weights W_pre trained on a large benchmark like ImageNet.\n• Step 2 (Head Replacement): Replace the final 1,000-class linear projection with a task-specific layer W_head ∈ ℝ^{d × C_target}.\n• Step 3 (Layer Freezing): Freeze early layers by setting `param.requires_grad = False` to preserve generic edge/texture detectors.\n• Step 4 (Differential Optimization): Apply a small learning rate (e.g. 10⁻⁵) to unfrozen upper convolutional blocks and a standard learning rate (e.g. 10⁻³) to the new classification head.",
      "formula": "\\theta_{\\text{target}} \\leftarrow \\theta_{\\text{pre}} - \\eta \\nabla_{\\theta} \\mathcal{L}_{\\text{target}}(x, y), \\quad \\text{where } \\eta \\ll \\eta_{\\text{scratch}}",
      "key_takeaways": [
        "Fine-tuning selectively adapts weights rather than wiping them clean or keeping all layers permanently locked.",
        "Early layers capture universal primitives (Gabor-like edges, color blobs); later layers capture task-specific semantics.",
        "A smaller learning rate prevents catastrophic forgetting of pre-trained feature representations."
      ]
    },
    "sample_questions": [
      {
        "q": "Why is a much smaller learning rate used when fine-tuning pre-trained backbone weights compared to training a new classifier head?",
        "options": [
          "To avoid destroying valuable pre-trained representations via catastrophic forgetting",
          "To force gradient descent to run in reverse",
          "To increase GPU VRAM consumption",
          "To convert the model into a decision tree"
        ],
        "ans": "To avoid destroying valuable pre-trained representations via catastrophic forgetting",
        "exp": "Large learning rates disrupt delicate pre-trained weight coordinates, erasing generic feature detectors."
      },
      {
        "q": "In PyTorch, how do you freeze a layer's parameters so they are excluded from backward gradient computation?",
        "options": [
          "param.requires_grad = False",
          "param.zero_grad()",
          "param.detach_layer()",
          "param.freeze = True"
        ],
        "ans": "param.requires_grad = False",
        "exp": "Setting requires_grad = False prevents PyTorch Autograd from tracking operations and accumulating gradients for that tensor."
      }
    ]
  },
  {
    "id": "st1_q54",
    "module_id": "st1_mod5",
    "module_name": "Module 5: Activation Functions & Loss Functions",
    "syllabus_lec": "Lecture 7",
    "topic": "Vanishing Gradient and Activation Saturation",
    "difficulty": "Hard",
    "points": 1,
    "question": "A deep MLP is trained for tabular risk prediction. After several epochs, training loss decreases very slowly even though the learning rate is reasonable. Layer inspection shows that many hidden activations are close to either 0 or 1 for most samples. Gradient norms become much smaller in earlier layers than in later layers. Weight updates near the input layer are almost negligible. Which diagnosis best explains this training behavior?",
    "options": [
      "Saturated activations reduce gradient flow through earlier hidden layers.",
      "Noisy activations preserve gradient flow through earlier hidden layers.",
      "Sparse activations increase gradient flow through earlier hidden layers.",
      "Wider activations stabilize gradient flow through earlier hidden layers."
    ],
    "correct": 0,
    "explanation": "When neurons use saturating activations like the standard Sigmoid σ(z), inputs with large magnitudes push activations to extreme tails (z ≫ 0 ⇒ σ(z) ≈ 1, z ≪ 0 ⇒ σ(z) ≈ 0). In these flat regions, the local derivative σ'(z) = σ(z)(1 - σ(z)) ≈ 0. When backpropagating through 10+ layers, multiplying these tiny local derivatives causes gradients to exponentially vanish in early layers.",
    "theory": {
      "title": "Activation Saturation & The Exponential Vanishing Gradient Bottleneck",
      "what_is_it": "Activation saturation occurs when neuron pre-activations land on the horizontal plateaus of activation functions (such as Sigmoid or Tanh), where slope (first derivative) approaches zero.\n\n💡 Beginner Intuition:\nImagine a chain of translators passing a message whisper by whisper. If each translator mutes the volume by 75% (multiplying by ≤ 0.25), by the time the message travels back through 10 translators, the sound volume is 0.25¹⁰ ≈ 10⁻⁶—a completely inaudible whisper. The first person in line never receives any instruction.",
      "why_we_need_it": "🎯 Problem it Solves / Core Insight:\nUnderstanding saturation explains why deep networks failed before 2012. If activations saturate, backpropagation multiplies negligible derivatives across layers: ∂L/∂z^[1] = (∂L/∂z^[L]) ∏_{l=2}^{L} (W^[l]ᵀ σ'(z^[l])). Replacing saturating activations with non-saturating functions like ReLU (whose derivative is exactly 1.0 for all z > 0) keeps the gradient highway wide open.",
      "how_it_works": "• Step 1: Pre-activation z = wᵀ x + b becomes large in magnitude (e.g. |z| > 5).\n• Step 2: Sigmoid evaluates to the flat saturated plateau: σ(5) ≈ 0.9933.\n• Step 3: Local derivative evaluates to near zero: σ'(5) = 0.9933 × (1 - 0.9933) = 0.0066.\n• Step 4: Backpropagation multiplies this factor at every layer: ΔW^[1] ∝ ∏_{l=1}^{L} σ'(z^[l]) ≈ 0.\n• Step 5: Input layer weights remain frozen, and training stalls completely.",
      "formula": "\\sigma'(z) = \\sigma(z)(1 - \\sigma(z)) \\le 0.25, \\quad \\lim_{|z| \\to \\infty} \\sigma'(z) = 0",
      "key_takeaways": [
        "Sigmoid's maximum derivative is only 0.25 at z = 0, causing exponential shrinkage across depth.",
        "Saturated activations lead to stagnant training in early representation layers.",
        "ReLU and Leaky ReLU prevent saturation by maintaining a constant unit derivative for positive pre-activations."
      ]
    },
    "sample_questions": [
      {
        "q": "What is the maximum theoretical derivative of the standard logistic Sigmoid function?",
        "options": [
          "0.25 (at z = 0)",
          "1.0 (at z = 1)",
          "0.5 (at z = 0.5)",
          "Infinity"
        ],
        "ans": "0.25 (at z = 0)",
        "exp": "At z = 0, sigma(0) = 0.5, so sigma'(0) = 0.5 * (1 - 0.5) = 0.25."
      },
      {
        "q": "Which activation function completely eliminates gradient vanishing for positive pre-activations?",
        "options": [
          "ReLU: f(z) = max(0, z)",
          "Sigmoid: f(z) = 1 / (1 + e^-z)",
          "Tanh: f(z) = (e^z - e^-z) / (e^z + e^-z)",
          "Step function"
        ],
        "ans": "ReLU: f(z) = max(0, z)",
        "exp": "For all z > 0, d/dz ReLU(z) = 1.0, preserving gradient magnitude through arbitrary depth."
      }
    ]
  },
  {
    "id": "st1_q55",
    "module_id": "st1_mod4",
    "module_name": "Module 4: Backpropagation Algorithm & Gradient Descent",
    "syllabus_lec": "Lectures 5–6",
    "topic": "Gradient Clipping Implementation using clip_grad_norm_",
    "difficulty": "Medium",
    "points": 1,
    "question": "A developer trains a deep neural network and notices that the loss suddenly becomes unstable after several iterations. During debugging, the gradient norms increase rapidly before each optimizer update, causing extremely large parameter changes. To improve training stability, the developer decides to limit the gradient magnitude before updating the model parameters. Which missing statement correctly prevents this optimization problem?",
    "options": [
      "torch.nn.utils.normalize_grad_(model.parameters(), max_norm)",
      "torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm)",
      "torch.nn.utils.scale_grad_(model.parameters(), max_norm)",
      "torch.nn.utils.average_grad_(model.parameters(), max_norm)"
    ],
    "correct": 1,
    "explanation": "In PyTorch, `torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm)` computes the total L2 norm of the model's parameter gradients and scales them down proportionally if the total norm exceeds `max_norm`. This directly mitigates exploding gradients without changing the direction of the optimization update vector.",
    "theory": {
      "title": "Exploding Gradients & Norm-Based Gradient Clipping",
      "what_is_it": "Gradient clipping is an optimization safeguard that caps the maximum length (L2 norm) of the gradient vector before taking a gradient descent step.\n\n💡 Beginner Intuition:\nImagine navigating down a steep mountain cliff. If you step strictly proportional to the slope's steepness, a sheer vertical cliff face will launch you thousands of feet off the mountain into oblivion (exploding gradients leading to NaN). Gradient clipping puts a governor on your stride: 'no matter how steep the cliff is, your maximum step size is capped at 1 meter.'",
      "why_we_need_it": "🎯 Problem it Solves / Core Insight:\nIn deep models (especially RNNs, deep CNNs, and Transformers), repeated matrix multiplications can cause gradient norms to surge to thousands (||g||₂ > 10⁴). A single unclipped step can catapult weights into catastrophic numerical overflow. Gradient clipping rescales gradients by max_norm / max(||g||₂, max_norm), preserving the descent direction while enforcing numerical safety.",
      "how_it_works": "• Step 1 (Loss Backward): Compute gradients: `loss.backward()` populates `.grad` on all parameters.\n• Step 2 (Compute Total Norm): Compute ||g||₂ = √(∑ᵢ ||gᵢ||₂²).\n• Step 3 (Check Threshold): If ||g||₂ > max_norm, calculate scaling factor α = max_norm / ||g||₂.\n• Step 4 (In-place Rescale): Multiply every parameter gradient by α: g ← g · α.\n• Step 5 (Optimizer Step): Call `optimizer.step()` using the safe, rescaled gradients.",
      "formula": "g \\leftarrow g \\cdot \\min\\left(1, \\frac{\\text{max\\_norm}}{\\|g\\|_2}\\right)",
      "key_takeaways": [
        "Gradient clipping addresses exploding gradients, not vanishing gradients.",
        "Norm clipping scales the vector magnitude while preserving its exact angular direction.",
        "`clip_grad_norm_` must be called after `loss.backward()` and before `optimizer.step()`."
      ]
    },
    "sample_questions": [
      {
        "q": "Where must `torch.nn.utils.clip_grad_norm_` be placed in a standard PyTorch training loop?",
        "options": [
          "Between loss.backward() and optimizer.step()",
          "Before loss.backward()",
          "After optimizer.step()",
          "Before model(inputs)"
        ],
        "ans": "Between loss.backward() and optimizer.step()",
        "exp": "Gradients must be computed by backward() before they can be inspected and clipped, and must be clipped before the optimizer applies them."
      },
      {
        "q": "If the total gradient norm is 10.0 and max_norm is set to 2.0, what happens to the gradients?",
        "options": [
          "All gradients are multiplied by 0.2 to rescale total norm to 2.0",
          "All gradients are set to 0.0",
          "Only the largest gradient is clipped to 2.0",
          "Training is aborted with an exception"
        ],
        "ans": "All gradients are multiplied by 0.2 to rescale total norm to 2.0",
        "exp": "The scaling factor is max_norm / norm = 2.0 / 10.0 = 0.2, shrinking the gradient vector uniformly."
      }
    ]
  },
  {
    "id": "st1_q56",
    "module_id": "st1_mod10",
    "module_name": "Module 10: Object Detection & Image Segmentation",
    "syllabus_lec": "Lectures 16–17",
    "topic": "Semantic Segmentation Definition and Pixel-Level Classification",
    "difficulty": "Easy",
    "points": 1,
    "question": "Which computer-vision task assigns a class label to every pixel in an image?",
    "options": [
      "Instance detection",
      "Image classification",
      "Semantic segmentation",
      "Object detection"
    ],
    "correct": 2,
    "explanation": "Semantic segmentation performs dense pixel-wise classification, assigning every individual pixel coordinate (x, y) in an image to a predefined semantic category (e.g. road, pedestrian, sky) without distinguishing between distinct individual object instances.",
    "theory": {
      "title": "Dense Prediction & Semantic Segmentation Fundamentals",
      "what_is_it": "Semantic segmentation is a dense visual prediction task where the output is a 2D segmentation map of the exact same spatial height and width as the input image, containing a categorical class label for every pixel.\n\n💡 Beginner Intuition:\nImagine coloring a coloring book with a paint-by-numbers key. Every single square millimeter of paper must be colored: sky pixels are painted blue, road pixels painted grey, tree pixels painted green. If three people stand together, they are all painted the identical red color (human), treated as a single collective category.",
      "why_we_need_it": "🎯 Problem it Solves / Core Insight:\nBounding box object detection only provides coarse rectangular approximations. For safety-critical systems like autonomous driving or robotic surgery, knowing a rectangle is insufficient; the car must know the exact boundary of the drivable road surface to within millimeters.",
      "how_it_works": "• Step 1: Input image of shape (C × H × W) enters an encoder-decoder network (like U-Net or DeepLab).\n• Step 2: Encoder downsamples spatial dimensions while learning deep semantic feature channels.\n• Step 3: Decoder upsamples spatial dimensions back to original (H × W) using transposed convolutions or bilinear interpolation.\n• Step 4: The final 1 × 1 conv produces logits of shape (C_classes × H × W).\n• Step 5: A Softmax across channel depth assigns each pixel to the argmax class.",
      "formula": "\\hat{Y}_{h, w} = \\arg\\max_{c \\in \\mathcal{C}} \\left[ \\text{softmax}(Z_{c, h, w}) \\right], \\quad Z \\in \\mathbb{R}^{C_{\\text{classes}} \\times H \\times W}",
      "key_takeaways": [
        "Semantic segmentation assigns every pixel to a category without distinguishing separate object instances.",
        "Instance segmentation goes one step further by differentiating distinct individual instances of the same class.",
        "Architectures typically employ encoder-decoder topologies with skip connections (e.g. U-Net, FCN)."
      ]
    },
    "sample_questions": [
      {
        "q": "What is the primary difference between Semantic Segmentation and Instance Segmentation?",
        "options": [
          "Semantic segmentation groups all objects of the same class together, while instance segmentation separates distinct individuals",
          "Semantic segmentation uses bounding boxes, while instance segmentation uses circles",
          "Semantic segmentation cannot run on GPUs",
          "Instance segmentation only classifies the entire image with one label"
        ],
        "ans": "Semantic segmentation groups all objects of the same class together, while instance segmentation separates distinct individuals",
        "exp": "Two adjacent cars share one mask category in semantic segmentation, but receive 'Car 1' and 'Car 2' masks in instance segmentation."
      },
      {
        "q": "If an input image is 256x256 and there are 10 classes, what is the output tensor shape of a semantic segmentation model before argmax?",
        "options": [
          "(10, 256, 256)",
          "(256, 256)",
          "(10, 1)",
          "(1, 10)"
        ],
        "ans": "(10, 256, 256)",
        "exp": "The model outputs class probability logits for every spatial coordinate, resulting in (C_classes, Height, Width)."
      }
    ]
  },
  {
    "id": "st1_q57",
    "module_id": "st1_mod3",
    "module_name": "Module 3: MLP Forward Pass & Network Representation",
    "syllabus_lec": "Lecture 4",
    "topic": "Weight Matrix Shape Representation in Dense Layers",
    "difficulty": "Easy",
    "points": 1,
    "question": "An MLP contains 4 input features and 3 neurons in its first hidden layer. How is the connection-weight matrix between these layers commonly represented?",
    "options": [
      "A matrix containing 3 × 4 weights",
      "A vector containing 3 loss values",
      "A matrix containing 3 × 3 biases",
      "A vector containing 4 activation values"
    ],
    "correct": 0,
    "explanation": "When calculating activations via z = W x + b where x ∈ ℝ^{4 × 1} and the layer output has 3 neurons (z ∈ ℝ^{3 × 1}), the linear algebra dimension requirement (3 × 1) = (r × c)(4 × 1) dictates that the weight matrix W must have shape 3 × 4 (3 rows corresponding to output neurons, 4 columns corresponding to input features).",
    "theory": {
      "title": "Dense Layer Affine Transformations & Weight Matrix Dimensionality",
      "what_is_it": "In a fully connected (dense) neural network layer, every input feature connects to every output neuron. The connection weights are arranged as a 2D matrix W.\n\n💡 Beginner Intuition:\nThink of a matrix as a conversion grid. You have 4 input ingredients and want to produce 3 different dishes. Each dish requires a recipe specifying how much of each of the 4 ingredients to use. The 3 recipes with 4 ingredients each form a 3 × 4 recipe table (weight matrix).",
      "why_we_need_it": "🎯 Problem it Solves / Core Insight:\nMatrix representation allows billions of individual scalar synaptic connections to be executed simultaneously as high-throughput General Matrix Multiplications (GEMM) on specialized tensor cores inside modern GPUs.",
      "how_it_works": "• Mathematical Convention: In z = W x + b:\n  - Input vector x ∈ ℝ^{n_in × 1} (here n_in = 4).\n  - Output vector z ∈ ℝ^{n_out × 1} (here n_out = 3).\n  - Dimension compatibility: (n_out × 1) = (n_out × n_in) × (n_in × 1).\n  - Weight matrix shape is 3 × 4.\n• PyTorch Transpose Convention: In PyTorch, `nn.Linear(4, 3)` stores the internal `.weight` parameter tensor as shape `(out_features, in_features) = (3, 4)` and computes x Wᵀ + b.",
      "formula": "z = W x + b, \\quad W \\in \\mathbb{R}^{n_{\\text{out}} \\times n_{\\text{in}}} = \\mathbb{R}^{3 \\times 4}, \\quad b \\in \\mathbb{R}^{3 \\times 1}",
      "key_takeaways": [
        "In W x + b, W has dimensions (number of output neurons) × (number of input features).",
        "Total scalar weight count is n_out × n_in = 3 × 4 = 12 weights.",
        "Plus 3 additive bias parameters (one per output neuron), totaling 12 + 3 = 15 trainable parameters."
      ]
    },
    "sample_questions": [
      {
        "q": "A dense layer connects 128 input features to 64 output neurons. How many total trainable parameters (weights + biases) does it contain?",
        "options": [
          "8,256 parameters (64 × 128 + 64)",
          "8,192 parameters",
          "192 parameters",
          "16,384 parameters"
        ],
        "ans": "8,256 parameters (64 × 128 + 64)",
        "exp": "Parameters = (64 * 128) weights + 64 biases = 8192 + 64 = 8,256."
      },
      {
        "q": "What is the shape of the weight tensor in PyTorch `nn.Linear(in_features=10, out_features=5)`?",
        "options": [
          "torch.Size([5, 10])",
          "torch.Size([10, 5])",
          "torch.Size([5])",
          "torch.Size([15])"
        ],
        "ans": "torch.Size([5, 10])",
        "exp": "PyTorch stores linear layer weights as (out_features, in_features)."
      }
    ]
  },
  {
    "id": "st1_q58",
    "module_id": "st1_mod5",
    "module_name": "Module 5: Activation Functions & Loss Functions",
    "syllabus_lec": "Lecture 7",
    "topic": "Softmax Output Activation Function for Multi-Class Classification",
    "difficulty": "Easy",
    "points": 1,
    "question": "A neural network assigns probabilities across multiple mutually exclusive classes. Which activation function is most suitable for its output layer?",
    "options": [
      "ReLU",
      "Softmax",
      "Tanh",
      "Sigmoid"
    ],
    "correct": 1,
    "explanation": "Softmax is specifically formulated for multi-class classification where classes are mutually exclusive. It exponentiates raw output logits and normalizes them by the sum of all exponentials, guaranteeing that all output values are strictly non-negative (0 ≤ p_i ≤ 1) and sum to exactly 1.0 (100%).",
    "theory": {
      "title": "Softmax Normalization & Categorical Probability Distributions",
      "what_is_it": "Softmax transforms an unconstrained vector of real-valued logits z ∈ ℝ^K into a valid categorical probability distribution.\n\n💡 Beginner Intuition:\nImagine 3 judges shouting scores: +4.0, +1.0, and -2.0. Softmax exponentiates the scores to turn negatives positive (e⁴ ≈ 54.6, e¹ ≈ 2.7, e⁻² ≈ 0.14), adds them up (57.44), and divides each by the sum. Now they represent exact market shares: 95.1%, 4.7%, and 0.2%, totaling exactly 100%.",
      "why_we_need_it": "🎯 Problem it Solves / Core Insight:\nRaw neural outputs (logits) are unbounded real numbers (-∞, +∞). Softmax provides a smooth, differentiable bridge connecting raw logits to Cross-Entropy Loss (-log p_target) enabling gradient descent backpropagation.",
      "how_it_works": "• Step 1 (Logit Vector): Output layer computes logits z = [z₁, z₂, ..., z_K].\n• Step 2 (Exponentiation): Compute e^{z_i} for each class (amplifies differences and eliminates negative numbers).\n• Step 3 (Normalization): Divide each exponential by the row sum ∑_{j=1}^K e^{z_j}.\n• Step 4 (Numerical Stability Shift): In practice, subtract max(z) first: Softmax(z) = Softmax(z - max(z)) to prevent floating point overflow.",
      "formula": "\\sigma(z)_i = \\frac{e^{z_i}}{\\sum_{j=1}^{K} e^{z_j}}, \\quad \\text{where } \\sum_{i=1}^{K} \\sigma(z)_i = 1.0",
      "key_takeaways": [
        "Softmax is used for multi-class mutually exclusive prediction.",
        "Sigmoid is used for binary or multi-label classification where classes are not mutually exclusive.",
        "Softmax is translation invariant: adding or subtracting a constant C to all logits leaves probabilities unchanged."
      ]
    },
    "sample_questions": [
      {
        "q": "Why is Sigmoid preferred over Softmax for multi-label image tagging (e.g. an image containing BOTH a dog and a car)?",
        "options": [
          "Softmax forces probabilities to sum to 1, while Sigmoid evaluates each class independently",
          "Softmax cannot compute gradients",
          "Sigmoid is faster than addition",
          "Softmax requires labels to be negative"
        ],
        "ans": "Softmax forces probabilities to sum to 1, while Sigmoid evaluates each class independently",
        "exp": "In multi-label classification, multiple classes can be simultaneously present; Softmax creates competition where boosting one suppresses others."
      },
      {
        "q": "If raw logits are [1000, 1000, 1000], what does a numerically stable Softmax implementation compute?",
        "options": [
          "[0.333, 0.333, 0.333]",
          "Overflow error (NaN)",
          "[1.0, 0.0, 0.0]",
          "[0.0, 0.0, 0.0]"
        ],
        "ans": "[0.333, 0.333, 0.333]",
        "exp": "Subtracting the max (1000) converts logits to [0, 0, 0], giving exp(0)/sum = 1/3 for each class."
      }
    ]
  },
  {
    "id": "st1_q59",
    "module_id": "st1_mod6",
    "module_name": "Module 6: Hands-on: NumPy Implementation",
    "syllabus_lec": "Lectures 8–10",
    "topic": "PyTorch Training Loop Loss Computation Step",
    "difficulty": "Medium",
    "points": 1,
    "question": "Which operation should be performed before loss.backward() in a PyTorch image-classification training loop?",
    "options": [
      "Save model",
      "Compute loss",
      "Clear gradients",
      "Clear weights"
    ],
    "correct": 1,
    "explanation": "In a PyTorch training pipeline, `loss.backward()` computes gradients of the scalar loss with respect to all graph leaf parameters. Therefore, the scalar loss tensor must be computed first via `loss = criterion(outputs, labels)` before `loss.backward()` can traverse the computational graph.",
    "theory": {
      "title": "Computational Graph Construction & PyTorch Loss Evaluation",
      "what_is_it": "In PyTorch's dynamic computational graph (Autograd), operations are recorded during the forward pass. Computing the loss provides the root scalar node from which backpropagation originates.\n\n💡 Beginner Intuition:\nImagine an archery contest. Before you can measure how far your arrow missed the bullseye (loss) and adjust your stance (backward pass), the arrow must actually hit the target (forward pass) and the distance to the center must be measured (compute loss). You cannot run error analysis on a shot that has not been evaluated.",
      "why_we_need_it": "🎯 Problem it Solves / Core Insight:\nCalling `loss.backward()` initiates reverse-mode automatic differentiation. Without computing `loss = criterion(outputs, labels)`, there is no scalar root node in Autograd, throwing a runtime error because gradients cannot be derived from non-existent errors.",
      "how_it_works": "• Step 1: `optimizer.zero_grad()` erases stale gradients from the previous iteration.\n• Step 2: `outputs = model(inputs)` performs the forward inference pass.\n• Step 3: `loss = criterion(outputs, labels)` evaluates model prediction error.\n• Step 4: `loss.backward()` propagates error gradients backwards through the computation graph.\n• Step 5: `optimizer.step()` updates trainable parameters using the computed gradients.",
      "formula": "\\mathcal{L} = \\text{criterion}(f(x; \\theta), y), \\quad \\nabla_\\theta \\mathcal{L} = \\frac{\\partial \\mathcal{L}}{\\partial \\theta} \\quad (\\text{via Autograd})",
      "key_takeaways": [
        "The canonical order is: forward pass -> compute loss -> loss.backward() -> optimizer.step().",
        "`loss.backward()` requires a single scalar tensor output.",
        "Clearing gradients (`zero_grad()`) is typically done at the beginning of each iteration or immediately before backward."
      ]
    },
    "sample_questions": [
      {
        "q": "What error occurs if you call `loss.backward()` on a tensor with shape `(32, 10)` without specifying gradient arguments?",
        "options": [
          "RuntimeError: grad can be implicitly created only for scalar outputs",
          "SyntaxError: invalid batch size",
          "ZeroDivisionError",
          "Compilation error"
        ],
        "ans": "RuntimeError: grad can be implicitly created only for scalar outputs",
        "exp": "backward() expects a scalar (0-dim tensor) root unless a gradient vector matching tensor dimensions is provided."
      },
      {
        "q": "What does `loss.item()` do in PyTorch?",
        "options": [
          "Extracts the scalar value from a 1-element loss tensor as a standard Python float",
          "Executes the backward pass",
          "Deletes the loss from GPU memory",
          "Resets the model parameters"
        ],
        "ans": "Extracts the scalar value from a 1-element loss tensor as a standard Python float",
        "exp": "item() extracts the plain Python number and detaches it from the Autograd graph to prevent memory leaks."
      }
    ]
  },
  {
    "id": "st1_q60",
    "module_id": "st1_mod7",
    "module_name": "Module 7: Convolutional Neural Networks (CNNs)",
    "syllabus_lec": "Lectures 11–12",
    "topic": "Pooling Layer Translation Invariance Property",
    "difficulty": "Medium",
    "points": 1,
    "question": "You are reviewing the architecture of a convolutional neural network used for image classification. During testing, you observe that the model correctly recognizes the same object even when it appears slightly shifted within the image. The network includes pooling layers after several convolution blocks, and no changes have been made to the convolution filters. Which conclusion best explains this behavior?",
    "options": [
      "Pooling removes all features and improves tolerance to small translations.",
      "Pooling summarizes local regions and improves tolerance to small translations.",
      "Pooling increases channel depth and improves tolerance to small translations.",
      "Pooling expands input resolution and improves tolerance to small translations."
    ],
    "correct": 1,
    "explanation": "Pooling layers (such as Max Pooling and Average Pooling) summarize local spatial neighborhoods (e.g. 2 × 2 pixel windows). If an edge or feature shifts by 1 or 2 pixels, the maximum value within that local window remains identical, conferring local translation invariance to the network.",
    "theory": {
      "title": "Spatial Pooling & Translation Invariance in CNNs",
      "what_is_it": "Pooling is a spatial downsampling operation that aggregates feature responses over small localized neighborhoods (e.g. 2 × 2 patch with stride 2).\n\n💡 Beginner Intuition:\nImagine checking whether someone has an umbrella in a photo. Whether the umbrella handle is at pixel (104, 52) or shifted slightly to (105, 53) does not change the fact that an umbrella is present in that quadrant of the image. Max pooling retains the strongest umbrella signal within that patch regardless of minor pixel jitter.",
      "why_we_need_it": "🎯 Problem it Solves / Core Insight:\nWithout pooling, neural networks are brittle: shifting an image by 1 pixel changes the entire downstream dense feature vector. Pooling provides translation tolerance, reduces feature map spatial resolutions, and decreases GPU computational complexity.",
      "how_it_works": "• Step 1: Slide a K × K window (typically 2 × 2) across the input feature map with stride S = 2.\n• Step 2: In Max Pooling, output the maximum activation value in that 2 × 2 window: y = max(x_{1,1}, x_{1,2}, x_{2,1}, x_{2,2}).\n• Step 3: In Average Pooling, compute the arithmetic mean of activations in the window.\n• Step 4: Spatial dimensions are halved: W_out = ⌊(W_in - K)/S⌋ + 1 = ⌊(W_in - 2)/2⌋ + 1 = W_in / 2.",
      "formula": "y_{i, j, c} = \\max_{0 \\le m, n < K} x_{i \\cdot S + m, \\; j \\cdot S + n, \\; c}",
      "key_takeaways": [
        "Pooling provides local translation invariance by summarizing adjacent spatial activations.",
        "Pooling layers contain zero trainable weights or biases.",
        "Pooling shrinks spatial height and width while keeping channel depth C strictly unchanged."
      ]
    },
    "sample_questions": [
      {
        "q": "How many trainable parameters (weights and biases) are in a 2x2 Max Pooling layer with stride 2 across 64 channels?",
        "options": [
          "0 parameters",
          "256 parameters",
          "128 parameters",
          "64 parameters"
        ],
        "ans": "0 parameters",
        "exp": "Max pooling performs a fixed mathematical operation (max) and requires zero learned parameters."
      },
      {
        "q": "If a 32x32x16 feature map passes through a 2x2 Max Pooling layer with stride 2, what is the output tensor shape?",
        "options": [
          "16 × 16 × 16",
          "16 × 16 × 8",
          "32 × 32 × 16",
          "8 × 8 × 16"
        ],
        "ans": "16 × 16 × 16",
        "exp": "Height and width are halved (32/2 = 16), while channels remain unchanged at 16."
      }
    ]
  },
  {
    "id": "st1_q61",
    "module_id": "st1_mod6",
    "module_name": "Module 6: Hands-on: NumPy Implementation",
    "syllabus_lec": "Lectures 8–10",
    "topic": "PyTorch Optimizer Update Step",
    "difficulty": "Medium",
    "points": 1,
    "question": "A developer is training a recurrent neural network. After several iterations, the loss suddenly becomes unstable and parameter values begin increasing rapidly. During debugging, gradient norms are monitored before every optimizer update to improve training stability:\n\nloss.backward()\ngrad_norm = torch.nn.utils.clip_grad_norm_(model.parameters(), max_norm=1.0)\n# Missing code\n\nWhich missing statement correctly completes the training loop?",
    "options": [
      "optimizer.zero_grad()",
      "model.eval()",
      "torch.cuda.empty_cache()",
      "scheduler.step()",
      "optimizer.step()"
    ],
    "correct": 4,
    "explanation": "After calculating gradients with `loss.backward()` and clipping their norm with `clip_grad_norm_()`, the parameters must actually be updated using the optimizer's update equation. This is executed by calling `optimizer.step()`, which applies the weight updates w ← w - η · g.",
    "theory": {
      "title": "The PyTorch Optimization Step: Applying Parameter Deltas",
      "what_is_it": "In PyTorch, calculating gradients (`backward()`) does not modify model parameters. The actual weight update is decoupled and executed exclusively by the optimizer's `.step()` method.\n\n💡 Beginner Intuition:\n`loss.backward()` is like calculating your budget deficit on paper (writing down how much money you owe). Just writing it down does not pay your bills! `optimizer.step()` is the actual act of transferring the money from your bank account to settle the balance.",
      "why_we_need_it": "🎯 Problem it Solves / Core Insight:\nDecoupling gradient calculation from parameter updates allows PyTorch to support gradient accumulation across multiple batches, gradient clipping, custom learning rate schedulers, and arbitrary optimization algorithms (SGD, AdamW, RMSprop) without modifying model forward logic.",
      "how_it_works": "• Step 1: `loss.backward()` populates `p.grad` for every model parameter `p` where `requires_grad=True`.\n• Step 2: `clip_grad_norm_()` rescales `p.grad` if the overall gradient norm exceeds threshold.\n• Step 3: `optimizer.step()` iterates over each parameter group and updates weights: w ← w - η · ∇L.\n• Step 4: `optimizer.zero_grad()` clears `p.grad` tensors for the subsequent mini-batch.",
      "formula": "W^{(t+1)} = W^{(t)} - \\eta \\cdot \\nabla_W \\mathcal{L}",
      "key_takeaways": [
        "`loss.backward()` calculates gradients; `optimizer.step()` applies the weight update.",
        "Gradient clipping must occur before `optimizer.step()` so the optimizer sees the clamped gradients.",
        "Without `optimizer.step()`, model weights remain frozen forever regardless of how many epochs are executed."
      ]
    },
    "sample_questions": [
      {
        "q": "What happens if a developer runs a training loop with `loss.backward()` but omits `optimizer.step()`?",
        "options": [
          "Gradients are calculated, but model weights never change",
          "The model achieves 100% accuracy immediately",
          "PyTorch raises an unhandled ZeroDivisionError",
          "Weights are automatically randomized"
        ],
        "ans": "Gradients are calculated, but model weights never change",
        "exp": "backward() only sets parameter .grad attributes; step() is required to perform the mathematical update."
      },
      {
        "q": "Why is `optimizer.zero_grad()` usually called before `loss.backward()`?",
        "options": [
          "To prevent gradients from the previous batch from accumulating into the current batch",
          "To reset model weights to zero",
          "To clear GPU memory completely",
          "To disable dropout layers"
        ],
        "ans": "To prevent gradients from the previous batch from accumulating into the current batch",
        "exp": "PyTorch accumulates gradients in .grad by default; zero_grad() resets buffers to 0."
      }
    ]
  },
  {
    "id": "st1_q62",
    "module_id": "st1_mod3",
    "module_name": "Module 3: MLP Forward Pass & Network Representation",
    "syllabus_lec": "Lecture 4",
    "topic": "MLP Forward Pass Information Flow and Layer Activation Transfer",
    "difficulty": "Easy",
    "points": 1,
    "question": "During the forward pass of a multilayer perceptron, what is passed from one layer to the next?",
    "options": [
      "Learning rate of the optimizer",
      "Updated weights of the previous layer",
      "Activated output of the current layer",
      "Gradient of the current layer's loss"
    ],
    "correct": 2,
    "explanation": "In forward propagation, each layer computes a linear affine combination of its inputs (z = W x + b), passes it through a non-linear activation function (a = g(z)), and feeds this activated output tensor forward to serve as the input for the subsequent layer.",
    "theory": {
      "title": "Sequential Forward Propagation & Intermediate Activation Tensors",
      "what_is_it": "Forward propagation is the deterministic data pipeline where input features cascade through successive layers of affine projections and non-linear activations to produce an output prediction.\n\n💡 Beginner Intuition:\nThink of an assembly line. Station 1 takes raw metal sheets (inputs), cuts and shapes them, and paints them (activation output a^[1]). Station 1 passes the painted parts to Station 2. Station 2 does not receive Station 1's tools or machinery (weights); it strictly receives the processed parts (activations).",
      "why_we_need_it": "🎯 Problem it Solves / Core Insight:\nLayer-by-layer sequential composition a^[l] = g^[l](W^[l] a^[l-1] + b^[l]) allows neural networks to construct deep hierarchical representations, assembling primitive edge features into complex semantic abstractions.",
      "how_it_works": "• Step 1: Input tensor a^[0] = x enters layer 1.\n• Step 2: Layer 1 computes pre-activation z^[1] = W^[1] a^[0] + b^[1].\n• Step 3: Layer 1 applies non-linear activation a^[1] = g^[1](z^[1]).\n• Step 4: Activation tensor a^[1] is passed to layer 2 as its input.\n• Step 5: Process repeats until final layer L produces prediction ŷ = a^[L].",
      "formula": "a^{[l]} = g^{[l]}\\left( W^{[l]} a^{[l-1]} + b^{[l]} \\right), \\quad l = 1, 2, \\dots, L",
      "key_takeaways": [
        "Forward pass transmits activated output tensors a^[l] downstream.",
        "Backward pass transmits error gradients ∂L/∂z^[l] upstream.",
        "Model weights remain unchanged during the forward pass."
      ]
    },
    "sample_questions": [
      {
        "q": "What is the difference between pre-activation z and post-activation a?",
        "options": [
          "z is the raw linear sum (Wx + b), while a is the output after applying activation g(z)",
          "z is computed during backward pass, a is computed during forward pass",
          "a is a weight matrix, z is a bias vector",
          "There is no difference"
        ],
        "ans": "z is the raw linear sum (Wx + b), while a is the output after applying activation g(z)",
        "exp": "Pre-activation z is affine; post-activation a = g(z) introduces non-linearity."
      },
      {
        "q": "What direction do information and error signals flow in a neural network?",
        "options": [
          "Activations flow forward (Input -> Output); Gradients flow backward (Output -> Input)",
          "Both flow forward",
          "Both flow backward",
          "Activations flow backward; Gradients flow forward"
        ],
        "ans": "Activations flow forward (Input -> Output); Gradients flow backward (Output -> Input)",
        "exp": "The forward pass evaluates activations; backpropagation pushes error derivatives backwards."
      }
    ]
  },
  {
    "id": "st1_q63",
    "module_id": "st1_mod14",
    "module_name": "Module 14: Self-Attention & Scaled Dot-Product Attention",
    "syllabus_lec": "Lectures 24–25",
    "topic": "Scaled Dot-Product Attention Scaling Factor √d_k",
    "difficulty": "Medium",
    "points": 1,
    "question": "In scaled dot-product attention, why are the query-key scores divided by √d_k?",
    "options": [
      "Control score magnitude",
      "Remove attention masks",
      "Increase sequence length",
      "Expand value vectors"
    ],
    "correct": 0,
    "explanation": "For large projection dimensions d_k, the dot products grow large in magnitude. Dividing by √d_k controls the score magnitude, pulling the variance of dot products back to 1.0. This prevents the Softmax function from saturating into regions with vanishingly small gradients.",
    "theory": {
      "title": "Variance Stabilization & Normalizing Factor 1/√d_k in Attention",
      "what_is_it": "The scaling factor 1/√d_k is a mathematical normalizer applied to Query-Key dot products before Softmax exponentiation.\n\n💡 Beginner Intuition:\nImagine measuring sound volume with 64 microphones instead of 1. If each microphone adds independent random noise, summing 64 inputs makes the total signal 8 times louder (√64 = 8). If you do not turn down the master volume slider by dividing by 8, the speakers will clip into maximum distortion (Softmax saturation).",
      "why_we_need_it": "🎯 Problem it Solves / Core Insight:\nAssuming elements of Q and K are independent zero-mean unit-variance random variables, their inner product q · k = ∑_{i=1}^{d_k} q_i k_i has mean 0 and variance d_k. For d_k = 64, standard deviation is 8. Large logits push Softmax into flat tail regions where gradients are near zero (vanishing gradients). Dividing by √d_k restores unit variance.",
      "how_it_works": "• Step 1: Compute raw attention logits S = Q Kᵀ of shape (Batch × Heads × N × N).\n• Step 2: Divide logits element-wise by √d_k: S_scaled = S / √d_k.\n• Step 3: Variance of S_scaled is Var(S / √d_k) = Var(S) / d_k = d_k / d_k = 1.0.\n• Step 4: Pass S_scaled into Softmax, ensuring active, non-saturated gradient flow during backpropagation.",
      "formula": "\\text{Var}\\left( \\frac{q \\cdot k}{\\sqrt{d_k}} \\right) = \\frac{1}{d_k} \\sum_{i=1}^{d_k} \\text{Var}(q_i k_i) = \\frac{d_k}{d_k} = 1.0",
      "key_takeaways": [
        "Dividing by √d_k controls score magnitude and prevents Softmax saturation.",
        "Without scaling, dot-product variance scales linearly with d_k, pushing gradients to zero.",
        "For d_k = 64, the scaling factor is 1/√64 = 1/8 = 0.125."
      ]
    },
    "sample_questions": [
      {
        "q": "If the key projection dimension d_k is 64, what is the exact numerical divisor used in scaled dot-product attention?",
        "options": [
          "8 (since √64 = 8)",
          "64",
          "16",
          "4"
        ],
        "ans": "8 (since √64 = 8)",
        "exp": "The formula divides by sqrt(d_k) = sqrt(64) = 8."
      },
      {
        "q": "What failure mode occurs in scaled dot-product attention if the 1/√d_k factor is omitted for large d_k?",
        "options": [
          "Softmax saturates, leading to vanishing gradients and peaked one-hot attention distributions",
          "The matrix multiplication dimension becomes incompatible",
          "The sequence length is truncated to 0",
          "Value vectors are zeroed out"
        ],
        "ans": "Softmax saturates, leading to vanishing gradients and peaked one-hot attention distributions",
        "exp": "Large dot products push Softmax to extreme values, yielding zero derivatives and frozen attention weights."
      }
    ]
  },
  {
    "id": "st1_q64",
    "module_id": "st1_mod7",
    "module_name": "Module 7: Convolutional Neural Networks (CNNs)",
    "syllabus_lec": "Lectures 11–12",
    "topic": "Receptive Field Expansion in Convolutional Networks",
    "difficulty": "Medium",
    "points": 1,
    "question": "A developer documents the feature extraction pipeline of a convolutional neural network:\n\nInput Image -> Convolution (3x3) -> ReLU -> Convolution (3x3) -> ReLU -> # Missing Step -> Feature Extraction\n\nWhy is another convolution layer placed before the feature extraction stage?",
    "options": [
      "Additional convolution layers increase the image resolution and capture larger spatial patterns.",
      "Additional convolution layers increase the receptive field and capture larger spatial patterns.",
      "Additional convolution layers increase the batch size and capture larger spatial patterns.",
      "Additional convolution layers increase the learning rate and capture larger spatial patterns."
    ],
    "correct": 1,
    "explanation": "Each stacked convolutional layer expands the effective receptive field of subsequent feature neurons. Stacking two 3×3 convolutions expands the receptive field to 5×5 pixels, and adding a third expands it to 7×7, allowing the network to integrate larger spatial visual patterns without requiring computationally expensive large filter kernels.",
    "theory": {
      "title": "Receptive Field Dynamics & Hierarchical Spatial Perception",
      "what_is_it": "The receptive field is the spatial region in the input image that directly influences the activation of a specific neuron in a deeper layer.\n\n💡 Beginner Intuition:\nImagine looking at a mosaic through a paper straw. You can only see 3 tiles (receptive field = 3). If a friend looks at what you see through another straw, their field of view expands to cover 5 tiles. Stacking layers widens the scope so deep neurons can see entire faces instead of individual eyelashes.",
      "why_we_need_it": "🎯 Problem it Solves / Core Insight:\nSingle small kernels ($3 \\times 3$) only capture hyper-local features (isolated edges). To recognize semantic objects (like cars or animals), neurons must see across wide spatial regions. Successive convolutions expand receptive fields linearly: $RF_{l} = RF_{l-1} + (K_l - 1) \\times J_{l-1}$.",
      "how_it_works": "• Step 1 (Input): Layer 0 input has receptive field 1 × 1.\n• Step 2 (First Conv 3×3, Stride 1): Receptive field becomes 3 × 3.\n• Step 3 (Second Conv 3×3, Stride 1): Receptive field expands to 3 + (3 - 1) = 5 × 5.\n• Step 4 (Third Conv 3×3, Stride 1): Receptive field expands to 5 + (3 - 1) = 7 × 7.\n• Step 5 (Feature Extraction): The network can now detect holistic shapes matching 7 × 7 patterns.",
      "formula": "RF_{l} = RF_{l-1} + (K_l - 1) \\cdot S_{\\text{cumulative}}",
      "key_takeaways": [
        "Stacking multiple small convolutions expands the receptive field while keeping parameter counts low.",
        "Two stacked 3×3 convs have a 5×5 receptive field; three stacked 3×3 convs have a 7×7 receptive field.",
        "Strided convolutions and pooling accelerate receptive field growth exponentially."
      ]
    },
    "sample_questions": [
      {
        "q": "What is the effective receptive field of two stacked 3×3 convolutions with stride 1?",
        "options": [
          "5 × 5 pixels",
          "6 × 6 pixels",
          "3 × 3 pixels",
          "9 × 9 pixels"
        ],
        "ans": "5 × 5 pixels",
        "exp": "First layer covers 3x3; the second layer covers 3 + (3-1) = 5x5."
      },
      {
        "q": "Why do modern CNNs prefer stacking multiple 3×3 convs over using a single 7×7 conv?",
        "options": [
          "Fewer parameters, lower compute, and multiple non-linear activation layers",
          "Larger memory footprint",
          "Single 7x7 convs cannot run on GPUs",
          "7x7 convs eliminate backpropagation"
        ],
        "ans": "Fewer parameters, lower compute, and multiple non-linear activation layers",
        "exp": "Three 3x3 convs use 27C² weights vs 49C² for one 7x7 (45% fewer parameters) and provide 3 non-linearities."
      }
    ]
  },
  {
    "id": "st1_q65",
    "module_id": "st1_mod1",
    "module_name": "Module 1: Introduction to Neural Networks",
    "syllabus_lec": "Lectures 1–2",
    "topic": "Perceptron Pre-Activation Weighted Sum Computation",
    "difficulty": "Easy",
    "points": 1,
    "question": "A hiring model uses a single perceptron to classify applicants into two groups. What does the perceptron compute immediately before applying its activation function?",
    "options": [
      "Average probability across output classes",
      "Distance from the nearest class centroid",
      "Gradient of the classification loss",
      "Weighted sum of features plus bias"
    ],
    "correct": 3,
    "explanation": "Immediately before applying its threshold or non-linear activation function, an artificial neuron calculates the pre-activation linear combination (weighted sum of features plus bias): z = ∑_{i=1}^n w_i x_i + b = w · x + b.",
    "theory": {
      "title": "Affine Combination: Synaptic Summation & Threshold Offset",
      "what_is_it": "The pre-activation scalar z represents the accumulated linear evidence before a neuron commits to an activation state.\n\n💡 Beginner Intuition:\nImagine a university admissions score. Your GPA is multiplied by 0.4 (weight w_1), test score by 0.5 (weight w_2), and leadership rating by 0.1 (weight w_3), plus a baseline bonus of +5 points (bias b). The resulting total points (weighted sum) is computed first, before testing whether you cross the pass/fail cutoff mark.",
      "why_we_need_it": "🎯 Problem it Solves / Core Insight:\nThe linear weighted sum w · x rotates and scales the decision boundary in feature space, while the additive bias b shifts the hyperplane away from the origin, allowing the decision boundary to fit data that does not pass through (0, 0).",
      "how_it_works": "• Step 1: Receive input vector x = [x_1, x_2, ..., x_n].\n• Step 2: Multiply each input x_i by its respective synaptic weight w_i.\n• Step 3: Sum all weighted products: ∑_{i=1}^n w_i x_i.\n• Step 4: Add the bias scalar b to produce pre-activation z = w · x + b.\n• Step 5: Feed z into threshold activation g(z) to yield final binary prediction ŷ.",
      "formula": "z = \\sum_{i=1}^{n} w_i x_i + b = \\mathbf{w}^T \\mathbf{x} + b",
      "key_takeaways": [
        "Pre-activation z is strictly a linear (affine) function of the inputs.",
        "The bias acts as an adjustable threshold: firing occurs when w · x ≥ -b.",
        "Non-linearity is only introduced after z is computed, via the activation function."
      ]
    },
    "sample_questions": [
      {
        "q": "If weights are [2.0, -1.0], inputs are [3.0, 4.0], and bias is +1.0, what is the pre-activation sum z?",
        "options": [
          "+3.0 (2*3 + -1*4 + 1 = 6 - 4 + 1)",
          "+1.0",
          "-2.0",
          "+6.0"
        ],
        "ans": "+3.0 (2*3 + -1*4 + 1 = 6 - 4 + 1)",
        "exp": "z = (2.0 × 3.0) + (-1.0 × 4.0) + 1.0 = 6.0 - 4.0 + 1.0 = 3.0."
      },
      {
        "q": "What role does the bias term b play geometrically?",
        "options": [
          "It shifts the decision hyperplane away from the origin",
          "It changes the number of inputs",
          "It forces weights to be positive",
          "It normalizes inputs to zero variance"
        ],
        "ans": "It shifts the decision hyperplane away from the origin",
        "exp": "Without a bias (w · x = 0), the decision boundary is constrained to always pass through the coordinate origin."
      }
    ]
  },
  {
    "id": "st1_q66",
    "module_id": "st1_mod10",
    "module_name": "Module 10: Object Detection & Image Segmentation",
    "syllabus_lec": "Lectures 16–17",
    "topic": "Two-Stage Proposal-Based Object Detection (Faster R-CNN)",
    "difficulty": "Medium",
    "points": 1,
    "question": "Which object-detection model first generates region proposals and then classifies the proposed regions?",
    "options": [
      "Faster R-CNN",
      "RetinaNet",
      "SSD",
      "YOLO"
    ],
    "correct": 0,
    "explanation": "Faster R-CNN is a canonical two-stage object detector: Stage 1 uses a Region Proposal Network (RPN) to hypothesize candidate bounding box regions of interest (RoIs); Stage 2 extracts features via RoI Pooling/Align and classifies the candidate proposals while refining box coordinates.",
    "theory": {
      "title": "Two-Stage Object Detection & The Region Proposal Network (RPN)",
      "what_is_it": "Two-stage object detection decouples localization from classification by first generating candidate object proposals and then deeply analyzing each proposal.\n\n💡 Beginner Intuition:\nImagine a security guard monitoring airport baggage X-rays. A fast scanner highlights 20 suspicious suitcases with yellow stickers (Stage 1: Region Proposal). A senior customs inspector then opens and thoroughly inspects only those 20 tagged bags to classify the exact contraband (Stage 2: Classification & Refinement).",
      "why_we_need_it": "🎯 Problem it Solves / Core Insight:\nSingle-stage detectors (like original YOLO) prioritize extreme speed but historically struggled with small, overlapping objects. Two-stage detectors achieve higher detection precision (mAP) by using anchor boxes and RoIPool/RoIAlign to extract scale-invariant feature patches.",
      "how_it_works": "• Step 1 (Backbone): CNN extracts high-level feature maps from the input image.\n• Step 2 (Stage 1 - RPN): Region Proposal Network slides over feature maps, evaluating anchor boxes to output candidate bounding boxes with objectness scores.\n• Step 3 (RoIAlign): RoIAlign extracts fixed-size feature vectors (e.g. 7×7) for each variable-sized proposal.\n• Step 4 (Stage 2 - Heads): Fully connected layers output class probabilities (Softmax) and precise bounding box regression offsets (Δx, Δy, Δw, Δh).",
      "formula": "\\mathcal{L}_{\\text{Faster R-CNN}} = \\mathcal{L}_{\\text{rpn\\_cls}} + \\mathcal{L}_{\\text{rpn\\_reg}} + \\mathcal{L}_{\\text{roi\\_cls}} + \\mathcal{L}_{\\text{roi\\_reg}}",
      "key_takeaways": [
        "Faster R-CNN is a two-stage detector (Propose regions -> Classify proposals).",
        "YOLO, SSD, and RetinaNet are single-stage detectors (predict boxes and classes directly in one forward pass).",
        "RPN replaced slow heuristic algorithms like Selective Search with an end-to-end differentiable neural network."
      ]
    },
    "sample_questions": [
      {
        "q": "What component in Faster R-CNN replaced CPU-based Selective Search for generating candidate regions?",
        "options": [
          "Region Proposal Network (RPN)",
          "Spatial Pyramid Pooling",
          "Non-Maximum Suppression",
          "Feature Pyramid Network"
        ],
        "ans": "Region Proposal Network (RPN)",
        "exp": "The RPN shares convolutional feature maps with the detection network, generating proposals on the GPU."
      },
      {
        "q": "Which of the following is a single-stage object detector?",
        "options": [
          "YOLO (You Only Look Once)",
          "Faster R-CNN",
          "Mask R-CNN",
          "Fast R-CNN"
        ],
        "ans": "YOLO (You Only Look Once)",
        "exp": "YOLO treats detection as a direct regression problem in a single pass without region proposals."
      }
    ]
  },
  {
    "id": "st1_q67",
    "module_id": "st1_mod2",
    "module_name": "Module 2: Limitations of the Perceptron & MLP Architecture",
    "syllabus_lec": "Lecture 3",
    "topic": "Hierarchical Feature Representation in Deep MLPs",
    "difficulty": "Hard",
    "points": 1,
    "question": "A recommendation platform trains several MLP architectures using identical user-item features, optimizer settings, and validation splits. One model shows ordinary training loss but produces unusually strong ranking quality for rare user segments. Layer probes show that early hidden units respond to broad interaction patterns, while deeper hidden units activate only for specific combinations of price sensitivity, category preference, and temporal behavior. No manual feature crosses were added during preprocessing. The architecture team must explain why this model captures rare interaction patterns more effectively. Which conclusion best explains the observed representational behavior?",
    "options": [
      "Successive hidden transformations average increasingly unrelated abstractions from earlier interaction features.",
      "Successive hidden transformations duplicate increasingly shallow abstractions from earlier interaction features.",
      "Successive hidden transformations compose increasingly specialized abstractions from earlier interaction features.",
      "Successive hidden transformations memorize increasingly frequent abstractions from earlier interaction features."
    ],
    "correct": 2,
    "explanation": "Deep multi-layer architectures naturally learn hierarchical representations through compositional abstraction. Lower layers extract primitive, broad interaction signals, while deeper hidden layers non-linearly compose these early representations into highly specialized, complex feature interactions (equivalent to automated high-order feature crosses).",
    "theory": {
      "title": "Hierarchical Compositionality & Deep Feature Abstraction",
      "what_is_it": "Hierarchical representation is the foundational property of deep networks where successive layers assemble complex concepts from simpler building blocks.\n\n💡 Beginner Intuition:\nThink of written human language: Layer 1 learns individual letter strokes (lines, curves). Layer 2 composes strokes into letters (A, B, C). Layer 3 composes letters into words ('neural'). Layer 4 composes words into full sentences and complex ideas. You cannot understand poetry without hierarchical composition.",
      "why_we_need_it": "🎯 Problem it Solves / Core Insight:\nIn shallow models, engineers had to manually engineer polynomial feature combinations (e.g. `age × income × zip_code`). Deep MLPs automatically synthesize these exponential combinatorial interactions through chained non-linear functions: h^[3] = g(W^[3] g(W^[2] g(W^[1] x))).",
      "how_it_works": "• Layer 1 (Primitive abstractions): Discovers basic linear correlations across individual input features.\n• Layer 2 (Intermediate combinations): Activates for dual-feature interactions (e.g. budget shopper AND evening browser).\n• Layer 3+ (Specialized semantic manifolds): Activates for highly specialized, rare multi-feature conjunctions.\n• Universal Representation: Each successive layer partitions feature space into an exponential number of linear regions.",
      "formula": "h^{[l]} = g^{[l]}\\left( W^{[l]} h^{[l-1]} + b^{[l]} \\right), \\quad \\text{representing compositions } f(x) = f_L(f_{L-1}(\\dots f_1(x)))",
      "key_takeaways": [
        "Deep networks learn hierarchical representations: simple low-level primitives compose into complex high-level semantics.",
        "Automatic feature composition replaces manual combinatorial feature engineering.",
        "Depth enables exponential expressive power with polynomial parameter budgets compared to shallow networks."
      ]
    },
    "sample_questions": [
      {
        "q": "What happens to the level of feature abstraction as data flows deeper through an MLP?",
        "options": [
          "Features become progressively more abstract, specialized, and non-linear",
          "Features become simpler and revert to raw pixels",
          "Features become completely random",
          "Features lose all information due to matrix multiplication"
        ],
        "ans": "Features become progressively more abstract, specialized, and non-linear",
        "exp": "Each layer non-linearly combines lower-level representations into higher-level semantic features."
      },
      {
        "q": "Why is a deep 5-layer network often preferred over an ultra-wide 1-layer network with the same total parameters?",
        "options": [
          "Depth provides compositional inductive bias, learning hierarchical features more efficiently",
          "1-layer networks cannot be trained on GPUs",
          "Depth guarantees zero training loss",
          "Wide networks cannot use ReLU"
        ],
        "ans": "Depth provides compositional inductive bias, learning hierarchical features more efficiently",
        "exp": "Compositional hierarchies allow deep networks to express functions that would require exponentially many neurons in a single layer."
      }
    ]
  },
  {
    "id": "st1_q68",
    "module_id": "st1_mod5",
    "module_name": "Module 5: Activation Functions & Loss Functions",
    "syllabus_lec": "Lecture 7",
    "topic": "Binary Cross-Entropy Loss Function for Binary Classification",
    "difficulty": "Easy",
    "points": 1,
    "question": "A neural network predicts whether an applicant belongs to one of two classes. Which loss function is commonly used during training?",
    "options": [
      "Categorical cross-entropy",
      "Squared error",
      "Binary cross-entropy",
      "Hinge loss"
    ],
    "correct": 2,
    "explanation": "For binary classification problems where the target y ∈ {0, 1} and the network outputs a single probability p = σ(z) ∈ (0, 1), Binary Cross-Entropy (BCE) loss: L = -[y log(p) + (1 - y) log(1 - p)] is the standard maximum likelihood loss function.",
    "theory": {
      "title": "Binary Cross-Entropy (BCE) & Bernoulli Maximum Likelihood",
      "what_is_it": "Binary Cross-Entropy (also called log loss) measures the distance between the true binary label distribution y ∈ {0, 1} and the predicted probability p ∈ (0, 1).\n\n💡 Beginner Intuition:\nImagine placing a bet with 99% confidence that it will rain (p = 0.99). If it rains (y = 1), you lose almost nothing (-log(0.99) ≈ 0.01). But if the sun shines (y = 0), your penalty skyrockets towards infinity (-log(1 - 0.99) = -log(0.01) = 4.6). BCE severely penalizes confident mistakes.",
      "why_we_need_it": "🎯 Problem it Solves / Core Insight:\nUsing Mean Squared Error (MSE) for binary classification with Sigmoid activations creates a non-convex loss surface with flat plateaus where gradients vanish. BCE cancels out the Sigmoid derivative denominator: ∂L/∂z = (p - y), yielding a clean linear error gradient that drives rapid convergence.",
      "how_it_works": "• Case 1 (True Label y = 1): The second term drops out: L = -log(p). As p → 1, L → 0. As p → 0, L → +∞.\n• Case 2 (True Label y = 0): The first term drops out: L = -log(1 - p). As p → 0, L → 0. As p → 1, L → +∞.\n• Combined Batch Loss: Average over mini-batch of size B:\n  L = -(1/B) ∑_{i=1}^B [y_i log(p_i) + (1 - y_i) log(1 - p_i)].\n• Numerically Stable PyTorch Fused Operator: `nn.BCEWithLogitsLoss()` combines Sigmoid + BCE in log-sum-exp space to avoid float underflow.",
      "formula": "\\mathcal{L}_{\\text{BCE}}(y, p) = -\\left[ y \\log(p) + (1 - y) \\log(1 - p) \\right]",
      "key_takeaways": [
        "Binary Cross-Entropy is derived directly from Bernoulli maximum likelihood estimation.",
        "Combined with Sigmoid, the gradient with respect to pre-activation z simplifies to ∂L/∂z = p - y.",
        "`BCEWithLogitsLoss` is numerically superior to applying `Sigmoid` followed by `BCELoss`."
      ]
    },
    "sample_questions": [
      {
        "q": "If true label y = 1 and predicted probability p = 0.5, what is the binary cross-entropy loss?",
        "options": [
          "-log(0.5) ≈ 0.693",
          "0.0",
          "1.0",
          "0.25"
        ],
        "ans": "-log(0.5) ≈ 0.693",
        "exp": "L = -[1 * log(0.5) + 0 * log(0.5)] = -log(0.5) = ln(2) ≈ 0.693."
      },
      {
        "q": "Why is `nn.BCEWithLogitsLoss` preferred over `nn.BCELoss` in PyTorch?",
        "options": [
          "It fuses Sigmoid and log into one kernel using the log-sum-exp trick for numerical stability",
          "It uses half the parameters",
          "It only runs on CPUs",
          "It converts the problem to regression"
        ],
        "ans": "It fuses Sigmoid and log into one kernel using the log-sum-exp trick for numerical stability",
        "exp": "Evaluating log(Sigmoid(z)) directly avoids underflowing to zero when |z| is large."
      }
    ]
  },
  {
    "id": "st1_q69",
    "module_id": "st1_mod4",
    "module_name": "Module 4: Backpropagation Algorithm & Gradient Descent",
    "syllabus_lec": "Lectures 5–6",
    "topic": "Momentum Gradient Descent Velocity Update Rule",
    "difficulty": "Medium",
    "points": 1,
    "question": "A developer implements momentum-based gradient descent to accelerate optimization. During code review, the velocity term is updated incorrectly, causing unstable parameter movement across training iterations:\n\nvelocity = ?\nweights -= learning_rate * velocity\n\nWhich statement correctly updates the velocity before applying the parameter update?",
    "options": [
      "momentum * gradient + velocity",
      "momentum - velocity + gradient",
      "momentum * velocity + gradient",
      "momentum + velocity * gradient"
    ],
    "correct": 2,
    "explanation": "In momentum-based gradient descent, the velocity vector v accumulates past gradients with an exponential decay factor β (momentum coefficient, typically 0.9): velocity = momentum * velocity + gradient. The parameters are then updated along the velocity direction: weights -= learning_rate * velocity.",
    "theory": {
      "title": "Momentum Optimization & Navigating Ravines",
      "what_is_it": "Momentum is an optimization technique that simulates physical inertia by carrying forward a fraction of previous velocity vectors into the current gradient update.\n\n💡 Beginner Intuition:\nImagine rolling a heavy bowling ball down a bumpy, narrow valley (ravine). Standard gradient descent behaves like a dry leaf, bouncing violently left and right across the steep walls while creeping forward at a snail's pace. A heavy bowling ball (momentum) builds up downhill speed; its forward inertia cancels out the lateral zig-zag bounces and drives straight through flat plateaus.",
      "why_we_need_it": "🎯 Problem it Solves / Core Insight:\nIn pathological ravines (where surface curves much more steeply in one direction than another), standard SGD oscillates wildly without making progress toward the minimum. Momentum averages out perpendicular oscillations while compounding directional velocity down the gentle slope.",
      "how_it_works": "• Step 1: Initialize velocity vector v_0 = 0 (same shape as weights).\n• Step 2: At step t, evaluate current mini-batch gradient g_t = ∇_W L.\n• Step 3: Update velocity: v_t = β · v_{t-1} + g_t (or β · v_{t-1} + (1 - β) · g_t in PyTorch default formulation).\n• Step 4: Update weights: W_{t+1} = W_t - η · v_t.\n• Typical momentum coefficient: β = 0.9 (equivalent to averaging over the last ~10 iterations).",
      "formula": "v_t = \\beta v_{t-1} + g_t, \\quad W_{t+1} = W_t - \\eta v_t",
      "key_takeaways": [
        "Velocity update formula: velocity = momentum * velocity + gradient.",
        "Momentum accelerates progress along consistent directions and dampens oscillations.",
        "Helps escape shallow local minima and flat saddle points."
      ]
    },
    "sample_questions": [
      {
        "q": "If momentum coefficient β = 0.9, approximately how many previous gradient steps are effectively incorporated into the current velocity?",
        "options": [
          "Approximately 10 steps (1 / (1 - 0.9))",
          "Exactly 1 step",
          "100 steps",
          "0 steps"
        ],
        "ans": "Approximately 10 steps (1 / (1 - 0.9))",
        "exp": "The effective moving average window for exponential decay is 1 / (1 - beta) = 1 / 0.1 = 10."
      },
      {
        "q": "What happens to the effective learning rate in directions where gradients consistently point in the exact same direction under momentum β = 0.9?",
        "options": [
          "Terminal velocity increases effective step size up to 10× (η / (1 - β))",
          "Effective step size drops to zero",
          "Learning rate becomes negative",
          "Gradients oscillate to infinity"
        ],
        "ans": "Terminal velocity increases effective step size up to 10× (η / (1 - β))",
        "exp": "When gradients are constant, v reaches steady state v = g / (1 - beta) = 10g, accelerating convergence."
      }
    ]
  },
  {
    "id": "st1_q70",
    "module_id": "st1_mod9",
    "module_name": "Module 9: Image Preprocessing & Data Augmentation",
    "syllabus_lec": "Lecture 15",
    "topic": "Data Augmentation for Improving Generalization",
    "difficulty": "Easy",
    "points": 1,
    "question": "A computer vision team trains an image classifier using a limited number of training images. The model performs well on the training set but struggles to recognize objects captured from different viewpoints and lighting conditions during validation. To improve generalization, the team increases the diversity of the training samples without collecting additional images. Which approach best explains this improvement?",
    "options": [
      "Applying realistic image transformations increases training data diversity",
      "Applying additional output classes increases training data diversity",
      "Applying larger batch sizes increases training data diversity",
      "Applying deeper hidden layers increases training data diversity"
    ],
    "correct": 0,
    "explanation": "Data augmentation applies realistic, label-preserving transformations (such as random rotations, cropping, horizontal flipping, and color jitter) on existing training images on the fly. This exposes the model to varied viewpoints and lighting conditions, directly improving generalization on unseen validation data without needing new images.",
    "theory": {
      "title": "Data Augmentation & Regularizing Spatial Inductive Biases",
      "what_is_it": "Data augmentation is a regularizing strategy that programmatically synthesizes new training examples by applying label-preserving transformations to original images during each training epoch.\n\n💡 Beginner Intuition:\nImagine studying flashcards for a chemistry test. If every card is always right-side up in perfect daylight, you might get confused if a test diagram is slightly tilted or viewed under dim fluorescent light. By turning the cards upside down, tilting them, and viewing them under different lamps while studying, your brain learns to recognize the core molecules regardless of presentation.",
      "why_we_need_it": "🎯 Problem it Solves / Core Insight:\nDeep neural networks have millions of parameters and easily memorize exact pixel backgrounds in small datasets (overfitting). Data augmentation acts as implicit regularization, preventing the model from over-indexing on camera angles, specific crops, or lighting levels.",
      "how_it_works": "• Step 1: A mini-batch of raw images is loaded from storage.\n• Step 2: GPU/CPU applies a randomized pipeline (e.g. `RandomHorizontalFlip(p=0.5)`, `RandomRotation(degrees=15)`, `ColorJitter(brightness=0.2)`).\n• Step 3: Every training epoch sees a slightly different version of every image.\n• Step 4: The model learns representation invariance: $f(T(x)) \\approx f(x)$ for transformation $T$.\n• Step 5: At validation/testing time, augmentations are disabled; only deterministic resizing and standardization are applied.",
      "formula": "\\mathcal{D}_{\\text{augmented}} = \\{ (T(x), y) \\mid (x, y) \\in \\mathcal{D}_{\\text{train}}, \\; T \\sim \\mathcal{T} \\}",
      "key_takeaways": [
        "Data augmentation synthetically increases training set diversity without acquiring new images.",
        "Transformations must be label-preserving (must not change the semantic class of the object).",
        "Augmentations are applied strictly during training and disabled during validation and testing."
      ]
    },
    "sample_questions": [
      {
        "q": "Why should data augmentation be turned OFF during model validation and testing?",
        "options": [
          "Validation metrics must be evaluated on real, uncorrupted, deterministic data distributions",
          "Validation datasets cannot run on GPUs",
          "Augmentation deletes model weights during evaluation",
          "Validation loss requires zero batch size"
        ],
        "ans": "Validation metrics must be evaluated on real, uncorrupted, deterministic data distributions",
        "exp": "Validation assesses real-world performance; adding random noise would produce inconsistent benchmark scores."
      },
      {
        "q": "Which transformation would be invalid (label-corrupting) for digit classification on the MNIST dataset?",
        "options": [
          "Vertical flip (turning a '6' upside down into a '9')",
          "Slight random rotation of 5 degrees",
          "Subtle brightness shift",
          "Random crop with 95% scale"
        ],
        "ans": "Vertical flip (turning a '6' upside down into a '9')",
        "exp": "A vertical or horizontal flip alters the semantic identity of digits like 6 and 9, corrupting the ground truth label."
      }
    ]
  },
  {
    "id": "st1_q71",
    "module_id": "st1_mod4",
    "module_name": "Module 4: Backpropagation Algorithm & Gradient Descent",
    "syllabus_lec": "Lectures 5–6",
    "topic": "Backpropagation Error Signal Flow and Chain Rule Dynamics",
    "difficulty": "Medium",
    "points": 1,
    "question": "A team is training a neural network for image classification. During debugging, an engineer notices that increasing the prediction error at the output layer causes larger parameter updates in several earlier hidden layers, even though the forward activations remain unchanged. The engineer concludes that only the backward computation has changed and wants to understand why the earlier parameters are affected. Which explanation best describes this behavior?",
    "options": [
      "Error signals propagate backward through successive layers using local derivatives.",
      "Training labels propagate backward through successive layers using local derivatives.",
      "Hidden activations propagate backward through successive layers using local derivatives.",
      "Input features propagate backward through successive layers using local derivatives."
    ],
    "correct": 0,
    "explanation": "Backpropagation operates via the calculus chain rule. The error signal (loss derivative δ^{[l]} = ∂L/∂z^{[l]}) originates at the loss function and propagates backwards from output to input through successive layers, scaled at each stage by the transpose of the layer weights and local activation derivatives.",
    "theory": {
      "title": "Reverse Error Propagation: The Calculus Chain Rule in Deep Graphs",
      "what_is_it": "Backpropagation is a message-passing algorithm that transmits scalar error signals (sensitivities) in reverse through the network graph.\n\n💡 Beginner Intuition:\nImagine a row of dominos falling forward (forward pass). When the last domino hits a bell, the loudness of the bell measures the error. If you now push backwards along the chain (backward pass), the force exerted on the very first domino is directly proportional to how hard the final bell was struck.",
      "why_we_need_it": "🎯 Problem it Solves / Core Insight:\nDirectly perturbing each weight individually (finite differences) to compute gradients requires O(P) forward passes, where P is parameter count (millions of passes). Backpropagation computes the exact gradient for all millions of parameters simultaneously in a single reverse pass of cost O(1) relative to forward evaluation.",
      "how_it_works": "• Step 1 (Output Error): $\\delta^{[L]} = \\nabla_{a^{[L]}} \\mathcal{L} \\odot g'(z^{[L]})$.\n• Step 2 (Backward Propagation): For layer $l = L-1, \\dots, 1$:\n  $\\delta^{[l]} = \\left( (W^{[l+1]})^T \\delta^{[l+1]} \\right) \\odot g'(z^{[l]})$.\n• Step 3 (Weight Gradient): $\\frac{\\partial \\mathcal{L}}{\\partial W^{[l]}} = \\delta^{[l]} (a^{[l-1]})^T$.\n• Step 4 (Direct Relationship): Increasing prediction error at layer $L$ directly scales $\\delta^{[L]}$, which multiplies through to scale all upstream weight gradients $\\frac{\\partial \\mathcal{L}}{\\partial W^{[1]}}$.",
      "formula": "\\delta^{[l]} = \\left( W^{[l+1]T} \\delta^{[l+1]} \\right) \\odot g'\\left(z^{[l]}\\right), \\quad \\frac{\\partial \\mathcal{L}}{\\partial W^{[l]}} = \\delta^{[l]} \\left(a^{[l-1]}\\right)^T",
      "key_takeaways": [
        "Error signals propagate backward through successive layers via local Jacobian multiplications.",
        "A change in output error scales weight updates across all upstream layers even if forward activations stay identical.",
        "Activations remain cached from the forward pass to compute local derivatives during the backward pass."
      ]
    },
    "sample_questions": [
      {
        "q": "During backpropagation, what is cached from the forward pass to compute weight gradients at layer l?",
        "options": [
          "The intermediate activations a^[l-1] and pre-activations z^[l]",
          "The test dataset labels",
          "The optimizer state",
          "The CPU instruction cache"
        ],
        "ans": "The intermediate activations a^[l-1] and pre-activations z^[l]",
        "exp": "Weight gradient dW^[l] = delta^[l] @ (a^[l-1])^T, requiring the forward activation a^[l-1] to be cached in memory."
      },
      {
        "q": "What mathematical rule underpins the backpropagation algorithm?",
        "options": [
          "The calculus chain rule for composite functions",
          "Bayes' theorem",
          "Euler's identity",
          "L'Hopital's rule"
        ],
        "ans": "The calculus chain rule for composite functions",
        "exp": "Backprop systematically applies the chain rule dL/dw = (dL/dz) * (dz/dw) across nested network layers."
      }
    ]
  },
  {
    "id": "st1_q72",
    "module_id": "st1_mod8",
    "module_name": "Module 8: Overview of CNN Architectures",
    "syllabus_lec": "Lectures 13–14",
    "topic": "VGG Architecture Design and 3×3 Convolution Stacking",
    "difficulty": "Easy",
    "points": 1,
    "question": "Which architectural design is most strongly associated with the VGG network family?",
    "options": [
      "Stacking multiple small 3 × 3 convolutions",
      "Adding identity shortcuts between convolutional blocks",
      "Applying large filters in the initial convolution",
      "Using shallow layers for handwritten-digit recognition"
    ],
    "correct": 0,
    "explanation": "The hallmark architectural innovation of the VGG network family (Simonyan & Zisserman, 2014) is replacing large convolution filters (such as 7×7 or 11×11 used in AlexNet) with stacks of multiple small 3×3 convolutions, achieving equivalent receptive fields with significantly fewer parameters and greater non-linear expressiveness.",
    "theory": {
      "title": "The VGG Paradigm: Small 3×3 Filter Stacking & Parameter Efficiency",
      "what_is_it": "VGG (Visual Geometry Group, Oxford) proved that depth through uniform, stacked small filters ($3 \\times 3$) is superior to shallow networks with large spatial kernels ($7 \\times 7$ or $11 \\times 11$).\n\n💡 Beginner Intuition:\nImagine assembling a curved brick wall. You could use one giant, clumsy 5-foot-long rectangular concrete slab (a $5 \\times 5$ filter), which cannot bend easily. Alternatively, you can stack two small, articulating 3-foot bricks with mortar joints between them (two stacked $3 \\times 3$ filters with ReLUs in between). The stacked bricks cover the exact same 5-foot span, use less cement (28% fewer parameters), and flex into more intricate curves (two non-linearities).",
      "why_we_need_it": "🎯 Problem it Solves / Core Insight:\nA single $5 \\times 5$ conv on $C$ channels has $25C^2$ parameters. Stacking two $3 \\times 3$ convs covers the same $5 \\times 5$ receptive field with only $2 \\times (3 \\times 3 \\times C^2) = 18C^2$ parameters—a $28\\%$ reduction in weights. Stacking three $3 \\times 3$ convs covers a $7 \\times 7$ field with $27C^2$ parameters vs $49C^2$ ($45\\%$ savings!).",
      "how_it_works": "• Step 1: Input image passes into Block 1: two stacked conv layers with 64 filters of size 3 × 3, stride 1, padding 1.\n• Step 2: 2 × 2 Max Pooling with stride 2 halves spatial resolution (e.g. 224 × 224 → 112 × 112).\n• Step 3: Block 2 doubles channel depth to 128 using another pair of 3 × 3 convs.\n• Step 4: Subsequent blocks double channels to 256 and 512, stacking up to three 3 × 3 convs per block (VGG-16 has 13 conv layers + 3 FC layers = 16 weight layers).\n• Step 5: Final feature maps pass into 3 dense layers of sizes 4096, 4096, and 1000.",
      "formula": "\\text{Receptive Field} = 1 + \\sum_{l=1}^{L} (K_l - 1), \\quad \\text{Params}(2 \\times 3\\times3) = 18C^2 < \\text{Params}(1 \\times 5\\times5) = 25C^2",
      "key_takeaways": [
        "VGG pioneered the uniform design principle of stacking small 3×3 filters with stride 1 and padding 1.",
        "Stacking two 3×3 convs matches a 5×5 receptive field with 28% fewer parameters.",
        "Stacking three 3×3 convs matches a 7×7 receptive field with 45% fewer parameters.",
        "Each added conv layer incorporates an additional ReLU non-linearity."
      ]
    },
    "sample_questions": [
      {
        "q": "How many parameters are in two stacked 3x3 conv layers with 64 input and 64 output channels (ignoring biases), compared to one 5x5 layer?",
        "options": [
          "73,728 (stacked 3x3) vs 102,400 (single 5x5) — saving 28%",
          "They have identical parameter counts",
          "Stacked 3x3 has more parameters",
          "5x5 has 10x fewer parameters"
        ],
        "ans": "73,728 (stacked 3x3) vs 102,400 (single 5x5) — saving 28%",
        "exp": "Stacked 3x3: 2 * (3 * 3 * 64 * 64) = 73,728. Single 5x5: 5 * 5 * 64 * 64 = 102,400."
      },
      {
        "q": "What is the primary drawback of original VGG architectures?",
        "options": [
          "Massive memory footprint and parameter count (138M params, mostly in final 4096-dim FC layers)",
          "Cannot classify images",
          "Lacks non-linear activations",
          "Requires 7x7 filters"
        ],
        "ans": "Massive memory footprint and parameter count (138M params, mostly in final 4096-dim FC layers)",
        "exp": "VGG-16 contains over 138 million parameters, with over 100 million concentrated in the dense classification head."
      }
    ]
  },
  {
    "id": "st1_q73",
    "module_id": "st1_mod10",
    "module_name": "Module 10: Object Detection & Image Segmentation",
    "syllabus_lec": "Lectures 16–17",
    "topic": "Single-Stage Object Detection using YOLO",
    "difficulty": "Medium",
    "points": 1,
    "question": "What is a key characteristic of YOLO-based object detection?",
    "options": [
      "Proposal-based stages",
      "Pixel-only classification",
      "Single-stage prediction",
      "Feature-only extraction"
    ],
    "correct": 2,
    "explanation": "YOLO (You Only Look Once) is a single-stage object detector. Unlike two-stage detectors that first generate region proposals and then classify them, YOLO reframes object detection as a single unified regression problem, predicting bounding box coordinates and class probabilities simultaneously directly from full images in a single forward pass.",
    "theory": {
      "title": "YOLO: Unified Single-Stage Real-Time Object Detection",
      "what_is_it": "Single-stage object detection eliminates separate proposal generation steps by mapping image pixels directly to bounding box coordinates and class probabilities in a single feed-forward neural pass.\n\n💡 Beginner Intuition:\nTwo-stage detection is like a detective inspecting an image with a magnifying glass: first making a list of 2,000 interesting spots, then analyzing each one individually. YOLO is like an experienced driver who glances at the windshield once and instantly registers the positions and types of all cars, pedestrians, and street signs in 15 milliseconds.",
      "why_we_need_it": "🎯 Problem it Solves / Core Insight:\nTwo-stage detectors (like Faster R-CNN) were too slow for real-time video processing (5–10 FPS). YOLO divides the input image into an S × S grid. If an object's center falls into a grid cell, that cell is responsible for predicting B bounding boxes, confidence scores, and C conditional class probabilities simultaneously, achieving 45–150+ FPS.",
      "how_it_works": "• Step 1: Divide image into an S × S grid (e.g. 7 × 7).\n• Step 2: Each cell predicts B bounding boxes (x, y, w, h, objectness confidence).\n• Step 3: Each cell also predicts C class probabilities: Pr(Class_i | Object).\n• Step 4: Output tensor shape is S × S × (B × 5 + C).\n• Step 5: Fast Non-Maximum Suppression (NMS) filters duplicate overlapping predictions.",
      "formula": "\\text{Confidence} = \\Pr(\\text{Object}) \\times \\text{IoU}_{\\text{pred}}^{\\text{truth}}",
      "key_takeaways": [
        "YOLO is a single-stage detector performing localization and classification in one pass.",
        "Delivers real-time inference speeds suitable for video streams (45+ FPS).",
        "Sees the entire image globally during training, encoding contextual information better than proposal-based methods."
      ]
    },
    "sample_questions": [
      {
        "q": "What is the primary speed advantage of single-stage detectors like YOLO over two-stage detectors like Faster R-CNN?",
        "options": [
          "They predict boxes and classes in a single forward pass without a separate region proposal stage",
          "They do not use convolutions",
          "They only run on black and white images",
          "They do not require GPU hardware"
        ],
        "ans": "They predict boxes and classes in a single forward pass without a separate region proposal stage",
        "exp": "Eliminating the iterative region proposal and cropping steps enables ultra-fast real-time inference."
      },
      {
        "q": "In YOLO grid prediction, how does a cell know if it is responsible for detecting an object?",
        "options": [
          "If the ground-truth object's center coordinates fall inside that grid cell",
          "If any pixel of the object touches the cell",
          "By random coin toss",
          "Through a separate search tree"
        ],
        "ans": "If the ground-truth object's center coordinates fall inside that grid cell",
        "exp": "The unique grid cell containing the center of an object is solely assigned to predict that object."
      }
    ]
  },
  {
    "id": "st1_q74",
    "module_id": "st1_mod5",
    "module_name": "Module 5: Activation Functions & Loss Functions",
    "syllabus_lec": "Lecture 7",
    "topic": "ReLU Activation Function Calculation and Thresholding",
    "difficulty": "Easy",
    "points": 1,
    "question": "What is the ReLU output when its input is -3?",
    "options": [
      "-3",
      "3",
      "0",
      "1"
    ],
    "correct": 2,
    "explanation": "The Rectified Linear Unit (ReLU) is defined mathematically as f(x) = max(0, x). For any negative input (such as x = -3), max(0, -3) evaluates to exactly 0.",
    "theory": {
      "title": "The Rectified Linear Unit (ReLU): Mathematical Definition & Computation",
      "what_is_it": "ReLU is a piecewise linear activation function that acts as a simple one-sided diode: passing positive values unchanged while clipping all negative values to zero.\n\n💡 Beginner Intuition:\nImagine a one-way electrical check valve. If positive water pressure pushes from the left, the valve opens completely (slope = 1, output = input). If pressure pushes backwards or is negative, the valve clamps shut completely (output = 0).",
      "why_we_need_it": "🎯 Problem it Solves / Core Insight:\nUnlike Sigmoid and Tanh which require computationally expensive exponential calculations (e^x) and saturate at large values, ReLU requires a single fast CPU/GPU comparison (`x > 0 ? x : 0`) and has a constant derivative of 1.0 for all positive values, accelerating training by over 6x.",
      "how_it_works": "• Step 1: Receive scalar input x = -3.\n• Step 2: Evaluate condition: is x > 0? No (-3 ≤ 0).\n• Step 3: Output clamp: return 0.\n• Step 4 (Derivative): If x > 0, f'(x) = 1; if x < 0, f'(x) = 0.",
      "formula": "f(x) = \\max(0, x) = \\begin{cases} x & \\text{if } x > 0 \\\\ 0 & \\text{if } x \\le 0 \\end{cases}",
      "key_takeaways": [
        "ReLU outputs 0 for any negative input, and x for any positive input.",
        "Provides biological plausibility through sparse representations (typically ~50% of neurons fire).",
        "Extremely fast to compute on GPUs compared to transcendental exponentials."
      ]
    },
    "sample_questions": [
      {
        "q": "What is the output of ReLU(4.5)?",
        "options": [
          "4.5",
          "0.0",
          "1.0",
          "-4.5"
        ],
        "ans": "4.5",
        "exp": "For positive inputs, ReLU is the identity function: max(0, 4.5) = 4.5."
      },
      {
        "q": "What is the derivative of ReLU at x = -5?",
        "options": [
          "0.0",
          "1.0",
          "-1.0",
          "0.25"
        ],
        "ans": "0.0",
        "exp": "In the inactive negative regime, the slope of ReLU is flat, so its derivative is 0."
      }
    ]
  },
  {
    "id": "st1_q75",
    "module_id": "st1_mod4",
    "module_name": "Module 4: Backpropagation Algorithm & Gradient Descent",
    "syllabus_lec": "Lectures 5–6 / 8–10",
    "topic": "Backpropagation Local Derivative Multiplication via Chain Rule",
    "difficulty": "Medium",
    "points": 1,
    "question": "A developer is debugging the backward pass of a neural network. During testing, the gradient reaching the previous layer is larger than expected. After reviewing the code, the developer realizes that the local derivative of the activation function has not been applied before sending the gradient backward.\n\nx = self.fc1(inp)\nh = torch.relu(x)\ny = self.fc2(h)\nloss = criterion(y, target)\ngrad = loss_grad\n# Missing code\n\nWhich missing statement correctly applies the local gradient?",
    "options": [
      "prev_grad = grad * relu_grad(x)",
      "prev_grad = grad + relu_grad(x)",
      "prev_grad = grad - relu_grad(x)",
      "prev_grad = grad / relu_grad(x)"
    ],
    "correct": 0,
    "explanation": "By the fundamental chain rule of calculus, the gradient of the loss with respect to pre-activation x is the element-wise product of the incoming gradient from the downstream layer and the local derivative of the activation function: ∂L/∂x = (∂L/∂h) · (dh/dx) = grad * relu_grad(x).",
    "theory": {
      "title": "Local Gradient Propagation & The Chain Rule Multiplication",
      "what_is_it": "In backpropagation, every computational node is a local processor that receives an incoming upstream gradient and multiplies it by its own local derivative to compute the downstream gradient.\n\n💡 Beginner Intuition:\nImagine currency exchange rates: If converting British Pounds to Euros gives 1.2x (local rate) and converting Euros to Dollars gives 1.1x (upstream rate), the direct conversion rate from Pounds to Dollars is the MULTIPLICATION of the two local rates (1.2 × 1.1 = 1.32). Derivatives always multiply across chained links.",
      "why_we_need_it": "🎯 Problem it Solves / Core Insight:\nBackpropagation decomposes global derivative calculations into simple modular local operations: `Downstream Gradient = Upstream Gradient * Local Derivative`. Without multiplying by `relu_grad(x)` (which is 0 when x ≤ 0), inactive neurons incorrectly receive non-zero gradients, corrupting upstream weight updates.",
      "how_it_works": "• Step 1: Forward evaluation: h = relu(x).\n• Step 2: Upstream gradient arriving at h: grad = ∂L/∂h.\n• Step 3: Compute local derivative: relu_grad(x) = (x > 0).float().\n• Step 4: Apply chain rule multiplication: prev_grad = grad * relu_grad(x).\n• Step 5: Propagate prev_grad to `self.fc1` weights and bias updates.",
      "formula": "\\frac{\\partial \\mathcal{L}}{\\partial x} = \\frac{\\partial \\mathcal{L}}{\\partial h} \\odot \\frac{d h}{d x} = \\text{grad} \\odot \\text{relu\\_grad}(x)",
      "key_takeaways": [
        "Gradients multiply across successive operations according to the calculus chain rule.",
        "For ReLU, local derivative is 1 if x > 0 else 0 (implemented as element-wise masking).",
        "Omitting the local derivative leaks gradient signals into inactive neurons."
      ]
    },
    "sample_questions": [
      {
        "q": "What is `relu_grad(x)` when x = [-2.0, 3.0]?",
        "options": [
          "[0.0, 1.0]",
          "[1.0, 1.0]",
          "[0.0, 0.0]",
          "[-2.0, 3.0]"
        ],
        "ans": "[0.0, 1.0]",
        "exp": "For negative values, derivative is 0; for positive values, derivative is 1."
      },
      {
        "q": "If incoming gradient `grad` is 4.0 and `relu_grad(x)` is 0.0, what gradient reaches the previous layer?",
        "options": [
          "0.0 (4.0 * 0.0 = 0.0)",
          "4.0",
          "-4.0",
          "1.0"
        ],
        "ans": "0.0 (4.0 * 0.0 = 0.0)",
        "exp": "Multiplication by zero zeroes out the gradient, stopping backpropagation through that dead neuron."
      }
    ]
  },
  {
    "id": "st1_q76",
    "module_id": "st1_mod4",
    "module_name": "Module 4: Backpropagation Algorithm & Gradient Descent",
    "syllabus_lec": "Lectures 5–6",
    "topic": "Understanding the Vanishing Gradient Phenomenon",
    "difficulty": "Medium",
    "points": 1,
    "question": "A deep neural network contains twenty hidden layers using the same activation function. During training, the gradient magnitude measured at the output layer is relatively large, but it becomes progressively smaller while propagating toward the first hidden layer. Parameter updates in the earliest layers become almost negligible even though later layers continue learning normally. Which conclusion best explains this training behavior?",
    "options": [
      "Gradients gradually increase while propagating through many network layers.",
      "Gradients gradually diminish while propagating through many network layers.",
      "Gradients remain constant while propagating through many network layers.",
      "Gradients randomly fluctuate while propagating through many network layers."
    ],
    "correct": 1,
    "explanation": "This describes the classical Vanishing Gradient Problem. When backpropagating through deep networks with activations whose derivatives are less than 1 (such as Sigmoid with max derivative 0.25), repeated multiplications cause the gradient magnitude to diminish exponentially as it travels toward earlier layers, leaving initial feature extractors virtually untrained.",
    "theory": {
      "title": "The Vanishing Gradient Problem & Deep Network Degradation",
      "what_is_it": "The vanishing gradient problem occurs when error gradients shrink exponentially as they propagate backwards through deep layers, causing early layers to train at near-zero rates.\n\n💡 Beginner Intuition:\nImagine photocopying a photocopy of a photocopy 20 times, where each machine dims contrast by 50%. By the 20th copy (the first layer), the paper is completely blank white. The original input layer receives no signal at all.",
      "why_we_need_it": "🎯 Problem it Solves / Core Insight:\nUnderstanding vanishing gradients led directly to the major breakthroughs of modern deep learning: (1) ReLU activations (constant derivative 1.0), (2) ResNet identity skip connections (dH/dx = dF/dx + 1), and (3) LayerNorm/BatchNorm.",
      "how_it_works": "• Step 1: Error originates at output layer L with magnitude ||g_L||.\n• Step 2: In passing backward through layer l, gradient is multiplied by weight matrix W^[l]ᵀ and activation derivative σ'(z^[l]).\n• Step 3: If ||W^[l]ᵀ σ'(z^[l])|| < 1, gradient shrinks by factor γ < 1 at each layer.\n• Step 4: By layer 1, gradient magnitude is ||g_1|| ≈ γ^{L-1} ||g_L||.\n• Step 5: For L = 20 and γ = 0.5, 0.5¹⁹ ≈ 1.9 × 10⁻⁶—virtually zero!",
      "formula": "\\frac{\\partial \\mathcal{L}}{\\partial W^{[1]}} = \\frac{\\partial \\mathcal{L}}{\\partial z^{[L]}} \\cdot \\prod_{l=2}^{L} \\left( W^{[l]T} g'\\left(z^{[l]}\\right) \\right) \\cdot \\left(a^{[0]}\\right)^T",
      "key_takeaways": [
        "Gradients diminish exponentially as they backpropagate through deep architectures with saturating activations.",
        "Early layers (which learn fundamental feature primitives) remain frozen at their random initializations.",
        "Solved modernly using ReLU, residual connections (ResNet), and careful weight initializations."
      ]
    },
    "sample_questions": [
      {
        "q": "Why do residual skip connections in ResNet solve the vanishing gradient problem?",
        "options": [
          "The identity shortcut provides a clean gradient highway where dH/dx = dF/dx + 1.0, preserving gradient flow",
          "They eliminate the loss function",
          "They convert the network into an SVM",
          "They double the learning rate automatically"
        ],
        "ans": "The identity shortcut provides a clean gradient highway where dH/dx = dF/dx + 1.0, preserving gradient flow",
        "exp": "The +1 identity term ensures that even if dF/dx approaches 0, a gradient of at least 1.0 passes backwards untouched."
      },
      {
        "q": "In which layers of a 20-layer plain Sigmoid network are parameter updates smallest?",
        "options": [
          "In the earliest layers (layers 1–3)",
          "In the final classification layer (layer 20)",
          "Updates are identical in all layers",
          "In the middle layer (layer 10)"
        ],
        "ans": "In the earliest layers (layers 1–3)",
        "exp": "Gradients decay progressively as they travel backwards, making early layers suffer the most severe vanishing."
      }
    ]
  },
  {
    "id": "st1_q77",
    "module_id": "st1_mod2",
    "module_name": "Module 2: Limitations of the Perceptron & MLP Architecture",
    "syllabus_lec": "Lecture 3",
    "topic": "Nonlinear Activation and Hidden-Layer Expressive Capacity",
    "difficulty": "Easy",
    "points": 1,
    "question": "Why are hidden layers added to a neural network?",
    "options": [
      "Store training labels",
      "Fix input dimensions",
      "Learn nonlinear patterns",
      "Remove output classes"
    ],
    "correct": 2,
    "explanation": "Hidden layers combined with non-linear activation functions allow neural networks to warp, bend, and partition feature space, enabling them to learn complex non-linear decision boundaries and solve problems that are not linearly separable (such as XOR, image recognition, and natural language understanding).",
    "theory": {
      "title": "Universal Approximation & The Necessity of Non-Linear Hidden Layers",
      "what_is_it": "Hidden layers are intermediate representations between inputs and outputs that transform non-linearly separable data into linearly separable spaces.\n\n💡 Beginner Intuition:\nImagine trying to lasso two calves in a field with a single rigid straight wooden pole (a single-layer perceptron). You can only draw a straight fence between them. If the calves are standing in a criss-cross pattern (XOR), a rigid pole cannot separate them. Hidden layers act like flexible rope: you can loop and bend the rope into any arbitrary shape to enclose complex patterns.",
      "why_we_need_it": "🎯 Problem it Solves / Core Insight:\nBy Cybenko's Universal Approximation Theorem (1989), a feed-forward network with even a single hidden layer containing non-linear activations can approximate any continuous function on compact subsets of ℝⁿ to arbitrary precision.",
      "how_it_works": "• Step 1: Input features x are projected by W^[1] and shifted by b^[1].\n• Step 2: Non-linear activation g(z) bends the coordinate space.\n• Step 3: In the warped hidden feature space h = g(W^[1]x + b^[1]), non-linearly entangled data points become linearly separable.\n• Step 4: The final linear layer can now cleanly classify data with a simple hyperplane.",
      "formula": "f(x) = \\sum_{i=1}^{m} v_i \\; g\\left( w_i^T x + b_i \\right) \\quad (\\text{Universal Approximator})",
      "key_takeaways": [
        "Hidden layers enable neural networks to learn non-linear patterns and complex decision boundaries.",
        "Without non-linear activations, stacking 100 hidden layers collapses mathematically into a single linear model.",
        "Non-linear hidden representations provide the foundation for modern deep learning."
      ]
    },
    "sample_questions": [
      {
        "q": "What states that an MLP with at least one non-linear hidden layer can approximate any continuous function?",
        "options": [
          "Universal Approximation Theorem",
          "Central Limit Theorem",
          "Minsky-Papert Bound",
          "Moore's Law"
        ],
        "ans": "Universal Approximation Theorem",
        "exp": "Cybenko (1989) and Hornik (1991) proved the Universal Approximation Theorem for feed-forward networks."
      },
      {
        "q": "What happens if you remove all non-linear activation functions from a 50-layer deep neural network?",
        "options": [
          "It collapses into an equivalent 1-layer linear regression model",
          "It trains 50x faster with higher accuracy",
          "It becomes an unsupervised clustering model",
          "It throws a CUDA syntax error"
        ],
        "ans": "It collapses into an equivalent 1-layer linear regression model",
        "exp": "By the Linear Collapse Theorem, the product of 50 linear matrices W_50 ... W_1 is simply another single linear matrix W*."
      }
    ]
  },
  {
    "id": "st1_q78",
    "module_id": "st1_mod12",
    "module_name": "Module 12: Hands-on: Building Image Classifiers with PyTorch",
    "syllabus_lec": "Lectures 20–21",
    "topic": "Debugging Feature Map Indexing and Visualization Bugs",
    "difficulty": "Medium",
    "points": 1,
    "question": "A deep learning engineer wants to visualize the feature maps generated by the first convolution layer of a CNN. Each subplot should display the output produced by a different learned filter for the same input image. However, after running the code, all eight feature maps appear identical. Identify the coding error responsible for this behavior:\n\nimport matplotlib.pyplot as plt\nfeature_maps = model.features[0](input_image.unsqueeze(0))\nfeature_maps = feature_maps.squeeze(0).detach().cpu()\n\nplt.figure(figsize=(10, 5))\nfor i in range(8):\n    plt.subplot(2, 4, i + 1)\n    plt.imshow(feature_maps[0], cmap=\"gray\")\n    plt.title(f\"Filter {i+1}\")\n    plt.axis(\"off\")\nplt.tight_layout()\nplt.show()",
    "options": [
      "The feature maps should be converted into prediction probabilities before visualization",
      "The same feature map index is displayed in every iteration of the loop",
      "The convolution layer must be executed separately for each learned filter.",
      "The input image should be resized after generating the feature maps"
    ],
    "correct": 1,
    "explanation": "In line `plt.imshow(feature_maps[0], cmap=\"gray\")`, the indexing is hardcoded to index 0 (`feature_maps[0]`). In every iteration of the `for i in range(8):` loop, it repeatedly plots filter channel 0 instead of channel `i` (`feature_maps[i]`), causing all 8 subplots to show identical images.",
    "theory": {
      "title": "Tensor Slicing & Visualizing Convolutional Feature Activations",
      "what_is_it": "Feature map visualization inspects internal 2D channel activations across learned filter kernels to verify that filters learn diverse visual representations.\n\n💡 Beginner Intuition:\nImagine ordering an 8-photo album from a camera with 8 different colored lens filters. If the photo printer has a stuck paper feeder that prints Page 1 eight times in a row, you get 8 identical prints. The bug is not with the camera lenses (filters); it is simply printing page [0] instead of page [i].",
      "why_we_need_it": "🎯 Problem it Solves / Core Insight:\nDebugging tensor operations requires rigorous indexing discipline. In PyTorch, convolutional layer outputs have shape `(Batch, Channels, Height, Width)`. After removing the batch dimension via `.squeeze(0)`, the tensor has shape `(C, H, W)`. Slicing `feature_maps[i]` retrieves the 2D spatial activation map of filter `i`.",
      "how_it_works": "• Step 1: Forward pass: `feature_maps = conv_layer(img)` yields tensor of shape `(1, 8, 28, 28)`.\n• Step 2: Remove batch dimension: `feature_maps.squeeze(0)` yields `(8, 28, 28)`.\n• Step 3: Buggy line: `plt.imshow(feature_maps[0])` repeatedly renders channel 0.\n• Step 4: Correct fix: `plt.imshow(feature_maps[i], cmap='gray')` slices each filter channel dynamically.\n• Step 5: Now subplots display 8 diverse filters: horizontal edges, vertical edges, color contrasts.",
      "formula": "\\text{Feature Map } i = \\mathcal{F}_{:, :, i} = \\text{feature\\_maps}[i, :, :]",
      "key_takeaways": [
        "In PyTorch vision tensors, channels correspond to the first dimension after squeezing batch: (C, H, W).",
        "Hardcoding index [0] inside a loop is a classic indexing oversight.",
        "Visualizing early layers should reveal diverse edge and texture filters (Gabor-like filters)."
      ]
    },
    "sample_questions": [
      {
        "q": "What is the shape of `feature_maps` from `nn.Conv2d(3, 16, 3)` given an input tensor of shape `(1, 3, 32, 32)` with padding=1, after calling `.squeeze(0)`?",
        "options": [
          "torch.Size([16, 32, 32])",
          "torch.Size([1, 16, 32, 32])",
          "torch.Size([32, 32, 16])",
          "torch.Size([16])"
        ],
        "ans": "torch.Size([16, 32, 32])",
        "exp": "squeeze(0) removes the leading batch dimension of size 1, leaving (Channels=16, Height=32, Width=32)."
      },
      {
        "q": "Why is `.detach().cpu()` called before plotting a PyTorch tensor with matplotlib?",
        "options": [
          "Matplotlib requires CPU NumPy arrays and cannot process tensors with active autograd gradients",
          "To speed up GPU inference",
          "To normalize pixel values to [0, 255]",
          "To convert RGB to grayscale"
        ],
        "ans": "Matplotlib requires CPU NumPy arrays and cannot process tensors with active autograd gradients",
        "exp": "detach() removes the tensor from the autograd graph and cpu() moves it from VRAM to host RAM."
      }
    ]
  },
  {
    "id": "st1_q79",
    "module_id": "st1_mod14",
    "module_name": "Module 14: Self-Attention & Scaled Dot-Product Attention",
    "syllabus_lec": "Lectures 24–25",
    "topic": "Scaled Dot-Product Attention Output Calculation Using Weights × V",
    "difficulty": "Medium",
    "points": 1,
    "question": "A transformer model computes scaled dot-product attention for a sequence. The query-key similarity scores are calculated first and then normalized using the softmax function. During implementation review, the developer notices that the final attention output has not been computed before returning the result.\n\nimport math\nscores = Q @ K.transpose(-2, -1)\nscores = scores / math.sqrt(d_k)\nweights = torch.softmax(scores, dim=-1)\nweights = self.dropout(weights)\n# Missing code\nreturn output\n\nWhich missing statement correctly completes the attention mechanism?",
    "options": [
      "output = Q @ weights",
      "output = weights @ V",
      "output = K @ weights",
      "output = V @ scores"
    ],
    "correct": 1,
    "explanation": "In the Transformer scaled dot-product attention formula: Attention(Q, K, V) = Softmax((Q Kᵀ) / √d_k) · V. After computing the attention probability distribution weights = Softmax(scores), the final context-enriched output representation is calculated by multiplying the attention weights matrix by the Value matrix V: `output = weights @ V`.",
    "theory": {
      "title": "Value Aggregation: Context Synthesis via Softmax Weighting",
      "what_is_it": "The final stage of self-attention where normalized probability weights route and blend information from the Value matrix V.\n\n💡 Beginner Intuition:\nImagine baking a cake. `weights` is the recipe percentage: 70% dark chocolate, 20% milk, 10% sugar (summing to 100%). `V` represents the actual physical ingredients sitting in your pantry. Multiplying `weights @ V` produces the finished cake batter, perfectly flavored according to the recipe.",
      "why_we_need_it": "🎯 Problem it Solves / Core Insight:\nQuery and Key vectors only establish mutual semantic compatibility (who should attend to whom). The actual information that gets transmitted across the network is carried strictly inside the Value vectors V. Multiplying weights by V creates a dynamic, data-dependent weighted average of representations.",
      "how_it_works": "• Step 1: Query (N × d_k) dots with Keyᵀ (d_k × N) to produce raw scores (N × N).\n• Step 2: Divide by √d_k and apply Softmax row-wise to get probability weights (N × N).\n• Step 3: Value matrix V has shape (N × d_v).\n• Step 4: Multiply `weights (N × N) @ V (N × d_v)` to obtain output of shape (N × d_v).\n• Step 5: Every row i of `output` is a context-enriched vector: output_i = ∑_j weights_{i, j} V_j.",
      "formula": "\\text{Attention}(Q, K, V) = \\text{softmax}\\left( \\frac{Q K^T}{\\sqrt{d_k}} \\right) V = \\mathbf{A} \\cdot V",
      "key_takeaways": [
        "Attention output is a weighted linear combination of Value vectors V.",
        "The multiplication `weights @ V` matches matrix dimensions: (N × N) × (N × d_v) = (N × d_v).",
        "If token i assigns 90% attention to token j, output i will consist predominantly of vector V_j."
      ]
    },
    "sample_questions": [
      {
        "q": "What is the resulting tensor shape of multiplying `weights` of shape (Batch, Heads, 50, 50) with `V` of shape (Batch, Heads, 50, 64)?",
        "options": [
          "(Batch, Heads, 50, 64)",
          "(Batch, Heads, 50, 50)",
          "(Batch, Heads, 64, 64)",
          "(Batch, Heads, 50)"
        ],
        "ans": "(Batch, Heads, 50, 64)",
        "exp": "Matrix multiplication over the last two dimensions: (50 × 50) @ (50 × 64) = (50 × 64)."
      },
      {
        "q": "What happens if an attention query assigns 1.0 weight to key 3 and 0.0 to all other keys?",
        "options": [
          "The output vector for that query will be exactly equal to Value vector V_3",
          "The output vector becomes zero",
          "Softmax throws an exception",
          "The attention matrix is deleted"
        ],
        "ans": "The output vector for that query will be exactly equal to Value vector V_3",
        "exp": "With a one-hot attention distribution, 1.0 * V_3 + 0 * others = V_3."
      }
    ]
  },
  {
    "id": "st1_q80",
    "module_id": "st1_mod4",
    "module_name": "Module 4: Backpropagation Algorithm & Gradient Descent",
    "syllabus_lec": "Lectures 5–6",
    "topic": "Backpropagation Quantity Flow and Layer Gradients",
    "difficulty": "Easy",
    "points": 1,
    "question": "Which quantity is passed backward through a network during backpropagation?",
    "options": [
      "Class labels",
      "Input batches",
      "Output classes",
      "Layer gradients"
    ],
    "correct": 3,
    "explanation": "During backpropagation, the quantities transmitted backward from output to input through the computation graph are layer gradients (partial derivatives of the loss with respect to intermediate activations and parameters: ∂L/∂a, ∂L/∂z, ∂L/∂W).",
    "theory": {
      "title": "Gradient Message Passing: Reverse-Mode Automatic Differentiation",
      "what_is_it": "Backpropagation is a reverse dataflow process where vectors/tensors of partial derivatives (layer gradients) are passed backwards through each layer node.\n\n💡 Beginner Intuition:\nImagine an email chain where a customer files a $500 warranty claim (loss). The customer support lead forwards the $500 complaint backward to the manufacturing department. The manufacturing head analyzes the $500 complaint to see which component caused it. What flows backward through the offices is the financial liability (gradient), not the product itself (activations).",
      "why_we_need_it": "🎯 Problem it Solves / Core Insight:\nTo know how to adjust a weight in layer 1, you must know how much that weight contributed to the final prediction error. Passing layer gradients backwards allows each layer to locally compute parameter sensitivities without needing global information.",
      "how_it_works": "• Forward Pass: Inputs x flow forward to produce activations a^[l] and scalar loss L.\n• Backward Initialization: Seed backward pass with scalar derivative ∂L/∂L = 1.0.\n• Backward Step 1: Compute output layer gradient: g_out = ∂L/∂a^[L].\n• Backward Step 2: Multiply by local Jacobian: g_prev = g_out · J_layer.\n• Backward Step 3: Repeat until input layer is reached.",
      "formula": "g^{[l-1]} = g^{[l]} \\cdot \\frac{\\partial a^{[l]}}{\\partial a^{[l-1]}} = \\frac{\\partial \\mathcal{L}}{\\partial a^{[l-1]}}",
      "key_takeaways": [
        "Layer gradients (derivatives) flow backward through the computational graph.",
        "Activations and feature maps flow forward; gradients flow backward.",
        "Each layer computes parameter gradients locally using incoming layer gradients."
      ]
    },
    "sample_questions": [
      {
        "q": "In PyTorch, what attribute on a Parameter tensor holds the backward-flowing gradient values?",
        "options": [
          ".grad",
          ".backward_val",
          ".delta",
          ".loss"
        ],
        "ans": ".grad",
        "exp": "PyTorch stores the accumulated partial derivative in the .grad tensor attribute."
      },
      {
        "q": "What mathematical property ensures that layer gradients can be computed backwards sequentially?",
        "options": [
          "The chain rule of differential calculus",
          "The associative property of matrix addition",
          "The Pythagorean theorem",
          "Heisenberg's uncertainty principle"
        ],
        "ans": "The chain rule of differential calculus",
        "exp": "The chain rule allows composite function derivatives to be factored into a sequence of multiplied local Jacobians."
      }
    ]
  },
  {
    "id": "st1_q81",
    "module_id": "st1_mod4",
    "module_name": "Module 4: Backpropagation Algorithm & Gradient Descent",
    "syllabus_lec": "Lectures 5–6",
    "topic": "SGD Convergence Dynamics & Learning Rate Tuning",
    "difficulty": "Medium",
    "points": 1,
    "question": "A student implements stochastic gradient descent. During training, the loss fluctuates violently without decreasing. What is the most likely cause?",
    "options": [
      "Dataset too large",
      "Network too shallow",
      "Learning rate too large",
      "Batch normalization enabled"
    ],
    "correct": 2,
    "explanation": "When the learning rate η is set excessively high, gradient descent takes overly large update steps that overshoot the valleys of the loss surface. Rather than descending smoothly toward a local minimum, the parameters oscillate wildly or diverge entirely, resulting in violent fluctuations without loss reduction.",
    "theory": {
      "title": "Learning Rate Dynamics: Overshooting, Divergence & Oscillation",
      "what_is_it": "The learning rate (η) is the most critical optimization hyperparameter, dictating the step size taken along the negative gradient direction during parameter updates.\n\n💡 Beginner Intuition:\nImagine navigating down a steep mountain at night toward a base camp in the valley. If your step size is reasonable, you carefully step downward with each stride. But if you strap on rocket boots that propel you 500 feet with every step (overly large learning rate), you overshoot the valley floor completely and crash into the opposite cliff face back and forth, never settling at camp.",
      "why_we_need_it": "🎯 Problem it Solves / Core Insight:\nGradient vectors ∇L point in the direction of steepest ascent locally at the current point W. The linear approximation holds only within an infinitesimal neighborhood. If η is too large, the update violates the local quadratic basin assumption, leading to loss explosion or severe bouncing.",
      "how_it_works": "• Step 1: Compute parameter gradient: g = ∇_W L.\n• Step 2: Scale gradient by learning rate: ΔW = -η · g.\n• Step 3: If η > 2/L_smooth (where L_smooth is the Lipschitz constant of the gradient), the step overshoots the minimum.\n• Step 4: Parameter oscillates across ravine walls with growing or undamped amplitudes.\n• Remedy: Decrease learning rate by a factor of 10 (e.g. from 0.1 to 0.01 or 0.001) or implement learning rate warmup/scheduling.",
      "formula": "W^{(t+1)} = W^{(t)} - \\eta \\nabla_W \\mathcal{L}(W^{(t)}), \\quad \\text{Divergence condition: } \\eta > \\frac{2}{\\lambda_{\\max}(H)}",
      "key_takeaways": [
        "Violent loss oscillations that fail to decrease are the classic hallmark of an excessively high learning rate.",
        "A proper learning rate ensures steady, monotonic or bounded decrease in loss over training iterations.",
        "Learning rate warmups and adaptive optimizers (Adam, RMSProp) mitigate overshooting by scaling step sizes dynamically."
      ]
    },
    "sample_questions": [
      {
        "q": "What typical loss curve symptom occurs when the learning rate is chosen too large in deep learning?",
        "options": [
          "The training loss fluctuates wildly or diverges to NaN/infinity",
          "The loss decreases smoothly to zero in 2 iterations",
          "The validation loss exactly matches training loss at all epochs",
          "The model achieves perfect test accuracy immediately"
        ],
        "ans": "The training loss fluctuates wildly or diverges to NaN/infinity",
        "exp": "Excessive step size repeatedly overshoots the minimum, causing chaotic oscillations or divergence."
      },
      {
        "q": "If an optimizer with learning rate η = 0.5 oscillates wildly without converging, what is the best immediate diagnostic step?",
        "options": [
          "Increase learning rate to 5.0",
          "Decrease learning rate by an order of magnitude (e.g. to 0.01 or 0.001)",
          "Remove all non-linear activation functions",
          "Add 20 more dense layers to the model"
        ],
        "ans": "Decrease learning rate by an order of magnitude (e.g. to 0.01 or 0.001)",
        "exp": "Lowering the learning rate restores stability and keeps update steps within the valid curvature basin."
      }
    ]
  },
  {
    "id": "st1_q82",
    "module_id": "st1_mod7",
    "module_name": "Module 7: Convolutional Neural Networks (CNNs)",
    "syllabus_lec": "Lectures 11–12",
    "topic": "MaxPooling Spatial Invariance and Dimension Reduction",
    "difficulty": "Medium",
    "points": 1,
    "question": "A convolutional network includes several max-pooling layers. What is the primary purpose of these layers?",
    "options": [
      "Increase the number of feature channels",
      "Reduce spatial dimensions and introduce translation invariance",
      "Add trainable weights for non-linear regression",
      "Compute the loss gradients during forward pass"
    ],
    "correct": 1,
    "explanation": "Max-pooling reduces the spatial resolution (height and width) of intermediate feature maps, which cuts memory and computational costs while providing a degree of local translation invariance (small shifts in the input do not alter the maximum response within each pooling window).",
    "theory": {
      "title": "Pooling Operations: Spatial Downsampling & Local Invariance",
      "what_is_it": "Imagine looking at an 8-megapixel digital photo through a mosaic grid where you replace every 2×2 square of pixels with just the single brightest pixel. The photo shrinks to a quarter of its original size (saving memory), but the brightest features (like the white edge of a tooth or the glint in an eye) are still preserved. Even if the person moves their eye 1 pixel to the left, the maximum brightness in that 2×2 box is still captured!",
      "why_we_need_it": "Raw high-resolution feature maps require massive GPU VRAM and computational cycles. Furthermore, vision models need to be invariant to minor pixel translations and shifts. Max-pooling downsamples spatial feature maps without adding any trainable parameters.",
      "how_it_works": "• Step 1: Define pooling window size (typically 2×2) and stride (typically S = 2).\n• Step 2: Slide the window non-overlapping across each channel of the input feature map.\n• Step 3: For each 2×2 patch, extract the maximum scalar value: y = max(x_{1,1}, x_{1,2}, x_{2,1}, x_{2,2}).\n• Step 4: Output feature map has halved width and halved height: W_out = W_in / 2, H_out = H_in / 2.",
      "formula": "y_{i,j,c} = \\max_{0 \\le m, n < K} x_{i \\cdot S + m, \\; j \\cdot S + n, \\; c}",
      "key_takeaways": [
        "Max-pooling reduces spatial dimensions (H × W) while keeping channel depth C identical.",
        "It provides local translation invariance: slight translations of an object do not change the pooled output.",
        "It contains zero learnable weights (fixed deterministic operation)."
      ]
    },
    "sample_questions": [
      {
        "q": "How many learnable parameters are in a 2×2 Max-Pooling layer with stride 2 applied to a 64-channel feature map?",
        "options": [
          "0 parameters",
          "256 parameters",
          "128 parameters",
          "64 parameters"
        ],
        "ans": "0 parameters",
        "exp": "Max pooling is a fixed mathematical operation (max) and has 0 trainable parameters."
      },
      {
        "q": "What effect does a 2×2 max pooling layer with stride 2 have on a feature map of shape (32, 32, 128)?",
        "options": [
          "Changes shape to (16, 16, 128)",
          "Changes shape to (32, 32, 64)",
          "Changes shape to (16, 16, 64)",
          "Changes shape to (64, 64, 128)"
        ],
        "ans": "Changes shape to (16, 16, 128)",
        "exp": "Height and width are halved (32/2 = 16), while channel depth remains unchanged at 128."
      }
    ]
  },
  {
    "id": "st1_q83",
    "module_id": "st1_mod13",
    "module_name": "Module 13: Recurrent Neural Networks (RNNs)",
    "syllabus_lec": "Lect 22–23",
    "topic": "Understanding Recurrent Neural Network Sequential Hidden States",
    "difficulty": "Medium",
    "points": 1,
    "question": "A recurrent neural network processes a sentence one word at a time. A student modifies the hidden state computation during the sequence. Why does this modification change the predictions of all subsequent words?",
    "options": [
      "Each hidden state carries information that influences future sequence processing.",
      "Hidden states only affect the current token.",
      "RNN weights are updated after every token.",
      "Only the final hidden state influences the network's predictions."
    ],
    "correct": 0,
    "explanation": "In an RNN, the recurrence equation is h_t = tanh(W_hh * h_{t-1} + W_xh * x_t + b_h). Because each hidden state h_t is fed directly as input into the computation of the next hidden state h_{t+1}, altering h_t alters h_{t+1}, h_{t+2}, ..., and so on recursively throughout the remaining sequence.",
    "theory": {
      "title": "Recurrent Neural Networks (RNNs) & Hidden State Dynamics",
      "what_is_it": "Think of an RNN like a person reading a book one word at a time while keeping a mental summary in their memory. When you read word #5, your brain doesn't just read word #5 in isolation; it combines word #5 with your mental memory from words 1 to 4. If someone secretly tampers with your mental memory at word #5, every subsequent thought, prediction, and understanding you have for words 6, 7, and 8 will be fundamentally changed!",
      "why_we_need_it": "Standard feedforward MLPs assume all inputs and outputs are independent of each other (i.i.d.). However, sequential data (like language, audio, or stock prices) contains strong temporal dependencies where order matters. RNNs solve this by maintaining an internal state (memory vector) that persists across sequential steps.",
      "how_it_works": "Step 1: Input x_t (e.g. word embedding at time t) and previous hidden state h_{t-1} are received.\nStep 2: Linear transformations are applied: W_xh @ x_t and W_hh @ h_{t-1}.\nStep 3: The vectors are summed with bias b_h and passed through an activation function (typically tanh): h_t = tanh(W_hh * h_{t-1} + W_xh * x_t + b_h).\nStep 4: The hidden state h_t is emitted to compute output y_t = softmax(W_hy * h_t + b_y) and also passed forward to become the memory for step t+1.",
      "formula": "Hidden state update: h_t = \\tanh(W_{hh} h_{t-1} + W_{xh} x_t + b_h) \\quad Output prediction: \\hat{y}_t = \\text{softmax}(W_{hy} h_t + b_y) \\quad Chain rule through time: \\frac{\\partial L}{\\partial h_1} = \\frac{\\partial L}{\\partial h_T} \\prod_{k=2}^T \\frac{\\partial h_k}{\\partial h_{k-1}}",
      "key_takeaways": [
        "Hidden states serve as the persistent memory carrier across sequential time steps.",
        "Because of recursion, changing h_t cascades forward to alter all downstream states h_{t+1}, ..., h_T.",
        "Repeated multiplication by W_hh during backpropagation through time (BPTT) leads to vanishing or exploding gradients in long sequences."
      ]
    },
    "sample_questions": [
      {
        "q": "What is the temporal recurrence relation in a standard Elman RNN?",
        "options": [
          "h_t = tanh(W_hh * h_{t-1} + W_xh * x_t + b_h)",
          "h_t = softmax(W * x_t)",
          "h_t = W_hh * h_t + W_xh * x_{t-1}",
          "h_t = ReLU(x_t * x_{t-1})"
        ],
        "ans": "h_t = tanh(W_hh * h_{t-1} + W_xh * x_t + b_h)",
        "exp": "The hidden state h_t depends on both the previous time step hidden state h_{t-1} and current token input x_t."
      },
      {
        "q": "If an error occurs in computing h_3 in a 10-token sequence, which outputs are affected during the forward pass?",
        "options": [
          "Only y_3",
          "All outputs from y_3 to y_10",
          "Only y_10",
          "None, because RNNs process tokens independently in parallel"
        ],
        "ans": "All outputs from y_3 to y_10",
        "exp": "Hidden states cascade forward causally. Any perturbation at step 3 cascades into all future hidden states h_4...h_10 and their corresponding emissions."
      }
    ]
  },
  {
    "id": "st1_q84",
    "module_id": "st1_mod3",
    "module_name": "Module 3: MLP Forward Pass & Network Representation",
    "syllabus_lec": "Lect 4",
    "topic": "Preventing Signal Collapse: Weight Initialization Before Forward Pass",
    "difficulty": "Medium",
    "points": 1,
    "question": "A deep learning model is built using multiple dense layers. Before executing the first forward pass, which step is required to ensure activations neither vanish nor explode across layers?",
    "options": [
      "Initialize weights using a variance-preserving initialization strategy.",
      "Set all weights to zero to ensure identical starting points.",
      "Initialize all weights to large positive integers to boost signal strength.",
      "Train the model for 100 epochs before defining initial weights."
    ],
    "correct": 0,
    "explanation": "Without proper weight initialization (such as Xavier/Glorot for Sigmoid/Tanh or He/Kaiming for ReLU), activations and gradients will either shrink exponentially to zero (vanishing signal) or explode exponentially towards infinity as depth increases. Variance-preserving initialization keeps Var(z^[l]) ≈ Var(z^[l-1]).",
    "theory": {
      "title": "Principles of Neural Network Weight Initialization",
      "what_is_it": "Imagine passing a message down a line of 50 people. If each person whispers 10% quieter than the previous person, by person 10 nobody hears anything (vanishing). If each person shouts 10% louder, by person 10 their ears are bleeding (exploding). Proper weight initialization tunes the microphone volume so every person speaks at exactly the same loudness as the person before them.",
      "why_we_need_it": "In deep networks, multiplying inputs across dozens of linear layers compounds scale. If weights are too small, variance collapses to 0; if too large, variance explodes to infinity, saturating activations and breaking gradient descent.",
      "how_it_works": "Step 1: Compute input fan-in (n_in) and fan-out (n_out) for each layer.\nStep 2: If activation is ReLU, sample weights from a Gaussian distribution with mean 0 and variance σ² = 2 / n_in (He Normal).\nStep 3: If activation is Tanh or Sigmoid, sample weights with variance σ² = 2 / (n_in + n_out) (Xavier/Glorot).\nStep 4: Initialize bias vectors to constant zeros (b = 0).\nStep 5: Execute the first forward pass, verifying activations maintain stable variance (~1.0) throughout all depths.",
      "formula": "Variance Propagation: \\text{Var}(z_i) = n_{\\text{in}} \\cdot \\text{Var}(w) \\cdot \\text{Var}(x) \\quad He / Kaiming Initialization: W \\sim \\mathcal{N}\\left(0, \\sqrt{\\frac{2}{n_{\\text{in}}}}\\right) \\quad Xavier / Glorot Initialization: W \\sim \\mathcal{N}\\left(0, \\sqrt{\\frac{2}{n_{\\text{in}} + n_{\\text{out}}}}\\right)",
      "key_takeaways": [
        "Proper initialization preserves activation variance during forward propagation and gradient variance during backpropagation.",
        "ReLU halves variance because it drops negative inputs; He initialization compensates with a numerator factor of 2.",
        "Biases can safely be initialized to zero because symmetry breaking is handled entirely by random weight diversity."
      ]
    },
    "sample_questions": [
      {
        "q": "What catastrophic failure occurs if all neural network weights in a dense layer are initialized to exactly zero?",
        "options": [
          "Gradients explode immediately",
          "All neurons in the layer learn identical features (symmetry problem)",
          "The learning rate becomes negative",
          "Weights divide by zero during forward pass"
        ],
        "ans": "All neurons in the layer learn identical features (symmetry problem)",
        "exp": "Symmetric zero initialization causes all hidden units to compute identical activations and receive identical gradients, preventing feature specialization."
      },
      {
        "q": "Which initialization strategy is mathematically derived specifically for ReLU activations?",
        "options": [
          "Xavier / Glorot: Var(W) = 2 / (n_in + n_out)",
          "He / Kaiming: Var(W) = 2 / n_in",
          "LeCun: Var(W) = 1 / (n_in + n_out)",
          "Uniform zeros: W = 0"
        ],
        "ans": "He / Kaiming: Var(W) = 2 / n_in",
        "exp": "He initialization uses Var(W) = 2 / n_in to compensate for ReLU zeroing out half of the activations on average."
      }
    ]
  },
  {
    "id": "st1_q85",
    "module_id": "st1_mod4",
    "module_name": "Module 4: Backpropagation Algorithm & Gradient Descent",
    "syllabus_lec": "Lect 5–6",
    "topic": "Identifying Gradient Descent Variants: Stochastic Gradient Descent",
    "difficulty": "Easy",
    "points": 1,
    "question": "A gradient-descent variant updates model parameters immediately after processing a single training example. Which method is this?",
    "options": [
      "Batch GD",
      "Mini-batch GD",
      "Stochastic GD",
      "Adam"
    ],
    "correct": 2,
    "explanation": "Stochastic Gradient Descent (SGD) sets the batch size to exactly 1 (B = 1), updating the model weights immediately after evaluating the loss on a single individual training instance.",
    "theory": {
      "title": "Taxonomy of Gradient Descent: Batch vs Mini-batch vs Stochastic",
      "what_is_it": "Imagine steering a boat towards an island. Batch GD inspects the entire ocean map before nudging the rudder once every hour (slow, extremely deliberate). Stochastic GD looks at a single ripple in the water and jerks the rudder every second (very fast, but wobbles wildly). Mini-batch GD looks at a small cluster of waves every few seconds, striking the perfect balance between speed and stability.",
      "why_we_need_it": "Batch GD requires processing the entire dataset through memory before taking one step, making it infeasible for big datasets. Pure SGD provides immediate updates and can escape shallow local minima due to noise, but fails to utilize vectorized GPU hardware acceleration.",
      "how_it_works": "Batch GD (B = N): Accumulates loss over all N training samples, computes true gradient ∇L, updates once per epoch.\nStochastic GD (B = 1): Samples a single pair (x_i, y_i), computes gradient g_i, updates W ← W - η * g_i immediately.\nMini-batch GD (1 < B < N): Partitions data into chunks (typically 32, 64, 128, 256), leveraging SIMD/GPU tensor cores efficiently while maintaining stable gradient directions.",
      "formula": "Pure SGD Update: W^{(t+1)} = W^{(t)} - \\eta \\nabla_W \\mathcal{L}(f(x_i; W), y_i) \\quad Mini-Batch GD: W^{(t+1)} = W^{(t)} - \\eta \\frac{1}{B} \\sum_{j=1}^B \\nabla_W \\mathcal{L}(f(x_{i_j}; W), y_{i_j}) \\quad Batch GD: W^{(t+1)} = W^{(t)} - \\eta \\frac{1}{N} \\sum_{i=1}^N \\nabla_W \\mathcal{L}(f(x_i; W), y_i)",
      "key_takeaways": [
        "Pure SGD has batch size B = 1, giving N weight updates per epoch.",
        "Mini-batch GD (e.g. B = 32 or 64) is the universal industry standard because it maximizes GPU parallel throughput.",
        "Noise in SGD/mini-batch acts as implicit regularization, helping the optimizer escape saddle points and sharp local minima."
      ]
    },
    "sample_questions": [
      {
        "q": "What is the primary characteristic of pure Stochastic Gradient Descent (SGD) compared to Batch Gradient Descent?",
        "options": [
          "SGD computes exact gradients over all N dataset examples before updating",
          "SGD updates weights after every single sample, resulting in noisy but fast iterations",
          "SGD requires second-order Hessian matrix computation",
          "SGD guarantees strictly monotonic decrease in training loss on every step"
        ],
        "ans": "SGD updates weights after every single sample, resulting in noisy but fast iterations",
        "exp": "By updating after every single example (batch size = 1), SGD takes frequent updates with high gradient variance (noisy trajectory)."
      },
      {
        "q": "If a dataset contains 10,000 examples, how many weight updates occur in one epoch under pure SGD?",
        "options": [
          "1 update",
          "100 updates",
          "10,000 updates",
          "313 updates"
        ],
        "ans": "10,000 updates",
        "exp": "Since pure SGD updates once per sample, 10,000 samples yield 10,000 parameter updates per epoch."
      }
    ]
  },
  {
    "id": "st1_q86",
    "module_id": "st1_mod7",
    "module_name": "Module 7: Convolutional Neural Networks (CNNs)",
    "syllabus_lec": "Lect 11–12",
    "topic": "Spatial Output Preservation: Same Padding for 3x3 Convolutions",
    "difficulty": "Easy",
    "points": 1,
    "question": "A convolutional layer applies a 3×3 kernel with stride 1. Which configuration ensures the spatial width and height of the feature map match the input dimensions?",
    "options": [
      "Padding 0",
      "Padding 2",
      "Stride 2",
      "Padding 1"
    ],
    "correct": 3,
    "explanation": "The spatial output formula is W_out = floor((W_in - K + 2P)/S) + 1. For K = 3 and S = 1, setting P = 1 gives W_out = (W_in - 3 + 2(1))/1 + 1 = W_in - 1 + 1 = W_in. Thus Padding = 1 ('same' padding) preserves spatial dimensions.",
    "theory": {
      "title": "Spatial Dimensions & Padding in Convolutional Neural Networks",
      "what_is_it": "When a 3×3 magnifying glass slides across a grid, its center cannot visit the very edge pixels without hanging off the border. If you don't allow it to hang off (padding = 0), you lose 1 pixel from each side, shrinking your grid. If you add a 1-pixel border of zeros all around your image (padding = 1), the magnifying glass can center directly on the real outer edges, leaving the output grid exactly the same size as the original!",
      "why_we_need_it": "In deep CNNs with dozens of layers, convolutions without padding rapidly shrink the image down to 1×1 after just a few layers, preventing the construction of deep architectures. Padding preserves spatial resolution across layers.",
      "how_it_works": "Step 1: Identify kernel size K = 3 and stride S = 1.\nStep 2: Recall spatial formula: O = floor((I - K + 2P)/S) + 1.\nStep 3: Set O = I: I = (I - 3 + 2P)/1 + 1 => I = I - 2 + 2P => 2P = 2 => P = 1.\nStep 4: Adding 1 pixel of zero-padding along all four borders (top, bottom, left, right) preserves input height and width.",
      "formula": "Output Dimension: W_{\\text{out}} = \\left\\lfloor \\frac{W_{\\text{in}} - K + 2P}{S} \\right\\rfloor + 1 \\quad Same Padding Formula (for S = 1): P = \\frac{K - 1}{2} \\quad Valid Padding: P = 0 \\implies W_{\\text{out}} = W_{\\text{in}} - K + 1",
      "key_takeaways": [
        "Padding = 1 with a 3×3 kernel and Stride = 1 produces 'same' convolution (output dimensions equal input dimensions).",
        "For odd kernel K, same padding is always P = (K - 1) / 2.",
        "Zero-padding also prevents information loss at the extreme boundaries of an image."
      ]
    },
    "sample_questions": [
      {
        "q": "What general formula calculates the required padding P to preserve spatial dimensions (same padding) for odd kernel size K with stride S = 1?",
        "options": [
          "P = (K - 1) / 2",
          "P = K / 2",
          "P = K - 1",
          "P = 2 * K"
        ],
        "ans": "P = (K - 1) / 2",
        "exp": "For any odd kernel size K, same padding requires P = (K - 1) / 2. For K = 3, P = 1; for K = 5, P = 2; for K = 7, P = 3."
      },
      {
        "q": "If an input image is 28×28 and processed with a 3×3 convolution, stride 1, and padding 0 ('valid' padding), what is the output spatial size?",
        "options": [
          "28×28",
          "26×26",
          "27×27",
          "14×14"
        ],
        "ans": "26×26",
        "exp": "W_out = floor((28 - 3 + 0)/1) + 1 = 25 + 1 = 26."
      }
    ]
  },
  {
    "id": "st1_q87",
    "module_id": "st1_mod7",
    "module_name": "Module 7: Convolutional Neural Networks (CNNs)",
    "syllabus_lec": "Lect 11–12",
    "topic": "Effect of Increasing Stride in Convolutional Operations",
    "difficulty": "Easy",
    "points": 1,
    "question": "What usually happens when the convolution stride is increased?",
    "options": [
      "Parameters increase",
      "Channels decrease",
      "Feature map shrinks",
      "Kernel size increases"
    ],
    "correct": 2,
    "explanation": "Stride determines how many pixels the kernel moves on each step. Increasing stride causes the filter to take larger jumps across the input grid, resulting in fewer sampling positions and shrinking the spatial height and width of the output feature map (downsampling).",
    "theory": {
      "title": "Role of Stride in Convolutional Downsampling",
      "what_is_it": "Think of walking across a room taking normal 1-foot steps versus giant 2-foot leaps. When you take 2-foot leaps (stride 2), it takes you half as many steps to reach the other side! Similarly, a convolutional filter with stride 2 steps over twice as much territory per shift, producing an output feature map that has half the width and half the height.",
      "why_we_need_it": "Modern vision networks need to expand their receptive field and reduce spatial memory consumption as features become more semantically abstract. Strided convolutions provide learnable downsampling, often replacing fixed max-pooling layers.",
      "how_it_works": "Step 1: In standard convolution (stride S = 1), the window moves 1 pixel at a time.\nStep 2: When stride is increased to S = 2, the window advances 2 pixels per step horizontally and vertically.\nStep 3: The number of valid positions drops roughly by a factor of S along each spatial axis.\nStep 4: The resulting 2D output grid shrinks: W_out ≈ W_in / S, reducing computation for subsequent layers.",
      "formula": "Downsampling Ratio: W_{\\text{out}} = \\left\\lfloor \\frac{W_{\\text{in}} - K + 2P}{S} \\right\\rfloor + 1 \\quad Parameter Count: \\text{Params} = (K_h \\cdot K_w \\cdot C_{\\text{in}} + 1) \\cdot C_{\\text{out}} \\quad (\\text{independent of } S) \\quad Receptive Field Growth: \\text{RF}_{l} = \\text{RF}_{l-1} + (K_l - 1) \\cdot \\prod_{i=1}^{l-1} S_i",
      "key_takeaways": [
        "Increasing stride reduces the spatial dimensions (height and width) of the output feature map.",
        "Stride has zero effect on parameter count (parameters depend strictly on kernel size and channel depth).",
        "Strided convolution serves as an alternative to pooling for spatial dimensionality reduction."
      ]
    },
    "sample_questions": [
      {
        "q": "If an input feature map of size 64×64 is convolved with a 3×3 kernel, padding 1, and stride 2, what will the output spatial size be?",
        "options": [
          "64×64",
          "32×32",
          "16×16",
          "62×62"
        ],
        "ans": "32×32",
        "exp": "W_out = floor((64 - 3 + 2)/2) + 1 = floor(63/2) + 1 = 31 + 1 = 32. Doubling stride roughly halves spatial resolution."
      },
      {
        "q": "Does increasing stride from 1 to 2 alter the number of learnable parameters in the convolutional layer?",
        "options": [
          "Yes, parameters double",
          "Yes, parameters quadruple",
          "No, parameter count depends only on kernel dimensions and channel counts: K * K * C_in * C_out",
          "Yes, parameters halve"
        ],
        "ans": "No, parameter count depends only on kernel dimensions and channel counts: K * K * C_in * C_out",
        "exp": "Stride affects only the sliding step size across the activation map, not the number of weights stored in the filter."
      }
    ]
  },
  {
    "id": "st1_q88",
    "module_id": "st1_mod7",
    "module_name": "Module 7: Convolutional Neural Networks (CNNs)",
    "syllabus_lec": "Lect 11–12",
    "topic": "Weight Sharing in Convolutional Neural Networks",
    "difficulty": "Medium",
    "points": 1,
    "question": "Why is sharing one kernel preferred in CNNs?",
    "options": [
      "Sharing one kernel removes the need for activation functions.",
      "Sharing one kernel allows the network to process text instead of images.",
      "Sharing one kernel ensures the loss function is convex.",
      "Sharing one kernel enables consistent feature detection while reducing trainable parameters."
    ],
    "correct": 3,
    "explanation": "Weight sharing (using the same kernel across all spatial locations) provides translation equivariance (detecting an edge or eye regardless of where it appears in an image) while dramatically slashing the number of trainable weights compared to a fully connected layer.",
    "theory": {
      "title": "Inductive Biases of CNNs: Weight Sharing & Local Connectivity",
      "what_is_it": "Imagine searching for cats in photographs. A cat ear looks like a triangle whether it is located in the top-left corner, center, or bottom-right corner of the picture. If you had to train a separate detector for every single pixel location (like an MLP does), you would need millions of redundant parameters. By sharing one filter across the entire image, the same detector scans everywhere!",
      "why_we_need_it": "A fully connected layer connecting a 1000×1000 RGB image (3M numbers) to a 1000-unit hidden layer would require 3 billion weights for a single layer! Weight sharing reduces this to just a few hundred or thousand parameters while enforcing translation equivariance.",
      "how_it_works": "Step 1: A small kernel (e.g. 3×3) is defined with a fixed set of weights.\nStep 2: The kernel slides systematically across every spatial patch of the image.\nStep 3: At each position, the same dot product is performed using the identical weights.\nStep 4: If an edge pattern appears anywhere in the image, the shared filter activates strongly at that coordinate.",
      "formula": "Discrete 2D Convolution: S(i, j) = (I * K)(i, j) = \\sum_m \\sum_n I(i + m, j + n) K(m, n) \\quad Translation Equivariance: T_v(I * K) = (T_v(I)) * K \\quad MLP Parameter Count: \\mathcal{O}(H \\cdot W \\cdot C_{\\text{in}} \\cdot H_{\\text{out}} \\cdot W_{\\text{out}} \\cdot C_{\\text{out}}) \\quad CNN Parameter Count: \\mathcal{O}(K_h \\cdot K_w \\cdot C_{\\text{in}} \\cdot C_{\\text{out}})",
      "key_takeaways": [
        "Weight sharing means the same filter weights are applied across all spatial locations of an input.",
        "It provides translation equivariance: shifting an object in the input shifts its detection in the output map.",
        "It drastically reduces parameter count, preventing overfitting and enabling deep architectures on high-resolution images."
      ]
    },
    "sample_questions": [
      {
        "q": "What key mathematical property arises directly from applying the exact same convolution kernel across every pixel location of an input?",
        "options": [
          "Translation Equivariance: f(g(x)) = g(f(x))",
          "Scale Invariance: f(c * x) = f(x)",
          "Rotation Invariance: f(R * x) = f(x)",
          "Orthogonal Invariance: f(U * x) = f(x)"
        ],
        "ans": "Translation Equivariance: f(g(x)) = g(f(x))",
        "exp": "Convolving with shared weights creates translation equivariance: shifting the input image results in an equally shifted feature map."
      },
      {
        "q": "How many weights does a single 5×5 kernel (with 1 input channel and 1 bias) have, regardless of whether the input image is 32×32 or 1024×1024?",
        "options": [
          "26 parameters (5*5 + 1)",
          "1,024 parameters",
          "1,048,576 parameters",
          "32 parameters"
        ],
        "ans": "26 parameters (5*5 + 1)",
        "exp": "Due to weight sharing, a 5×5 kernel requires only 25 weights + 1 bias = 26 parameters, regardless of the input spatial resolution."
      }
    ]
  },
  {
    "id": "st1_q89",
    "module_id": "st1_mod6",
    "module_name": "Module 6: Implementation of Neural Networks in PyTorch",
    "syllabus_lec": "Lect 8–10",
    "topic": "PyTorch Autograd: Identifying the Missing Gradient Computation Step",
    "difficulty": "Easy",
    "points": 1,
    "question": "A training loop contains the following operations:\noptimizer.zero_grad()\noutputs = model(inputs)\nloss = criterion(outputs, labels)\n[ missing statement ]\noptimizer.step()\nWhich statement is required to compute gradients?",
    "options": [
      "model.eval()",
      "outputs.backward()",
      "loss.backward()",
      "optimizer.update()"
    ],
    "correct": 2,
    "explanation": "In PyTorch, calling `loss.backward()` triggers reverse-mode automatic differentiation (autograd), traversing the computation graph backwards from the scalar loss to compute ∂L/∂w for all model parameters with `requires_grad=True` and populating their `.grad` attributes.",
    "theory": {
      "title": "PyTorch Autograd Engine & The Canonical Training Loop",
      "what_is_it": "Think of a PyTorch training loop like an archer practicing target shooting. 1) Clear yesterday's score card (`optimizer.zero_grad()`). 2) Shoot the arrow (`outputs = model(inputs)`). 3) Measure how far the arrow landed from the bullseye (`loss = criterion(...)`). 4) Trace the arrow's trajectory backward through wind and angle to calculate what mistakes your muscles made (`loss.backward()`). 5) Adjust your muscle posture (`optimizer.step()`). If you skip step 4, your muscles have no clue which direction to adjust!",
      "why_we_need_it": "Manual calculus for multi-million parameter networks is intractable. PyTorch autograd builds a dynamic Directed Acyclic Graph (DAG) during the forward pass. `loss.backward()` automatically applies the chain rule in reverse to populate gradients for every parameter.",
      "how_it_works": "1. `optimizer.zero_grad()`: Flushes accumulated gradients in `.grad` attributes to zero.\n2. `outputs = model(inputs)`: Performs forward pass through neural layers, constructing the computation graph.\n3. `loss = criterion(outputs, targets)`: Evaluates scalar objective error.\n4. `loss.backward()`: Traverses the computation graph backwards from scalar loss to leaves, populating `p.grad = ∂L/∂p`.\n5. `optimizer.step()`: Updates parameter values based on optimization rule (e.g. `p = p - lr * p.grad`).",
      "formula": "Gradient Accumulation: p.\\text{grad} \\leftarrow p.\\text{grad} + \\frac{\\partial \\mathcal{L}}{\\partial p} \\quad SGD Parameter Update: p \\leftarrow p - \\eta \\cdot p.\\text{grad} \\quad Computation Graph Leaf Relation: \\frac{\\partial \\mathcal{L}}{\\partial w_i} = \\sum_{j} \\frac{\\partial \\mathcal{L}}{\\partial z_j} \\frac{\\partial z_j}{\\partial w_i}",
      "key_takeaways": [
        "`loss.backward()` is the mandatory engine trigger that executes backpropagation in PyTorch.",
        "Gradients accumulate by default (`+=`), which is why `optimizer.zero_grad()` must precede each step.",
        "`optimizer.step()` uses the populated `p.grad` values to modify parameter weights."
      ]
    },
    "sample_questions": [
      {
        "q": "What does `loss.backward()` populate on each trainable parameter tensor `p`?",
        "options": [
          "`p.grad`",
          "`p.data`",
          "`p.loss`",
          "`p.step`"
        ],
        "ans": "`p.grad`",
        "exp": "`loss.backward()` computes gradients using backpropagation and stores the resulting partial derivatives in `tensor.grad`."
      },
      {
        "q": "What happens if `optimizer.step()` is called without calling `loss.backward()` first?",
        "options": [
          "Weights are updated using random gradients",
          "Weights remain unchanged (or updated using stale gradients from previous iterations if not zeroed)",
          "PyTorch automatically infers and calculates gradients silently",
          "The program crashes with a CUDA memory error"
        ],
        "ans": "Weights remain unchanged (or updated using stale gradients from previous iterations if not zeroed)",
        "exp": "`optimizer.step()` modifies parameters using the values currently stored in `p.grad`. If `loss.backward()` was never called, `.grad` is None (or stale), causing an error or no gradient update."
      }
    ]
  },
  {
    "id": "st1_q90",
    "module_id": "st1_mod8",
    "module_name": "Module 8: CNN Architectures for Computer Vision",
    "syllabus_lec": "Lect 13–14",
    "topic": "Milestone Vision Architectures: AlexNet and Modern Deep Learning",
    "difficulty": "Easy",
    "points": 1,
    "question": "Which architecture is widely known for popularizing ReLU activations and dropout while winning the 2012 ImageNet challenge?",
    "options": [
      "LeNet-5",
      "AlexNet",
      "VGG",
      "ResNet"
    ],
    "correct": 1,
    "explanation": "AlexNet (Krizhevsky, Sutskever, and Hinton, 2012) won the ImageNet Large Scale Visual Recognition Challenge (ILSVRC) 2012 by a massive margin, popularizing ReLU to replace saturating sigmoids, Dropout for regularization, data augmentation, and GPU training.",
    "theory": {
      "title": "AlexNet: The Catalyst of the Deep Learning Revolution",
      "what_is_it": "Before 2012, computer vision relied on hand-crafted mathematical formulas (like SIFT and HOG) engineered by human experts. AlexNet shattered this paradigm at the 2012 ImageNet competition, outperforming the closest competitor by over 10 percentage points! It proved that raw pixels fed into a deep convolutional network running on fast GPUs with ReLU and Dropout could learn far superior representations than any human could hand-code.",
      "why_we_need_it": "Earlier networks like LeNet-5 (1998) were limited to small digits (28×28). Scaling to 1000-class high-resolution ImageNet failed due to vanishing gradients in deep Sigmoid layers, massive overfitting in large parameter counts, and severe compute bottlenecks.",
      "how_it_works": "Architecture: 5 convolutional layers followed by 3 fully connected layers (60M parameters).\nReLU Non-linearity: Replaced tanh with f(x) = max(0, x), preventing gradient saturation and speeding up convergence 6x.\nRegularization: Introduced Dropout (50%) in FC layers and extensive data augmentation (random crops, horizontal flips).\nHardware Acceleration: Split across two parallel NVIDIA GTX 580 GPUs with cross-GPU communication.\nLocal Response Normalization (LRN): Used lateral inhibition across adjacent feature channels (later replaced by BatchNorm).",
      "formula": "ReLU Activation: f(x) = \\max(0, x) \\quad Dropout Training Mask: r_j \\sim \\text{Bernoulli}(1 - p), \\quad \\tilde{y} = r * y \\quad ILSVRC 2012 Result: \\text{AlexNet Top-5 Error} = 15.3\\% \\quad (\\text{Runner-up} = 26.2\\%)",
      "key_takeaways": [
        "AlexNet marked the dawn of the modern deep learning era in computer vision.",
        "Its key algorithmic innovations included ReLU, Dropout, and heavy data augmentation.",
        "It demonstrated the immense power of training deep neural networks on consumer GPUs."
      ]
    },
    "sample_questions": [
      {
        "q": "Which activation function did AlexNet popularize to achieve 6x faster training convergence than tanh on ImageNet?",
        "options": [
          "Sigmoid",
          "ReLU (Rectified Linear Unit)",
          "GELU",
          "Softmax"
        ],
        "ans": "ReLU (Rectified Linear Unit)",
        "exp": "AlexNet demonstrated that non-saturating ReLUs train multiple times faster than saturating activations like tanh or sigmoid."
      },
      {
        "q": "What regularization technique did AlexNet use in its fully connected layers to prevent severe overfitting?",
        "options": [
          "Dropout (p = 0.5)",
          "Batch Normalization",
          "Layer Normalization",
          "Weight Pruning"
        ],
        "ans": "Dropout (p = 0.5)",
        "exp": "AlexNet used Dropout with probability 0.5 in the first two fully connected layers (FC6 and FC7)."
      }
    ]
  },
  {
    "id": "st1_q91",
    "module_id": "st1_mod7",
    "module_name": "Module 7: Convolutional Neural Networks (CNNs)",
    "syllabus_lec": "Lect 11–12",
    "topic": "Feature Map Dimensionality Reduction: Global Average Pooling",
    "difficulty": "Medium",
    "points": 1,
    "question": "In a CNN classifier, the final convolutional layer outputs a feature map of shape 7×7×512. Instead of flattening this into a huge 25,088-dimensional vector, which layer can directly reduce it to a 1×1×512 (512-dimensional) vector without any learnable parameters?",
    "options": [
      "Max Pooling 2×2",
      "Dense Layer",
      "Global Average Pooling",
      "Batch Normalization"
    ],
    "correct": 2,
    "explanation": "Global Average Pooling (GAP) takes the average across the entire spatial dimensions (H × W) for each feature channel independently. A 7×7×512 tensor is reduced to 1×1×512 (or length 512), eliminating spatial dimensions without introducing any new trainable parameters.",
    "theory": {
      "title": "Global Average Pooling (GAP) in Modern Vision Backbones",
      "what_is_it": "Imagine you have 512 specialist detectives. Detective #17 is looking for dog noses across a 7×7 grid of clues. Instead of memorizing the exact grid coordinate where the nose was found, Detective #17 simply reports the overall average nose confidence across the whole picture. That single confidence score summarizes the channel, turning 49 numbers into 1 number with zero extra parameters!",
      "why_we_need_it": "In early CNNs (like AlexNet and VGG-16), flattening feature maps into dense layers accounted for over 80% to 90% of all parameters in the entire network (e.g. 7×7×512 -> 4096 = 100M+ weights!), leading to severe overfitting. GAP (introduced by Lin et al. in Network in Network and popularized by GoogLeNet and ResNet) completely eliminates these parameters.",
      "how_it_works": "Step 1: Receive output feature map of shape (C, H, W).\nStep 2: For each channel c ∈ {1, ..., C}, compute the mean over all H × W spatial locations: y_c = (1 / (H * W)) * sum_{i=1}^H sum_{j=1}^W x_{c, i, j}.\nStep 3: The resulting output vector has length C (or shape (C, 1, 1)).\nStep 4: Feed this vector directly into the final classification linear layer (C -> num_classes) or softmax.",
      "formula": "GAP Mathematical Formula: y_c = \\frac{1}{H \\cdot W} \\sum_{i=1}^H \\sum_{j=1}^W x_{c, i, j} \\quad VGG Flattening Parameters: 7 \\times 7 \\times 512 \\times 4096 \\approx 102{,}760{,}448 \\text{ weights} \\quad GAP Parameter Count: 0 \\text{ parameters}",
      "key_takeaways": [
        "Global Average Pooling collapses each H × W channel slice into a single mean value.",
        "It introduces 0 trainable parameters, dramatically reducing model size and preventing overfitting.",
        "It makes CNNs naturally invariant to input spatial size during evaluation."
      ]
    },
    "sample_questions": [
      {
        "q": "What is the primary advantage of using Global Average Pooling (GAP) instead of Flatten + Dense layers before the final classification layer?",
        "options": [
          "It drastically reduces parameter count and prevents overfitting",
          "It increases the spatial resolution of feature maps",
          "It allows the network to process variable channel counts dynamically",
          "It replaces the need for activation functions"
        ],
        "ans": "It drastically reduces parameter count and prevents overfitting",
        "exp": "GAP has zero parameters. Replacing huge Flatten + Dense connections (which often hold 80%+ of model parameters, like in VGG) with GAP drastically slashes weights and regularizes the model."
      },
      {
        "q": "If an input tensor to a Global Average Pooling layer has shape (batch_size, 256, 14, 14), what is the output tensor shape after GAP?",
        "options": [
          "(batch_size, 256, 1, 1) or (batch_size, 256)",
          "(batch_size, 14, 14)",
          "(batch_size, 50176)",
          "(batch_size, 1, 1)"
        ],
        "ans": "(batch_size, 256, 1, 1) or (batch_size, 256)",
        "exp": "GAP averages over the two spatial dimensions (14×14), leaving 1 average value per channel, producing shape (batch_size, 256)."
      }
    ]
  },
  {
    "id": "st1_q92",
    "module_id": "st1_mod6",
    "module_name": "Module 6: Implementation of Neural Networks in PyTorch",
    "syllabus_lec": "Lect 8–10",
    "topic": "Vectorized Deep Learning: NumPy Matrix Multiplication Operator",
    "difficulty": "Easy",
    "points": 1,
    "question": "In the vectorized Python/NumPy linear transformation expression Z = X @ w + b, what mathematical operation does the @ symbol perform?",
    "options": [
      "Element-wise multiplication (Hadamard product)",
      "Matrix multiplication (dot product of matrices)",
      "Cross product of vectors",
      "Convolutional filtering"
    ],
    "correct": 1,
    "explanation": "In Python 3.5+ and NumPy/PyTorch, the `@` operator designates matrix multiplication (equivalent to `np.matmul(X, w)` or `torch.matmul(X, w)`). Element-wise multiplication is performed using the `*` operator.",
    "theory": {
      "title": "Vectorized Operations & Matrix Multiplication in Modern AI",
      "what_is_it": "Imagine calculating the restaurant bill for 100 people where each person ordered 5 items. If you use a Python for-loop, you pull out a tiny calculator and press buttons one item at a time, 500 times. With matrix multiplication (`@`), you hand the entire table of orders and the price list to a supercomputer (GPU), which calculates all 100 bills simultaneously in one microsecond!",
      "why_we_need_it": "Explicit Python loops are notoriously slow due to interpreter overhead and dynamic type checking. Vectorizing linear layers via matrix operations (`@`) leverages optimized BLAS libraries (like Intel MKL, cuBLAS) and GPU parallel execution.",
      "how_it_works": "Step 1: Batch of N input vectors is arranged into matrix X of dimension (N, D_in).\nStep 2: Layer weights are arranged into matrix W of dimension (D_in, D_out).\nStep 3: The `@` operator executes matrix multiplication: Z_{ij} = sum_k X_{ik} * W_{kj}.\nStep 4: Bias vector b of shape (D_out,) is broadcast across all N rows: Z = X @ W + b.",
      "formula": "Matrix Multiplication: Z = X W = \\left[ \\sum_{k=1}^{D_{\\text{in}}} X_{ik} W_{kj} \\right]_{N \\times D_{\\text{out}}} \\quad Operator Disambiguation: \\text{Element-wise: } A * B = [A_{ij} B_{ij}], \\quad \\text{Matrix: } A @ B = \\sum_k A_{ik} B_{kj} \\quad Affine Linear Layer: Z = X @ W + \\mathbf{1}_N b^T",
      "key_takeaways": [
        "`@` is Python's dedicated infix operator for matrix multiplication (`np.matmul` / `torch.matmul`).",
        "`*` represents element-wise (Hadamard) multiplication.",
        "Vectorized matrix multiplication enables modern deep learning by executing thousands of dot products in parallel on GPUs."
      ]
    },
    "sample_questions": [
      {
        "q": "What is the difference between `A * B` and `A @ B` in NumPy when both are 2D square matrices?",
        "options": [
          "`A * B` performs element-wise multiplication; `A @ B` performs standard matrix multiplication",
          "`A * B` computes matrix inverse; `A @ B` computes transpose",
          "`A * B` is only for floats; `A @ B` is only for integers",
          "Both perform identical matrix multiplication"
        ],
        "ans": "`A * B` performs element-wise multiplication; `A @ B` performs standard matrix multiplication",
        "exp": "`*` performs element-wise (Hadamard) multiplication `C[i,j] = A[i,j] * B[i,j]`, whereas `@` performs algebraic matrix multiplication `C = AB`."
      },
      {
        "q": "If X has shape (128, 784) and w has shape (784, 10), what is the shape of `Z = X @ w`?",
        "options": [
          "(128, 10)",
          "(784, 784)",
          "(128, 784)",
          "(10, 128)"
        ],
        "ans": "(128, 10)",
        "exp": "Matrix multiplication of (N × K) @ (K × M) yields an (N × M) matrix: (128 × 784) @ (784 × 10) = (128 × 10)."
      }
    ]
  }
];

if (typeof window !== 'undefined') {
  window.ST1_QUIZ_QUESTIONS = ST1_QUIZ_QUESTIONS;
}
if (typeof globalThis !== 'undefined') {
  globalThis.ST1_QUIZ_QUESTIONS = ST1_QUIZ_QUESTIONS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ST1_QUIZ_QUESTIONS;
}
