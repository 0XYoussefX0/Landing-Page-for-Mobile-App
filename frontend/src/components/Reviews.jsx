import { useEffect, useState, useRef } from "react";
import stars from "../assets/stars.png";
import ReviewCard from "./ReviewCard";
import { VariableSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteLoader from "react-window-infinite-loader";
import Loader from "./Loader.jsx";

import StarRating from "./StarRating.jsx";

function testimonialReviews() {
  const [dataTest, setDataTest] = useState([]);
  const [reviewsInfo, setReviewsInfo] = useState();

  const [moreItemsLoading, setMoreItemsLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);

  const [filterOptions, setFilterOptions] = useState({
    fiveStars: true,
    fourStars: false,
    threeStars: false,
    twoStars: false,
    oneStar: false,
  });

  const [lastId, setLastId] = useState(0);

  const infiniteListRef = useRef(null);
  const hasMountedRef = useRef(false);

  const listRef = useRef(null);
  const rowHeights = useRef({});

  useEffect(() => {
    if (infiniteListRef.current && hasMountedRef.current) {
      infiniteListRef.current.resetloadMoreItemsCache();
      setDataTest([]);
      setLastId(0);
    }
    hasMountedRef.current = true;
  }, [filterOptions]);

  useEffect(() => {
    fetch(
      "https://us-central1-cryptic-smile-407714.cloudfunctions.net/function-1"
    )
      .then((response) => response.json())
      .then((data) => setReviewsInfo(data));
  }, []);

  const handleFiltering = (clickedFilter) => {
    setFilterOptions((prevFilterOptions) => {
      let newFilterOptions = { ...prevFilterOptions };
      Object.keys(newFilterOptions).forEach((key) => {
        if (key == clickedFilter) {
          newFilterOptions[key] = true;
        } else {
          newFilterOptions[key] = false;
        }
      });
      return newFilterOptions;
    });
  };

  const loadMore = async () => {
    setMoreItemsLoading(true);
    let checkedProperty = Object.entries(filterOptions).find(
      ([key, value]) => value === true
    )[0];

    const response = await fetch(
      `https://us-central1-cryptic-smile-407714.cloudfunctions.net/function-3?score=${checkedProperty}&lastId=${lastId}`
    );
    const data = await response.json();

    setMoreItemsLoading(false);
    setDataTest((prevDataTest) => [...prevDataTest, ...data]);
    setLastId(data[data.length - 1].id);
  };

  const itemCount = hasNextPage ? dataTest.length + 1 : dataTest.length;

  function setRowHeight(index, size) {
    listRef.current.resetAfterIndex(0);
    rowHeights.current = { ...rowHeights.current, [index]: size };
  }
  function getRowHeight(index) {
    return rowHeights.current[index] + 26 || 313;
  }

  const reviewsPercentage = (starCount) => {
    return (
      Math.round(
        (reviewsInfo?.histogram[starCount] / reviewsInfo?.ratings) * 100
      ) + "%"
    );
  };
  return (
    <>
      <h2 className="testimonialTitle">
        User Testimonials:
        <br />
        The Power of <span>Quranly</span> Unveiled
      </h2>
      <div className="testimonialContainer">
        <div className="testimonialBackground">
          <div className="testimonialReviews">
            <div className="sideTitle">Reviews</div>
            <div className="starRatingContainer">
              <div>
                <StarRating score={reviewsInfo?.score} />
                {/* <img
                  src={stars.src}
                  width="206"
                  height="33"
                  style={{ maxWidth: "100%" }}
                  alt="Image showing Quranly app's average star rating on app stores"
                /> */}
              </div>
              <div className="averageRating">
                {reviewsInfo && reviewsInfo.score.toFixed(1) + " out of 5"}
              </div>
            </div>
            <div className="totalCustomerRatings">
              {reviewsInfo &&
                Math.floor(reviewsInfo.ratings / 1000) * 1000 +
                  "+ customer ratings"}
            </div>
            <div className="ratingDistributionContainer">
              <div
                onClick={() => {
                  handleFiltering("fiveStars");
                }}
                className="ratingClickable"
              >
                <div className="ratingText">5 star</div>
                <div className="ratingBackground">
                  <div
                    className="ratingInnerDiv"
                    style={{
                      width: reviewsPercentage(5),
                    }}
                  ></div>
                </div>
                <div className="ratingPercentage">
                  {reviewsInfo && reviewsPercentage(5)}
                </div>
              </div>
              <div
                onClick={() => {
                  handleFiltering("fourStars");
                }}
                className="ratingClickable"
              >
                <div className="ratingText">4 star</div>
                <div className="ratingBackground">
                  <div
                    className="ratingInnerDiv"
                    style={{
                      width: reviewsPercentage(4),
                    }}
                  ></div>
                </div>
                <div className="ratingPercentage">
                  {reviewsInfo && reviewsPercentage(4)}
                </div>
              </div>
              <div
                onClick={() => {
                  handleFiltering("threeStars");
                }}
                className="ratingClickable"
              >
                <div className="ratingText">3 star</div>
                <div className="ratingBackground">
                  <div
                    className="ratingInnerDiv"
                    style={{
                      width: reviewsPercentage(3),
                    }}
                  ></div>
                </div>
                <div className="ratingPercentage">
                  {reviewsInfo && reviewsPercentage(3)}
                </div>
              </div>
              <div
                onClick={() => {
                  handleFiltering("twoStars");
                }}
                className="ratingClickable"
              >
                <div className="ratingText">2 star</div>
                <div className="ratingBackground">
                  <div
                    className="ratingInnerDiv"
                    style={{
                      width: reviewsPercentage(2),
                    }}
                  ></div>
                </div>
                <div className="ratingPercentage">
                  {reviewsInfo && reviewsPercentage(2)}
                </div>
              </div>
              <div
                onClick={() => {
                  handleFiltering("oneStar");
                }}
                className="ratingClickable"
              >
                <div className="ratingText">1 star</div>
                <div className="ratingBackground">
                  <div
                    className="ratingInnerDiv"
                    style={{
                      width: reviewsPercentage(1),
                    }}
                  ></div>
                </div>
                <div className="ratingPercentage">
                  {reviewsInfo && reviewsPercentage(1)}
                </div>
              </div>
            </div>
            <div className="radio-buttons-ratingDistributionContainer">
              <label className="radio-buttons-label">
                5 Stars
                <input
                  type="radio"
                  name="e"
                  checked={filterOptions.fiveStars}
                  onChange={() => handleFiltering("fiveStars")}
                />
              </label>
              <label className="radio-buttons-label">
                4 Stars
                <input
                  type="radio"
                  name="e"
                  checked={filterOptions.fourStars}
                  onChange={() => handleFiltering("fourStars")}
                />
              </label>
              <label className="radio-buttons-label">
                3 Stars
                <input
                  type="radio"
                  name="e"
                  checked={filterOptions.threeStars}
                  onChange={() => handleFiltering("threeStars")}
                />
              </label>
              <label className="radio-buttons-label">
                2 Stars
                <input
                  type="radio"
                  name="e"
                  checked={filterOptions.twoStars}
                  onChange={() => handleFiltering("twoStars")}
                />
              </label>
              <label className="radio-buttons-label">
                1 Star
                <input
                  type="radio"
                  name="e"
                  checked={filterOptions.oneStar}
                  onChange={() => handleFiltering("oneStar")}
                />
              </label>
            </div>
          </div>
          <div className="wrappingreviews">
            {dataTest.length === 0 && (
              <>
                <Loader />
                <Loader />
                <Loader />
              </>
            )}

            <AutoSizer>
              {({ height, width }) => (
                <InfiniteLoader
                  ref={infiniteListRef}
                  isItemLoaded={(index) => index < dataTest.length}
                  itemCount={itemCount}
                  loadMoreItems={loadMore}
                >
                  {({ onItemsRendered, ref }) => (
                    <List
                      height={height}
                      width={width}
                      itemCount={itemCount}
                      itemSize={getRowHeight}
                      onItemsRendered={onItemsRendered}
                      ref={(listInstance) => {
                        ref(listInstance);
                        listRef.current = listInstance;
                      }}
                      overscanCount={5}
                    >
                      {({ index, style }) => (
                        <ReviewCard
                          setRowHeight={setRowHeight}
                          index={index}
                          dataTest={dataTest[index]}
                          style={style}
                          loading={index === dataTest.length}
                        />
                      )}
                    </List>
                  )}
                </InfiniteLoader>
              )}
            </AutoSizer>
          </div>
        </div>
      </div>
    </>
  );
}

export default testimonialReviews;
