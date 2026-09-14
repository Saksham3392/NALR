const fs = require('fs');
const path = require('path');

const targetDir = 'c:/Users/Asus/Downloads/CSE AI 5th Sem/AGAI/AGAIMcqs';

// Define the 20 ST1 questions
const st1Questions = [
  // Module 1: Introduction to Neural Networks (Lect 1–2)
  {
    id: "st1_q1",
    module_id: "st1_mod1",
    module_name: "Module 1: Introduction to Neural Networks",
    syllabus_lec: "Lectures 1–2",
    topic: "Perceptron Weight Update Calculation",
    difficulty: "Medium",
    points: 1,
    question: "A perceptron has weights [0.2, -0.1], receives x = [1, 2], predicts 0 for target 1, and uses learning rate 0.1. After one perceptron update, what are the new weights?",
    options: [
      "[0.1, -0.3]",
      "[0.3, 0.1]",
      "[0.3, -0.2]",
      "[0.2, 0.1]"
    ],
    correct: "[0.3, 0.1]",
    explanation: "The perceptron learning update rule is: w_new = w_old + η * (target - prediction) * x. Here, target = 1, prediction = 0, so error = (1 - 0) = 1. Learning rate η = 0.1, and x = [1, 2]. Therefore, Δw = 0.1 * 1 * [1, 2] = [0.1, 0.2]. Adding to w_old = [0.2, -0.1] gives w_new = [0.2 + 0.1, -0.1 + 0.2] = [0.3, 0.1].",
    theory: {
      title: "The Perceptron Learning Rule & Decision Hyperplane Shifts",
      what_is_it: "The Rosenblatt Perceptron is the fundamental building block of artificial neural networks. It computes an affine combination of inputs z = w · x + b and passes it through a step function (Heaviside step) to classify inputs into binary categories (+1 or 0).\n\n💡 Beginner Intuition:\nImagine adjusting the tilt and height of a flat sheet of plywood (decision boundary) separating red apples from green apples on a table. Every time the perceptron misclassifies a fruit, it tilts the plywood slightly towards the misclassified sample.",
      why_we_need_it: "The perceptron learning rule guarantees mathematical convergence (Novikoff's Perceptron Convergence Theorem) if the training data is linearly separable, providing the earliest proven algorithm for iterative machine learning.",
      how_it_works: "• Step 1: Compute pre-activation sum z = ∑ w_i x_i + b.\n• Step 2: Compute threshold prediction y_hat = 1 if z ≥ 0 else 0.\n• Step 3: Compute classification error: e = (y_target - y_hat).\n• Step 4: If error != 0, update weight vector: w_new = w_old + η · e · x.",
      formula: "\\mathbf{w}^{(t+1)} = \\mathbf{w}^{(t)} + \\eta \\,(y_{\\text{target}} - \\hat{y})\\,\\mathbf{x}",
      key_takeaways: [
        "If the prediction matches the target (error = 0), weights do not change (Δw = 0).",
        "If prediction is 0 but target is 1 (false negative), the weight vector shifts in the direction of x.",
        "If prediction is 1 but target is 0 (false positive), the weight vector shifts in the opposite direction of x.",
        "Perceptron convergence only holds when classes are strictly linearly separable by a hyperplane."
      ]
    },
    sample_questions: [
      {
        q: "If a perceptron with learning rate 0.2 receives x = [2, -1], predicts 1 for target 0, what is the weight change Δw?",
        options: [
          "[-0.4, 0.2]",
          "[0.4, -0.2]",
          "[0.2, -0.1]",
          "[0.0, 0.0]"
        ],
        ans: "[-0.4, 0.2]",
        exp: "Δw = η * (target - prediction) * x = 0.2 * (0 - 1) * [2, -1] = -0.2 * [2, -1] = [-0.4, 0.2]."
      },
      {
        q: "Under what condition will the classical perceptron learning rule stop making updates?",
        options: [
          "When all training instances are correctly classified (zero training error)",
          "When learning rate reaches 1.0",
          "When hidden layer activations saturate",
          "When cross-entropy loss reaches zero"
        ],
        ans: "When all training instances are correctly classified (zero training error)",
        exp: "When all predictions match their targets, (y - y_hat) = 0 for every sample, halting further weight updates."
      }
    ]
  },

  // Module 2: Limitations of Perceptron (Lect 3)
  {
    id: "st1_q2",
    module_id: "st1_mod2",
    module_name: "Module 2: Limitations of the Perceptron & MLP Architecture",
    syllabus_lec: "Lecture 3",
    topic: "Limitations of Linear/Affine Activations in MLPs",
    difficulty: "Medium",
    points: 1,
    question: "A multi-layer network contains several affine layers but no nonlinear activation between them. Which statement best explains its resulting decision capacity?",
    options: [
      "It behaves like one affine transformation despite the added depth",
      "It gains nonlinear boundaries because each layer has separate weights",
      "It behaves like a kernel classifier once more than two layers are stacked",
      "It gains piecewise-linear boundaries because biases differ across layers"
    ],
    correct: "It behaves like one affine transformation despite the added depth",
    explanation: "The composition of linear (affine) transformations is mathematically equivalent to a single linear transformation: W_2 · (W_1 · x + b_1) + b_2 = (W_2 · W_1) · x + (W_2 · b_1 + b_2) = W_eff · x + b_eff. Stacking 100 purely linear layers without non-linear activations adds zero expressive power and cannot solve non-linear problems like XOR.",
    theory: {
      title: "Linear Collapse Theorem & Why Neural Networks Need Non-Linearity",
      what_is_it: "An affine layer computes y = W · x + b. If we stack multiple affine layers together without inserting non-linear activation functions (like ReLU, Sigmoid, or GELU) between them, the entire network collapses into a single affine matrix multiplication.\n\n💡 Real-World Analogy:\nScaling a photo by 2x, then rotating it by 45°, and translating it 5cm is mathematically equivalent to a single combined transformation matrix. You can never create a curved spherical lens purely by stacking flat flat-sheet glass mirrors.",
      why_we_need_it: "Real-world data (images, language, medical signals) is fundamentally non-linear. Non-linear activations allow MLPs to warp feature space and act as Universal Function Approximators (Cybenko's Theorem).",
      how_it_works: "• Layer 1: h_1 = W_1 · x + b_1\n• Layer 2: h_2 = W_2 · h_1 + b_2 = W_2 · (W_1 · x + b_1) + b_2 = (W_2 W_1) x + (W_2 b_1 + b_2)\n• Let W* = W_2 W_1 and b* = W_2 b_1 + b_2 ==> h_2 = W* · x + b* (A single linear layer!).",
      formula: "f(x) = W_L \\dots W_2 W_1 \\mathbf{x} + \\mathbf{b}_{\\text{eff}} = W_{\\text{combined}} \\mathbf{x} + \\mathbf{b}_{\\text{combined}}",
      key_takeaways: [
        "Stacking linear layers without non-linear activations yields zero non-linear decision capacity.",
        "Non-linear activation functions are strictly required to solve non-linearly separable problems like XOR.",
        "With non-linear activations, an MLP with even a single hidden layer can approximate any continuous function (Universal Approximation Theorem)."
      ]
    },
    sample_questions: [
      {
        q: "Why couldn't a single-layer perceptron solve the XOR problem according to Minsky & Papert (1969)?",
        options: [
          "XOR outputs are not linearly separable by any single straight line/hyperplane",
          "XOR truth table has too many rows",
          "Perceptrons cannot use binary inputs",
          "The learning rate cannot be adjusted"
        ],
        ans: "XOR outputs are not linearly separable by any single straight line/hyperplane",
        exp: "In the 2D plane, (0,0) and (1,1) produce 0, while (0,1) and (1,0) produce 1. No single straight line can separate these two classes."
      },
      {
        q: "What is the primary role of non-linear activations between dense layers in an MLP?",
        options: [
          "To prevent the collapse of deep layers into a single linear map and enable complex boundary formation",
          "To speed up GPU matrix multiplication",
          "To force all weights to remain positive",
          "To eliminate the need for bias terms"
        ],
        ans: "To prevent the collapse of deep layers into a single linear map and enable complex boundary formation",
        exp: "Non-linearities prevent linear collapse and allow neural networks to bend decision boundaries to fit complex non-linear manifolds."
      }
    ]
  },

  // Module 3: MLP Forward Pass & Representation (Lect 4)
  {
    id: "st1_q3",
    module_id: "st1_mod3",
    module_name: "Module 3: MLP Forward Pass & Network Representation",
    syllabus_lec: "Lecture 4",
    topic: "Weight Initialization (He-Style for ReLU)",
    difficulty: "Medium",
    points: 1,
    question: "A deep MLP uses ReLU activations and its initial activations become excessively large as depth increases. Which initialization is most directly intended to control variance for ReLU layers?",
    options: [
      "Large constant initialization",
      "He-style variance-scaled initialization",
      "All-zero weight initialization",
      "Uniform initialization with identical weights"
    ],
    correct: "He-style variance-scaled initialization",
    explanation: "He (Kaiming) initialization scales the weight variance specifically for ReLU activations by setting Var(W) = 2 / n_in (standard deviation σ = √(2 / n_in)). Because ReLU zeroes out approximately half the incoming activations (where x < 0), the factor of 2 compensates for this halving of variance, preventing activations from exploding or vanishing across deep layers.",
    theory: {
      title: "Weight Initialization: Xavier vs. He (Kaiming) Initialization",
      what_is_it: "Weight initialization determines the initial numerical values assigned to network weights before training begins.\n\n• Xavier (Glorot) Initialization: Designed for symmetric, zero-centered activations (Tanh/Sigmoid). Sets Var(W) = 1 / n_in (or 2 / (n_in + n_out)).\n• He (Kaiming) Initialization: Designed for ReLU and Leaky ReLU activations. Sets Var(W) = 2 / n_in.",
      why_we_need_it: "If initial weights are too large, activations explode exponentially with depth (overflow / NaN gradients). If initial weights are too small, signals diminish to 0, leaving hidden units inactive (vanishing signal). Proper variance scaling keeps activation variance constant across 100+ layers.",
      how_it_works: "Because ReLU(z) = max(0, z), roughly 50% of neurons output 0. Thus, E[ReLU(z)^2] = (1/2) Var(z). To keep Var(y) = Var(x), we must scale weight variance by 2: Var(W) = 2 / n_in.",
      formula: "\\text{He Initialization: } W \\sim \\mathcal{N}\\left(0, \\,\\sigma^2 = \\frac{2}{n_{\\text{in}}}\\right) \\quad \\text{or} \\quad \\mathcal{U}\\left(-\\sqrt{\\frac{6}{n_{\\text{in}}}}, \\,+\\sqrt{\\frac{6}{n_{\\text{in}}}}\\right)",
      key_takeaways: [
        "He (Kaiming) initialization is optimal for ReLU, Leaky ReLU, and GELU.",
        "Xavier (Glorot) initialization is optimal for Tanh and Sigmoid activations.",
        "All-zero weight initialization causes symmetry breaking failure: all hidden units compute identical gradients and remain identical forever."
      ]
    },
    sample_questions: [
      {
        q: "What catastrophic failure occurs if all weights in a hidden layer are initialized to exactly zero?",
        options: [
          "Symmetry is preserved: all neurons in the layer compute identical features and receive identical gradients",
          "Gradients immediately explode to infinity",
          "The learning rate dynamically doubles every epoch",
          "ReLU activations convert to Sigmoid functions"
        ],
        ans: "Symmetry is preserved: all neurons in the layer compute identical features and receive identical gradients",
        exp: "When weights are initialized identically to zero, every neuron computes the same output and receives the same gradient, preventing them from learning distinct features (symmetry breaking failure)."
      },
      {
        q: "For a layer with 50 input neurons using ReLU, what is the standard deviation σ for He normal initialization?",
        options: [
          "√(2 / 50) = 0.2",
          "√(1 / 50) = 0.141",
          "50 / 2 = 25",
          "2 / 50 = 0.04"
        ],
        ans: "√(2 / 50) = 0.2",
        exp: "For He normal, σ = √(2 / n_in) = √(2 / 50) = √(0.04) = 0.2."
      }
    ]
  },

  {
    id: "st1_q31",
    module_id: "st1_mod3",
    module_name: "Module 3: MLP Forward Pass & Network Representation",
    syllabus_lec: "Lecture 4",
    topic: "MLP Forward Pass Computation",
    difficulty: "Medium",
    points: 1,
    question: "An MLP receives x1 = 1 and x2 = 2. Its hidden units are h1 = ReLU(2*x1 - x2 + 1) and h2 = ReLU(-x1 + x2 - 0.5). If the output is o = 1.5*h1 + 2*h2 - 0.5, what is o?",
    options: [
      "1.5",
      "2.0",
      "2.5",
      "3.0"
    ],
    correct: "2.0",
    explanation: "Step 1: Calculate h1 = ReLU(2*(1) - 2 + 1) = ReLU(2 - 2 + 1) = ReLU(1) = 1.\nStep 2: Calculate h2 = ReLU(-1 + 2 - 0.5) = ReLU(0.5) = 0.5.\nStep 3: Calculate output o = 1.5*(1) + 2*(0.5) - 0.5 = 1.5 + 1.0 - 0.5 = 2.0.",
    theory: {
      title: "Step-by-Step Forward Pass Evaluation in Feed-Forward Networks",
      what_is_it: "The forward pass evaluates input vectors through successive linear combinations and non-linear activations to yield the final network prediction.\n\n💡 Mental Model:\nA multi-tier assembly line where raw materials (input features) are weighted, summed with biases, passed through activation gates, and blended into finished predictions.",
      why_we_need_it: "Forward pass computation produces the predicted output y_hat needed to evaluate the objective loss function L(y, y_hat) during training.",
      how_it_works: "1. Hidden pre-activation: z^[1] = W^[1] x + b^[1].\n2. Hidden activation: a^[1] = g(z^[1]).\n3. Output pre-activation: z^[2] = W^[2] a^[1] + b^[2].\n4. Final output: y_hat = g_out(z^[2]).",
      formula: "o = \\sum_{j} w_j^{(2)} \\cdot \\text{ReLU}\\left(\\sum_i w_{ji}^{(1)} x_i + b_j^{(1)}\\right) + b^{(2)}",
      key_takeaways: [
        "ReLU(z) evaluates to z if z > 0, and 0 if z ≤ 0.",
        "Biases shift the activation function threshold left or right.",
        "The forward pass must be completely executed and intermediate activations stored (cached) before backpropagation can calculate gradients."
      ]
    },
    sample_questions: [
      {
        q: "If hidden unit z = -3.4, what is the output of ReLU(z)?",
        options: [
          "0",
          "-3.4",
          "3.4",
          "1.0"
        ],
        ans: "0",
        exp: "ReLU is defined as max(0, z). For any negative input, ReLU outputs 0."
      },
      {
        q: "For inputs x1 = 3, x2 = -1 with weights w1 = 2, w2 = 4 and bias b = -1, what is the pre-activation z?",
        options: [
          "1",
          "2",
          "-1",
          "9"
        ],
        ans: "1",
        exp: "z = (3 * 2) + (-1 * 4) + (-1) = 6 - 4 - 1 = 1."
      }
    ]
  },

  {
    id: "st1_q33",
    module_id: "st1_mod3",
    module_name: "Module 3: MLP Forward Pass & Network Representation",
    syllabus_lec: "Lecture 4",
    topic: "Fully Connected Network Trainable Parameter Calculation",
    difficulty: "Medium",
    points: 1,
    question: "A fully connected MLP has 10 input features, one hidden layer with 6 neurons, and 3 output neurons. Every neuron in the hidden and output layers has a bias. How many trainable parameters are present?",
    options: [
      "81",
      "84",
      "87",
      "90"
    ],
    correct: "87",
    explanation: "Input-to-hidden layer: 10 inputs × 6 neurons = 60 weights, plus 6 biases for the hidden neurons = 66 parameters.\nHidden-to-output layer: 6 hidden inputs × 3 output neurons = 18 weights, plus 3 biases for the output neurons = 21 parameters.\nTotal trainable parameters = 66 + 21 = 87 parameters.",
    theory: {
      title: "Parameter Counting in Multi-Layer Perceptrons",
      what_is_it: "Trainable parameters are the learned scalar values (weights and biases) optimized via gradient descent.\n\nFormula for a dense layer: Parameters = (n_in × n_out) + n_out = n_out × (n_in + 1).",
      why_we_need_it: "Counting parameters is essential for estimating GPU VRAM capacity, preventing overfitting (VC dimension), and ensuring models fit deployment hardware constraints.",
      how_it_works: "• Layer 1 (Input -> Hidden 1): W_1 has shape (n_h1 × n_in), b_1 has shape (n_h1). Total: n_h1 * (n_in + 1).\n• Layer 2 (Hidden 1 -> Output): W_2 has shape (n_out × n_h1), b_2 has shape (n_out). Total: n_out * (n_h1 + 1).\n• Total = Sum across all layers.",
      formula: "\\text{Total Parameters} = \\sum_{l=1}^L \\Big( n_{l-1} \\times n_l + n_l \\Big)",
      key_takeaways: [
        "Each connection between two neurons represents 1 weight parameter.",
        "Each receiving neuron in a hidden or output layer has exactly 1 trainable bias parameter.",
        "Input layer neurons are raw feature placeholders and have no weights or biases."
      ]
    },
    sample_questions: [
      {
        q: "How many trainable parameters are in a dense layer with 128 inputs and 64 outputs, including biases?",
        options: [
          "8,256",
          "8,192",
          "8,320",
          "16,384"
        ],
        ans: "8,256",
        exp: "Parameters = (128 × 64) + 64 = 8192 + 64 = 8,256."
      },
      {
        q: "If a layer has 20 inputs and 10 outputs without biases, how many parameters does it contain?",
        options: [
          "200",
          "210",
          "220",
          "100"
        ],
        ans: "200",
        exp: "Without biases: 20 × 10 = 200 weights."
      }
    ]
  },

  // Module 4: Backprop & Optimization (Lect 5–6)
  {
    id: "st1_q5",
    module_id: "st1_mod4",
    module_name: "Module 4: Backpropagation Algorithm & Gradient Descent",
    syllabus_lec: "Lectures 5–6",
    topic: "Mini-Batch Gradient Descent / Epoch Calculations",
    difficulty: "Easy",
    points: 1,
    question: "A dataset has 1,000 training samples and mini-batch gradient descent uses a batch size of 100. Ignoring an incomplete final batch, how many parameter updates occur in one epoch?",
    options: [
      "5",
      "10",
      "100",
      "1,000"
    ],
    correct: "10",
    explanation: "An epoch is one complete pass through the entire training dataset. The number of parameter updates (iterations or steps) per epoch is: Number of Samples / Batch Size = 1000 / 100 = 10 updates.",
    theory: {
      title: "Batch, Mini-Batch, and Stochastic Gradient Descent Dynamics",
      what_is_it: "Gradient descent variants differ by how many samples are evaluated before computing gradients and updating model weights:\n• Batch GD: Uses entire dataset (1 update/epoch). Stable but memory-heavy and slow.\n• Stochastic GD (SGD): Uses 1 sample per update (N updates/epoch). Fast but highly noisy/jittery.\n• Mini-Batch GD: Uses small batches (e.g. 32, 64, 128). Best balance of GPU vectorization and smooth convergence.",
      why_we_need_it: "Full batch cannot fit inside modern GPU memory for millions of samples. Mini-batching leverages SIMD tensor cores for maximum hardware throughput.",
      how_it_works: "1. Dataset of size N is shuffled and sliced into batches of size B.\n2. Total iterations per epoch = ⌊N / B⌋.\n3. Model weights are updated after every single batch.",
      formula: "\\text{Iterations per Epoch} = \\left\\lfloor \\frac{N}{\\text{Batch Size}} \\right\\rfloor",
      key_takeaways: [
        "1 Epoch = 1 full pass through all N training samples.",
        "1 Iteration / Step = 1 forward + backward pass on a single batch followed by 1 weight update.",
        "Number of updates per epoch = N / Batch_Size."
      ]
    },
    sample_questions: [
      {
        q: "If training dataset has 50,000 images and batch size is 250, how many parameter updates occur per epoch?",
        options: [
          "200",
          "500",
          "250",
          "2,000"
        ],
        ans: "200",
        exp: "Iterations = 50,000 / 250 = 200 updates per epoch."
      },
      {
        q: "What is the primary computational advantage of Mini-Batch GD over pure Stochastic GD (batch size = 1)?",
        options: [
          "Leverages GPU parallel matrix acceleration (tensor cores) for high throughput",
          "Guarantees finding the global minimum in non-convex losses",
          "Eliminates the need for a learning rate",
          "Reduces total training epochs to 1"
        ],
        ans: "Leverages GPU parallel matrix acceleration (tensor cores) for high throughput",
        exp: "Mini-batch operations are vectorized matrix multiplications, utilizing parallel GPU architectures far more efficiently than serial 1-sample operations."
      }
    ]
  },

  {
    id: "st1_q7",
    module_id: "st1_mod4",
    module_name: "Module 4: Backpropagation Algorithm & Gradient Descent",
    syllabus_lec: "Lectures 5–6",
    topic: "Gradient Descent Learning Rate Tuning",
    difficulty: "Medium",
    points: 1,
    question: "During full-batch gradient descent, training loss repeatedly crosses a narrow minimum and alternates between two nearby but higher values. Which adjustment most directly addresses this optimisation behaviour?",
    options: [
      "Increase the learning rate to cross the valley faster",
      "Reduce the learning rate to make smaller updates near the minimum",
      "Replace the loss with softmax while keeping the same step size",
      "Increase the batch size beyond the complete training set"
    ],
    correct: "Reduce the learning rate to make smaller updates near the minimum",
    explanation: "When loss oscillates back and forth across a valley minimum without descending into it (overshooting), the step size (learning rate η) is too large. Reducing the learning rate decreases the step magnitude, allowing gradient descent to converge smoothly into the narrow minimum.",
    theory: {
      title: "Learning Rate Dynamics & Loss Surface Oscillation",
      what_is_it: "The learning rate η dictates the step size taken along the negative gradient direction: w_new = w_old - η ∇L(w).\n\n💡 Physical Metaphor:\nA ball rolling down a steep V-shaped canyon. If velocity/step is too high, the ball overshoots the valley bottom and bounces back and forth against canyon walls instead of settling at the base.",
      why_we_need_it: "Proper learning rate tuning ensures fast convergence without diverging or oscillating endlessly.",
      how_it_works: "• Too Large η: Overshooting, loss oscillation, and numerical divergence (loss -> NaN).\n• Too Small η: Painfully slow progress, risk of getting trapped in local plateaus.\n• Optimal η: Steady exponential decay of loss.",
      formula: "\\mathbf{w}^{(t+1)} = \\mathbf{w}^{(t)} - \\eta \\nabla_{\\mathbf{w}} L(\\mathbf{w}^{(t)})",
      key_takeaways: [
        "Oscillation around a minimum indicates that the learning rate is too aggressive for the local curvature.",
        "Learning rate decay schedules or adaptive optimizers (Adam, RMSprop) dynamically reduce step size near minima.",
        "Gradient clipping prevents explosion, but reducing learning rate prevents overshooting."
      ]
    },
    sample_questions: [
      {
        q: "What typically happens to training loss when the learning rate is set excessively high in a deep neural network?",
        options: [
          "Loss oscillates wildly and rapidly diverges to infinity/NaN",
          "Loss smoothly reaches zero in the first epoch",
          "Gradients immediately vanish to exact zero",
          "The model automatically converts to batch gradient descent"
        ],
        ans: "Loss oscillates wildly and rapidly diverges to infinity/NaN",
        exp: "An excessive learning rate causes gradient descent to take huge steps that overshoot valleys, leading to exponential divergence."
      },
      {
        q: "What technique dynamically scales learning rate based on running estimates of first and second gradient moments?",
        options: [
          "Adam optimizer",
          "Perceptron step rule",
          "Max pooling",
          "Xavier initialization"
        ],
        ans: "Adam optimizer",
        exp: "Adam (Adaptive Moment Estimation) computes individual adaptive learning rates for each parameter using exponentially decaying averages of past gradients and squared gradients."
      }
    ]
  },

  {
    id: "st1_q32",
    module_id: "st1_mod4",
    module_name: "Module 4: Backpropagation Algorithm & Gradient Descent",
    syllabus_lec: "Lectures 5–6",
    topic: "Single-Neuron Gradient Descent Step",
    difficulty: "Medium",
    points: 1,
    question: "A linear neuron uses z = w*x with w = 0.5 and x = 4. For target y = 1 and loss L = 0.5*(z - y)^2, one gradient-descent step uses learning rate 0.1. What is the updated weight?",
    options: [
      "0.1",
      "0.3",
      "0.4",
      "0.9"
    ],
    correct: "0.1",
    explanation: "Step 1: Compute output z = w * x = 0.5 * 4 = 2.0.\nStep 2: Error term = (z - y) = (2.0 - 1.0) = 1.0.\nStep 3: Loss derivative with respect to w: dL/dw = (z - y) * dz/dw = (z - y) * x = 1.0 * 4 = 4.0.\nStep 4: Gradient descent update: w_new = w_old - η * (dL/dw) = 0.5 - (0.1 * 4.0) = 0.5 - 0.4 = 0.1.",
    theory: {
      title: "Analytical Derivation of Single-Neuron Gradient Descent Update",
      what_is_it: "Computing exact parameter updates via the calculus chain rule for mean squared error loss.\n\nChain Rule: dL/dw = (dL/dz) · (dz/dw).",
      why_we_need_it: "This fundamental derivation forms the base case for backpropagation across all layers of deep neural networks.",
      how_it_works: "1. Forward pass: z = w · x\n2. Loss: L = (1/2) (z - y)^2\n3. Partial derivative: dL/dz = (z - y)\n4. Partial derivative: dz/dw = x\n5. Gradient: dL/dw = (z - y) · x\n6. Update: w ← w - η · (z - y) · x.",
      formula: "w_{\\text{new}} = w_{\\text{old}} - \\eta \\cdot (z - y) \\cdot x",
      key_takeaways: [
        "The gradient magnitude is proportional to both the prediction error (z - y) and the input magnitude x.",
        "Larger input features exert stronger leverage on weight updates (motivating input feature normalization).",
        "The 1/2 factor in L = 1/2 (z - y)^2 cancels neatly with the power rule 2(z - y), leaving (z - y)."
      ]
    },
    sample_questions: [
      {
        q: "For z = 3, y = 1, x = 2, what is dL/dw when L = 0.5 * (z - y)^2?",
        options: [
          "4.0",
          "2.0",
          "6.0",
          "1.0"
        ],
        ans: "4.0",
        exp: "dL/dw = (z - y) * x = (3 - 1) * 2 = 2 * 2 = 4.0."
      },
      {
        q: "If prediction z exactly equals target y, what is the gradient dL/dw?",
        options: [
          "0",
          "w",
          "x",
          "η"
        ],
        ans: "0",
        exp: "When z = y, error (z - y) = 0, so dL/dw = 0 * x = 0."
      }
    ]
  },

  // Module 5: Activation & Loss Functions (Lect 7)
  {
    id: "st1_q4",
    module_id: "st1_mod5",
    module_name: "Module 5: Activation Functions & Loss Functions",
    syllabus_lec: "Lecture 7",
    topic: "Vanishing Gradient / Sigmoid Saturation",
    difficulty: "Medium",
    points: 1,
    question: "In a deep network using sigmoid units, many hidden neurons operate at very large positive or negative pre-activations and early layers learn extremely slowly. Which mechanism best accounts for this behaviour?",
    options: [
      "Softmax competition increases early-layer gradients",
      "Sigmoid saturation produces very small local derivatives",
      "Mini-batch averaging reverses the sign of most gradients",
      "Cross-entropy forces hidden activations towards exact zero"
    ],
    correct: "Sigmoid saturation produces very small local derivatives",
    explanation: "The derivative of the sigmoid function σ'(z) = σ(z)(1 - σ(z)) has a maximum value of only 0.25 at z = 0. When |z| is large (saturated positive or negative regions), σ'(z) approaches 0. When backpropagating through multiple deep layers, multiplying these tiny local derivatives (e.g. 0.1 × 0.1 × 0.05...) causes gradients in early layers to vanish to near zero.",
    theory: {
      title: "The Vanishing Gradient Problem & Activation Function Saturation",
      what_is_it: "Sigmoid maps any real number to (0, 1): σ(z) = 1 / (1 + e^-z). Its derivative is σ'(z) = σ(z) · (1 - σ(z)).\n\nWhen z >> 0 (e.g. z = +10), σ(z) ≈ 1.0 and σ'(z) ≈ 1 · 0 = 0.\nWhen z << 0 (e.g. z = -10), σ(z) ≈ 0.0 and σ'(z) ≈ 0 · 1 = 0.\n\nIn both flat tails, the gradient is practically zero.",
      why_we_need_it: "Understanding sigmoid saturation motivated the invention and adoption of ReLU (f(z) = max(0,z)), whose derivative is constant 1.0 for all z > 0, solving vanishing gradients in deep networks.",
      how_it_works: "By the chain rule: dL/dw_1 = (dL/dz_L) · (dz_L/da_{L-1}) · σ'(z_{L-1}) · ... · σ'(z_1) · x.\nBecause each σ'(z) ≤ 0.25, multiplying 10 layers yields (0.25)^10 ≈ 9.5 × 10^-7 (vanishing to zero!).",
      formula: "\\sigma'(z) = \\sigma(z)\\,(1 - \\sigma(z)) \\le 0.25",
      key_takeaways: [
        "Maximum derivative of sigmoid is 0.25 at z = 0.",
        "Maximum derivative of tanh is 1.0 at z = 0 (better than sigmoid, but still saturates at extremes).",
        "ReLU has derivative 1.0 for all positive inputs, allowing gradient flow through 100+ layers without decay."
      ]
    },
    sample_questions: [
      {
        q: "What is the maximum possible value of the derivative of the Sigmoid activation function?",
        options: [
          "0.25",
          "1.00",
          "0.50",
          "Infinity"
        ],
        ans: "0.25",
        exp: "At z = 0, σ(0) = 0.5, so σ'(0) = 0.5 * (1 - 0.5) = 0.25."
      },
      {
        q: "Which activation function completely avoids vanishing gradients for all positive pre-activations (z > 0)?",
        options: [
          "ReLU (Rectified Linear Unit)",
          "Sigmoid",
          "Tanh",
          "Softmax"
        ],
        ans: "ReLU (Rectified Linear Unit)",
        exp: "For all z > 0, d/dz(ReLU(z)) = 1.0, preserving gradient magnitude during backpropagation."
      }
    ]
  },

  {
    id: "st1_q6",
    module_id: "st1_mod5",
    module_name: "Module 5: Activation Functions & Loss Functions",
    syllabus_lec: "Lecture 7",
    topic: "Softmax Translation Invariance / Loss Functions",
    difficulty: "Medium",
    points: 1,
    question: "A softmax classifier produces logits [7, 5, 4]. Before applying softmax, the same constant is subtracted from every logit for numerical stability. What happens to the output probabilities?",
    options: [
      "They preserve exactly the same class probabilities",
      "They preserve only the highest-probability class",
      "They become uniformly distributed across the classes",
      "They change proportionally to the subtracted constant"
    ],
    correct: "They preserve exactly the same class probabilities",
    explanation: "Softmax is mathematically translation-invariant: subtracting a constant C from all logits does not change the resulting probabilities. Softmax(z_i - C) = exp(z_i - C) / ∑ exp(z_j - C) = [exp(z_i) * exp(-C)] / [exp(-C) * ∑ exp(z_j)] = exp(z_i) / ∑ exp(z_j) = Softmax(z_i). In practice, C = max(z) is subtracted to prevent floating-point numerical overflow (inf / NaN).",
    theory: {
      title: "Softmax Translation Invariance & Numerical Stability",
      what_is_it: "Softmax converts a vector of K unconstrained real logits z into a probability distribution where all values are non-negative and sum to 1.0.\n\nNumerical stability trick: In computer systems, computing e^800 causes floating-point overflow (inf). Subtracting max(z) shifts the maximum exponent to e^0 = 1.0, eliminating overflow while preserving mathematical probabilities exactly.",
      why_we_need_it: "Essential in all deep learning frameworks (PyTorch `log_softmax`, TensorFlow) to ensure stable gradient computation without precision errors.",
      how_it_works: "Let z_shift = z - max(z). Then exp(z_shift) ≤ 1.0 for all elements, guaranteeing safe computation.",
      formula: "\\text{Softmax}(\\mathbf{z} - C)_i = \\frac{e^{z_i - C}}{\\sum_j e^{z_j - C}} = \\frac{e^{z_i} e^{-C}}{e^{-C} \\sum_j e^{z_j}} = \\text{Softmax}(\\mathbf{z})_i",
      key_takeaways: [
        "Softmax is shift-invariant (translation-invariant).",
        "Subtracting max(z) prevents float overflow (e^large -> inf) and division by zero.",
        "Output probabilities and class rankings remain 100% identical."
      ]
    },
    sample_questions: [
      {
        q: "If logits [1000, 1000, 998] are shifted to [0, 0, -2] by subtracting 1000, what happens to the resulting Softmax distribution?",
        options: [
          "The output probabilities are mathematically identical",
          "The probabilities become zero",
          "The third class probability becomes negative",
          "The first two classes become 0.5 each regardless of values"
        ],
        ans: "The output probabilities are mathematically identical",
        exp: "Because exp(-C) cancels out from the numerator and denominator, shifting logits by a constant preserves the exact probability distribution."
      },
      {
        q: "What is the sum of all output probabilities produced by the Softmax function?",
        options: [
          "Exactly 1.0 (100%)",
          "Equal to the number of classes K",
          "Dependent on the learning rate",
          "Always between 0.0 and 0.5"
        ],
        ans: "Exactly 1.0 (100%)",
        exp: "By construction, the denominator of Softmax is the sum of all numerators, guaranteeing ∑ p_i = 1.0."
      }
    ]
  },

  // Module 7: CNNs (Lect 11–12)
  {
    id: "st1_q8",
    module_id: "st1_mod7",
    module_name: "Module 7: Convolutional Neural Networks (CNNs)",
    syllabus_lec: "Lectures 11–12",
    topic: "CNN Spatial Output Dimension Calculation",
    difficulty: "Medium",
    points: 1,
    question: "A 31 × 31 feature map is processed by a 3 × 3 convolution with stride 2 and padding 1. What is the spatial size of the output feature map?",
    options: [
      "15 × 15",
      "16 × 16",
      "17 × 17",
      "18 × 18"
    ],
    correct: "16 × 16",
    explanation: "The standard CNN spatial output dimension formula is: Output Size = ⌊(W - K + 2P) / S⌋ + 1. Here, input W = 31, kernel K = 3, padding P = 1, stride S = 2. Calculation: Output = ⌊(31 - 3 + 2*(1)) / 2⌋ + 1 = ⌊(31 - 3 + 2) / 2⌋ + 1 = ⌊30 / 2⌋ + 1 = 15 + 1 = 16. Thus, the output spatial dimension is 16 × 16.",
    theory: {
      title: "Convolutional Output Dimensions & Receptive Field Math",
      what_is_it: "Convolution slides a spatial filter of size K × K across an input feature map of size W × H with step size (stride) S and border zero-padding P.\n\n💡 Mental Grid:\nImagine scanning a barcode with a scanner window. Padding adds extra white margins so edge pixels are fully scanned; stride controls how many pixels the scanner jumps each step.",
      why_we_need_it: "Accurately calculating spatial dimensions is critical for designing CNN architectures and matching tensor dimensions before dense classification layers.",
      how_it_works: "1. Total padded width: W_pad = W + 2P.\n2. Pixels traversed: (W + 2P - K).\n3. Steps taken: ⌊(W + 2P - K) / S⌋.\n4. Add initial position: + 1.",
      formula: "W_{\\text{out}} = \\left\\lfloor \\frac{W_{\\text{in}} - K + 2P}{S} \\right\\rfloor + 1",
      key_takeaways: [
        "With kernel K = 3, padding P = 1, and stride S = 1, output spatial size is unchanged (W_out = W_in, 'same' padding).",
        "With stride S = 2, spatial dimensions are roughly halved (downsampling).",
        "Padding P adds P pixels to both sides (total added width = 2P)."
      ]
    },
    sample_questions: [
      {
        q: "What is the output spatial size of a 28 × 28 image after a 5 × 5 convolution with stride 1 and padding 0 ('valid' padding)?",
        options: [
          "24 × 24",
          "28 × 28",
          "23 × 23",
          "14 × 14"
        ],
        ans: "24 × 24",
        exp: "W_out = (28 - 5 + 0)/1 + 1 = 23 + 1 = 24 × 24."
      },
      {
        q: "If you want a 3 × 3 convolution with stride 1 to keep the output size identical to input ('same' padding), what padding P is required?",
        options: [
          "P = 1",
          "P = 2",
          "P = 0",
          "P = 3"
        ],
        ans: "P = 1",
        exp: "P = (K - 1) / 2 = (3 - 1) / 2 = 1."
      }
    ]
  },

  {
    id: "st1_q9",
    module_id: "st1_mod7",
    module_name: "Module 7: Convolutional Neural Networks (CNNs)",
    syllabus_lec: "Lectures 11–12",
    topic: "Max Pooling Spatial Output and Properties",
    difficulty: "Easy",
    points: 1,
    question: "A 32 × 32 feature map passes through 2 × 2 max pooling with stride 2 and no padding. Which description of the output is correct?",
    options: [
      "16 × 16 with no trainable pooling weights",
      "16 × 16 with one trainable weight per window",
      "31 × 31 with no trainable pooling weights",
      "31 × 31 with one trainable weight per window"
    ],
    correct: "16 × 16 with no trainable pooling weights",
    explanation: "Max pooling computes the maximum value across each 2 × 2 spatial window. With input size 32 × 32, kernel 2 × 2, stride 2, and padding 0, the output size is: (32 - 2) / 2 + 1 = 16 × 16. Importantly, max pooling is a fixed non-linear mathematical operation and contains ZERO trainable weights or parameters.",
    theory: {
      title: "Max Pooling Mechanics & Translation Invariance",
      what_is_it: "Max pooling partitions the input into non-overlapping or overlapping spatial grids and selects the maximum activation in each region.\n\n💡 Intuition:\nFinding the brightest star in each quadrant of the sky. If the star shifts slightly, it is still the brightest point in that quadrant (translational invariance).",
      why_we_need_it: "1. Downsamples spatial dimensions by 75% (reducing computational FLOPs and VRAM).\n2. Introduces local translational invariance.\n3. Expands the effective receptive field of subsequent layers.",
      how_it_works: "For each window of size P_h × P_w, Output(i, j) = max(Input Window). Contains no learned parameters.",
      formula: "W_{\\text{out}} = \\left\\lfloor \\frac{W_{\\text{in}} - P_w}{S} \\right\\rfloor + 1, \\quad \\text{Trainable Parameters} = 0",
      key_takeaways: [
        "Pooling layers (Max, Average) have ZERO trainable parameters.",
        "Standard 2 × 2 pooling with stride 2 reduces spatial area by a factor of 4 (50% width, 50% height).",
        "During backpropagation, max pooling routes gradients exclusively to the neuron that had the maximum activation in the forward pass."
      ]
    },
    sample_questions: [
      {
        q: "How many trainable parameters are added to a neural network by inserting three 2 × 2 Max Pooling layers?",
        options: [
          "0 parameters",
          "12 parameters",
          "6 parameters",
          "24 parameters"
        ],
        ans: "0 parameters",
        exp: "Max pooling is a fixed mathematical function with zero learned weights or biases."
      },
      {
        q: "What happens during backpropagation through a Max Pooling layer?",
        options: [
          "The gradient passes only to the specific index that had the maximum value during the forward pass",
          "The gradient is divided equally across all 4 pixels",
          "The gradient is multiplied by the learning rate",
          "The gradient is set to zero for all positions"
        ],
        ans: "The gradient passes only to the specific index that had the maximum value during the forward pass",
        exp: "Max pooling routes the incoming gradient 100% to the winner unit (argmax) and assigns 0 gradient to non-maximal units."
      }
    ]
  },

  {
    id: "st1_q34",
    module_id: "st1_mod7",
    module_name: "Module 7: Convolutional Neural Networks (CNNs)",
    syllabus_lec: "Lectures 11–12",
    topic: "Convolutional Layer Trainable Parameter Calculation",
    difficulty: "Medium",
    points: 1,
    question: "A convolutional layer receives 8 input channels and uses 24 filters of size 3 × 3, with one bias per filter. How many trainable parameters does the layer contain?",
    options: [
      "1,728",
      "1,752",
      "1,776",
      "1,800"
    ],
    correct: "1,752",
    explanation: "Each of the 24 filters must operate across all 8 input channels. Weight parameters per filter = (Kernel Width × Kernel Height × Input Channels) = 3 × 3 × 8 = 72 weights per filter. Total weights for 24 filters = 24 × 72 = 1,728 weights. Adding 1 bias per filter = 24 biases. Total trainable parameters = 1,728 + 24 = 1,752 parameters.",
    theory: {
      title: "Parameter Counting in 2D Convolutional Layers",
      what_is_it: "In CNNs, weights are shared across spatial positions. Each filter is a 3D tensor of shape (K_h × K_w × C_in).\n\nFormula: Total Parameters = C_out × (K_h × K_w × C_in + 1).",
      why_we_need_it: "Weight sharing drastically reduces parameters compared to fully connected layers, enabling CNNs to process high-resolution images without billions of parameters.",
      how_it_works: "1. 1 Filter Weight Count = K_h × K_w × C_in\n2. 1 Filter Bias Count = 1\n3. Total per Filter = K_h × K_w × C_in + 1\n4. For C_out filters: C_out × (K_h × K_w × C_in + 1).",
      formula: "\\text{Conv Parameters} = C_{\\text{out}} \\times (K_h \\times K_w \\times C_{\\text{in}} + 1)",
      key_takeaways: [
        "Convolutional parameter count depends strictly on kernel size and channel depths, completely independent of the image width and height!",
        "Each output channel corresponds to exactly 1 learned filter (with its own bias).",
        "Every filter extends through the entire channel depth of the input volume (C_in)."
      ]
    },
    sample_questions: [
      {
        q: "How many trainable parameters are in a Conv layer with 3 input channels, 16 filters of size 5 × 5, and biases?",
        options: [
          "1,216",
          "1,200",
          "1,248",
          "400"
        ],
        ans: "1,216",
        exp: "Params = 16 × (5 × 5 × 3 + 1) = 16 × (75 + 1) = 16 × 76 = 1,216."
      },
      {
        q: "Does changing the input image resolution from 224 × 224 to 512 × 512 change the number of trainable parameters in a Conv layer?",
        options: [
          "No, Conv layer parameter count depends only on kernel dimensions and channels, not image resolution",
          "Yes, parameter count quadruples",
          "Yes, parameter count doubles",
          "No, but biases are removed"
        ],
        ans: "No, Conv layer parameter count depends only on kernel dimensions and channels, not image resolution",
        exp: "Because weights are shared across the entire spatial map, Conv parameters remain constant regardless of input spatial dimensions."
      }
    ]
  },

  {
    id: "st1_q35",
    module_id: "st1_mod7",
    module_name: "Module 7: Convolutional Neural Networks (CNNs)",
    syllabus_lec: "Lectures 11–12",
    topic: "Conv + Max Pooling Combined Output Size Calculation",
    difficulty: "Medium",
    points: 1,
    question: "A 64 × 64 feature map passes through a 5 × 5 convolution with stride 2 and padding 2, followed by 2 × 2 max pooling with stride 2. What is the final spatial size?",
    options: [
      "15 × 15",
      "16 × 16",
      "17 × 17",
      "32 × 32"
    ],
    correct: "16 × 16",
    explanation: "Stage 1 (Convolution): W_conv = ⌊(64 - 5 + 2*(2)) / 2⌋ + 1 = ⌊(64 - 5 + 4) / 2⌋ + 1 = ⌊63 / 2⌋ + 1 = 31 + 1 = 32 × 32.\nStage 2 (Max Pooling): W_pool = ⌊(32 - 2 + 0) / 2⌋ + 1 = ⌊30 / 2⌋ + 1 = 15 + 1 = 16 × 16.\nFinal spatial size is 16 × 16.",
    theory: {
      title: "Chained Convolutional and Pooling Spatial Transformations",
      what_is_it: "Sequential evaluation of spatial downsampling through alternating convolutional filtering and pooling stages.",
      why_we_need_it: "Modern CNN backbones (VGG, ResNet) chain multiple conv-pool stages to progressively reduce spatial dimensions while increasing channel depth (feature abstraction).",
      how_it_works: "Output of stage n becomes the input to stage n+1. Compute dimensions step-by-step applying the downsampling formulas.",
      formula: "W_1 = \\left\\lfloor \\frac{W_0 - K_1 + 2P_1}{S_1} \\right\\rfloor + 1, \\quad W_2 = \\left\\lfloor \\frac{W_1 - K_2 + 2P_2}{S_2} \\right\\rfloor + 1",
      key_takeaways: [
        "Always evaluate sequential layers one by one, using integer floor division ⌊...⌋ at each step.",
        "Padding 2 on a 5 × 5 kernel with stride 1 would preserve dimensions; with stride 2, it halves the dimensions from 64 to 32.",
        "A 2 × 2 pool with stride 2 further halves 32 to 16."
      ]
    },
    sample_questions: [
      {
        q: "A 100 × 100 map passes through 2 × 2 pooling (stride 2) followed by another 2 × 2 pooling (stride 2). What is the final size?",
        options: [
          "25 × 25",
          "50 × 50",
          "24 × 24",
          "12 × 12"
        ],
        ans: "25 × 25",
        exp: "First pool: 100 / 2 = 50. Second pool: 50 / 2 = 25."
      },
      {
        q: "If an input image is 128 × 128, how many successive stride-2 downsamplings are needed to reach 8 × 8?",
        options: [
          "4 stages (128 -> 64 -> 32 -> 16 -> 8)",
          "3 stages",
          "5 stages",
          "2 stages"
        ],
        ans: "4 stages (128 -> 64 -> 32 -> 16 -> 8)",
        exp: "128 / 2^4 = 128 / 16 = 8, so exactly 4 stages."
      }
    ]
  },

  // Module 8: Overview of CNN Architectures (Lect 13–14)
  {
    id: "st1_q10",
    module_id: "st1_mod8",
    module_name: "Module 8: Overview of CNN Architectures",
    syllabus_lec: "Lectures 13–14",
    topic: "ResNet Identity Shortcuts for Degradation Problem",
    difficulty: "Medium",
    points: 1,
    question: "A very deep plain CNN shows higher training error after adding more convolutional layers. Which architectural modification most closely targets the optimisation problem addressed by ResNet?",
    options: [
      "Insert identity shortcut paths around groups of layers",
      "Replace all 3 × 3 filters with larger 7 × 7 filters",
      "Move every pooling layer ahead of its convolutional block",
      "Replace convolutional blocks with additional dense layers"
    ],
    correct: "Insert identity shortcut paths around groups of layers",
    explanation: "As plain networks become very deep, their training accuracy saturates and then degrades rapidly (the degradation problem, where deeper networks exhibit HIGHER training error than shallower ones, not caused by overfitting). ResNet (He et al., 2015) solves this by introducing identity shortcut (residual skip) connections: H(x) = F(x) + x. This allows gradients to flow backwards unimpeded through the identity path, making it easy for layers to learn identity mappings.",
    theory: {
      title: "ResNet Residual Learning & The Degradation Problem",
      what_is_it: "In a plain CNN, stacked layers learn an underlying mapping H(x). In ResNet, layers explicitly learn a residual mapping F(x) = H(x) - x, giving H(x) = F(x) + x via an additive skip connection.\n\n💡 Highway Analogy:\nA multi-lane expressway (the skip connection) running alongside local city streets (the conv layers). If the local streets have traffic jams (vanishing gradients), cars (gradients) bypass them completely on the expressway.",
      why_we_need_it: "Before ResNet, training networks deeper than 20-30 layers failed due to optimization degradation. ResNet enabled training networks with 50, 101, and 152+ layers, winning ImageNet 2015 with superhuman accuracy.",
      how_it_works: "During backpropagation: dL/dx = dL/dH · (dF/dx + 1). The '+1' identity term ensures that even if dF/dx vanishes, the gradient dL/dx never becomes zero.",
      formula: "\\mathcal{H}(\\mathbf{x}) = \\mathcal{F}(\\mathbf{x}, \\{W_i\\}) + \\mathbf{x} \\implies \\frac{\\partial \\mathcal{E}}{\\partial \\mathbf{x}} = \\frac{\\partial \\mathcal{E}}{\\partial \\mathcal{H}} \\left( \\frac{\\partial \\mathcal{F}}{\\partial \\mathbf{x}} + \\mathbf{I} \\right)",
      key_takeaways: [
        "The degradation problem is NOT overfitting: training error itself increases in deep plain networks.",
        "Identity shortcuts allow deep networks to easily learn identity functions (F(x) = 0 => H(x) = x).",
        "The '+1' derivative term guarantees an unobstructed gradient highway across hundreds of layers."
      ]
    },
    sample_questions: [
      {
        q: "What is the mathematical formulation of a residual block with input x and learned transformation F(x)?",
        options: [
          "Output = F(x) + x",
          "Output = F(x) * x",
          "Output = F(x) - x",
          "Output = F(x) / x"
        ],
        ans: "Output = F(x) + x",
        exp: "ResNet adds the input identity x directly to the residual function output: H(x) = F(x) + x."
      },
      {
        q: "Why does the derivative of a residual block prevent the vanishing gradient problem?",
        options: [
          "The derivative d(F(x) + x)/dx contains a '+1' identity matrix term",
          "It forces all weights to be non-negative",
          "It replaces convolution with matrix inversion",
          "It multiplies gradients by the batch size"
        ],
        ans: "The derivative d(F(x) + x)/dx contains a '+1' identity matrix term",
        exp: "The '+1' term allows gradients to flow backwards directly without being repeatedly attenuated by small weight matrices."
      }
    ]
  },

  // Module 9: Image Preprocessing & Augmentation (Lect 15)
  {
    id: "st1_q11",
    module_id: "st1_mod9",
    module_name: "Module 9: Image Preprocessing & Data Augmentation",
    syllabus_lec: "Lecture 15",
    topic: "Image Preprocessing for Pre-trained Backbones",
    difficulty: "Medium",
    points: 1,
    question: "A pre-trained image classifier was trained with a specific channel-wise mean and standard deviation. Which preprocessing choice is most appropriate when reusing its backbone?",
    options: [
      "Apply the same normalization expected during pre-training",
      "Normalize each image independently to zero mean and unit range",
      "Use only min-max scaling because the backbone is already trained",
      "Skip normalization so pre-trained convolution filters remain unchanged"
    ],
    correct: "Apply the same normalization expected during pre-training",
    explanation: "Pre-trained convolution filters and weights (e.g., ImageNet models trained with mean=[0.485, 0.456, 0.406] and std=[0.229, 0.224, 0.225]) are calibrated to respond to feature distributions normalized with those exact statistics. Using different normalization alters the input feature scale, degrading pre-trained feature activations.",
    theory: {
      title: "Input Normalization & Distribution Alignment for Pre-Trained Backbones",
      what_is_it: "Standardizing input image channels via z = (x - μ_channel) / σ_channel using the exact dataset statistics from the original pre-training dataset (e.g. ImageNet-1k).\n\n💡 Analogy:\nIf a calibrated electronic sensor expects voltage between -1V and +1V with mean 0V, feeding it un-normalized signals between 0V and 255V will saturate and distort all internal readings.",
      why_we_need_it: "Ensures the pre-trained first-layer filters (Gabor-like edge detectors, color blobs) receive input distributions identical to the training phase.",
      how_it_works: "1. Convert pixel values from [0, 255] to [0.0, 1.0].\n2. Subtract ImageNet channel means: [0.485, 0.456, 0.406].\n3. Divide by ImageNet channel stds: [0.229, 0.224, 0.225].",
      formula: "x_{\\text{norm}}^{(c)} = \\frac{x^{(c)} - \\mu_c}{\\sigma_c}, \\quad c \\in \\{R, G, B\\}",
      key_takeaways: [
        "Always match the normalization statistics (mean and std) used during the model's pre-training phase.",
        "ImageNet RGB statistics: Mean = [0.485, 0.456, 0.406], Std = [0.229, 0.224, 0.225].",
        "Failing to normalize correctly leads to severe performance degradation even if model weights are frozen."
      ]
    },
    sample_questions: [
      {
        q: "What are the standard ImageNet channel means used in torchvision transforms?",
        options: [
          "[0.485, 0.456, 0.406]",
          "[0.5, 0.5, 0.5]",
          "[0.0, 0.0, 0.0]",
          "[1.0, 1.0, 1.0]"
        ],
        ans: "[0.485, 0.456, 0.406]",
        exp: "ImageNet pre-training standardizes RGB channels using mean=[0.485, 0.456, 0.406] and std=[0.229, 0.224, 0.225]."
      },
      {
        q: "Why should you avoid skipping normalization when fine-tuning a pre-trained ResNet?",
        options: [
          "Input pixel scale mismatch causes pre-trained convolutional filters to produce incorrect feature activations",
          "PyTorch raises a runtime tensor dimension error",
          "Backpropagation becomes impossible without normalization",
          "The classifier automatically converts to a linear SVM"
        ],
        ans: "Input pixel scale mismatch causes pre-trained convolutional filters to produce incorrect feature activations",
        exp: "Pre-trained convolution filters are fine-tuned for zero-centered normalized inputs; raw pixels [0, 255] would saturate initial layer activations."
      }
    ]
  },

  {
    id: "st1_q12",
    module_id: "st1_mod9",
    module_name: "Module 9: Image Preprocessing & Data Augmentation",
    syllabus_lec: "Lecture 15",
    topic: "Data Augmentation Strategy Selection",
    difficulty: "Medium",
    points: 1,
    question: "In a medical image dataset, small rotations preserve the diagnosis but horizontal flipping can exchange left- and right-sided findings. Which augmentation policy is most defensible?",
    options: [
      "Use modest random rotations but avoid horizontal flips",
      "Use horizontal flips but avoid all small rotations",
      "Use both transformations with equal probability",
      "Use neither transformation and only duplicate the images"
    ],
    correct: "Use modest random rotations but avoid horizontal flips",
    explanation: "Data augmentations must strictly preserve semantic label validity. In medical radiography (e.g. chest X-rays detecting dextrocardia or distinguishing left-lung vs right-lung pneumonia), horizontal flipping changes anatomical laterality, destroying diagnostic correctness. Modest rotations (e.g. ±10°) reflect natural patient posture variations and are safe, while horizontal flips must be avoided.",
    theory: {
      title: "Domain-Specific Data Augmentation & Label Preservation",
      what_is_it: "Data augmentation artificially expands training diversity by applying label-preserving transformations (rotations, crops, color jitter).\n\n💡 Rule of Thumb:\nAn augmentation is only valid if a human expert looking at the transformed image would still assign the exact same label as the original image.",
      why_we_need_it: "Prevents overfitting on small datasets and builds invariance to irrelevant real-world variations (camera angle, lighting).",
      how_it_works: "• Digit 6 vs 9: 180° rotation is invalid (turns '6' into '9').\n• Chest X-ray: Horizontal flip is invalid (swaps left/right lung and heart position).\n• General photos (dogs/cats): Horizontal flip is valid (a flipped dog is still a dog).",
      formula: "\\text{Valid Augmentation } T: \\quad y(T(x)) = y(x)",
      key_takeaways: [
        "Data augmentation must never alter the ground-truth semantic class of an image.",
        "Medical imaging requires strict awareness of anatomical laterality before applying horizontal flips.",
        "Modest affine rotations and slight contrast adjustments are broadly label-preserving."
      ]
    },
    sample_questions: [
      {
        q: "In an optical character recognition (OCR) dataset containing digits '6' and '9', why is vertical flipping an invalid augmentation?",
        options: [
          "It alters the semantic meaning by turning '6' into '9'",
          "It reduces the number of training images",
          "It increases training time by 4x",
          "It is mathematically non-differentiable"
        ],
        ans: "It alters the semantic meaning by turning '6' into '9'",
        exp: "Flipping digit '6' vertically turns it into digit '9', creating incorrect ground truth training labels."
      },
      {
        q: "What is the primary regularizing benefit of random cropping and color jittering during training?",
        options: [
          "Forces the network to learn invariant features rather than memorizing exact pixel layouts",
          "Reduces the number of parameters in the model",
          "Eliminates the need for validation testing",
          "Guarantees 100% training accuracy"
        ],
        ans: "Forces the network to learn invariant features rather than memorizing exact pixel layouts",
        exp: "Augmentations act as strong regularizers, preventing the network from overfitting to specific backgrounds, alignments, or lighting conditions."
      }
    ]
  },

  // Module 10: Object Detection & Image Segmentation (Lect 16–17)
  {
    id: "st1_q13",
    module_id: "st1_mod10",
    module_name: "Module 10: Object Detection & Image Segmentation",
    syllabus_lec: "Lectures 16–17",
    topic: "Object Detection Task Definition",
    difficulty: "Easy",
    points: 1,
    question: "A vision application needs the class label and bounding box of every visible object, but it does not require a pixel-level mask. Which task best matches the requirement?",
    options: [
      "Image classification",
      "Object detection",
      "Semantic segmentation",
      "Image reconstruction"
    ],
    correct: "Object detection",
    explanation: "Object Detection predicts both the semantic class category and the spatial bounding box coordinates [x_min, y_min, width, height] for every object instance in an image. Image classification only outputs a single class label per image; semantic segmentation assigns class labels to every individual pixel; instance segmentation provides pixel masks for individual objects.",
    theory: {
      title: "Computer Vision Task Hierarchy: Classification to Segmentation",
      what_is_it: "• Image Classification: 'Is there a car in this image?' (1 class label for whole image).\n• Object Detection: 'Where are the cars?' (Bounding box [x, y, w, h] + class for each car).\n• Semantic Segmentation: 'Which pixels belong to car vs road?' (Pixel-wise class map without separating instances).\n• Instance Segmentation: 'Which pixels belong to Car #1 vs Car #2?' (Individual pixel mask per object).",
      why_we_need_it: "Different applications require different spatial granularities (e.g. autonomous driving needs bounding boxes for cars/pedestrians, medical surgery needs pixel-level segmentation).",
      how_it_works: "Object detectors (YOLO, Faster R-CNN) output a tuple per object: (x, y, w, h, class_id, confidence_score).",
      formula: "\\text{Prediction} = \\{ (x_i, y_i, w_i, h_i, c_i, s_i) \\}_{i=1}^M",
      key_takeaways: [
        "Object detection combines classification with spatial bounding box regression.",
        "Intersection over Union (IoU) measures overlap between predicted box and ground truth box.",
        "Non-Maximum Suppression (NMS) filters out redundant overlapping bounding boxes."
      ]
    },
    sample_questions: [
      {
        q: "Which computer vision task outputs bounding box coordinates [x, y, w, h] alongside class labels?",
        options: [
          "Object Detection",
          "Image Classification",
          "Semantic Segmentation",
          "Style Transfer"
        ],
        ans: "Object Detection",
        exp: "Object Detection specifically outputs rectangular bounding boxes and category labels for all instances."
      },
      {
        q: "What algorithm is used in object detection to eliminate multiple overlapping duplicate bounding boxes for the same object?",
        options: [
          "Non-Maximum Suppression (NMS)",
          "Batch Normalization",
          "Xavier Initialization",
          "Heuristic Pruning"
        ],
        ans: "Non-Maximum Suppression (NMS)",
        exp: "NMS sorts boxes by confidence score and iteratively suppresses lower-confidence boxes that overlap significantly (IoU > threshold) with the top detection."
      }
    ]
  },

  {
    id: "st1_q15",
    module_id: "st1_mod10",
    module_name: "Module 10: Object Detection & Image Segmentation",
    syllabus_lec: "Lectures 16–17",
    topic: "Instance Segmentation Output Requirements",
    difficulty: "Medium",
    points: 1,
    question: "Two neighbouring image regions have the same semantic class, but an application must distinguish them as separate physical objects. Which output representation is required?",
    options: [
      "One class label for the whole image",
      "One semantic class map shared by all objects",
      "Separate instance masks for the individual objects",
      "One feature vector for each convolutional channel"
    ],
    correct: "Separate instance masks for the individual objects",
    explanation: "When two adjacent objects share the same category (e.g., two people standing shoulder-to-shoulder), Semantic Segmentation colors all person pixels with the same label, merging them into one blob. Instance Segmentation (e.g. Mask R-CNN) outputs distinct pixel masks for each individual person instance, allowing the system to separate and count them.",
    theory: {
      title: "Semantic Segmentation vs. Instance Segmentation",
      what_is_it: "• Semantic Segmentation: Assigns a class to every pixel (e.g., all 'sheep' pixels are blue). If two sheep overlap, they merge into one continuous blue region.\n• Instance Segmentation: Assigns both a class AND an instance ID (e.g., Sheep #1 has red mask, Sheep #2 has green mask).",
      why_we_need_it: "Crucial for counting objects, robotics grasping (grabbing one specific cup among many), and medical cell separation.",
      how_it_works: "Mask R-CNN extends Faster R-CNN by adding a third parallel branch: along with class and bounding box, it outputs a binary pixel mask for each detected RoI.",
      formula: "\\text{Loss} = \\mathcal{L}_{\\text{cls}} + \\mathcal{L}_{\\text{box}} + \\mathcal{L}_{\\text{mask}}",
      key_takeaways: [
        "Semantic segmentation cannot separate touching objects of the same class.",
        "Instance segmentation provides separate, distinct binary masks for every individual object.",
        "Panoptic segmentation combines semantic segmentation (stuff: sky, road) with instance segmentation (things: cars, people)."
      ]
    },
    sample_questions: [
      {
        q: "If three cars are parked touching each other, what will Semantic Segmentation output?",
        options: [
          "A single continuous mask where all car pixels share the 'car' class label",
          "Three separate bounding boxes with individual masks",
          "An error because cars are touching",
          "Only the middle car"
        ],
        ans: "A single continuous mask where all car pixels share the 'car' class label",
        exp: "Semantic segmentation does not distinguish between separate instances of the same class; all car pixels are assigned the same class index."
      },
      {
        q: "Which popular neural network architecture pioneered end-to-end instance segmentation with RoIAlign?",
        options: [
          "Mask R-CNN",
          "AlexNet",
          "LeNet-5",
          "VGG-16"
        ],
        ans: "Mask R-CNN",
        exp: "Mask R-CNN introduced RoIAlign and a dedicated pixel-mask branch on top of Faster R-CNN."
      }
    ]
  },

  // Module 11: Transfer Learning with Pre-trained Models (Lect 18–19)
  {
    id: "st1_q14",
    module_id: "st1_mod11",
    module_name: "Module 11: Transfer Learning with Pre-trained Models",
    syllabus_lec: "Lectures 18–19",
    topic: "Transfer Learning & Backbone Fine-Tuning Strategy",
    difficulty: "Medium",
    points: 1,
    question: "A small target dataset is visually similar to the data used to pre-train a CNN. Training a newly replaced classifier head has stabilised. Which next step is most suitable if additional adaptation is required?",
    options: [
      "Unfreeze selected upper backbone layers and fine-tune with a smaller learning rate",
      "Reinitialise the complete backbone and keep only the classifier weights",
      "Freeze the classifier and update only the earliest convolutional layers",
      "Increase the learning rate and update every layer from the pre-trained values"
    ],
    correct: "Unfreeze selected upper backbone layers and fine-tune with a smaller learning rate",
    explanation: "In transfer learning on small, similar datasets, early convolutional layers contain universal low-level features (edges, textures) that should remain frozen. If further fine-tuning is needed after the new head stabilizes, the recommended strategy is to unfreeze the top (upper) backbone blocks and fine-tune them using a much smaller learning rate (e.g., 10x to 100x smaller) to adapt domain-specific high-level representations without catastrophic forgetting.",
    theory: {
      title: "Transfer Learning Strategies: Feature Extraction vs Fine-Tuning",
      what_is_it: "Transfer learning reuses knowledge learned from a massive dataset (ImageNet) on a smaller downstream target task.\n\nTwo Main Stages:\n1. Feature Extraction: Freeze entire backbone, train only the newly initialized classifier head.\n2. Fine-Tuning: Unfreeze upper backbone layers and train end-to-end with a small learning rate (e.g. 1e-5).",
      why_we_need_it: "Training deep CNNs from scratch on small datasets causes severe overfitting. Transfer learning achieves state-of-the-art accuracy in minutes with 90% less data.",
      how_it_works: "• Early Layers: Low-level features (Gabor edges, color transitions) -> Generalizable across all vision tasks.\n• Upper Layers: High-level features (dog snouts, car wheels) -> Task-specific, benefit from fine-tuning.\n• Use a small learning rate (1e-4 or 1e-5) to avoid destroying pre-trained weights.",
      formula: "\\eta_{\\text{backbone}} \\ll \\eta_{\\text{head}} \\quad (\\text{e.g., } \\eta_{\\text{backbone}} = 0.1 \\times \\eta_{\\text{head}})",
      key_takeaways: [
        "Always train the new classifier head first while the backbone is frozen.",
        "When fine-tuning the backbone, unfreeze from top to bottom (upper layers first).",
        "Use a significantly smaller learning rate on pre-trained layers to prevent catastrophic forgetting."
      ]
    },
    sample_questions: [
      {
        q: "Why should you use a smaller learning rate when fine-tuning pre-trained backbone layers compared to a newly initialized classifier head?",
        options: [
          "To gently adapt pre-trained feature weights without destroying existing learned representations",
          "To force the loss function to become convex",
          "Because pre-trained layers have fewer parameters",
          "To speed up forward pass execution"
        ],
        ans: "To gently adapt pre-trained feature weights without destroying existing learned representations",
        exp: "A large learning rate would overwrite and destroy the rich, generalizable feature representations already stored in the pre-trained weights."
      },
      {
        q: "What types of visual features are primarily captured in the earliest (first 1-2) convolutional layers of a deep CNN?",
        options: [
          "Generic low-level features like edges, corners, and color gradients",
          "High-level class-specific object semantics",
          "Full object shapes and identity masks",
          "Text labels and classification logits"
        ],
        ans: "Generic low-level features like edges, corners, and color gradients",
        exp: "Early layers act as universal edge and texture filters, which are identical across virtually all visual domains."
      }
    ]
  },

  {
    id: "st1_q36",
    module_id: "st1_mod11",
    module_name: "Module 11: Transfer Learning with Pre-trained Models",
    syllabus_lec: "Lectures 18–19",
    topic: "Backbone Fine-Tuning vs. Overfitting Trade-Off",
    difficulty: "Medium",
    points: 1,
    question: "A pre-trained CNN underfits a small target dataset when the whole backbone is frozen, but rapidly overfits when the entire backbone is unfrozen. Which next strategy provides the best balance?",
    options: [
      "Unfreeze only upper backbone blocks, use a smaller learning rate, and retain suitable augmentation",
      "Keep every backbone block frozen, increase only the head learning rate, and remove augmentation",
      "Unfreeze the entire backbone, increase the learning rate, and reduce regularisation",
      "Reinitialise the entire backbone, freeze the classifier head, and train from scratch"
    ],
    correct: "Unfreeze only upper backbone blocks, use a smaller learning rate, and retain suitable augmentation",
    explanation: "When a frozen model underfits (lacks capacity for target domain nuances) and a fully unfrozen model overfits (too many trainable parameters for a small dataset), the ideal sweet spot is partial fine-tuning: keep early layers frozen, unfreeze only the upper backbone blocks, use a reduced learning rate to prevent large weight drifts, and maintain data augmentation to regularize training.",
    theory: {
      title: "Balancing Capacity and Regularization in Fine-Tuning",
      what_is_it: "A fine-tuning trade-off balancing model expressivity against sample efficiency.\n\n• Fully Frozen: Low variance, high bias (underfitting risk if target domain differs).\n• Fully Unfrozen: High variance, low bias (overfitting risk on small datasets).\n• Top-K Layer Fine-Tuning: Optimal bias-variance balance.",
      why_we_need_it: "Enables deploying massive models (ResNet-50, ViT) on specialized small datasets (e.g. 500 medical biopsy images).",
      how_it_works: "1. Freeze layers 1 through L-k.\n2. Unfreeze top k layers.\n3. Apply strong data augmentation (mixup, RandAugment).\n4. Train with learning rate warmup and cosine decay.",
      formula: "\\text{Loss} = \\mathcal{L}_{\\text{CE}}(y, \\hat{y}) + \\lambda \\|W_{\\text{unfrozen}}\\|^2_2",
      key_takeaways: [
        "Partial fine-tuning (top blocks only) provides the ideal compromise between underfitting and overfitting.",
        "Data augmentation is crucial when unfreezing backbone layers on small target datasets.",
        "Early layers should remain frozen as they contain general low-level visual primitives."
      ]
    },
    sample_questions: [
      {
        q: "When fine-tuning on a small dataset, what is the primary risk of unfreezing all layers of a deep pre-trained CNN?",
        options: [
          "The model will overfit rapidly due to having too many trainable parameters relative to dataset size",
          "The model will underfit and refuse to update weights",
          "The GPU will run out of integer precision",
          "All convolution filters will convert to linear perceptrons"
        ],
        ans: "The model will overfit rapidly due to having too many trainable parameters relative to dataset size",
        exp: "With small sample sizes, updating millions of backbone weights allows the model to memorize the training samples rather than generalize."
      },
      {
        q: "Which technique helps prevent overfitting when fine-tuning upper backbone layers?",
        options: [
          "Data augmentation and weight decay (L2 regularization)",
          "Removing all dropout layers",
          "Increasing the learning rate 100x",
          "Initializing all weights to zero"
        ],
        ans: "Data augmentation and weight decay (L2 regularization)",
        exp: "Augmentation expands data variability and weight decay penalizes large weight magnitudes, effectively combating overfitting."
      }
    ]
  },

  // Module 14: Self-Attention & Scaled Dot-Product (Lect 24–25)
  {
    id: "st1_q16",
    module_id: "st1_mod14",
    module_name: "Module 14: Self-Attention & Scaled Dot-Product Attention",
    syllabus_lec: "Lectures 24–25",
    topic: "Self-Attention Mechanism / Softmax Weights",
    difficulty: "Medium",
    points: 1,
    question: "In self-attention, a query at one token has a much larger similarity score with the key of token j than with other keys. What is the most direct consequence after softmax?",
    options: [
      "Token j's value receives a larger contribution weight",
      "Token j's query replaces the current token's query",
      "Token j's key is added directly to the output vector",
      "Token j's positional encoding is removed from the sequence"
    ],
    correct: "Token j's value receives a larger contribution weight",
    explanation: "In self-attention, attention scores α_ij = Softmax((q_i · k_j) / √d_k) determine how much weight is assigned to each Value vector v_j when constructing the contextual output representation: Output_i = ∑ α_ij · v_j. A higher similarity score with key k_j produces a larger Softmax weight α_ij, causing token j's Value vector v_j to dominate the weighted sum.",
    theory: {
      title: "Query-Key-Value Interaction & Softmax Value Aggregation",
      what_is_it: "Self-attention computes dynamic context-dependent weighted averages of Value vectors.\n\n• Query (Q): What the token is looking for.\n• Key (K): What the token advertises.\n• Value (V): The actual informational content passed forward.",
      why_we_need_it: "Allows tokens to dynamically route information to one another across arbitrary sequence distances in a single O(1) step.",
      how_it_works: "1. Similarity scores: S_ij = (q_i · k_j) / √d_k.\n2. Softmax normalization: α_ij = exp(S_ij) / ∑_m exp(S_im).\n3. Value aggregation: Out_i = ∑_j α_ij · v_j.",
      formula: "\\text{Attention}(Q, K, V) = \\text{Softmax}\\left( \\frac{Q K^T}{\\sqrt{d_k}} \\right) V",
      key_takeaways: [
        "Softmax weights α_ij act as routing percentages (summing to 1.0 per query).",
        "Higher Query-Key dot products result in larger Softmax weights assigned to the corresponding Value vector.",
        "Value vectors carry the actual semantic representations blended into the output."
      ]
    },
    sample_questions: [
      {
        q: "In the self-attention formula Attention(Q, K, V) = Softmax(QKᵀ / √d_k) V, what role does the Value matrix V play?",
        options: [
          "It provides the semantic content vectors that are weighted and summed to form the output",
          "It computes the similarity angles between tokens",
          "It masks out future padding tokens",
          "It scales down the variance to prevent vanishing gradients"
        ],
        ans: "It provides the semantic content vectors that are weighted and summed to form the output",
        exp: "The Softmax matrix provides the percentage weights, while the Value matrix V contains the content vectors being aggregated."
      },
      {
        q: "If query 1 has attention weights [0.1, 0.8, 0.1] over values [v1, v2, v3], what is the output vector?",
        options: [
          "0.1*v1 + 0.8*v2 + 0.1*v3",
          "v2 only",
          "v1 + v2 + v3",
          "0.8 * (v1 + v3)"
        ],
        ans: "0.1*v1 + 0.8*v2 + 0.1*v3",
        exp: "The output is the linear combination of value vectors weighted by their Softmax attention probabilities."
      }
    ]
  },

  {
    id: "st1_q17",
    module_id: "st1_mod14",
    module_name: "Module 14: Self-Attention & Scaled Dot-Product Attention",
    syllabus_lec: "Lectures 24–25",
    topic: "Padding Mask in Sequence Models",
    difficulty: "Medium",
    points: 1,
    question: "An encoder processes batches of sequences padded to a common length. Which masking choice prevents padded positions from influencing representations of real tokens?",
    options: [
      "Mask only positions occurring after the current token",
      "Mask the key positions corresponding to padding tokens",
      "Mask every token having the same embedding as padding tokens",
      "Mask the query positions corresponding to all non-padding tokens"
    ],
    correct: "Mask the key positions corresponding to padding tokens",
    explanation: "In batched sequence processing, shorter sequences are padded with dummy [PAD] tokens to reach equal length. To prevent real tokens from attending to dummy padding positions, the attention logits corresponding to padding Keys are set to -∞ before Softmax. Because e^-∞ = 0, padding tokens receive exactly 0.0 Softmax attention weight, preventing their Value vectors from contaminating the contextual representations of real tokens.",
    theory: {
      title: "Padding Masks & Attention Logit Masking Mechanics",
      what_is_it: "A binary or large-negative mask matrix added to the Query-Key attention matrix before the Softmax operation.\n\nMask value: For valid tokens, mask = 0. For [PAD] keys, mask = -1e9 (-∞).",
      why_we_need_it: "Batches must have uniform rectangular tensor shapes (B × N × D). Without masking, [PAD] tokens would receive positive Softmax probabilities, injecting noise into valid sentence representations.",
      how_it_works: "1. Raw score matrix: S = (Q · K^T) / √d_k.\n2. Mask injection: S_masked = S + Mask (where Mask_ij = -∞ if token j is [PAD]).\n3. Softmax: exp(-∞) / sum = 0 / sum = 0.0% attention.",
      formula: "\\text{Attention}_M(Q, K, V) = \\text{Softmax}\\left( \\frac{Q K^T}{\\sqrt{d_k}} + M_{\\text{pad}} \\right) V",
      key_takeaways: [
        "Masking Key positions ensures that real queries assign 0% attention to padding tokens.",
        "Padding masks set logit values to -∞ before Softmax.",
        "Distinct from causal (look-ahead) masks, which prevent attending to future tokens in autoregressive decoders."
      ]
    },
    sample_questions: [
      {
        q: "What numerical value is added to padding token logits in the attention matrix before Softmax?",
        options: [
          "-∞ (or a very large negative number like -1e9)",
          "0",
          "+1.0",
          "NaN"
        ],
        ans: "-∞ (or a very large negative number like -1e9)",
        exp: "Adding -∞ ensures exp(-∞) = 0 in the Softmax numerator, resulting in exactly 0 attention probability."
      },
      {
        q: "What is the primary purpose of a padding mask in a Transformer encoder?",
        options: [
          "To prevent dummy padding tokens from contributing to the representations of real tokens",
          "To enforce left-to-right unidirectional generation",
          "To normalize weights across the batch",
          "To calculate cross-entropy loss"
        ],
        ans: "To prevent dummy padding tokens from contributing to the representations of real tokens",
        exp: "Padding masks isolate real tokens from dummy tokens used to align batch sequence lengths."
      }
    ]
  },

  {
    id: "st1_q37",
    module_id: "st1_mod14",
    module_name: "Module 14: Self-Attention & Scaled Dot-Product Attention",
    syllabus_lec: "Lectures 24–25",
    topic: "Scaled Dot-Product Attention Softmax Computation",
    difficulty: "Hard",
    points: 1,
    question: "For one attention query, the scaled logits for two keys differ by 0.707 in favour of key 2. Using e^0.707 ≈ 2.03, what softmax weight is assigned approximately to key 2?",
    options: [
      "0.33",
      "0.50",
      "0.67",
      "0.73"
    ],
    correct: "0.67",
    explanation: "Let the scaled logits be s1 and s2, with s2 - s1 = 0.707. Using translation invariance, subtract s1 from both logits: z1 = 0, z2 = 0.707. Exponentiating: exp(z1) = exp(0) = 1.0, and exp(z2) = exp(0.707) ≈ 2.03. Sum of exponentials = 1.0 + 2.03 = 3.03. Softmax weight for key 2: p2 = exp(z2) / Sum = 2.03 / 3.03 ≈ 0.67 (67%). Softmax weight for key 1: p1 = 1.0 / 3.03 ≈ 0.33 (33%).",
    theory: {
      title: "Analytical Softmax Probability Derivation from Scaled Logits",
      what_is_it: "Computing two-class Softmax probabilities directly from logit differences (log-odds ratio).\n\nFormula for 2 items: p_2 = 1 / (1 + e^-(s2 - s1)) = σ(s2 - s1) (Sigmoid of difference!).",
      why_we_need_it: "Demonstrates that attention probabilities depend exclusively on relative logit differences rather than absolute values.",
      how_it_works: "1. Logit difference: Δs = s2 - s1 = 0.707.\n2. Exponent of difference: e^0.707 ≈ 2.03.\n3. Probability: p2 = 2.03 / (1 + 2.03) = 2.03 / 3.03 = 0.670.",
      formula: "p_2 = \\frac{e^{s_2}}{e^{s_1} + e^{s_2}} = \\frac{e^{s_2 - s_1}}{1 + e^{s_2 - s_1}} = \\frac{2.03}{1 + 2.03} \\approx 0.67",
      key_takeaways: [
        "In a 2-key attention comparison, Softmax reduces directly to the Sigmoid of the logit difference: p2 = σ(s2 - s1).",
        "If s2 - s1 = 0, then e^0 = 1 => p2 = 1 / (1 + 1) = 0.50 (equal attention).",
        "A difference of ~0.707 gives roughly a 2:1 ratio (67% vs 33%)."
      ]
    },
    sample_questions: [
      {
        q: "If scaled attention logits for two keys are s1 = 3.0 and s2 = 3.0, what attention weight does key 2 receive?",
        options: [
          "0.50 (50%)",
          "1.00 (100%)",
          "0.00 (0%)",
          "0.75 (75%)"
        ],
        ans: "0.50 (50%)",
        exp: "When logits are equal (difference = 0), Softmax divides probability equally: exp(3)/(exp(3)+exp(3)) = 1/2 = 0.50."
      },
      {
        q: "If key 2 has logit 4.0 and key 1 has logit 0.0, why does key 2 receive almost 98% of the attention?",
        options: [
          "Because e^4 ≈ 54.6, so p2 = 54.6 / (1 + 54.6) ≈ 0.982",
          "Because attention ignores the lower logit",
          "Because division by √d_k is skipped",
          "Because key 1 is masked with -∞"
        ],
        ans: "Because e^4 ≈ 54.6, so p2 = 54.6 / (1 + 54.6) ≈ 0.982",
        exp: "Softmax exponentiates differences: a logit lead of 4.0 yields an exponential ratio of ~55:1."
      }
    ]
  },

  {
    id: "st1_q39",
    module_id: "st1_mod14",
    module_name: "Module 14: Self-Attention & Scaled Dot-Product Attention",
    syllabus_lec: "Lectures 24–25",
    topic: "Quadratic Scaling Complexity (O(N^2)) of Self-Attention",
    difficulty: "Medium",
    points: 1,
    question: "The sequence length entering full self-attention increases from 128 to 256 while head dimension and number of heads remain unchanged. By what factor does the number of attention-score entries increase?",
    options: [
      "2",
      "4",
      "8",
      "16"
    ],
    correct: "4",
    explanation: "Self-attention computes an N × N attention score matrix for every attention head (since every token attends to every token). The number of score entries is proportional to N^2. When sequence length N doubles from 128 to 256 (a factor of 2x), the total number of attention score entries increases by (2)^2 = 4x.",
    theory: {
      title: "Computational Complexity & Quadratic Bottleneck of Self-Attention",
      what_is_it: "Full pairwise self-attention computes an attention score between every token pair (i, j) in a sequence of length N.\n\nMatrix multiplication: Q (N × d_k) · K^T (d_k × N) produces an N × N score matrix.",
      why_we_need_it: "Explains why vanilla Transformers become memory-constrained for very long contexts (e.g. 100k+ tokens), driving innovations like FlashAttention, Linear Attention, and Sparse Transformers.",
      how_it_works: "• Sequence length = N => Score entries per head = N^2.\n• For N = 128: 128 × 128 = 16,384 entries.\n• For N = 256: 256 × 256 = 65,536 entries.\n• Ratio = 65,536 / 16,384 = 4.0x.",
      formula: "\\text{Score Matrix Memory} \\propto \\mathcal{O}(N^2), \\quad \\frac{(2N)^2}{N^2} = 4",
      key_takeaways: [
        "Full self-attention scales quadratically O(N^2) in compute (FLOPs) and memory with respect to sequence length N.",
        "Doubling sequence length (2x) quadruples (4x) the attention matrix size.",
        "Tripling sequence length (3x) increases attention matrix size by 9x."
      ]
    },
    sample_questions: [
      {
        q: "If sequence length in full self-attention increases by a factor of 3 (from 1,000 to 3,000 tokens), by what factor does the attention score matrix memory increase?",
        options: [
          "9x",
          "3x",
          "6x",
          "27x"
        ],
        ans: "9x",
        exp: "Because memory is O(N^2), scaling N by 3 scales memory by 3^2 = 9x."
      },
      {
        q: "What is the primary computational bottleneck of standard self-attention when processing long documents (N > 32,000)?",
        options: [
          "O(N^2) quadratic memory and FLOP scaling of the N × N attention matrix",
          "Linear layer projections running out of weights",
          "Positional encodings resetting to zero",
          "Softmax dividing by zero"
        ],
        ans: "O(N^2) quadratic memory and FLOP scaling of the N × N attention matrix",
        exp: "The N × N attention matrix consumes quadratic GPU memory and computation as sequence length grows."
      }
    ]
  }
];

// Write st1_quiz_questions.js
const qFileContent = `// ST-1 Quiz Questions (Lectures 1–25: Neural Networks, CNNs, Transfer Learning, Attention Fundamentals)
// Generated for AGAI ST-1 Masterclass (Grouped Sequentially by Module)

const ST1_QUIZ_QUESTIONS = ${JSON.stringify(st1Questions, null, 2)};

if (typeof window !== "undefined") {
  window.ST1_QUIZ_QUESTIONS = ST1_QUIZ_QUESTIONS;
  window.QUIZ_QUESTIONS = ST1_QUIZ_QUESTIONS;
}
if (typeof globalThis !== "undefined") {
  globalThis.ST1_QUIZ_QUESTIONS = ST1_QUIZ_QUESTIONS;
  globalThis.QUIZ_QUESTIONS = ST1_QUIZ_QUESTIONS;
}
`;

fs.writeFileSync(path.join(targetDir, 'st1_quiz_questions.js'), qFileContent, 'utf8');
console.log('Successfully written st1_quiz_questions.js with', st1Questions.length, 'questions');
