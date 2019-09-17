import React, { Component } from 'react';

class Create extends Component {
    render() {
        return (
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
        )
    }
}

export default Create;