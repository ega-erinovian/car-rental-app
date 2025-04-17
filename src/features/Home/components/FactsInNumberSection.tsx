import { NumberTicker } from "@/components/magicui/number-ticker";
import { Card } from "@/components/ui/card";

const FactsInNumberSection = () => {
  const stats: { data: number; title: string }[] = [
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

  return (
    <Card className="my-16 mt-8 bg-blue-600">
      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-white md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white text-3xl font-bold sm:text-4xl">
              Our customers are always happy
            </h3>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              venenatis sollicitudin quam ut tincidunt.
            </p>
          </div>
          <div className="mt-12">
            <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap md:divide-x">
              {stats.map((item, idx) => (
                <li key={idx} className="text-center px-12 lg:px-16">
                  <div className="flex text-6xl md:text-4xl font-semibold items-center justify-center">
                    <NumberTicker value={item.data} className="text-white" />
                    <h4>{(idx == 0 || idx == 2) && "+"}</h4>
                  </div>
                  <p className="mt-3 text-xl md:text-base">{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Card>
  );
};

export default FactsInNumberSection;
