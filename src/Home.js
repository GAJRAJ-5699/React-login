import React,{ Component } from "react";
import fire from "./config/fire";
import './index.css';

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            
        }
    }
    logout(){
        fire.auth().signOut();
    }
    render()
    {
        return(
            <div className="home_css">
                    <h1> Welcome You are logged in  </h1>
                    <button className="log_out" onClick={this.logout}>Logout</button>
            </div>
        );
    }   
}

export default Home;