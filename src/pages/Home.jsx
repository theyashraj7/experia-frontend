import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  UserRound,
  CalendarClock,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  Play,
  Clock3,
  Users,
  ChevronRight,
  Plane,
  BriefcaseBusiness,
  HeartPulse,
  Rocket,
  Scale,
  Palette,
  Trophy,
  FlaskConical,
  Factory,
  Cpu,
  Music2,
  Utensils,
  Gamepad2,
  Stethoscope,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const heroAnimation = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.65,
    delay,
    ease: [0.22, 1, 0.36, 1],
  },
});

const FadeUp = ({ children, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const PrimaryButton = ({ children, to = "/explore", className = "" }) => (
  <Link to={to}>
    <Button
      className={`rounded-xl bg-white px-5 py-2.5 font-accent text-sm font-semibold text-[#12131d] transition hover:bg-violet-100 ${className}`}
    >
      {children}
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  </Link>
);

const SectionLabel = ({ children }) => (
  <p className="font-accent text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-violet-300/75">
    {children}
  </p>
);

const QUESTION_CARDS = [
  {
    icon: Plane,
    question:
      "What goes through a pilot's mind when an emergency happens at 35,000 feet?",
    tag: "Aviation",
  },
  {
    icon: BriefcaseBusiness,
    question:
      "What makes a VC lose interest in a startup in the first 10 minutes?",
    tag: "Business",
  },
  {
    icon: HeartPulse,
    question:
      "What does an experienced doctor notice that a textbook never teaches you?",
    tag: "Medicine",
  },
  {
    icon: Rocket,
    question:
      "What does nobody tell you before you build your first company?",
    tag: "Startups",
  },
  {
    icon: Scale,
    question:
      "How does an experienced lawyer know when a case isn't worth taking?",
    tag: "Law",
  },
  {
    icon: Palette,
    question:
      "How does a great designer know when something isn't good enough?",
    tag: "Design",
  },
  {
    icon: Trophy,
    question:
      "What actually separates elite athletes from everyone else?",
    tag: "Sports",
  },
  {
    icon: FlaskConical,
    question:
      "What does a scientist do when an experiment keeps failing?",
    tag: "Science",
  },
];

const UPCOMING_CONVERSATIONS = [
  {
    topic: "Life in the Cockpit",
    description:
      "What actually happens inside a pilot's mind when things go wrong at 35,000 feet?",
    name: "Capt. Rohit Verma",
    role: "Boeing 777 Captain",
    credibility: "20+ years · Commercial Aviation",
    date: "Upcoming",
    time: "7:00 PM IST",
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=900&q=85",
  },
  {
    topic: "Inside Venture Capital",
    description:
      "What makes an investor say yes — and what makes them quietly pass?",
    name: "Rohan Mehta",
    role: "Venture Capital Partner",
    credibility: "15+ years · Venture Capital",
    date: "Upcoming",
    time: "8:00 PM IST",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=85",
  },
  {
    topic: "The Future of Medicine",
    description:
      "What does an experienced doctor notice that patients rarely see?",
    name: "Dr. Ananya Iyer",
    role: "Physician & Researcher",
    credibility: "18+ years · Medicine",
    date: "Upcoming",
    time: "7:30 PM IST",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=85",
  },
  {
    topic: "Building from Zero",
    description:
      "What does nobody tell you before you build your first company?",
    name: "Kunal Shah",
    role: "Founder",
    credibility: "12+ years · Entrepreneurship",
    date: "Upcoming",
    time: "8:00 PM IST",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=900&q=85",
  },
];

const TOPICS = [
  { name: "Aviation", icon: Plane },
  { name: "Business", icon: BriefcaseBusiness },
  { name: "Finance", icon: BriefcaseBusiness },
  { name: "Medicine", icon: HeartPulse },
  { name: "Technology", icon: Cpu },
  { name: "Manufacturing", icon: Factory },
  { name: "Law", icon: Scale },
  { name: "Design", icon: Palette },
  { name: "Sports", icon: Trophy },
  { name: "Science", icon: FlaskConical },
  { name: "Music", icon: Music2 },
  { name: "Culinary Arts", icon: Utensils },
  { name: "Game Design", icon: Gamepad2 },
  { name: "Surgery", icon: Stethoscope },
];

const HOW_IT_WORKS = [
  {
    icon: Search,
    number: "1",
    title: "Find your question",
    description:
      "Start with something you've genuinely been wondering about.",
  },
  {
    icon: UserRound,
    number: "2",
    title: "Find someone who's lived it",
    description:
      "Discover someone with real experience in that world.",
  },
  {
    icon: CalendarClock,
    number: "3",
    title: "Reserve your seat",
    description: "Save your place in the conversation.",
  },
  {
    icon: MessageSquare,
    number: "4",
    title: "Ask",
    description:
      "Listen to their experience. Ask what you actually want to know.",
  },
];

const FAQS = [
  {
    question: "What exactly happens in an EXPÉRIA conversation?",
    answer:
      "EXPÉRIA conversations are live sessions where you can hear directly from people with real-world experience and ask questions during the conversation.",
  },
  {
    question: "Can I ask the expert questions?",
    answer:
      "Yes. Asking is the point. Questions from participants help shape the conversation.",
  },
  {
    question: "Who are the people I can hear from?",
    answer:
      "Professionals, founders, researchers, practitioners and other experienced people who can share relevant first-hand experience.",
  },
  {
    question: "How does EXPÉRIA verify experts?",
    answer:
      "We review identity and relevant professional or experience information where applicable before experts are presented on the platform.",
  },
  {
    question:
      "What makes EXPÉRIA different from watching an expert on YouTube?",
    answer:
      "YouTube lets you watch someone else's conversation. EXPÉRIA lets you enter one, listen directly and ask your own question.",
  },
  {
    question: "Is EXPÉRIA a course platform?",
    answer:
      "No. EXPÉRIA is built around live conversations and direct access to people with real-world experience.",
  },
  {
    question: "Why is there a reservation fee?",
    answer:
      "The reservation helps us keep conversations intentional and seats meaningful while making access simple.",
  },
  {
    question: "What happens if a conversation is cancelled?",
    answer:
      "If a conversation is cancelled, the reservation process will provide the applicable next step according to EXPÉRIA's cancellation policy.",
  },
];

const LiveConversationCard = () => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ duration: 0.25 }}
    className="group relative overflow-hidden rounded-3xl border border-violet-300/15 bg-white/[0.045] p-4 shadow-2xl shadow-violet-950/20 backdrop-blur-xl sm:p-5"
  >
    <div className="relative overflow-hidden rounded-2xl">
      <img
        src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=85"
        alt="Live conversation"
        className="h-[240px] w-full object-cover transition duration-700 group-hover:scale-[1.03] sm:h-[320px]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

      <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 backdrop-blur-md">
        <span className="h-2 w-2 animate-pulse rounded-full bg-red-400" />
        <span className="font-accent text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-white">
          Live now
        </span>
      </div>

      <div className="absolute bottom-4 left-4 right-4">
        <div className="mb-2 flex items-center gap-2 text-white/70">
          <Users className="h-3.5 w-3.5" />
          <span className="text-xs">Live conversation</span>
        </div>

        <h3 className="font-serif text-2xl leading-tight text-white sm:text-3xl">
          Inside the Mind of a Founder
        </h3>
      </div>
    </div>

    <div className="px-1 pb-1 pt-5">
      <p className="font-serif text-xl leading-snug text-white/90">
        What actually happens when you're building a company from nothing?
      </p>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div>
          <p className="font-accent text-sm font-medium text-white">
            Arjun Malhotra
          </p>
          <p className="mt-1 text-xs text-white/45">
            Founder & CEO · 10+ years building companies
          </p>
        </div>

        <div className="hidden items-center gap-2 rounded-xl border border-white/10 bg-white/[0.035] px-3 py-2 sm:flex">
          <MessageSquare className="h-3.5 w-3.5 text-violet-300" />
          <span className="text-xs text-white/55">Questions being discussed</span>
        </div>
      </div>

      <Link
        to="/live"
        className="mt-5 flex w-full items-center justify-center rounded-xl bg-white px-4 py-3 font-accent text-sm font-semibold text-[#12131d] transition hover:bg-violet-100"
      >
        Enter the conversation
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  </motion.div>
);

