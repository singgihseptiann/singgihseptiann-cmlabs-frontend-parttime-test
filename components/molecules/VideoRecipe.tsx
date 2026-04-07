import React from "react";
import YouTubeEmbed from "../atoms/YouTubeEmbed";
import { VideoRecipeProps } from "@/types";


const VideoRecipe: React.FC<VideoRecipeProps> = ({ youtubeUrl }) => (
  <div className="w-full">
    <YouTubeEmbed videoUrl={youtubeUrl} />
  </div>
);

export default VideoRecipe;
