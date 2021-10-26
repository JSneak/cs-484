// import React, { Component } from "react";
// import Axios from 'axios';
// import {Redirect} from 'react-router-dom'

// export default class Dashboard extends Component {

//     constructor(props){
//         super(props);
//         Axios.defaults.withCredentials = true;
//         this.state = {
//             fName: ""
//         };
//     }

//     getUser = () => {
//         Axios.get('http://localhost:3001/user')
//         .then((response) =>{
//             this.setState({fName: response.data.first_name});
//             //this.setState({data: response.data});
//         })
//     };

//     logout = () => {
//         Axios.get('http://localhost:3001/logout')
//         .then((response) => {
//             this.setState({fName: null});
//         })
//     }

//     componentDidMount(){
//         this.getUser();
//     }

//     render() {
//         // if(this.state.loggedIn){
            
//         // }

//         return (
//             <div>
//                 {this.state.fName ? 
//                 <div>
//                     Welcome {this.state.fName}!
//                     <button onClick={this.logout}>Logout</button>
//                </div> :
//                <div>Not Logged In</div>
//                 }
//             </div>
//         );
//     }
// }
import Axios from 'axios';

//Add state for FName
const Dashboard = () => {
    //config
    Axios.defaults.withCredentials = true;

    const [firstName, setFirstName] = React.useState(null);
    
    //Get user data from nodeJS backend
    const getUser = () => {
        Axios.get('http://localhost:3001/user')
        .then((response) =>{
            if(response.data.first_name)
                setFirstName(response.data.first_name);
        })
    };

    //Logout of session using NodeJS
    const logout = () => {
        Axios.get('http://localhost:3001/logout')
        .then((response) => {
            setFirstName(null);
        })
    }

    React.useEffect( () => {
        getUser;
    }, []);
        
    return (
        <div>
            {firstName ? 
            <div>
                Welcome {firstName}!
                <button onClick={logout}>Logout</button>
            </div> :
            <div>Not Logged In</div>
            }
        </div>
    );
}

export default Dashboard