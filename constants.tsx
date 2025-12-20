
import React from 'react';
import { TeamMember, Project, Activity } from './types';
import { Search, Radar, Zap, Rocket, Globe, Users, Trophy, Code } from 'lucide-react';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: '刘奕宽',
    englishName: 'Joshua',
    role: 'CEO & Visionary Lead',
    bio: '战略思想家，深耕AI驱动的行业变革，致力于通过尖端技术重构信息获取范式。',
    image: 'https://picsum.photos/seed/joshua/400/400',
    skills: ['Strategic Planning', 'AI Product Management', 'Market Insight']
  },
  {
    name: '廖思瑜',
    englishName: 'Tessa',
    role: 'CTO & Tech Architect',
    bio: '技术极客，专注于大规模分布式系统与深度学习算法，主导NexusTech所有核心技术路线。',
    image: 'https://picsum.photos/seed/tessa/400/400',
    skills: ['System Architecture', 'Deep Learning', 'Technical Leadership']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'insight-tracker',
    title: 'InsightTracker',
    titleCn: '智能信息检索追踪',
    description: '一款基于大语言模型的实时情报监测系统，能够从海量碎片化信息中精准提取核心价值点，实现行业动态的秒级响应。',
    features: ['Real-time Monitoring', 'NLP Synthesis', 'Trend Prediction'],
    status: 'active',
    icon: 'Radar'
  },
  {
    id: 'efind',
    title: 'EFind',
    titleCn: '智能商机检索',
    description: '专为B2B设计的智能拓客平台，利用知识图谱自动识别潜在商业机会，大幅降低获客成本。',
    features: ['Knowledge Graph', 'Lead Generation', 'Smart Filtering'],
    status: 'active',
    icon: 'Search'
  },
  {
    id: 'future-node',
    title: 'Project Nebula',
    titleCn: '星云计划',
    description: '即将到来的自适应AI工作流引擎，将彻底改变跨团队协作模式。',
    features: ['Autonomous Agents', 'Workflow Automation'],
    status: 'upcoming',
    icon: 'Rocket'
  }
];

export const ACTIVITIES: Activity[] = [
  {
    title: 'Global AI Summit 2024',
    date: '2024-11',
    description: '受邀参加全球AI峰会，展示InsightTracker的核心算法。',
    type: 'conference'
  },
  {
    title: 'Nexus Innovation Hackathon',
    date: '2024-09',
    description: '内部黑客松活动，EFind 1.0 版本在此期间诞生。',
    type: 'hackathon'
  },
  {
    title: 'Tech For Good Award',
    date: '2024-07',
    description: '获得行业创新技术奖项认可。',
    type: 'internal'
  }
];

export const ICONS: Record<string, React.ReactNode> = {
  Radar: <Radar className="w-6 h-6" />,
  Search: <Search className="w-6 h-6" />,
  Rocket: <Rocket className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Users: <Users className="w-6 h-6" />,
  Trophy: <Trophy className="w-6 h-6" />,
  Code: <Code className="w-6 h-6" />
};
