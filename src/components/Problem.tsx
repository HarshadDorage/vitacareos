import React from 'react';
import { motion } from 'framer-motion';
import { PhoneMissed, Hourglass, Banknote, ArrowRight } from 'lucide-react';

export const Problem: React.FC = () => {
  const problems = [
    {
      icon: <PhoneMissed className="w-6 h-6 text-red-500" />,
      title: "Missed Calls",
      desc: "The average practice loses $144k/year to missed calls. Every voicemail is a lost opportunity."
    },
    {
      icon: <Hourglass className="w-6 h-6 text-red-500" />,
      title: "Manual Scheduling",
      desc: "Spend hours manually scheduling patients. Your time is better spent treating patients."
    },
    {
      icon: <Banknote className="w-6 h-6 text-red-500" />,
      title: "Lost Revenue",
      desc: "Without proper lead capture, you're leaving money on the table. Every missed call = lost revenue."
    }
  ];

  return (
    <section id="problem" className="py-24 bg-white dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-50/50 dark:bg-red-900/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-red-500 font-bold tracking-wider uppercase text-sm mb-4 block">
            The Silent Growth Killers
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            You Didn't Go to Med School to <br className="hidden md:block" />
            <span className="text-red-500 decoration-red-200 underline underline-offset-4 decoration-4">Manage a Call Center.</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Running a modern clinic is hard enough. Don't let these three outdated workflows drain your practice's profitability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {problems.map((prob, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-slate-50 dark:bg-slate-900/50 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 hover:border-red-200 dark:hover:border-red-900/30 hover:shadow-xl hover:shadow-red-500/5 transition-all group cursor-default"
            >
              <div className="mb-6 inline-flex p-4 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-100 dark:border-slate-700 group-hover:scale-110 transition-transform duration-300">
                {prob.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
                {prob.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {prob.desc}
              </p>
            </motion.div>
          ))}
        </div>
        
        {/* Bottom CTA Connector */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center"
        >
            <p className="text-slate-500 dark:text-slate-500 font-medium inline-flex items-center gap-2">
                There is a better way 
                <ArrowRight className="w-4 h-4 animate-bounce-x" />
            </p>
        </motion.div>
      </div>
    </section>
  );
};