// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const {PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient();

export default async function handler(req, res) {
  // prisma queries
  const {username, password} = req.body;

  const user = await prisma.user.findUnique({
    select: {id: true, username: true, password: true},
    where: {username}
    // res.redirect(307, '/') // redirect page?
  });

  if (!user){
    //log in fail, create new user
    const create_user = await prisma.user.create({
      data: {
        username: username,
        password: password,
      },
    })
  }
  else {
    // if user exists, redirect from login page
    // res.redirect('307', '/') // '/' redirect to URL path
  }


  //hash password and compare with user.passwordHash

  res.json({status: "ok"})
}