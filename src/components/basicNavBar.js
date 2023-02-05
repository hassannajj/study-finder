import Head from 'next/head'
function BasicNavbar() {
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
                </div>
            </nav>
        </>
    )
}


export default BasicNavbar