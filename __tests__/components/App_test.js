import React from 'react';
import ReactDOM from "react-dom";
import TestUtils from 'react-addons-test-utils';
import shallowTestUtils from "react-shallow-testutils";
import expect from 'expect';

import App from '../../src/components/App.js';

describe('App', function () {

  it('works', function () {
    expect(App).toExist()

    let renderer = TestUtils.createRenderer();
    renderer.render(<App />);
    const AppElement = renderer.getRenderOutput();

    // assert.equal(AppElement.type, 'div');
    console.log(AppElement.type)


    const children = shallowTestUtils.findAllWithType(todolist, Todo);

    // console.log(AppElement.state)

    expect(5).toEqual(5)

  });
});
