
import React from 'react';
import { motion } from 'framer-motion';
import { Video, Play, MousePointerClick, Zap,  Calendar, PhoneMissed } from 'lucide-react';


interface LoomRequestProps {
  onRequestClick: () => void;
}

export const LoomRequest: React.FC<LoomRequestProps> = ({ onRequestClick }) => {
  return (
    <section className="min-h-screen bg-white">
      {/* HERO */}
      <div className="container mx-auto px-6 pt-28 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-display font-bold text-slate-900 mb-6 leading-tight"
        >
          See Exactly Why Your Dental Clinic
          <span className="text-primary"> Loses Patients</span>
        </motion.h1>

        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
          Get a short, personalized video audit showing how missed calls,
          slow follow-ups, and booking gaps are costing your clinic real patients.
          No sales pitch. Just clarity.
        </p>
      </div>

      {/* VIDEO AUDIT SECTION */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden relative">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-500/10 blur-3xl rounded-full -translate-x-1/4 translate-y-1/4" />

            <div className="flex flex-col lg:flex-row items-center relative z-10">
              {/* LEFT */}
              <div className="lg:w-1/2 p-12 md:p-16 lg:p-20">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-bold mb-8 border border-blue-500/30">
                    <Video className="w-4 h-4" />
                    DENTIST-ONLY VIDEO AUDIT
                  </div>

                  <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
                    No Time for a Call? <br />
                    <span className="text-blue-400">
                      Get a 5-Minute Video Instead.
                    </span>
                  </h2>

                  <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                    We personally review your clinic’s website, Google profile,
                    and call-handling flow — then record a short video showing
                    where patients drop off and how to fix it.
                  </p>

                  {/* BENEFITS */}
                  <div className="space-y-4 mb-10">
                    <div className="flex items-center gap-3 text-slate-300">
                      <PhoneMissed className="w-5 h-5 text-blue-400" />
                      <span>Find missed-call & follow-up gaps</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <Calendar className="w-5 h-5 text-blue-400" />
                      <span>See booking & appointment friction</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-300">
                      <Zap className="w-5 h-5 text-blue-400" />
                      <span>Simple fixes you can apply immediately</span>
                    </div>
                  </div>

                  {/* TRUST */}
                  <div className="space-y-3 mb-10 text-slate-400 text-sm">
                    <p>✔ Delivered within 24 hours</p>
                    <p>✔ No contracts, no obligation</p>
                    <p>✔ Built specifically for dental clinics</p>
                  </div>

                  <button
                    onClick={onRequestClick}
                    className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 hover:scale-105 transition-all shadow-xl shadow-white/5 flex items-center gap-2"
                  >
                    Request My Free Video Audit
                    <MousePointerClick className="w-5 h-5" />
                  </button>
                </motion.div>
              </div>

              {/* RIGHT – LOOM MOCKUP */}
              <div className="lg:w-1/2 w-full p-8 lg:p-0 flex justify-center lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative max-w-lg lg:mr-[-50px] group"
                >
                  <div className="bg-slate-800 rounded-2xl p-4 shadow-2xl border border-white/10">
                    <div className="aspect-video bg-slate-900 rounded-lg relative overflow-hidden mb-4 border border-white/5">
                      <img
                        src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800"
                        className="w-full h-full object-cover opacity-50 grayscale"
                        alt="Dental website audit"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                          <Play className="w-8 h-8 text-white fill-white" />
                        </div>
                      </div>

                      <div className="absolute bottom-4 left-4 bg-slate-900/80 backdrop-blur px-3 py-2 rounded-full border border-white/10 text-[11px] text-white font-bold">
                        Reviewing Missed Call Flow…
                      </div>
                    </div>

                    <div className="flex items-center justify-between px-2">
                      <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-400" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                      </div>
                      <div className="w-24 h-1.5 bg-white/10 rounded-full">
                        <div className="w-1/3 h-full bg-blue-400 rounded-full" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute -top-6 -left-6 bg-secondary text-white px-4 py-2 rounded-xl font-bold shadow-lg text-sm border border-white/10">
                    Missed Patients Found
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};
