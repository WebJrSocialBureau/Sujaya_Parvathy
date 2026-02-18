import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import ExperienceDetail from "./components/ExperienceDetail";
import Expertise from "./components/Expertise";
import Awards from "./components/Awards";
import ValuesEducation from "./components/ValuesEducation";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AdminDashboard from "./components/AdminDashboard";
import BlogSection from "./components/BlogSection";
import BlogList from "./components/BlogList";
import BlogDetail from "./components/BlogDetail";

const MainLayout = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className="min-h-screen bg-[#080808] selection:bg-brand-pink selection:text-white scroll-smooth pt-20 lg:pt-0">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Timeline />
      <ExperienceDetail />
      <BlogSection />
      <Awards />
      <ValuesEducation />
      <Footer />
    </main>
  );
};

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" />;
  return children;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
