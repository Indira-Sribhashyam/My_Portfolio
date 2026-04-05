import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
    return (
        <section className="py-48 max-w-6xl mx-auto px-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="space-y-8"
            >
                <h2 className="text-6xl md:text-9xl font-bold tracking-[ -0.05em] uppercase">
                    Less hype. <br />
                    <span className="text-white/20">More shipping.</span>
                </h2>
                <div className="w-12 h-px bg-electric-blue mx-auto" />
            </motion.div>
        </section>
    );
};

export default Philosophy;
