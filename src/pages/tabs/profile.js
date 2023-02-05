import Navbar from '@/components/navbar';
import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();




function LeftSide() {
    return (
        <>
            <img
                src="https://cdn.discordapp.com/attachments/1071663751637504001/1071663919531302944/profile-default.png"
                width="250"
                height="250" />
        </>
    )
}



export default function Profile({ eventMap }) {
    const router = useRouter();
    var username = router.query.user

    return (
        <>
            <Navbar></Navbar>
            <div class="content">
                <div class="left">
                    <h1 >Profile</h1>
                    <LeftSide></LeftSide>
                </div>

                <div
                    class="right">
                    <h2>{username}</h2>

                    <form action="/api/login" method="post">
                        <label for="name">Name</label>
                        <input
                            type='name'
                            id='name'
                            name='name'
                            placeholder={eventMap.name} />

                        <label for="year">School Year</label>
                        <input
                            type='date'
                            id='year'
                            name='year'
                            placeholder='year' />

                        <label for="bio">Bio</label>
                        <input
                            type='text'
                            id='bio'
                            name='bio'
                            placeholder='bio' />

                        <button type="Save"> Save</button>
                    </form>
                </div>
            </div>
        </>
    )
}





export async function getServerSideProps() {
    const eventMap = await prisma.user.findMany({
        select: { username: true, name: true, year: true, bio: true }
    });

    return { props: { eventMap: JSON.parse(JSON.stringify(eventMap)) } };
}
