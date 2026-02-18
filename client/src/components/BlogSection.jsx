import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import { ArrowRight, Calendar, User } from "lucide-react";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/blogs`);
        // Only take the latest 3 blogs
        setBlogs(res.data.slice(0, 3));
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) return null;
  if (blogs.length === 0) return null;

  return (
    <section id="blogs" className="py-24 px-8 lg:px-16 bg-[#080808]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-4"
            >
              <div className="w-12 h-[1px] bg-brand-pink"></div>
              <span className="text-brand-pink text-[10px] tracking-[0.5em] font-black uppercase">
                Digital Journal
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black tracking-tighter uppercase"
            >
              Latest <span className="text-white/20">Stories</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to="/blogs"
              className="group flex items-center gap-3 text-[10px] tracking-[0.3em] font-black uppercase hover:text-brand-pink transition-colors"
            >
              View All Entries
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={`/blog/${blog._id}`} className="group block">
                <div className="relative aspect-[16/10] mb-6 overflow-hidden rounded-2xl bg-white/5 border border-white/10">
                  {/* Placeholder for image since the schema doesn't have one yet, using a styled div */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/20 to-transparent group-hover:scale-110 transition-transform duration-700"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[8px] tracking-[0.5em] font-black text-white/10 uppercase group-hover:text-brand-pink/30 transition-colors">
                      Digital Bureau
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-[8px] tracking-[0.2em] font-black uppercase text-white/40">
                    <span className="text-brand-pink">{blog.category}</span>
                    <span>•</span>
                    <span>{blog.readTime || "4 min read"}</span>
                  </div>

                  <h3 className="text-xl font-black tracking-tighter uppercase group-hover:text-brand-pink transition-colors line-clamp-2">
                    {blog.title}
                  </h3>

                  <p className="text-white/40 text-sm font-light leading-relaxed line-clamp-3">
                    {blog.excerpt}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
