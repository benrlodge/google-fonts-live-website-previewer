import React, {Component, PropTypes} from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import $ from 'jquery';

import NavToggle from './NavToggle';
import FontManager from './FontManager';
import Elements from './Elements';

class App extends React.Component {

  constructor() {
    super();

    this.toggleEditor = this.toggleEditor.bind(this);
    this.addElement = this.addElement.bind(this);
    this.removeElement = this.removeElement.bind(this);

    this.state = {
      elements: {},
      open: false,
      loadingFonts: true,
      fonts: []
    }
  }

  componentDidMount() {
    const fonts = 'https://s3-us-west-2.amazonaws.com/benrlodge/apis/google-fonts/fonts.json';
    $.get(fonts, (data ) => {
      this.setState({
        fonts: data.items,
        loadingFonts: false
      });
    });
  }

  removeElement(el) {
    let updatedElements = this.state.elements;
    delete updatedElements[el];

    this.setState({
      elements: updatedElements
    });
  }

  addElement(el) {
    let state = this.state;
    state.elements[el.selector] = el.family;

    this.setState({
      elements: this.state.elements
    });
  }

  toggleEditor() {
    this.setState({
      open: !this.state.open
    });
  }

  render () {
    return (
      <div className='gflp'>
        <NavToggle
          {...this.state}
          toggleEditor={this.toggleEditor}
        />
        <CSSTransitionGroup
          transitionName="revealingSidebar"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400}
        >
          <FontManager
            {...this.state}
            addElement={this.addElement}
            removeElement={this.removeElement}
          />
        </CSSTransitionGroup>
      </div>
    )
  }
}

module.exports = App;
