const mysql = require("mysql2")
const fs = require("fs")

//async function insertReviewDataIntoMySQL(req, res) {
//   const databaseCredentials = {
//     databaseHost: null,
//     databaseUser: null,
//     databasePassword: null,
//   }

//   const secretsPaths = ["", "", ""]

//   for(let i = 0; i < secretsPaths.length; i++) {
//     fs.readFile(secretsPaths[i], "utf8", (err, data) => {
//       if(err) {
//         console.error(err)
//         res.status(500).send("Error")
//       }
//       databaseCredentials.
//     })
//   }

//   const connection = mysql.createConnection({
//     host: databaseCredentials.databaseHost,
//     user: databaseCredentials.databaseUser,
//     password: databaseCredentials.databasePassword,
//     database: "appreviews",
//   })

//   connection.connect((err) => {
//     if (err) {
//       console.error("Error connecting to MySQL database", err)
//       return
//     }
//     console.log("Connected to MySQL database")
//   })

//   const playStoreReviews = JSON.parse(req.body)

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

//   try {
//     const query = `
//       INSERT IGNORE INTO reviews (reviewId, userName, reviewDate, reviewScore, reviewText, postedOn)
//       VALUES ?
//   `
//     connection.query(query, [values])
//     console.log("Data inserted successfully")
//   } catch (err) {
//     console.error("Error inserting data : ", err)
//   } finally {
//     connection.end()
//   }
// }

function insertReviewDataIntoMySQL(req, res) {
  res.status(200).send("Hello World !!")
}

module.exports = insertReviewDataIntoMySQL
