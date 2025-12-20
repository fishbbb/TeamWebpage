
export interface TeamMember {
  name: string;
  englishName: string;
  role: string;
  bio: string;
  image: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  titleCn: string;
  description: string;
  features: string[];
  status: 'active' | 'upcoming';
  icon: string;
}

export interface Activity {
  title: string;
  date: string;
  description: string;
  type: 'hackathon' | 'conference' | 'internal';
}
