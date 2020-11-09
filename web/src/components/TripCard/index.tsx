import React from "react";

import { Image, TextBox } from "../index";
import { Trip } from "../types";

import "./index.scss";

interface TripCardProps extends Trip {
  cardHigh: number;
  onTagSelect: (tag: string) => void;
  openNewWindowTab: (url: string) => void;
}

const TripCard: React.FC<TripCardProps> = ({
  title,
  url,
  description,
  photos,
  tags,
  cardHigh,
  onTagSelect,
  openNewWindowTab,
}) => {
  const subDescription = `${description.substring(0, 200)} ...`;
  const [firstImg, ...restImg] = photos;

  return (
    <div className="tripcard">
      <div className="tripcard__left">
        <Image srcUrl={firstImg} alt="p-1" height={cardHigh} />
      </div>

      <div className="tripcard__right">
        <TextBox
          title={title}
          description={subDescription}
          tags={tags}
          url={url}
          onLinkClick={openNewWindowTab}
          onTagClick={onTagSelect}
        />

        <div className="tripcard__right-imageBox row">
          {restImg.map((url, index) => (
            <div className="col-1-of-3" key={index}>
              <Image srcUrl={url} alt="p-2" height={cardHigh * 0.4} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripCard;
