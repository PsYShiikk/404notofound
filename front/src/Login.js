import React from 'react';
import axios from "axios";
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {useCookies, withCookies} from 'react-cookie';
import {Redirect} from 'react-router-dom';

function FormLogin(props) {
    return (
        <div id="container">
            <div id="logo"></div>
            <div id="login">
                <form onSubmit={props.onSignin} className="formlogin">
                    <div className="txtb">
                        <input type="text" className="" name="username" required="" ref={props.usernameRef}/>
                    </div>
                    <div className="txtb">
                        <input type="password" className="" name="password" required="" ref={props.passwordRef}/>
                    </div>
                    <input type="submit" value="Login" className="btn_submit"/>
                </form>
            </div>
        </div>

    );
}

function Login() {

    const [cookies, setCookie, removeCookie] = useCookies(['login']);
    const usernameRef = React.createRef();
    const passwordRef = React.createRef();

    function disconnect() {
        removeCookie('login');
    }

    async function onSignup() {
        const user = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        };
        try {
            const p = (await axios.post('http://localhost:8000/signup', user));
            if (p.status === 200) {
                user.token = p.data.token;
                setCookie('login', user, '/');
            }
        } catch (err) {
            console.error(err)
        }
    }

    async function onSignin(e) {
        e.preventDefault();

        const user = {
            username: e.target.username.value,
            password: e.target.password.value
        };
        console.log(user);
        try {
            const p = (await axios.post('http://localhost:8000/signin', user));
            if (p.status === 200) {
                user.token = p.data.token;
                setCookie('login', user, '/');
            }
        } catch (err) {
            console.error(err);
            console.log("AA");
        }
    }

    if (cookies.login && cookies.login.username) {
        return <Redirect to='/' />;
    }
    return <FormLogin onSignin={onSignin} onSignup={onSignup} usernameRef={usernameRef} passwordRef={passwordRef}/>
}

function LocalProtectedRoute({component: Component, ...rest}) {
    if (rest.allCookies && rest.allCookies.login && rest.allCookies.login.username && rest.allCookies.login.token) {
        return (
            <Route
                {...rest}
                render={routeProps => (
                    <Component {...routeProps} username={rest.allCookies.login.username}
                               token={rest.allCookies.login.token}/>
                )}
            />
        );
    }
    return <p>!!</p>;
}

/**
 * @return {null}
 */
function LocalProtectedLink({...rest}) {
    if (rest.allCookies && rest.allCookies.login && rest.allCookies.login.username && rest.allCookies.login.token) {
        return <Link className={rest.className} to={rest.to}>cities</Link>
    }else{
        return null;
    }
}

const ProtectedRoute = withCookies(LocalProtectedRoute);
const ProtectedLink = withCookies(LocalProtectedLink);

export {ProtectedRoute, ProtectedLink};
export default Login;
