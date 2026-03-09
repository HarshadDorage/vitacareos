import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  User, 
  ArrowLeft, 
  Clock, 
  Share2, 
  Bookmark,
  Tag,
  MessageCircle,
  ThumbsUp,
  Link as LinkIcon,
  Twitter,
  Facebook,
  Linkedin,
  Mail
} from 'lucide-react';
import { BlogPost as BlogPostType, getRelatedBlogs } from '../data/blogs';

interface BlogPostProps {
  post: BlogPostType;
  onBack: () => void;
  onNavigateToPost?: (postId: string) => void;
}

export const BlogPost: React.FC<BlogPostProps> = ({ 
  post, 
  onBack,
  onNavigateToPost 
}) => {
  const relatedPosts = getRelatedBlogs(post, 3);

  // Scroll to top when post changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [post.id]);

  // Handle sharing
  const sharePost = (platform: string) => {
    const url = window.location.href;
    const title = post.title;
    const text = post.excerpt;

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text + '\n\n' + url)}`
    };

    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank');
  };

  // Copy link to clipboard
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    // You could add a toast notification here
    alert('Link copied to clipboard!');
  };

  return (
    <div className="bg-white dark:bg-slate-950 min-h-screen pt-24 pb-20 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Back button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Insights
        </motion.button>

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          {/* Header */}
          <header className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-full uppercase tracking-widest">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Author and share section */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-y border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-base">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <div className="font-medium text-slate-900 dark:text-white">{post.author}</div>
                  <div className="text-xs text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button 
                  onClick={() => sharePost('twitter')}
                  className="p-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-blue-50 hover:text-blue-500 hover:border-blue-200 dark:hover:bg-slate-800 transition-all"
                  aria-label="Share on Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => sharePost('facebook')}
                  className="p-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 dark:hover:bg-slate-800 transition-all"
                  aria-label="Share on Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => sharePost('linkedin')}
                  className="p-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 dark:hover:bg-slate-800 transition-all"
                  aria-label="Share on LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </button>
                <button 
                  onClick={copyLink}
                  className="p-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                  aria-label="Copy link"
                >
                  <LinkIcon className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-2 mt-4">
                <Tag className="w-4 h-4 text-slate-400" />
                {post.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative aspect-video rounded-2xl overflow-hidden mb-10 shadow-xl"
          >
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="eager"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            <style jsx>{`
              .blog-content {
                font-family: system-ui, -apple-system, sans-serif;
              }
              .blog-content .lead {
                font-size: 1.25rem;
                line-height: 1.7;
                color: #1e293b;
                font-weight: 400;
                margin-bottom: 2rem;
                padding: 1rem 1.5rem;
                background: #f8fafc;
                border-left: 4px solid #0ea5e9;
                border-radius: 0 0.5rem 0.5rem 0;
              }
              .dark .blog-content .lead {
                color: #e2e8f0;
                background: #1e293b;
                border-left-color: #38bdf8;
              }
              .blog-content h2 {
                font-size: 1.875rem;
                font-weight: 700;
                margin-top: 2.5rem;
                margin-bottom: 1rem;
                color: #0f172a;
                scroll-margin-top: 2rem;
              }
              .dark .blog-content h2 {
                color: #f1f5f9;
              }
              .blog-content h3 {
                font-size: 1.5rem;
                font-weight: 600;
                margin-top: 2rem;
                margin-bottom: 0.75rem;
                color: #1e293b;
              }
              .dark .blog-content h3 {
                color: #e2e8f0;
              }
              .blog-content p {
                margin-bottom: 1.25rem;
                line-height: 1.8;
                color: #334155;
              }
              .dark .blog-content p {
                color: #cbd5e1;
              }
              .blog-content ul, .blog-content ol {
                margin: 1.25rem 0 1.5rem 1.5rem;
              }
              .blog-content li {
                margin-bottom: 0.5rem;
                line-height: 1.7;
                color: #334155;
              }
              .dark .blog-content li {
                color: #cbd5e1;
              }
              .blog-content strong {
                color: #0f172a;
                font-weight: 600;
              }
              .dark .blog-content strong {
                color: #f1f5f9;
              }
              .blog-content .highlight-box {
                background: #f0f9ff;
                border: 1px solid #bae6fd;
                border-radius: 1rem;
                padding: 1.5rem;
                margin: 2rem 0;
              }
              .dark .blog-content .highlight-box {
                background: #0c4a6e;
                border-color: #0284c7;
              }
              .blog-content .stat-box {
                background: #f1f5f9;
                border-radius: 1rem;
                padding: 1.5rem;
                margin: 2rem 0;
                font-style: italic;
                border-left: 4px solid #0ea5e9;
              }
              .dark .blog-content .stat-box {
                background: #1e293b;
                border-left-color: #38bdf8;
              }
              .blog-content .testimonial {
                background: #ffffff;
                border: 1px solid #e2e8f0;
                border-radius: 1rem;
                padding: 1.5rem;
                margin: 2rem 0;
                box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
              }
              .dark .blog-content .testimonial {
                background: #0f172a;
                border-color: #334155;
              }
              .blog-content .cta-box {
                background: linear-gradient(135deg, #0ea5e9, #2563eb);
                color: white;
                border-radius: 1.5rem;
                padding: 2rem;
                margin: 3rem 0 1rem;
                text-align: center;
              }
              .blog-content .cta-box p {
                color: white;
                font-size: 1.125rem;
                margin-bottom: 1.5rem;
              }
              .blog-content .cta-box strong {
                color: white;
              }
              .blog-content .cta-button {
                display: inline-block;
                background: white;
                color: #0ea5e9;
                font-weight: 600;
                padding: 0.75rem 2rem;
                border-radius: 9999px;
                text-decoration: none;
                transition: all 0.2s;
                box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
              }
              .blog-content .cta-button:hover {
                transform: translateY(-2px);
                box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);
              }
            `}</style>
            
            <div 
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </motion.div>

          {/* Engagement Footer */}
          <footer className="mt-16">
            {/* Engagement Actions */}
            <div className="flex items-center justify-between py-6 border-y border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors">
                  <ThumbsUp className="w-5 h-5" />
                  <span className="text-sm">Helpful</span>
                </button>
                <button className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm">Comment</span>
                </button>
              </div>
              <button className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors">
                <Bookmark className="w-5 h-5" />
                <span className="text-sm">Save</span>
              </button>
            </div>

            {/* Author Bio */}
            {post.authorBio && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12 bg-slate-50 dark:bg-slate-900 rounded-2xl p-8"
              >
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-2xl shrink-0">
                    {post.author.charAt(0)}
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      About {post.author}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {post.authorBio}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-16"
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                  Related Articles
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map(relatedPost => (
                    <div
                      key={relatedPost.id}
                      onClick={() => onNavigateToPost?.(relatedPost.id)}
                      className="group cursor-pointer"
                    >
                      <div className="relative aspect-video rounded-lg overflow-hidden mb-3">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-1 line-clamp-2 group-hover:text-primary transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-slate-500">
                        {relatedPost.readTime}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Newsletter Signup */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Stay Updated with Healthcare Insights
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
                Get the latest strategies for clinic growth, patient acquisition, and practice management delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </footer>
        </motion.article>
      </div>
    </div>
  );
};