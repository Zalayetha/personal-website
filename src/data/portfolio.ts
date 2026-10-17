export interface RoleItem {
  title: string;
  period: string;
  highlights?: string[];
  description?: string;
  skills?: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description?: string;
  highlights?: string[];
  skills?: string[];
  roles?: RoleItem[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpa?: string;
  achievement?: string;
}

export interface Certification {
  name: string;
  issuer: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  url: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
  embeddedVideo?: string;
  images?: string[];
}

export interface ProjectDocumentation {
  title: string;
  image: string;
  caption?: string;
}

export interface Project {
  documentation?: ProjectDocumentation[];
  title: string;
  slug: string;
  tagline: string;
  summary: string;
  image?: string;
  iconName?: "FingerprintPattern" | "ChartScatter" | "VoiceWave";
  screenshots?: string;
  techStack: string[];
  features: string[];
  links: {
    github?: string;
    live?: string;
    appStore?: string;
    playStore?: string;
  };
  impact: string;
  iveLearned: string;
}

export interface Skill {
  name: string;
  variant: "dark" | "light";
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const experience: Experience[] = [
  {
    company: "C3ARBON",
    role: "Software Engineer",
    period: "March 2026 - Present",
    location: "Indonesia • Remote",
    description:
      "Developing end-to-end full-stack web solutions and carbon accounting tools for sustainability intelligence.",
    skills: ["PHP", "Laravel", "TypeScript", "React", "Node.js", "MySQL", "Tailwind CSS"],
  },
  {
    company: "Universitas Budi Luhur",
    role: "Staff Programmer",
    period: "September 2023 - March 2026",
    location: "Indonesia • Hybrid",
    roles: [
      {
        title: "Staff Programmer",
        period: "April 2025 - August 2026 · 1 yr 5 mos",
        description:
          "Led a 3-person engineering team to deliver an internal employee mobile application from architecture to production launch. Maintained student mobile applications serving 5,000+ active users and owned production releases across Google Play and App Store.",
        skills: [
          "Flutter",
          "Dart",
          "Team Leadership",
          "App Store Connect",
          "Play Console",
          "Testing",
        ],
      },
      {
        title: "Junior Programmer",
        period: "September 2023 - April 2025 · 1 yr 8 mos",
        description:
          "Built and launched a native iOS student application in 3 months (4+ star App Store rating). Developed student-facing Android/iOS features and supported production release workflows across Google Play and App Store.",
        skills: ["iOS (Swift / SwiftUI)", "Android", "REST APIs", "Mobile Development"],
      },
    ],
  },
  {
    company: "English Space",
    role: "Web Developer",
    period: "June 2022 - March 2023",
    location: "Indonesia • Remote",
    description:
      "Developed and optimized a responsive landing page for an English language education service to drive prospective student inquiries and course registrations.",
    skills: ["JavaScript", "Web Development", "HTML/CSS", "UI/UX"],
  },
];

export const education: Education[] = [
  {
    institution: "Universitas Budi Luhur",
    location: "Jakarta, Indonesia",
    period: "September 2021 - August 2025",
    degree: "Bachelor of Computer Science, Informatics Engineering",
  },
  {
    institution: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
    location: "Indonesia • Remote",
    period: "February 2024 - July 2024",
    degree: "Mobile Developer Cohort",
  },
];

export const certifications: Certification[] = [
  { name: "Dev Certification For Android", issuer: "dev.id" },
  {
    name: "Certification of Completion Bangkit Academy 2024 batch 1",
    issuer: "Google, Tokopedia, Gojek & Traveloka",
  },
  {
    name: "English for Business Communication (92%)",
    issuer: "The British Institute",
  },
  {
    name: "Docker Foundations Professional Certificate",
    issuer: "Docker",
  },
  {
    name: "Career Essentials in GitHub Professional Certificate",
    issuer: "GitHub",
  },
  { name: "CyberOps Associate", issuer: "Cisco Networking Academy" },
];

export const publication: Publication = {
  title: "IMPLEMENTASI SISTEM VERIFIKASI E-KTP BERBASIS OCR DAN CNN UNTUK ADMINISTRASI AKADEMIK",
  authors: "Sofjan, M. Z. Z., & Soetanto, H. (2025)",
  venue:
    "Prosiding Seminar Nasional Mahasiswa Fakultas Teknologi Informasi (SENAFTI), 4(2), 269–278",
  url: "https://senafti.budiluhur.ac.id/senafti/article/view/1624",
};

export const hardSkills: Skill[] = [
  { name: "Full-Stack Web Development", variant: "dark" },
  { name: "Mobile Development", variant: "dark" },
  { name: "Project Management", variant: "dark" },
  { name: "UI/UX Design", variant: "dark" },
];

export const softSkills: Skill[] = [
  { name: "Critical Thinking", variant: "light" },
  { name: "Effective Communication", variant: "light" },
  { name: "Leadership", variant: "light" },
];

export const skillGroups: SkillCategory[] = [
  {
    title: "Core Specialties",
    skills: [
      "Full-Stack Web Development",
      "Cross-Platform Mobile Apps",
      "API Design & Integration",
      "UI/UX Implementation",
    ],
  },
  {
    title: "Languages & Frameworks",
    skills: [
      "PHP",
      "Laravel",
      "TypeScript",
      "JavaScript",
      "Python",
      "Dart",
      "Flutter",
      "React / React Native",
      "Astro",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend, Database & DevOps",
    skills: [
      "Node.js",
      "MySQL",
      "PostgreSQL",
      "Supabase",
      "Flask",
      "Docker",
      "Cloudflare",
      "Git & GitHub",
    ],
  },
  {
    title: "Professional Strengths",
    skills: [
      "Critical Thinking",
      "Problem Solving",
      "Product Mindset",
      "Technical Communication",
      "Team Leadership",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Student Budi Luhur",
    slug: "student-budi-luhur",
    tagline: "Academic companion app for university students",
    summary: `
      A cross-platform mobile application used by more than 5.000+
      students at Budi Luhur University to access academic
      information, improving accessibility and student academic
      organization.

      This was a group project initiated as work assignment, where I
      worked as a Mobile Developer responsible for rebuilding the
      application into a unified Flutter codebase and maintaining
      production release.
    `,
    impact: `
      I migrated the existing system from separate native
      applications (Java for Android and Swift/SwiftUI for IOS) into
      Flutter, improving maintainability and accelerating development
      cycles. I also developed a QR-based attendance system that
      reduced manual input errors and streamline attendance
      tracking.

      In addition, I handled deployment to both Google Play Store
      and Apple Store, ensuring compliance with release
      requirements and smooth production rollout. I also optimized
      the Android version by reducing ANR (Application Not
      Responding) occurrences, improving app stability.
    `,
    iveLearned: `
      Through this project, I gained strong experience in production-
      grade mobile development, cross-platform architecture,

      performance optimization, and end-to-end app deployment
      lifecycle
    `,
    image: "/assets/student-icon.png",
    techStack: ["Flutter", "Dart", "GetX", "Drift", "Java", "Swift", "SwiftUI"],
    features: [
      "View schedules and assignments",
      "Access grades and transcripts",
      "Campus announcements",
      "Course registration",
      "etc.",
    ],
    links: {
      appStore: "https://apps.apple.com/fi/app/student-budi-luhur/id6478258562",
    },
    screenshots: "/assets/student-bl-poster.png",
  },
  {
    title: "Employee Budi Luhur",
    slug: "employee-budi-luhur",
    tagline: "Employee management for university staff",
    summary: `
      A cross-platform mobile application for employees and
      lecturers at Budi Luhur University that provides centralized
      access to employment data and academic-related student
      information, improving administrative efficiency and data
      accessibility.

      This was a group project initiated as work assignment, where I
      served as a Mobile Developer and Team Lead, responsible for
      both technical implementation and coordination of
      development activities.
      `,
    impact: `
      I designed and implemented core application features that
      streamlined administrative workflows and reduced reliance on
      manual processes. I also led the development team by
      coordinating task distribution, maintaining clear communication
      with the system analyst, and ensuring smooth sprint execution.

      In addition, I managed production deployment to both Google
      Play Store and Apple App Store, ensuring stable releases and
      compliance with platform requirements.
    `,
    iveLearned: `
      Through this project, I strengthened my leadership skills in a

      technical environment, improved my ability to manage cross-
      functional collaboration, and gained experience in delivering

      production grade mobile applications.
    `,
    image: "/assets/employee-icon.png",
    techStack: ["Flutter", "Dart", "GetX"],
    features: [
      "Employee attendance tracking",
      "Student academic management",
      "Teaching schedule announcements",
      "etc",
    ],
    links: {
      appStore: "https://apps.apple.com/app/employee-budi-luhur/id6499570674",
    },
    screenshots: "/assets/employee-bl-poster.png",
  },
  {
    title: "Dyslexia Early Detection",
    slug: "dyslexia-early-detection",
    documentation: [
      {
        title: "Subtest Interactive Test Module",
        image: "/assets/dyslexia-subtest.png",
        caption:
          "Teacher-assisted picture naming screening test with real-time error recording and voice instruction replay.",
      },
      {
        title: "Teacher Screening Session Dashboard",
        image: "/assets/dyslexia-dashboard.png",
        caption:
          "Active screening session manager with batch progress monitoring and student completion metrics.",
      },
    ],
    tagline: "Voice-guided cognitive screening mobile app for elementary school educators",
    summary: `
      A mobile application designed to help elementary school
      teachers screen students for early signs of dyslexia through
      13 structured voice-guided interactive tests covering key
      cognitive domains such as rapid naming, phonological awareness,
      and working memory.

      This was a freelance project, where I worked as a Software
      Developer responsible for full product development, UI/UX
      design, and deployment pipeline management.
    `,
    impact: `
      I designed and implemented the full UI/UX system tailored
      specifically for children and educators. The application was
      built with 13 interactive test modules, each guided by voice
      interaction to support early learning assessment in children.

      I also coordinated the end-to-end development process by
      managing feature milestones, organizing iterative delivery of
      test modules, and ensuring smooth communication throughout the
      development lifecycle. In addition, I handled production
      deployment using the EAS Build pipeline, configuring Android
      release builds and ensuring compliance with Google Play Store
      requirements.

      The application provides a structured and accessible way for
      teachers to perform early dyslexia screening, improving early
      detection workflow in educational environments.
    `,
    iveLearned: `
      Through this project, I gained deep experience in product design
      systems, mobile UX for children-focused applications, voice
      interaction integration, and end-to-end mobile deployment
      workflows with Expo and EAS Build.
    `,
    iconName: "VoiceWave",
    techStack: [
      "React Native",
      "Expo",
      "TypeScript",
      "EAS Build",
      "Android",
      "Google Play Console",
    ],
    features: [
      "13 voice-guided interactive test modules",
      "Rapid naming & phonological awareness screening",
      "Working memory cognitive assessment",
      "Children-centric, accessible UI/UX system",
      "Teacher-assisted screening workflow",
      "Automated EAS Android build & release pipeline",
    ],
    links: {},
  },
  {
    title: "E-KTP Verification System",
    slug: "ektp-verification",
    tagline: "OCR-based identity card verification",
    summary: `
      A mobile-based system designed to automate the verification
      and validation of Indonesian E-KTP (identity cards), improving
      the efficiency and accuracy of manual identity checking
      processes.

      This was my thesis project, developed as part of research work
      combining mobile development, machine learning, and backend
      engineering to build an end-to-end verification pipeline.
    `,
    impact: `
      I developed a custom Convolutional Neural Network (CNN)
      model for E-KTP classification and verification, achieving 80%
      accuracy and 87.5% precision in detecting valid identity card
      images. The model was deployed using a Flask-based REST
      API to enable server-side inference and seamless integration
      with mobile clients.

      The system was fully integrated with Supabase and
      PostgreSQL for secure authentication and structured data
      storage. I also built the Flutter mobile application that
      communicates with the backend, forming a complete end-to-
      end verification workflow.
    `,
    iveLearned: `
      Through this project, I gained deep experience in machine
      learning model development, API deployment, and full-stack
      system integration across mobile, backend, and AI
      components.
    `,
    iconName: "FingerprintPattern",
    techStack: ["Flutter", "Dart", "Python", "TensorFlow", "Flask", "Supabase", "PostgreSQL"],
    features: [
      "OCR text extraction from E-KTP",
      "Face verification using CNN",
      "Data validation and verification",
    ],
    links: {
      github: "https://github.com/Zalayetha/verif-ktp",
    },
    screenshots: "/assets/ektp-verification-system-poster.png",
  },
  {
    title: "Santana",
    slug: "santana",
    tagline: "Disaster text classification with ML",
    summary: `
      A mobile and machine learning system that classifies disaster-
      related text and extracts key information such as disaster type,

      location, impact, and time using NLP techniques.

      This was a group college project, developed as part of
      research work at Badan Nasional Penanggulangan Bencana
      (BNPB)

      The system was designed to automate disaster information
      extraction using Natural Language Processing (NLP), improving
      structured understanding of unstructured text data.

      It provides classification and entity extraction using Named
      Entity Recognition (NER) and Indonesian NER (INER), supported
      by a custom-built NLP model.
    `,
    impact: `
      I developed a REST API using Flask to serve the machine
      learning model and enable communication between the mobile
      application and backend system. I also contributed to building
      an interactive Streamlit dashboard to visualize the NLP pipeline
      and model processing flow.

      The system delivered an end-to-end workflow combining
      mobile app, NLP model, backend API, and visualization
      dashboard, demonstrating how AI can be applied to real-world
      disaster information processing.
    `,
    iveLearned: `
      Through this project, I gained experience in NLP model
      development, backend API design, system integration, and
      building explainable AI workflows using visualization tools.
    `,
    iconName: "ChartScatter",
    techStack: ["Flutter", "Dart", "Python", "Streamlit", "Flask"],
    features: [
      "Disaster text classification",
      "Natural language processing",
      "Disaster attribute identification",
    ],
    links: {
      github: "https://github.com/Zalayetha/SANTANA",
    },
    screenshots: "/assets/santana-poster.png",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "decision-affected-engineering-workflow",
    title: "A Decision That Affected Our Engineering Workflow",
    date: "October 2026",
    excerpt:
      "From learning Swift on the fly to proposing a Flutter rewrite: how transitioning to a single codebase transformed our mobile engineering workflow at Budi Luhur University.",
    tags: ["MobileDevelopment", "EngineeringWorkflow", "Flutter", "iOS", "Swift"],
    content: `I want to tell a story about a decision I made that affected our engineering workflow. It started back when I was working at Budi Luhur University. When I first joined the developer team, I was assigned to create a new iOS application using Swift and SwiftUI—an app designed to help students with academic life, like checking grade history, marking attendance via QR codes, viewing schedules, and more.

Fun fact: before applying for the job, I had no idea I'd be building an iOS app because the interview focused entirely on Android development. It was a tough transition for me since I had to teach myself iOS development, get used to iOS, and learn how to navigate macOS :v. Long story short, I was able to deliver the product to the App Store in about 3 to 6 months.

That was a great milestone, but about 1–2 months after I started, the senior mobile developer resigned, leaving me as the only mobile developer at the university. Because of our limited mobile headcount, I proposed rebuilding the application using Flutter.

I had to learn yet another framework, but Alhamdulillah, the results were worth it. A friend joined the team to help with the rewrite, and our time spent fixing cross-platform bugs (iOS and Android) dropped significantly since we only had to maintain a single codebase.`,
    images: ["/assets/blogs/decision-affected-engineering-workflow/image-1.jpg"],
  },
  {
    slug: "building-myniyyah-mvp-reactnative",
    title: "Building MyNiyyah #1",
    date: "January 2026",
    excerpt:
      "A journey from toxic productivity to building an MVP for Muslim productivity with prayer tracking and daily journaling.",
    tags: ["MVP", "React Native", "BuildInPublic", "CodeForUmmah", "100DaysOfWriting"],
    content: `Lately, I've developed a habit of journaling at night before going to bed. Honestly, this habit has really helped me reflect on what I achieved during the day and what I need to improve moving forward.

In the past, I was caught in the trap of "Toxic Productivity"—studying and working non-stop around the clock under the illusion of being productive. Whenever I took a break, I felt guilty for not doing something productive, which eventually led to burnout.

Journaling has helped me stay grateful for the small wins that I often overlooked, keeping me from falling back into that toxic productivity cycle.

Then, together with Muhammad Azka Nur Azhim, an idea sparked to build a productivity app tailored for Muslims. The core features we decided to build first are self-reflection (muhasabah) and a prayer tracker.

Users can track their daily prayers and practice muhasabah by writing a daily journal. While journaling, users can also insert relevant Quranic verses or Hadiths from a curated list we provide.

It is still in the MVP development phase, but you can see a short demonstration of how the app works in the video below.`,
    embeddedVideo:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7417196177286148097?compact=1",
  },
  {
    slug: "building-myniyyah-journal-categorization",
    title: "Building MyNiyyah #2",
    date: "February 2026",
    excerpt:
      "Adding journal categorization to MyNiyyah app. Categories help users recall their spiritual journey and serve as milestones during times of decreased motivation.",
    tags: ["MVP", "React Native", "BuildInPublic", "CodeForUmmah", "100DaysOfWriting"],
    content: `One thing that makes daily journaling significantly more effective is organizing entries into categories.

The reason for categorizing journals is that once you've been writing for more than a week and want to look back to track your progress, navigating through past entries becomes much easier when they are organized properly.

Today's progress on MyNiyyah App is adding categorization support for daily journals.

The categories currently available are Work, Family, Health, and Friends.

The goal with this feature is to help users rekindle their spiritual drive by recalling the joy and fulfillment they experienced during worship, recorded firsthand in their own categorized reflections.

But it doesn't stop there.

When someone experiences "futur" (a spiritual lull or dip in motivation in Islamic tradition), they can revisit their past entries and use them as stepping stones or milestones to rebuild their momentum.`,
    images: [
      "/assets/blogs/myniyyah-3/image-1.jpg",
      "/assets/blogs/myniyyah-3/image-2.jpg",
      "/assets/blogs/myniyyah-3/image-3.jpg",
    ],
  },
  {
    slug: "building-myniyyah-editor-block-system",
    title: "Building MyNiyyah #3",
    date: "February 2026",
    excerpt:
      "Implementing an Editor Block System for the journaling feature - storing content as array of blocks instead of a single string, similar to Notion.",
    tags: [
      "MVP",
      "React Native",
      "BuildInPublic",
      "CodeForUmmah",
      "100DaysOfWriting",
      "MobileDevelopment",
    ],
    content: `Building MyNiyyah #3

Today, I learned about the Block Editor System and implemented it into our journaling feature—similar to how Notion works. Instead of saving content as a single long string, it is stored as an "array of blocks." Each block has its own distinct type and content.

In our implementation, I wanted two initial block types: one block for writing personal journal text, and another specialized block for displaying relevant Quranic or Hadith quotes alongside the entry.

The approach is straightforward: define custom types for journal blocks and verse quote blocks -> instantiate objects using those types -> push them into an array -> and render the array elements dynamically.`,
    embeddedVideo:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7419730208578125824?compact=1",
  },
  {
    slug: "planning-ahead-productivity",
    title: "Planning Ahead for Productivity",
    date: "January 2026",
    excerpt:
      "Why planning tomorrow's schedule before bed is important - it makes mornings more efficient and eliminates the question of 'what should I do today?'",
    tags: ["Productivity", "100DaysOfWriting"],
    content: `I believe planning tomorrow's schedule the night before is essential. Why? Because when you wake up, everything you set out to accomplish is already mapped out on your calendar. It makes mornings far more efficient since you don't have to spend mental energy asking yourself, "What should I do today?"

Even though not every planned activity always goes strictly according to schedule, taking the time to plan still makes a huge difference.`,
    images: ["/assets/blogs/planning-ahead-productivity/image-1.jpg"],
  },
  {
    slug: "react-native-developer-experience",
    title: "React Native Developer Experience",
    date: "January 2026",
    excerpt:
      "After trying Flutter, Android Native, and iOS Native - React Native with Expo proved to be faster, lighter, and more flexible for development.",
    tags: ["React Native", "Developer", "MVP", "100DaysOfWriting"],
    content: `React Native so far...

Over the past few months, I started experimenting with mobile app development using React Native.

Why React Native? It was actually an unusual reason: at the time, running Flutter, Android Native, or iOS Native was making my personal laptop struggle with performance. So I gave React Native + Expo a shot, hearing that the development workflow was simple and comparatively faster.

After trying it out, it really delivered:
- Faster iteration
- Lighter on system resources
- Highly flexible (with Expo, you can simply scan a QR code from a physical device and test instantly)
- Plentiful documentation and community tutorials

In conclusion, I've been really enjoying developing mobile apps with React Native.

I haven't taken a React Native app all the way to large-scale production yet, so I'm curious how the maintenance experience compares to Flutter, Android Native, and iOS Native. If you have production experience with both, feel free to share your thoughts!`,
    images: ["/assets/blogs/react-native-developer-experience/image-1.jpg"],
  },
  {
    slug: "app-reviews-saturday-afternoon",
    title: "Checking App Reviews on a Friday Afternoon",
    date: "September 2025",
    excerpt:
      "Checking the ratings and reviews section of an app I developed - turned out better than expected with many 5-star reviews and helpful suggestions.",
    tags: ["MobileApps", "Flutter"],
    content: `A little Friday afternoon curiosity. On a whim, I opened the "ratings and reviews" section of an app I had been developing. Initially, I was a bit anxious that the reviews might be harsh. Alhamdulillah, it turned out much better than I anticipated—many students left 5-star ratings along with constructive feedback and feature suggestions.

Thank you to all Blutizen (Budi Luhur students) who left 5 stars and shared helpful ideas for improvement. By the way, don't forget to update the Android app as well!`,
    images: ["/assets/blogs/app-reviews-saturday-afternoon/image-1.jpg"],
  },
  {
    slug: "vibe-coding-fleet-management",
    title: "Vibe Coding: Fleet Management System",
    date: "August 2025",
    excerpt:
      "Experiment building a fleet management system with Flutter and Firebase using AI assistance - exploring clean architecture concepts while keeping API costs around $20.",
    tags: ["VibeCoding", "Flutter", "Firebase", "MobileApps"],
    content: `🚀 Vibe Coding Edition: Fleet Management System

A while back, I experimented with building a mobile-based fleet management system with a modest API budget cap of around $20. The outcome was quite satisfying—the application runs smoothly, even though several features could still use refinement.

Architecturally, this project attempts to adopt clean architecture principles, though I'm still learning and evaluating whether every pattern strictly adheres to best practices.

For vehicle tracking, I leveraged the Firebase Realtime Database, even though some vehicle location data in this prototype was simulated rather than live in real time.

What made this project interesting was trusting AI with almost the entire pipeline: from project setup and UI slicing to Google Maps integration.

However, this experiment also served as a clear reminder: while AI is immensely helpful, manual engineering judgment is still indispensable for debugging errors and ensuring the app behaves as expected (case in point: the AI-generated code still had several bugs that required manual intervention) 👉

In my view, AI is an incredibly powerful co-pilot in software development, but by no means a full replacement for engineers.`,
    embeddedVideo:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7363869932113047552?compact=1",
  },
  {
    slug: "prompt-engineering-vs-context-engineering",
    title: "Prompt Engineering vs Context Engineering",
    date: "August 2025",
    excerpt:
      "Lessons from a Software Engineer Growth Community event about the difference between prompt engineering and context engineering.",
    tags: ["AI", "PromptEngineering", "ContextEngineering"],
    content: `Prompt Engineering 🤔, Context Engineering ✅

I recently attended an event hosted by the Software Engineer Growth Community titled "Budget-Friendly Claude Code." Even though I hadn't used Claude Code yet, I took away an eye-opening insight: the importance of context engineering.

Here is the key distinction between prompt engineering and context engineering:

1️⃣ Prompt Engineering focuses on how you phrase the instructions given to the AI (such as choosing the exact right phrasing or keywords).

2️⃣ Context Engineering focuses on providing all the necessary surrounding information and environment so the AI can deeply understand the problem and respond effectively.

Up until now, I often spent too much time obsessing over whether my exact wording was perfect, when I should have prioritized supplying comprehensive context so the AI truly understands what I'm aiming to achieve.`,
    images: ["/assets/blogs/prompt-engineering-vs-context-engineering/image-1.jpg"],
  },
  {
    slug: "best-routine-thom-defilet",
    title: "Learning from Thom J. Défilet's Best Routine",
    date: "August 2025",
    excerpt:
      "Discovering Thom J. Défilet's YouTube video about managing daily tasks as a CEO while fulfilling Muslim responsibilities - inspired to create my own modified routine.",
    tags: ["Productivity", "Routine"],
    content: `A few months ago, I was randomly scrolling through videos on YouTube and I found one video that made me curious. It is about the best routine by Thom J. Défilet

He explains how he manages his daily tasks as a CEO while fulfilling his responsibilities as a Muslim. It inspired me to create my own routines as a student and employee.

Alhamdulillah, I am able to consistently follow my routine like Thom, but with a little bit of modification because we are in different situations. 😁

Jazaakallaahu khayran Thom, Salams from Indonesia. 🇮🇩`,
    embeddedVideo: "https://www.youtube.com/embed/uiC3mhmh8AQ?si=ZiakkkOgU3v-b9EH",
  },
  {
    slug: "ektp-ocr-verification-thesis",
    title: "E-KTP OCR Verification System Preview",
    date: "July 2025",
    excerpt:
      "Product preview of a thesis project - E-KTP verification using CNN for classification and Tesseract OCR for text extraction, with database validation.",
    tags: ["Developers", "AI", "MobileDeveloper", "Flutter", "ImageProcessing"],
    content: `Putting together a quick product preview of the app I built for my undergraduate thesis, since there wasn't a live demo app available 😁

Here's how the identity card verification pipeline works:
A Convolutional Neural Network (CNN) classifies whether the image is an Indonesian E-KTP (ID card vs. non-ID card) -> Tesseract OCR extracts text from the card image (optimized for national ID number/NIK, name, and gender) -> The system checks the extracted data against the database records for verification and validation.

Implementing OCR on physical ID cards was quite a challenge, especially for complex layout fields like the address. If anyone has tackled similar OCR challenges, I'd love to hear your experiences!`,
    images: [
      "/assets/blogs/ektp-ocr-verification-thesis/image-1.jpg",
      "/assets/blogs/ektp-ocr-verification-thesis/image-2.jpg",
      "/assets/blogs/ektp-ocr-verification-thesis/image-3.jpg",
    ],
  },
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/mohammad-zaghy-zalayetha-sofjan/",
  github: "https://github.com/Zalayetha",
};

export const contact = {
  email: "zaghy@zalsoft.com",
  tagline: "Have a product idea? Let's build it.",
  cta: "Build Your Product",
};

export const about = {
  text: "I help businesses and founders build web and mobile products that solve real problems.",
};

export const hero = {
  name: "Zaghy Zalayetha.",
  tagline: "Software Developer",
  city: "Tangerang City",
  province: "Banten",
  country: "Indonesia 🇮🇩",
  portfolio: "https://bit.ly/portfolio-zaghy",
};
