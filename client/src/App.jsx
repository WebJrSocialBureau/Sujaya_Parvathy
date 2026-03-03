import React, { useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Lenis from "lenis";
import { Toaster } from "react-hot-toast";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import ExperienceDetail from "./components/ExperienceDetail";
import Expertise from "./components/Expertise";
import Awards from "./components/Awards";
import ValuesEducation from "./components/ValuesEducation";
import Footer from "./components/Footer";
import BlogSection from "./components/BlogSection";

// Lazy load non-critical components
const Login = lazy(() => import("./components/Login"));
const Signup = lazy(() => import("./components/Signup"));
const AdminDashboard = lazy(() => import("./components/AdminDashboard"));
const BlogList = lazy(() => import("./components/BlogList"));
const BlogDetail = lazy(() => import("./components/BlogDetail"));

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-[#080808] flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-brand-pink border-t-transparent rounded-full animate-spin"></div>
  </div>
);

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
    <HelmetProvider>
      <Router>
        <Helmet>
          <title>Sujaya Parvathy | Award Winning Journalist</title>
          <meta
            name="description"
            content="Official website of Sujaya Parvathy - Award Winning Journalist and Storyteller."
          />
        </Helmet>
        <Toaster position="top-right" />
        <Suspense fallback={<PageLoader />}>
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
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}

export default App;
