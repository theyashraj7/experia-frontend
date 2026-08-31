import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShieldCheck,
  User,
} from "lucide-react";
import { IMAGES } from "@/data/mockData";
import { useAuth } from "@/context/AuthContext";

/**
 * Shared auth screen for both /login and /signup. Mode is derived from the
 * route, and the toggle link switches routes rather than local-only state,
 * so the URL always matches what's on screen. This is a prototype: submit
 * simulates success and routes straight into the dashboard — wire up your
 * real auth service in handleSubmit when ready.
 */

const TESTIMONIAL = {
  quote: "I didn't need another course. I needed twenty minutes with someone who'd already done it.",
  name: "Priya Kapoor",
  role: "Joined a live conversation with a Y Combinator founder",
  image: IMAGES.neha,
};

function GoogleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" {...props}>
      <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.24 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.2s2.7-6.2 6-6.2c1.9 0 3.15.8 3.88 1.5l2.6-2.5C16.9 3 14.7 2 12 2 6.9 2 2.75 6.1 2.75 11.2S6.9 20.4 12 20.4c6.9 0 9.4-4.8 9.4-7.3 0-.5-.05-.85-.12-1.2H12z" />
    </svg>
  );
}

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const { login } = useAuth();
  const isSignup = location.pathname === "/signup";
  const redirectTo = location.state?.from || "/dashboard";

  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field) => (event) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);
    // Prototype only — replace with a real auth call. Simulates success.
    setTimeout(() => {
      login();
      navigate(redirectTo, { replace: true });
    }, 500);
  };

  return (
    <main className="flex min-h-screen bg-black text-white selection:bg-violet-400/30 selection:text-white">
      {/* LEFT — form */}
      <div className="relative flex w-full flex-col justify-center px-6 py-10 sm:px-10 lg:w-1/2 lg:px-16 xl:px-24">
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-[-16rem] top-[-14rem] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.16)_0%,transparent_65%)]" />
        </div>

        <Link to="/" className="inline-flex w-fit items-center gap-1.5 font-accent text-sm text-white/50 transition hover:text-white">
          <ArrowLeft className="h-4 w-4" />
          Back to EXPÉRIA
        </Link>

        <div className="mx-auto w-full max-w-[400px]">
          <Link to="/" className="mt-10 block font-serif text-2xl tracking-[0.2em] text-white">
            EXP<span className="text-violet-300">É</span>RIA
          </Link>

          <motion.div
            key={isSignup ? "signup" : "login"}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
          >
            <h1 className="mt-8 font-serif text-3xl leading-tight text-white sm:text-[2.3rem]">
              {isSignup ? "Join EXPÉRIA." : "Welcome back."}
            </h1>
            <p className="mt-2.5 text-sm leading-relaxed text-white/50">
              {isSignup
                ? "Create an account to reserve access to live conversations with people who've actually done it."
                : "Log in to reserve your seat in the next live conversation."}
            </p>

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-3.5">
              {isSignup && (
                <label className="block">
                  <span className="mb-1.5 block font-accent text-xs font-medium text-white/60">Full name</span>
                  <div className="flex items-center gap-2.5 rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 transition focus-within:border-violet-300/60 focus-within:bg-white/[0.07]">
                    <User className="h-4 w-4 shrink-0 text-white/40" />
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange("name")}
                      placeholder="Ananya Iyer"
                      className="min-w-0 flex-1 bg-transparent font-accent text-sm text-white outline-none placeholder:text-white/30"
                    />
                  </div>
                </label>
              )}

              <label className="block">
                <span className="mb-1.5 block font-accent text-xs font-medium text-white/60">Email</span>
                <div className="flex items-center gap-2.5 rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 transition focus-within:border-violet-300/60 focus-within:bg-white/[0.07]">
                  <Mail className="h-4 w-4 shrink-0 text-white/40" />
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange("email")}
                    placeholder="you@email.com"
                    className="min-w-0 flex-1 bg-transparent font-accent text-sm text-white outline-none placeholder:text-white/30"
                  />
                </div>
              </label>

              <label className="block">
                <div className="mb-1.5 flex items-center justify-between">
                  <span className="font-accent text-xs font-medium text-white/60">Password</span>
                  {!isSignup && (
                    <Link to="/forgot-password" className="font-accent text-xs text-violet-300/80 transition hover:text-violet-200">
                      Forgot password?
                    </Link>
                  )}
                </div>
                <div className="flex items-center gap-2.5 rounded-xl border border-white/12 bg-white/[0.04] px-4 py-3 transition focus-within:border-violet-300/60 focus-within:bg-white/[0.07]">
                  <Lock className="h-4 w-4 shrink-0 text-white/40" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={8}
                    value={form.password}
                    onChange={handleChange("password")}
                    placeholder="••••••••"
                    className="min-w-0 flex-1 bg-transparent font-accent text-sm text-white outline-none placeholder:text-white/30"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    className="shrink-0 text-white/35 transition hover:text-white/70"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </label>

              <button
                type="submit"
                disabled={submitting}
                className="group mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-500 px-5 py-3.5 font-accent text-sm font-semibold text-white shadow-[0_12px_32px_rgba(109,78,255,0.28)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(109,78,255,0.4)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Please wait…" : isSignup ? "Create account" : "Log in"}
                {!submitting && <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />}
              </button>
            </form>

            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/10" />
              <span className="font-accent text-[0.68rem] uppercase tracking-[0.15em] text-white/30">or continue with</span>
              <div className="h-px flex-1 bg-white/10" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button type="button" className="flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] py-3 font-accent text-sm text-white/80 transition hover:border-white/25 hover:bg-white/[0.06]">
                <GoogleIcon />
                Google
              </button>
              <button type="button" className="flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] py-3 font-accent text-sm text-white/80 transition hover:border-white/25 hover:bg-white/[0.06]">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M16.365 1.43c0 1.14-.468 2.19-1.226 2.99-.85.9-2.223 1.6-3.36 1.51-.135-1.1.42-2.24 1.19-3.03.85-.87 2.29-1.51 3.4-1.47zm3.87 17.34c-.6 1.34-.89 1.94-1.66 3.12-1.08 1.65-2.6 3.71-4.49 3.73-1.68.02-2.11-1.1-4.39-1.09-2.28.01-2.75 1.11-4.43 1.09-1.89-.02-3.33-1.87-4.41-3.52C-.94 17.87.02 12.35 3.02 9.4c1.45-1.43 3.28-2.29 4.9-2.29 1.7 0 2.77 1.06 4.18 1.06 1.37 0 2.2-1.07 4.18-1.07 1.36 0 2.8.55 3.9 1.63-2.72 1.65-2.28 5.68.03 6.99z" /></svg>
                Apple
              </button>
            </div>

            <p className="mt-8 text-center font-accent text-sm text-white/45">
              {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
              <Link to={isSignup ? "/login" : "/signup"} className="font-semibold text-violet-300 transition hover:text-violet-200">
                {isSignup ? "Log in" : "Sign up"}
              </Link>
            </p>
          </motion.div>
        </div>
      </div>

      {/* RIGHT — visual / testimonial */}
      <div className="relative hidden w-1/2 overflow-hidden lg:block">
        <img src={TESTIMONIAL.image} alt="" className="absolute inset-0 h-full w-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/50 via-transparent to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-between p-12 xl:p-16">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-black/30 px-4 py-2 font-accent text-xs text-white/70">
            <ShieldCheck className="h-3.5 w-3.5 text-violet-300" />
            Real people. Verified experience.
          </span>

          <div className="max-w-md">
            <p className="font-serif text-2xl leading-snug text-white xl:text-[1.7rem]">“{TESTIMONIAL.quote}”</p>
            <div className="mt-5 flex items-center gap-3">
              <img src={TESTIMONIAL.image} alt="" className="h-10 w-10 rounded-full object-cover object-top" />
              <div>
                <p className="font-accent text-sm font-semibold text-white">{TESTIMONIAL.name}</p>
                <p className="font-accent text-xs text-white/50">{TESTIMONIAL.role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
