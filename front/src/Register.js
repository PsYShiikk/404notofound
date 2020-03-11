import React from "react";

function Login() {
    return (
        <div id="container">
            <div id="logo"></div>
            <div id="login">
                <form action="" method="POST" className="formlogin">
                    <div className="txtb">
                        <input type="text" className="" name="username" value="" required=""/>
                            <span data-placeholder="Username"></span>
                    </div>
                    <div className="txtb">
                        <input type="password" className="" name="password" value="" required=""/>
                            <span data-placeholder="Password"></span>
                    </div>
                    <input type="submit" value="Login" className="btn_submit"/>
                </form>
            </div>
        </div>
    );
}

export default Login;