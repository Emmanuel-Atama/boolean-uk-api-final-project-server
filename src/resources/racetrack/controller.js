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

// POST for creating a record and a related record



function createOneRacetrackAndCompetition (req,res){
    const bodyRacetrack = req.body
    const bodyCompetition = req.body.competition
    delete bodyRacetrack.competition

    console.log("bodyCompetition", bodyCompetition)
    prisma.racetrack.create({
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
        .then((result)=>{
            console.log(result)
            res.json({data: result})
        })
        .catch(error=>{
            console.error(error)
            res.status(500).json(error)
        })
}

module.exports = { getAllRacetracks, createOneRacetrackAndCompetition}


