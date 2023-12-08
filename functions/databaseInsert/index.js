const mysql = require("mysql2")

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "review_data",
})

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL database", err)
    return
  }
  console.log("Connected to MySQL database")
})

function removeDuplicates(array) {
  return Array.from(new Set(array.map(JSON.stringify))).map(JSON.parse)
}

async function insertReviewDataIntoMySQL() {
  const playStoreReviews = await fetchPlayStoreReviews()

  const values = appReviews.map((review) => {
    return [
      review.reviewId,
      review.userName,
      review.reviewDate,
      review.reviewScore,
      review.reviewText,
      review.postedOn,
    ]
  })

  try {
    const query = `
      INSERT IGNORE INTO reviews (reviewId, userName, reviewDate, reviewScore, reviewText, postedOn)
      VALUES ?
  `
    connection.query(query, [values])
    console.log("Data inserted successfully")
  } catch (err) {
    console.error("Error inserting data : ", err)
  } finally {
    connection.end()
  }
}
