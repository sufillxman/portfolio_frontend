import { useEffect, useMemo, useState } from "react";
import useInViewReveal from "../hooks/useInViewReveal";
import axios from "axios";

// Yeh code use karke React Django ko bulayega

const roles = [
  "AI + Web + API Fullstack Developer",
  "Django REST Framework Architect",
  "React & Tailwind Experience Designer",
];

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [ref, visible] = useInViewReveal();
  const [projectsData, setProjectsData] = useState([]);

  // 2. Component load hote hi API call karne ke liye useEffect
  useEffect(() => {
    // Live env variable use kar rahe hain, agar nahi mila toh default localhost lega
    const apiUrl = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000";

    axios
      .get(`${apiUrl}/api/projects/`)
      .then((response) => {
        console.log("Mera Data Aa Gaya:", response.data);
        setProjectsData(response.data); // Data ko state me store kar liya
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }, []);

  const currentRole = useMemo(
    () => roles[textIndex % roles.length],
    [textIndex],
  );

  useEffect(() => {
    const typingSpeed = deleting ? 40 : 70;
    const isComplete = typed.length === currentRole.length && !deleting;
    const timeout = window.setTimeout(
      () => {
        if (!deleting) {
          if (typed.length < currentRole.length) {
            setTyped(currentRole.slice(0, typed.length + 1));
          } else {
            setDeleting(true);
          }
        } else {
          if (typed.length > 0) {
            setTyped(currentRole.slice(0, typed.length - 1));
          } else {
            setDeleting(false);
            setTextIndex((prev) => prev + 1);
          }
        }
      },
      isComplete ? 1100 : typingSpeed,
    );

    return () => window.clearTimeout(timeout);
  }, [typed, deleting, currentRole]);

  return (
    <section
      id="home"
      ref={ref}
      className={`relative overflow-hidden px-2 pt-32 pb-16 md:px-0 transition duration-700 ${visible ? "revealed" : ""}`}
    >
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl"></div>
        <div className="floating-element absolute top-40 right-20 w-12 h-12 bg-purple-500/20 rounded-full blur-lg animation-delay-2"></div>
        <div className="floating-element absolute bottom-32 left-1/4 w-20 h-20 bg-blue-500/15 rounded-full blur-2xl animation-delay-4"></div>
        <div className="pulse-3d absolute top-1/2 right-10 w-8 h-8 bg-cyan-400/30 rounded-full"></div>
      </div>

      <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-700/40 bg-slate-950/75 px-6 py-16 shadow-panel backdrop-blur-xl md:px-12 will-change-transform">
        {/* MAIN GRID */}
        <div className="grid gap-10 lg:grid-cols-[1.45fr_1fr] items-start">
          {/* LEFT COLUMN: Intro Text & Buttons */}
          <div className="space-y-8">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-cyan-300/80">
                Portfolio
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl handwritten">
                I&apos;m{" "}
                <span className="text-cyan-300 text-glow">Sufill X Man</span> —
                building fast AI-enabled web experiences.
              </h1>
              <p className="mt-5 max-w-2xl text-slate-300/90 leading-8">
                Modern fullstack portfolio with Django REST Framework backend,
                React frontend, and a polished coder-style interface that feels
                professional and confident.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="btn-primary w-full text-center sm:w-auto"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Live Build Status Card */}
          <div className="glass-card group relative overflow-hidden rounded-[2rem] border border-cyan-500/10 bg-slate-900/75 p-6 shadow-glow">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_20%)] opacity-80" />
            <div className="relative z-10 space-y-4">
              <p className="text-sm uppercase tracking-[0.26em] text-cyan-200/80">
                Live build status
              </p>
              <div className="rounded-3xl border border-slate-700/50 bg-slate-950/85 p-5 text-sm text-slate-300">
                <p className="font-mono text-cyan-300">
                  const createPortfolio = async () =&gt; {"{"}
                </p>
                <p className="mt-2 font-mono text-slate-200">
                  {" "}
                  await deploy();
                </p>
                <p className="font-mono text-slate-200">
                  {" "}
                  return 'fullstack mastery';
                </p>
                <p className="font-mono text-cyan-300">{"}"};</p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-700/60 bg-slate-950/90 p-4 text-sm">
                  <p className="text-cyan-300">Backend</p>
                  <p className="mt-2 font-semibold text-white">Django + DRF</p>
                </div>
                <div className="rounded-3xl border border-slate-700/60 bg-slate-950/90 p-4 text-sm">
                  <p className="text-cyan-300">Frontend</p>
                  <p className="mt-2 font-semibold text-white">
                    React + Tailwind
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2  rounded-3xl border border-cyan-400/20 bg-slate-900/80 p-6 text-slate-100 shadow-glow will-change-transform w-full mt-2">
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-200/80 mb-4">
              I craft
            </p>
            <div className="flex flex-wrap items-baseline gap-3 min-h-[3rem] sm:min-h-[4rem] md:min-h-[3rem]">
              <p className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                {typed}
              </p>
              <span className="h-8 w-1 bg-cyan-300 animate-pulse rounded-sm" />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
