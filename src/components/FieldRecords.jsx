import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const records = [
    {
        year: '2025',
        title: 'Smart India Hackathon 2025',
        role: 'National Finalist',
        description: 'Consistent performance at the national level. Focused on engineering reliability and rapid prototyping to deliver a functional prototype within 36 hours.',
        image: '/IMG-20241213-WA0105.jpg'
    },
    {
        year: '2024',
        title: 'Smart India Hackathon 2024',
        role: 'National Finalist',
        description: 'First national-level success, building scalable software solutions for real-world governance challenges.',
        image: '/DSC_8352.JPG'
    }
];

const FieldRecords = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Parallax transforms for depth shift
    const yLeft = useTransform(scrollYProgress, [0, 1], [-50, 50]);
    const yRight = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
        <section ref={containerRef} className="py-48 max-w-6xl mx-auto px-4 relative overflow-hidden">
            <motion.div style={{ opacity }} className="space-y-32">
                <div className="flex items-center gap-4">
                    <h2 className="text-sm font-mono uppercase tracking-[0.3em] text-electric-blue whitespace-nowrap">Field Records / Hackathons</h2>
                    <div className="w-full h-px bg-white/10" />
                </div>

                <div className="relative">
                    {/* Centered Timeline Line */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2 hidden md:block" />

                    <div className="space-y-64">
                        {records.map((record, idx) => (
                            <div key={record.year} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 relative`}>
                                <motion.div 
                                    style={{ y: idx % 2 === 0 ? yLeft : yRight }} 
                                    className={`w-full md:w-1/2 space-y-6 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                                >
                                    <span className="text-8xl md:text-[12rem] font-bold tracking-tighter opacity-[0.03] font-mono italic absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none">
                                        {record.year}
                                    </span>
                                    <div className="space-y-2 relative z-10">
                                        <h3 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase">{record.event || record.title}</h3>
                                        <p className="text-electric-blue font-mono text-[10px] uppercase tracking-[0.4em]">{record.role}</p>
                                    </div>
                                    <p className="text-gray-400 font-serif italic text-lg leading-relaxed max-w-sm ml-auto mr-auto md:ml-0 md:mr-0 inline-block relative z-10">
                                        "{record.description}"
                                    </p>
                                </motion.div>
                                
                                {/* Connector dot */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-off-black border-2 border-electric-blue hidden md:block z-20 shadow-[0_0_20px_rgba(0,112,243,0.5)]" />
                                
                                <div className="w-full md:w-1/2 relative overflow-hidden group">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 1.1 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 1 }}
                                        className="aspect-video bg-white/5 border border-white/10 overflow-hidden"
                                    >
                                        <img 
                                            src={record.image} 
                                            alt={record.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </motion.div>
                                    <div className="absolute inset-0 border border-electric-blue/20 pointer-events-none" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default FieldRecords;
