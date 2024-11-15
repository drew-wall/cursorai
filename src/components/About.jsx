import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <h2>About This Project</h2>
      
      <section>
        <h3>Developer Information</h3>
        <div className="contact-info">
          <p><strong>Name:</strong> Drew Wall</p>
          <p>
            <strong>Email:</strong> 
            <a href="mailto:chelandrew94@gmail.com"> chelandrew94@gmail.com</a>
          </p>
          <p>
            <strong>LinkedIn:</strong> 
            <a href="https://www.linkedin.com/in/drewwall/" target="_blank" rel="noopener noreferrer">
              @drewwall
            </a>
          </p>
          <p>
            <strong>GitHub:</strong> 
            <a href="https://github.com/drew-wall/cursorai" target="_blank" rel="noopener noreferrer">
              @drew-wall/cursorai
            </a>
          </p>
        </div>
      </section>

      <section>
        <h3>Built with Cursor AI - using reactjs</h3>
        <p>
          This website was created entirely using Cursor AI IDE (<a href="https://cursor.com">cursor.com</a>), a revolutionary code editor 
          that integrates advanced AI capabilities directly into the development workflow. Every component, 
          style, and feature of this website was generated and refined using Cursor AI&apos;s powerful features.
        </p>
        <p>
          <strong>All content across every page of this website - including text, descriptions, terminology definitions, 
          and technical explanations - was generated using AI features. No manual content entry was required during 
          the development process.</strong>
        </p>
      </section>

      <section>
        <h3>Cursor AI Features Used</h3>
        
        <div className="feature">
          <h4>Inline AI (Command + K)</h4>
          <p>
            The inline AI feature allows developers to generate, edit, or complete code directly within the editor. 
            By pressing Command + K, you can describe what you want to do in natural language, and Cursor AI will 
            generate the appropriate code right where your cursor is. This feature was extensively used for creating 
            component logic, styling, and quick code modifications throughout the project.
          </p>
        </div>

        <div className="feature">
          <h4>AI Chat (Command + L)</h4>
          <p>
            The AI Chat provides a conversational interface for more complex queries and discussions about your code. 
            Using Command + L, you can open a chat window where you can ask questions, debug issues, or request 
            explanations about your code. The chat has full context of your project and can provide detailed, 
            contextual responses. This feature was particularly useful for troubleshooting, optimizing code, 
            and getting suggestions for improvements.
          </p>
        </div>

        <div className="feature">
          <h4>AI Composer (Command + I)</h4>
          <p>
            The AI Composer feature, activated with Command + I, is perfect for generating entire files or large 
            sections of code. It understands the context of your project and can generate complete components, 
            including styling and functionality. This feature was used to scaffold many of the components in 
            this project, creating consistent and well-structured code that follows best practices.
          </p>
        </div>
      </section>

      <section>
        <h3>Development Process</h3>
        <p>
          The development of this website showcases the power of AI-assisted coding. Using Cursor AI&apos;s features, 
          we were able to rapidly prototype, iterate, and refine the codebase. The AI helped with everything from 
          component structure to styling, routing setup, and state management. It also assisted in maintaining 
          consistent code style and implementing best practices throughout the project.
        </p>
      </section>

      <section>
        <h3>Benefits of Using Cursor AI</h3>
        <ul>
          <li>Rapid development and prototyping</li>
          <li>Consistent code style and structure</li>
          <li>Intelligent code suggestions and completions</li>
          <li>Built-in best practices and patterns</li>
          <li>Seamless integration with development workflow</li>
          <li>Comprehensive documentation assistance</li>
        </ul>
      </section>
    </div>
  );
}