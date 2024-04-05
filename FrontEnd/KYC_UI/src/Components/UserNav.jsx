import React, { useEffect} from 'react';
import Logo from './Pages/Logos/Logo';
import { Button } from 'react-bootstrap';
import {  useDispatch } from 'react-redux';
import { clearInformation } from '../features/information';
import { useNavigate } from 'react-router-dom';

function UserNav() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const reloadPage = () => {
        window.location.reload();
    };

    const logout = () => {
        dispatch(clearInformation());
        localStorage.removeItem('user_Name');
        localStorage.removeItem('user_Id');
        navigate('/');
        reloadPage();
    }

    useEffect(() => {
        if (!localStorage.getItem('user_Name')) {
            navigate('/');
        }
    }, []);
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return (
        <div className='continer-fluid header sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#e3f2fd', boxShadow: '0px 0px 10px -1px rgb(128, 126, 123)' }}>
                <div className="container-fluid">
                    <a className="navbar-brand p-0" href=" " style={{ backgroundColor: 'rgb(57, 136, 160,0.2)', borderRadius: '10px' }}>
                        <Logo />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                        <div className="d-flex" style={{ paddingRight: '40px' }}>
                            <span style={{cursor:'pointer'}}><b>Welcome:</b> {capitalizeFirstLetter(localStorage.getItem('user_Name'))}</span>
                        </div>
                        <Button variant="" onClick={logout}>Logout</Button>
                    </div>
                </div>

            </nav>
        </div>
    );
}

export default UserNav;
