"use client";

import { motion } from "framer-motion";

const experience = [
    {
        year: "Present",
        role: "Senior Machine Learning Engineer",
        company: "Orange Business",
        description: "Designing and optimizing scalable AI solutions with a focus on Deep Learning, NLP, and Large Language Models. Building robust data pipelines and deploying real-world applications."
    },
    {
        year: "Previous",
        role: "Machine Learning Engineer",
        company: "Orange Business",
        description: "Supported creation and implementation of ML models. Built and optimized data pipelines for model training and deployment."
    },
    {
        year: "Previous",
        role: "Test Automation Engineer",
        company: "Orange Business",
        description: "Automated testing processes and quality assurance for software applications."
    }
];

export default function About() {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-glow">About Me</h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                I'm a Senior Machine Learning Engineer at Orange Business, based in Gurgaon, India. I specialize in transforming data into intelligent solutions using cutting-edge AI and machine learning technologies.
                            </p>
                            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                                My expertise spans Deep Learning, Natural Language Processing (NLP), Large Language Models (LLMs), and Predictive Analytics. I'm passionate about building robust data pipelines and fine-tuning AI models that drive real business impact.
                            </p>
                            <div className="flex gap-4 mt-8">
                                <div className="text-center">
                                    <h3 className="text-4xl font-bold text-primary">AI</h3>
                                    <p className="text-sm text-gray-500">Expertise</p>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-4xl font-bold text-secondary">ML</h3>
                                    <p className="text-sm text-gray-500">Solutions</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-transparent"></div>
                            <div className="space-y-8 pl-8">
                                {experience.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.2 }}
                                        viewport={{ once: true }}
                                        className="relative"
                                    >
                                        <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-black border-2 border-primary"></div>
                                        <span className="text-sm text-primary font-mono">{item.year}</span>
                                        <h3 className="text-xl font-bold text-white">{item.role}</h3>
                                        <p className="text-gray-400 text-sm mb-2">{item.company}</p>
                                        <p className="text-gray-500 text-sm">{item.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
