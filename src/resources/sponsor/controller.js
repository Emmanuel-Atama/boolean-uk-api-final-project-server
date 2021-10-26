const prisma = require("../../utils/database")

const getAllSponsors = async (req, res) => {
try {
    const data = await prisma.sponsor.findMany()
    res.json({data})
} catch (error) {
    console.error({error})

    res.status(500).json({error: error.message})
}
}
module.exports = { getAllSponsors}