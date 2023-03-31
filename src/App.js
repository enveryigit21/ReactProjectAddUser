/* eslint-disable react/jsx-no-undef */
import './App.css';
import Navbar from './components/navbar';


import React, { Component } from 'react'
import Users from './components/users';
import AddUser from './components/AddUser';
import Test from './components/test';

export default class App extends Component {

  render() {
    return (
      <div className='container'>
      <Test test= "deneme"/>
              <Navbar  title='User App' />
        <hr/>
        <AddUser/>
        <Users/>
        
        
      </div>
    )
  }
}



