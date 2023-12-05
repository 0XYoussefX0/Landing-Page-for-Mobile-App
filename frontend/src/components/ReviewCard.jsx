import { useEffect, useRef } from "react"

import Loader from "./Loader.jsx"

import p_icon from "../assets/playstore-icon.svg"
import a_icon from "../assets/appstore-icon.svg"

import p_iconWebp from "../assets/playstore-icon.webp"
import a_iconWebp from "../assets/appstore-icon.webp"

import y_star from "../assets/Yellow_star.svg"
import g_star from "../assets/Grey_star.svg"

function ReviewCard(props) {
  const rowRef = useRef({})
  useEffect(() => {
    if (rowRef.current) {
      props.setRowHeight(props.index, rowRef.current.clientHeight)
    }
  }, [rowRef])

  if (props.dataTest?.reviewDate) {
    const reviewDate = new Date(props.dataTest?.reviewDate)

    const options = { month: "long", day: "2-digit", year: "numeric" }

    var formattedDate = reviewDate.toLocaleDateString("en-US", options)
  }

  return (
    <>
      {props.loading ? (
        <Loader style={props.style} />
      ) : (
        <div style={props.style}>
          <div className="reviewCard" ref={rowRef}>
            <div className="reviewCardFlexContainer">
              <div className="reviewerName">{props.dataTest?.userName}</div>
              <div className="reviewDate">
                {props.dataTest?.reviewDate
                  ? formattedDate
                  : "Review date unknown"}
              </div>
            </div>
            <div className="starRatingContainer2">
              {Array.from(
                { length: props.dataTest?.reviewScore },
                (_, index) => (
                  <img
                    key={index}
                    src={y_star.src}
                    alt={`${index + 1} yellow star${index >= 1 ? "s" : ""}`}
                  />
                )
              )}
              {Array.from(
                { length: 5 - props.dataTest?.reviewScore },
                (_, index) => (
                  <img
                    key={index}
                    src={g_star.src}
                    alt={`${index + 1} grey star${index >= 1 ? "s" : ""}`}
                  />
                )
              )}
            </div>
            <div>
              <p className="reviewContent">{props.dataTest?.reviewText}</p>
              <div className="platformInfoContainer">
                <div className="platformLabel">Posted on</div>
                <div>
                  {props.dataTest?.postedOn === "playStore" ? (
                    <picture>
                      <source srcSet={p_iconWebp.src} type="image/webp" />
                      <img
                        src={p_icon.src}
                        alt="This Review is posted on Play Store"
                      />
                    </picture>
                  ) : (
                    <picture>
                      <source srcSet={a_iconWebp.src} type="image/webp" />
                      <img
                        src={a_icon.src}
                        alt="This Review is posted on App Store"
                      />
                    </picture>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ReviewCard
