import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';

import List from './routes/List';
import Detail from './routes/Detail';
import Create from './routes/Create';

class App extends Component {

  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>사진</th><th>번호</th><th>이름</th><th>생년월일</th><th>성별</th><th>직업</th><th>버튼</th>
          </tr>
        </thead>
        <tbody>
          <Router>
            <Route exact path="/" component={List}/>
            <Route path="/detail/:id" component={Detail}/>
            <Route path="/create" component={Create}/>
            <Link to="/create">추가</Link>
          </Router>
        </tbody>
      </table>
    );
  }
}

export default App;