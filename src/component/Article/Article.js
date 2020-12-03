import React from 'react';
import './Article.css';

class Article extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="article">
                        <div className="img">
                            <img src="https://www.gstatic.com/images/branding/product/2x/photos_96dp.png" alt="img here" />

                        </div>
                        <div className="details">
                            <h4>Title here</h4>
                            <i>By: trang thu</i>
                            <i>Published At: 2/12/2020</i>
                            <p>Description here</p>
                            <div className="buttons">
                                <a href=""> Read More</a>
                                <a href="">Save</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="article">
                        <div className="img">
                            <img src="https://www.gstatic.com/images/branding/product/2x/photos_96dp.png" alt="img here" />

                        </div>
                        <div className="details">
                            <h4>Title here</h4>
                            <i>By: trang thu</i>
                            <i>Published At: 2/12/2020</i>
                            <p>Description here</p>
                            <div className="buttons">
                                <a href=""> Read More</a>
                                <a href="">Save</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="article">
                        <div className="img">
                            <img src="https://www.gstatic.com/images/branding/product/2x/photos_96dp.png" alt="img here" />

                        </div>
                        <div className="details">
                            <h4>Title here</h4>
                            <i>By: trang thu</i>
                            <i>Published At: 2/12/2020</i>
                            <p>Description here</p>
                            <div className="buttons">
                                <a href=""> Read More</a>
                                <a href="">Save</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="article">
                        <div className="img">
                            <img src="https://www.gstatic.com/images/branding/product/2x/photos_96dp.png" alt="img here" />

                        </div>
                        <div className="details">
                            <h4>Title here</h4>
                            <i>By: trang thu</i>
                            <i>Published At: 2/12/2020</i>
                            <p>Description here</p>
                            <div className="buttons">
                                <a href=""> Read More</a>
                                <a href="">Save</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Article;