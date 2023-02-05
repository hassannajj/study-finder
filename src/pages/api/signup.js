// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();



export default async function handler(req, res) {
    // prisma queries
    const { username, password } = req.body;

    const user = await prisma.user.findUnique({
        select: { id: true, username: true, password: true },
        where: { username }
    });

    if (user) {
        res.redirect("../tabs/signup?" + new URLSearchParams({ err: "Username already exists" }).toString())

    }
    else {
        const create_user = await prisma.user.create({
            data: {
                username: username,
                password: password,
            },
        })

        res.redirect('/tabs/profile?user=' + user.username) // '/' redirect to URL path
    }

}
