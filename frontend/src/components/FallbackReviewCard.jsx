import { useEffect } from "react"

import p_icon from "../assets/playstore-icon.svg"
import a_icon from "../assets/appstore-icon.svg"

import p_iconWebp from "../assets/playstore-icon.webp"
import a_iconWebp from "../assets/appstore-icon.webp"

import y_star from "../assets/Yellow_star.svg"
import g_star from "../assets/Grey_star.svg"

function FallbackReviewCard(props) {
  let formattedDate
  useEffect(() => {
    if (props.review.reviewDate) {
      const reviewDate = new Date(props.review.reviewDate)

      const options = { month: "long", day: "2-digit", year: "numeric" }

      formattedDate = reviewDate.toLocaleDateString("en-US", options)
    }
  }, [])

  return (
    <div className="reviewCard wrapper" aria-hidden={props.hidden}>
      <div className="reviewCardFlexContainer">
        <div className="reviewerName">{props.review.userName}</div>
        <div className="reviewDate">
          {props.review.reviewDate ? formattedDate : "Review date unknown"}
        </div>
      </div>
      <div className="starRatingContainer2">
        {Array.from({ length: props.review.reviewScore }, (_, index) => (
          <img
            key={index}
            src={y_star.src}
            alt={`${index + 1} yellow star${index >= 1 ? "s" : ""}`}
            width="17"
            height="15"
          />
        ))}
        {Array.from({ length: 5 - props.review.reviewScore }, (_, index) => (
          <img
            key={index}
            src={g_star.src}
            alt={`${index + 1} grey star${index >= 1 ? "s" : ""}`}
            width="17"
            height="15"
          />
        ))}
      </div>
      <div>
        <p className="reviewContent">{props.review.reviewText}</p>
        <div className="platformInfoContainer">
          <div className="platformLabel">Posted on</div>
          <div>
            {props.review.postedOn === "playStore" ? (
              <picture>
                <source srcSet={p_iconWebp.src} type="image/webp" />
                <img
                  src={p_icon.src}
                  alt="This Review is posted on Play Store"
                  width="25"
                  height="26"
                />
              </picture>
            ) : (
              <picture>
                <source srcSet={a_iconWebp.src} type="image/webp" />
                <img
                  src={a_icon.src}
                  alt="This Review is posted on App Store"
                  width="27"
                  height="33"
                />
              </picture>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FallbackReviewCard
