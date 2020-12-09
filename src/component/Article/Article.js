import React from 'react';
import './Article.css';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Nav from '../Nav/Nav';

class Article extends React.Component {
    render() {
        return (
            <div className="">
                <div className="row">
                    <div className="col-md-7 cl1">
                        <MuiThemeProvider>
                            <Card>

                                <CardMedia
                                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                                >
                                    <img className="img-news1" src="https://visadep.vn/wp-content/uploads/2020/07/6-39-300x300.jpg" alt="image page" />
                                </CardMedia>

                            </Card>
                        </MuiThemeProvider>
                    </div>

                    <div className="col-md-5">
                        <div className="cl2">
                            <MuiThemeProvider>
                                <Card>

                                    <CardMedia
                                        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                                    >
                                        <img className="img-news2" src="https://visadep.vn/wp-content/uploads/2020/07/6-39-300x300.jpg" alt="" />
                                    </CardMedia>

                                </Card>
                            </MuiThemeProvider>
                        </div>

                        <div className="cl2 last1">
                            <MuiThemeProvider>
                                <Card>

                                    <CardMedia
                                        overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                                    >
                                        <img className="img-news2" src="https://visadep.vn/wp-content/uploads/2020/07/6-39-300x300.jpg" alt="" />
                                    </CardMedia>

                                </Card>
                            </MuiThemeProvider>
                        </div>
                    </div>


                </div>

                <h4 className="lastest-ar">Lastest Article</h4>
                <hr />
                <div className="row">
                    <div className="col-md-4 news-col2">
                        <MuiThemeProvider>
                            <Card>

                                <CardMedia
                                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                                >
                                    <img className="img-col2" src="https://visadep.vn/wp-content/uploads/2020/07/6-39-300x300.jpg" alt="" />
                                </CardMedia>
                                <CardTitle title="Card title" subtitle="Card subtitle" />
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>

                            </Card>
                        </MuiThemeProvider>
                    </div>
                    <div className="col-md-4 news-col2">
                        <MuiThemeProvider>
                            <Card>

                                <CardMedia
                                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                                >
                                    <img className="img-col2" src="https://visadep.vn/wp-content/uploads/2020/07/6-39-300x300.jpg" alt="" />
                                </CardMedia>
                                <CardTitle title="Card title" subtitle="Card subtitle" />
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                                </CardText>

                            </Card>
                        </MuiThemeProvider>
                    </div>
                    <div className="col-md-4 news-col2">
                        <MuiThemeProvider>
                            <Card>

                                <CardMedia
                                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                                >
                                    <img className="img-col2" src="https://visadep.vn/wp-content/uploads/2020/07/6-39-300x300.jpg" alt="" />
                                </CardMedia>
                                <CardTitle title="Card title" subtitle="Card subtitle" />
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>

                            </Card>
                        </MuiThemeProvider>
                    </div>
                    <div className="col-md-4 news-col2">
                        <MuiThemeProvider>
                            <Card>

                                <CardMedia
                                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                                >
                                    <img className="img-col2" src="https://visadep.vn/wp-content/uploads/2020/07/6-39-300x300.jpg" alt="" />
                                </CardMedia>
                                <CardTitle title="Card title" subtitle="Card subtitle" />
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                                </CardText>

                            </Card>
                        </MuiThemeProvider>
                    </div>

                </div>


            </div>
        );
    }
}

export default Article;