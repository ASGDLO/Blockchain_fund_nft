import React, { Component } from "react";
import Flatpickr from "react-flatpickr";
import rangePlugin from "flatpickr/dist/plugins/rangePlugin";
import "flatpickr/dist/flatpickr.min.css";
import "flatpickr/dist/themes/light.css";

export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.clearDate = this.clearDate.bind(this);

    this.state = {
      selectValue: props.selectValue ? props.selectValue : "",
      options: props.options
        ? Object.assign({}, props.options, {
            plugins: [new rangePlugin({ input: "#" + props.fromDateID })]
          })
        : { plugins: [new rangePlugin({ input: "#" + props.fromDateID })] },
      disabled: props.disabled ? props.disabled : false,
      placeholder: props.placeholder ? props.placeholder : ""
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      selectValue: newProps.selectValue ? newProps.selectValue : "",
      options: newProps.options
        ? Object.assign({}, newProps.options, {
            plugins: [new rangePlugin({ input: "#" + newProps.fromDateID })]
          })
        : { plugins: [new rangePlugin({ input: "#" + newProps.fromDateID })] },
      disabled: newProps.disabled ? newProps.disabled : false,
      placeholder: newProps.placeholder ? newProps.placeholder : ""
    });
  }

  clearDate() {
    this.refs.refDatePicker.flatpickr.clear();
  }

  render() {
    return (
      <Flatpickr
        className="form-control clickable"
        disabled={this.state.disabled}
        ref="refDatePicker"
        placeholder={this.state.placeholder}
        options={this.state.options}
        value={this.state.selectValue}
      />
    );
  }
}
