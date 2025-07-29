// Type definitions for the Fametonic landing page

export interface MenuItem {
  label: string;
  href: string;
}

export interface Logo {
  src: string;
  alt: string;
}

export interface Navigation {
  logo: Logo;
  menuItems: MenuItem[];
}

export interface TopBanner {
  title: string;
  subtitle: string;
}

export interface Headlines {
  primary: string;
  secondary: string;
}

export interface CTA {
  buttonText: string;
  description: string;
  arrowIcon: string;
}

export interface Footer {
  terms: string;
  copyright: string;
}

export interface MainContent {
  headlines: Headlines;
  features: string[];
  cta: CTA;
  footer: Footer;
}

export interface Images {
  mockup: {
    src: string;
    alt: string;
  };
}

export interface PageData {
  topBanner: TopBanner;
  navigation: Navigation;
  mainContent: MainContent;
  images: Images;
  hamburgerIcon: string;
}