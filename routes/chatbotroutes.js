import "dotenv/config";
import express from "express";

const router = express.Router();

router.post("/chatbot-message", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message is empty",
      });
    }

    const text = message.toLowerCase().trim();

    let reply = "";

    if (
      text === "hi" ||
      text === "hello" ||
      text === "hey" ||
      text === "salam" ||
      text === "assalam o alaikum" ||
      text === "assalamualaikum"
    ) {
      reply =
        "Hello! 👋 Welcome to Hassan Mughal's portfolio. I'm his virtual assistant. You can ask me about Hassan's skills, experience, projects, services, education, pricing, or how to hire him.";
    }
    else if (
      text.includes("who is hassan") ||
      text.includes("about hassan") ||
      text.includes("introduce hassan") ||
      text.includes("who are you")
    ) {
      reply =
        "Hassan Mughal is a Full Stack MERN Developer and Computer Science student. He focuses on building modern, responsive, and user-friendly websites and full-stack web applications using modern frontend and backend technologies.";
    }

    else if (
      text.includes("skill") ||
      text.includes("skills") ||
      text.includes("technology") ||
      text.includes("technologies") ||
      text.includes("tech stack")
    ) {
      reply =
        "Hassan's technical skills include HTML, CSS, JavaScript, React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Bootstrap, and WordPress. He works on both frontend and backend development and can build complete full-stack web applications.";
    }

    else if (
      text.includes("experience") ||
      text.includes("work experience") ||
      text.includes("development experience")
    ) {
      reply =
        "Hassan has hands-on experience in full-stack web development. He has worked with React.js for modern and responsive frontend interfaces and Node.js with Express.js for backend development and REST APIs. His experience also includes database integration, authentication, third-party API integration, e-commerce functionality, and responsive website development.";
    }

    else if (
      text.includes("frontend") ||
      text.includes("front end") ||
      text.includes("react")
    ) {
      reply =
        "Hassan has hands-on frontend development experience with HTML, CSS, JavaScript, and React.js. He builds responsive interfaces using reusable components, routing, state management, and API integration.";
    }

    else if (
      text.includes("backend") ||
      text.includes("back end") ||
      text.includes("node") ||
      text.includes("express") ||
      text.includes("api")
    ) {
      reply =
        "Hassan works with Node.js and Express.js for backend development. He can build REST APIs, handle server-side logic, process forms, integrate databases, implement authentication, and connect applications with third-party APIs.";
    }

    else if (
      text.includes("mongo") ||
      text.includes("database")
    ) {
      reply =
        "Hassan has experience working with MongoDB for database management and application data storage. MongoDB can be integrated with Node.js and Express.js applications for full-stack development.";
    }

    else if (
      text.includes("project") ||
      text.includes("projects") ||
      text.includes("portfolio")
    ) {
      reply =
        "Hassan has worked on several web development projects, including a Barber Store e-commerce website, a Food Ordering Website, and his personal Full Stack Developer portfolio. His projects demonstrate responsive design, frontend development, backend integration, APIs, and practical web functionality.";
    }

    else if (
      text.includes("barber") ||
      text.includes("barber store")
    ) {
      reply =
        "The Barber Store is an e-commerce style website developed for browsing barber products. It includes product categories, brand browsing, shopping cart functionality, checkout, and WhatsApp order integration.";
    }

    else if (
      text.includes("food") ||
      text.includes("restaurant") ||
      text.includes("food ordering")
    ) {
      reply =
        "Hassan has developed a Food Ordering Website with a modern restaurant-style interface. The project includes menu browsing, cart functionality, and an order flow designed to provide a smooth user experience.";
    }

    else if (
      text.includes("service") ||
      text.includes("services") ||
      text.includes("what do you offer")
    ) {
      reply =
        "Hassan offers full-stack web development services including business websites, responsive websites, MERN applications, REST APIs, authentication systems, database integration, third-party API integration, website redesigns, bug fixing, and custom web development.";
    }

    else if (
      text.includes("website") ||
      text.includes("web development")
    ) {
      reply =
        "Yes. Hassan can develop modern and responsive websites for businesses, personal brands, portfolios, and online stores. Depending on the project requirements, he can handle both the frontend and backend development.";
    }

    else if (
      text.includes("price") ||
      text.includes("pricing") ||
      text.includes("cost") ||
      text.includes("charge") ||
      text.includes("budget")
    ) {
      reply =
        "Project pricing depends on the requirements, design, features, functionality, and development time. For an accurate estimate, you can contact Hassan with your project requirements and he can provide a suitable quote.";
    }

    else if (
      text.includes("hire") ||
      text.includes("work with") ||
      text.includes("freelance") ||
      text.includes("available")
    ) {
      reply =
        "Yes, Hassan is available for web development projects. If you need a website, web application, e-commerce store, redesign, or custom development solution, you can contact him through the Contact section of this portfolio.";
    }

    else if (
      text.includes("education") ||
      text.includes("degree") ||
      text.includes("study") ||
      text.includes("student")
    ) {
      reply =
        "Hassan is studying for a Bachelor's degree in Computer Science. Alongside his academic studies, he is developing practical skills in full-stack web development and modern technologies.";
    }

    else if (
      text.includes("wordpress")
    ) {
      reply =
        "Yes, Hassan also works with WordPress. He can create, customize, redesign, and improve WordPress websites according to the client's requirements.";
    }

    else if (
      text.includes("responsive") ||
      text.includes("mobile") ||
      text.includes("tablet")
    ) {
      reply =
        "Yes. Responsive design is an important part of Hassan's development approach. Websites are designed to work properly across desktops, tablets, and mobile devices.";
    }

    else if (
      text.includes("contact") ||
      text.includes("email") ||
      text.includes("reach")
    ) {
      reply =
        "You can contact Hassan through the Contact section of this portfolio. You can share your name, email, subject, and project details, and your message will be sent directly to him.";
    }

    else if (
      text.includes("thank") ||
      text.includes("thanks")
    ) {
      reply =
        "You're very welcome! 😊 If you have any other questions about Hassan's skills, experience, projects, or services, feel free to ask.";
    }

    else {
      reply =
        "I'd be happy to help. I can provide information about Hassan's skills, development experience, projects, services, education, pricing, technologies, or how to hire him. Please ask me about any of these areas.";
    }

    res.status(200).json({
      success: true,
      reply,
    });

  } catch (error) {
    console.error("Chatbot Error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

export default router;
