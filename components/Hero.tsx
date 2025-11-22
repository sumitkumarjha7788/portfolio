"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <div className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden bg-background text-foreground">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px] animate-blob opacity-50"></div>
                <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-secondary/30 rounded-full blur-[100px] animate-blob animation-delay-2000 opacity-50"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[100px] animate-blob animation-delay-4000 opacity-50"></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20 z-0"></div>

            <div className="relative z-10 container mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full glass-card text-primary border-primary/30">
                        Senior Machine Learning Engineer
                    </div>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                >
                    Transforming Data into <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent text-glow">Intelligent Solutions</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10"
                >
                    Hi, I'm <span className="text-white font-semibold">Sumit Kumar Jha</span>. I design and optimize scalable AI solutions with a focus on Deep Learning, NLP, and Large Language Models.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link
                        href="#projects"
                        className="px-8 py-3 rounded-full bg-primary text-black font-bold hover:bg-primary/80 transition-all shadow-[0_0_20px_rgba(0,243,255,0.5)] hover:shadow-[0_0_30px_rgba(0,243,255,0.7)] flex items-center gap-2"
                    >
                        View Projects <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-3 rounded-full glass-card text-white hover:bg-white/10 transition-all border border-white/10 hover:border-white/30"
                    >
                        Contact Me
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="mt-16 flex gap-6 justify-center"
                >
                    <a href="https://github.com/sumitkjha7788" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                        <Github className="w-6 h-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/sumit-kumar-jha-7788vampyr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-secondary transition-colors">
                        <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="mailto:sumitkjha7788+portfolio@gmail.com" className="text-gray-400 hover:text-accent transition-colors">
                        <Mail className="w-6 h-6" />
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
