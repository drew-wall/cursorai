import './Introduction.css';

export default function Introduction() {
  return (
    <div className="introduction-container">
      <h2>Introduction to Understanding Artificial Intelligence</h2>
      
      <section>
        <h3>What is Artificial Intelligence?</h3>
        <p>
          Artificial Intelligence (AI) is a broad field of computer science focused on creating systems that can perform tasks typically requiring human intelligence. 
          These tasks include learning from experience, understanding natural language, recognizing patterns, solving problems, and making decisions. 
          AI has evolved from simple rule-based systems to sophisticated neural networks that can process vast amounts of data and identify complex patterns.
        </p>
      </section>

      <section>
        <h3>Machine Learning: The Engine of Modern AI</h3>
        <p>
          Machine Learning (ML) is a subset of AI that enables systems to learn and improve from experience without explicit programming. 
          Instead of following pre-programmed rules, ML algorithms analyze data to identify patterns and make decisions with minimal human intervention. 
          This approach has revolutionized AI by allowing systems to adapt and improve their performance over time through exposure to more data.
        </p>
      </section>

      <section>
        <h3>Large Language Models (LLMs)</h3>
        <p>
          Large Language Models represent a breakthrough in AI, built on advanced neural networks trained on massive text datasets. 
          These models, like GPT (Generative Pre-trained Transformer), can understand and generate human-like text, translate languages, 
          write code, and even engage in complex reasoning. LLMs have become the foundation for many modern AI applications, demonstrating 
          unprecedented capabilities in natural language processing.
        </p>
      </section>

      <section>
        <h3>Understanding Prompts</h3>
        <p>
          Prompts are the instructions or queries given to AI systems, particularly LLMs, to elicit specific responses or behaviors. 
          Effective prompt engineering involves crafting clear, specific instructions that guide the AI to produce desired outputs. 
          The art of prompting has become crucial in leveraging AI tools effectively, as the quality and specificity of prompts 
          directly influence the usefulness of AI responses.
        </p>
      </section>

      <section>
        <h3>AI Agents</h3>
        <p>
          AI agents are autonomous systems that can perceive their environment, make decisions, and take actions to achieve specific goals. 
          These agents can range from simple task-specific programs to complex systems that combine multiple AI technologies. Modern AI agents 
          often integrate LLMs with other tools and APIs, enabling them to perform a wide range of tasks while maintaining context and pursuing 
          objectives over extended interactions.
        </p>
      </section>

      <section>
        <h3>Code Generation</h3>
        <p>
          AI-powered code generation has revolutionized software development by enabling automated creation of programming code from natural language descriptions.
          Modern AI systems can understand programming context, suggest code completions, translate between programming languages, and even generate entire
          functions or programs from descriptions. These AI coding assistants leverage Large Language Models trained on vast repositories of code to understand
          programming patterns, best practices, and documentation. They can help developers by automating routine tasks, catching potential bugs, suggesting
          optimizations, and providing context-aware documentation, significantly improving coding productivity and quality.
        </p>
      </section>

      <section>
        <h3>Multimodal AI: Images, Video, and Audio</h3>
        <p>
          Modern AI has expanded far beyond text, demonstrating remarkable capabilities in processing and generating various media types.
          In computer vision, AI can analyze images to detect objects, recognize faces, read text, and even generate entirely new images
          from text descriptions. For video, AI systems can track motion, understand scenes, generate animations, and create synthetic
          videos. In the audio domain, AI excels at speech recognition, text-to-speech synthesis, music generation, and can even clone
          voices or translate speech in real-time while maintaining the speaker&apos;s voice characteristics.
        </p>
      </section>

      <section>
        <h3>How Everything Connects</h3>
        <p>
          The AI ecosystem is deeply interconnected: Machine Learning provides the learning capabilities that power modern AI systems. 
          These ML algorithms, particularly deep learning, enable the creation of Large Language Models. LLMs, in turn, serve as the 
          foundation for AI agents, which use prompts as their primary interface for interaction. Each component builds upon the others, 
          creating increasingly sophisticated AI systems capable of understanding, reasoning, and acting in more human-like ways.
        </p>
      </section>
    </div>
  );
} 