import React from 'react';
import {axiosWithAuth} from '../utilities/axiosWithAuth';

import AddFriend from '../actions/AddFriend';

class FriendsList extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: []
        }
    }

    getFriendsList = () => {
        const token = window.localStorage.getItem('token')
        axiosWithAuth()
            .get("/api/friends")
            .then(res => {
                console.log(res);
                this.setState({ friends: res.data})
        })
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.getFriendsList();
    }

    render() {
        return(
            <div>
                <h1>Friend List</h1>
                <AddFriend/>
                {this.state.friends.map(friends => <div><br/>{`${friends.name}, ${friends.age} years old, ${friends.email}`}</div>)}
            </div>
        );
    }
}
export default FriendsList;