'use client'

const { signOut } = require("next-auth/react")

const Logout = () => {
    return (
        <button onClick={() => signOut()}>Logout</button>
    )
}

export default Logout;