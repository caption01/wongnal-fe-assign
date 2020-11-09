import React, { Fragment } from "react";
import "./index.scss";

interface TextBoxProps {
  title: string;
  description: string;
  tags: string[];
  url: string;
  onLinkClick: (url: string) => void;
  onTagClick: (keyword: string) => void;
}

const TextBox: React.FC<TextBoxProps> = ({
  title,
  description,
  tags,
  url,
  onLinkClick,
  onTagClick,
}) => {
  return (
    <div className="textbox">
      <h3 className="textbox__title" onClick={() => onLinkClick(url)}>
        {title}
      </h3>
      <div className="textbox__description">
        {description}
        <span className="textbox__link" onClick={() => onLinkClick(url)}>
          อ่านต่อ
        </span>
      </div>
      <div className="textbox__tags">
        <span className="textbox__tags-title">หมวด - </span>
        {tags.map((t, index) => {
          return index !== tags.length - 1 ? (
            <span
              key={index}
              className="textbox__tags-item"
              onClick={() => onTagClick(t)}
            >
              {t}
            </span>
          ) : (
            <Fragment key={index}>
              <span>และ</span>
              <span
                className="textbox__tags-item"
                onClick={() => onTagClick(t)}
              >
                {t}
              </span>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default TextBox;
