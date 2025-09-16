// data/projects.ts
export type personalProjectType = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  tech: string[];
}[];

export const personalProjects: personalProjectType = [
  {
    href: "https://github.com/LuaanNguyen/PhoenixProject",
    imageSrc: `/phoenix_project.png`,
    imageAlt: "Phoenix Project (HackMIT 2025)",
    title: "Phoenix Project (HackMIT 2025)",
    description:
      "Phoenix Project is a live Arduino wildfire sensor network with real-time map, AI decisions, and analytics. Built at HackMIT 2025, it uses Keyestudio 18B20 temperature sensors deployed in multiple regions of California to detect fire spread, modeled after the Alexandridis probabilistic fire simulation.",
    tech: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "deck.gl",
      "Mapbox GL",
      "WebSockets",
      "Arduino UNO R4 WiFi",
      "DS18B20 (OneWire)",
      "Python",
      "Alexandridis Fire Model",
      "AI Judge (EigenCloud)",
      "Cerebras API",
      "3D-printed Enclosure (Bambu X1C)",
    ],
  },
  {
    href: "/blog/post/intern-experience-aws",
    imageSrc: `/aws_project.png`,
    imageAlt: "Unified Media Processing Pipeline",
    title: "Unified Media Processing Pipeline ⚙️",
    description:
      "My internship project at AWS, focusing on combining to major service: decoding and shot detection, into one host. This project succeeded and served as a Proof of Concept (POC) for further optimization into the Bedrock Data Automation workflows.",
    tech: [
      "Java",
      "Python",
      "TypeScript",
      "CDK",
      "AWS",
      "ECS",
      "Fargate",
      "Step Functions",
      "Cloud Watch",
      "Cloud Formation",
      "S3",
      "Docker",
      "Bedrock",
    ],
  },
  {
    href: "https://www.linkedin.com/posts/chatgpt-for-education_today-were-introducing-study-mode-a-new-activity-7356072086492073985-AwSt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEOlMkwBGudRKqJxI09d_sbxL7eqHyKnDk8",
    imageSrc: `/openai_study_mode.jpeg`,
    imageAlt: "ChatGPT Study Mode",
    title: "ChatGPT Study Mode 📚",
    description:
      "As part of ChatGPT Lab for Education, I conducted various product and usability testing for OpenAI's unreleased features. One of them was ChatGPT's Study Mode. It is designed to help students learn with ChatGPT, not just get answers. It guides users step by step, asking thoughtful questions and adapting to each student’s goals and skill level - much like a tutor would.",
    tech: ["Product Testing", "Usability Testing"],
  },
  {
    href: "https://rateourclub.com/",
    imageSrc: `/rateourclub.png`,
    imageAlt: "Rate Our Club",
    title: "Rate Our Club ⭐️",
    description:
      "rateourclub.com is a community-driven platform where students can rate and review 100+ college organizations. Built with Next.js, TailwindCSS, and Firebase, it offers a fast, responsive UI and real-time feedback system hosted on an Ubuntu server.",
    tech: [
      "NextJS",
      "TailwindCSS",
      "JavaScript",
      "Firebase DB",
      "Ubuntu Server",
    ],
  },
  {
    href: "https://www.brainrotmastervaultovercooked.tech/",
    imageSrc: `/gallery.jpg`,
    imageAlt: "Brainrot Master Vault",
    title: "Brainrot Master Vault 📻 (HackPrinceton 2025 Winner 🏆)",
    description:
      "BrainRot Master Vault turns short-form videos into AI-curated podcast episodes and knowledge graphs. Built at HackPrinceton 2025, it filters for quality insights using Whisper, Gemini, and Phi-3, and won Best Self-Hosted Inference.",
    tech: [
      "OpenAI Whisper",
      "Microsoft Phi-2",
      "Gemini",
      "Modal",
      "NextJS",
      "React Native/ Expo",
      "Framer Motion",
      "Kokoro",
      "FastAPI",
      "SQLlite",
    ],
  },
  {
    href: "https://demo.airbnb-for-stuff.pages.dev/items",
    imageSrc: `/airbnb_for_stuff.png`,
    imageAlt: "AirBnb For Stuff",
    title: "AirBnb For Stuff 📦",
    description:
      "AirBnb For Stuff is a peer-to-peer rental platform for everyday items, built with SvelteKit, Go’s gorilla/mux, and PostgreSQL. It enables users to lend and borrow gear locally, with a full-stack setup powered by AWS RDS and deployed on Cloudflare Pages.",
    tech: [
      "GO + gorilla/mux",

      "Svelte + SvelteKit",
      "TailwindCSS",
      "TypeScript",
      "PostgresSQL",
      "AWS RDS",
      "CloudFare Pages",
    ],
  },
  {
    href: "https://lwm-wireless.net/",
    imageSrc: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/lwm.png`,
    imageAlt: "Large Wireless Model",
    title: "Large Wireless Model",
    description:
      "Large Wireless Model is the official documentation site for LWM—the world’s first foundational model for wireless channels. Built with React, Node.js, and MySQL, it features CI/CD via GitHub Actions, containerized with Docker, and deployed on AWS EC2 with S3 integration.",
    tech: [
      "ReactJS",
      "NodeJS",
      "Express",
      "MySQL",
      "AWS EC2",
      "AWS S3",
      "Github Actions",
      "Docker",
      "Webhooks",
    ],
  },
  {
    href: "https://voxel51.codestacx.com/",
    imageSrc: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/bulbasaur.png`,
    imageAlt: "🌱 Bulbasaur",
    title: "🌱 Bulbasaur",
    description:
      "Bulbasaur is an AI-driven platform for real-time wildfire detection, leveraging satellite imagery and environmental data. Built with TensorFlow, PyTorch, Flask, and React, it visualizes wildfire risks through a sleek Mapbox-powered interface.",
    tech: [
      "TensorFlow",
      "PyTorch",
      "ReactJS",
      "Flask",
      "Mapbox API",
      "TailwindCSS",
    ],
  },
  // {
  //   href: "https://github.com/LuaanNguyen/pokedexcli",
  //   imageSrc: "/pokedex.png",
  //   imageAlt: "Pokedex CLI 👨🏻‍💻 (In Progress)",
  //   title: "Pokedex CLI 👨🏻‍💻",
  //   description:
  //     "A command line interface to get Pokemon informations from Pokedex API",
  //   tech: ["Golang", "HTTPS", "Unit Testing"],
  // },
  // {
  //   href: "https://github.com/LuaanNguyen/go-leetcode",
  //   imageSrc: "/goleetcode.png",
  //   imageAlt: "Daily LeetCode Solutions in Golang 🧠",
  //   title: "Daily LeetCode Solutions in Golang 🧠",
  //   description:
  //     "I try to solve most daily LeetCode questions in Golang in order to get familiar with the language.",
  //   tech: ["Golang", "Unit Testing"],
  // },

  {
    href: "https://github.com/LuaanNguyen/neutral-lens",
    imageSrc: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/Neutral_Lens.png`,
    imageAlt: "Neutral Lens 🎥",
    title: "Neutral Lens 🎥 (Social Bias Hackathon Winner 🥇)",
    description:
      '"Neutral-lens" is a browser extension that aims to reduce political bias in Youtube videos. This tool analyzes news content, identifying biased language and categorize it into 3 different types: Generalization, Unfairness, and Stereotypes.',
    tech: [
      "GUS-Net Bias Detection LLM",
      "Google's BERT",
      "ReactJS",
      "TypeScript",
      "Flask",
      "Python",
      "Chrome Extension",
    ],
  },
  {
    href: "https://github.com/LuaanNguyen/Mine-Alliance",
    imageSrc: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/Mine_Alliance.png`,
    imageAlt: "Mine Alliance ⛏️",
    title: "Mine Alliance ⛏️ (Principled Innovation Hackathon Winner 🥇)",
    description:
      "Mine Alliance is a platform that connects Arizona’s mining communities, corporations, and regulators through real-time data and environmental insights. Built with Next.js, Flask, and AWS, it features interactive maps and GPT-4o–powered analysis to promote sustainable mining. Winner of the Spark Challenge Hackathon.",

    tech: [
      "AWS EC2",
      "AWS SageMaker Studio",
      "NextJS",
      "TypeScript",
      "Flask",
      "Python",
      "SQLAlchemy",
      "OpenAI",
    ],
  },
  {
    href: "https://github.com/LuaanNguyen/static-site-generator",
    imageSrc: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/staticsitegenerator_infrastructure.jpg`,
    imageAlt: "Static Site Generator",
    title: "Static Site Generator ♺",
    description:
      "Static Site Generator is a Python-based tool that converts raw content—like Markdown and images—into fully rendered static websites using HTML and CSS. Designed with object-oriented principles for easy extensibility.",
    tech: ["Python", "OOP", "HTML/CSS"],
  },
  {
    href: "https://github.com/LuaanNguyen/asteroids",
    imageSrc: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/asteroids.png`,
    imageAlt: "Asteroids Game",
    title: "Asteroids Game ☄️",
    description:
      "Asteroids Game is a simplified remake of the classic arcade game, built using Pygame to strengthen object-oriented programming concepts. It marked my first hands-on experience with game development in Python.",
    tech: ["Pygame", "Python", "OOP"],
  },
  {
    href: "https://thesoda.io/",
    imageSrc: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/thesodaio.png`,
    imageAlt: "Thesoda.io",
    title: "The Software Developers Association (SoDA) Website 🥤",
    description:
      "thesoda.io is the official site for the Software Developers Association at ASU. Collaborated with 8 technical officers to revamp the site, build a Flask backend for a points system, integrate Discord bots, and optimize SEO. Powered by React, TailwindCSS, and Digital Ocean.",
    tech: [
      "ReactJS",
      "Flask",
      "Digital Ocean",
      "Netlify",
      "AceternityUI",
      "TailwindCSS",
      "TypeScript",
      "Python",
      "SEO",
    ],
  },
  {
    href: "https://www.luannguyen.net/",
    imageSrc: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/luan-portfolio.jpg`,
    imageAlt: "My Portfolio",
    title: "Personal Portfolio 🪪",
    description:
      "This is a Spotify-inspired site I built in under 24 hours to showcase my work and identity. Built with Next.js, TailwindCSS, and TypeScript, it's deployed with AWS S3 + CloudFront and features Vercel Analytics for insights.",
    tech: [
      "NEXTJS",
      "AceternityUI",
      "TailwindCSS",
      "TypeScript",
      "Vercel Analytics",
      "AWS S3 + CloudFront",
    ],
  },
  {
    href: "https://board-game-cafe-website.vercel.app/",
    imageSrc: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/sipnplay.png`,
    imageAlt: "Sip n Play Cafe Website",
    title:
      "Sip n Play Boardgame Café Website ☕️ (Codédex Hackathon 2024 Winner 🥇)",
    description:
      "Sip & Play is an interactive website for a NYC board game café, featuring a 500+ game catalog and a 3D animated menu built with React, Three.js, and TailwindCSS. Designed for an immersive UX, it won Best UI/UX Design at the Codédex Hackathon.",
    tech: ["React", "ThreeJS", "TailwindCSS", "JavaScript"],
  },
  {
    href: "https://github.com/Smit2553/Fiber",
    imageSrc: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/fiber.png`,
    imageAlt: "Fiber Project",
    title: "🥑 Fiber (CalHacks 2024)",
    description:
      "An AI-powered mobile application to scan the barcodes of groceries, providing comprehensive nutritional value, additives, and organic dimension for the users. This allows users to easily identify healthier options while grocery shopping.",
    tech: ["React Native", "Expo", "Python", "Flask", "OpenAI"],
  },
  {
    href: "https://ethicalspectacle.com/",
    imageSrc: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/ethicalspectacle.png`,
    imageAlt: "Ethical Spectable Research Website",
    title: "Ethical Spectable Research Website 💻",
    description:
      "Ethical Spectacle Research Website is the official site for our research company, highlighting ongoing projects, publications, and member leaderboards. Built with Next.js, Flask, and MySQL, it serves as a hub for showcasing our AI-driven initiatives.",
    tech: ["NEXTJS", "JavaScript", "Python", "Flask", "MySQL", "TailwindCSS"],
  },
  {
    href: "https://www.unionize101.org",
    imageSrc: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/unionize101.png`,
    imageAlt: "unionize101.org ",
    title: "unionize101.org 💻",
    description:
      "unionize101.org is an educational platform designed to guide workers and union leaders through the process of starting a union. Built by a team of 6 interns during my time at Pinear LLC, the site combines Next.js, GhostCMS, and Docker to deliver a polished, SEO-optimized experience.",
    tech: [
      "NEXTJS",
      "TypeScript",
      "GhostCMS",
      "Docker",
      "Figma",
      "TailwindCSS",
      "Google Analytics",
      "SEO",
    ],
  },
  {
    href: "https://github.com/LuaanNguyen/HelpSystem",
    imageSrc: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/helpsystem.jpg`,
    imageAlt: "Help System 📚",
    title: "Help System 📚",
    description:
      "Help System is a Java-based desktop application designed to provide personalized academic support to over 200 ASU students. Led a team of 5 to build the system using JavaFX, H2 Database, and Maven, with a Figma-driven UI design.",
    tech: ["Java", "JavaFX", "Maven", "H2 Database", "Figma"],
  },
  {
    href: "https://github.com/LuaanNguyen/epics-mern",
    imageSrc: `${process.env.NEXT_PUBLIC_CLOUDFRONT_URL}/shrimp-farming.png`,
    imageAlt: "EPICS project",
    title: "Online Database for Study Abroad Program 📊",
    description:
      "Online Database for Study Abroad Program is a MERN-stack platform supporting Vietnamese shrimp farmers by monitoring water quality. The system maintains a self-updating database and enables real-time data conversion and communication.",
    tech: ["React", "Express", "NodeJS", "MongoDB", "TailwindCSS"],
  },
  // {
  //   href: "https://worldwise-xi-five.vercel.app/",
  //   imageSrc: "/worldwise.jpg",
  //   imageAlt: "Worldwise",
  //   title: "Wordwise 🌎",
  //   description:
  //     "This project ultilize Geolocation and Leaflet Map's API to track user's travel experiences",
  //   tech: ["React", "JavaScript", "Leaflet"],
  // },
  // {
  //   href: "https://popcorn-picks.vercel.app/",
  //   imageSrc: "/popcorn-picks.png",
  //   imageAlt: "Popcorn Picks",
  //   title: "Popcorn Picks 🍿",
  //   description:
  //     "Popcorn Picks: A Personalized Movie Tracker to track your movie experience.",
  //   tech: ["React", "JavaScript"],
  // },
  // {
  //   href: "https://github.com/LuaanNguyen/chatbot-chatgpt",
  //   imageSrc: "/chatgpt-terminal.jpg",
  //   imageAlt: "Personal ChatGPT",
  //   title: "Personal ChatGPT 🤖",
  //   description:
  //     "Ultilized OpenAI's API to create a chatbot within the MacOS Terminal that is as capable as regular ChatGPT 3.5",
  //   tech: ["NodeJS", "JavaScript", "OpenAI's API"],
  // },
  // {
  //   href: "https://luaannguyen.github.io/marriott-bonvoy-bootstrap-clone/#",
  //   imageSrc: "/homevillas.png",
  //   imageAlt: "Marriot Bonvoy Website",
  //   title: "Marriot Bonvoy Website 🏝️",
  //   description:
  //     "Devised a prototype leveraging the Mapbox API to create Marriot Bonvoy's Homes & Villas home page website. Employed DOM manipulation techniques to develop and customize website sections, ensuring alignment with stakeholder requirements and enhancing overall user experience.",
  //   tech: ["HTML/CSS", "JavaScript", "Bootstrap", "MapBox API"],
  // },
  // {
  //   href: "https://b7c0c00a-ee15-4855-91dc-f508d9c2049b-00-1pkpcsn82sekg.spock.replit.dev/",
  //   imageSrc: "/hiking-matching-game.png",
  //   imageAlt: "Hiking Game",
  //   title: "Hiking Matching Game 🥾",
  //   description:
  //     "A hiking-theme matching game that I created while learning JavaScript",
  //   tech: ["HTML/CSS", "JavaScript", "Bootstrap"],
  // },
  {
    href: "https://luaannguyen.github.io/FSE100-final-project/",
    imageSrc: `/spacegames.png`,
    imageAlt: "Space Games",
    title: "Space Games 👾",
    description:
      "Space Games is a trio of browser-based games built with p5.js, developed in a team of four. I contributed to core game logic, UI design, and presented the final product to over 20 stakeholders.",
    tech: ["HTML/CSS", "JavaScript", "p5.js"],
  },

  // Add more project objects here...
];
