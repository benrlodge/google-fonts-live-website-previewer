import React, {Component, PropTypes} from 'react';

class NavToggle extends Component {

  getClassNames() {
    let classes = "gflp-toggle";
    if (this.props.open) {
      classes += " active";
    }
    return classes;
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
