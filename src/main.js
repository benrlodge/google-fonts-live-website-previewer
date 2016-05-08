import React from 'react';
import {render} from 'react-dom';
import App from './components/App';
import $ from 'jquery'

const CDN_CSS_URL = "https://s3-us-west-2.amazonaws.com/benrlodge/apis/google-fonts/GFLP.css";

function renderApp(options) {
  render( <App options={options} />, document.getElementById("gflp") );
}

window.GFLP = function (options) {
  if ( $('#gflp').length > 0 ) {
    return;
  }

  const host = document.location.hostname;
  const link = host === 'localhost' ? '/GFLP.css' : CDN_CSS_URL;

  console.log('append: ', link);
  $('head').append(`<link href="${link}" rel="stylesheet" />`);
  $('body').prepend("<div id='gflp'></div>");

  (function gflp() {
    setTimeout(() => { renderApp(options) }, 1)
  })();

};
