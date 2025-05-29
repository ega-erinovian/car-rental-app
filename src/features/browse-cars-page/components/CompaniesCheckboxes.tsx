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
      <p className="font-semibold mb-4">Company</p>
      <div className="flex gap-4 xl:block">
        {company.map((item, index) => (
          <div className="flex gap-2 mb-2" key={index}>
            <input
              type="checkbox"
              id="company"
              name="company"
              value={item}
              onChange={handleCheckboxChange}
              checked={selectedCompany.includes(item)}
            />
            <label>{item}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompaniesCheckboxes;
