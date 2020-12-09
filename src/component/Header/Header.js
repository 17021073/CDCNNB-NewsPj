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


                    </div>
                </div>
            </header>
        );
    }
}

export default Header;