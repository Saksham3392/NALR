// Questions generated for Masterclass
const ENDTERM_QUIZ_QUESTIONS = [
  {
    "id": "et_q28",
    "module_id": "et_mod1",
    "module_name": "Module 1: Retrieval-Augmented Generation (RAG)",
    "syllabus_lec": "Lectures 38–39",
    "topic": "Retrieval-Augmented Generation (RAG) Pipeline Sequence & Execution Flow",
    "difficulty": "Medium",
    "points": 1,
    "question": "In a basic RAG pipeline, what should normally happen immediately before the retrieved text is supplied to the generator?",
    "options": [
      "Represent the query and retrieve semantically similar stored chunks",
      "Fine-tune the generator on every document returned by the user",
      "Replace document embeddings with the generator's output logits",
      "Regenerate the entire vector store from the language model response"
    ],
    "correct": 0,
    "explanation": "In standard Retrieval-Augmented Generation (RAG), the sequence of execution is: (1) Accept user input, (2) Convert query into an embedding vector using an embedding model, (3) Perform semantic similarity search across the vector store to retrieve top-k chunks, (4) Assemble the retrieved text chunks with the user query into an augmented prompt, and (5) Feed that prompt into the generator LLM. Thus, representing the query and retrieving semantically similar stored chunks immediately precedes providing retrieved context to the generator.",
    "theory": {
      "title": "RAG Pipeline Architecture: Semantic Search & Context Augmentation",
      "what_is_it": "Retrieval-Augmented Generation (RAG) combines the reasoning power of an LLM with external non-parametric memory (databases, PDFs, web pages). Instead of relying strictly on frozen parameters learned during pre-training, RAG dynamically fetches relevant real-time document chunks and inserts them directly into the context window before generation starts.\n\n💡 Real-World Metaphor:\nThink of taking an open-book exam: Parametric LLM memory is what you memorized in your head; RAG is allowing the student to search the textbook index for the relevant chapter (Retrieval) and reference those exact pages while writing the answer (Generation).",
      "why_we_need_it": "Foundation LLMs suffer from two critical flaws: knowledge cutoffs (they don't know proprietary company data or yesterday's news) and hallucinations (generating plausible-sounding but completely fabricated facts). RAG eliminates hallucinations by grounding the generator in verifiable, source-attributed reference documents without requiring expensive parameter retraining.",
      "how_it_works": "• Step 1 (Ingestion): Documents are parsed, split into chunks, converted into dense vectors via an embedding model, and indexed in a vector store.\n• Step 2 (Query Embedding): When a user asks a question, the query is passed through the same embedding model to produce vector q.\n• Step 3 (Vector Retrieval): A nearest-neighbor search (e.g. Cosine Similarity) compares q against indexed chunk vectors and retrieves the top-k most similar chunks.\n• Step 4 (Augmentation & Generation): The retrieved chunks are formatted into an augmented context template and supplied directly to the generator LLM to synthesize the final grounded response.",
      "formula": "Cosine Similarity(q, d) = (q · d) / (||q|| ||d||)",
      "key_takeaways": [
        "In a RAG pipeline, query representation (embedding) and vector retrieval of relevant chunks occur immediately prior to generator prompting.",
        "RAG bridges parametric memory (internal model weights) and non-parametric memory (external vector databases).",
        "The generator is not fine-tuned per query; it is conditioned in-context using the retrieved passages.",
        "Vector stores (FAISS, Pinecone, ChromaDB) execute Approximate Nearest Neighbor (ANN) search across dense embedding spaces."
      ]
    },
    "sample_questions": [
      {
        "q": "What component is used in RAG to convert text into continuous semantic vectors?",
        "options": [
          "An embedding model",
          "A softmax temperature regulator",
          "A causal look-ahead mask",
          "A cross-attention decoder head"
        ],
        "ans": "An embedding model",
        "exp": "Embedding models (e.g., text-embedding-3-small, BGE, BERT) map text into dense vector representations where semantically similar texts have high cosine similarity."
      },
      {
        "q": "Does standard RAG modify the base LLM weights when answering a query?",
        "options": [
          "No, it augments the input prompt with retrieved chunks without changing model parameters",
          "Yes, it performs full gradient descent on the retrieved documents",
          "Yes, it updates only the first layer embeddings",
          "No, it replaces the generator with an SQL database"
        ],
        "ans": "No, it augments the input prompt with retrieved chunks without changing model parameters",
        "exp": "RAG leaves model weights completely unchanged; it operates entirely through in-context prompting with retrieved external facts."
      }
    ]
  },
  {
    "id": "et_q29",
    "module_id": "et_mod1",
    "module_name": "Module 1: Retrieval-Augmented Generation (RAG)",
    "syllabus_lec": "Lectures 38–39",
    "topic": "RAG Chunk Overlap Trade-Offs & Indexing Strategies",
    "difficulty": "Medium",
    "points": 1,
    "question": "A RAG system increases overlap between neighbouring document chunks. Which trade-off is most directly introduced?",
    "options": [
      "Better preservation of boundary context with greater retrieval redundancy",
      "Lower preservation of boundary context with fewer indexed vectors",
      "Better preservation of boundary context with no change in index redundancy",
      "Lower preservation of boundary context with greater semantic separation"
    ],
    "correct": 0,
    "explanation": "When splitting long documents into chunks (e.g., 500 tokens each with a 100-token overlap), increasing the overlap ensures that thoughts or sentences falling near chunk boundaries are not severed (better preservation of boundary context). However, having shared text between adjacent chunks increases the total number of chunks and leads to duplicate or overlapping information returned during retrieval (greater retrieval redundancy and higher vector store storage).",
    "theory": {
      "title": "Chunking Strategies: Size, Overlap, and Boundary Coherence",
      "what_is_it": "Document chunking is the preprocessing process of breaking long documents into smaller, coherent text passages that fit comfortably inside embedding model limits and LLM context windows.\n\nChunk overlap refers to repeating a fixed number of tokens from the end of Chunk N at the beginning of Chunk N+1.\n\n💡 Practical Example:\nIf sentence 'The patient was prescribed Drug X... but allergic reactions occurred' gets split so that 'Drug X' is at the end of Chunk 1 and 'allergic reactions' is at the start of Chunk 2, a non-overlapping system loses the critical link. Overlap guarantees both chunks preserve the complete relational context.",
      "why_we_need_it": "Embedding models have strict token limits (e.g., 512 or 8192 tokens) and perform best on concentrated semantic ideas. If chunks are too large, the embedding becomes diluted. If chunks are too small and have zero overlap, vital facts spanning chunk boundaries are chopped in half, causing retrieval to fail.",
      "how_it_works": "• Chunk Size: Number of tokens per chunk (e.g., 256, 512, 1024).\n• Chunk Overlap: The sliding-window step (e.g., 50 to 100 tokens, typically 10–20% of chunk size).\n• Trade-off Analysis:\n  - Increasing Overlap: Higher boundary continuity, reduced risk of split facts, BUT yields more total vectors, larger vector index memory, and higher likelihood of retrieving duplicate text snippets.\n  - Decreasing Overlap: Leaner vector store, zero duplicate text, BUT risks fragmenting ideas and missing critical context split across chunk seams.",
      "formula": "Number of Chunks ≈ ceil((L - Overlap) / (ChunkSize - Overlap))",
      "key_takeaways": [
        "Increasing chunk overlap guarantees that cross-boundary context and relations are preserved intact.",
        "The direct trade-off of higher overlap is greater index redundancy, larger vector storage footprint, and duplicate retrieved snippets.",
        "Standard industry practice recommends a 10% to 20% overlap ratio relative to chunk size (e.g., 512-token chunk with 50-token overlap).",
        "Semantic chunkers split text at natural semantic boundaries (paragraphs, section headers, markdown headers) rather than raw character counts."
      ]
    },
    "sample_questions": [
      {
        "q": "What is the primary danger of setting chunk overlap to 0% in a technical documentation RAG pipeline?",
        "options": [
          "Sentences, code blocks, or definitions spanning across chunk edges get truncated, losing essential meaning",
          "The vector database refuses to create index vectors",
          "The generator temperature automatically jumps to 2.0",
          "The embedding dimension becomes zero"
        ],
        "ans": "Sentences, code blocks, or definitions spanning across chunk edges get truncated, losing essential meaning",
        "exp": "Without overlap, any concept split between chunk boundaries becomes fragmented across two separate vectors, neither of which might have enough individual context to match a user query."
      },
      {
        "q": "If a 10,000-word document is chunked with 50% overlap compared to 10% overlap, what happens to the vector index?",
        "options": [
          "The number of generated chunks and vectors in the index substantially increases",
          "The number of chunks decreases by half",
          "The embedding dimension of each vector doubles",
          "The similarity metric switches from Cosine to Euclidean automatically"
        ],
        "ans": "The number of generated chunks and vectors in the index substantially increases",
        "exp": "Higher overlap creates more overlapping windows across the document, generating a significantly higher total count of chunks and vector entries."
      }
    ]
  },
  {
    "id": "et_q44",
    "module_id": "et_mod1",
    "module_name": "Module 1: Retrieval-Augmented Generation (RAG)",
    "syllabus_lec": "Lectures 38–39",
    "topic": "RAG Chunking and Overlap Adjustment Strategies",
    "difficulty": "Hard",
    "points": 1,
    "question": "A RAG system often misses answers whose supporting sentence is split across two neighbouring chunks, although both source documents are indexed. Which change should be tested first?",
    "options": [
      "Re-chunk around more coherent boundaries and introduce suitable overlap",
      "Increase generator temperature while leaving retrieval unchanged",
      "Fine-tune the generator before checking whether retrieval finds the evidence",
      "Reduce the vector-store size by removing neighbouring chunks"
    ],
    "correct": 0,
    "explanation": "When supporting evidence spans across adjacent chunks and gets severed, neither individual chunk contains sufficient semantic context to achieve a high similarity score during vector retrieval, or the generator receives only half the evidence. The most direct, high-yield fix is to re-chunk the corpus using natural structural boundaries (such as paragraphs or sentence splitters) and introduce an adequate chunk overlap (e.g., 15–20%) so that complete propositions are preserved within single chunks.",
    "theory": {
      "title": "Boundary Splitting Failures & Context-Aware Chunking Optimization",
      "what_is_it": "Boundary fragmentation is one of the most frequent causes of retrieval failure in production RAG systems. It occurs when arbitrary fixed-character splitting splits a core fact (such as a condition and its consequence, or a pronoun and its antecedent) into two halves across chunk boundaries.\n\n💡 Concrete Example:\n• Sentence: 'If patient pressure exceeds 180 mmHg [End of Chunk 1] ... administer 10mg Amlodipine immediately [Start of Chunk 2]'.\n• Query: 'What medicine is given if blood pressure exceeds 180 mmHg?'\n• If retrieved separately, Chunk 1 has no drug name, and Chunk 2 has no blood pressure condition! Both fail to answer the query.",
      "why_we_need_it": "Increasing temperature or fine-tuning the LLM will not fix missing retrieved evidence (garbage in, garbage out). The retrieval phase itself must be repaired at the ingestion stage by aligning chunking boundaries with semantic units.",
      "how_it_works": "• Step 1: Diagnose retrieval failure by evaluating whether the top-k chunks contain the complete ground-truth evidence.\n• Step 2: Implement Sentence/Paragraph Boundary Splitting (e.g., RecursiveCharacterTextSplitter with natural delimiters).\n• Step 3: Add Sliding Window Overlap (e.g., 100-token overlap for a 500-token chunk).\n• Step 4: Advanced Strategy (Parent-Document Retrieval): Embed smaller child chunks (100 tokens) for crisp similarity matching, but pass the full parent chunk (500 tokens) to the generator.",
      "formula": "Recall@k = (Count of queries where Gold Context is in Top-k) / Total Queries",
      "key_takeaways": [
        "When supporting facts are split across chunk seams, adjusting chunking boundaries and introducing overlap is the primary engineering remedy.",
        "Adjusting generator hyperparameters (like temperature) is ineffective if the necessary context never reached the prompt.",
        "Recursive chunking respects document syntax (paragraphs, sentences) before falling back to arbitrary token splits.",
        "Parent-Document Retrieval decouples the unit of retrieval (small, dense) from the unit of generation (large, rich)."
      ]
    },
    "sample_questions": [
      {
        "q": "Why is increasing generator temperature an ineffective solution when RAG answers miss facts split across chunk boundaries?",
        "options": [
          "Because temperature controls output randomness, but cannot conjure evidence that was never retrieved into the prompt",
          "Because temperature only affects the vector database",
          "Because temperature must always remain fixed at 0.0 in all LLM tasks",
          "Because temperature increases memory consumption exponentially"
        ],
        "ans": "Because temperature controls output randomness, but cannot conjure evidence that was never retrieved into the prompt",
        "exp": "If the critical factual evidence is missing from the retrieved context provided to the LLM, increasing creativity/randomness will only increase hallucinations, not retrieve the missing context."
      },
      {
        "q": "What technique embeds small text snippets for precise similarity matching but feeds larger surrounding context to the LLM?",
        "options": [
          "Parent-Document Retrieval (Small-to-Big Retrieval)",
          "LoRA Low-Rank Adaptation",
          "Batch Normalization",
          "Beam Search Decoding"
        ],
        "ans": "Parent-Document Retrieval (Small-to-Big Retrieval)",
        "exp": "Parent-Document Retrieval indexes small, focused child chunks for accurate vector retrieval, but retrieves and injects the wider parent document into the prompt to preserve full context."
      }
    ]
  },
  {
    "id": "et_q30",
    "module_id": "et_mod3",
    "module_name": "Module 3: Introduction to Agentic AI Systems",
    "syllabus_lec": "Lectures 41–43",
    "topic": "Agentic AI Workflow Characteristics & Closed-Loop Reasoning",
    "difficulty": "Medium",
    "points": 1,
    "question": "An LLM application must search a database, use a calculator on the retrieved values, and then decide whether another tool call is required. Which design characteristic makes this workflow agentic?",
    "options": [
      "The next action is selected using the current state and previous tool observations",
      "All tool calls are fixed before any tool result is available",
      "The model produces one response without observing tool outputs",
      "The calculator replaces the language model as the planning component"
    ],
    "correct": 0,
    "explanation": "A workflow is defined as 'agentic' when an LLM operates in an autonomous feedback loop: it evaluates its current goal, selects an action/tool, executes it, observes the environment/tool output (observation), and dynamically decides the subsequent step based on those observations. In contrast, non-agentic workflows follow rigid hard-coded pipelines or static one-shot generation.",
    "theory": {
      "title": "Agentic AI Architectures: Perception, Reasoning, Action & Observation",
      "what_is_it": "An Agentic AI System is an autonomous system where an LLM functions as an active reasoning core. Rather than just responding to a prompt in a single pass, an agent evaluates a high-level goal, formulates a multi-step plan, calls external tools (APIs, search engines, python interpreters, databases), inspects the execution results, and dynamically corrects its course until the objective is achieved.\n\n💡 Real-World Metaphor:\n• Non-Agentic (Chatbot): A tourist asking for a recipe and receiving text.\n• Agentic AI: An autonomous executive chef who reads the order, checks the refrigerator inventory, buys missing spices online, cooks the meal, tastes it, adds salt if needed, and serves the dish.",
      "why_we_need_it": "Real-world engineering, finance, and scientific tasks cannot be solved in a single prompt. They require dynamic data gathering, verification, condition-branching, error-recovery, and iterative problem solving that static LLMs cannot perform alone.",
      "how_it_works": "• The ReAct Framework (Reasoning + Acting):\n  1. Thought: Agent reasons about current state and goal ('I need to query total revenue for Q3').\n  2. Action: Agent emits a structured function call: query_db(table='revenue', quarter='Q3').\n  3. Observation: Environment returns output: {'revenue': 4200000}.\n  4. Thought: Evaluates result: 'Now I must calculate the 15% tax on 4,200,000 using the calculator tool'.\n  5. Action: Calls calculator(4200000 * 0.15).\n  6. Finish: Synthesizes the final verified response for the user.",
      "formula": "Loop: State s_t -> LLM Reasoning -> Action a_t -> Tool Execution -> Observation o_t -> State s_{t+1}",
      "key_takeaways": [
        "The defining signature of agentic workflows is dynamic decision-making conditioned on intermediate tool observations.",
        "Key architectural pillars: Planning (task decomposition), Tool Use (APIs/code/search), Memory (working vs episodic), and Self-Reflection.",
        "The ReAct (Reason + Act) loop enables LLMs to interleave reasoning traces with action execution.",
        "Static chains execute hardcoded DAGs; agents dynamically alter their execution path based on runtime feedback."
      ]
    },
    "sample_questions": [
      {
        "q": "In the ReAct prompting pattern for AI agents, what does 'Observation' represent?",
        "options": [
          "The output or result returned by the external tool or environment after executing an action",
          "The human user's personal opinion",
          "The temperature parameter of the model",
          "The total loss calculated during backpropagation"
        ],
        "ans": "The output or result returned by the external tool or environment after executing an action",
        "exp": "In ReAct (Reason + Act), the Observation is the concrete payload returned by the tool (e.g. database rows, API response, compiler error) that feeds back into the prompt for the next Thought step."
      },
      {
        "q": "Which of the following distinguishes an autonomous AI agent from a standard chain/pipeline?",
        "options": [
          "The ability to dynamically decide subsequent actions based on intermediate results and errors",
          "Having more parameters in the neural network",
          "Only using GPU inference instead of CPU",
          "Running exclusively in offline local environments"
        ],
        "ans": "The ability to dynamically decide subsequent actions based on intermediate results and errors",
        "exp": "Pipelines follow a predefined rigid sequence. Agents dynamically branch, retry, or select alternate tools based on runtime observations."
      }
    ]
  },
  {
    "id": "et_q45",
    "module_id": "et_mod4",
    "module_name": "Module 4: Ethics, Responsible AI & Case Studies",
    "syllabus_lec": "Lectures 44–45",
    "topic": "Responsible AI, Human-in-the-Loop & Agent Safety Controls",
    "difficulty": "Hard",
    "points": 1,
    "question": "An autonomous agent can read account data and can also execute an irreversible transaction. Which control best supports responsible deployment without removing useful autonomy?",
    "options": [
      "Allow read-only tools autonomously but require explicit approval before the irreversible action",
      "Allow every tool autonomously once the initial user request has been received",
      "Disable tool observations so the model cannot revise its original action plan",
      "Permit the transaction whenever the model assigns the action a high internal probability"
    ],
    "correct": 0,
    "explanation": "In Responsible AI and autonomous agent governance, operations are categorized by risk and reversibility. Safe, read-only actions (inspecting balances, browsing databases, running searches) can execute autonomously to preserve speed and agentic value. However, consequential or irreversible actions (financial transfers, database drops, sending public emails) must enforce a Human-in-the-Loop (HITL) confirmation gate where explicit human sign-off is required before execution.",
    "theory": {
      "title": "Agent Governance: Autonomy vs Guardrails & Human-in-the-Loop (HITL)",
      "what_is_it": "Responsible AI for autonomous systems is the practice of embedding security boundaries, ethical alignment, and safety controls into agent execution environments.\n\nHuman-in-the-Loop (HITL) means that while the agent can plan, explore, and analyze independently, it must pause and seek explicit authenticated human authorization before triggering state-altering or irreversible real-world actions.\n\n💡 Real-World Metaphor:\nConsider an autonomous military drone: It can autonomously navigate terrain, identify potential objects, and track targets (read-only autonomy), but firing a missile requires explicit human commander confirmation (irreversible action gate).",
      "why_we_need_it": "Autonomous LLMs can hallucinate parameters, fall prey to indirect prompt injection (e.g., malicious instructions hidden inside an email or webpage), or misunderstand user intent. Unconstrained autonomy on transactional tools leads to catastrophic financial loss, data corruption, or privacy breaches.",
      "how_it_works": "• Tiered Permission Model:\n  - Level 1 (Autonomous Read-Only): Search, query database, calculate, synthesize reports.\n  - Level 2 (Soft Reversible Actions): Create draft email, stage database transaction.\n  - Level 3 (Hard Irreversible Actions): Transfer funds, deploy code, delete user data.\n• Human Confirmation Checkpoint: When an agent generates a Level 3 tool call, the system intercepts execution, presents the exact payload and impact to the human operator, and waits for a signed confirmation before calling the API.",
      "formula": "Risk(action) = Impact(action) * (1 - Reversibility(action))",
      "key_takeaways": [
        "Responsible agent deployment enforces Human-in-the-Loop (HITL) authorization for irreversible or high-impact actions.",
        "Read-only tools (search, read balance, analyze trends) operate autonomously to maintain high efficiency and productivity.",
        "Indirect prompt injection attacks make unconditional tool autonomy extremely hazardous in production.",
        "Safety guardrails (NeMo Guardrails, Llama Guard, Constitutional AI) validate inputs, intermediate tool arguments, and model outputs."
      ]
    },
    "sample_questions": [
      {
        "q": "What is the primary security risk of granting an autonomous agent unrestricted execution of irreversible tools without human confirmation?",
        "options": [
          "Indirect prompt injection and hallucinations can trigger catastrophic unintended real-world actions",
          "The model's inference speed slows down by 90%",
          "The training loss increases during inference",
          "The embedding model runs out of vector dimensions"
        ],
        "ans": "Indirect prompt injection and hallucinations can trigger catastrophic unintended real-world actions",
        "exp": "If untrusted text contains prompt injection instructions (e.g., 'Delete database and transfer $10,000'), an agent with unconstrained tool execution could execute the catastrophic command without human intervention."
      },
      {
        "q": "Which of the following actions in an enterprise IT agent should strictly require Human-in-the-Loop (HITL) confirmation?",
        "options": [
          "Deleting a production database table or terminating critical servers",
          "Checking CPU utilization metrics across Kubernetes pods",
          "Reading server access logs for the past 24 hours",
          "Converting log timestamps into local time"
        ],
        "ans": "Deleting a production database table or terminating critical servers",
        "exp": "Deleting production tables or killing servers are irreversible actions with massive business impact, making explicit human authorization mandatory."
      }
    ]
  }
];

if (typeof window !== "undefined") {
  window.ENDTERM_QUIZ_QUESTIONS = ENDTERM_QUIZ_QUESTIONS;
  window.QUIZ_QUESTIONS = ENDTERM_QUIZ_QUESTIONS;
}
if (typeof globalThis !== "undefined") {
  globalThis.ENDTERM_QUIZ_QUESTIONS = ENDTERM_QUIZ_QUESTIONS;
  globalThis.QUIZ_QUESTIONS = ENDTERM_QUIZ_QUESTIONS;
}
