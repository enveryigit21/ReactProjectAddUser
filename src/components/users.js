import React, { Component } from 'react'
import UserConsumer from '../context';
import User from './user';
 class Users extends Component {
  render() {
    return (
      <UserConsumer>
        {
          value => {
            const {users,dispatch} = value;
            return (
      <div>
         {
           users.map((user,index) => {
               return (
                <User
                  key={index}
                  id={user.id}
                  name= {user.name}
                  department = {user.department}
                  salary = {user.salary}
                  onDeleteUser={dispatch}
                />
               )
           })
         }
      </div>
    )
          }
        }
      </UserConsumer>
    )
  }
}
export default Users ; 
