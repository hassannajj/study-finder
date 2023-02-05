import Link from 'next/link';
import { useRouter } from 'next/router';
import BasicNavbar from '@/components/basicNavBar';
import Head from 'next/head';

export default function Login() {

    const router = useRouter();
    const { err } = router.query;
    return (
        <>
            <Head><title>Login</title></Head>
            <BasicNavbar></BasicNavbar>
            <div class="form">
                <form action="/api/login" method="post">
                    <label for="username">Login</label>
                    <input
                        type='text'
                        id='username'
                        name='username'
                        placeholder='username'
                        required />

                    <label for="password"></label>
                    <input
                        type='password'
                        id='password'
                        name='password'
                        placeholder='password'
                        required
                        minlength="10"
                        maxlength="20" />

                    <button type="submit"> Sign In</button>
                </form>
                <Link
                    href='/tabs/signup'>Sign up</Link>
                {err ? (<div>{err}</div>) : null}

            </div>
        </>
    )
}