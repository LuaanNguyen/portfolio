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
const SITE_URL = "https://luannguyen.net";
// ─────────────────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "1:1 Resume Review for SWE Internships | Luan Nguyen",
  description:
    "30-min 1:1 resume feedback for CS students targeting software engineering internships. Honest, practical, pay-what-you-can. Proceeds support a cancer-related GoFundMe fundraiser.",
  keywords: [
    "resume review",
    "software engineering internship",
    "SWE resume",
    "CS internship resume help",
    "tech resume feedback",
    "internship application",
    "Luan Nguyen",
  ],
  authors: [{ name: "Luan Nguyen", url: SITE_URL }],
  creator: "Luan Nguyen",
  alternates: {
    canonical: `${SITE_URL}/resume-review`,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/resume-review`,
    title: "Get honest resume feedback for SWE internships — Luan Nguyen",
    description:
      "30-min 1:1 sessions for CS students targeting software engineering internships. Pay-what-you-can. Proceeds go to a cancer-related GoFundMe fundraiser.",
    siteName: "Luan Nguyen",
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}/portfolio_highres.png`,
        width: 1920,
        height: 1440,
        alt: "Luan Nguyen — 1:1 Resume Review for SWE Internships",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get honest resume feedback for SWE internships — Luan Nguyen",
    description:
      "30-min 1:1 sessions for CS students. Pay-what-you-can. Proceeds support a cancer-related GoFundMe fundraiser.",
    images: [`${SITE_URL}/portfolio_highres.png`],
    creator: "@luaan_ng",
    site: "@luaan_ng",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "1:1 SWE Internship Resume Review",
  description:
    "30-minute 1:1 resume feedback sessions for students and early-career candidates targeting software engineering internships.",
  url: `${SITE_URL}/resume-review`,
  provider: {
    "@type": "Person",
    name: "Luan Nguyen",
    url: SITE_URL,
    sameAs: [
      "https://www.linkedin.com/in/luanthiennguyen",
      "https://github.com/LuaanNguyen",
    ],
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Pay-what-you-can. Proceeds support a cancer-related GoFundMe fundraiser.",
  },
  audience: {
    "@type": "Audience",
    audienceType: "CS students and early-career software engineering candidates",
  },
};

// ─── Button ───────────────────────────────────────────────────────────────────

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

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="py-10 md:py-16" aria-labelledby="hero-heading">
      <div className="max-w-2xl">
        <p className="text-spotify-green text-sm font-semibold tracking-widest uppercase mb-4">
          1:1 resume review · 30 min
        </p>
        <h1
          id="hero-heading"
          className="text-3xl md:text-5xl font-bold text-white leading-tight mb-5 normal-case"
        >
          Get honest feedback on your SWE internship resume.
        </h1>
        <p className="text-spotify-light-gray text-base md:text-lg leading-relaxed mb-6 max-w-xl">
          practical, line-by-line feedback for students targeting software engineering internships.
        </p>
        <div className="flex items-start gap-3 bg-spotify-light-dark border border-spotify-green/20 rounded-xl px-5 py-4 mb-8 max-w-xl">
          <FaHeart className="text-spotify-green mt-0.5 shrink-0" aria-hidden="true" />
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
          <FaHeart className="text-xs" aria-hidden="true" /> book a session
        </PrimaryButton>
      </div>
    </section>
  );
}

// ─── Credibility ─────────────────────────────────────────────────────────────

const companies: { label: string; logo: React.ReactNode }[] = [
  {
    label: "Amazon Web Services",
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
    label: "OpenAI",
    logo: <SiOpenai className="text-3xl text-white" aria-label="OpenAI" />,
  },
  {
    label: "FOX Corporation",
    logo: <SiFox className="text-3xl text-white" aria-label="FOX Corporation" />,
  },
  {
    label: "eBay",
    logo: (
      <span className="font-black text-xl tracking-tight leading-none">
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
    <section className="py-10 border-t border-white/10" aria-labelledby="credibility-heading">
      <h2 id="credibility-heading" className="text-xl font-semibold text-white mb-6">
        why me
      </h2>
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
          <ul className="flex flex-wrap gap-3" aria-label="companies worked at">
            {companies.map((c) => (
              <li
                key={c.label}
                className="flex items-center justify-center bg-spotify-light-dark border border-white/10 rounded-xl px-5 py-3 min-w-[80px] h-14"
                title={c.label}
              >
                {c.logo}
              </li>
            ))}
          </ul>
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
    description: "what's working and what isn't, including the things people don't usually say.",
  },
];

function WhatYouGet() {
  return (
    <section className="py-10 border-t border-white/10" aria-labelledby="whatyouget-heading">
      <h2 id="whatyouget-heading" className="text-xl font-semibold text-white mb-6">
        what you get
      </h2>
      <ul className="grid sm:grid-cols-2 gap-3">
        {offerings.map((item) => (
          <li
            key={item.title}
            className="bg-spotify-light-dark rounded-xl p-5 border border-white/5 hover:border-spotify-green/30 transition-colors duration-200"
          >
            <div className="flex items-start gap-3">
              <FiCheckCircle
                className="text-spotify-green text-lg mt-0.5 shrink-0"
                aria-hidden="true"
              />
              <div>
                <h3 className="text-white font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-spotify-light-gray text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
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
    a: "no. i'll help you put your best foot forward, but hiring decisions involve factors i can't control. what i can do is make sure your resume isn't the reason you're getting filtered out.",
  },
  {
    q: "how does the donation work?",
    a: "after booking, donate whatever feels right directly to the gofundme. no enforced minimum. 100% goes to the fundraiser.",
  },
  {
    q: "what if i can't afford to donate?",
    a: "reach out to me directly. i'll still do the session.",
  },
];

function FAQ() {
  return (
    <section className="py-10 border-t border-white/10" aria-labelledby="faq-heading">
      <h2 id="faq-heading" className="text-xl font-semibold text-white mb-6">
        common questions
      </h2>
      <dl className="divide-y divide-white/10">
        {faqs.map((faq) => (
          <div key={faq.q} className="py-5">
            <dt className="text-white font-semibold text-sm mb-1">{faq.q}</dt>
            <dd className="text-spotify-light-gray text-sm leading-relaxed">{faq.a}</dd>
          </div>
        ))}
      </dl>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-md:mx-4 md:mx-20 lg:mx-40 max-md:mt-2 mt-4">
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
