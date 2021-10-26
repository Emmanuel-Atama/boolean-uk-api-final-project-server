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

const getTeamByName = async (req, res) => {
    try {
        const teamName = await prisma.team.findFirst({
            where: {
                teamName: req.params.teamName
            },
            
        })
        res.json({data: teamName})
    } catch (error) {
        console.error({error})
    
        res.status(500).json({error: error.message})
    }
}
module.exports = { 
getAllTeams,
getTeamByName
}