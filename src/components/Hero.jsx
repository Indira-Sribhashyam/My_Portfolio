import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center max-w-6xl mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
                <h1 className="text-6xl md:text-[10rem] font-bold tracking-tighter leading-[0.8] mb-12">
                    INDIRA.<br />
                    <span className="text-electric-blue">SRIBHASHYAM</span>
                </h1>

                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <div className="space-y-6">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="text-xl md:text-2xl text-gray-400 max-w-lg font-serif italic leading-relaxed"
                        >
                            “Full Stack Developer. Generative AI Enthusiast. <br/>
                            Bridging high-integrity code with intentional design.”
                        </motion.p>
                        
                        <div className="flex flex-wrap gap-6 items-center">
                            <a 
                                href="/Indira_Sribhashyam_Resume_2026%20(1).docx" 
                                download
                                className="group flex items-center gap-3 text-[10px] font-mono uppercase tracking-[0.3em] font-bold py-5 px-10 bg-electric-blue text-off-black hover:bg-white transition-all duration-300"
                            >
                                <Download size={14} /> Download Dossier
                            </a>
                            <div className="flex gap-6 text-gray-500">
                                <a href="https://github.com/Indira-Sribhashyam" target="_blank" rel="noopener noreferrer" className="hover:text-electric-blue transition-colors">
                                    <Github size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/sbindira/" target="_blank" rel="noopener noreferrer" className="hover:text-electric-blue transition-colors">
                                    <Linkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block text-right font-mono text-[10px] text-gray-600 uppercase tracking-[0.4em] space-y-1">
                        <p>Loc: AP, India</p>
                        <p>Status: Available for Hire</p>
                        <p>Specialization: RAG / Full Stack / Gen AI</p>
                    </div>
                </div>
            </motion.div>

            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-electric-blue/10 blur-[120px] rounded-full pointer-events-none -z-10" />
        </section>
    );
};

export default Hero;
