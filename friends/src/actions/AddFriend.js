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
}

export default AddFriend;