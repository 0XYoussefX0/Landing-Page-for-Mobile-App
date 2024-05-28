import { createClient } from "@supabase/supabase-js";

/*const MailerLite = require('@mailerlite/mailerlite-nodejs').default;*/

const getScore = (scoreParam) => {
  if (scoreParam === "fiveStars") {
    return 5;
  } else if (scoreParam === "fourStars") {
    return 4;
  } else if (scoreParam === "threeStars") {
    return 3;
  } else if (scoreParam === "twoStars") {
    return 2;
  } else if (scoreParam === "oneStar") {
    return 1;
  } else {
    return 5;
  }
};

export async function getReviews(req, res) {
  const score = getScore(req.query.score);
  const lastId = req.query.lastId ?? 0;
  const supabaseUrl = process.env.supabaseUrl;
  const supabaseKey = process.env.supabaseKey;
  const supabase = createClient(supabaseUrl, supabaseKey);
  const { data, error } = await supabase
    .from("appReviews")
    .select("*")
    .eq("review_score", score)
    .gt("id", lastId)
    .order("id", { ascending: true })
    .limit(10);
  if (error) {
    return res.status(500).json({ error: "Database error" });
  }
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.status(200).json(data);
}
/*
app.post("/subscribe", (req, res) => {
  const mailerlite = new MailerLite({
	api_key: "API_KEY"
  });
  const { emailInput } = req.body
  mailerlite.subscribers.createOrUpdate({
    email: emailInput
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      if (error.response) console.log(error.response.data);
    });
})
*/
