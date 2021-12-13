import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function NavBar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/about">{props.aboutNavBar}</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form> */}

                    <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"  onClick={props.toggleMode }/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">ENABLE DARK</label>
                    </div>
                </div>

            </div>
        </nav>
    )
}


NavBar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutNavBar: PropTypes.string.isRequired,
}

NavBar.defaultProps = {
    // title : 'TITLE',
    aboutNavBar: 'ABOUT',
};
//ARUP MONDAL (@mondalCodeHub)