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

export interface Project {
  title: string;
  description: string;
  image?: string;
  iconName?: "FingerprintPattern" | "ChartScatter";
  href: string;
  linkText: string;
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
    description:
      "Mobile Application that provides student of Budi Luhur University with easy access to essential academic information.",
    image: "assets/student-icon.png",
    href: "https://apps.apple.com/fi/app/student-budi-luhur/id6478258562",
    linkText: "App Store",
  },
  {
    title: "Employee Budi Luhur",
    description:
      "Mobile app for Budi Luhur University employees and lecturers to access employment data and manage student academic information.",
    image: "assets/employee-icon.png",
    href: "https://apps.apple.com/app/employee-budi-luhur/id6499570674",
    linkText: "App Store",
  },
  {
    title: "E-KTP Verification System",
    description:
      "Mobile Application to automate the verification and validation of Indonesian E-KTP (identity cards).",
    iconName: "FingerprintPattern",
    href: "https://github.com/Zalayetha/verif-ktp",
    linkText: "GitHub",
  },
  {
    title: "Santana",
    description:
      "Mobile Application to classify disaster-related text and identify key attributes of natural disasters using advanced machine learning techniques.",
    iconName: "ChartScatter",
    href: "https://github.com/Zalayetha/SANTANA",
    linkText: "GitHub",
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
