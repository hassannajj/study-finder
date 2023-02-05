const { PrismaClient } = required("@prisma/client")
const prisma = new PrismaClient()

// export default async function Courses(req, res){

//     // const {name} = req.body

//     const course = await prisma.Courses.findMany({
//         select : {name : true, quarter : true},
//     })
    
//     res.status(200).send(course)

// }