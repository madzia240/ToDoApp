import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  state = {
    text: "",
    checked: false,
    date: new Date().toISOString().slice(0, 10),
  };
  handleTextChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  handleCheckboxChange = (e) => {
    this.setState({
      checked: true,
    });
  };
  handleDateChange = (e) => {
    this.setState({
      date: e.target.value,
    });
  };
  handleClick = () => {
    const { text, date, checked } = this.state;
    const add = this.props.add(text, date, checked);
    if (text.length < 3) alert("Treść zadania jest za krótka");
    if (add) {
      this.setState({
        text: "",
        checked: "",
        date: this.minDate,
      });
    }
  };
  render() {
    const minDate = new Date().toISOString().slice(0, 10);
    let maxDate = minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";
    return (
      <div className="form">
        <input
          type="text"
          placeholder="dodaj zadanie"
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input
          type="checkbox"
          checked={this.state.checked}
          id="important"
          onChange={this.handleCheckboxChange}
        />
        <label htmlFor="important">Ważne!</label>
        <br />
        <label htmlFor="date">do kiedy zrobić? </label>
        <input
          type="date"
          id="date"
          value={this.state.date}
          min={minDate}
          max={maxDate}
          onChange={this.handleDateChange}
        />
        <br />
        <button onClick={this.handleClick}>dodaj</button>
        <hr />
      </div>
    );
  }
}

export default AddTask;
