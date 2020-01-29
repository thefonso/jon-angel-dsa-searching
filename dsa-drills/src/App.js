import React from 'react';
import './App.css';
import { dataStore, sortedDataStore } from './dataStore';

class App extends React.Component {
  state = {
    value: null,
    search: null,
  };

  binarySearch(arr, value, start = 0, end = arr.length - 1, count = 0) {
    let index = Math.floor((start + end) / 2);
    let item = arr[index];

    console.log(count);
    console.log(start);
    if (item === value) {
      return `Binary search: ${value} found in ${count} tries`;
    } else if (item < value) {
      return this.binarySearch(arr, value, index + 1, end, (count = count + 1));
    } else if (item > value) {
      return this.binarySearch(
        arr,
        value,
        start,
        index - 1,
        (count = count + 1)
      );
    }

    return `Binary search: Not Found in input data! Took ${count} tries`;
  }

  linearSearch(arr, value) {
    let count;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === value) {
        count = i;
        return ` Linear search: ${value} found in ${i} tries`;
      }
    }

    return `Linear search: Not Found in input data! Took ${count} tries`;
  }

  handleSubmit = e => {
    e.preventDefault();

    let value = parseInt(e.target.searchVal.value);

    if (this.state.search === 'Binary') {
      let searchList = sortedDataStore.sort((a, b) => a - b);
      console.log(searchList);

      let index = this.binarySearch(searchList, value);
      this.setState({ value: index });

      this.renderResult(this.state.value);
    }

    if (this.state.search === 'linear') {
      let index = this.linearSearch(dataStore, value);
      this.setState({ value: index });
      this.renderResult(this.state.value);
    }
  };

  renderResult(index) {
    console.log(index);
    if (this.state.value === null) {
      return <span>Enter a number to check, and select a Search Algorithm</span>
    } else {
      return <span>{`${this.state.value}`}</span>;

    }
  }

  render() {
    return (
      <div className="App">
        <div>{this.renderResult()}</div>
        <br></br>
        <form onSubmit={this.handleSubmit}>
          <input type="text" id="searchVal" name="searchVal" />
          <br></br>
          <br></br>
          <button
            type="submit"
            onClick={() => {
              this.setState({ search: 'Binary' });
            }}
          >
            Binary Search
          </button>
          <br></br><br></br>
          <button
            onClick={() => {
              this.setState({ search: 'linear' });
            }}
          >
            Linear Search
          </button>
        </form>
      </div>
    );
  }
}
//

export default App;
