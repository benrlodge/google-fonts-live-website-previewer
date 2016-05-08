import React, {Component, PropTypes} from 'react';
import $ from 'jquery';
import Select from 'react-select';

class Editor extends Component {

  constructor() {
    super()

    this.addElement = this.addElement.bind(this);
    this.updateElValue = this.updateElValue.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.renderAdd = this.renderAdd.bind(this);
    this.handleFontAdd = this.handleFontAdd.bind(this);

    this.state = {
      elValue: '',
      font: null
    }
  }

  updateElValue(e) {
    this.setState({
      elValue: e.currentTarget.value
    })
  }

  handleKeyDown(e) {
    if (e.key === 'Enter') {
      this.addElement()
    }
  }

  handleFontAdd(val) {
    this.setState({
      font: val
    });
  }

  addElement() {
    // todo: check that a font-family is chosen

    var selector = this.refs.selector.value;

    if (selector.length === 0 || !this.state.font) {
      return
    }

    this.props.addElement({
      selector: selector,
      family: this.state.font
    });
  }

  renderAdd() {
    const options = this.props.fonts.map((font) => {
      return {
        value: font.family,
        label: font.family
      }
    });

    return (
      <div className="gflp-editor">
        <Select
          className="gflp-font-select"
          value={this.state.font}
          name="fonts"
          placeholder="Select a font family"
          options={options}
          onChange={this.handleFontAdd}
        />
        <input
          value={this.state.elValue}
          onChange={this.updateElValue}
          onKeyDown={this.handleKeyDown}
          ref="selector"
          className="gflp-selector-input"
          type="text"
          placeholder="Add a custom CSS selector, eg. h1 or .someclass"
        />
        <span className="gflp-add-btn" onClick={this.addElement}>Add</span>
      </div>
    );
  }

  render() {
    return (
      <div className="gflp-add-container">
        {this.renderAdd()}
      </div>
    )
  }
}

module.exports = Editor;
