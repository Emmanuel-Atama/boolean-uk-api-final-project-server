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

const createOne = async (req, res) => {
    const { sponsorName, teamId } = req.body
    try {
        const createOne = await prisma.sponsor.create({
                data:  {
                    team: {
                        connect: {id: teamId},
                    },
                    sponsorName    //don't need :sponsorName cause they have same name
                },
            })
            res.json({data: createOne})
    } catch (error) {
        console.error({error})  
      
        res.status(500).json({ error: error.message})
      }
}

const deleteById = async (req, res) => {
    console.log("req.params", req.params.id)
    try {
        const deleteById = await prisma.sponsor.delete({
            where: {
                id: parseInt(req.params.id),
            },
        })
        res.json({data: deleteById})
    } catch (error) {
        console.error({error})

        res.status(500).json({error: error.message})
    }
}



module.exports = { getAllSponsors, createOne, deleteById}