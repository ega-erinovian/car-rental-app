import { CheckCircle } from "lucide-react";
import { FC } from "react";

interface OurStoryItemProps {
  text: string;
}

const OurStoryItem: FC<OurStoryItemProps> = ({ text }) => {
  return (
    <div className="flex items-center space-x-4 mt-2">
      <CheckCircle className="w-5 h-5 text-green-500" />
      <span className="text-gray-700">{text}</span>
    </div>
  );
};

export default OurStoryItem;
