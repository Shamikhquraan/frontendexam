import React, { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import Data from "./Data";
import './AllData.css';

class AllDataAPI extends Component {
    constructor(props){
        super(props);
        this.state = {
          showData: false,
          itemArray: [],
        }
      };
      componentDidMount = async () => {
        let itemURl = await axios.get(`${process.env.REACT_APP_SERVER}/favorite`);
        console.log('itemURL' , itemURl);

        itemURl?   await  this.setState({
          itemArray:itemURl.data,
          showData: true,
  
        }):await  this.setState({
          itemArray:[],
          showData: false,
  
        })
    console.log('daata in itemarray' , this.state.itemArray);
    };

  addHandler=async(itemObj)=>{

    let itemURl = await axios.post(`${process.env.REACT_APP_SERVER}/addData?email=${this.props.auth0.user.email}`,itemObj);
    await  this.setState({
        itemArray:itemURl.data,
        showData: true,

      })
      this.componentDidMount();

  }
  render() {
    
    return (
      <div className='cardShow'>
        {this.state.showData && this.state.itemArray.map((elem , i)=>{

            return(

            <Data key={i} itemObj={elem} addHandler={this.addHandler} />

            )
        })}
        
      </div>
    );
  
   }
}

export default withAuth0(AllDataAPI);
