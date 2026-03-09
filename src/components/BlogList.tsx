
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
import { blogs, BlogPost } from '../data/blogs';

interface BlogListProps {
  onPostClick: (post: BlogPost) => void;
}

export const BlogList: React.FC<BlogListProps> = ({ onPostClick }) => {
  return (
    <div className="bg-white dark:bg-slate-950 py-24 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6"
          >
            Insights for the <span className="text-primary">Modern Clinic</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            Expert advice on clinic growth, patient experience, and healthcare technology.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogs.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 flex flex-col md:flex-row"
            >
              <div className="md:w-2/5 h-64 md:h-auto overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-slate-400 text-xs">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{post.author}</span>
                  </div>
                  <button 
                    onClick={() => onPostClick(post)}
                    className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
