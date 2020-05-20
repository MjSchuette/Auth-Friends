import React from 'react';
import {axiosWithAuth} from '../utilities/axiosWithAuth';

class AddFriend extends React.Component {
    constructor() {
        super();
        this.state = {
            friend:{
                name: '',
                age: '',
                email: ''
            }
        }
    }

    handleChange = e => {
        this.setState( {friend: {
            ...this.state.friend, 
            [e.target.name]: e.target.value
        }
    })
        console.log(this.state)
    }

    handleSubmit = e => {
        e.preventDefault();
        axiosWithAuth()
        .post("/api/friends", this.state.friend, {
            headers:
            {
                authorization: window.localStorage.getItem('token')
            }
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} name="name" placeholder="name"/><br/>
                    <input onChange={this.handleChange} name="age" placeholder="age"/><br/>
                    <input onChange={this.handleChange} name="email" placeholder="email"/><br/>
                    <button>Add Friend</button>
                </form>
            </div>
        )
    }
}

export default AddFriend;