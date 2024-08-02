import React,{useState} from 'react'
import Navbar from './Navbar'
function Login(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const reset = () => {
        setEmail("")
        setPassword("")
    }

    const submit = (e) => {
        e.preventDefault()
    }

    return(
        <>
        <Navbar />
        <main>
            <form onSubmit={submit}>
            <h1>Login</h1>
            <table>
                <tbody>
                <tr>
                    <td>
                        email :
                    </td>
                    <td>
                        <input type="email" placeholder='email@email.com' value={email} onChange={(e) => handleEmail(e)} />
                    </td>
                </tr>
                <tr>
                    <td>
                        Password :
                    </td>
                    <td>
                        <input type="password" placeholder='**********' value={password} onChange={(e) => handlePassword(e)}/>
                    </td>
                </tr>
                </tbody>
            </table>
                <button>Login</button>
                <button onClick={reset}>Reset</button>
                </form>
        </main>
        </>
    )
}

export default Login