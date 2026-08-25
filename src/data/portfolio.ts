export interface Profile {
  name: string;
  initials: string;
  title: string;
  specialty: string;
  location: string;
  email: string;
  summary: string;
  availability: string;
}

export interface Metric {
  value: string;
  numericValue?: number;
  suffix?: string;
  label: string;
  placeholder: boolean;
}

export interface Project {
  name: string;
  index: string;
  description: string;
  problem: string;
  approach: string;
  impact: string;
  role: string;
  technologies: string[];
  repository?: string;
  demo?: string;
  projectUrl?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  overview: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface SocialLink {
  label: string;
  href?: string;
}

export const profile: Profile = {
  name: "Rhandall Timtiman",
  initials: "RT",
  title: "Senior Software Engineer",
  specialty: "Senior Flutter & Full Stack Developer",
  location: "Calabarzon, Philippines",
  email: "rhandaaalltimtiman@gmail.com",
  summary:
    "builds cross-platform mobile apps, real-time systems, and scalable backend services for logistics, medicine delivery, telemedicine, and port operations.",
  availability: "Senior Flutter & Full Stack Developer",
};

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const metrics: Metric[] = [
  {
    value: "6+",
    numericValue: 6,
    suffix: "+",
    label: "Years engineering",
    placeholder: false,
  },
  { value: "4", numericValue: 4, label: "Product domains", placeholder: false },
  {
    value: "12",
    numericValue: 12,
    label: "Projects Shipped",
    placeholder: false,
  },
];

export const projects: Project[] = [
  {
    index: "01",
    name: "Medicine Delivery Dispatch",
    description:
      "A real-time dispatch platform coordinating medicine delivery workflows across mobile clients and backend services.",
    problem:
      "The existing Bun and TypeScript dispatch API needed lower latency and more resilient handling of delivery jobs.",
    approach:
      "Migrated the dispatch API to .NET and introduced Redis-backed queuing with explicit retry logic for failed operations.",
    impact:
      "Reduced dispatch latency significantly while making job processing more resilient to transient failures.",
    role: "API migration and system design",
    technologies: [".NET", "Redis", "Flutter", "REST APIs"],
    projectUrl:
      "https://play.google.com/store/apps/details?id=com.gobsol.rider&hl=fil",
  },
  {
    index: "02",
    name: "Telemedicine Platform",
    description:
      "A cross-platform care experience connecting patients and medical teams through remote consultation workflows.",
    problem:
      "The platform needed to bring video consultations, prescriptions, notifications, and external services into one dependable product flow.",
    approach:
      "Built the Flutter mobile experience and integrated video calling, prescription workflows, Firebase services, and third-party APIs.",
    impact:
      "Delivered the core workflows required for remote consultations and digital prescription coordination.",
    role: "Mobile and integration lead",
    technologies: ["Flutter", "Firebase", "WebSockets", "Third-party APIs"],
    projectUrl:
      "https://play.google.com/store/apps/details?id=app.gobsol.mobile&hl=en",
  },
  {
    index: "03",
    name: "Port Operations EIR",
    description:
      "A mobile-first Equipment Interchange Receipt workflow supporting digital port operations.",
    problem:
      "Port teams needed to move EIR processes from manual handling into a coordinated digital workflow.",
    approach:
      "Spearheaded the digitalization effort with Flutter as the mobile client and integrated it with the surrounding port operations ecosystem.",
    impact:
      "Established a production mobile workflow for digital EIR processing in port operations.",
    role: "Technical lead and Flutter developer",
    technologies: ["Flutter", "REST APIs"],
    projectUrl:
      "https://play.google.com/store/apps/details?id=com.xlog.cy_mobile&hl=en",
  },
  {
    index: "04",
    name: "Crowdfunding Mobile Platform",
    description:
      "A mobile crowdfunding platform designed to make fundraising more accessible while expanding reach and user participation.",
    problem:
      "Traditional fundraising channels had limited reach and made it difficult to engage a broader audience of potential contributors.",
    approach:
      "Designed and developed a mobile-first crowdfunding experience that simplified campaign discovery, contribution workflows, and user engagement.",
    impact:
      "Expanded the platform's reach through mobile accessibility and provided users with a more convenient way to discover and support fundraising campaigns.",
    role: "Mobile application development and platform architecture",
    technologies: ["Flutter", "REST APIs"],
    projectUrl: undefined,
  },

  {
    index: "05",
    name: "Container Truck Driver Tracking",
    description:
      "A driver-focused mobile application for tracking container transportation and monitoring real-time driver locations.",
    problem:
      "Operations teams needed better visibility into the location and movement of trucks transporting containers.",
    approach:
      "Developed a mobile application that continuously captured driver location data and communicated it to backend services for real-time tracking and operational monitoring.",
    impact:
      "Improved fleet visibility and enabled operations teams to monitor container movements and driver locations in real time.",
    role: "Mobile application development and real-time location tracking",
    technologies: ["Flutter", "GPS", "Google Maps", "REST APIs", "WebSockets"],
    projectUrl:
      "https://play.google.com/store/apps/details?id=com.optimus.xlogdriverapp&hl=en",
  },

  {
    index: "06",
    name: "Grocery E-Commerce Platform",
    description:
      "A mobile e-commerce platform enabling customers to browse grocery products, manage their carts, and place orders for delivery.",
    problem:
      "Grocery stores needed a digital channel to reach customers and support online ordering without relying solely on physical store visits.",
    approach:
      "Built a mobile-first shopping experience covering product discovery, cart management, checkout, order processing, and delivery workflows.",
    impact:
      "Enabled grocery stores to establish an online sales channel and provided customers with a more convenient way to purchase groceries.",
    role: "Full-stack and mobile application development",
    technologies: ["Flutter", "REST APIs", ".Net"],
    projectUrl: undefined,
  },
];

export const experience: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "Maya Bank Philippines",
    period: "2026 - Present",
    overview:
      "Handles cross-platform mobile application development, CI/CD initiatives, and internal product engineering while collaborating across teams to deliver scalable and maintainable solutions.",

