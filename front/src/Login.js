import React from "react";

function Login() {
    return (
        <div className="login_page">
            <div className="loginform">

                <div className="txtb">
                    <textarea type="text" className="message_input" name="message" value="" required></textarea>
                    <span data-placeholder="Message"></span>
                </div>
                <div className="txtb">
                    <textarea type="text" className="message_input" name="message" value="" required></textarea>
                    <span data-placeholder="Message"></span>
                </div>

            </div>
        </div>
    );
}

export default Login;