import { useNavigate } from "react-router-dom"
function Navbar(){
    const navigate = useNavigate()
    return(
        <>
        <header>
            <h1>
                My Work
            </h1>
            <menu>
                <ul>
                    <li onClick={() => navigate('/')}>
                        Home
                    </li>
                    <li onClick={() => navigate('/login')}>
                        Login
                    </li>
                    <li onClick={() => navigate('/register')}>
                        Register
                    </li>
                    <li onClick={() => navigate('/about')}>
                        About
                    </li>
                </ul>
            </menu>
        </header>
        </>
    )
}

export default Navbar