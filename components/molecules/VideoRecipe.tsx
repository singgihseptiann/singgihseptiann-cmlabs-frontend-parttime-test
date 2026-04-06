import React from "react";
import YouTubeEmbed from "../atoms/YouTubeEmbed";

interface VideoRecipeProps {
  youtubeUrl: string;
}

const VideoRecipe: React.FC<VideoRecipeProps> = ({ youtubeUrl }) => (
  <div className="mb-6">
    <YouTubeEmbed videoUrl={youtubeUrl} />
  </div>
);

export default VideoRecipe;
