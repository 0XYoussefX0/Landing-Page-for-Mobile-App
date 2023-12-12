const mysql = require("mysql2")
const fs = require("fs").promises

exports.insertReviewDataIntoMySQL = async (req, res) => {
  let connection
  try {
    const databaseUrl = await fs.readFile("/secret4/database-url", "utf-8")
    console.log(databaseUrl)
    connection = mysql.createConnection(databaseUrl)
    connection.connect((err) => {
      if (err) {
        console.error("Error connecting to MySQL database", err)
        return
      }
      console.log("Connected to MySQL database")
    })
    const playStoreReviews = req.body
    const values = playStoreReviews.map((review) => {
      return [
        review.reviewId,
        review.userName,
        review.reviewDate,
        review.reviewScore,
        review.reviewText,
        review.postedOn,
      ]
    })
    const query = `
        INSERT IGNORE INTO appreviews (reviewId, userName, reviewDate, reviewScore, reviewText, postedOn)
        VALUES ?
    `
    connection.query(query, [values])
    console.log("Data inserted successfully")
    res.status(200).send("ayo")
  } catch (err) {
    console.error("Error inserting data : ", err)
    res.status(500).send("FULLA!!!")
  } finally {
    if (connection) {
      connection.end()
    }
  }
}
