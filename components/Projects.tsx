"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "NLP Document Processing System",
        description: "Advanced natural language processing system for automated document analysis and information extraction using transformer models and BERT.",
        tags: ["NLP", "BERT", "Transformers", "Python"],
        demo: "#",
        github: "#",
    },
    {
        title: "Predictive Analytics Dashboard",
        description: "Real-time predictive analytics platform for business intelligence with interactive visualizations and automated reporting.",
        tags: ["Predictive Analytics", "Visualization", "BI", "Python"],
        demo: "#",
        github: "#",
    },
    {
        title: "Deep Learning Image Classification",
        description: "Computer vision system for automated image classification and object detection using convolutional neural networks.",
        tags: ["Computer Vision", "CNN", "Deep Learning", "TensorFlow"],
        demo: "#",
        github: "#",
    },
    {
        title: "LLM Fine-tuning Pipeline",
        description: "Scalable pipeline for fine-tuning large language models on domain-specific data with automated hyperparameter optimization.",
        tags: ["LLM", "Fine-tuning", "GenAI", "Python"],
        demo: "#",
        github: "#",
    },
    {
        title: "Real-time Data Pipeline",
        description: "Robust data engineering solution for real-time data processing and analysis with fault-tolerant streaming architecture.",
        tags: ["Data Engineering", "Streaming", "Big Data", "ETL"],
        demo: "#",
        github: "#",
    },
    {
        title: "AI Recommendation System",
        description: "Machine learning recommendation engine using collaborative filtering and deep learning for personalized user experiences.",
        tags: ["Recommender Systems", "Deep Learning", "Collaborative Filtering"],
        demo: "#",
        github: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold mb-16 text-center text-glow"
                >
                    Featured Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card rounded-xl overflow-hidden group hover:border-primary/50 transition-colors flex flex-col"
                        >
                            <div className="h-48 bg-gray-800/50 relative overflow-hidden flex items-center justify-center group-hover:bg-gray-800/70 transition-colors">
                                <div className="text-4xl font-bold text-white/10 group-hover:text-primary/20 transition-colors select-none">
                                    {project.title.split(" ")[0]}
                                </div>
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-gray-400 mb-4 text-sm line-clamp-3 flex-1">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="text-xs px-2 py-1 rounded-full bg-white/10 text-primary border border-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4 mt-auto">
                                    <a href={project.demo} className="flex items-center gap-1 text-sm text-white hover:text-primary transition-colors">
                                        <ExternalLink className="w-4 h-4" /> Live Demo
                                    </a>
                                    <a href={project.github} className="flex items-center gap-1 text-sm text-white hover:text-primary transition-colors">
                                        <Github className="w-4 h-4" /> Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
