import React, { Component } from "react";
import Addicons from '@material-ui/icons/PermIdentity';
import LockIcon from '@material-ui/icons/Lock';
import fire from "./config/fire";
import './index.css';
import { Avatar, Grid, Link, TextField, Typography } from "@material-ui/core";


class Login extends Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state={
            email : "",
            password : ""
        }
    }
    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u);
        }).catch((err)=>{
            console.log(err);
        })
    }
    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u);
        }).catch((err)=>{
            console.log(err);
        })
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value                    
         })
    }

    render()
    {
        const avatarstyle={backgroundColor:'green'};
        return(<div className="div_css">
               <div className="dir">
               <div className="avatar_">
                <Grid align='center'>
                    <Avatar style={avatarstyle}><LockIcon/></Avatar>
                    <h1> Sign In </h1>
                </Grid>
                </div>
                
                   <div className="Extra">
                   <form>
                    <Addicons/>
                    <TextField
                         label=" username"
                        type = "email"
                        id = "email"
                        name = "email"
                        placeholder =  " Enter username "
                        onChange={this.handleChange}
                        value={this.state.email}
                        required autocomplete='false'
                    />
                    <br/>
                    <br/>
                    <LockIcon/>
                    <TextField
                        label="password"
                        name="password"
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        required autocomplete='false'

                    />
                    <br/>
                    <br/>
                    <button className="button_css" onClick={this.login}> <h3>Login </h3></button>
                    <h1> </h1>
                    <Typography> Do you have an account?
                    <div className="button_c">
                    <Link href="#" onClick={this.signup}> Sign Up </Link>
                    </div>
                     </Typography>

                    {/* <button className="button_css2" onClick={this.signup}>  <h3> Sign Up </h3> </button> */}
                </form>
                   </div>
                </div>
            </div>
        )
    };
}

export default Login;