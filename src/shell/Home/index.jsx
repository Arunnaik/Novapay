import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import * as localActions from "./actions";
import { Header } from "../common";
import { AddOrganization } from "./Components/addOrganization";
import { ListOrganization } from "./Components/ListOrganization";
import "./home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date().getTime(),
      toDate: new Date().getTime(),
      github: ""
    };
  }

  componentDidMount() {
    this.props.listUser();
  }

  render() {
    return (
      <div>
        <Header header="Github" />
        <div className="organizationCont">
          <div>
            <AddOrganization
              organization={this.props.home && this.props.home.organization}
              addOrganization={this.props.addOrganization}
            />
            <ListOrganization
              organization={this.props.home && this.props.home.organization}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { home } = state;
  return { home };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...localActions }, dispatch);
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
