export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  image: string;
  tags: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: "Statistical Research" | "Impact Evaluation" | "Data Analytics & MIS" | "Social Studies";
  featured: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string; // Markdown supported
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
    role: string;
  };
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  responsibilities: string[];
  category: "Research" | "Work" | "Internship";
}

export interface EducationItem {
  degree: string;
  major: string;
  cgpa: string;
  year: string;
  institution: string;
  board?: string;
}

export interface SeminarItem {
  id: string;
  title: string;
  organizer?: string;
  year: string;
  type: "Seminar" | "Workshop" | "Extracurricular";
}
