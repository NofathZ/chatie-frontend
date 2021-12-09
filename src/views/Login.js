import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './SignupLogin.scss'
import UsersAPI from '../api/UsersAPI'

function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const loginUser = () => {
        UsersAPI.post('/login', {
            username: username,
            password: password
        })
        .then(function (response) {
            console.log("ada")
            alert(response.data.message)
            return (
                <Link onClick={e => (!username || !password) ? e.preventDefault() : null} to={`/chat?name=${username}&room=${password}`}>
                    <button className={'button mt-20'} type="submit">Sign In</button>
                </Link>
            )
        })
        .catch(function (error) {
            alert(error.response.data.message)
        });
    }
    const loginFunction = (event) => {
        loginUser()
    }

    return(
        <>
            <div className="signup-container">
                <div className="signup-card">
                    <h1 className="title-signup-login">Login</h1>
                    <form action="/chat" onSubmit={loginFunction}>
                        <input type="text" id="username" name="username" placeholder="Username" required onChange={event => setUsername(event.target.value)} />
                        <input type="text" id="Password" name="Password" placeholder="Password" required onChange={event => setPassword(event.target.value)} />
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login