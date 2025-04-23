import {
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  YoutubeIcon,
} from "lucide-react";

export const navigationLink = [
  { title: "Cars", path: "/vehicles" },
  { title: "About Us", path: "/about-us" },
  { title: "Contact", path: "/contact" },
];

export const adminLinks = [
  { title: "Admin Godean", path: "/" },
  { title: "Admin Bandung", path: "/" },
  { title: "Admin Semarang", path: "/" },
];

export const officeAddresses = [
  {
    title: "Headquarter",
    address: "Jl. Godean KM 5, Godean, Sleman, D.I. Yogyakarta",
  },
  {
    title: "Garage 1",
    address: "Jl. LLRE. Martadinata 56, Bandung, Jawa Barat",
  },
];

export const socialMediaLinks = [
  {
    title: "Instagram",
    icon: <InstagramIcon className="stroke-white" />,
    href: "https://instagram.com/",
  },
  {
    title: "Youtube",
    icon: <YoutubeIcon className="stroke-white" />,
    href: "https://youtube.com/",
  },
  {
    title: "Facebook",
    icon: <FacebookIcon className="stroke-white" />,
    href: "https://facebook.com/",
  },
  {
    title: "Whatsapp",
    icon: <PhoneIcon className="stroke-white" />,
    href: "https://facebook.com/",
  },
];
