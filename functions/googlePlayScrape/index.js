import gplay from "google-play-scraper"
import axios from "axios"
export async function fetchPlayStoreReviews(req, res) {
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
  } catch (err) {
    console.log("Error scraping reviews in Google Play:", error)
    res.status(500).send("Internal Server Error")
  }

  try {
    await axios.post(
      "https://us-central1-striking-berm-340417.cloudfunctions.net/insertReviewDataIntoMySQL",
      JSON.stringify(reviews),
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    res.status(200).send("Reviews sent successfully!!")
  } catch (error) {
    console.log("Error sending Data", error)
    res.status(500).send("Internal Server Error")
  }
}
