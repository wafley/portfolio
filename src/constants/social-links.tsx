import {
  GithubIcon,
  XIcon,
  InstagramIcon,
  LinkedinIcon,
  GmailIcon,
} from "@/components/shared/icons";
import { SocialLink } from "@/types";

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "Email",
    href: "mailto:wafley@gmail.com",
    icon: GmailIcon,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: LinkedinIcon,
  },
  {
    name: "GitHub",
    href: "https://github.com",
    icon: GithubIcon,
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: InstagramIcon,
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: XIcon,
  },
];
