import React from 'react';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './DetailsNews.css'
import Nav from '../Nav/Nav';

class DetailsNews extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Nav></Nav>
                    <div className="col-md-12">
                        <MuiThemeProvider>
                            <Card>
                                <CardMedia>
                                    <img className="img-news" src="https://visadep.vn/wp-content/uploads/2020/07/6-39-300x300.jpg" alt="" />
                                </CardMedia>
                                <CardTitle title="Card title" subtitle="Card subtitle" />
                                <CardText>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.

                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                    Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                    Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</CardText>

                            </Card>

                        </MuiThemeProvider>
                    </div>
                </div>

                <h4 className="more-story">More stories for you</h4>
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


                            </Card>
                        </MuiThemeProvider>
                    </div>

                </div>
            </div>
        );
    }
}

export default DetailsNews;