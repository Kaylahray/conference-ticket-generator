"use client";
import { motion } from "framer-motion";
import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.section
      className="flex flex-col px-6 py-[32px] lg:p-[48px] w-full mx-auto max-w-[700px] p-12 gap-8 rounded-[40px] border border-[#0E464F] bg-[#041E23]"
      initial={{ x: 1, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.section>
  );
};

export default Container;
