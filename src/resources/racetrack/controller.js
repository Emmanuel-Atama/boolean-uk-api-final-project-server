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
    const { trackName, countryName, laps } = req.body;
    try {
const result = await prisma.racetrack.update({
    where: {
        id: parseInt(req.params.id),
     },
    data: req.body,
})
res.json({data: [result.trackName, result.countryName, result.laps]})
    } catch (error) {
        console.error({error})
    
        res.status(500).json({error: error.message})
    }
}

const createOneRacetrackAndCompetition = async (req,res) => {
    const bodyRacetrack = req.body
    const bodyCompetition = req.body.competition
    delete bodyRacetrack.competition

    console.log("bodyCompetition", bodyCompetition)
    try {
        const result = await prisma.racetrack.create({
            data: {
                ...bodyRacetrack,
                competition: {
                 create: [
                     {
                         ...bodyCompetition,
                         date: new Date(bodyCompetition.date)
                     },
                 ],
                },
            },
            include: {
                competition: true,
            },
            })
            res.json({data: result})
    }catch (error) {
        console.error({error})
    
        res.status(500).json({error: error.message})
    }
}

module.exports = { 
    getAllRacetracks,
    getOneRacetrackById,
    updateRacetrackById,
    createOneRacetrackAndCompetition
}

