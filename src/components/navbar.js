import Link from 'next/link'
import Head from 'next/head'
import Script from 'next/script'
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
function Navbar() {
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
                    <a class="navbar-brand" style={{ color: "#1ADBE5" }} href="#">Zot Connect</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item active">
                                <a class="nav-link" href="#this_is_a_useless_link" style={{ color: "white" }}>Browse by:</a>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Title
                                </a>
                                <ul class="dropdown-menu scrollable-menu" role="menu" id='titleDrop'>
                                </ul>
                            </li>
                            <li class="nav-link zeroBottomPadding">
                                <IconAndTitle icon="bi bi-people-fill" text="Groups" link="\tabs\events"></IconAndTitle>
                            </li>
                            <li class="nav-link zeroBottomPadding">
                                <IconAndTitle icon="bi bi-person-plus-fill" text="Add People" link="\tabs\friends"></IconAndTitle>
                            </li>
                            <li class="nav-link zeroBottomPadding">
                                <IconAndTitle icon="bi bi-plus" text="Add" link="#"></IconAndTitle>
                            </li>
                            <li class="nav-link zeroBottomPadding">
                                <IconAndTitle icon="bi bi-emoji-sunglasses" text="Profile" link="\tabs\profile"></IconAndTitle>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}


export default Navbar