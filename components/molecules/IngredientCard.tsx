import React from "react";
import Card from "../atoms/Card";

interface IngredientCardProps {
  ingredient: string;
}

const IngredientCard: React.FC<IngredientCardProps> = ({ ingredient }) => <Card title={ingredient} href={`/ingredients/${encodeURIComponent(ingredient)}`} />;

export default IngredientCard;
