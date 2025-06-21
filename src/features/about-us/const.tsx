"use client";

import {
  Users,
  Award,
  MapPin,
  Clock,
  Shield,
  Heart,
  Target,
  Zap,
} from "lucide-react";

export const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const stats = [
  { number: "114+", label: "Customers", icon: Users },
  { number: "28", label: "Cars", icon: MapPin },
  { number: "19+", label: "Dealers", icon: Award },
  { number: "4", label: "Years", icon: Clock },
];

export const values = [
  {
    icon: Shield,
    title: "Trust & Safety",
    description:
      "Every vehicle in our fleet undergoes rigorous safety inspections and maintenance checks.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "We prioritize your satisfaction and strive to exceed expectations in every interaction.",
  },
  {
    icon: Target,
    title: "Excellence",
    description:
      "Committed to delivering premium quality service and maintaining the highest standards.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "Continuously improving our services with cutting-edge technology and modern solutions.",
  },
];

export const team = [
  {
    name: "Dominic Toretto",
    role: "CEO & Founder",
    image: "/images/ceo.webp",
    description: "Visionary leader with 15+ years in automotive industry",
  },
  {
    name: "Letty Ortiz",
    role: "Operations Director",
    image: "/images/OD.webp",
    description: "Expert in fleet management and customer operations",
  },
  {
    name: "Han Lue",
    role: "Customer Experience Manager",
    image: "/images/cxm.webp",
    description: "Passionate about creating exceptional customer journeys",
  },
];

export const milestones = [
  {
    year: "2020",
    event: "Company Founded",
    description: "Started with a vision to revolutionize car rentals",
  },
  {
    year: "2021",
    event: "Fleet Expansion",
    description: "Grew to 50+ premium vehicles across multiple locations",
  },
  {
    year: "2022",
    event: "Digital Innovation",
    description: "Launched our award-winning mobile app and platform",
  },
  {
    year: "2024",
    event: "Market Leader",
    description: "Became the region's most trusted car rental service",
  },
];
