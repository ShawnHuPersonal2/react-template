'use strict';

import React from 'react';
import {Navbar, Nav, NavItem, Popover} from 'react-bootstrap';
import MenuConstants from '../constants/Menu';
import {Link} from 'react-router';

require('styles//Header.styl');

function Item(props) {
  switch (props.type) {
    case MenuConstants.download:
      return (
        <NavItem eventKey={props.key}>Download
        </NavItem>
      );
    case MenuConstants.feature:
      return (
        <NavItem eventKey={props.key}>feature
        </NavItem>
      );
    case MenuConstants.gallery:
      return (
        <NavItem eventKey={props.key}>Gallery
        </NavItem>
      );
    case MenuConstants.group:
      return (
        <NavItem eventKey={props.key}>Group
        </NavItem>
      );
    case MenuConstants.help:
      return (
        <NavItem eventKey={props.key}>Help
        </NavItem>
      );
    case MenuConstants.chat:
      return (
        <NavItem eventKey={props.key}>Chat
        </NavItem>
      );
    case MenuConstants.notification:
      return (
        <NavItem eventKey={props.key}>Noti
        </NavItem>
      );
    case MenuConstants.login:
      return (
        <NavItem eventKey={props.key}>Login
        </NavItem>
      );
    case MenuConstants.avatar:
      return (
        <NavItem eventKey={props.key}>Avatar
        </NavItem>
      );
    default:
      return (
        <NavItem eventKey={props.key}>
          <Link to='download' params={{splat:''}} activeClassName='active'>Download
          </Link>
        </NavItem>
      );
  }
}


