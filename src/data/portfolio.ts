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

export interface Project {
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
    slug: "building-myniyyah-mvp-reactnative",
    title: "Building MyNiyyah #1",
    date: "January 2026",
    excerpt:
      "A journey from toxic productivity to building an MVP for Muslim productivity with prayer tracking and daily journaling.",
    tags: ["MVP", "React Native", "BuildInPublic", "CodeForUmmah", "100HariNulis"],
    content: `Akhir-akhir ini saya sering melakukan kegiatan menulis jurnal di malam hari sebelum tidur, jujur kegiatan ini sangat membantu saya untuk melihat kembali apa yang sudah saya capai pada hari itu dan apa yang perlu saya perbaiki depannya.

Dulu tuh sempet terperangkap dalam 'Toxic Productivity', dimana saya terus-terusan belajar dan kerja tanpa kenal waktu seakan-akan produktif. Jadi setiap istirahat itu kayak merasa bersalah karena gak melakukan hal yang produktif sehingga malah burnout.

Nah, kegiatan menulis journal ini membantu saya untuk selalu bersyukur atas pencapaian-pencapaian kecil yang terkadang saya hiraukan, sehingga saya tidak terperangkap lagi dalam 'Toxic Productivity'.

Tiba-tiba saya ngide bersama mas Muhammad Azka Nur Azhim untuk membuat sebuah aplikasi bertema produktivitas untuk seorang muslim/muslimah dan fitur inti yang akan kami buat pertama adalah fitur muhasabah dan prayer tracker.

Jadi user bisa track solat, lalu melakukan muhasabah dengan cara menulis jurnal harian. Dalam proses menulis journal, user bisa insert beberapa ayat Al-Qur'an atau Hadits yang relevan yang sudah kami sediakan list-nya.

Masih dalam tahap MVP Development, bisa dilihat temen-temen demonstrasi singkat dari kegunaan aplikasinya.`,
    embeddedVideo:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7417196177286148097?compact=1",
  },
  {
    slug: "building-myniyyah-journal-categorization",
    title: "Building MyNiyyah #2",
    date: "February 2026",
    excerpt:
      "Adding journal categorization to MyNiyyah app. Categories help users recall their spiritual journey and serve as milestones during times of decreased motivation.",
    tags: ["MVP", "React Native", "BuildInPublic", "CodeForUmmah", "100HariNulis"],
    content: `Salah satu yang sangat membantu saat proses menulis jurnal harian adalah melakukan pengelompokan jurnal tersebut dalam suatu kategori.

Alasan jurnal ini dikategorikan adalah ketika sudah menulis jurnal lebih dari seminggu dan ingin melihat kembali jurnal-jurnal sebelumnya untuk mengetahui sampai mana perkembangannya, itu akan lebih mudah karena jurnal nya sudah dikategorikan sedemikian rupa.

Nah, progress MyNiyyah App hari ini adalah bisa menambahkan kategori pada jurnal harian.

Kategori yang saat ini tersedia adalah Pekerjaan, Keluarga, Kesehatan, dan Teman.

Harapannya dengan adanya fitur pengkategorian ini, user bisa recall semangat dengan mengingat kelezatan ibadah yang telah dirasakan secara real experience, dan dicatat sendiri dalam jurnal yang sudah dikategorikan oleh user sendiri.

Tapi gak cuman sampe situ,

Ketika user dalam kondisi Futur (Futur dalam Islam adalah kondisi kemerosotan semangat dalam beribadah), user bisa baca ulang jurnal-jurnal yang sudah dibuat sebelumnya, biar dipakai sebagai batu pijakan atau milestone, agar motivasi user naik lagi.`,
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
      "100HariNulis",
      "MobileDevelopment",
    ],
    content: `Building MyNiyyah #3

Hari ini belajar Editor Block System dan sekalian implementasi di fitur journaling, ini tuh kayak notion. Jadi, konten nya itu gak disimpan sebagai satu string panjang, tapi disimpan sebagai 'array of blocks' (blok-blok terpisah). Setiap blok punya tipe dan konten yang berbeda-beda.

Contoh implementasi di fitur ini adalah saya ingin ada dua tipe blok, yang pertama itu blok untuk user menulis jurnal dan satu lagi blok khusus untuk menampilkan kutipan ayat yang relevan dengan jurnal tersebut.

Caranya bisa buat tipe kustom untuk blok jurnal dan blok kutipan ayat -> lalu buat objek dengan tipe tersebut -> masukan ke dalam array -> tampilkan isi dari array nya.`,
    embeddedVideo:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7419730208578125824?compact=1",
  },
  {
    slug: "planning-ahead-productivity",
    title: "Planning Ahead for Productivity",
    date: "January 2026",
    excerpt:
      "Why planning tomorrow's schedule before bed is important - it makes mornings more efficient and eliminates the question of 'what should I do today?'",
    tags: ["Produktivitas", "100HariNulis"],
    content: `Buat perencanaan jadwal terkait hal-hal yang ingin dilakukan untuk keesokan harinya itu menurutku penting. Kenapa penting? Saya merasa karena ketika bangun tidur, semua hal-hal yang ingin dilakukan sudah jelas tertera di kalendar sehingga akan menjadi lebih efisien, jadi gaperlu lagi untuk memikirkan "apa ya yang harus dilakukan hari ini?"

Walaupun terkadang gak semua kegiatan yang sudah direncanakan akan terlaksana dengan sesuai, setidaknya sudah mencoba untuk membuat perencanaan.`,
    images: ["/assets/blogs/planning-ahead-productivity/image-1.jpg"],
  },
  {
    slug: "react-native-developer-experience",
    title: "React Native Developer Experience",
    date: "January 2026",
    excerpt:
      "After trying Flutter, Android Native, and iOS Native - React Native with Expo proved to be faster, lighter, and more flexible for development.",
    tags: ["React Native", "Developer", "MVP", "100HariNulis"],
    content: `React Native sejauh ini....

Jadi, beberapa bulan ini mulai mencoba develop aplikasi mobile make React Native

Kenapa React Native? Agak unik sih, karena pada saat itu pake Flutter, Android Native, atau IOS native itu laptop pribadi dah lumayan lemot. Jadi, nyobain deh react native + expo yang katanya sih untuk fase development tuh simple dan relatif lebih cepat daripada yang lain.

Setelah mencoba, ternyata memang:
- lebih cepat
- lebih ringan di laptop
- lebih fleksibel (karena kalo pake expo bisa scan QR code aja dari physical device dan aplikasi bisa langsung jalan)
- dokumentasi/tutorial yang tersedia sudah cukup banyak

Jadi, kesimpulan-nya untuk saat ini sih saya enjoy banget buat develop aplikasi mobile pake react native

Kalo app nya udah masuk production belum tau sih nanti bedanya apa dengan Flutter, Android native, dan IOS Native. Kalo ada yang udah berpengalaman, boleh dong info di kolom komentar.`,
    images: ["/assets/blogs/react-native-developer-experience/image-1.jpg"],
  },
  {
    slug: "app-reviews-saturday-afternoon",
    title: "Checking App Reviews on a Friday Afternoon",
    date: "September 2025",
    excerpt:
      "Checking the ratings and reviews section of an app I developed - turned out better than expected with many 5-star reviews and helpful suggestions.",
    tags: ["MobileApps", "Flutter"],
    content: `Keisengan sore hari di hari Jum'at. Iseng-iseng buka section "ratings and reviews" aplikasi yang aku develop, awalnya agak khawatir takut review-nya menusuk hati. Alhamdulillah, ternyata tidak seburuk yang ku bayangkan, banyak mahasiswa yang kasih bintang 5 dan ada juga yang ngasih saran terkait pengembangan aplikasinya.

Terima kasih Blutizen yang sudah memberikan bintang 5 dan yang sudah memberikan saran pengembangan. by the way, aplikasi android nya jangan lupa update juga yah.`,
    images: ["/assets/blogs/app-reviews-saturday-afternoon/image-1.jpg"],
  },
  {
    slug: "vibe-coding-fleet-management",
    title: "Vibe Coding: Fleet Management System",
    date: "August 2025",
    excerpt:
      "Experiment building a fleet management system with Flutter and Firebase using AI assistance - exploring clean architecture concepts while keeping API costs around $20.",
    tags: ["VibeCoding", "Flutter", "Firebase", "MobileApps"],
    content: `🚀 Edisi Vibe Coding: Fleet Management System

Beberapa waktu lalu saya bereksperimen membuat fleet management system berbasis mobile apps dengan batasan penggunaan API sekitar $20. Hasilnya cukup memuaskan, aplikasi bisa berjalan dengan baik, meskipun masih ada beberapa fitur yang perlu disempurnakan.

Dari sisi arsitektur, project ini sudah mencoba menerapkan konsep clean architecture, meskipun saya masih belajar apakah penerapannya sudah sesuai best practice atau belum.

Untuk kebutuhan vehicle tracking, saya memanfaatkan Firebase Realtime Database, walaupun beberapa data kendaraan di project ini tuh gak bener-bener bergerak secara real time.

Yang menarik, hampir seluruh proses saya percayakan pada AI: mulai dari setup project, slicing UI, hingga integrasi Google Maps.

Tapi, eksperimen ini juga jadi pengingat bahwa meskipun AI sangat membantu, kita tetap perlu sentuhan manual untuk memperbaiki error dan coba memastikan aplikasi berjalan dengan sesuai (buktinya kode yang dihasilkan AI pada eksperimen ini sebenarnya masih ada beberapa yang error) 👉

Menurutku, AI ini akan menjadi partner yang powerful dalam pengembangan aplikasi, tapi tetap bukan pengganti penuh developer.`,
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

Baru saja saya ikut acara dari Software Engineer Growth Community yang berjudul "Paket Hemat Claude Code", walaupun saya belum pernah pake Claude Code tapi saya dapat satu pelajaran baru yaitu tentang context engineering.

Perbedaan dari prompt engineering dan context engineering adalah:

1️⃣ Prompt Engineering itu fokus kepada bagaimana menyusun instruksi yang diberikan kepada AI (misal seperti memilih kata-kata yang tepat).

2️⃣ Context Engineering itu bagaimana kita menyediakan semua informasi yang diperlukan sehingga AI dapat memahami dengan baik dan merespons secara efektif.

Sampai saat ini kadang saya masih terlalu memikirkan apakah kata yang saya pilih tepat untuk diberikan kepada AI, padahal seharusnya saya lebih mementingkan konteks yang lengkap sehingga AI dapat benar-benar memahami apa yang saya inginkan.`,
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
    content: `Iseng-iseng buat product preview dari aplikasi yang dibuat untuk tugas akhir tapi gaada demo app nya 😁

Jadi, verifikasi KTP di sistem ini menggunakan CNN untuk klasifikasi KTP (KTP atau bukan KTP) --> ekstrak teks dari foto ktp nya menggunakan tesseract OCR (tapi baru optimize di nik, nama, dan jenis kelamin) --> cek kesamaan data yang sudah ter-ekstraksi dengan data yang ada di database sistem.

Lumayan struggle saat implementasi OCR pada KTP khususnya untuk field alamat, kalo ada yang udah pernah implementasi hal-hal yang sejenis, boleh dong sharing pengalamannya.`,
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
