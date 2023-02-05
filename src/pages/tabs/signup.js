import Link from 'next/link';
import { useRouter } from 'next/router';
import BasicNavbar from '@/components/basicNavbar';
import Head from 'next/head';


export default function Login() {
    const router = useRouter();
    const { err } = router.query;
    return (
        <>
            <Head><title>SignUp</title></Head>
            <BasicNavbar></BasicNavbar>
            <div class="form">
                <form action="/api/signup" method="post">
                    <label for="username">Sign Up</label>
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

                    <button type="submit"> Sign up</button>
                </form>
                <Link
                    href='/tabs/login'>Log in</Link>
                {err ? (<div>{err}</div>) : null}
            </div>
        </>
    )
}