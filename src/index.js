import ReactDOM from 'react-dom'
import React from 'react'
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import Login from './component/Login/Login';
import { BrowserRouter, Route } from 'react-router-dom';
import Articles from './component/Articles/Articles';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Header} />
        <Route exact path="/" component={Login} />
        <Route path="/" component={Footer} />
        <Route path="/article" component={Articles} />
      </BrowserRouter>

    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);