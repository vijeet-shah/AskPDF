"use client";
import { GoogleGeminiEffect } from "@/components/ui/gemini-effect";
import { useScroll, useTransform } from "framer-motion";
import React from "react";

function RefundAndCancellationPage() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div
      className="h-[400vh]  w-full dark:border dark:border-white/[0.1] relative pt-8 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
        title="Refund/Cancellation Policy"
        description=" We appreciate your support of this open-source project by Vijeet Shah. Due to the nature of digital course content, we are currently unable to offer refunds for purchased orders. However, if you encounter any issues with your course access or content, please feel free to reach out to our support team at `vijeettouch@gmail.com` and we will do our best to assist you."
      />
    </div>
  );
}

export default RefundAndCancellationPage;
