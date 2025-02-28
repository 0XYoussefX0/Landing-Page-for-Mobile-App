import gplay from "google-play-scraper";
export async function getAppInfo(req, res) {
  try {
    const appInfo = await gplay.app({
      appId: "com.quranly.app",
    });
    const { score, ratings, histogram } = appInfo;
    const reviewsInfo = {
      score,
      ratings,
      histogram,
    };
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Methods", "GET, OPTIONS");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.status(200).json(reviewsInfo);
  } catch (err) {
    console.log("Error getting reviews info in Google Play:", err);
    res.status(500).send("Internal Server Error");
  }
}
