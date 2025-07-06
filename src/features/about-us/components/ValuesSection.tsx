import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer, values } from "../const";

const ValuesSection = () => {
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
            Our Values
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Drives Us Forward
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our core values shape every decision we make and every service we
            provide
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}>
          {values.map((value, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="h-full px-12 py-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group rounded-2xl">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                    <value.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;
