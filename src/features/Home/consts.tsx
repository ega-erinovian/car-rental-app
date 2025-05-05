export const FAQItems = [
  {
    id: "1",
    title: "What types of cars do you offer?",
    content:
      "We offer a diverse fleet of vehicles to suit various needs, including compact cars for city trips, sedans for comfortable family travel, SUVs for more space and adventure, and vans for larger groups. You can browse our available categories and specific models during the booking process.",
  },
  {
    id: "2",
    title: "What is included in the rental price?",
    content:
      "Typically, our base rental price includes the use of the vehicle for the agreed-upon period and mileage (unless otherwise specified). Taxes and mandatory fees are usually added during the booking process, providing a transparent view of the total cost. Optional extras like insurance, child seats, and GPS navigation will be additional.",
  },
  {
    id: "3",
    title: "What are your pick-up and drop-off procedures? ",
    content:
      "Our pick-up and drop-off locations and procedures are designed for convenience. You can typically collect your vehicle from our designated rental counters or specific pick-up points at your chosen location. Upon return, you'll usually drop off the car at the same location, following the instructions provided at the time of pick-up. Specific details regarding opening hours and any after-hours return options will be communicated with your booking confirmation.",
  },
  {
    id: "4",
    title: "What happens if I need assistance during my rental?",
    content:
      "We are here to support you throughout your rental period. In case of emergencies, breakdowns, or any other issues, you can contact our dedicated customer support team via the phone number provided in your rental agreement. We will provide guidance and assistance to resolve your situation as quickly as possible.",
  },
];

export const stats: { data: number; title: string }[] = [
  {
    data: 150,
    title: "Customers",
  },
  {
    data: 37,
    title: "Cars",
  },
  {
    data: 25,
    title: "Drivers",
  },
  {
    data: 5,
    title: "Years",
  },
];

import { CarIcon, MapPin, Wallet2Icon } from "lucide-react";

export const features = [
  {
    icon: <CarIcon className="h-16 w-16 md:h-12 md:w-12 stroke-gray-800" />,
    title: "Comfort",
    desc: "Travel in style and ease with our range of comfortable and modern vehicles, ensuring a relaxing journey for every mile",
  },
  {
    icon: <MapPin className="h-16 w-16 md:h-12 md:w-12 stroke-gray-800" />,
    title: "Availability",
    desc: "Conveniently find the right car at your desired location and time, making your rental experience seamless and stress-free",
  },
  {
    icon: <Wallet2Icon className="h-16 w-16 md:h-12 md:w-12 stroke-gray-800" />,
    title: "Savings",
    desc: "Get the best value for your money with our competitive prices and special offers, helping you save on your car rental needs",
  },
];
