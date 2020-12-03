import React from 'react';
import './Login.css';


class Login extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         err: false
    //     }
    // }

    render() {
        return (
            <div className="login-form">
                <div className="form-box">
                    <h2>Login Form</h2>
                    <form action="">
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" name="username" id="username" placeholder="Username" className="form-control" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" name="password" id="password" placeholder="Password" className="form-control" />
                        </div>

                        <div className="btn-login">
                            <input type="submit" value="Login" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;