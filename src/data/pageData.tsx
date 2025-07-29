import type { PageData } from '@/types';

export const pageData: PageData = {
  // Top promotional banner
  topBanner: {
    title: "🚀 FRESH BEGINNINGS SALE",
    subtitle: ": Extra 25% OFF, Limited Spots - start your journey today!"
  },

  // Navigation
  navigation: {
    logo: {
      src: "/fametonic-logo.png",
      alt: "Fametonic Logo"
    },
    menuItems: [
      { label: "About us", href: "#" },
      { label: "Contact", href: "#" }
    ]
  },

  // Main content
  mainContent: {
    headlines: {
      primary: "Want to Turn Social Media Into a Profitable Career?",
      secondary: "Discover your way to success with Fametonic:"
    },
    
    features: [
      "Start growing your influence right away—no waiting required!",
      "Create viral TikToks and Reels step by step with easy-to-follow lessons",
      "Use a Personal AI Worker to boost your content",
      "Learn from expert-led courses designed for aspiring influencers"
    ],

    cta: {
      buttonText: "GET STARTED",
      description: "1-minute quiz for personalized Insights",
      arrowIcon: "/arrow-right.svg"
    },

    footer: {
      terms: "By clicking \"Get Started\", you agree with Terms and Conditions, Privacy Policy, Subscription Terms",
      copyright: "Fametonic 2025 © All Rights Reserved."
    }
  },

  // Images
  images: {
    mockup: {
      src: "/mobile-app-mockup.png",
      alt: "Fametonic mobile app mockup"
    }
  },

  // Mobile hamburger menu icon
  hamburgerIcon: "/hamburger-menu.svg"
};