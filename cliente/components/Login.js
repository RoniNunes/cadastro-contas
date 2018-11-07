import React, { Component } from 'react'
import './Login.css';
path = require('path');
app.use(path)
class Login extends Component {
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    render() {
        return (
            <div className="center">
                <div className="card">
                    <h1>LoginX</h1>
                    <form>
                        <input
                            className="form-item"
                            placeholder="XUsername goes here..."
                            name="email"
                            type="text"
                            onChange={this.handleChange}
                        />
                        <input
                            className="form-item"
                            placeholder="Password goes here..."
                            name="password"
                            type="password"
                            onChange={this.handleChange}
                        />
                        <input
                            className="form-submit"
                            value="SUBMIT"
                            type="submit"
                        />
                    </form>
                </div>
            </div>
        );
    }

    handleChange(e){
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
}

export default Login;
