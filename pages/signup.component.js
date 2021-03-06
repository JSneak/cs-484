// import React, { Component } from "react";
// import Axios from "axios";
// import { Redirect } from "react-router-dom";

// export default class SignUp extends Component {
//   constructor(props) {
//     super(props);
//     Axios.defaults.withCredentials = true;
//     this.state = {
//       firstName: "",
//       lastName: "",
//       emailAddress: "",
//       password: "",
//       loggedIn: false,
//       data: "",
//       errorMsg: null,
//       errorMsgPassword: null,
//     };
//   }

//   //alert if email used
//   createAccount = (pState) => {
//     console.log("Create Account");
//     if (this.checkPasswordStrength(pState)) {
//       Axios.post("http://localhost:3001/register", {
//         fName: pState.firstName,
//         lName: pState.lastName,
//         email: pState.emailAddress,
//         password: pState.password,
//       }).then((response) => {
//         this.setState({ data: response.data });
//         if (response.data.message == "Email already used") {
//           this.setState({ errorMsg: "Email already used!" });
//         } else if (response.data.message == "Account Sucessfully Made") {
//           Axios.post("http://localhost:3001/login", {
//             email: pState.emailAddress,
//             password: pState.password,
//           }).then((response) => {
//             if (response.data.message !== "No User Exists") {
//               this.setState({ loggedIn: true });
//             }
//           });
//         }
//       });
//     }
//   };

  // checkPasswordStrength = (pState) => {
  //   if (!pState.password.includes("!")) {
  //     this.setState({ errorMsgPassword: "Password needs an !" });
  //     return false;
  //   }
  //   if (pState.password.length < 6) {
  //     this.setState({ errorMsgPassword: "Password too short." });
  //     return false;
  //   }
  //   return true;
  // };

//   render() {
//     if (this.state.loggedIn == true) {
//       return <Redirect to="/dashboard" />;
//     }

//     return (
//       <div>
//         <h3>Sign Up</h3>

//         {this.state.errorMsg ? <div>Email already used!</div> : <div></div>}
//         {this.state.errorMsgPassword ? (
//           <div data-testid="password-div">Password is weak!</div>
//         ) : (
//           <div data-testid="password-div"></div>
//         )}

//         <div className="form-group">
//           <label>First name</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="First name"
//             onChange={(e) => {
//               this.setState({ firstName: e.target.value });
//             }}
//           />
//         </div>

//         <div className="form-group">
//           <label>Last name</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Last name"
//             onChange={(e) => {
//               this.setState({ lastName: e.target.value });
//             }}
//           />
//         </div>

//         <div className="form-group">
//           <label>Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter email"
//             onChange={(e) => {
//               this.setState({ emailAddress: e.target.value });
//             }}
//           />
//         </div>
//         <div className="form-group">
//           <label>
//             Password - Need to contain a ! and have more than 6 characters
//           </label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//             onChange={(e) => {
//               this.setState({ password: e.target.value });
//             }}
//           />
//         </div>

//         <button
//           type="submit"
//           className="btn btn-primary btn-block"
//           onClick={() => this.createAccount(this.state)}
//         >
//           Sign Up
//         </button>
//         <p className="forgot-password text-right">
//           Already registered <a href="#">sign in?</a>
//         </p>
//       </div>
//     );
//   }
// }

import Axios from 'axios';
import React from "react";

const Signup = () => {

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [loggedIn, setLoggedIn] = React.useState(false);
  //const [data, setData] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState(null);

  const checkPasswordStrength = () => {
    if (password.includes("!")) {
      // this.setState({ errorMsgPassword: "Password needs an !" });
      setErrorMsg("Password needs an !");
      return false;
    }
    if (password.length < 6) {
      // this.setState({ errorMsgPassword: "Password too short." });
      setErrorMsg("Password too short");
      return false;
    }
    return true;
  };

    //alert if email used
  const createAccount = () => {
    //console.log("Create Account");
    if (checkPasswordStrength) {
      Axios.post("http://localhost:3001/register", {
        fName: firstName,
        lName: lastName,
        email: emailAddress,
        password: password,
      }).then((response) => {
        // this.setState({ data: response.data });
        //setData(response.data);
        if (response.data.message == "Email already used") {
          // this.setState({ errorMsg: "Email already used!" });
          setErrorMsg("Email already used!");
        } else if (response.data.message == "Account Sucessfully Made") {
          Axios.post("http://localhost:3001/login", {
            email: emailAddress,
            password: password,
          }).then((response) => {
            if (response.data.message !== "No User Exists") {
              // this.setState({ loggedIn: true });
              setLoggedIn(true);
            }
          });
        }
      });
    }
  };

  const getUser = () => {
    Axios.get('http://localhost:3001/user')
    .then((response) =>{
        if(response.data.message !== "No authenticated User"){
            // this.setState({loggedIn: true});
            setLoggedIn(true);
        }
        else{
            // this.setState({loggedIn: false});
            setLoggedIn(false);
        }
    })
  };

  React.useEffect( () => {
      getUser;
  }, []);

  //TODO redirect to dashboard if loggedIn
  if (loggedIn) {

  }
  return (
    <div>
      <h3>Sign Up</h3>

      {errorMsg ? <div>{errorMsg}</div> : <div></div>}

      <div className="form-group">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          onChange={ (e) => {setFirstName(e.target.value)} }
        />
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          onChange={ (e) => {setLastName(e.target.value)} }
        />
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          onChange={ (e) => {setEmailAddress(e.target.value)} }
        />
      </div>
      <div className="form-group">
        <label>
          Password - Need to contain a ! and have more than 6 characters
        </label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          onChange={ (e) => {setPassword(e.target.value)} }
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary btn-block"
        onClick={createAccount}
      >
        Sign Up
      </button>
      <p className="forgot-password text-right">
        Already registered <a href="#">sign in?</a>
      </p>
    </div>
  );
}

export default Signup;
