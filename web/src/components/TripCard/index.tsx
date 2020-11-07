import React from "react";
import { getAllJSDocTags } from "typescript";
import "./index.scss";

const data = {
  title: "เกาะช้าง",
  eid: "1",
  url: "https://www.wongnai.com/trips/travel-koh-chang",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex repellendus cum nam amet illum, facilis explicabo quaerat aliquam provident at maxime, vero quidem magni aspernatur quia quis quod veritatis? Repudiandae?",
  photos: [
    "https://img.wongnai.com/p/1600x0/2019/07/02/3c758646aa6c426ba3c6a81f57b20bd6.jpg",
    "https://img.wongnai.com/p/1600x0/2019/07/02/6a2733ab91164ac8943b77deb14fdbde.jpg",
    "https://img.wongnai.com/p/1600x0/2019/07/02/6a2733ab91164ac8943b77deb14fdbde.jpg",
  ],
  tags: ["เกาะ", "ทะเล", "จุดชมวิว", "ธรรมชาติ", "ตราด"],
};

const Image = ({
  srcUrl,
  alt,
  height,
}: {
  srcUrl: string;
  alt: string;
  height?: number;
}) => {
  return (
    <figure className="tripcard__photo">
      <img
        className="tripcard__photo-img"
        src={srcUrl}
        alt={alt}
        height={height}
      />
    </figure>
  );
};

const TripCard = () => {
  return (
    <div className="tripcard">
      <div className="tripcard__left">
        <Image
          srcUrl="https://img.wongnai.com/p/1600x0/2019/07/02/3c758646aa6c426ba3c6a81f57b20bd6.jpg"
          alt="p-1"
          height={200}
        />
      </div>

      <div className="tripcard__right">
        <div className="tripcard__textbox">
          <h3 className="ttripcard__textbox-title">{data.title}</h3>
          <p className="tripcard__textbox-description">{data.description}</p>
          <p className="tripcard__textbox-tag">
            {data.tags.map((t) => (
              <span>{t}</span>
            ))}
          </p>
        </div>

        <div className="tripcard__imagebox row">
          {data.photos.map((url) => (
            <div className="col-1-of-3">
              <Image srcUrl={url} alt="p-2" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TripCard;
