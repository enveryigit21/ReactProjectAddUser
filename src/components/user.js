import React, { Component } from "react";
import UserConsumer from "../context";

class User extends Component {
  state = {
    isVisible: false,
  };

  onClickEvent = (e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };

  onDeleteUser = (dispatch,e) => {
    const {id} = this.props ; 
    dispatch({type: "DELETE_USER" , payload: id })
  }
  componentWillUnmount(){
    console.log("componentWillUnmount")
  }

  render() {
    const { name, department, salary } = this.props;
    const { isVisible } = this.state;

    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="col-md-8 mb-2">
              <div className="cart"  style={ isVisible ?  {   border: "1px solid gray" ,   backgroundColor:"#62848d" , color: "#fff"} : null}>
                <div className="card-header d-flex justify-content-between ">
                  <h4 className="d-inline" onClick={this.onClickEvent}>
                    {" "}
                    {name}
                  </h4>
                  <i className="fa-solid fa-ban" 
                 onClick={this.onDeleteUser.bind(this,dispatch)}
                   style={{ cursor: "pointer" }}></i>
                </div>
                {isVisible ? (
                  <div className="card-body">
                    <p className="card-text"> {department} </p>
                    <p className="card-text"> {salary} </p>
                  </div>
                ) : null}
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}

export default User;
