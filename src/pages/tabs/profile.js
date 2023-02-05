import Navbar from '@/components/navbar';
import Head from 'next/head'
import Link from 'next/link';
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

function LeftSide() {
    console.log("hi")
    return (
        <>
            <img
                src="https://cdn.discordapp.com/attachments/1071663751637504001/1071663919531302944/profile-default.png"
                width="250"
                height="250" />
            <h1>HI</h1>
        </>
    )
}

export default function Profile() {
    console.log("hi2")

    return (
        <>
            <Head><title>Profile</title></Head>
            <Navbar></Navbar>
            <LeftSide></LeftSide>
            <h1>Profile</h1>
        </>
    )
}


