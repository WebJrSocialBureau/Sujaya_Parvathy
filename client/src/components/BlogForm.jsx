import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Trash2,
  Save,
  X,
  Type,
  AlignLeft,
  List as ListIcon,
} from "lucide-react";
import axios from "axios";

const BlogForm = ({ blog, onSave, onCancel }) => {
  const [formData, setFormData] = useState(
    blog || {
      title: "",
      category: "News",
      excerpt: "",
      readTime: "4 min read",
      content: [{ type: "paragraph", text: "" }],
    },
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContentChange = (index, value) => {
    const newContent = [...formData.content];
    newContent[index].text = value;
    setFormData({ ...formData, content: newContent });
  };

  const addContentItem = (type) => {
    setFormData({
      ...formData,
      content: [
        ...formData.content,
        { type, text: "", items: type === "list" ? [""] : undefined },
      ],
    });
  };

  const removeContentItem = (index) => {
    const newContent = formData.content.filter((_, i) => i !== index);
    setFormData({ ...formData, content: newContent });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const url = formData._id
        ? `http://localhost:5000/api/blogs/${formData._id}`
        : "http://localhost:5000/api/blogs";
      const method = formData._id ? "put" : "post";

      const res = await axios[method](url, formData, {
        headers: { "x-auth-token": token },
      });
      onSave(res.data);
    } catch (err) {
      console.error("Error saving blog:", err);
      alert("Failed to save blog");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="bg-white/[0.03] border border-white/10 rounded-2xl p-8"
    >
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-2xl font-black tracking-tighter uppercase">
          {formData._id ? "Edit Journal Entry" : "New Journal Entry"}
        </h2>
        <button
          onClick={onCancel}
          className="text-white/40 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] tracking-[0.2em] font-bold text-white/40 uppercase ml-1">
              Title
            </label>
            <input
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Article Heading"
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 px-4 focus:outline-none focus:border-brand-pink/50 transition-all font-bold"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] tracking-[0.2em] font-bold text-white/40 uppercase ml-1">
              Category
            </label>
            <input
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="News, Tech, Life..."
              className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 px-4 focus:outline-none focus:border-brand-pink/50 transition-all"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] tracking-[0.2em] font-bold text-white/40 uppercase ml-1">
            Excerpt
          </label>
          <textarea
            name="excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            placeholder="Brief summary of the article..."
            className="w-full bg-white/[0.03] border border-white/10 rounded-xl py-4 px-4 focus:outline-none focus:border-brand-pink/50 transition-all h-24"
            required
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between mb-2">
            <label className="text-[10px] tracking-[0.2em] font-bold text-white/40 uppercase ml-1">
              Content Sections
            </label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => addContentItem("heading")}
                className="p-2 bg-white/5 hover:bg-brand-pink/20 rounded-lg transition-colors border border-white/10"
                title="Add Heading"
              >
                <Type className="w-4 h-4 text-brand-pink" />
              </button>
              <button
                type="button"
                onClick={() => addContentItem("paragraph")}
                className="p-2 bg-white/5 hover:bg-brand-pink/20 rounded-lg transition-colors border border-white/10"
                title="Add Paragraph"
              >
                <AlignLeft className="w-4 h-4 text-brand-pink" />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {formData.content.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                key={index}
                className="relative group"
              >
                <div className="absolute -left-10 top-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    type="button"
                    onClick={() => removeContentItem(index)}
                    className="text-red-500/50 hover:text-red-500"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className={`mt-4 px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-widest ${
                      item.type === "heading"
                        ? "bg-brand-pink text-white"
                        : "bg-white/10 text-white/40"
                    }`}
                  >
                    {item.type}
                  </div>
                  {item.type === "heading" ? (
                    <input
                      value={item.text}
                      onChange={(e) =>
                        handleContentChange(index, e.target.value)
                      }
                      placeholder="Enter heading..."
                      className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-brand-pink/50 transition-all font-black text-lg"
                    />
                  ) : (
                    <textarea
                      value={item.text}
                      onChange={(e) =>
                        handleContentChange(index, e.target.value)
                      }
                      placeholder="Enter paragraph text..."
                      className="flex-1 bg-white/[0.03] border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-brand-pink/50 transition-all min-h-[100px]"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 pt-6">
          <button
            type="submit"
            className="flex-1 bg-brand-pink hover:bg-brand-pink/90 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
          >
            <Save className="w-4 h-4" />
            SAVE ARTICLE
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default BlogForm;
