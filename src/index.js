import ReactDOM from 'react-dom'
import React from 'react'
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Login from './component/Login/Login';
import { BrowserRouter, Route } from 'react-router-dom';
import Articles from './component/Articles/Articles';
import DetailsNews from './component/DetailsNews/DetailsNews';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Header} />
        {/* <Route exact path="/" component={Login} /> */}
        <Route exact path="/" component={Footer} />
        <Route exact path="/" component={Articles} />


        <Route exact path="/details" component={Header} />
        <Route exact path="/details" component={DetailsNews} />
        <Route path="/details" component={Footer} />

      </BrowserRouter>

    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);