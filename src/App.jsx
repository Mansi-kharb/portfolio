import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowUpRight,
    Brain,
    Database,
    Linkedin,
    Github,
    Mail,
    Sparkles,
    Search,
    ChevronRight,
    Code2,
    Terminal,
    Activity,
    Globe,
    Trophy
} from 'lucide-react';

const SlideUp = ({ children, delay = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
        {children}
    </motion.div>
);

const Navbar = () => (
    <header>
        <div className="container" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="logo">Mansi Kharb</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
                <div style={{ display: 'flex', gap: 32, fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 2 }}>
                    <a href="#work" style={{ textDecoration: 'none', color: '#fff', opacity: 0.5 }}>Work</a>
                    <a href="#about" style={{ textDecoration: 'none', color: '#fff', opacity: 0.5 }}>Identity</a>
                    <a href="#contact" style={{ textDecoration: 'none', color: '#fff', opacity: 0.5 }}>Connect</a>
                </div>
                <a href="mailto:mansikharb2003@gmail.com" className="btn-premium" style={{ padding: '12px 28px', fontSize: '0.8rem' }}>Contact</a>
            </div>
        </div>
    </header>
);

const WorkCard = ({ title, tag, image, description, delay }) => (
    <SlideUp delay={delay}>
        <div className="lux-work-card">
            <img src={image} alt={title} className="work-image" />
            <div className="work-content">
                <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#00ff88', textTransform: 'uppercase', letterSpacing: 2, marginBottom: 12, display: 'block' }}>{tag}</span>
                <h3 style={{ fontSize: '2.5rem', marginBottom: 16 }}>{title}</h3>
                <p style={{ color: '#a0a0a0', fontSize: '1.05rem', maxWidth: '90%', marginBottom: 32 }}>{description}</p>
                <button style={{
                    background: 'none',
                    border: 'none',
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    fontWeight: 800,
                    cursor: 'pointer',
                    fontSize: '0.95rem'
                }}>
                    Explore Project <div style={{ background: '#fff', color: '#000', borderRadius: '50%', padding: 4 }}><ArrowUpRight size={14} /></div>
                </button>
            </div>
        </div>
    </SlideUp>
);

const AIAssistant = () => {
    const [query, setQuery] = useState('');
    const [log, setLog] = useState([{ role: 'bot', text: 'KHARB-OS Intelligence active. Ready for inquiry.' }]);

    const handleSend = () => {
        if (!query) return;
        setLog([...log, { role: 'user', text: query }]);
        setQuery('');
        setTimeout(() => {
            let r = "System: ";
            const q = query.toLowerCase();
            if (q.includes('brain')) r += "Predictive Oncology model validates 94.2% diagnostic accuracy across CNN layers.";
            else if (q.includes('ipl')) r += "Seasonal forecasting cluster operational with 84% accuracy in real-time prediction.";
            else r += "Specialized in Python/Java architectures and deep mathematical modeling.";
            setLog(prev => [...prev, { role: 'bot', text: r }]);
        }, 600);
    };

    return (
        <div style={{ background: '#121212', border: '1px solid rgba(255,255,255,0.05)', borderRadius: 32, padding: 40, boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#00ff88', boxShadow: '0 0 15px #00ff88' }}></div>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, letterSpacing: 2, color: '#00ff88' }}>KERNEL v4.5</span>
            </div>
            <div style={{ height: 220, overflowY: 'auto', marginBottom: 24, paddingRight: 10 }}>
                {log.map((m, i) => (
                    <div key={i} style={{ marginBottom: 24, textAlign: m.role === 'user' ? 'right' : 'left' }}>
                        <div style={{
                            display: 'inline-block',
                            background: m.role === 'user' ? '#00ff88' : 'rgba(255,255,255,0.03)',
                            border: m.role === 'user' ? 'none' : '1px solid rgba(255,255,255,0.05)',
                            padding: '16px 24px',
                            borderRadius: 16,
                            fontSize: '0.9rem',
                            color: m.role === 'user' ? '#000' : '#fff'
                        }}>
                            {m.text}
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ position: 'relative' }}>
                <input
                    style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', padding: '22px 30px', borderRadius: 100, color: '#fff', outline: 'none', fontSize: '0.9rem' }}
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    onKeyDown={e => e.key === 'Enter' && handleSend()}
                    placeholder="Query research nodes..."
                />
                <button onClick={handleSend} style={{ position: 'absolute', right: 10, top: 10, background: '#fff', border: 'none', padding: '12px', borderRadius: '50%', cursor: 'pointer' }}>
                    <Search size={20} color="#000" />
                </button>
            </div>
        </div>
    );
};

export default function App() {
    return (
        <main>
            <Navbar />

            {/* Hero */}
            <section className="hero">
                <div className="hero-bg-glow" />
                <div className="container">
                    <SlideUp>
                        <h1 className="hero-title">
                            Engineering <span className="luxury-serf" style={{ color: '#00ff88' }}>Precision</span> <br />
                            <span style={{ opacity: 0.4 }}>in Modern Intelligence.</span>
                        </h1>
                        <div style={{ display: 'flex', gap: 40, alignItems: 'center', marginTop: 20 }}>
                            <a href="#work" className="btn-premium">View Research Archive</a>
                            <div style={{ maxWidth: 450, color: '#a0a0a0', fontSize: '1.25rem', lineHeight: 1.5 }}>
                                Mansi Kharb is an AI Architect designing the next generation of predictive diagnostic tools and technical solutions.
                            </div>
                        </div>
                    </SlideUp>
                </div>
            </section>

            {/* Work */}
            <section id="work" style={{ padding: '180px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container">
                    <SlideUp>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 120 }}>
                            <div>
                                <span style={{ color: '#00ff88', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, fontSize: '0.8rem' }}>Selected Archive</span>
                                <h2 style={{ fontSize: '5rem', marginTop: 10 }}>Featured <span className="luxury-serf">Projects</span></h2>
                            </div>
                            <div style={{ color: '#a0a0a0', fontWeight: 700, fontSize: '1.1rem' }}>/ 06 Projects</div>
                        </div>
                    </SlideUp>

                    <div className="work-grid">
                        <WorkCard
                            title="Brain Tumor Analysis"
                            tag="Oncology AI"
                            image="/images/tumor_advanced.png"
                            description="Deep CNN implementation for longitudinal tracking of neural cancer progression."
                            delay={0.1}
                        />
                        <WorkCard
                            title="IPL Predictive Engine"
                            tag="Data Science"
                            image="/images/ipl_dashboard.png"
                            description="Real-time forecasting platform achieving 84% accuracy in high-stakes match prediction."
                            delay={0.2}
                        />
                        <WorkCard
                            title="AI Content Engine"
                            tag="NLP"
                            image="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
                            description="Automated content generation platform leveraging advanced transformer architectures."
                            delay={0.3}
                        />
                        <WorkCard
                            title="Sync Flow Protocol"
                            tag="Ops"
                            image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
                            description="Sophisticated data synchronization layer for managing complex enterprise dataset pipelines."
                            delay={0.4}
                        />
                        <WorkCard
                            title="Secure Voting Portal"
                            tag="Security"
                            image="https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&q=80&w=800"
                            description="High-integrity digital participation platform with end-to-end cryptographic verification."
                            delay={0.5}
                        />
                        <WorkCard
                            title="Talent Search Portal"
                            tag="Java Architecture"
                            image="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800"
                            description="Recruitment optimization engine bridging talent gaps through intelligent data matching."
                            delay={0.6}
                        />
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" style={{ padding: '180px 0', background: '#0e0e0e' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 140 }}>
                        <SlideUp>
                            <span style={{ color: '#00ff88', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, fontSize: '0.8rem' }}>Identity</span>
                            <h2 style={{ fontSize: '4.5rem', marginTop: 24, marginBottom: 40 }}>Translating Data into <br /><span className="luxury-serf">Action.</span></h2>
                            <p style={{ fontSize: '1.5rem', color: '#a0a0a0', lineHeight: 1.6, marginBottom: 70 }}>
                                Based in Haryana and currently focused on her MCA at Chandigarh University, Mansi Kharb bridges the gap between raw data and industrial intelligence. Her methodology combines technical mastery with creative problem-solving.
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
                                <div>
                                    <Trophy color="#00ff88" size={32} />
                                    <h4 style={{ margin: '24px 0 12px', fontSize: '1.4rem' }}>Athletic Elite</h4>
                                    <p style={{ color: '#a0a0a0', fontSize: '1rem' }}>First state ranking in Volleyball, embodying leadership and strategic focus.</p>
                                </div>
                                <div>
                                    <Sparkles color="#00ff88" size={32} />
                                    <h4 style={{ margin: '24px 0 12px', fontSize: '1.4rem' }}>Global Certs</h4>
                                    <p style={{ color: '#a0a0a0', fontSize: '1rem' }}>Coursera certifications in Python and Data Analytics from leading institutions.</p>
                                </div>
                            </div>
                        </SlideUp>
                        <SlideUp delay={0.2}>
                            <div style={{ background: '#080808', border: '1px solid rgba(255,255,255,0.05)', padding: '80px 60px', borderRadius: 40, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <h3 style={{ fontSize: '2.8rem', marginBottom: 32 }}>Methodology</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                                    {['Neural Architectures', 'Predictive Modeling', 'Data Verification', 'System Integrity'].map((m, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                                            <div style={{ width: 10, height: 10, borderRadius: '2px', background: '#00ff88', boxShadow: '0 0 10px #00ff88' }}></div>
                                            <span style={{ fontSize: '1.3rem', fontWeight: 800 }}>{m}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                </div>
            </section>

            {/* AI Kernel */}
            <section style={{ padding: '180px 0', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="container">
                    <div className="ai-panel">
                        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 100, alignItems: 'center' }}>
                            <SlideUp>
                                <h2 style={{ fontSize: '4.5rem', marginBottom: 32 }}>System <span className="luxury-serf">Interface</span></h2>
                                <p style={{ fontSize: '1.4rem', color: '#a0a0a0', marginBottom: 60, lineHeight: 1.6 }}>
                                    A dedicated neural portal to access project metrics and diagnostic research data. Query the system directly to retrieve technical whitepapers.
                                </p>
                                <div style={{ display: 'flex', gap: 50 }}>
                                    <div>
                                        <div style={{ fontSize: '3.5rem', fontWeight: 800 }}>94.2%</div>
                                        <div style={{ fontSize: '0.9rem', color: '#00ff88', fontWeight: 800, letterSpacing: 2 }}>PRECISION</div>
                                    </div>
                                    <div>
                                        <div style={{ fontSize: '3.5rem', fontWeight: 800 }}>06</div>
                                        <div style={{ fontSize: '0.9rem', color: '#00ff88', fontWeight: 800, letterSpacing: 2 }}>ACTIVE NODES</div>
                                    </div>
                                </div>
                            </SlideUp>
                            <SlideUp delay={0.2}>
                                <AIAssistant />
                            </SlideUp>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer id="contact" style={{ padding: '180px 0', textAlign: 'center', background: '#000', color: '#fff' }}>
                <div className="container">
                    <SlideUp>
                        <span style={{ color: '#00ff88', fontWeight: 800, textTransform: 'uppercase', letterSpacing: 5, fontSize: '1rem' }}>Inquiry Hub</span>
                        <h2 style={{ fontSize: '7rem', margin: '40px 0', letterSpacing: '-0.04em' }}>Let's <span className="luxury-serf">Scale</span> Perfection.</h2>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: 50, marginBottom: 100 }}>
                            <a href="https://www.linkedin.com/in/mansi-kharb-09971a276" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', opacity: 0.6 }}><Linkedin size={35} /></a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', opacity: 0.6 }}><Github size={35} /></a>
                            <a href="mailto:mansikharb2003@gmail.com" style={{ color: '#fff', opacity: 0.6 }}><Mail size={35} /></a>
                        </div>
                        <div style={{ fontSize: '0.9rem', opacity: 0.2, letterSpacing: 2 }}>
                            &copy; 2026 MANSI KHARB CONSULTING.
                        </div>
                    </SlideUp>
                </div>
            </footer>
        </main>
    );
}
