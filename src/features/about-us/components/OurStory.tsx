import { motion } from "framer-motion";
import Image from "next/image";
import OurStoryItem from "./OurStoryItem";

const OurStory = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Built on Passion,
              <br />
              <span className="text-6xl">Driven by Excellence</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2020 with a simple mission: to make premium car rentals
              accessible, reliable, and enjoyable for everyone. What started as
              a small fleet of carefully selected vehicles has grown into a
              trusted network serving thousands of satisfied customers.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Every car in our collection is handpicked for quality, comfort,
              and performance. We believe that the journey is just as important
              as the destination, and we&apos;re here to make every mile
              memorable.
            </p>
            <OurStoryItem text="Premium vehicle selection" />
            <OurStoryItem text="24/7 customer support" />
            <OurStoryItem text="Transparent pricing" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/about-us-page-story-section.webp"
                alt="Our Story"
                width={800}
                height={800}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
