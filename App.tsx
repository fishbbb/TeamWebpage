
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  ChevronRight, 
  Send, 
  Terminal,
  Cpu,
  BrainCircuit,
  Globe,
  Sparkles,
  ShieldCheck,
  Zap,
  Activity
} from 'lucide-react';
import { TEAM_MEMBERS, PROJECTS, ACTIVITIES, ICONS } from './constants';
import { geminiService } from './services/geminiService';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [aiQuery, setAiQuery] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isAsking, setIsAsking] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const handleAiAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiQuery.trim() || isAsking) return;
    
    setIsAsking(true);
    setAiResponse(null);
    const response = await geminiService.askAboutTeam(aiQuery);
    setAiResponse(response);
    setIsAsking(false);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen relative selection:bg-cyan-500 selection:text-white" id="home">
      {/* Background Layer */}
      <motion.div 
        style={{ y: backgroundY }}
        className="fixed inset-0 z-[-1] pointer-events-none opacity-40"
      >
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900 rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900 rounded-full blur-[150px]" />
        <div className="absolute top-[30%] left-[20%] w-[30%] h-[30%] bg-cyan-900 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#ffffff0a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </motion.div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-card mx-4 my-4 md:mx-12 rounded-2xl border-white/5">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            onClick={scrollToTop}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-transform group-hover:scale-110">
              <Zap className="text-white w-6 h-6 fill-white/20" />
            </div>
            <span className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 font-heading">
              EFIND
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {['Team', 'Solutions', 'Timeline', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={(e) => scrollToSection(e, item === 'Solutions' ? 'projects' : (item === 'Timeline' ? 'activities' : item.toLowerCase()))}
                className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
            <button 
              onClick={(e) => scrollToSection(e as any, 'contact')}
              className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-cyan-400 transition-all hover:scale-105"
            >
              Get Access
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-40 bg-slate-950 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {['Home', 'Team', 'Solutions', 'Timeline', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={(e) => item === 'Home' ? scrollToTop() : scrollToSection(e as any, item === 'Solutions' ? 'projects' : (item === 'Timeline' ? 'activities' : item.toLowerCase()))}
                className="text-4xl font-bold hover:text-cyan-400 font-heading"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section className="pt-48 pb-32 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest uppercase text-cyan-400 border border-cyan-400/30 rounded-full bg-cyan-400/5">
                THE ERA OF CONTINUOUS ENTERPRISE INTELLIGENCE
              </span>
              <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight tracking-tight font-heading">
                REDEFINING<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                  INTERNAL–EXTERNAL RETRIEVAL
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                我们是一支专注“企业外部情报 Agent”的建设者团队，让企业从被动检索走向持续感知。
                采集、清洗、结构化并与企业内部知识融合，输出全链路可审计的智能洞察。
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <a 
                  href="#projects" 
                  onClick={(e) => scrollToSection(e, 'projects')}
                  className="px-10 py-5 bg-cyan-500 rounded-full font-bold text-lg shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:scale-105 transition-all"
                >
                  Explore Solution
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="px-10 py-5 bg-white/5 border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
                >
                  Pilot Program
                </a>
              </div>
              <p className="mt-8 text-sm text-gray-500 font-medium italic">
                From signals to decisions — continuously, auditable, enterprise-ready.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Solution Section */}
        <section id="projects" className="py-32 px-6 bg-slate-900/40">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-5xl font-bold mb-8 font-heading">EFIND (Project #1)</h2>
                <h3 className="text-2xl text-cyan-400 font-bold mb-6">企业专属 External Intelligence Agent</h3>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  解决外部信息海量但分散、人工检索不可复用且难以持续的痛点。
                  EFIND 以企业已有知识为中心，持续发现外部事件并映射到企业内部对象（客户、项目、风险、决策假设等）。
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: '内容+元数据+证据', sub: '可引用的知识库' },
                    { label: '新事件/变化/信号', sub: '日级增量时间线' },
                    { label: '影响谁/为何重要', sub: '语境化洞察' },
                    { label: '全链路可追溯', sub: '可审计 AI Q&A' }
                  ].map((item, i) => (
                    <div key={i} className="p-4 glass-card rounded-2xl border-white/5">
                      <p className="text-cyan-400 font-bold text-sm mb-1">{item.label}</p>
                      <p className="text-gray-500 text-xs">{item.sub}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }}
                className="relative"
              >
                <div className="glass-card p-6 rounded-[40px] border-white/10 relative z-10">
                  <div className="aspect-video bg-slate-800 rounded-3xl overflow-hidden relative group">
                    <img src="https://picsum.photos/seed/dashboard/800/600" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="EFIND UI" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-widest text-green-400">System Active</span>
                      </div>
                      <p className="text-white font-bold">External Intelligence Agent Workbench</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-500/20 blur-[80px] rounded-full" />
              </motion.div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {PROJECTS.map((project) => (
                <div key={project.id} className="glass-card p-8 rounded-3xl border-white/5 hover:border-cyan-500/30 transition-all group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors">
                    {ICONS[project.icon]}
                  </div>
                  <h4 className="text-xl font-bold mb-2 font-heading">{project.title}</h4>
                  <p className="text-xs text-cyan-500/70 font-bold uppercase tracking-widest mb-4">{project.titleCn}</p>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{project.description}</p>
                  <ul className="space-y-3">
                    {project.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-300">
                        <ChevronRight className="w-3 h-3 text-cyan-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Leadership */}
        <section id="team" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-16 font-heading">Core Leadership</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {TEAM_MEMBERS.map((member, idx) => (
                <motion.div 
                  key={member.englishName}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-8 rounded-[40px] flex flex-col md:flex-row gap-8 hover:bg-white/[0.03] transition-colors"
                >
                  <div className="w-40 h-40 rounded-3xl overflow-hidden bg-slate-800 border-2 border-white/5 shrink-0">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold font-heading mb-1">{member.name} <span className="text-cyan-400">{member.englishName}</span></h3>
                    <p className="text-cyan-500/80 font-bold text-xs uppercase tracking-[0.2em] mb-4">{member.role}</p>
                    <p className="text-gray-400 mb-6 leading-relaxed">{member.bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-gray-400 border border-white/5 uppercase font-bold tracking-widest">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Interaction */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto glass-card rounded-[40px] p-8 md:p-12 border-cyan-500/10 bg-gradient-to-b from-slate-900 to-slate-950">
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <BrainCircuit className="text-cyan-400 w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-4 font-heading">EFIND Intelligence Hub</h2>
              <p className="text-gray-400 mb-8 max-w-lg mx-auto">
                好奇 Joshua 和 Tessa 的下一个计划？或是想深入了解 EFIND 的“持续感知”逻辑？直接向 AI 提问。
              </p>

              <form onSubmit={handleAiAsk} className="flex gap-3 max-w-xl mx-auto mb-8">
                <input 
                  type="text" 
                  value={aiQuery}
                  onChange={(e) => setAiQuery(e.target.value)}
                  placeholder="例如：EFIND 如何确保 AI 建议的可审计性？"
                  className="flex-1 bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                />
                <button 
                  disabled={isAsking}
                  className="px-6 py-4 bg-cyan-500 rounded-2xl shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>

              <AnimatePresence mode="wait">
                {aiResponse && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 bg-cyan-500/5 border border-cyan-500/20 rounded-3xl text-left"
                  >
                    <p className="text-cyan-100 leading-relaxed text-sm">
                      <Sparkles className="inline-block w-4 h-4 mr-2 text-cyan-400" />
                      {aiResponse}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Timeline & Events */}
        <section id="activities" className="py-32 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-5xl font-bold mb-20 text-center font-heading">Timeline & Ecosystem</h2>
            <div className="space-y-12">
              {ACTIVITIES.map((activity, idx) => (
                <motion.div 
                  key={activity.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="flex flex-col md:flex-row gap-8 items-start relative group"
                >
                  <div className="w-32 pt-2 shrink-0">
                    <span className="text-xs font-black uppercase tracking-[0.3em] text-cyan-400/60">{activity.date}</span>
                  </div>
                  <div className="hidden md:block absolute left-[128px] top-4 bottom-0 w-px bg-white/10 group-last:bg-transparent" />
                  <div className="hidden md:block absolute left-[124px] top-4 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,1)]" />
                  <div className="glass-card p-8 rounded-3xl flex-1 border-white/5 group-hover:border-cyan-500/20 transition-all">
                    <h4 className="text-xl font-bold mb-3 font-heading">{activity.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{activity.description}</p>
                    <div className="mt-4 flex items-center gap-4">
                      <div className="flex -space-x-2">
                        <div className="w-6 h-6 rounded-full bg-cyan-500 border border-slate-900 flex items-center justify-center"><Activity className="w-3 h-3 text-white" /></div>
                        <div className="w-6 h-6 rounded-full bg-blue-600 border border-slate-900"></div>
                        <div className="w-6 h-6 rounded-full bg-purple-600 border border-slate-900"></div>
                      </div>
                      <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Active Collaboration</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="glass-card rounded-[60px] p-12 md:p-24 text-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border-white/10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(6,182,212,0.15),transparent)] pointer-events-none" />
              <h2 className="text-5xl md:text-7xl font-bold mb-8 font-heading">Start Perceiving Today</h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                加入我们的 Pilot 伙伴网络，共同探索企业“外部感知”的新范式。
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20">
                <button className="px-12 py-5 bg-white text-black font-bold text-xl rounded-2xl shadow-xl hover:bg-cyan-400 transition-all hover:-translate-y-1">
                  Book a Deep Dive
                </button>
                <div className="flex flex-col items-center md:items-start gap-1">
                  <div className="flex items-center gap-3 text-green-500 font-bold">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                    <span>Pilot Slots Available</span>
                  </div>
                  <span className="text-xs text-gray-500 tracking-widest uppercase">Limited Enterprise Access</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto border-t border-white/5 pt-16">
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <Mail className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-sm font-medium text-gray-500 group-hover:text-white transition-colors">hello@efind.ai</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors" />
                  <span className="text-sm font-medium text-gray-500 group-hover:text-white transition-colors">EFIND Enterprise</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <Github className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                  <span className="text-sm font-medium text-gray-500 group-hover:text-white transition-colors">efind-lab</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Simple Footer */}
      <footer className="py-12 border-t border-white/5 px-6 opacity-60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-white/10 rounded flex items-center justify-center"><Zap className="w-3 h-3" /></div>
            <span className="font-bold tracking-widest text-sm font-heading">EFIND</span>
          </div>
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">© 2024 Continuous Enterprise Intelligence. Engineered with trust.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
