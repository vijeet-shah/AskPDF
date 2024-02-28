// import { privacyPolicyContent } from "@/components/landing/footer/privacy-policy/privacy-policy";

"use client";
import { GoogleGeminiEffect } from "@/components/ui/gemini-effect";
import { useScroll, useTransform } from "framer-motion";
import React from "react";

function PrivacyPolicyPage() {
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
        title="Privacy & Policy "
        description="We do not share your personal information with any third parties. We may share aggregated, non-identifiable data for research or improvement purposes, but this data will not be linked to any individual user. We take reasonable steps to protect the information you provide from unauthorized access, disclosure, alteration, or destruction. However, no internet transmission or electronic storage is completely secure, so we cannot guarantee absolute security. "
      />
    </div>
  );
}

export default PrivacyPolicyPage;