class HeaderComponent extends React.Component {
  render() {
    let entries = this.props.menu.map((entry)=><NavItem eventKey={entry}><Item key={entry} type={entry}/></NavItem>);
    return (
      <div className='header-component'>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              {entries}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

HeaderComponent.displayName = 'HeaderComponent';

// Uncomment properties you need
// HeaderComponent.propTypes = {};
// HeaderComponent.defaultProps = {};

export default HeaderComponent;

/*
import {State,Link} from 'react-router';
import Router from 'react-router';
import UserBriefPanel from "main/components/UserBriefPanel";
import ActivityNotifications from "main/components/ActivityNotifications";
import ConversationsBriefPanel from "main/components/ConversationsBriefPanel";
import TopMenuActions from "main/actions/TopMenuActions";
import LoginModal from "main/components/LoginModal";
import SignupModal from "main/components/SignupModal";
import PasswordResetModal from "main/components/PasswordResetModal";
import AccountStore from "main/stores/AccountStore";
import MessageActions from "main/actions/MessageActions";
import DesktopActions from "main/actions/DesktopActions";
import AgreeService from 'main/components/AgreeService';

var ReactBootstrap = require('react-bootstrap');

var MenuItem = ReactBootstrap.MenuItem;
var Popover = ReactBootstrap.Popover;

var css = require("styles/components/topMenu.css");

var TopMenu = React.createClass({
  mixins: [State,Reflux.connect(AccountStore, 'account')],
  getInitialState: function () {
    return {showMenu: true, account: AccountStore.account};
  },
  showLogin: function (e) {
    if(e!=undefined)
      e.preventDefault();
    TopMenuActions.showLogin();
  },
  showSignup: function (e) {
    if(e!=undefined)
      e.preventDefault();
    TopMenuActions.showSignup();

  },
  checkUser: function(e) {
    var target = $.extend({}, e).target;
    if (Services.Session.getUser() == null) {
      e.preventDefault();
      TopMenuActions.showLogin(function(){
        location.href = target.href;
      });
    }
  },
  discover: function () {
    var customEvent = new CustomEvent(Constants.eventDispatchConstants.SHOW_SEARCH, {
      bubbles: true
    });
    this.getDOMNode().dispatchEvent(customEvent);
  },
  isStandaloneAccountPage() {
    let routes = this.getRoutes();
    let desktopsRoute = _.find(routes, (route)=>{
      return route.name=="login" | route.name=="signup" | route.name=="resetPassword";
    });
    return desktopsRoute != null;
  },
  render: function () {
    var account = this.state.account;
    var desktopsLink = this.desktopLink;
    var groupsLink = this.groupsLink;
    var appLink = this.appLink;
    var showLogin = this.showLogin;
    var showSignup = this.showSignup;
    var left_button = [];
    var navItems = [];

    if (this.isStandaloneAccountPage()) {
      navItems.push(
        <li key="standalone-signup" className="pull-right" role="presentation">
          <Link to="signup" className="logo-title black-color"
                activeClassName="active logo-title black-color">{nls.topmenu_sign_up}</Link>
        </li>
      );
      navItems.push(
        <li key="standalone-login" className="pull-right" role="presentation">
          <Link to="login" className="logo-title black-color"
                activeClassName="active logo-title black-color">{nls.topmenu_login}</Link>
        </li>
      );
    } else {

      if (account == null) {
        navItems.push(
          <li id="help" key="help" className="pull-right" role="presentation">
            <Link to="help" params={{splat:""}} activeClassName="active">{nls.topmenu_help}
            </Link>
          </li>
        );
        navItems.push(
          <li key="login" className="pull-right" role="presentation"><a href="#"
                                                                        onClick={this.showLogin}>{nls.topmenu_login}</a>
          </li>
        );
        navItems.push(
          <li key="groups" className="pull-right" role="presentation">
            <Link to="groups" ref='desktopsMenu' activeClassName="active"
                  onClick={this.checkUser}>{nls.topmenu_groups}
            </Link>
          </li>
        );
      }
      if (account != null) {
        var avatar = account.avatar ? account.avatar : require('images/avatar.jpg');
        navItems.push(
          <li key="profile" className="pull-right" role="presentation">
            <UserBriefPanel user={account}/>
          </li>
        );
        navItems.push(
          <li key="messges" className="pull-right" role="presentation">
            <ActivityNotifications user={account}/>
          </li>
        );
        navItems.push(
          <li key="messages" className="pull-right" role="presentation">
            <ConversationsBriefPanel user={account}/>
          </li>
        );
        navItems.push(
          <li id="help" key="help" className="pull-right" role="presentation">
            <Link to="help" params={{splat:""}} activeClassName="active">{nls.topmenu_help}
            </Link>
          </li>
        );
        navItems.push(
          <li key="groups" className="pull-right" role="presentation">
            <Link to="groups" ref='desktopsMenu' activeClassName="active"
                  onClick={this.checkUser}>{nls.topmenu_groups}
            </Link>
          </li>
        );
      }
      navItems.push(
        <li id="desktops-menu" key="desktops" className="pull-right" role="presentation">
          <Link to="desktops" activeClassName="active">{nls.topmenu_desktops}
          </Link>
        </li>
      );
      navItems.push(
        <li id="desktops-menu" key="feature" className="pull-right" role="presentation">
          <Link to="feature" params={{splat:""}} activeClassName="active">{nls.topmenu_feature}
          </Link>
        </li>
      );
      navItems.push(
        <li id="desktops-menu" key="download" className="pull-right" role="presentation">
          <Link to="download" params={{splat:""}} activeClassName="active">{nls.topmenu_download}
          </Link>
        </li>
      );
    }
    var icon = require('images/logo.png');

    return (
      <div id="top-menu">
        <nav className='top-menu navbar navbar-static-top'>
          <div className='container'>
            <div className="col-xs-12">
              <ul className="nav nav-pills">
                <li role="presentation">
                  <img className="clickable logo-img" onClick={function(){location.href='/'}} src={icon}/>
                </li>
                {navItems}
              </ul>
            </div>
            <LoginModal/>
            <SignupModal/>
            <PasswordResetModal/>
            <AgreeService/>
          </div>
        </nav>
      </div>
    )
  }
});
module.exports = TopMenu;
*/
