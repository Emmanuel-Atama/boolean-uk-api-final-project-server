const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
    log: [
        {
            emit: "event",
            level: "query",
        },
    ],
})

prisma.$on("query", async event => {
    console.log({ event })
  })

module.exports = prisma