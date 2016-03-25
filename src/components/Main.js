require('styles/Main.styl');
import React from 'react';
import {findDOMNode} from 'react-dom';
import PhoneSimulator from './PhoneSimulator';
import Components from './Components';
import ScreenParameters from './main/ScreenParameters';
import $ from 'jquery';
require('jquery-ui/draggable');
require('jquery-ui/droppable');
require('animate.css');

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showDropTargets: false};
  }
  componentDidMount() {
    Object.keys(this.refs.components.refs).map((key) => {
      $(findDOMNode(this.refs.components.refs[key])).draggable({
        appendTo: 'parent',
        helper: 'clone'
      });
    });
    console.log(findDOMNode(this.refs.simulator.refs.content))
    $(findDOMNode(this.refs.simulator.refs.content)).droppable({
      activeClass: 'animated pulse',
      hoverClass: 'ui-drop-active',
      accept: '.usable-component',
      drop: function( event, ui ) {
        console.log(ui)
      }
    })
  }
  render() {
    return (
      <div className='index'>
        <div className='container'>
          <div className='row text-center'>
            <ScreenParameters actions={this.props.actions} phone={this.props.phone}/>
          </div>
          <div className='row'>
            <div className='col-xs-12 col-sm-9'>
              <div className='row'>
                <p className='pull-right visible-xs'>
                  <button type='button' className='btn btn-primary btn-xs' data-toggle='offcanvas'>Toggle nav</button>
                </p>
              </div>
              <PhoneSimulator ref='simulator' actions={this.props.actions} phone={this.props.phone}/>
            </div>
            <div className='col-xs-6 col-sm-3 sidebar-offcanvas'>
              <Components ref='components'/>
            </div>
          </div>
        </div>
        <div className='notice'>Please edit <code>src/components/Main.js</code> to get started!</div>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
