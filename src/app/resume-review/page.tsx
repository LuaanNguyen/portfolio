import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../components/Footer";
import BlogHeader from "../components/blog/BlogHeader";
import { FaArrowRight, FaHeart } from "react-icons/fa6";
import { FiCheckCircle } from "react-icons/fi";
import { BsStars } from "react-icons/bs";

// ─── Replace these before going live ─────────────────────────────────────────
const BOOKING_URL = "https://cal.com/placeholder"; // TODO: replace with your booking link
const GOFUNDME_URL = "https://gofundme.com/placeholder"; // TODO: replace with your GoFundMe link
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Resume Review | Luan Nguyen",
  description:
    "1:1 resume review sessions for students and early-career candidates targeting SWE internships. Proceeds support a cancer-related fundraiser through GoFundMe.",
  alternates: {
    canonical: "https://luannguyen.net/resume-review",
  },
  openGraph: {
    type: "website",
    url: "https://luannguyen.net/resume-review",
    title: "Resume Review | Luan Nguyen",
    description:
      "Honest, practical resume feedback for SWE internships. Proceeds go to a cancer-related GoFundMe fundraiser.",
    siteName: "Luan Nguyen's Portfolio",
    images: [{ url: "/portfolio_highres.png", width: 1920, height: 1440, alt: "Luan Nguyen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume Review | Luan Nguyen",
    description:
      "Honest, practical resume feedback for SWE internships. Proceeds go to a cancer-related GoFundMe fundraiser.",
    images: ["https://luannguyen.net/portfolio_highres.png"],
    creator: "@luaan_ng",
  },
};

// ─── CTA Buttons ─────────────────────────────────────────────────────────────

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 bg-spotify-green hover:bg-spotify-dark-green text-black font-bold px-6 py-3 rounded-full transition-all duration-200 hover:scale-105 text-sm"
    >
      {children}
    </a>
  );
}

function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 border border-[#727272] hover:border-white text-white font-bold px-6 py-3 rounded-full transition-all duration-200 hover:scale-105 text-sm hover:bg-white hover:text-black"
    >
      {children}
    </a>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-2xl">
        <p className="text-spotify-green text-sm font-semibold tracking-widest uppercase mb-4">
          1:1 resume review
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5 normal-case">
          Get honest feedback on your SWE internship resume.
        </h1>
        <p className="text-spotify-light-gray text-base md:text-lg leading-relaxed mb-8 max-w-xl">
          practical, line-by-line resume feedback for students and early-career
          candidates. sessions are pay-what-you-can, and proceeds go directly to
          a cancer-related fundraiser through gofundme.
        </p>
        <div className="flex flex-wrap gap-3">
          <PrimaryButton href={BOOKING_URL}>
            book a session <FaArrowRight className="text-xs" />
          </PrimaryButton>
          <SecondaryButton href={GOFUNDME_URL}>
            <FaHeart className="text-xs text-spotify-green" /> support the fundraiser
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}

// ─── Credibility ─────────────────────────────────────────────────────────────

const companies = ["amazon web services", "fox corporation", "ebay"];

