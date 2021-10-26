const prisma = require("../../utils/database")

const getAllCars = async (req, res) => {
try {
    const data = await prisma.car.findMany()
    res.json({data})
} catch (error) {
    console.error({error})

    res.status(500).json({error: error.message})
}
}
module.exports = { getAllCars}