
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
  Sparkles
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
      const offset = 100; // Account for fixed header
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
        
        {/* Grid Overlay */}
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
            <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center glow-cyan transition-transform group-hover:rotate-12">
              <Terminal className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500 font-heading">
              NexusTech
            </span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {['Team', 'Projects', 'Activities', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={(e) => scrollToSection(e, item.toLowerCase())}
                className="text-sm font-medium text-gray-400 hover:text-cyan-400 transition-colors uppercase tracking-widest"
              >
                {item}
              </a>
            ))}
            <button 
              onClick={(e) => scrollToSection(e as any, 'contact')}
              className="px-6 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95"
            >
              Launch Idea
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-slate-950 flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <button 
              onClick={() => { scrollToTop(); setIsMenuOpen(false); }}
              className="text-4xl font-bold hover:text-cyan-400 font-heading"
            >
              Home
            </button>
            {['Team', 'Projects', 'Activities', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={(e) => scrollToSection(e, item.toLowerCase())}
                className="text-4xl font-bold hover:text-cyan-400 font-heading"
              >
                {item}
              </a>
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
                The Era of Intelligent Retrieval
              </span>
              <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight tracking-tight font-heading">
                REDEFINING THE<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                  DIGITAL NEXUS
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                We are a team of visionaries and builders, crafting the tools of tomorrow. 
                From real-time info tracking to intelligent business discovery.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <a 
                  href="#projects" 
                  onClick={(e) => scrollToSection(e, 'projects')}
                  className="px-8 py-4 bg-cyan-500 rounded-full font-bold text-lg glow-cyan hover:scale-105 transition-all"
                >
                  Explore Projects
                </a>
                <a 
                  href="#contact" 
                  onClick={(e) => scrollToSection(e, 'contact')}
                  className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
                >
                  Start Collaboration
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-24 relative"
            >
              <div className="relative z-10 glass-card p-4 rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/tech/1200/600" 
                  alt="NexusTech Dashboard Preview" 
                  className="rounded-2xl opacity-80"
                />
              </div>
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-cyan-500/20 blur-3xl rounded-full" />
              <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-purple-500/20 blur-3xl rounded-full" />
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-32 px-6 bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <h2 className="text-5xl font-bold mb-6 font-heading">Core Leadership</h2>
                <p className="text-gray-400 text-lg">
                  Behind every innovation at NexusTech is a blend of strategic foresight and technical mastery.
                </p>
              </div>
              <div className="hidden md:flex gap-4">
                <div className="p-4 glass-card rounded-2xl flex items-center gap-3">
                  <BrainCircuit className="text-cyan-400" />
                  <span className="font-bold">20+ AI Models Built</span>
                </div>
                <div className="p-4 glass-card rounded-2xl flex items-center gap-3">
                  <Globe className="text-purple-400" />
                  <span className="font-bold">Global Perspective</span>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {TEAM_MEMBERS.map((member, idx) => (
                <motion.div 
                  key={member.englishName}
                  initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity blur-xl" />
                  <div className="glass-card p-8 rounded-3xl relative h-full flex flex-col md:flex-row gap-8 hover:border-cyan-500/50 transition-all duration-500">
                    <div className="w-48 h-48 shrink-0 rounded-2xl overflow-hidden bg-slate-800 border-2 border-white/5 group-hover:border-cyan-500/50 transition-colors">
                      <img src={member.image} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold mb-1 font-heading">{member.name} <span className="text-cyan-400">{member.englishName}</span></h3>
                      <p className="text-cyan-500/80 font-bold mb-4 tracking-wider uppercase text-sm">{member.role}</p>
                      <p className="text-gray-400 mb-6 leading-relaxed">{member.bio}</p>
                      <div className="flex flex-wrap gap-2">
                        {member.skills.map(skill => (
                          <span key={skill} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold mb-6 font-heading">Digital Ecosystem</h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Discover the tools we've engineered to streamline your information flow and business intelligence.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {PROJECTS.map((project) => (
                <motion.div 
                  key={project.id}
                  whileHover={{ y: -10 }}
                  className={`glass-card p-8 rounded-3xl border-t-4 transition-all ${
                    project.status === 'active' ? 'border-t-cyan-500' : 'border-t-purple-500'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                    project.status === 'active' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-purple-500/20 text-purple-400'
                  }`}>
                    {ICONS[project.icon]}
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold font-heading">{project.title}</h3>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter ${
                      project.status === 'active' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-purple-500/20 text-purple-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{project.titleCn}</p>
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">{project.description}</p>
                  <ul className="space-y-3 mb-8">
                    {project.features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-xs text-gray-300 font-medium">
                        <ChevronRight className="w-3 h-3 text-cyan-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                    project.status === 'active' 
                    ? 'bg-cyan-500 hover:bg-cyan-600 text-white' 
                    : 'bg-white/5 text-gray-500 cursor-not-allowed'
                  }`}>
                    {project.status === 'active' ? 'View Live Project' : 'Under Development'}
                    {project.status === 'active' && <ChevronRight className="w-4 h-4" />}
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Interaction Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto glass-card rounded-[40px] p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <Sparkles className="w-32 h-32" />
            </div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-bold mb-4 font-heading flex items-center justify-center gap-3">
                <BrainCircuit className="text-cyan-400" />
                Ask our AI Ambassador
              </h2>
              <p className="text-gray-400 mb-8">
                好奇 Joshua 和 Tessa 的下一个计划？或是想深入了解 InsightTracker 的工作原理？直接问问 Nexus 智能。
              </p>

              <form onSubmit={handleAiAsk} className="flex gap-2 max-w-xl mx-auto mb-8">
                <input 
                  type="text" 
                  value={aiQuery}
                  onChange={(e) => setAiQuery(e.target.value)}
                  placeholder="例如：InsightTracker 的核心优势是什么？"
                  className="flex-1 bg-slate-800/50 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-cyan-500 transition-colors"
                />
                <button 
                  disabled={isAsking}
                  className="px-6 py-4 bg-cyan-500 rounded-2xl glow-cyan hover:scale-105 transition-all disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>

              <AnimatePresence mode="wait">
                {aiResponse && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-6 bg-cyan-500/5 border border-cyan-500/20 rounded-2xl text-left"
                  >
                    <p className="text-cyan-100 leading-relaxed italic">
                      "{aiResponse}"
                    </p>
                  </motion.div>
                )}
                {isAsking && (
                  <motion.div className="flex items-center justify-center gap-2 text-cyan-400">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        {/* Activities Section */}
        <section id="activities" className="py-32 px-6 bg-slate-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-5xl font-bold mb-20 text-center font-heading">Timeline & Events</h2>
            <div className="relative border-l-2 border-white/5 ml-4 md:ml-0 md:left-1/2">
              {ACTIVITIES.map((activity, idx) => (
                <div key={activity.title} className={`mb-16 relative flex items-center w-full ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                  <div className="absolute left-[-9px] md:left-1/2 md:ml-[-9px] w-4 h-4 bg-cyan-500 rounded-full glow-cyan" />
                  <motion.div 
                    initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`glass-card p-6 rounded-2xl w-full md:w-[45%] ${idx % 2 === 0 ? 'md:ml-10' : 'md:mr-10'}`}
                  >
                    <span className="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-md mb-2 inline-block">
                      {activity.date}
                    </span>
                    <h4 className="text-xl font-bold mb-2 font-heading">{activity.title}</h4>
                    <p className="text-gray-400 text-sm">{activity.description}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card rounded-[48px] p-12 md:p-24 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600" />
              <h2 className="text-5xl md:text-7xl font-bold mb-8 font-heading">Let's Build the Future</h2>
              <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                Whether it's a new project collaboration or a simple inquiry, our team is ready to connect.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
                <div className="p-8 glass-card rounded-3xl group hover:border-cyan-500/50 transition-colors">
                  <Mail className="w-10 h-10 mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  <p className="font-bold">Email Us</p>
                  <p className="text-sm text-gray-400">hello@nexustech.io</p>
                </div>
                <div className="p-8 glass-card rounded-3xl group hover:border-blue-500/50 transition-colors">
                  <Linkedin className="w-10 h-10 mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform" />
                  <p className="font-bold">Linkedin</p>
                  <p className="text-sm text-gray-400">NexusTech Official</p>
                </div>
                <div className="p-8 glass-card rounded-3xl group hover:border-purple-500/50 transition-colors">
                  <Github className="w-10 h-10 mx-auto mb-4 text-purple-400 group-hover:scale-110 transition-transform" />
                  <p className="font-bold">Github</p>
                  <p className="text-sm text-gray-400">nexus-tech-lab</p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <button className="px-12 py-5 bg-white text-black font-bold text-xl rounded-2xl hover:bg-cyan-400 transition-all hover:scale-105 active:scale-95">
                  Book a Strategy Call
                </button>
                <div className="flex items-center gap-4 text-gray-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>Always Open for Collaboration</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div 
            onClick={scrollToTop}
            className="flex items-center gap-2 opacity-50 cursor-pointer hover:opacity-100 transition-opacity"
          >
            <Terminal className="w-5 h-5" />
            <span className="font-bold font-heading">NexusTech</span>
            <span className="text-xs ml-2">© 2024 Innovating Intelligence. All rights reserved.</span>
          </div>
          <div className="flex gap-8 text-xs font-bold text-gray-500 uppercase tracking-widest">
            <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
