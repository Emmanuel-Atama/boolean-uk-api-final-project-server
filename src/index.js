require("dotenv").config()

const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

const app = express()

/*IMPORT ROUTERS */

const carsRouter = require("./resources/car/router")
const competitionsRouter = require("./resources/competition/router")
const driversRouter = require("./resources/driver/router")
const racetracksRouter = require("./resources/racetrack/router")
const sponsorsRouter = require("./resources/sponsor/router")
const teamsRouter = require("./resources/team/router")


/* SETUP MIDDLEWARE */

app.disable("x-powered-by")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

/* SETUP ROUTES */

app.use("/cars", carsRouter)
app.use("/competitions", competitionsRouter)
app.use("/drivers", driversRouter)
app.use("/racetracks", racetracksRouter)
app.use("/sponsors", sponsorsRouter)
app.use("/teams", teamsRouter)

app.get("*", (req, res) => {
  res.json({ ok: true })
})

/* START SERVER */

const port = process.env.PORT || 3030

app.listen(port, () => {
  console.log(`\n🚀 Server is running on http://localhost:${port}/\n`)
})
