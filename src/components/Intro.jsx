import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Typewriter = ({ text, delay = 0, onComplete }) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let timeout;
        let interval;

        function startTyping() {
            let i = 0;
            interval = setInterval(() => {
                setDisplayText(text.substring(0, i + 1));
                i++;
                if (i >= text.length) {
                    clearInterval(interval);
                    if (onComplete) onComplete();
                }
            }, 50);
        }

        if (delay > 0) {
            timeout = setTimeout(() => startTyping(), delay);
        } else {
            startTyping();
        }

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [text, delay, onComplete]);

    return (
        <div className="font-mono text-xs md:text-sm tracking-widest text-gray-400 uppercase">
            {displayText}<span className="animate-pulse">_</span>
        </div>
    );
};

const Intro = ({ onComplete }) => {
    const [stage, setStage] = useState('typewriter'); // 'typewriter', 'file', 'transition'
    const [stampActive, setStampActive] = useState(false);

    useEffect(() => {
        if (stage === 'file') {
            const timer = setTimeout(() => setStage('stamp'), 1000);
            return () => clearTimeout(timer);
        }
        if (stage === 'stamp') {
            const timer = setTimeout(() => setStampActive(true), 500);
            return () => clearTimeout(timer);
        }
    }, [stage]);

    const handleFirstTypewriterComplete = useCallback(() => {
        // Do nothing, wait for second one
    }, []);

    const handleSecondTypewriterComplete = useCallback(() => {
        setTimeout(() => setStage('file'), 1000);
    }, []);

    const handleFileClick = () => {
        setStage('transition');
        setTimeout(onComplete, 2000);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-off-black overflow-hidden backdrop-blur-sm">
            <div className="film-grain" />

            <AnimatePresence mode="wait">
                {stage === 'typewriter' && (
                    <motion.div
                        key="typewriter"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col gap-2 items-start"
                    >
                        <Typewriter
                            text="ACCESSING ARCHIVES..."
                            onComplete={handleFirstTypewriterComplete}
                        />
                        <Typewriter
                            text="SEARCHING SUBJECT: INDIRA SRIBHASHYAM..."
                            delay={1500}
                            onComplete={handleSecondTypewriterComplete}
                        />
                    </motion.div>
                )}

                {(stage === 'file' || stage === 'stamp' || stage === 'transition') && (
                    <motion.div
                        key="file"
                        initial={{ scale: 0.8, opacity: 0, y: 50 }}
                        animate={stage === 'transition'
                            ? { scale: 1.5, opacity: 0, y: -200, rotate: -5 }
                            : { scale: 1, opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                        onClick={(stage === 'file' || stage === 'stamp') ? handleFileClick : undefined}
                    >
                        {/* Wanted File UI */}
                        <div className="matte-paper w-[320px] md:w-[450px] aspect-[3/4] p-8 md:p-12 flex flex-col cursor-pointer relative overflow-hidden group shadow-2xl">
                            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-gray-500">
                                DOSSIER #2026-IS
                            </div>

                            <div className="mb-8 border-b border-black/10 pb-4">
                                <h1 className="text-3xl md:text-4xl font-serif tracking-tight leading-none mb-4">
                                    INDIRA SRIBHASHYAM
                                </h1>
                                <div className="flex flex-wrap gap-2">
                                    {['Full Stack Builder', 'ServiceNow CAD', 'SIH Finalist ×2'].map(tag => (
                                        <span key={tag} className="text-[10px] font-mono border border-black/20 px-2 py-0.5 rounded-full uppercase tracking-tighter">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6 flex-grow">
                                <div>
                                    <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] mb-2 font-bold opacity-60">Identity:</h3>
                                    <p className="font-mono text-sm">ACTIVE // SYSTEMS ARCHITECT</p>
                                </div>

                                <div>
                                    <h3 className="text-[10px] font-mono uppercase tracking-[0.2em] mb-2 font-bold opacity-60">CORE ATTRIBUTES:</h3>
                                    <ul className="text-sm space-y-2 font-serif italic text-black/80">
                                        <li>— Delivering under high pressure</li>
                                        <li>— Building interactive RAG systems</li>
                                        <li>— Rapid prototyping in 36hr sprints</li>
                                        <li>— Intentional engineering design</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Stamp Animation */}
                            {stampActive && (
                                <motion.div
                                    initial={{ scale: 3, opacity: 0, rotate: -20 }}
                                    animate={{ scale: 1, opacity: 0.8, rotate: -15 }}
                                    className="absolute bottom-16 right-8 pointer-events-none"
                                >
                                    <div className="stamp">FINALIST</div>
                                </motion.div>
                            )}

                            <div className="absolute bottom-8 left-8 md:left-12 font-mono text-[10px] text-gray-500 animate-pulse">
                                CLICK FILE TO AUTHENTICATE
                            </div>

                            {/* Subtle spotlight effect */}
                            <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent, rgba(0,0,0,0.05))" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <button
                onClick={() => onComplete()}
                className="fixed bottom-8 right-8 text-[10px] font-mono uppercase tracking-widest text-gray-500 hover:text-white transition-colors z-50"
            >
                Skip Intro
            </button>
        </div>
    );
};

export default Intro;
