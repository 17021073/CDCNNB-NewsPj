import React from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p>&copy; Copyrights. All rights reserved.</p>
                        </div>

                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;