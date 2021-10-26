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

const deleteSponsorById = async (req, res) => {
    console.log("req.params", req.params.id)
    try {
        const deleteSponsor = await prisma.sponsor.delete({
            where: {
                id: parseInt(req.params.id),
            },
        })
        res.json({data: deleteSponsor})
    } catch (error) {
        console.error({error})

        res.status(500).json({error: error.message})
    }
}


module.exports = { getAllSponsors, deleteSponsorById}