function Credibility() {
  return (
    <section className="py-10 border-t border-white/10">
      <h2 className="text-xl font-semibold text-white mb-6">why me</h2>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4 text-spotify-light-gray text-sm leading-relaxed">
          <p>
            i&apos;ve been through the internship grind — submitted over 1,000
            applications, survived the rejection cycles, and eventually landed
            roles at companies i genuinely wanted to work at.
          </p>
          <p>
            i&apos;m not a recruiter or a career coach. i&apos;m a cs student who figured
            out what works through a lot of trial, error, and honest feedback
            from people who helped me. this is me paying that forward.
          </p>
          <p>
            i&apos;ve reviewed resumes informally for friends and peers, and i know
            what makes a candidate look credible vs. forgettable on paper —
            especially for swe internship roles at mid-size to large companies.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-spotify-light-gray text-xs uppercase tracking-widest mb-4">
            internship experience at
          </p>
          <div className="flex flex-wrap gap-2">
            {companies.map((c) => (
              <span
                key={c}
                className="bg-spotify-light-dark border border-white/10 text-spotify-white text-xs font-medium px-4 py-2 rounded-full"
              >
                {c}
              </span>
            ))}
          </div>
          <p className="text-spotify-light-gray/60 text-xs pt-2">
            + research and ai lab experience at arizona state university
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── What You Get ─────────────────────────────────────────────────────────────

const offerings = [
  {
    title: "line-by-line feedback",
    description:
      "we go through every bullet, section, and word on your resume together. nothing gets skipped.",
  },
  {
    title: "stronger bullets",
    description:
      "i&apos;ll help you rewrite weak or vague bullets into action-driven, quantifiable impact statements.",
  },
  {
    title: "internship positioning",
    description:
      "advice on how to frame your experience, projects, and skills specifically for swe intern roles.",
  },
  {
    title: "honest assessment",
    description:
      "i&apos;ll tell you what&apos;s working and what isn&apos;t — including the things most people are too polite to say.",
  },
];

function WhatYouGet() {
  return (
    <section className="py-10 border-t border-white/10">
      <h2 className="text-xl font-semibold text-white mb-8">what you get</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {offerings.map((item) => (
          <div
            key={item.title}
            className="bg-spotify-light-dark rounded-xl p-5 border border-white/5 hover:border-spotify-green/30 transition-colors duration-200"
          >
            <div className="flex items-start gap-3">
              <FiCheckCircle className="text-spotify-green text-lg mt-0.5 shrink-0" />
              <div>
                <h3 className="text-white font-semibold text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-spotify-light-gray text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────

const steps = [
  {
    number: "01",
    title: "book a slot",
    description:
      "pick a time that works for you through the booking link. sessions are 30–45 minutes.",
  },
  {
    number: "02",
    title: "send your resume",
    description:
      "share a pdf of your current resume before the session so i can review it in advance.",
  },
  {
    number: "03",
    title: "get feedback",
    description:
      "we meet, go through your resume together, and you leave with specific, actionable notes.",
  },
];

function HowItWorks() {
  return (
    <section className="py-10 border-t border-white/10">
      <h2 className="text-xl font-semibold text-white mb-8">how it works</h2>
      <div className="grid sm:grid-cols-3 gap-4">
        {steps.map((step) => (
          <div key={step.number} className="bg-spotify-light-dark rounded-xl p-5 border border-white/5">
            <p className="text-spotify-green font-bold text-2xl mb-3 font-mono">
              {step.number}
            </p>
            <h3 className="text-white font-semibold text-sm mb-2">
              {step.title}
            </h3>
            <p className="text-spotify-light-gray text-sm leading-relaxed">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Fundraiser ───────────────────────────────────────────────────────────────

function Fundraiser() {
  return (
    <section className="py-10 border-t border-white/10">
      <div className="bg-spotify-light-dark rounded-xl p-6 md:p-8 border border-spotify-green/20">
        <div className="flex items-center gap-2 mb-4">
          <FaHeart className="text-spotify-green text-lg" />
          <p className="text-spotify-green text-sm font-semibold uppercase tracking-widest">
            the fundraiser
          </p>
        </div>
        <h2 className="text-xl md:text-2xl font-bold text-white mb-4 normal-case">
          this is about more than resumes.
        </h2>
        <div className="space-y-3 text-spotify-light-gray text-sm leading-relaxed max-w-2xl mb-6">
          <p>
            all proceeds from these sessions go directly to a cancer-related
            fundraiser through gofundme. i wanted to find a way to do something
            useful with my time while raising money for a cause that is close to
            my heart.
          </p>
          <p>
            i&apos;m not charging a fixed rate. if you can contribute something for
            the session, please donate what feels right to the gofundme link
            below. if you genuinely can&apos;t afford to donate, reach out anyway —
            i&apos;ll still do the session.
          </p>
        </div>
        <SecondaryButton href={GOFUNDME_URL}>
          <FaHeart className="text-xs" /> donate to the fundraiser
        </SecondaryButton>
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "who is this for?",
    a: "students and early-career candidates applying for software engineering internships or new grad roles. if you have less than 2 years of industry experience, this is probably useful for you.",
  },
  {
    q: "what kind of resumes can you help with?",
    a: "cs, software engineering, and adjacent technical fields. i&apos;m most useful for people targeting intern or new grad roles at tech companies — startups, mid-size, or large.",
  },
  {
    q: "will this guarantee me an interview?",
    a: "no. i&apos;ll help you put your best resume forward, but hiring decisions involve a lot of factors i can&apos;t control. what i can do is help make sure your resume isn&apos;t the reason you&apos;re getting filtered out.",
  },
  {
    q: "how does the donation work?",
    a: "after booking a session, please make a donation of whatever amount feels right directly to the gofundme link. there's no enforced minimum — this is pay-what-you-can. 100% of donations go to the fundraiser.",
  },
  {
    q: "what if i can&apos;t afford to donate?",
    a: "reach out to me directly. i&apos;ll still do the session. the fundraiser matters to me, but so does actually helping people who need it.",
  },
];

function FAQ() {
  return (
    <section className="py-10 border-t border-white/10">
      <h2 className="text-xl font-semibold text-white mb-8">
        common questions
      </h2>
      <div className="space-y-0 divide-y divide-white/10">
        {faqs.map((faq) => (
          <div key={faq.q} className="py-5">
            <h3 className="text-white font-semibold text-sm mb-2">{faq.q}</h3>
            <p className="text-spotify-light-gray text-sm leading-relaxed">
              {faq.a}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="py-10 border-t border-white/10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div>
          <h2 className="text-lg font-semibold text-white mb-1 normal-case">
            ready to get started?
          </h2>
          <p className="text-spotify-light-gray text-sm">
            book a 30–45 min session. bring your resume and your questions.
          </p>
        </div>
        <PrimaryButton href={BOOKING_URL}>
          book a session <FaArrowRight className="text-xs" />
        </PrimaryButton>
      </div>
      <p className="text-spotify-light-gray/50 text-xs mt-8 max-w-2xl leading-relaxed border-t border-white/5 pt-6">
        disclaimer: this is practical guidance based on my own experience
        recruiting for and landing software engineering internships. it is not
        an official recruiting service, and sessions do not guarantee interview
        outcomes or job offers.
      </p>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ResumeReviewPage() {
  return (
    <div className="min-h-screen text-white lowercase">
      <div className="max-md:mx-4 max-md:mt-2 mx-40 mt-4">
        <BlogHeader
          title=""
          backLink="/"
          backText="back to portfolio"
        />
        <Hero />
        <Credibility />
        <WhatYouGet />
        <HowItWorks />
        <Fundraiser />
        <FAQ />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
}
