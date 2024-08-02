import React,{useState} from 'react'
import Navbar from './Navbar'
function Register(){
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [name,setName] = useState("")
    const [date,setDate] = useState("")

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleDate = (e) => {
        setDate(e.target.value)
    }


    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const reset = () => {
        setEmail("")
        setPassword("")
        setName("")
        setDate("")
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
                        name :
                    </td>
                    <td>
                        <input type="name" placeholder='enter your name' value={name} onChange={(e) => handleName(e)} />
                    </td>
                </tr>    
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
                <tr>
                    <td>
                        Date :
                    </td>
                    <td>
                        <input type="date" min="1990-01-01" max="2006-12-31" value={date} onChange={(e) => handleDate(e)} />
                    </td>
                </tr>
                </tbody>
            </table>
                <button>Register</button>
                <button onClick={reset}>Reset</button>
                </form>
        </main>
        </>
    )
}

export default Register