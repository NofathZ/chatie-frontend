import React, {useState} from 'react'
import './SignupLogin.scss'
import UsersAPI from '../api/UsersAPI'

function Signup() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const insertUser = () => {
        UsersAPI.post('/signup', {
            username: username,
            password: password
        })
        .then(function (response) {
            alert(response.data.message)
        })
        .catch(function (error) {
            alert(error.response.data.message)
        });
    }
    const insertFunction = (event) => {
        insertUser()
    }

    return(
        <>
            <div className="signup-container">
                <div className="signup-card">
                    <h1 className="title-signup-login">Sign Up</h1>
                    <form onSubmit={insertFunction}>
                        <input type="text" id="username" name="username" placeholder="Username" required onChange={event => setUsername(event.target.value)} />
                        <input type="text" id="Password" name="Password" placeholder="Password" required onChange={event => setPassword(event.target.value)} />
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup