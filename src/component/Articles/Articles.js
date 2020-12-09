import React from 'react';
import './Articles.css';
import Article from '../Article/Article';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from '../Nav/Nav';

class Articles extends React.Component {
    render() {
        return (
            <div className="list-article container">
                <div className="row">
                    <Nav></Nav>
                    <div className="col-md-12">
                        <h2>Articles: </h2>

                        <hr />
                        <Article />

                    </div>


                </div>
            </div>
        );
    }
}

export default Articles;