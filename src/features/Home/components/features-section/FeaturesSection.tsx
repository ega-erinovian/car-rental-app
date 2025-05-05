import { features } from "../../consts";
import FeaturesItem from "./components/FeaturesItem";

const FeaturesSection = () => {
  return (
    <section className="py-8 xl:py-12 border-t border-t-gray-300 border-b border-b-gray-300 mb-6">
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
