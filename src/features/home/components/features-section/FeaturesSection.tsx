import { features } from "../../consts";
import FeaturesItem from "./components/FeaturesItem";

const FeaturesSection = () => {
  return (
    <section className="mb-16">
      <div className="container mx-auto px-4 md:px-0 text-center text-gray-600">
        <ul className="grid gap-y-20 md:grid-cols-3">
          {features.map((item, idx) => (
            <FeaturesItem key={idx} {...item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturesSection;
