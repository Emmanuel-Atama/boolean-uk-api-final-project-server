const prisma = require("../../utils/database")

const getAllRacetracks = async (req, res) => {
try {
    const data = await prisma.racetrack.findMany()
    res.json({data})
} catch (error) {
    console.error({error})

    res.status(500).json({error: error.message})
}
}

const getOneRacetrackById = async (req, res) => {
    console.log("req.params", req.params.id)
    try{
        const racetrack = await prisma.racetrack.findUnique({
            where: {
                id: parseInt(req.params.id),
            },
        })
        res.json({data: racetrack});
    }
    catch(error){
        console.error(error)
        res.status(500).json({error})
    }
}

const updateRacetrackById = async (req, res) => {
    console.log("Books Router [UPDATE]", {params: req.params, body: req.body})
    const id = req.params.id
    const { trackName, countryName, laps } = req.body
  
    const updatedRacetrack = req.body
    try {
const updateRacetrack = await prisma.racetrack.update({
    where: { id },
    data: {updatedRacetrack}
})
res.json({data})
    } catch (error) {
        console.error({error})
    
        res.status(500).json({error: error.message})
    }
}
module.exports = { 
    getAllRacetracks,
    getOneRacetrackById,
    updateRacetrackById
}