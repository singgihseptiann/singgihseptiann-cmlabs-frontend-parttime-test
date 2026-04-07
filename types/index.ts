import { ImageProps } from "next/image";


export interface HomeProps {
  searchParams: Promise<{ q?: string }>;
}

export type FetchConfig = {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  body?: unknown;
  headers?: Record<string, string>;
  cache?: RequestCache;
  next?: NextFetchRequestConfig;
};

export type FetchApiResponse<T> = {
  data: T;
  status: number;
  statusText: string;
};

export interface AppImageProps extends ImageProps {
  fallbackSrc?: string;
}

export interface CardProps {
  title: string;
  href: string;
}

export interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

export interface MealCardProps {
  mealName: string;
  mealId: string;
  mealImage?: string;
}

export interface SkeletonProps {
  className?: string;
}

export interface TextProps {
  children: React.ReactNode;
  className?: string;
  variant?: "normal" | "muted" | "semibold";
}

export interface YouTubeEmbedProps {
  videoUrl: string;
}

export interface BreadcrumbItem {
  id: string;
  label: string;
  href: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export interface IngredientCardProps {
  ingredient: string;
}

export interface IngredientCardWithImageProps {
  ingredient: string;
  imageUrl?: string;
}

export interface IngredientDetailProps {
  ingredient: string;
  meals: any[];
}

export interface InstructionsProps {
  instructions: string;
}

export interface MealDetailInfoProps {
  meal: any;
}

export interface MealListProps {
  meals: any[];
}

export interface MealMetaProps {
  category: string;
  area: string;
  tags?: string;
}

export interface SearchBarProps {
  placeholder?: string;
}

export interface VideoRecipeProps {
  youtubeUrl: string;
}

export interface Ingredient {
  idIngredient: string;
  strIngredient: string;
  strThumb: string;
}

export interface InfiniteIngredientScrollProps {
  initialIngredients: Ingredient[];
  initialHasMore: boolean;
  query?: string;
}

export interface IngredientDetailProps {
  ingredient: string;
  meals: any[];
  searchQuery?: string;
}

export interface MealDetailProps {
  meal: any;
}

export interface IngredientDetailPageProps {
  params: Promise<{ name: string }>;
  searchParams: Promise<{ q?: string }>;
}

export interface MealDetailPageProps {
  params: Promise<{ id: string }>;
}

export interface AppImageProps extends ImageProps {
  fallbackSrc?: string;
}

export interface Ingredient {
  idIngredient: string;
  strIngredient: string;
  strThumb: string;
}

export interface InfiniteIngredientScrollProps {
  initialIngredients: Ingredient[];
  initialHasMore: boolean;
  query?: string;
}