import { ServicesData } from "@/constants/data/services";
import PageHeading from "../../common/PageHeading";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4">
        {ServicesData.map(({ id, icon, title, description,  },index) => {
          return (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.05, delay: index * 0.1 }}
              className="card text-center !p7-6 hover:ring-offset-2  ring-offset-background hover:ring-2 hover:ring-stroke hover:!border-slate-300 dark:hover:!border-slate-500 !transition-3s"
              key={id}
            >
              <i className={`text-5xl text-primary bx bx-${icon}`}></i>
              <h3 className="my-3 font-semibold">{title}</h3>
              <p className="text-sm font-light text-subtext">{description}</p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};
export default Services;