const QuestionCard = ({ item, index }) => {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.05, 0.25),
      }}
      whileHover={{ y: -4 }}
      className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-violet-300/20 hover:bg-white/[0.055]"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-400/10 text-violet-200">
          <Icon className="h-5 w-5" />
        </div>

        <span className="rounded-full border border-white/10 px-2.5 py-1 font-accent text-[0.62rem] font-medium uppercase tracking-wider text-white/40">
          {item.tag}
        </span>
      </div>

      <h3 className="mt-5 font-serif text-xl leading-snug text-white/95">
        {item.question}
      </h3>

      <Link
        to={`/questions?topic=${encodeURIComponent(item.tag.toLowerCase())}`}
        className="mt-5 inline-flex items-center font-accent text-xs font-semibold text-violet-200 transition group-hover:text-white"
      >
        Explore this question
        <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
      </Link>
    </motion.div>
  );
};

const ConversationCard = ({ conversation }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ duration: 0.25 }}
    className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035]"
  >
    <div className="relative overflow-hidden">
      <img
        src={conversation.image}
        alt={conversation.topic}
        className="h-52 w-full object-cover transition duration-700 group-hover:scale-[1.04]"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      <div className="absolute bottom-3 left-3 rounded-full border border-white/15 bg-black/35 px-3 py-1.5 backdrop-blur-md">
        <span className="text-[0.68rem] text-white/80">
          {conversation.date} · {conversation.time}
        </span>
      </div>
    </div>

    <div className="p-5">
      <h3 className="font-serif text-xl leading-tight text-white transition group-hover:text-violet-100">
        {conversation.topic}
      </h3>

      <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/55">
        {conversation.description}
      </p>

      <div className="mt-4">
        <p className="font-accent text-sm font-medium text-white">
          {conversation.name}
        </p>

        <p className="mt-1 text-xs text-white/45">
          {conversation.role} · {conversation.credibility}
        </p>
      </div>

      <Link
        to="/live"
        className="mt-5 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-medium text-white transition hover:border-violet-300/20 hover:bg-violet-400/10"
      >
        <span>Reserve your seat</span>
        <ArrowRight className="h-4 w-4 text-violet-200" />
      </Link>
    </div>
  </motion.div>
);

