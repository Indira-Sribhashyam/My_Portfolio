import React from 'react';
import { motion } from 'framer-motion';

const skills = {
    Frontend: ['React', 'Tailwind CSS', 'Framer Motion', 'GSAP', 'Next.js'],
    Backend: ['FastAPI', 'Python', 'Node.js', 'ChromaDB', 'PostgreSQL'],
    Specialized: ['RAG Pipeline', 'LLM Integration', 'ServiceNow CAD', 'IoT Architecture'],
    Tools: ['Git', 'Docker', 'Vercel', 'Postman', 'Linux']
};

const Skills = () => {
    return (
        <section className="py-24 max-w-6xl mx-auto px-4">
            <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 uppercase">Skill Matrix</h2>
                <div className="w-20 h-1 bg-white" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {Object.entries(skills).map(([category, items], idx) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-sm font-mono uppercase tracking-[0.3em] text-electric-blue">{category}</h3>
                        <ul className="space-y-4">
                            {items.map(item => (
                                <li key={item} className="group relative">
                                    <span className="text-xl font-medium tracking-tight group-hover:text-white transition-colors text-gray-400">
                                        {item}
                                    </span>
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileHover={{ scaleX: 1 }}
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-electric-blue origin-left transition-transform duration-300"
                                    />
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
