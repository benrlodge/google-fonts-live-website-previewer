import React, {Component, PropTypes} from 'react';
import $ from 'jquery'
import Editor from './Editor';
import Elements from './Elements';

class FontManager extends Component {


  getClassNames() {
    let classes = "gflp-editor-container";

    if (this.props.open) {
      classes += " sidebar-shown"
    }

    return classes;
  }

  render() {

    return (
      <div className={this.getClassNames()}>
        <Editor
          {...this.props}
          addElement={this.props.addElement}
        />
        <Elements
          elements={this.props.elements}
          removeElement={this.props.removeElement}
        />

        <div style={{marginTop: "20px"}}>
          <span className="footer-left">
            A project by { ' ' }
            <a target="_blank" className="gflp-link" href="http://www.benrlodge.com">benrlodge</a>
          </span>
          <a target="_blank" style={{float: "right"}} className="gflp-link" href="https://www.google.com/fonts">Visit Google Fonts</a>
        </div>
      </div>
    )
  }
}

module.exports = FontManager;
