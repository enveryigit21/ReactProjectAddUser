import React, { Component } from 'react';
import UserConsumer from '../context';

// eslint-disable-next-line
var uniqid = require('uniqid')

 class AddUser extends Component {

  state = {
    visible: true,
    opacity:0,
    name : "",
    department :"",
    salary : ""
  }

  showAndHide = () => {
    const newOpacity = this.state.visible ? 1 : 0
    this.setState({
      visible: !this.state.visible,
      opacity:newOpacity
    })
  }

  changeInput = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }
  addUser = (dispatch,e) => {
    e.preventDefault();
     const {name,department,salary} = this.state

     const newUser ={
      "id" : uniqid(),
      "name": name,
      "salary" : salary,
      "department" :department
     }
     dispatch({type:"ADD_USER", payload:newUser});
     
  }

  render() {
    const {visible, name , department, salary} = this.state; 

   return <UserConsumer>
        {
             value =>{
               const {dispatch} = value; 
               return (
                 <div className='col-md-8 mb-4'>
                 <button className='btn btn-dark btn-block mb-2' onClick={this.showAndHide} >
                     {visible ? 'Show Form' : 'Hide Form' }
                   </button>
                   <div className='card' style={{opacity : this.state.opacity, height:this.state.opacity ?  "auto" : 0}}  >
                       <div className='card-header' >
                           <h4> Add User Form </h4>
                       </div>
                       <div className='card-body' >
                           <form  onSubmit={this.addUser.bind(this,dispatch)} >
                               <div className='form-group   '>
                                  <input type="text" name="name" id="id" placeholder='Enter Name' className='form-control' 
                                  value={name}  onChange={this.changeInput} />
                                  <label htmlFor='name'  > Name </label> 
                               </div>
               
                               <div className='form-group  '>
                                  <input type="text" name="department" id="id" placeholder='Enter Department' className='form-control'
                                   value={department} onChange={this.changeInput}/>
                                  <label htmlFor='department'  > Department </label> 
                               </div>
               
                               <div className='form-group  '>
                                  <input type="text" name="salary" id="id" placeholder='Enter Salary' className='form-control' 
                                  value={salary} onChange={this.changeInput}/>
                                  <label htmlFor='salary'  > Salary </label> 
                               </div>
                                
                                <button className='btn btn-danger btn-block' type='submit' >Add User</button>
               
                           </form>
                       </div>
                   </div>
                 </div>
               )
             }
        }
        </UserConsumer>


  }
}

export default AddUser ; 