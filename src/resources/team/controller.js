const prisma = require("../../utils/database")

const getAllTeams = async (req, res) => {
try {
    const data = await prisma.team.findMany()
    res.json({data})
} catch (error) {
    console.error({error})

    res.status(500).json({error: error.message})
}
}
module.exports = { getAllTeams}