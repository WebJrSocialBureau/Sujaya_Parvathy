import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import {
  Plus,
  Edit2,
  Trash2,
  LogOut,
  Layout,
  FileText,
  Settings,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import BlogForm from "./BlogForm";

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBlog, setCurrentBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

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

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${import.meta.env.VITE_API_URL}/blogs/${id}`, {
        headers: { "x-auth-token": token },
      });
      setBlogs(blogs.filter((blog) => blog._id !== id));
    } catch (err) {
      console.error("Error deleting blog:", err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const openForm = (blog = null) => {
    setCurrentBlog(blog);
    setIsEditing(true);
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white flex">
      {/* Sidebar */}
      <div className="w-64 border-r border-white/5 bg-[#0a0a0a] flex flex-col p-6 hidden lg:flex">
        <div className="mb-12">
          <span className="font-black tracking-tighter text-xl">
            ADMIN PANEL
          </span>
        </div>

        <div className="flex-1 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 bg-brand-pink/10 text-brand-pink rounded-xl font-bold text-xs tracking-widest uppercase">
            <FileText className="w-4 h-4" />
            Journal
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-white/40 hover:text-white transition-colors rounded-xl font-bold text-xs tracking-widest uppercase">
            <Layout className="w-4 h-4" />
            Layout
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-white/40 hover:text-white transition-colors rounded-xl font-bold text-xs tracking-widest uppercase">
            <Settings className="w-4 h-4" />
            Settings
          </button>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-3 text-white/40 hover:text-white transition-colors font-bold text-xs tracking-widest uppercase mt-auto"
        >
          <LogOut className="w-4 h-4" />
          Log Out
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-[#0a0a0a]/50 backdrop-blur-md sticky top-0 z-10">
          <h1 className="text-sm font-black tracking-[0.3em] uppercase">
            Journal Management
          </h1>
          <button
            onClick={() => openForm()}
            className="bg-brand-pink hover:bg-brand-pink/90 text-white text-[10px] font-black tracking-widest py-3 px-6 rounded-lg transition-all flex items-center gap-2"
          >
            <Plus className="w-3 h-3" />
            CREATE NEW
          </button>
        </header>

        <main className="p-8">
          <AnimatePresence mode="wait">
            {isEditing ? (
              <BlogForm
                blog={currentBlog}
                onSave={(newBlog) => {
                  fetchBlogs();
                  setIsEditing(false);
                }}
                onCancel={() => setIsEditing(false)}
              />
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
              >
                {blogs.map((blog) => (
                  <motion.div
                    key={blog._id}
                    layout
                    className="p-6 bg-white/[0.03] border border-white/5 rounded-2xl group hover:border-brand-pink/30 transition-all"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[8px] tracking-[0.2em] font-black text-brand-pink uppercase bg-brand-pink/10 px-2 py-1 rounded">
                        {blog.category}
                      </span>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                          onClick={() => openForm(blog)}
                          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                        >
                          <Edit2 className="w-4 h-4 text-white/40" />
                        </button>
                        <button
                          onClick={() => handleDelete(blog._id)}
                          className="p-2 hover:bg-red-500/20 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4 text-red-500/50" />
                        </button>
                      </div>
                    </div>
                    <h3 className="font-black text-xl mb-2 line-clamp-2 uppercase tracking-tighter">
                      {blog.title}
                    </h3>
                    <p className="text-white/40 text-sm font-light line-clamp-3 mb-6">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-white/20 uppercase tracking-widest">
                      <FileText className="w-3 h-3" />
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
