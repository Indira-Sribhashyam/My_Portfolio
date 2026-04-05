import React from 'react';
import { motion } from 'framer-motion';

const certificates = [
    { 
        name: 'ServiceNow Certified Application Developer (CAD)', 
        issuer: 'ServiceNow', 
        image: '/Screenshot%202026-04-05%20224359.png',
        pdf: '/ServiceNowCAD.pdf'
    },
    { 
        name: 'Web Development Complete Course 2024', 
        issuer: 'Udemy', 
        image: '/Screenshot%202026-04-05%20224047.png',
        pdf: null
    },
    { 
        name: 'JavaScript Fundamentals Course', 
        issuer: 'Udemy', 
        image: '/Screenshot%202026-04-05%20224313.png',
        pdf: null
    },
    { 
        name: 'Full Stack Development', 
        issuer: 'APSCHE', 
        image: '/Screenshot%202024-12-02%20101936.png',
        pdf: '/Indira_Sribhashyam_Resume_2026 (1).pdf' 
    },
    { 
        name: 'HTML CSS Bootcamp', 
        issuer: 'LetsUpgrade', 
        image: '/html%20css%20bootcamp%20certificate.jpg',
        pdf: null 
    },
    { 
        name: "Cyber Security's Frontier: Trends & Tech", 
        issuer: 'Udemy', 
        image: '/Screenshot%202026-04-05%20224129.png',
        pdf: null
    },
    { 
        name: 'SQL Injection for Beginners', 
        issuer: 'Udemy', 
        image: '/Screenshot%202026-04-05%20224246.png',
        pdf: null
    },
    { 
        name: 'Microsoft Excel - Beginners 2024', 
        issuer: 'Udemy', 
        image: '/Screenshot%202026-04-05%20223945.png',
        pdf: null
    }
];

const About = () => {
    return (
        <section className="py-24 max-w-6xl mx-auto px-4 border-t border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start mb-32">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="aspect-[4/5] bg-white/5 border border-white/10 relative overflow-hidden">
                        <img 
                            src="/ChatGPT%20Image%20Mar%2025,%202026,%2009_18_46%20PM.png" 
                            alt="Indira Sribhashyam"
                            className="w-full h-full object-cover contrast-125 brightness-90 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-electric-blue/10 mix-blend-overlay pointer-events-none" />
                    </div>
                    
                    {/* ID Badge decoration */}
                    <div className="absolute -bottom-6 -right-6 bg-electric-blue text-white p-6 font-mono text-[10px] tracking-widest uppercase hidden md:block">
                        Status: Active<br/>
                        Role: Builder<br/>
                        ID: 2026-IS
                    </div>
                </motion.div>

                <div className="space-y-12">
                    <div className="space-y-6">
                        <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-electric-blue">Subject: Indira Sribhashyam</h2>
                        <p className="text-4xl md:text-5xl font-serif italic text-white/90 leading-[1.1]">
                            “A systems-thinker bridging the gap between <span className="text-electric-blue">Generative AI</span> and <span className="text-electric-blue">intentional design</span>.”
                        </p>
                    </div>

                    <div className="space-y-6 text-gray-400 text-lg leading-relaxed font-light">
                        <p>
                            I am a Full Stack Developer and Generative AI enthusiast with a obsession for building high-integrity systems. 
                            As a two-time Smart India Hackathon Finalist, I thrive under high-pressure environments where rapid execution meets complex engineering.
                        </p>
                        <p>
                            My approach is first-principles driven: whether I'm architecting a RAG-based AI assistant or an IoT hardware build, 
                            I prioritize clean interaction, robust engineering, and practical real-world value.
                        </p>
                    </div>
                </div>
            </div>

            {/* Certificates Grid */}
            <div className="space-y-12" id="credentials">
                <div className="flex items-center gap-4">
                    <h3 className="text-sm font-mono uppercase tracking-[0.3em] text-electric-blue whitespace-nowrap">Verified Credentials</h3>
                    <div className="w-full h-px bg-white/10" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert, idx) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.05 }}
                            className="group bg-white/5 border border-white/10 hover:border-electric-blue/30 transition-all duration-500 flex flex-col overflow-hidden"
                        >
                            {cert.image && (
                                <div className="h-40 overflow-hidden border-b border-white/5 relative bg-white/5 p-2">
                                    <img 
                                        src={cert.image} 
                                        alt={cert.name}
                                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none" />
                                </div>
                            )}
                            <div className="p-6 space-y-4 flex-grow flex flex-col">
                                <div className="space-y-1 flex-grow">
                                    <h4 className="text-sm font-bold tracking-tight text-white/80 group-hover:text-white transition-colors uppercase leading-tight">{cert.name}</h4>
                                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{cert.issuer}</p>
                                </div>
                                {cert.pdf && (
                                    <a 
                                        href={cert.pdf} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-[9px] font-mono uppercase tracking-widest text-electric-blue hover:text-white transition-colors mt-2"
                                    >
                                        [ View Evidence ]
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
