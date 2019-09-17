import React from 'react';

class Customer extends React.Component {

    remove() {
        fetch('/api/customers_delete/' + this.props.id);
    }

    render() {
        return (
            <tr>
                <td><img src={this.props.image} alt="img"/></td>
                <td><p>{this.props.id}</p></td>
                <td><p>{this.props.name}</p></td>
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