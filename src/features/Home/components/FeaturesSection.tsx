import { CarIcon, MapPin, Wallet2Icon } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <CarIcon className="h-16 w-16 md:h-12 md:w-12 stroke-gray-800" />,
      title: "Comfort",
      desc: "Gravida auctor fermentum morbi vulputate ac egestas orcietium convallis",
    },
    {
      icon: <MapPin className="h-16 w-16 md:h-12 md:w-12 stroke-gray-800" />,
      title: "Availability",
      desc: "Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis",
    },
    {
      icon: (
        <Wallet2Icon className="h-16 w-16 md:h-12 md:w-12 stroke-gray-800" />
      ),
      title: "Savings",
      desc: "Pretium convallis id diam sed commodo vestibulum lobortis volutpat",
    },
  ];

  return (
    <section className="py-8 xl:py-12">
      <div className="container mx-auto px-4 md:px-0 text-center text-gray-600">
        <ul className="grid xl:gap-x-48 md:gap-x-10 gap-y-20 md:grid-cols-3">
          {features.map((item, idx) => (
            <li key={idx} className="space-y-2 group">
              <div className="w-full p-4 mx-auto flex items-center justify-center">
                {item.icon}
              </div>
              <h4 className="text-2xl text-gray-800 font-bold">{item.title}</h4>
              <p className="md:text-sm xl:text-base">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturesSection;
