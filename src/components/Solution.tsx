import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Laptop, Star, CheckCircle2, TrendingUp, Zap } from 'lucide-react';

export const Solution: React.FC = () => {
  const solutions = [
    {
      badge: "Lead Generator",
      title: "Intelligent Call Management",
      headline: "Never Miss a Patient Lead Again",
      desc: "Capture Every Call - VitaCareOS automatically converts every inbound call into a qualified patient, so no opportunity is missed.",
      points: [
        "24/7 Automated Call Capture",
        "Instant Lead Routing to Staff",
        "Automated Patient Follow-Ups"
      ],
      icon: <MessageSquare className="w-6 h-6 text-white" />,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
      color: "bg-blue-600",
      shadow: "shadow-blue-500/30"
    },
    {
      badge: "Conversion Engine",
      title: "High-Performance Web Design",
      headline: "Turn Website Visitors Into Confirmed Appointments",
      desc: "Unlike typical clinic websites, our mobile-first platform ranks on Google and converts visitors into confirmed appointments within 60 seconds.",
      points: [
        "SEO-Optimized Website Architecture",
        "Conversion-Focused User Experience",
        "High-Speed Website Performance"
      ],
      icon: <Laptop className="w-6 h-6 text-white" />,
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
      color: "bg-indigo-600",
      shadow: "shadow-indigo-500/30",
      reverse: true
    },
    {
      badge: "Trust Builder",
      title: "Automatic Online Reputation Management",
      headline: "Become the Top-Rated Clinic Locally",
      desc: "Become the highest-rated clinic in your zip code. We automatically text patients after visits to generate 5-star reviews, pushing your practice to the top of search results while filtering out negative feedback.",
      points: [
        "Automated 5-Star Review Requests",
        "Filter Negative Feedback Automatically",
        "Optimize Google Business Profile"
      ],
      icon: <Star className="w-6 h-6 text-white" />,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
      color: "bg-amber-500",
      shadow: "shadow-amber-500/30"
    }
  ];

  return (
    <section id="solutions" className="py-24 overflow-hidden scroll-mt-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-4"
          >
            <Zap className="w-3 h-3" /> VitaCareOS
          </motion.div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6"
          >
            The Three Pillars of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Rapid Clinic Growth</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            We don't just manage your web presence - VitaCareOS captures leads, automates bookings, and builds credible online reputation for your clinic.
          </motion.p>
        </div>

        {/* Solutions Grid */}
        <div className="space-y-32">
          {solutions.map((sol, idx) => (
            <div key={idx} className={`flex flex-col lg:flex-row items-center gap-16 ${sol.reverse ? 'lg:flex-row-reverse' : ''}`}>
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: sol.reverse ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:w-1/2"
              >
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${sol.color} bg-opacity-10 text-${sol.color.replace('bg-', '')} mb-6`}>
                  <span className={`text-xs font-bold uppercase tracking-wider text-${sol.color.replace('bg-', '')}-700 dark:text-${sol.color.replace('bg-', '')}-300`}>
                    {sol.badge}
                  </span>
                </div>

                <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                  {sol.headline}
                </h3>
                <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed border-l-4 border-slate-200 dark:border-slate-800 pl-6">
                  {sol.desc}
                </p>

                <div className="grid gap-4">
                  {sol.points.map((p, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                      <div className={`p-2 rounded-full ${sol.color} bg-opacity-10 shrink-0`}>
                        <CheckCircle2 className={`w-4 h-4 text-${sol.color.replace('bg-', '')}-600 dark:text-white`} />
                      </div>
                      <span className="font-semibold text-slate-700 dark:text-slate-200">{p}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Image/Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="lg:w-1/2 relative group"
              >
                <div className={`absolute -inset-4 ${sol.color} opacity-20 blur-2xl rounded-[3rem] group-hover:opacity-30 transition-opacity duration-500`}></div>
                <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800">
                  <div className={`absolute inset-0 ${sol.color} mix-blend-multiply opacity-10 z-10`}></div>
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full object-cover aspect-[4/3] transform group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Floating Stat Card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-slate-100 dark:border-slate-700 z-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${sol.color}`}>
                        {sol.icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wide">{sol.title}</p>
                      </div>
                    </div>
                    <TrendingUp className="w-5 h-5 text-green-500" />
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
