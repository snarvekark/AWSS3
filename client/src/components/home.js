import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';

class Home extends React.Component {
  render() {
    return(
      <div>
        <div className="container" style={{marginTop: '30px'}}>
          <div className="row">
            <div className="col-sm-4">
              <h2>About Me</h2>
              <h5>Photo of me:</h5>
              <div className="fakeimg">Fake Image</div>
              <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
              <h3>Some Links</h3>
              <p>Lorem ipsum dolor sit ame.</p>
              <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                  <a className="nav-link active" href="#">Active</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">Disabled</a>
                </li>
              </ul>
              <hr className="d-sm-none" />
            </div>
            <div className="col-sm-8">
              <h2>TITLE HEADING</h2>
              <h5>Title description, Dec 7, 2017</h5>
              <div className="fakeimg">Fake Image</div>
              <p>Some text..</p>
              <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
              <br />
              <h2>TITLE HEADING</h2>
              <h5>Title description, Sep 2, 2017</h5>
              <div className="fakeimg">Fake Image</div>
              <p>Some text..</p>
              <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
            </div>
          </div>
        </div>
        <div className="jumbotron text-center" style={{marginBottom: 0}}>
          <p>Footer</p>
        </div>
      </div>)
   }
}

export default Home;