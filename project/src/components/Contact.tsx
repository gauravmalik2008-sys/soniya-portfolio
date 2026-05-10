import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MessageCircle, Instagram, Youtube, ArrowUpRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

export default function Contact() {
  const { ref, isInView } = useInView(0.1);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-glow-pink/70 mb-4">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            <span className="gradient-text">Bookings</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="glass rounded-3xl p-6 md:p-10">
              <div className="space-y-6">
                {[
                  { name: 'name', type: 'input', placeholder: 'Your Name', label: 'Name' },
                  { name: 'email', type: 'input', placeholder: 'your@email.com', label: 'Email' },
                ].map((field) => (
                  <div key={field.name} className="relative">
                    <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-soft-silver/30 block mb-2">
                      {field.label}
                    </label>
                    <input
                      name={field.name}
                      type={field.name === 'email' ? 'email' : 'text'}
                      placeholder={field.placeholder}
                      value={formState[field.name as keyof typeof formState]}
                      onChange={handleChange}
                      onFocus={() => setFocused(field.name)}
                      onBlur={() => setFocused(null)}
                      className={`w-full bg-white/[0.02] border rounded-xl px-4 py-3.5 font-body text-sm text-white placeholder:text-soft-silver/20 outline-none transition-all duration-300 ${
                        focused === field.name ? 'border-neon-violet/40 glow-violet' : 'border-white/5 hover:border-white/10'
                      }`}
                    />
                  </div>
                ))}

                <div className="relative">
                  <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-soft-silver/30 block mb-2">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    onFocus={() => setFocused('subject')}
                    onBlur={() => setFocused(null)}
                    className={`w-full bg-white/[0.02] border rounded-xl px-4 py-3.5 font-body text-sm text-white outline-none transition-all duration-300 appearance-none cursor-pointer ${
                      focused === 'subject' ? 'border-neon-violet/40 glow-violet' : 'border-white/5 hover:border-white/10'
                    }`}
                  >
                    <option value="" className="bg-charcoal">Select inquiry type</option>
                    <option value="booking" className="bg-charcoal">Model Booking</option>
                    <option value="collab" className="bg-charcoal">Brand Collaboration</option>
                    <option value="event" className="bg-charcoal">Event Appearance</option>
                    <option value="press" className="bg-charcoal">Press / Media</option>
                    <option value="other" className="bg-charcoal">Other</option>
                  </select>
                </div>

                <div className="relative">
                  <label className="font-mono text-[10px] tracking-[0.2em] uppercase text-soft-silver/30 block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    className={`w-full bg-white/[0.02] border rounded-xl px-4 py-3.5 font-body text-sm text-white placeholder:text-soft-silver/20 outline-none transition-all duration-300 resize-none ${
                      focused === 'message' ? 'border-neon-violet/40 glow-violet' : 'border-white/5 hover:border-white/10'
                    }`}
                  />
                </div>

                <button className="group w-full relative px-8 py-4 rounded-xl font-mono text-xs tracking-[0.2em] uppercase overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-violet to-glow-pink opacity-90 group-hover:opacity-100 transition-opacity" />
                  <span className="relative z-10 flex items-center justify-center gap-2 text-white font-medium">
                    Send Inquiry <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-2xl p-6 group hover:glow-violet transition-all duration-500">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-neon-violet/10 flex items-center justify-center">
                  <Mail size={18} className="text-neon-violet" />
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-wider uppercase text-soft-silver/30">Email</p>
                  <p className="text-sm font-medium">bookings@soniyagarg.com</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 group hover:glow-blue transition-all duration-500">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-electric-blue/10 flex items-center justify-center">
                  <Phone size={18} className="text-electric-blue" />
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-wider uppercase text-soft-silver/30">WhatsApp</p>
                  <p className="text-sm font-medium">+91-8630097693</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 group hover:glow-pink transition-all duration-500">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-glow-pink/10 flex items-center justify-center">
                  <MessageCircle size={18} className="text-glow-pink" />
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-wider uppercase text-soft-silver/30">Direct Message</p>
                  <a href="https://www.instagram.com/exploringmywithin" className="text-sm font-medium">@exploringmywithin</a>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="glass rounded-2xl p-6">
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-soft-silver/30 mb-4">Follow</p>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, color: 'hover:bg-glow-pink/10 hover:text-glow-pink hover:glow-pink', label: 'Instagram' },
                  { icon: Youtube, color: 'hover:bg-red-500/10 hover:text-red-400 hover:glow-blue', label: 'YouTube' },
                ].map(({ icon: Icon, color, label }) => (
                  <button
                    key={label}
                    className={`w-10 h-10 rounded-xl glass flex items-center justify-center text-soft-silver/40 ${color} transition-all duration-300`}
                  >
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>

            {/* Booking CTA */}
            <div className="relative rounded-2xl overflow-hidden p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-violet/10 to-glow-pink/10" />
              <div className="relative z-10">
                <p className="font-display text-lg font-semibold mb-1">Available for Bookings</p>
                <p className="font-mono text-[10px] tracking-wider text-soft-silver/40 mb-4">Fashion weeks 2026</p>
                <button className="flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-neon-violet hover:text-glow-pink transition-colors">
                  View Schedule <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
