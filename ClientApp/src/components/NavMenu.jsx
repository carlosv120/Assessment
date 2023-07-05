import React from 'react';
import { Link } from 'react-router-dom';
import Swal from "sweetalert2";

function NavMenu() {

    const clickingImage = () => {

        Swal.fire({
            title: 'Do you want to navigate to Agilence main web page?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Take me there!'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location = "https://www.agilenceinc.com/"
            }
        })
    }

    return (
        <React.Fragment>
            <nav
                className="navbar navbar-expand-md navbar-dark bg-dark"
                aria-label="Fourth navbar example"
            >
                <div className="container">

                    <img
                        src="https://www.agilenceinc.com/hubfs/assets/graphics/logos/agilence-logo-white.svg"
                        width="100"
                        className="d-inline-block align-top"
                        alt="Logo"
                        onClick={clickingImage}
                    />

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0 mx-3">
                            <li className="nav-item">
                                <Link
                                    to="/"
                                    className="nav-link px-2 text-white link-button">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/inventory"
                                    className="nav-link px-2 text-white link-button"
                                >
                                    Inventory
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </React.Fragment >
    )
}

export default NavMenu