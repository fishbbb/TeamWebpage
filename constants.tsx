
import React from 'react';
import { TeamMember, Project, Activity } from './types';
import { Search, Radar, ShieldCheck, Cpu, Globe, Layout, Layers, BarChart3 } from 'lucide-react';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: '刘奕宽',
    englishName: 'Joshua',
    role: 'CEO & Visionary Lead',
    bio: '战略思想家，深耕AI驱动的行业变革。致力于通过“外部情报 Agent”重构企业感知范式，让决策从碎片化检索走向持续化洞察。',
    image: 'https://picsum.photos/seed/joshua/400/400',
    skills: ['Strategic Planning', 'Enterprise AI Strategy', 'Market Perception']
  },
  {
    name: '廖思瑜',
    englishName: 'Tessa',
    role: 'CTO & Tech Architect',
    bio: '技术极客，专注于大规模分布式系统与知识图谱融合。主导 EFIND 核心感知引擎，实现内外部数据的高度对齐与可追溯性。',
    image: 'https://picsum.photos/seed/tessa/400/400',
    skills: ['AI Agent Architecture', 'Data Synthesis', 'Enterprise-grade Tech']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'efind-agent',
    title: 'External Intelligence Agent',
    titleCn: '企业专属外部情报代理',
    description: '以企业知识为中心，持续生成搜索方向，自动发现并结构化外部变化，让企业从被动检索走向主动持续感知。',
    features: ['内外部检索融合', '证据链全链路追溯', '业务主题自动映射'],
    status: 'active',
    icon: 'Radar'
  },
  {
    id: 'efind-workbench',
    title: 'Agent Workbench',
    titleCn: '情报工作台 SaaS',
    description: '多租户企业级工作台，覆盖任务配置、时间线发现、联合检索问答与权限管理，提供可解释的决策支持。',
    features: ['多租户隔离', '最小权限执行', '行为审计日志'],
    status: 'active',
    icon: 'Layout'
  },
  {
    id: 'efind-trust',
    title: 'Enterprise Trust Layer',
    titleCn: '企业级安全与合规层',
    description: '明确数据边界，确保所有 AI 行为可审计、可回溯。专为 IT/安全/合规部门设计的透明执行链路。',
    features: ['数据边界管控', '可引用证据生成', '合规性实时监测'],
    status: 'upcoming',
    icon: 'ShieldCheck'
  }
];

export const ACTIVITIES: Activity[] = [
  {
    title: 'Enterprise AI Applications Forum',
    date: 'Ongoing',
    description: '共同发起并组织论坛，持续推动企业 AI 应用落地与创业生态交流。',
    type: 'conference'
  },
  {
    title: 'Industry Deep Dive Workshops',
    date: 'Continuous',
    description: '走访制造、能源、快消等行业，聚焦真实业务约束，建立 Pilot 试点伙伴网络。',
    type: 'internal'
  },
  {
    title: 'External Intelligence Ecosystem',
    date: 'Milestone',
    description: '通过闭门研讨与行业活动，不断迭代“持续感知”产品范式。',
    type: 'hackathon'
  }
];

export const ICONS: Record<string, React.ReactNode> = {
  Radar: <Radar className="w-6 h-6" />,
  Search: <Search className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  Layout: <Layout className="w-6 h-6" />,
  Layers: <Layers className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />
};
