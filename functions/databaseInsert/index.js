const mysql = require("mysql2")
const fs = require("fs").promises

exports.insertReviewDataIntoMySQL = async (req, res) => {
  // const databaseCredentials = {
  //   databaseHost: null,
  //   databaseUser: null,
  //   databasePassword: null,
  // }
  // const secretsPaths = [
  //   "/secret1/database-host",
  //   "/secret2/database-password",
  //   "/secret3/database-user",
  // ]
  let connection
  try {
    // for (let i = 0; i < secretsPaths.length; i++) {
    //   const data = await fs.readFile(secretsPaths[i], "utf8")
    //   if (i == 0) {
    //     databaseCredentials.databaseHost = data
    //   } else if (i == 1) {
    //     databaseCredentials.databasePassword = data
    //   } else if (i == 2) {
    //     databaseCredentials.databaseUser = data
    //   }
    // }
    // connection = mysql.createConnection({
    //   host: databaseCredentials.databaseHost,
    //   user: databaseCredentials.databaseUser,
    //   password: databaseCredentials.databasePassword,
    //   database: "appreviews",
    // })
    // const databaseUrl = await fs.readFile("/secret4/database-url", "utf-8")
    // console.log(databaseUrl)
    // connection = mysql.createConnection()
    // connection.connect((err) => {
    //   if (err) {
    //     console.error("Error connecting to MySQL database", err)
    //     return
    //   }
    //   console.log("Connected to MySQL database")
    // })
    //   const playStoreReviews = req.body
    //   const values = playStoreReviews.map((review) => {
    //     return [
    //       review.reviewId,
    //       review.userName,
    //       review.reviewDate,
    //       review.reviewScore,
    //       review.reviewText,
    //       review.postedOn,
    //     ]
    //   })
    //   const query = `
    //     INSERT IGNORE INTO reviews (reviewId, userName, reviewDate, reviewScore, reviewText, postedOn)
    //     VALUES ?
    // `
    //   connection.query(query, [values])
    //   console.log("Data inserted successfully")
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
