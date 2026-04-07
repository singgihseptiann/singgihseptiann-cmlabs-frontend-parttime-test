import React from "react";
import Card from "../atoms/Card";
import { IngredientCardProps } from "@/types";

const IngredientCard: React.FC<IngredientCardProps> = ({ ingredient }) => <Card title={ingredient} href={`/ingredients/${encodeURIComponent(ingredient)}`} />;

export default IngredientCard;
