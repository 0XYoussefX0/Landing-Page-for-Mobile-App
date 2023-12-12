const express = require("express")
const mysql = require("mysql2")
// const cors = require("cors")
/*const MailerLite = require('@mailerlite/mailerlite-nodejs').default;*/

const app = express()

// app.use(cors())
app.use(express.json())

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

app.get("/fiveStars/:lastId", (req, res) => {
  const lastId = parseInt(req.params.lastId)

  connection.query(
    `SELECT * FROM appreviews WHERE reviewScore = 5 and id > ${lastId} ORDER BY id LIMIT 10`,
    (err, results) => {
      if (err) {
        console.error("Error executing query :", err)
        return res.status(500).json({ error: "Database error" })
      }

      // // Set the CORS headers
      // res.setHeader("Access-Control-Allow-Origin", "*")
      // res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
      // res.setHeader(
      //   "Access-Control-Allow-Headers",
      //   "Origin, X-Requested-With, Content-Type, Accept"
      // )

      res.json(results)
    }
  )
})

app.get("/fourStars/:lastId", (req, res) => {
  const lastId = parseInt(req.params.lastId)

  connection.query(
    `SELECT * FROM appreviews WHERE reviewScore = 4 and id > ${lastId} ORDER BY id LIMIT 10 `,
    (err, results) => {
      if (err) {
        console.error("Error executing query :", err)
        return res.status(500).json({ error: "Database error" })
      }

      // // Set the CORS headers
      // res.setHeader("Access-Control-Allow-Origin", "*")
      // res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
      // res.setHeader(
      //   "Access-Control-Allow-Headers",
      //   "Origin, X-Requested-With, Content-Type, Accept"
      // )

      res.json(results)
    }
  )
})

app.get("/threeStars/:lastId", (req, res) => {
  const lastId = parseInt(req.params.lastId)

  connection.query(
    `SELECT * FROM appreviews WHERE reviewScore = 3 and id > ${lastId} ORDER BY id LIMIT 10 `,
    (err, results) => {
      if (err) {
        console.error("Error executing query :", err)
        return res.status(500).json({ error: "Database error" })
      }

      // // Set the CORS headers
      // res.setHeader("Access-Control-Allow-Origin", "*")
      // res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
      // res.setHeader(
      //   "Access-Control-Allow-Headers",
      //   "Origin, X-Requested-With, Content-Type, Accept"
      // )

      res.json(results)
    }
  )
})

app.get("/twoStars/:lastId", (req, res) => {
  const lastId = parseInt(req.params.lastId)

  connection.query(
    `SELECT * FROM appreviews WHERE reviewScore = 2 and id > ${lastId} ORDER BY id LIMIT 10 `,
    (err, results) => {
      if (err) {
        console.error("Error executing query :", err)
        return res.status(500).json({ error: "Database error" })
      }

      // // Set the CORS headers
      // res.setHeader("Access-Control-Allow-Origin", "*")
      // res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
      // res.setHeader(
      //   "Access-Control-Allow-Headers",
      //   "Origin, X-Requested-With, Content-Type, Accept"
      // )

      res.json(results)
    }
  )
})

app.get("/oneStar/:lastId", (req, res) => {
  const lastId = parseInt(req.params.lastId)

  connection.query(
    `SELECT * FROM appreviews WHERE reviewScore = 1 and id > ${lastId} ORDER BY id LIMIT 10 `,
    (err, results) => {
      if (err) {
        console.error("Error executing query :", err)
        return res.status(500).json({ error: "Database error" })
      }

      // // Set the CORS headers
      // res.setHeader("Access-Control-Allow-Origin", "*")
      // res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
      // res.setHeader(
      //   "Access-Control-Allow-Headers",
      //   "Origin, X-Requested-With, Content-Type, Accept"
      // )

      res.json(results)
    }
  )
})
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
// app.listen("8000", () => {
//   console.log("listenning in port 8000")
// })
exports.api = app
