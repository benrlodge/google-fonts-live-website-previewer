import React from 'react';
import ReactDOM from "react-dom";
import TestUtils from 'react-addons-test-utils';
import shallowTestUtils from "react-shallow-testutils";
import expect from 'expect';

import App from '../../src/components/App.js';

describe('App', function () {
  let app;

  beforeEach(function(){
    const renderer = TestUtils.createRenderer();
    renderer.render( <App /> );
    app = renderer.getRenderOutput();
  });

  it('should render the correct classnames', function () {
    expect(app.props.className).toEqual("gflp");
  });

  it('should render the correct children', function () {
    expect(app.props.children[0]).toNotEqual(null);
    expect(app.props.children[1]).toNotEqual(null);
  });

  it('CSSTransitionGroup should render FontManager', function () {
    expect(app.props.children[1]).toNotEqual(null);
  });


  // it('Toggle Editor should be closed by default', function () {
  // });

  /*
  To do:
   - initial state
   - addElement
   - removeElement
   - toggle editor
   - font api
  */


});
