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
  {
    title: "Admin Godean",
    path: "https://wa.me/6285155114016?text=Hello,%20I%20want%20to%20rent%20a%20car,%20can%20you%20help%20me%20please.",
  },
  {
    title: "Admin Bandung",
    path: "https://wa.me/6281209098888?text=Hello,%20I%20want%20to%20rent%20a%20car,%20can%20you%20help%20me%20please.",
  },
  {
    title: "Admin Semarang",
    path: "https://wa.me/6282123233456?text=Hello,%20I%20want%20to%20rent%20a%20car,%20can%20you%20help%20me%20please.",
  },
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
