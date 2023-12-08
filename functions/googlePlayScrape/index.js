import gplay from "google-play-scraper"

async function fetchPlayStoreReviews() {
  let reviews
  try {
    const response = await gplay.reviews({
      appId: "com.quranly.app",
      sort: gplay.sort.RECENT,
      num: 2000,
    })
    reviews = response.data.map((review) => {
      const {
        id: reviewId,
        userName,
        date,
        score: reviewScore,
        text: reviewText,
      } = review
      const reviewDate = date.slice(0, -14)
      const postedOn = "playStore"
      return {
        reviewId,
        userName,
        reviewDate,
        reviewScore,
        reviewText,
        postedOn,
      }
    })
  } catch (error) {
    console.log("Error scraping reviews in Google Play:", error)
  }
  return reviews
}

const data = await fetchPlayStoreReviews()
console.log(data)
