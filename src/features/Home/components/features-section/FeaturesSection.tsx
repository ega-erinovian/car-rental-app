import { CarIcon, MapPin, Wallet2Icon } from "lucide-react";
import FeaturesItem from "./components/FeaturesItem";

const FeaturesSection = () => {
  const features = [
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
      icon: (
        <Wallet2Icon className="h-16 w-16 md:h-12 md:w-12 stroke-gray-800" />
      ),
      title: "Savings",
      desc: "Get the best value for your money with our competitive prices and special offers, helping you save on your car rental needs",
    },
  ];

  return (
    <section className="py-8 xl:py-12">
      <div className="container mx-auto px-4 md:px-0 text-center text-gray-600">
        <ul className="grid xl:gap-x-48 md:gap-x-10 gap-y-20 md:grid-cols-3">
          {features.map((item, idx) => (
            <FeaturesItem key={idx} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturesSection;
