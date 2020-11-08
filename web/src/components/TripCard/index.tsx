import React from "react";
import { Image } from "../index";
import "./index.scss";

export interface Trip {
  title: string;
  eid: string;
  url: string;
  description: string;
  photos: string[];
  tags: string[];
}

const TripCard: React.FC<Trip> = ({
  title,
  eid,
  url,
  description,
  photos,
  tags,
}) => {
  const subDescription = `${description.substring(0, 200)} ...`;
  const [firstImg, ...restImg] = photos;

  return (
    <div className="tripcard">
      <div className="tripcard__left">
        <Image srcUrl={firstImg} alt="p-1" height={300} />
      </div>

      <div className="tripcard__right">
        <div className="tripcard__textbox">
          <h3 className="tripcard__textbox-title">{title}</h3>
          <div className="tripcard__textbox-description">
            {subDescription}
            <span className="tripcard__textbox-link">อ่านต่อ</span>
          </div>
          <div className="tripcard__textbox-tags">
            <span className="tripcard__textbox-tags-title">หมวด - </span>
            {tags.map((t, index) => {
              // click tag to set keyword state
              return index !== tags.length - 1 ? (
                <span className="tripcard__textbox-tags-item">{t}</span>
              ) : (
                <>
                  <span>และ</span>
                  <span className="tripcard__textbox-tags-item final">{t}</span>
                </>
              );
            })}
          </div>
        </div>

        <div className="tripcard__imagebox row">
          {restImg.map((url) => (
            <div className="col-1-of-3">
              <Image srcUrl={url} alt="p-2" height={150} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripCard;
