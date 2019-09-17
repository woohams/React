import React, { Component } from 'react';
import Customer from '../components/Customer';

class List extends Component {

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

    render() {
        return (
            this.state.customers ? this.state.customers.map(c => {
              return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
            } ) : ''
        )
    }
}

export default List;