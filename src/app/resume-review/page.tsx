import type { Metadata } from "next";
import Footer from "../components/Footer";
import BlogHeader from "../components/blog/BlogHeader";
import { FaHeart } from "react-icons/fa6";
import { FiCheckCircle } from "react-icons/fi";
import { SiOpenai, SiFox } from "react-icons/si";
import Image from "next/image";

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

// ─── Buttons ──────────────────────────────────────────────────────────────────

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
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

// ─── Hero + Fundraiser ────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-2xl">
        <p className="text-spotify-green text-sm font-semibold tracking-widest uppercase mb-4">
          1:1 resume review · 30 min
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5 normal-case">
          Get honest feedback on your SWE internship resume.
        </h1>
        <p className="text-spotify-light-gray text-base md:text-lg leading-relaxed mb-6 max-w-xl">
          practical, line-by-line feedback for students targeting software engineering internships.
        </p>
        <div className="flex items-start gap-3 bg-spotify-light-dark border border-spotify-green/20 rounded-xl px-5 py-4 mb-8 max-w-xl">
          <FaHeart className="text-spotify-green mt-0.5 shrink-0" />
          <p className="text-spotify-light-gray text-sm leading-relaxed">
            pay-what-you-can. all proceeds go to a cancer-related fundraiser on gofundme,
            a cause that&apos;s close to my heart.{" "}
            <a
              href={GOFUNDME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-spotify-green hover:text-green-400 underline underline-offset-2 transition-colors duration-200"
            >
              donate here.
            </a>
          </p>
        </div>
        <PrimaryButton href={BOOKING_URL}>
          <FaHeart className="text-xs" /> book a session
        </PrimaryButton>
      </div>
    </section>
  );
}

// ─── Credibility ─────────────────────────────────────────────────────────────

const companies = [
  {
    label: "amazon web services",
    logo: (
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg"
        alt="Amazon Web Services"
        width={44}
        height={44}
        className="object-contain"
      />
    ),
  },
  {
    label: "openai",
    logo: <SiOpenai className="text-3xl text-white" aria-hidden="true" />,
  },
  {
    label: "fox corporation",
    logo: <SiFox className="text-3xl text-white" aria-hidden="true" />,
  },
  {
    label: "ebay",
    logo: (
      <span className="font-black text-xl tracking-tight leading-none" aria-hidden="true">
        <span style={{ color: "#E53238" }}>e</span>
        <span style={{ color: "#0064D2" }}>b</span>
        <span style={{ color: "#F5AF02" }}>a</span>
        <span style={{ color: "#86B817" }}>y</span>
      </span>
    ),
  },
];

function Credibility() {
  return (
    <section className="py-10 border-t border-white/10">
      <h2 className="text-xl font-semibold text-white mb-6">why me</h2>
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="space-y-4 text-spotify-light-gray text-sm leading-relaxed">
          <p>
            i know what it feels like to want something and not know how to show it on paper.
            i submitted over a thousand applications before things started clicking. a lot of
            silence, some rejections, and eventually a few yeses from places i genuinely
            wanted to be. i learned that what you&apos;ve done matters less than how you say it.
          </p>
          <p>
            i&apos;m not a recruiter or a career coach. i&apos;m a cs student who figured things out
            slowly, with help from people who were honest with me when they didn&apos;t have to be.
            this is me doing that for someone else.
          </p>
          <p>
            i&apos;ve looked at enough resumes, for myself and for friends, to know what makes
            someone look credible on paper versus forgettable. i&apos;ll tell you which one yours
            looks like right now, and how to change it.
          </p>
        </div>
        <div>
          <p className="text-spotify-light-gray text-xs uppercase tracking-widest mb-4">
            worked at
          </p>
          <div className="flex flex-wrap gap-3">
            {companies.map((c) => (
              <div
                key={c.label}
                aria-label={c.label}
                className="flex items-center justify-center bg-spotify-light-dark border border-white/10 rounded-xl px-5 py-3 min-w-[80px] h-14"
              >
                {c.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── What You Get ─────────────────────────────────────────────────────────────

const offerings = [
  {
    title: "line-by-line feedback",
    description: "every bullet, section, and word. nothing skipped.",
  },
  {
    title: "stronger bullets",
    description: "rewrite weak bullets into action-driven, quantifiable statements.",
  },
  {
    title: "internship positioning",
    description: "frame your experience and projects for swe intern roles specifically.",
  },
  {
    title: "honest assessment",
    description: "what&apos;s working and what isn&apos;t, including the things people don&apos;t usually say.",
  },
];

function WhatYouGet() {
  return (
    <section className="py-10 border-t border-white/10">
      <h2 className="text-xl font-semibold text-white mb-6">what you get</h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {offerings.map((item) => (
          <div
            key={item.title}
            className="bg-spotify-light-dark rounded-xl p-5 border border-white/5 hover:border-spotify-green/30 transition-colors duration-200"
          >
            <div className="flex items-start gap-3">
              <FiCheckCircle className="text-spotify-green text-lg mt-0.5 shrink-0" />
              <div>
                <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                <p
                  className="text-spotify-light-gray text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────

const faqs = [
  {
    q: "who is this for?",
    a: "students and early-career candidates applying for swe internships or new grad roles.",
  },
  {
    q: "will this guarantee me an interview?",
    a: "no. i&apos;ll help you put your best foot forward, but hiring decisions involve factors i can&apos;t control. what i can do is make sure your resume isn&apos;t the reason you&apos;re getting filtered out.",
  },
  {
    q: "how does the donation work?",
    a: "after booking, donate whatever feels right directly to the gofundme. no enforced minimum. 100% goes to the fundraiser.",
  },
  {
    q: "what if i can't afford to donate?",
    a: "reach out to me directly. i&apos;ll still do the session.",
  },
];

function FAQ() {
  return (
    <section className="py-10 border-t border-white/10">
      <h2 className="text-xl font-semibold text-white mb-6">common questions</h2>
      <div className="divide-y divide-white/10">
        {faqs.map((faq) => (
          <div key={faq.q} className="py-5">
            <h3 className="text-white font-semibold text-sm mb-1">{faq.q}</h3>
            <p
              className="text-spotify-light-gray text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: faq.a }}
            />
          </div>
        ))}
      </div>
      <p className="text-spotify-light-gray/40 text-xs mt-10 max-w-2xl leading-relaxed border-t border-white/5 pt-6">
        disclaimer: this is practical guidance based on my own experience recruiting for and landing
        software engineering internships. not an official recruiting service. sessions do not
        guarantee interview outcomes or job offers.
      </p>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ResumeReviewPage() {
  return (
    <div className="min-h-screen text-white lowercase">
      <div className="max-md:mx-4 max-md:mt-2 mx-40 mt-4">
        <BlogHeader title="" backLink="/" backText="back to portfolio" />
        <Hero />
        <Credibility />
        <WhatYouGet />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
