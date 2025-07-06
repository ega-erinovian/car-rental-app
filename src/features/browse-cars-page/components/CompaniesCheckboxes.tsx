import { FC } from "react";
import { company } from "../consts";

interface CompaniesCheckboxesInterface {
  checkoxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedCompany: string[];
}

const CompaniesCheckboxes: FC<CompaniesCheckboxesInterface> = ({
  checkoxChange: handleCheckboxChange,
  selectedCompany,
}) => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Company</h3>
      <div className="space-y-3">
        {company.map((item, index) => (
          <label
            key={index}
            className="flex items-center space-x-3 cursor-pointer group">
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              value={item}
              onChange={handleCheckboxChange}
              checked={selectedCompany.includes(item)}
            />
            <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
              {item}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default CompaniesCheckboxes;
