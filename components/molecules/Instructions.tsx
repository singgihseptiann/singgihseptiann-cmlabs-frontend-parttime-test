import React from "react";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";
import { InstructionsProps } from "@/types";


const Instructions: React.FC<InstructionsProps> = ({ instructions }) => (
  <div className="mb-6">
    <Heading level={2} className="mb-2">
      Instructions
    </Heading>
    <Text className="leading-relaxed">{instructions}</Text>
  </div>
);

export default Instructions;
