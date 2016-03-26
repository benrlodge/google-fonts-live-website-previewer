import React, {Component, PropTypes} from 'react';
import $ from 'jquery';

window.jquery = $

class Elements extends Component {

  componentDidMount() {
    const styles = `<style type='text/css' id='gflp-style'></style>`
    $('head').append(styles);
  }

  renderEls(){
    const els = this.props.elements;

    // make sure the page doesnt have stronger selectors for our app
    const defaultStyles = ".gflp-elements-item{ font-family:sans-serif!important } .gflp-input {color: black!important}";
    let styles = [defaultStyles];
    let items = [];
    // for the stylsheets we will inject
    let fontFamilys = [];

    for (let el in els) {
      const font = els[el];
      const index = fontFamilys.indexOf(font)

      if (index === -1) {
        const encodedFont = font.replace(/ /g, '+');
        fontFamilys.push(font);
      }
      // prepare to inject into html
      styles.push(`${el} {font-family:'${els[el]}'}`)
      const selectorText = `${el} - ${els[el]}`;

      items.push(
        <li key={el} className="gflp-elements-item">
          <span
            className="gflp-item-delete"
            onClick={this.props.removeElement.bind(null, el)}
          >
            X
          </span>
          {selectorText}
        </li>
      );
    }

    // render embedded styles
    $("#gflp-style").html(styles.join(' '))

    // render linked stylesheets
    $('.gflp-stylesheet').remove()

    fontFamilys.forEach(function(font){
      const encodedFont = font.replace(/ /g, '+');
      const link = `<link href='https://fonts.googleapis.com/css?family=${encodedFont}' class="gflp-stylesheet" rel='stylesheet' type='text/css'>`;
      $('head').append(link);
    })

    if (items.length === 0) {
      return (
        <li className="gflp-elements-item">
          No fonts chosen
        </li>
      )
    }

    return items;
  }

  render() {
    return (
      <ul className="gflp-elements">
        {this.renderEls()}
      </ul>
    )
  }
}

module.exports = Elements;
