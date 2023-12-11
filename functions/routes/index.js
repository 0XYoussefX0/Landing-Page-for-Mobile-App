const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")
/*const MailerLite = require('@mailerlite/mailerlite-nodejs').default;*/

app = express()

app.use(cors())
app.use(express.json());


const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "review_data",
})

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database", err)
    return
  }
  console.log("Connected to the databaase")
})

const pageSize = 6

app.get("/fiveStars/:lastId", (req, res) => {
  const lastId = parseInt(req.params.lastId)

  connection.query(
    `SELECT * FROM reviews WHERE reviewScore = 5 and id > ${lastId} ORDER BY id LIMIT 10 `,
    (err, results) => {
      if (err) {
        console.error("Error executing query :", err)
        return res.status(500).json({ error: "Database error" })
      }

      // Set the CORS headers
      res.setHeader("Access-Control-Allow-Origin", "*")
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      )

      res.json(results)
    }
  )
})

app.get("/fourStars/:lastId", (req, res) => {
  const lastId = parseInt(req.params.lastId)

  connection.query(
    `SELECT * FROM reviews WHERE reviewScore = 4 and id > ${lastId} ORDER BY id LIMIT 10 `,
    (err, results) => {
      if (err) {
        console.error("Error executing query :", err)
        return res.status(500).json({ error: "Database error" })
      }

      // Set the CORS headers
      res.setHeader("Access-Control-Allow-Origin", "*")
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      )

      res.json(results)
    }
  )
})

app.get("/threeStars/:lastId", (req, res) => {
  const lastId = parseInt(req.params.lastId)

  connection.query(
    `SELECT * FROM reviews WHERE reviewScore = 3 and id > ${lastId} ORDER BY id LIMIT 10 `,
    (err, results) => {
      if (err) {
        console.error("Error executing query :", err)
        return res.status(500).json({ error: "Database error" })
      }

      // Set the CORS headers
      res.setHeader("Access-Control-Allow-Origin", "*")
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      )

      res.json(results)
    }
  )
})

app.get("/twoStars/:lastId", (req, res) => {
  const lastId = parseInt(req.params.lastId)

  connection.query(
    `SELECT * FROM reviews WHERE reviewScore = 2 and id > ${lastId} ORDER BY id LIMIT 10 `,
    (err, results) => {
      if (err) {
        console.error("Error executing query :", err)
        return res.status(500).json({ error: "Database error" })
      }

      // Set the CORS headers
      res.setHeader("Access-Control-Allow-Origin", "*")
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      )

      res.json(results)
    }
  )
})

app.get("/oneStar/:lastId", (req, res) => {
  const lastId = parseInt(req.params.lastId)

  connection.query(
    `SELECT * FROM reviews WHERE reviewScore = 1 and id > ${lastId} ORDER BY id LIMIT 10 `,
    (err, results) => {
      if (err) {
        console.error("Error executing query :", err)
        return res.status(500).json({ error: "Database error" })
      }

      // Set the CORS headers
      res.setHeader("Access-Control-Allow-Origin", "*")
      res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      )

      res.json(results)
    }
  )
})
/*
const mailerlite = new MailerLite({
	api_key: "API_KEY"
});

app.post("/subscribe", (req, res) => {
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
app.listen("8000", () => {
  console.log("listenning in port 8000")
})