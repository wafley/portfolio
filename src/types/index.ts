import * as React from "react";

export type SiteConfig = {
  name: string;
  fullName: string;
  role: string;
  tagline: string;
  title: string;
  description: string;
  shortDescription: string;
  url: string;
  ogImage: string;
  twitterHandle: string;
};

export type NavLink = {
  name: string;
  href: string;
};

export type SocialLink = {
  name: string;
  href: string;
  icon: (props: React.SVGProps<SVGSVGElement>) => React.JSX.Element;
};
