import React, { Fragment } from "react";
import { Image } from "../index";
import "./index.scss";

export interface Trip {
  title: string;
  eid: string;
  url: string;
  description: string;
  photos: string[];
  tags: string[];
  cardHigh: number;
  onTagSelect: (tag: string) => void;
  openNewWindowTab: (url: string) => void;
}

const TripCard: React.FC<Trip> = ({
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
  const smImgHigh = cardHigh * 0.35;

  return (
    <div className="tripcard">
      <div className="tripcard__left">
        <Image srcUrl={firstImg} alt="p-1" height={cardHigh} />
      </div>

      <div className="tripcard__right">
        <div className="tripcard__textbox">
          <h3
            className="tripcard__textbox-title"
            onClick={() => openNewWindowTab(url)}
          >
            {title}
          </h3>
          <div className="tripcard__textbox-description">
            {subDescription}
            <span
              className="tripcard__textbox-link"
              onClick={() => openNewWindowTab(url)}
            >
              อ่านต่อ
            </span>
          </div>
          <div className="tripcard__textbox-tags">
            <span className="tripcard__textbox-tags-title">หมวด - </span>
            {tags.map((t, index) => {
              return index !== tags.length - 1 ? (
                <span
                  key={index}
                  className="tripcard__textbox-tags-item"
                  onClick={() => onTagSelect(t)}
                >
                  {t}
                </span>
              ) : (
                <Fragment key={index}>
                  <span>และ</span>
                  <span
                    className="tripcard__textbox-tags-item final"
                    onClick={() => onTagSelect(t)}
                  >
                    {t}
                  </span>
                </Fragment>
              );
            })}
          </div>
        </div>

        <div className="tripcard__imagebox row">
          {restImg.map((url, index) => (
            <div className="col-1-of-3" key={index}>
              <Image srcUrl={url} alt="p-2" height={smImgHigh} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripCard;
