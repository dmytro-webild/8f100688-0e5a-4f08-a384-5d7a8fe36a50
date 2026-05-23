"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyEight from '@/components/sections/feature/FeatureCardTwentyEight';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TextAbout from '@/components/sections/about/TextAbout';
import { MessageCircle, Target, TrendingUp } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="mediumLarge"
        sizing="large"
        background="noise"
        cardStyle="soft-shadow"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "About",
          id: "about",
        },
        {
          name: "Services",
          id: "features",
        },
        {
          name: "Results",
          id: "metrics",
        },
        {
          name: "Testimonials",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="CREATIVE.GROWTH"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboard
      background={{
        variant: "plain",
      }}
      title="Scaling Brands Through Strategic Social Media"
      description="We craft premium content experiences that drive engagement, cultivate communities, and accelerate revenue for world-class brands."
      buttons={[
        {
          text: "Start Scaling",
          href: "#contact",
        },
        {
          text: "Our Approach",
          href: "#about",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/3d-render-modern-technology-background-with-plexus-design_1048-14928.jpg"
      mediaAnimation="blur-reveal"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/front-view-portrait-beautiful-woman_23-2148317338.jpg",
          alt: "Executive client",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-fashionable-well-dressed-man-with-beard-posing-outdoors_1328-3267.jpg",
          alt: "Marketing partner",
        },
        {
          src: "http://img.b2bpic.net/free-photo/business-woman-green-suit-using-phone-outside-street_1303-29546.jpg",
          alt: "Strategy lead",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-fashionable-well-dressed-man-with-beard-posing-outdoors_1328-3268.jpg",
          alt: "Content creator",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiling-businessman-face-portrait-wearing-suit_53876-148135.jpg",
          alt: "Community manager",
        },
      ]}
      avatarText="Trusted by 500+ global brands"
      marqueeItems={[
        {
          type: "text",
          text: "Strategy",
        },
        {
          type: "text",
          text: "Growth",
        },
        {
          type: "text",
          text: "Engagement",
        },
        {
          type: "text",
          text: "ROI",
        },
        {
          type: "text",
          text: "Analytics",
        },
      ]}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "InnovateLab",
        "GrowthPulse",
        "VisionaryTech",
        "ScaleMasters",
        "DigitalEdge",
        "BrandFlow",
        "MarketLeaders",
      ]}
      title="Trusted by visionary brands"
      description="Partnering with industry pioneers to redefine digital excellence and audience connection."
    />
  </div>

  <div id="about" data-section="about">
      <TextAbout
      useInvertedBackground={false}
      title="Where Artistry Meets Data-Driven Results"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyEight
      animationType="slide-up"
      textboxLayout="split-description"
      useInvertedBackground={false}
      features={[
        {
          id: "f1",
          title: "Social Content Strategy",
          subtitle: "Curated content calendars that resonate with your target demographics.",
          category: "Strategy",
          value: "1",
        },
        {
          id: "f2",
          title: "Precision Ad Management",
          subtitle: "High-conversion campaigns optimized for maximum ROI across social channels.",
          category: "Performance",
          value: "2",
        },
        {
          id: "f3",
          title: "Community Management",
          subtitle: "Human-centric engagement that builds deep trust and long-term loyalty.",
          category: "Engagement",
          value: "3",
        },
      ]}
      title="Full-Service Social Strategy"
      description="Comprehensive solutions tailored to elevate your presence and maximize impact across every platform."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardThree
      animationType="depth-3d"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          title: "Brand Impression Growth",
          value: "450%+",
          icon: TrendingUp,
        },
        {
          id: "m2",
          title: "Average Engagement Rate",
          value: "12.4%",
          icon: MessageCircle,
        },
        {
          id: "m3",
          title: "Campaign Conversion Rate",
          value: "8.9%",
          icon: Target,
        },
      ]}
      title="Measurable Excellence"
      description="Driven by data, we turn every impression into tangible growth."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="scale-rotate"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Sarah Jenkins",
          role: "CMO",
          testimonial: "A complete transformation of our digital brand identity and growth metrics. Truly premium results.",
          imageSrc: "http://img.b2bpic.net/free-photo/businessman-wearing-coat_1098-3778.jpg",
        },
        {
          id: "2",
          name: "Marcus Thorne",
          role: "Founder",
          testimonial: "The precision of their advertising strategies is simply unmatched in the agency space today.",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-young-man-looking-camera-against-grey-wall_23-2148130316.jpg",
        },
        {
          id: "3",
          name: "Elena Rossi",
          role: "CEO",
          testimonial: "Professional, data-focused, and highly creative. They are the gold standard for social media strategy.",
          imageSrc: "http://img.b2bpic.net/free-photo/beauty-woman-s-with-blue-eyes-portrait_633478-325.jpg",
        },
        {
          id: "4",
          name: "David Wu",
          role: "Director",
          testimonial: "They don't just post; they build ecosystems of engagement that actually convert into sales.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-bearded-young-man-black-jacket_23-2147955449.jpg",
        },
        {
          id: "5",
          name: "Jessica Lee",
          role: "VP Marketing",
          testimonial: "Beyond satisfied with the metrics we've seen since partnering with this incredible team.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-businessman-standing-airport_107420-85035.jpg",
        },
      ]}
      title="Voices of Impact"
      description="See how we have empowered brands to reach new heights."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",
          title: "How do you measure success?",
          content: "We prioritize growth metrics such as engagement rate, CPA, and conversion volume tailored to your specific brand goals.",
        },
        {
          id: "q2",
          title: "Which platforms do you specialize in?",
          content: "Our expertise spans Meta, TikTok, LinkedIn, and high-impact emerging platforms that align with your growth strategy.",
        },
        {
          id: "q3",
          title: "How quickly can we see results?",
          content: "We focus on both quick wins and long-term sustainable growth, typically seeing traction in campaign performance within the first 30 days.",
        },
      ]}
      title="Frequently Asked Questions"
      description="Clear answers to help you understand our process and partnership model."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      text="Ready to redefine your social footprint? Let's begin the conversation."
      buttons={[
        {
          text: "Schedule Consultation",
          href: "#",
        },
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Services",
              href: "#features",
            },
            {
              label: "Careers",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
            {
              label: "Cookies",
              href: "#",
            },
          ],
        },
      ]}
      logoText="CREATIVE.GROWTH"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
