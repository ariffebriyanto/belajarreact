import React, { useState } from 'react';


const Login = () => {
    const [newstate, setNewState] = useState({
        errorMsg: ''
    });

    const sigin = () => {
        let email = document.getElementById('email').value;
        // let email = 'john@mail.com';

        let password = document.getElementById('password').value;
        //let password = 'changeme';
        //console.log(JSON.stringify({ email, password }));
        fetch('https://api.escuelajs.co/api/v1/auth/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(r => r.json())
            .then(json => {
                setNewState({ errorMsg: json.message });
                //console.log(json);
                if (json.access_token !== '') {
                    localStorage.setItem('jwt', json.access_token);
                    console.log(localStorage.getItem('jwt'));

                }

            });
    }


    return (
        <div className="areaGeral">
            <div className="form-area">
                <div className="form-title">
                    <h3>Login</h3>
                </div>

                <div className="form-inputs">
                    <p className="error">{newstate.errorMsg}</p>
                    <label>
                        <input type="email" id="email" placeholder="Username" value="john@mail.com" />
                    </label>
                    <label>
                        <input type="password" id="password" placeholder="Password" value="changeme" />
                    </label>
                    <button onClick={sigin}>Sign In</button>
                </div>
            </div>
        </div>
    );
};
export default Login;