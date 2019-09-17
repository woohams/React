import React from 'react';
import { Link } from 'react-router-dom';

class Customer extends React.Component {

    async remove() {
        await fetch('/api/customers_delete/' + this.props.id);
        window.location.href="http://localhost:3000/";
    }

    render() {
        return (
            <tr>
                <td><img src={this.props.image} alt="img"/></td>
                <td><p>{this.props.id}</p></td>
                <td><Link to={"/detail/" + this.props.id}>{this.props.name}</Link></td>
                <td><p>{this.props.birthday}</p></td>
                <td><p>{this.props.gender}</p></td>
                <td><p>{this.props.job}</p></td>
                <td>
                    <input type="button" value="삭제" onClick={this.remove.bind(this)}/>
                </td>
            </tr>
        )
    }
}

export default Customer;