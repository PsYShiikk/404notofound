import React from "react";

function Register() {
    return (
        <div id="container">
            <div id="logo"></div>
            <div id="login">
                <form action="" method="POST" className="formregister">
                    <div className="txtb">
                        <input type="text" className="" name="username" required=""/>
                            <span data-placeholder="Username"></span>
                    </div>
                    <div className="txtb">
                        <input type="password" className="" name="password" required=""/>
                            <span data-placeholder="Password"></span>
                    </div>
                    <div className="txtb">
                        <input type="password" className="" name="passwordverification" required=""/>
                            <span data-placeholder="Password verification"></span>
                    </div>
                    <div className="txtb">
                        <input type="file" className="" name="profilpicture" required=""/>
                    </div>
                    <input type="submit" value="Register" className="btn_submit"/>
                </form>
            </div>
        </div>
    );
}

export default Register;