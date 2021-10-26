const prisma = require("../../utils/database")

const getAllCompetitions = async (req, res) => {
try {
    const data = await prisma.competition.findMany()
    res.json({data})
} catch (error) {
    console.error({error})

    res.status(500).json({error: error.message})
}
}
module.exports = { getAllCompetitions}

