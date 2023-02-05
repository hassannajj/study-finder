import Link from 'next/link'
import Head from 'next/head'
import {
    createBrowserRouter,
    Router,
    RouterProvider,
    useLocation,
} from "react-router-dom";

function IconAndTitle(prop) {
    return (
        <>
            <Link href={prop.link}>
                <div class="zeroBottomPadding">

                    <i class={prop.icon} style={{ fontSize: "2em" }} ></i>
                    <p class="zeroBottomPadding"> {prop.text}</p>
                </div>
            </Link>
        </>
    )
}
function Navbar(prop) {

    return (

        <>
            <Head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
                    integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4"
                    crossorigin="anonymous"></link>

                <link rel="stylesheet" href=
                    "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />

            </Head>
            <nav class="navbar navbar-dark navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" style={{ color: "#1ADBE5" }} href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">Zot Connect</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-auto">

                            <li class="nav-link zeroBottomPadding">
                                <IconAndTitle icon="bi bi-people-fill" text="Events" link="/tabs/events"></IconAndTitle>
                            </li>

                            <li class="nav-link zeroBottomPadding">
                                <IconAndTitle icon="bi bi-emoji-sunglasses" text="Profile" link="/tabs/profile"></IconAndTitle>
                            </li>

                            <li class="nav-link zeroBottomPadding">
                                <IconAndTitle icon="bi bi-arrow-bar-right" text="Sign Out" link="/tabs/login"></IconAndTitle>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar