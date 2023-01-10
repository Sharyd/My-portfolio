import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
interface Props {
  children: ReactNode;
}

const Heading = ({ children }: Props) => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="mt-14 mb-14  md:mt-20 md:mb-20 text-4xl text-white font-semibold text-center">
        {children}
      </h2>
    </motion.div>
  );
};

export default Heading;
