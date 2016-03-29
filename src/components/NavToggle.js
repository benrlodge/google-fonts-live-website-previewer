import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

class NavToggle extends Component {

  getClassNames() {
    return classNames(
      "gflp-toggle",
      {"active": this.props.open},
      this.props.options.position
    );
  }

  render () {
    const {open} = this.props;
    let toggleText = open ? 'Finished Editing' : 'Modify With Google Fonts';

    return (
      <div className={this.getClassNames()} onClick={this.props.toggleEditor}>
        &#9776; {toggleText}
      </div>
    )
  }
}

module.exports = NavToggle;
