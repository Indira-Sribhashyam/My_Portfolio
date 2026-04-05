import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users } from 'lucide-react';

const ProjectExpo = () => {
    return (
        <section id="expo" className="py-24 max-w-6xl mx-auto px-4">
            <div className="flex items-center gap-4 mb-16">
                <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-electric-blue whitespace-nowrap">Project Expo / Recognition</h2>
                <div className="w-full h-px bg-white/10" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Photo of User and Friend */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="group relative bg-white/5 border border-white/10 p-4 backdrop-blur-sm"
                >
                    <div className="aspect-[4/3] overflow-hidden relative">
                        <img 
                            src="/Screenshot%202026-04-05%20100338.png" 
                            alt="Project Expo Participation"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-electric-blue/5 group-hover:bg-transparent transition-colors" />
                    </div>
                    <div className="mt-4 flex items-center gap-3">
                        <Users className="text-electric-blue" size={16} />
                        <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400">Team Collaboration @ yoUR Fest 2025</p>
                    </div>
                </motion.div>

                {/* Certificate of Participation */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <div className="group relative bg-white/5 border border-white/10 p-4 backdrop-blur-sm">
                        <div className="aspect-[1.4/1] overflow-hidden relative bg-white/5 p-4 flex items-center justify-center">
                            <img 
                                src="/WhatsApp%20Image%202026-04-05%20at%209.44.04%20PM.jpeg" 
                                alt="Certificate of Participation"
                                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                        <div className="mt-4 flex items-center gap-3">
                            <Award className="text-electric-blue" size={16} />
                            <p className="text-[10px] font-mono uppercase tracking-widest text-gray-400">Official Recognition</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-2xl md:text-3xl font-serif italic text-white/90 leading-tight">
                            “Participated in the <span className="text-electric-blue">State Level Project Expo</span>, showcasing collaborative engineering innovation.”
                        </h3>
                        <p className="text-gray-400 font-light text-sm leading-relaxed">
                            Presented the Hydroponic Nutrient Dispenser at yoUR Fest 2025. 
                            The project highlighted the practical application of IoT and sustainable automation.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectExpo;
