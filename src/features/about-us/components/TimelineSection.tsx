import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { milestones } from "../const";

const TimelineSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <Badge className="mb-4 bg-blue-100 text-blue-600 hover:bg-blue-200">
            Our Journey
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Milestones That Define Us
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              className="flex items-start mb-12 last:mb-0"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}>
              <div className="flex-shrink-0 w-24 text-right mr-8">
                <div className="text-2xl font-bold text-blue-600">
                  {milestone.year}
                </div>
              </div>
              <div className="flex-shrink-0 w-4 h-4 bg-blue-600 rounded-full mt-2 mr-8 relative">
                <div className="absolute top-4 left-1/2 w-0.5 h-16 bg-blue-200 -translate-x-1/2 last:hidden" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {milestone.event}
                </h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
