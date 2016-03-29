import React, {Component, PropTypes} from 'react';
import $ from 'jquery'
import Editor from './Editor';
import Elements from './Elements';
import classNames from 'classnames';

class FontManager extends Component {

  getClassNames() {
    return classNames(
      "gflp-editor-container",
      this.props.options.position,
      {"sidebar-shown": this.props.open}
    );
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
