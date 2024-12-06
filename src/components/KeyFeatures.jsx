import React from "react";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";
import chefcook from "../assets/Chefcook.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

const KeyFeatures = () => {
  return (
    <div className=" bg-gradient-to-t from-orange-50  py-20" id="about">
      <div className="flex flex-col lg:flex-row mx-auto max-w-7xl">
        <div className="lg:w-1/2 flex items-center justify-center">
          {/* <img src={chef} alt="chef" className='w-64'/> */}
          <Lottie animationData={chefcook} className="w-[500px]" />
        </div>
        <div className="lg:w-1/2 px-6 lg:px-0 flex flex-col space-y-3 lg:space-y-7 justify-center ">
          <motion.h2
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-red-600 font-bold text-2xl "
          >
            KEY FEATURES
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-bold"
          >
            Enjoy a Seamless <span className="text-red-500">Ordering</span>{" "}
            Experience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            From fast delivery to a wide selection of cuisines, our food
            ordering service has everything you need to satisfy your cravings.
          </motion.p>
          <div className="flex gap-0 lg:gap-3 pt-4">
            <img
              src={playstore}
              alt="playstore"
              className="w-30 h-10 cursor-pointer "
            />
            <img
              src={appstore}
              alt="appstore"
              className="w-30 h-10 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
