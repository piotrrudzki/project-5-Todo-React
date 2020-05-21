import React, { Component } from "react";
const nowDate = new Date().toISOString().slice(0, 10);
class AddTask extends Component {
  state = {
    text: "",
    dateAdd: nowDate,
    dateDone: "",
    checked: false,
  };

  handleInputChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleClick = (e) => {
    e.preventDefault();
    const { text, checked, dateAdd, dateDone } = this.state;
    const add = this.props.add(text, checked, dateAdd, dateDone);
    if (add) {
      this.setState({
        text: "",
        dateAdd: nowDate,
        dateDone: "",
        checked: false,
      });
    }
  };

  handleCheckboxChange = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  handleDate = (e) => {
    this.setState({
      dateDone: e.target.value,
    });
  };

  render() {
    let maxDate = new Date();

    let dd = String(maxDate.getDate()).padStart(2, "0");
    let mm = String(maxDate.getMonth() + 1).padStart(2, "0");
    let yyyy = maxDate.getFullYear() + 5;

    maxDate = yyyy + "-" + mm + "-" + dd;
    return (
      <div className="addTask">
        <h2>Add Tasks</h2>
        <form>
          <label htmlFor="task">
            <p>Your task</p>
            <input
              value={this.state.text}
              placeholder="Type your task..."
              type="text"
              onChange={this.handleInputChange}
            />
            <button onClick={this.handleClick}>Add</button>
          </label>
          <br />
          <label htmlFor="priority">
            Priority
            <input
              id="priority"
              className="checkbox"
              type="checkbox"
              checked={this.state.checked}
              onChange={this.handleCheckboxChange}
            />
          </label>
          <br />
          <label htmlFor="date">
            Finish date
            <br />
            <input
              id="date"
              type="date"
              onChange={this.handleDate}
              defaultValue={nowDate}
              min={nowDate}
              max={maxDate}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default AddTask;
