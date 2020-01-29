import React from 'react';
import './App.css';
import { dataStore, sortedDataStore } from '../dataStore';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }

//functional binders
this.linearSearch = this.linearSearch.bind(this);
this.binarySearch = this.binarySearch.bind(this);
this.handleSubmit = this.handleSubmit.bind(this);
this.handleChange = this.handleChange.bind(this);
  }





//<input>"find (number)"
// <button>LS
//<button>BS
//
//input was found in x searches

///////////////////////////////////////
//for Linear Search:
linearSearch(array, value) {
  console.log('hello linear')
  for (let i = 0; i < dataStore.length; i++) {
    if (dataStore[i] == value) {
      return i;
    }
  }
  return -1;
};

//for Binary Search:
binarySearch(reqValue, start, end, count=0) {
  console.log('hello binary');
  count++
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? sortedDataStore.length : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item == value) {
    return index;
  }
  else if (item < value) {
    return this.binarySearch(array, value, index + 1, end);
  }
  else if (item > value) {
    return this.binarySearch(array, value, start, index - 1);
  }
};
///////////////////////////////////////
handleChange(e) {
  this.setState({value: e.target.value})
}

handleSubmit(e) {
  alert('Something was submitted! This was: ' + this.state.value);
  e.preventDefault();
  //e.preventDefault()
 // if (this.state.function === this.linearSearch){
   
  }



render() {
  return (
    <div className="App">
      <header className="App-header">
    <form onSubmit={this.handleSubmit}>
    <label>
    Find this number:
    <input type="text" value={this.state.value} onChange={this.handleChange} />
    </label>
    <button onClick={() => this.linearSearch()}>LS</button>
    <button onClick={() => this.binarySearch()}>BS</button>
    {/*<input id="LS" type="submit" value="LS" /> */}
    {/*<input id="BS" type="submit" value="BS" /> */}
    </form>
  
      </header>
    </div>
  );
}
}



export default App;
