import React from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends React.Component {

    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/masonary.js');

    };

    render() {
        return (
            <>
                <div className={(this.props.bgcolor !== '') ? `header-nav navbar-collapse collapse ${this.props.bgcolor}` : 'header-nav navbar-collapse collapse'}>
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <NavLink to={""}>Home</NavLink>
                        </li>
                        <li>
                        <NavLink to={"/about"}>About us</NavLink>
                        <ul className="sub-menu">
                                <li>
                                <NavLink to={"/about"}>About Agumentik Group</NavLink>
                                </li>
                                <li>
                                <NavLink to={"/about"}>About Organization</NavLink>
                                </li>
                                <li>
                                <NavLink to={"/about"}>Our Innovation</NavLink>
                                </li>
                                <li>
                                <NavLink to={"/about"}>Gallery</NavLink>
                                </li>
                                </ul>
                        </li>
                        <li>
                        <NavLink to={"/companies"}>Companies</NavLink>
                        <ul className="sub-menu">
                                <li>
                                <NavLink to={"/companies"}>Agumentik Software</NavLink>
                                </li>
                                <li>
                                <NavLink to={"/companies"}>Agumentik Educamp</NavLink>
                                </li>
                                <li>
                                <NavLink to={"/companies"}>Agumentik Consultancy</NavLink>
                                </li>
                                </ul>
                        </li>
                        <li>
                        <NavLink to={"/association"}>Associations</NavLink>
                            <ul className="sub-menu">
                                <li>
                                <NavLink to={"/association"}>Apply For Partnerships</NavLink>
                                </li>
                                <li>
                                <NavLink to={"/association"}>Our Clients</NavLink>
                                </li>
                                <li>
                                <NavLink to={"/association"}>Our Corporate Partners</NavLink>
                                </li>
                                <li>
                                <NavLink to={"/association"}>Our Institution Partners</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to={"/association"}>Career</NavLink>
                            <ul className="sub-menu">
                                <li><NavLink to={"/association"}>Employment</NavLink></li>
                                <li><NavLink to={"/association"}>Internships</NavLink></li>
                                <li><NavLink to={"/association"}>Campus Expert</NavLink></li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to={""}>Forums</NavLink>
                            <ul className="sub-menu">
                                <li><NavLink to={""}>Verify an Employee</NavLink></li>
                                <li><NavLink to={""}>Verify a Certificate</NavLink></li>
                                <li><NavLink to={""}>CSR</NavLink></li>
                            </ul>
                        </li>
                        <li className="submenu-direction">
                            <NavLink to={""}>Info</NavLink>
                            <ul className="sub-menu">
                                <li><NavLink to={""}>Blogs</NavLink></li>
                                <li><NavLink to={""}>Media & Events</NavLink></li>
                                <li><NavLink to={""}>Webinar</NavLink></li>
                                <li><NavLink to={""}>Contact US</NavLink></li>
                                <li><NavLink to={""}>Invite US</NavLink></li>
                                <li><NavLink to={""}>Support</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </>
        );
    };
};

export default Navigation;