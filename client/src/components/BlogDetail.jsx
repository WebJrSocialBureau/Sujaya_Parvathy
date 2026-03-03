import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import Footer from "./Footer";

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/blogs/${id}`,
        );
        setBlog(res.data);
      } catch (err) {
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-brand-pink border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#080808] text-white flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl font-black uppercase italic opacity-20 tracking-tighter">
          Story Not Found
        </h1>
        <Link
          to="/blogs"
          className="text-brand-pink font-bold flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" /> Go back to Archive
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <Helmet>
        <title>{`${blog.title} | Sujaya Parvathy`}</title>
        <meta
          name="description"
          content={
            blog.excerpt?.substring(0, 150) ||
            `Read ${blog.title} by Sujaya Parvathy.`
          }
        />
        <link
          rel="canonical"
          href={`https://sujayaparvathy.com/blog/${blog._id}`}
        />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.excerpt} />
        <meta property="og:type" content="article" />
      </Helmet>
      <Navbar />

      <main className="pt-32 pb-24 px-8 lg:px-16 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link
            to="/blogs"
            className="group flex items-center gap-3 text-[10px] tracking-[0.3em] font-black uppercase text-white/40 hover:text-brand-pink transition-colors"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-2 transition-transform" />
            Back to Archive
          </Link>
        </motion.div>

        <article>
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 text-[10px] tracking-[0.2em] font-black uppercase text-brand-pink mb-6">
              <span>{blog.category}</span>
              <span className="text-white/20">•</span>
              <span className="text-white/40">
                {blog.readTime || "4 min read"}
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-black tracking-tighter uppercase leading-[0.95] mb-8">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-8 py-8 border-y border-white/5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-pink/20 flex items-center justify-center">
                  <span className="text-brand-pink font-black text-xs">SP</span>
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest leading-none mb-1">
                    Sujaya Parvathy
                  </div>
                  <div className="text-[8px] text-white/40 uppercase tracking-widest font-light">
                    Lead Journalist
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6 ml-auto">
                <div className="flex items-center gap-2 text-[10px] font-bold text-white/20 uppercase tracking-widest">
                  <Calendar className="w-3 h-3" />
                  {new Date(blog.createdAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
                <div className="flex gap-4">
                  <button className="text-white/20 hover:text-brand-pink transition-colors">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="text-white/20 hover:text-brand-pink transition-colors">
                    <Facebook className="w-4 h-4" />
                  </button>
                  <button className="text-white/20 hover:text-brand-pink transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.header>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-invert max-w-none"
          >
            {blog.content.map((item, index) => (
              <div key={index} className="mb-10">
                {item.type === "heading" ? (
                  <h2 className="text-2xl md:text-4xl font-black tracking-tighter uppercase mb-6 mt-12 text-white/90">
                    {item.text}
                  </h2>
                ) : (
                  <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-6">
                    {item.text}
                  </p>
                )}
              </div>
            ))}
          </motion.div>

          <footer className="mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-[10px] tracking-[0.3em] font-black uppercase text-white/20">
                Share this story
              </span>
              <div className="flex gap-6 mt-4">
                <button className="text-white/40 hover:text-brand-pink transition-all flex items-center gap-2 text-[10px] font-black tracking-widest uppercase">
                  <Twitter className="w-4 h-4" /> X / Twitter
                </button>
                <button className="text-white/40 hover:text-brand-pink transition-all flex items-center gap-2 text-[10px] font-black tracking-widest uppercase">
                  <Facebook className="w-4 h-4" /> Facebook
                </button>
                <button className="text-white/40 hover:text-brand-pink transition-all flex items-center gap-2 text-[10px] font-black tracking-widest uppercase">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </button>
              </div>
            </div>

            <Link
              to="/blogs"
              className="bg-white/5 hover:bg-white/10 text-white font-black py-4 px-8 rounded-xl transition-all flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase border border-white/10"
            >
              Return to Journal <ArrowLeft className="w-4 h-4 -scale-x-100" />
            </Link>
          </footer>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;