    responsibilities: [
      "Collaborated with cross-functional and engineering teams to integrate new features and support project initiatives.",
      "Mentored junior developers and drove code quality, technical standards, and engineering best practices.",
      "Identified and reduced technical debt by reviewing existing implementations and introducing maintainable, future-proof solutions.",
      "Developed proof-of-concepts (POCs) to validate technical approaches and accelerate MVP development before production implementation.",
    ],

    achievements: [
      "Developed a reusable Multi-Factor Authentication (MFA) Flutter package by bridging native Android (Kotlin) and iOS (Swift) implementations using Pigeon.",
      "Migrated multiple Flutter applications to newer Flutter and dependency versions, improving maintainability while reducing technical debt.",
      "Replaced unmaintained and outdated dependencies with actively maintained alternatives to improve long-term project stability.",
      "Established reusable native-to-Flutter integration patterns to support consistent cross-platform feature delivery.",
    ],

    technologies: [
      "Flutter",
      "Dart",
      "Kotlin",
      "Swift",
      "SwiftUI",
      "Pigeon",
      "CI/CD",
    ],
  },

  {
    title: "Senior Developer — Flutter & Full Stack",
    company: "Shiptek Solutions Corp.",
    period: "2022 — 2026",
    overview:
      "Leads cross-platform mobile and full-stack delivery across logistics, telemedicine, medicine delivery, and port operations.",
    responsibilities: [
      "Led production Flutter applications for Android and iOS.",
      "Coordinated third-party vendors and integrated payment, banking, mapping, and external APIs.",
      "Mentored junior developers and drove code quality reviews and technical standards.",
    ],
    achievements: [
      "Migrated a dispatch API from Bun to .NET with Redis queues and retry logic.",
      "Spearheaded port-operations EIR digitalization and delivered telemedicine workflows.",
    ],
    technologies: ["Flutter", ".NET", "Firebase", "Redis", "Docker", "CI/CD"],
  },
  {
    title: "Mid Developer — Mobile Team Lead",
    company: "Shiptek Solutions Corp.",
    period: "2021 — 2022",
    overview:
      "Led mobile development for a container-delivery driver application and its supporting real-time services.",
    responsibilities: [
      "Led the Flutter mobile team and delivery of the Driver App.",
      "Integrated Firebase Cloud Messaging and WebSocket-based real-time features.",
    ],
    achievements: [
      "Built cron-based backend services supporting operational workflows.",
    ],
    technologies: ["Flutter", "Firebase FCM", "WebSockets", "Express.js"],
  },
  {
    title: "Frontend Developer",
    company: "Shiptek Solutions Corp.",
    period: "2019 — 2021",
    overview:
      "Developed and modernized frontend applications across the company’s web product portfolio.",
    responsibilities: [
      "Migrated two legacy Vue.js applications to Angular with TypeScript.",
      "Introduced Tailwind CSS and maintained six Vue.js 2.0 repositories.",
    ],
    achievements: [
      "Established a more modern TypeScript and utility-first frontend foundation.",
    ],
    technologies: ["Vue.js", "Angular", "TypeScript", "Tailwind CSS"],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "Angular",
      "Vue.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend",
    skills: [".NET", "Node.js", "Express.js", "Bun", "REST API design"],
  },
  {
    category: "Mobile",
    skills: ["Flutter", "Dart", "Android", "iOS", "Offline-first architecture"],
  },
  {
    category: "Infrastructure",
    skills: ["Docker", "CI/CD pipelines", "Git", "Multi-platform releases"],
  },
  { category: "Data", skills: ["MongoDB", "MySQL", "Firestore", "Redis"] },
  {
    category: "Real-time Systems",
    skills: ["WebSockets", "MQTT", "Apache Kafka", "Firebase FCM"],
  },
  {
    category: "Delivery",
    skills: [
      "Agile/Scrum",
      "Jira",
      "Postman",
      "RedisInsight",
      "Technical documentation",
    ],
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rhandall-timtiman-754442172/",
  },
  { label: "Email", href: `mailto:${profile.email}` },
];
