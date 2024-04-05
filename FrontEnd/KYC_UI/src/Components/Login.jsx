import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { oldColor } from '../features/theme';
import { login, logout } from '../features/user';

function Login() {
    const dispatch = useDispatch();

    const user = useSelector(state => state.user.value)

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');

    const chick = () => {
        dispatch(logout());
        dispatch(oldColor())
    }
    return (
        <div>
            {!user.name && (
                <div>
                    <input value={name} onChange={e => setName(e.target.value)} />
                    <input value={age} onChange={e => setAge(e.target.value)} />
                    <input value={email} onChange={e => setEmail(e.target.value)} />
                </div>
            )}




            {!user.name ? <button onClick={() => dispatch(login({ name, age, email }))}>
                Login</button> :
                <button onClick={chick}>
                    logout</button>
            }
        </div>
    )
}

export default Login