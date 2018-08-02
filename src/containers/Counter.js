import React, { Component } from "react";
import Controls from "../components/Counter";
import { connect } from "react-redux";

export class Controller extends Component {

  render() {
    return (
      <Controls {...this.props}/>
    );
  }
};

export const mapStateToProps = store => {
  return {
    count: store.count
  };
};

export default connect(mapStateToProps, null)(Controls);
