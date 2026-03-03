import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import { Calendar, User, Search, Filter } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/blogs`);
        setBlogs(res.data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
    window.scrollTo(0, 0);
  }, []);

  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Helmet>
        <title>Journal Archive | Sujaya Parvathy</title>
        <meta
          name="description"
          content="Explore the journal archive of Sujaya Parvathy. Award-winning journalism, multimedia stories, and more."
        />
        <link rel="canonical" href="https://sujayaparvathy.com/blogs" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Navbar />

      <main className="pt-32 pb-24 px-8 lg:px-16 max-w-7xl mx-auto">
        <header className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-brand-pink"></div>
            <span className="text-brand-pink text-[10px] tracking-[0.5em] font-black uppercase">
              The Digital Bureau
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]"
              >
                Journal <br />
                <span className="text-white/20">Archive</span>
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative w-full lg:w-96"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
              <input
                type="text"
                placeholder="Search stories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm focus:outline-none focus:border-brand-pink/50 transition-all font-light"
              />
            </motion.div>
          </div>
        </header>

        {loading ? (
          <div className="flex items-center justify-center py-20">
            <div className="w-8 h-8 border-2 border-brand-pink border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {filteredBlogs.map((blog, i) => (
              <motion.div
                key={blog._id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link to={`/blog/${blog._id}`} className="group block">
                  <div className="relative aspect-[16/10] mb-8 overflow-hidden rounded-2xl bg-white/5 border border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/10 to-transparent group-hover:scale-110 transition-transform duration-700"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                      <span className="text-[10px] tracking-[0.5em] font-black uppercase">
                        Archive Entry
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-[8px] tracking-[0.2em] font-black uppercase text-white/40">
                      <span className="text-brand-pink">{blog.category}</span>
                      <span>•</span>
                      <span>{blog.readTime || "4 min read"}</span>
                    </div>

                    <h3 className="text-2xl font-black tracking-tighter uppercase group-hover:text-brand-pink transition-colors leading-tight">
                      {blog.title}
                    </h3>

                    <p className="text-white/40 text-sm font-light leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>

                    <div className="pt-4 flex items-center gap-2 text-[8px] tracking-[0.2em] font-black uppercase text-white/20">
                      <Calendar className="w-3 h-3" />
                      {new Date(blog.createdAt).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {!loading && filteredBlogs.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/40 font-light italic">
              No stories found matching your search.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default BlogList;
