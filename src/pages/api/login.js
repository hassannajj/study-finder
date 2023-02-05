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

  if (!user) {
    //log in fail, create new user
    res.redirect("../tabs/login?" + new URLSearchParams({ err: "Wrong username or password" }).toString())
    //return res.json({ message: "User not found." })

    // // Optional logging to see the responses
    // // in the command line where next.js app is running.

    // // Guard clause checks for first and last name,
    // // and returns early if they are not found
    // if (!username || !password) {
    //   alert("hi")
    //   // Sends a HTTP bad request error code
    //   return res.status(400).json({ data: 'username or password not found' })
    // }

    // // Found the name.
    // // Sends a HTTP success code
    // //res.status(200).json({ data: `${username} ${password}` })

  }
  else if (password !== user.password) {
    // password not the same
    res.redirect("../tabs/login?" + new URLSearchParams({ err: "Wrong username or password" }).toString())


  }
  else {
    res.redirect('/tabs/profile') // '/' redirect to URL path
  }


  //hash password and compare with user.passwordHash

  //res.json({status: "ok, got a response"})

  // HTTP HEADER SENT IS WHEN YOU CALL RES.JSON TWICE!!!
}