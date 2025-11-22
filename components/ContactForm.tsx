"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Send, Loader2 } from "lucide-react";

export default function ContactForm() {
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setLoading(true);
        setStatus("idle");

        try {
            // Replace with your actual EmailJS service ID, template ID, and public key
            // For now, we'll simulate a success or use env vars if available
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_id";
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_id";
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_key";

            if (serviceId === "service_id") {
                // Simulation for demo purposes if keys aren't set
                await new Promise(resolve => setTimeout(resolve, 1000));
                console.log("EmailJS keys missing, simulating success");
            } else {
                await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey);
            }

            setStatus("success");
            formRef.current.reset();
        } catch (error) {
            console.error("EmailJS Error:", error);
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto glass-card p-8 rounded-2xl relative z-10"
                >
                    <h2 className="text-3xl font-bold mb-6 text-center text-glow">Get In Touch</h2>
                    <p className="text-center text-gray-400 mb-8">
                        Have a project in mind or just want to say hi? Send me a message!
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="user_name" className="block text-sm font-medium mb-2 text-gray-300">Name</label>
                            <input
                                type="text"
                                name="user_name"
                                id="user_name"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="user_email" className="block text-sm font-medium mb-2 text-gray-300">Email</label>
                            <input
                                type="email"
                                name="user_email"
                                id="user_email"
                                required
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                required
                                rows={5}
                                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-white resize-none"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-white font-bold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                            {loading ? "Sending..." : "Send Message"}
                        </button>

                        {status === "success" && (
                            <p className="text-green-400 text-center mt-4">Message sent successfully!</p>
                        )}
                        {status === "error" && (
                            <p className="text-red-400 text-center mt-4">Something went wrong. Please try again.</p>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