const Home = () => {
  const handleSearch = (event) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const query = form.get("query");

    if (query) {
      window.location.href = `/explore?q=${encodeURIComponent(query)}`;
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#080910] text-white">
      {/* HERO */}
      <section className="relative px-6 pb-16 pt-14 sm:pb-20 lg:px-10 lg:pb-24 lg:pt-20">
        <div className="pointer-events-none absolute left-1/2 top-[-180px] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[130px]" />

        <div className="relative mx-auto max-w-6xl text-center">
          <motion.div {...heroAnimation(0)}>
            <p className="font-accent text-xs font-semibold uppercase tracking-[0.32em] text-violet-300/75">
              EXPÉRIA
            </p>
          </motion.div>

          <motion.h1
            {...heroAnimation(0.08)}
            className="mx-auto mt-7 max-w-4xl font-serif text-[2.35rem] leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl sm:leading-[1.02] lg:text-[5rem]"
          >
            Some Answers Can't Be
            <br />
            <span className="bg-gradient-to-r from-violet-200 via-violet-400 to-indigo-300 bg-clip-text text-transparent">
              Googled.
            </span>
          </motion.h1>

          <motion.p
            {...heroAnimation(0.16)}
            className="mx-auto mt-6 max-w-[650px] text-sm leading-relaxed text-white/55 sm:text-base lg:text-lg"
          >
            The internet can give you information. EXPÉRIA lets you ask
            someone who's actually lived it.
          </motion.p>

          <motion.form
            {...heroAnimation(0.24)}
            onSubmit={handleSearch}
            className="mx-auto mt-7 max-w-[560px]"
          >
            <div className="flex items-center rounded-2xl border border-white/10 bg-white/[0.055] p-1.5 shadow-2xl shadow-black/20 backdrop-blur-xl">
              <Search className="ml-3 h-4 w-4 shrink-0 text-white/35" />

              <input
                name="query"
                type="text"
                placeholder="What are you curious about?"
                className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-white/30"
              />

              <button
                type="submit"
                className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-white px-4 py-2.5 font-accent text-xs font-semibold text-[#12131d] transition hover:bg-violet-100 active:scale-[0.97]"
              >
                Find someone
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.form>

          <motion.div
            {...heroAnimation(0.3)}
            className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
          >
            {["Aviation", "Finance", "Medicine", "Startups", "Manufacturing"].map(
              (topic) => (
                <Link
                  key={topic}
                  to={`/explore?topic=${encodeURIComponent(topic.toLowerCase())}`}
                  className="text-xs text-white/35 transition hover:text-violet-200"
                >
                  {topic}
                </Link>
              )
            )}
          </motion.div>

          <motion.p
            {...heroAnimation(0.36)}
            className="mt-7 font-accent text-[0.68rem] font-medium uppercase tracking-[0.2em] text-white/30"
          >
            Ask. Listen. Learn from experience.
          </motion.p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="relative px-6 py-16 lg:px-10 lg:py-24">
        <FadeUp className="mx-auto max-w-4xl text-center">
          <SectionLabel>You've already searched for the answer.</SectionLabel>

          <h2 className="mt-5 font-serif text-3xl leading-[1.08] tracking-[-0.025em] text-white sm:text-4xl lg:text-5xl">
            You've watched the videos.
            <br />
            Read the articles.
            <br />
            Asked AI.
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg">
            And sometimes you're still left wondering:
          </p>

          <p className="mt-5 font-serif text-2xl italic text-violet-200 sm:text-3xl">
            “But what is it actually like?”
          </p>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/50 sm:text-lg">
            Information can tell you <span className="text-white/80">what to do.</span>
            <br />
            Experience can tell you{" "}
            <span className="text-white">what happens when you do it.</span>
          </p>
        </FadeUp>
      </section>

      {/* QUESTIONS */}
      <section className="relative px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <FadeUp className="mb-8 max-w-3xl">
            <SectionLabel>Questions worth asking</SectionLabel>

            <h2 className="mt-4 font-serif text-3xl leading-tight tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl">
              The questions that matter aren't always in the textbook.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/45 sm:text-base">
              Sometimes the answer belongs to someone who's already lived it.
            </p>
          </FadeUp>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {QUESTION_CARDS.map((item, index) => (
              <QuestionCard key={item.question} item={item} index={index} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/questions"
              className="inline-flex items-center text-sm font-medium text-violet-200 transition hover:text-white"
            >
              View all questions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* LIVE CONVERSATION */}
      <section className="relative px-6 py-16 lg:px-10 lg:py-24">
        <div className="pointer-events-none absolute right-[-120px] top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <FadeUp>
            <SectionLabel>You've seen what they achieved.</SectionLabel>

            <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.025em] text-white sm:text-5xl">
              Now ask them why.
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-white/50 sm:text-lg">
              You can watch their interviews. Follow their work. Read about
              their success.
            </p>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/50 sm:text-lg">
              But watching someone's experience isn't the same as having a
              conversation with them.
            </p>

            <p className="mt-6 font-serif text-xl text-white sm:text-2xl">
              EXPÉRIA closes that distance.
            </p>
          </FadeUp>

          <FadeUp>
            <LiveConversationCard />
          </FadeUp>
        </div>
      </section>

      {/* UPCOMING */}
      <section className="relative px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <FadeUp className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <SectionLabel>Live access</SectionLabel>

              <h2 className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl">
                Conversations you can enter.
              </h2>

              <p className="mt-3 max-w-2xl text-sm text-white/45 sm:text-base">
                Don't just watch from the outside. Enter the conversation.
              </p>
            </div>

            <Link
              to="/live"
              className="inline-flex shrink-0 items-center text-sm font-medium text-violet-200 hover:text-white"
            >
              View all
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </FadeUp>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {UPCOMING_CONVERSATIONS.map((conversation) => (
              <ConversationCard
                key={conversation.topic}
                conversation={conversation}
              />
            ))}
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="relative px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <FadeUp className="mb-8">
            <SectionLabel>Explore</SectionLabel>

            <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">
              What are you curious about?
            </h2>
          </FadeUp>

          <div className="flex flex-wrap gap-3">
            {TOPICS.map((topic) => {
              const Icon = topic.icon;

              return (
                <Link
                  key={topic.name}
                  to={`/explore?topic=${encodeURIComponent(topic.name.toLowerCase())}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2.5 transition hover:border-violet-300/20 hover:bg-violet-400/10"
                >
                  <Icon className="h-3.5 w-3.5 text-white/40 transition group-hover:text-violet-200" />
                  <span className="text-sm text-white/60 transition group-hover:text-white">
                    {topic.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* BRAND THESIS */}
      <section className="relative overflow-hidden px-6 py-20 lg:px-10 lg:py-28">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/8 blur-[130px]" />

        <FadeUp className="relative mx-auto max-w-4xl text-center">
          <SectionLabel>The difference</SectionLabel>

          <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            Information tells you
            <br />
            <span className="text-white/45">what happened.</span>
          </h2>

          <p className="mt-5 font-serif text-3xl leading-tight text-violet-200 sm:text-4xl lg:text-5xl">
            Experience tells you why.
          </p>

          <div className="mx-auto mt-8 max-w-2xl space-y-3 text-sm leading-relaxed text-white/45 sm:text-base">
            <p>Ask what you actually want to know.</p>
            <p>Hear how people really think.</p>
            <p>Understand what happened along the way.</p>
          </div>
        </FadeUp>
      </section>

      {/* HOW IT WORKS */}
      <section className="relative px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <FadeUp className="mb-10">
            <SectionLabel>The journey</SectionLabel>

            <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">
              From “I wonder...” to “Now I know.”
            </h2>
          </FadeUp>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((step) => {
              const Icon = step.icon;

              return (
                <FadeUp key={step.number}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-400/10 text-violet-200">
                        <Icon className="h-5 w-5" />
                      </div>

                      <span className="font-accent text-xs text-white/25">
                        0{step.number}
                      </span>
                    </div>

                    <h3 className="mt-6 font-serif text-xl text-white">
                      {step.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-white/45">
                      {step.description}
                    </p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="relative px-6 py-16 lg:px-10 lg:py-20">
        <FadeUp className="mx-auto max-w-5xl">
          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:p-10 lg:p-12">
            <div className="max-w-2xl">
              <SectionLabel>Trust</SectionLabel>

              <h2 className="mt-4 font-serif text-3xl leading-tight text-white sm:text-4xl">
                Credentials tell you who they are.
                <br />
                <span className="text-violet-200">
                  Experience tells you what they know.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-white/45 sm:text-base">
                EXPÉRIA brings you closer to people who have actually spent
                years doing the work — their decisions, mistakes, failures and
                breakthroughs.
              </p>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {[
                {
                  icon: ShieldCheck,
                  title: "Identity",
                  text: "Reviewed",
                },
                {
                  icon: CheckCircle2,
                  title: "Background",
                  text: "Reviewed where applicable",
                },
                {
                  icon: UserRound,
                  title: "Experience",
                  text: "Relevant to the conversation",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.025] p-5"
                  >
                    <Icon className="h-5 w-5 text-violet-200" />
                    <p className="mt-4 text-sm font-medium text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-white/40">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </FadeUp>
      </section>

      {/* FAQ */}
      <section className="relative px-6 py-16 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <FadeUp className="mb-8">
            <SectionLabel>Questions</SectionLabel>

            <h2 className="mt-3 font-serif text-3xl text-white sm:text-4xl">
              Frequently asked questions.
            </h2>
          </FadeUp>

          <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.02]">
            {FAQS.map((faq, index) => (
              <details
                key={faq.question}
                className="group px-5 py-5 sm:px-7"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-medium text-white sm:text-base">
                  <span>{faq.question}</span>

                  <ChevronRight className="h-4 w-4 shrink-0 text-white/35 transition-transform duration-200 group-open:rotate-90" />
                </summary>

                <p className="max-w-3xl pr-7 pt-4 text-sm leading-relaxed text-white/45">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden px-6 py-20 lg:px-10 lg:py-32">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[130px]" />

        <FadeUp className="relative mx-auto max-w-4xl text-center">
          <SectionLabel>EXPÉRIA</SectionLabel>

          <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
            You have a question.
            <br />
            <span className="text-violet-200">
              Someone has already lived the answer.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-relaxed text-white/45 sm:text-base">
            Don't end your search with another article.
            <br />
            Ask someone who's already been there.
          </p>

          <div className="mt-9">
            <PrimaryButton to="/explore" className="px-7 py-3">
              Find them
            </PrimaryButton>
          </div>

          <p className="mt-5 font-accent text-[0.68rem] uppercase tracking-[0.2em] text-white/25">
            Your next question might be worth asking.
          </p>
        </FadeUp>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-12 lg:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="font-serif text-2xl text-white">
              EXPÉRIA
            </Link>

            <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/40">
              Real people. Real experience. Real access.
            </p>
          </div>

          <div>
            <p className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Explore
            </p>

            <div className="mt-4 space-y-3">
              <Link
                to="/live"
                className="block text-sm text-white/40 transition hover:text-white"
              >
                Conversations
              </Link>
              <Link
                to="/questions"
                className="block text-sm text-white/40 transition hover:text-white"
              >
                Questions
              </Link>
              <Link
                to="/topics"
                className="block text-sm text-white/40 transition hover:text-white"
              >
                Topics
              </Link>
            </div>
          </div>

          <div>
            <p className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              For Experts
            </p>

            <div className="mt-4 space-y-3">
              <Link
                to="/become-an-expert"
                className="block text-sm text-white/40 transition hover:text-white"
              >
                Become an EXPÉRIA expert
              </Link>
              <Link
                to="/expert-guidelines"
                className="block text-sm text-white/40 transition hover:text-white"
              >
                Expert guidelines
              </Link>
            </div>
          </div>

          <div>
            <p className="font-accent text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              Company
            </p>

            <div className="mt-4 space-y-3">
              <Link
                to="/about"
                className="block text-sm text-white/40 transition hover:text-white"
              >
                About
              </Link>
              <Link
                to="/mission"
                className="block text-sm text-white/40 transition hover:text-white"
              >
                Mission
              </Link>
              <Link
                to="/contact"
                className="block text-sm text-white/40 transition hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/25">
            ©️ 2026 EXPÉRIA. All rights reserved.
          </p>

          <p className="max-w-2xl text-xs leading-relaxed text-white/25 sm:text-right">
            Conversations on EXPÉRIA are educational and don't replace
            professional medical, legal, or financial advice.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Home;
