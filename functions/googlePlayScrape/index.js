import gplay from "google-play-scraper";
import { createClient } from "@supabase/supabase-js";

export async function fetchPlayStoreReviews(req, res) {
  let reviews;
  try {
    const response = await gplay.reviews({
      appId: "com.quranly.app",
      sort: gplay.sort.RECENT,
      num: 2000,
    });
    reviews = response.data.map((review) => {
      const { id, userName, date, score, text } = review;
      const reviewDate = date.slice(0, -14);
      const postedOn = "playStore";
      return {
        review_id: id,
        user_name: userName,
        review_date: reviewDate,
        review_score: score,
        review_text: text,
        posted_on: postedOn,
      };
    });
  } catch (err) {
    console.log("Error scraping reviews in Google Play:", error);
    res.status(500).send("Internal Server Error");
  }

  const supabaseUrl = process.env.supabaseUrl;
  const supabaseKey = process.env.supabaseKey;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const { error } = await supabase.from("appReviews").insert(reviews);
  if (error) {
    console.error("Error inserting data : ", error);
    res.status(500).send("Error inserting data");
  }
  res.status(200).send("Data inserted successfully");
}
