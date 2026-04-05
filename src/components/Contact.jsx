import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const Contact = () => {
    return (
        <footer className="py-32 max-w-6xl mx-auto px-4 mt-24">
            <div className="flex items-center gap-4 mb-20">
                <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-electric-blue whitespace-nowrap">Get In Touch // 2026</h2>
                <div className="w-full h-px bg-white/10" />
            </div>

            <div className="bg-white/5 border border-white/10 p-12 md:p-20 relative overflow-hidden group">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-electric-blue/5 blur-[100px] rounded-full -mr-32 -mt-32 group-hover:bg-electric-blue/10 transition-colors duration-700" />
                
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
                    <div className="space-y-8 max-w-xl">
                        <h2 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.8]">
                            Let's build <br />
                            <span className="text-electric-blue italic font-serif">something</span> <br />
                            meaningful.
                        </h2>
                        <p className="text-gray-400 font-light text-lg max-w-sm">
                            Open for collaborations on Generative AI, RAG architecture, and high-performance full-stack builds.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full md:w-auto">
                        <a 
                            href="mailto:indira.sribhashyam@gmail.com" 
                            className="group flex items-center justify-between gap-12 p-6 bg-white/5 border border-white/5 hover:border-electric-blue/30 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4">
                                <Mail size={20} className="text-electric-blue" />
                                <span className="font-mono text-[10px] uppercase tracking-widest text-gray-300">Email</span>
                            </div>
                            <ArrowUpRight size={16} className="text-gray-500 group-hover:text-electric-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </a>

                        <a 
                            href="https://www.linkedin.com/in/sbindira/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between gap-12 p-6 bg-white/5 border border-white/5 hover:border-electric-blue/30 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4">
                                <Linkedin size={20} className="text-electric-blue" />
                                <span className="font-mono text-[10px] uppercase tracking-widest text-gray-300">LinkedIn</span>
                            </div>
                            <ArrowUpRight size={16} className="text-gray-500 group-hover:text-electric-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </a>

                        <a 
                            href="https://github.com/Indira-Sribhashyam" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group flex items-center justify-between gap-12 p-6 bg-white/5 border border-white/5 hover:border-electric-blue/30 hover:bg-white/10 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4">
                                <Github size={20} className="text-electric-blue" />
                                <span className="font-mono text-[10px] uppercase tracking-widest text-gray-300">GitHub</span>
                            </div>
                            <ArrowUpRight size={16} className="text-gray-500 group-hover:text-electric-blue group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                        </a>
                    </div>
                </div>

                <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500">Available for new opportunities</span>
                    </div>
                    <div className="font-mono text-[10px] text-gray-600 uppercase tracking-widest">
                        © 2026 Indira Sribhashyam // All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
