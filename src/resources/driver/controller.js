const prisma = require("../../utils/database")

const getAllDrivers = async (req, res) => {
try {
    const data = await prisma.driver.findMany()
    res.json({data})
} catch (error) {
    console.error({error})

    res.status(500).json({error: error.message})
}
}
module.exports = { getAllDrivers}