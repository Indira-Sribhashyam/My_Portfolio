import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        id: '01',
        title: 'SANKALP AI',
        description: 'Production-grade Cyber Security Assistant featuring a high-performance RAG pipeline, hybrid search, and Groq integration for real-time threat analysis.',
        tags: ['FastAPI', 'RAG', 'ChromaDB', 'Groq'],
        type: 'Cyber Security System',
        link: 'https://electricity-paris-exotic-true.trycloudflare.com/',
        github: 'https://github.com/Indira-Sribhashyam/SankalpAI',
        image: '/WhatsApp%20Image%202026-04-05%20at%209.20.11%20PM.jpeg' 
    },
    {
        id: '02',
        title: 'FINANCIAL DASHBOARD',
        description: 'A comprehensive FinTech solution with CIBIL-style Financial Health Scoring, data visualization, and automated PDF report generation.',
        tags: ['React', 'Tailwind', 'Vercel', 'PDF-Lib'],
        type: 'FinTech Solution',
        link: 'https://financialdashboard-six.vercel.app/',
        github: 'https://github.com/Indira-Sribhashyam/Financial-Dashboard',
        image: '/Screenshot%202026-04-05%20213359.png'
    },
    {
        id: '03',
        title: 'SOCIAL SNIPPET',
        description: 'A modern developer utility for managing and sharing code snippets with an focus on clean interaction and rapid search.',
        tags: ['Next.js', 'Tailwind', 'Prisma'],
        type: 'Developer Utility',
        link: 'https://mgx-hqn3jddhln.atoms.world/',
        github: 'https://github.com/Indira-Sribhashyam/SocialSnippet',
        image: '/Screenshot%202026-04-05%20203457.png' 
    },
    {
        id: '04',
        title: 'HYDROPONIC DISPENSER',
        description: 'A real-world IoT engineering build combining Arduino and Python to automate smart nutrient dispensing for hydroponic systems.',
        tags: ['Arduino', 'Python', 'IoT', 'Hardware'],
        type: 'Engineering Build',
        link: '#',
        github: null,
        image: '/Screenshot%202026-04-05%20100304.png' 
    }
];

const CaseCard = ({ project }) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="group relative bg-white/5 border border-white/10 flex flex-col backdrop-blur-sm overflow-hidden h-full"
        >
            {/* Project Image Header */}
            <div className="relative h-48 overflow-hidden border-b border-white/10">
                <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-off-black to-transparent opacity-60" />
                <div className="absolute top-4 right-4 font-mono text-[10px] opacity-40 group-hover:opacity-100 bg-black/50 px-2 py-1 backdrop-blur-md border border-white/10 transition-opacity">
                    CASE {project.id}
                </div>
            </div>

            <div className="p-8 flex flex-col gap-6 flex-grow">
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold tracking-tighter group-hover:text-electric-blue transition-colors">{project.title}</h3>
                    <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">{project.type}</p>
                </div>

                <p className="text-gray-400 font-serif italic text-sm leading-relaxed">
                    "{project.description}"
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-[9px] font-mono border border-white/10 px-2 py-1 rounded bg-white/5 tracking-tighter">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-6 pt-4">
                    {project.link !== '#' && (
                        <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-electric-blue transition-colors"
                        >
                            Live Demo <ExternalLink size={12} />
                        </a>
                    )}
                    {project.github && (
                        <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] hover:text-electric-blue transition-colors"
                        >
                            Source <Github size={12} />
                        </a>
                    )}
                </div>
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-electric-blue/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </motion.div>
    );
};

const CaseFiles = () => {
    return (
        <section className="py-24 max-w-6xl mx-auto px-4">
            <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 uppercase">Case Files</h2>
                <div className="w-20 h-1 bg-white" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <CaseCard project={project} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default CaseFiles;
