import React from "react";
import "./index.scss";

interface ImageProps {
  srcUrl: string;
  alt: string;
  height?: number;
}

const Image: React.FC<ImageProps> = ({
  srcUrl,
  alt,
  height,
}: {
  srcUrl: string;
  alt: string;
  height?: number;
}) => {
  return (
    <figure className="frame">
      <img className="frame__photo" src={srcUrl} alt={alt} height={height} />
    </figure>
  );
};

export default Image;
