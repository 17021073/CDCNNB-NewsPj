import React from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <p>News</p>

                        </div>

                        <div className="col-md-12">
                            {/* <ul>
                                <li><a href="">test1test</a></li>
                                <li><a href="">test2</a></li>
                                <li><a href="">test3</a></li>
                            </ul> */}
                            <nav class="navbar navbar-expand-lg navbar-light blue-grey lighten-5 mb-4">

                                <div class="collapse navbar-collapse" id="navbarSupportedContent">

                                    <ul class="navbar-nav mr-auto">
                                        <li class="nav-item active">
                                            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Features</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#">Pricing</a>
                                        </li>


                                        <li class="nav-item dropdown">
                                            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                                aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                            <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                                                <a class="dropdown-item" href="#">Action</a>
                                                <a class="dropdown-item" href="#">Another action</a>
                                                <a class="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </li>

                                    </ul>

                                    <div className="search">
                                        <form>
                                            <input id="search" type="text" name="search" placeholder="Search.." />
                                        </form>
                                    </div>

                                </div>
                            </nav>


                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;