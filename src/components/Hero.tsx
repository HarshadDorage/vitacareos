import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight, Play, Star, TrendingUp } from 'lucide-react';
import { DashboardMockup } from './DashboardMockup';

interface HeroProps {
  onAuditClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onAuditClick }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8
      }
    }
  };

  const handleScrollToSolutions = () => {
    const el = document.getElementById('solutions');
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden dark:bg-slate-950">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/2 bg-blue-50/50 dark:bg-blue-900/10 rounded-bl-full blur-3xl opacity-50" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Left Content Column */}
          <div className="lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              {/* <span className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 text-primary dark:text-blue-400 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border border-blue-100 dark:border-blue-800">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Now Serving 5,000+ US Medical & Dental Clinics
              </span> */}

              {/* Headline */}
              <h1 className="text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white leading-[1.15] mb-6">
                Turn Missed Calls Into <span className="text-primary dark:text-blue-500 underline decoration-blue-100 dark:decoration-blue-900/50 decoration-8 underline-offset-4">Booked Revenue.</span> Automatically.
              </h1>

              {/* Subheadline - Benefit Driven */}
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                The average practice loses $144k/year to voicemail. Our Growth OS captures every lead, fills your schedule, and automates patient intake—24/7.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <button 
                onClick={onAuditClick}
                className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/20 hover:shadow-2xl hover:bg-[#004494] transition-all flex items-center justify-center gap-2 group"
              >
                Audit My Lost Revenue
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={handleScrollToSolutions}
                className="w-full sm:w-auto bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5 fill-slate-700 dark:fill-slate-200" />
                Watch How It Works
              </button>
            </motion.div>

            {/* Social Proof / Trust Indicators */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="pt-8 border-t border-slate-100 dark:border-slate-800"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
                <div className="flex flex-col">
                  <div className="flex items-center gap-1 mb-1">
                    {Array.from({ length: 5 }).map((_, star) => (
                      <Star key={star} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                    <span className="ml-2 text-sm font-bold text-slate-900 dark:text-slate-100">4.9/5</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Average Client ROI Rating
                  </p>
                </div>
                <div className="hidden sm:block w-px h-8 bg-slate-200 dark:bg-slate-800" />
                <div className="flex items-center gap-3">
                  <div className="bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded text-[10px] font-bold text-green-700 dark:text-green-400 border border-green-100 dark:border-green-800 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> 30% AVG GROWTH
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 px-2 py-1 rounded text-[10px] font-bold text-primary dark:text-blue-400 border border-blue-100 dark:border-blue-800 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> HIPAA COMPLIANT
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Image/Dashboard Column */}
          <div className="lg:w-1/2 relative w-full flex justify-center lg:justify-end">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
};