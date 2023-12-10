import gplay from "google-play-scraper"
import axios from "axios"
export async function fetchPlayStoreReviews(req, res) {
  try {
    const response = await gplay.reviews({
      appId: "com.quranly.app",
      sort: gplay.sort.RECENT,
      num: 2000,
    })
    const reviews = response.data.map((review) => {
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

    await axios.post("secondFunctionUrl", JSON.stringify(reviews), {
      headers: {
        "Content-Type": "application/json",
      },
    })
    res.status(200).send("Reviews fetched and sent successfully!")
  } catch (error) {
    console.log("Error scraping reviews in Google Play:", error)
    res.status(500).send("Internal Server Error")
  }
}
