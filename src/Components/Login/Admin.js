import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

export default class Admin extends Component {
    constructor(props){
        super(props);
        this.state = {
            redirect: null,
        };
    };
    componentDidMount(){
        const form = document.querySelector("form");
        const loading = document.querySelector(".loading");
        const loginBtn = document.querySelector(".login-btn");
        const failed = document.querySelector(".failed");
        const setBirthdayData = this.props.setBirthdayData;
        const setState = page => this.setState({redirect: page});
        form.onsubmit = handleSubmit;

        function handleSubmit(e) {
            e.preventDefault();
            loginBtn.style.display = "none"
            loading.style.display = "flex";

            let formData = new FormData(form)
            let username =  formData.get("username");
            let password = formData.get("password");
            let Params = {
                headers: {
                    'Content-Type': 'application/JSON'
                },
                body: JSON.stringify({
					username: username,
					password: password,
                }),
                method: "POST"
            };
            const sendData = async function(){
             const res = await fetch("https://calendar-app-femi.herokuapp.com/admin/login", Params);
                const data = await res.json();
                loading.style.display = "none";
                loginBtn.style.display = "flex";
                if (data.error){
                failed.style.display = "flex";
                failed.innerHTML = `<h6>Error: ${data.error}</h6>`
                } else {
                failed.style.display = "none";
                setBirthdayData(data);
                if (data.type === "undergraduate") {
                    setState("/ugCalendar");
                }
                if (data.type === "postgraduate") {
                    setState("/pgCalendar");
                };
              };
            };

            sendData().catch(err => {
                loading.style.display = "none";
                loginBtn.style.display = "flex";
                failed.style.display = "flex";
                console.log(err);
            });
        };

    };

    render() {
        if (this.state.redirect === null) {
        return (
            <div className="container-xl container-fluid">
            <div className="login">
                <h3>Welcome</h3>
                <form>
                    <div className="loginId">
                        <label>Username</label>
                        <input type="name"name="username" autoComplete="true" minLength="3" maxLength="15" required placeholder="Username"/>
                    </div>
                    <div className="password">
                        <label>Password</label>
                        <input type="password" name="password" minLength="5" maxLength="15" required placeholder="Password" />
                    </div>
                    <div className="login-btn">
                        <button type="submit">Login</button>
                    </div>
                </form>
            <div className="loading"><p>Loading...</p></div>
             <div className="failed">
                 <h6 className="text-center">Invalid username or password,<br/> Please try again</h6>
             </div>
            </div>
            </div>
        )
        }
        else {
          return  <Redirect to={this.state.redirect} />
        };
    };
};
