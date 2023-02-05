import Link from 'next/link';
import { useRouter } from 'next/router';
import Navbar from '@/components/navbar';



export default function Login() {

    const router = useRouter();
    const { err } = router.query;
    return (
        <>
            <Navbar></Navbar>
            <form action="/api/login" method="post">
                <label for="username">Username:</label>
                <input
                    type='text'
                    id='username'
                    name='username'
                    placeholder='username'
                    required />

                <label for="password">Password:</label>
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

        </>
    )
}