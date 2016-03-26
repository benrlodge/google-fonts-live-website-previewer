import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import $ from 'jquery'

function renderApp() {
  render(
    <App />, document.getElementById("gflp")
  );
}

(function () {
  if ( $('#gflp').length > 0 ) {
    return;
  }

  let link = "https://s3-us-west-2.amazonaws.com/benrlodge/apis/google-fonts/GFLP.css";

  if (document.location.hostname === 'localhost') {
    link = '/css/GFLP.css';
  }

  $('head').append(`<link href="${link}" rel="stylesheet" />`);
  $('body').prepend("<div id='gflp'></div>");

  (function gflp() {
    setTimeout(() => { renderApp() }, 1)
  })();

}());
