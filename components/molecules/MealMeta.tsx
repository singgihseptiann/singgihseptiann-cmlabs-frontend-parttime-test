import React from "react";
import Heading from "../atoms/Heading";
import Text from "../atoms/Text";

interface MealMetaProps {
  category: string;
  area: string;
  tags?: string;
}

const MealMeta: React.FC<MealMetaProps> = ({ category, area, tags }) => (
  <div className="mb-4 space-y-2">
    <Text variant="muted">
      <span className="font-semibold">Category:</span> {category}
    </Text>
    <Text variant="muted">
      <span className="font-semibold">Area:</span> {area}
    </Text>
    {tags && (
      <Text variant="muted">
        <span className="font-semibold">Tags:</span> {tags}
      </Text>
    )}
  </div>
);

export default MealMeta;
