import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

class App extends Component {

  state = {
  customers: ''
  }

  componentDidMount() {
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
birthday
  render() {
    return (
      <table>
        
        <thead>
          <tr>
            <th>사진</th><th>번호</th><th>이름</th><th>생년월일</th><th>성별</th><th>직업</th><th>버튼</th>
          </tr>
        </thead>
        <tbody>
        {this.state.customers ? this.state.customers.map(c => {
          return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
        } ) : ''}
          <tr>
            <td colSpan="6">
              <form action="http://localhost:5000/api/customers" method="post">
                <input type="text" name="id" defaultValue="1"/>
                <input type="text" name="image" defaultValue="https://placeimg.com/48/48/1"/>
                <input type="text" name="name" defaultValue="이름"/>
                <input type="text" name="birthday" defaultValue="000101"/>
                <input type="text" name="gender" defaultValue="남자"/>
                <input type="text" name="job" defaultValue="백수"/>
                <input type="submit" value="생성"/>
              </form>
            </td>
          </tr>
        
        
          <tr>
            <td colSpan="6">
              <form action="http://localhost:5000/api/customers_update/1" method="post">
                <input type="text" name="image" defaultValue="https://placeimg.com/48/48/10"/>
                <input type="text" name="name" defaultValue="이름수정"/>
                <input type="text" name="birthday" defaultValue="000101"/>
                <input type="text" name="gender" defaultValue="남자"/>
                <input type="text" name="job" defaultValue="프로백수"/>
                <input type="submit" value="수정"/>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default App;