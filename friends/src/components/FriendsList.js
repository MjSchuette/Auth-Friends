import React from 'react';
import {axiosWithAuth} from '../utilities/axiosWithAuth';

class FriendsList extends React.Component {
    constructor() {
        super();
        this,state = {
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
                <h1>Friend List</h1><br/>
                {this.state.friends.map(friends => <div><br/>{`${friend.name}, ${friend.age} years old, ${friend.email}`}</div>)}
            </div>
        );
    }
}
export default FriendsList;