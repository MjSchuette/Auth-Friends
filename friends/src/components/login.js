import React from 'react';
import '../App.css';
import {axiosWithAuth} from '../utilities/axiosWithAuth';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            credentials: {
                username: '',
                password: ''
            }
        }
    }

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.credentials)
    };

    handleSubmit = e => {
        e.preventDefault();
        this.setState({...this.state, isLoading:true});
        axiosWithAuth()
            .post('/api/login', this.state.credentials)
            .then(res => {
                console.log(res);
                localStorage.setItem('token', res.data.payload);
                this.setState({...this.state, isLoading: false});
                this.props.history.push('/protected')
            })
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div className='Login'>
                <form onSubmit={this.handleSubmit}>
                    <h1>FriendBook</h1>
                    <input className='Input' name='username' placeholder='Username' onChange={this.handleChange}/><br/>
                    <input className='Input' name='password' placeholder='Password' onChange={this.handleChange}/><br/>
                    <button className='Input'>Login</button>
                </form>
                {this.state.isLoading && <div>It is Loading, I swear</div>}
            </div>
        )
    }
}
export default Login;