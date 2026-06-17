export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
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
}

export interface Project {
  title: string;
  slug: string;
  tagline: string;
  description: string;
  image?: string;
  iconName?: "FingerprintPattern" | "ChartScatter";
  screenshots?: string[];
  techStack: string[];
  features: string[];
  links: {
    github?: string;
    live?: string;
    appStore?: string;
    playStore?: string;
  };
}

export interface Skill {
  name: string;
  variant: "dark" | "light";
}

export const experience: Experience[] = [
  {
    company: "C3ARBON",
    role: "Full-Stack Engineer",
    period: "March 2026 - Present",
    location: "Indonesia • Remote",
  },
  {
    company: "Universitas Budi Luhur",
    role: "Staff Programmer",
    period: "September 2023 - April 2026",
    location: "Indonesia • Hybrid",
  },
  {
    company: "Bangkit Academy",
    role: "Mobile Developer Cohort",
    period: "February 2024 - July 2024",
    location: "Indonesia • Remote",
  },
  {
    company: "English Space",
    role: "Web Developer",
    period: "June 2022 - March 2023",
    location: "Indonesia • Remote",
  },
];

export const education: Education[] = [
  {
    institution: "Universitas Budi Luhur",
    location: "Jakarta, Indonesia",
    period: "September 2021 - August 2025",
    degree: "Bachelor of Computer Science, Informatics Engineering",
    gpa: "Cumulative GPA: 3.96/4.0",
    achievement: "The Best Graduate of Informatics Engineering 2025",
  },
  {
    institution: "SMA Negeri 7 Tangerang",
    location: "Tangerang, Indonesia",
    period: "October 2018 - May 2021",
    degree: "Science",
    gpa: "Final Examination Score: 81.64/100",
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
  title:
    "IMPLEMENTASI SISTEM VERIFIKASI E-KTP BERBASIS OCR DAN CNN UNTUK ADMINISTRASI AKADEMIK",
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

export const projects: Project[] = [
  {
    title: "Student Budi Luhur",
    slug: "student-budi-luhur",
    tagline: "Academic companion app for university students",
    description:
      "Mobile Application that provides student of Budi Luhur University with easy access to essential academic information.",
    image: "assets/student-icon.png",
    techStack: ["Kotlin", "Jetpack Compose", "Firebase", "REST API"],
    features: [
      "View schedules and assignments",
      "Access grades and transcripts",
      "Campus announcements",
      "Course registration",
    ],
    links: {
      appStore: "https://apps.apple.com/fi/app/student-budi-luhur/id6478258562",
    },
  },
  {
    title: "Employee Budi Luhur",
    slug: "employee-budi-luhur",
    tagline: "Employee management for university staff",
    description:
      "Mobile app for Budi Luhur University employees and lecturers to access employment data and manage student academic information.",
    image: "assets/employee-icon.png",
    techStack: ["Kotlin", "Jetpack Compose", "Firebase", "REST API"],
    features: [
      "Employee attendance tracking",
      "Student academic management",
      "Course assignment",
      "Announcement management",
    ],
    links: {
      appStore: "https://apps.apple.com/app/employee-budi-luhur/id6499570674",
    },
  },
  {
    title: "E-KTP Verification System",
    slug: "ektp-verification",
    tagline: "OCR-based identity card verification",
    description:
      "Mobile Application to automate the verification and validation of Indonesian E-KTP (identity cards) using computer vision and machine learning.",
    iconName: "FingerprintPattern",
    techStack: ["Python", "TensorFlow", "Keras", "OpenCV", "Flask"],
    features: [
      "OCR text extraction from E-KTP",
      "Face verification using CNN",
      "Data validation and verification",
      "Academic administration integration",
    ],
    links: {
      github: "https://github.com/Zalayetha/verif-ktp",
    },
  },
  {
    title: "Santana",
    slug: "santana",
    tagline: "Disaster text classification with ML",
    description:
      "Mobile Application to classify disaster-related text and identify key attributes of natural disasters using advanced machine learning techniques.",
    iconName: "ChartScatter",
    techStack: ["Python", "TensorFlow", "NLP", "FastAPI", "React Native"],
    features: [
      "Disaster text classification",
      "Natural language processing",
      "Disaster attribute identification",
      "Real-time disaster monitoring",
    ],
    links: {
      github: "https://github.com/Zalayetha/SANTANA",
    },
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "building-myniyyah-mvp-reactnative",
    title: "Building MyNiyyah #1",
    date: "5 months ago",
    excerpt:
      "A journey from toxic productivity to building an MVP for Muslim productivity with prayer tracking and daily journaling.",
    tags: ["MVP", "React Native", "BuildInPublic", "CodeForUmmah"],
    content: `Akhir-akhir ini saya sering melakukan kegiatan menulis jurnal di malam hari sebelum tidur, jujur kegiatan ini sangat membantu saya untuk melihat kembali apa yang sudah saya capai pada hari itu dan apa yang perlu saya perbaiki depannya.

Dulu tuh sempet terperangkap dalam 'Toxic Productivity', dimana saya terus-terusan belajar dan kerja tanpa kenal waktu seakan-akan produktif. Jadi setiap istirahat itu kayak merasa bersalah karena gak melakukan hal yang produktif sehingga malah burnout.

Nah, kegiatan menulis journal ini membantu saya untuk selalu bersyukur atas pencapaian-pencapaian kecil yang terkadang saya hiraukan, sehingga saya tidak terperangkap lagi dalam 'Toxic Productivity'.

Tiba-tiba saya ngide bersama mas Muhammad Azka Nur Azhim untuk membuat sebuah aplikasi bertema produktivitas untuk seorang muslim/muslimah dan fitur inti yang akan kami buat pertama adalah fitur muhasabah dan prayer tracker.

Jadi user bisa track solat, lalu melakukan muhasabah dengan cara menulis jurnal harian. Dalam proses menulis journal, user bisa insert beberapa ayat Al-Qur'an atau Hadits yang relevan yang sudah kami sediakan list-nya.

Masih dalam tahap MVP Development, bisa dilihat temen-temen demonstrasi singkat dari kegunaan aplikasinya.

#100HariNulis #MVP #ReactNative #BuildInPublic #CodeForUmmah`,
  },
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/mohammad-zaghy-zalayetha-sofjan/",
  github: "https://github.com/Zalayetha",
};

export const contact = {
  email: "zaghy@zalsoft.com",
  tagline:
    "Have a project in mind? Feel free to reach out and let's discuss how we can collaborate.",
  cta: "Let's Work Together",
};

export const about = {
  text: "Software Developer with 4+ years of experience. I Help Businesses and Founders Build Software That Solves Real Problems.",
};

export const hero = {
  name: "Zaghy Zalayetha.",
  tagline: "Software Developer",
  city: "Tangerang City",
  province: "Banten",
  country: "Indonesia 🇮🇩",
  portfolio: "https://bit.ly/portfolio-zaghy",
  resume: "https://bit.ly/resume-zaghy",
};
