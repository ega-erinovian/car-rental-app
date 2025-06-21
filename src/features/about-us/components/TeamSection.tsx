import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { fadeInUp, staggerContainer, team } from "../const";

const TeamSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}>
          <Badge className="mb-4 bg-blue-100 text-blue-600 hover:bg-blue-200">
            Our Team
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Meet the People Behind Godean05
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate professionals dedicated to delivering exceptional
            experiences
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}>
          {team.map((member, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="overflow-hidden shadow-none transition-all duration-300 hover:-translate-y-2 bg-gradient-to-b from-blue-600 via-blue-600 to-blue-800 rounded-3xl">
                <CardContent className="relative pb-0 pt-12 text-white">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">
                      {member.name.split(" ")[0]}
                      <br />
                      <span className="text-7xl xl:text-8xl">
                        {member.name.split(" ")[1]}
                      </span>
                    </h3>
                    <div className="mb-6 w-full">
                      <Badge className="bg-white text-center text-gray-900 text-sm shadow-none hover:bg-gray-100">
                        {member.role}
                      </Badge>
                    </div>
                  </div>
                  <div className="relative mt-20 md:-mt-48 md:-me-16 lg:mt-20 lg:me-0 lg:justify-center flex justify-center md:justify-end">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={720}
                      height={1080}
                      className="w-full md:w-2/3 h-[360px] lg:w-full md:h-[320px] xl:h-[480px] object-cover object-top saturate-[0]"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
