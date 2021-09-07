import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '././MyFavorites.js';
import { withAuth0 } from '@auth0/auth0-react';
import DataCard from './DataCard.js';
import axios from 'axios';
import ModalForm from './ModalForm.js';
import './MyFav.css';


class MyFavorites extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showData: false,
      itemArray: [],
      show:false,
      itemObj:{},
    }
  };
  componentDidMount = async () => {
    let itemURl = await axios.get(`${process.env.REACT_APP_SERVER}/getData?email=${this.props.auth0.user.email}`);
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


deleteHandler=async(itemId)=>{

  let itemURl = await axios.delete(`${process.env.REACT_APP_SERVER}/deleteData/${itemId}?email=${this.props.auth0.user.email}`);
  console.log('itemURL' , itemURl);

  await  this.setState({
    itemArray:itemURl.data,
    showData: true,
  })


}

updateHandler=async(itemInfo)=>{
  await  this.setState({
    itemObj:itemInfo,
    show: true,
  })


}



handleClose=async()=>{
  await  this.setState({
    show: false,
  })
}


updateFunc=async(itemInf)=>{

  let itemURl = await axios.post(`${process.env.REACT_APP_SERVER}/updateData/${itemInf._id}`,itemInf);
  console.log('itemURL' , itemURl);

  await  this.setState({
    itemArray:itemURl.data,
    showData: true,
  })


}



  render() {




    return(
      <>
              {this.state.itemArray.length===0?<p>NO THING IN THE LIST</p>:<p>YOUR FAV LIST</p>}
      <div className="cardShow">
      {this.state.showData && this.state.itemArray.map((elem , i)=>{

          return(

          <DataCard key={i} itemObj={elem} deleteHandler={this.deleteHandler} updateHandler={this.updateHandler} />

          )
      })}
      
    </div>

<ModalForm  show={this.state.show} itemObj={this.state.itemObj} handleClose={this.handleClose} updateFunc={this.updateFunc} />

</>

    )
  }
}

export default withAuth0(MyFavorites);

