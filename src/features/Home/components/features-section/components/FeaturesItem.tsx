import { FC } from "react";

interface FeaturesItemProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

const FeaturesItem: FC<FeaturesItemProps> = ({ icon, title, desc }) => {
  return (
    <li className="space-y-2 group">
      <div className="w-full p-4 mx-auto flex items-center justify-center">
        {icon}
      </div>
      <h4 className="text-2xl text-gray-800 font-bold">{title}</h4>
      <p className="md:text-sm xl:text-base">{desc}</p>
    </li>
  );
};

export default FeaturesItem;
