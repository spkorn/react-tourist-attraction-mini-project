/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./TouristAttractionList.css";

function TouristAttratctionList(props) {
  const { destinations, setSearchText, searchText } = props;

  const addKeywordtoSearchText = (tag) => {
    if (!searchText.includes(tag)) setSearchText(`${searchText} ${tag}`.trim());
  };

  return (
    <div className="tourist-attraction-container">
      {destinations.map((destination) => {
        return (
          <div
            className="tourist-attraction-list"
            key={destination.eid}
            css={css`
              display: flex;
            `}
            role="list"
          >
            <img className="recommend-pictures" src={destination.photos[0]} />
            <div className="content">
              <a
                href={destination.url}
                target="_blank"
                css={css`
                  text-decoration: none;
                  color: inherit;
                  font-size: 1.5rem;
                  font-weight: bold;
                `}
              >
                {destination.title}
              </a>
              <p
                css={css`
                  width: 700px;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  color: gray;
                `}
              >
                {destination.description}
              </p>
              <a href={destination.url}>อ่านต่อ</a>
              <p
                css={css`
                  color: gray;
                `}
              >
                หมวดหมู่{" "}
                {destination.tags.slice(0, -1).map((tag, index) => {
                  return (
                    <span
                      className="tags-choose"
                      key={index}
                      css={css`
                        margin-left: 3px;
                      `}
                      onClick={() => {
                        addKeywordtoSearchText(tag);
                      }}
                    >
                      {tag}{" "}
                    </span>
                  );
                })}
                <span>{" และ "}</span>
                <span
                  className="tags-choose"
                  onClick={() => {
                    addKeywordtoSearchText(destination.tags.slice(-1));
                  }}
                >
                  {destination.tags.slice(-1)}
                </span>
              </p>
              {destination.photos.slice(1).map((photo, index) => {
                return (
                  <span key={index}>
                    <img
                      src={photo}
                      width="60px"
                      height="60px"
                      css={css`
                        margin-right: 20px;
                        margin-top: 10px;
                        border-radius: 10px;
                        object-fit: cover;
                      `}
                    />
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TouristAttratctionList;
