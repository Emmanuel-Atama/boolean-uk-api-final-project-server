const prisma = require("../../utils/database")

const getAllDrivers = async (req, res) => {
try {
    const data = await prisma.driver.findMany()
    res.json({data})
} catch (error) {
    console.error({error})

    res.status(500).json({error: error.message})
}
}

const getOneDriverById = async (req, res) => {
    console.log("req.params", req.params.id)
    try{
        const driver = await prisma.driver.findUnique({
            where: {
                id: parseInt(req.params.id),
            },
        })
        res.json({data: driver});
    }
    catch(error){
        console.error(error)
        res.status(500).json({error})
    }

    const createOne = async (req, res) => {
        const { firstName, lastName, carId } = req.body
        try {
            const createOne = await prisma.driver.create({
                    data:  {
                        driver: {
                            connect: {id: carId},
                        },
                        firstName, lastName
                    },
                })
                res.json({data: createOne})
        } catch (error) {
            console.error({error})  
          
            res.status(500).json({ error: error.message})
          }
    }
}

module.exports = { getAllDrivers, getOneDriverById}

