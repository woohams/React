import React, { Component } from 'react';
import Customer from '../components/Customer';

class Detail extends Component {

    state = {
        customer: ''
    }
    
    componentDidMount() {
        this.callApi()
        .then(res => this.setState({customer: res}))
        .catch(err => console.log(err));
    }
    
    callApi = async () => {
        const response = await fetch('/api/customers/'+this.props.match.params.id);
        
        const body = await response.json();
        return body;
    }

    render() {
        const customer = this.state.customer;
        console.log(customer);
        
        return (
            <tr>
                <td colSpan="6">
                    <form action={"/api/customers_update/" + customer.id} method="post">
                        <input type="hidden" name="id" value={customer.id}/>
                        <input type="hidden" name="image" value={customer.image}/>
                        <input type="hidden" name="birthday" value={customer.birthday}/>
                        <input type="hidden" name="gender" value={customer.gender}/>
                        <img src={customer.image} alt="img"/>
                        <p>{customer.id}</p>
                        <input type="text" name="name" defaultValue={customer.name}/>
                        <p>{customer.birthday}</p>
                        <p>{customer.gender}</p>
                        <input type="text" name="job" defaultValue={customer.job}/>
                        <input type="submit" value="수정"/>
                    </form>
                </td>
            </tr>
        )
    }
}

export default Detail;