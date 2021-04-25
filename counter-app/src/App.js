import Navbar from './components/navbar'
import './App.css';
import Counters from './components/counters';
import React from 'react';

class App extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = { 
      counters: [
        { id: 1, value: 3, selected: true },
        { id: 2, value: 1, selected: true },
        { id: 3, value: 0, selected: true }
      ]
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    // Component was mounted on DOM.
    // AJAX CALLS are usually performed here.
  }

  componentDidUpdate(prevProps, prevState) {
    // called right after an update has been detected in the DOM and a part of the component has been 
    // updated with new values.
    console.log(prevProps);
    console.log(prevState);
    // we can decide here whether we should make an AJAX call to get new data in here!
    // if (prevProps.counter[0].value !== this.state.counter[0].value) {
      // make AJAX CALL
    //}
  }

  componentWillUnmount() {
    // Component is unmounted from DOM.
  }

  handleDelete = (idToDelete) => {
      this.setState({ counters: this.state.counters.filter(c => c.id !== idToDelete )})
  }

  handleReset = () => {
      const counters = this.state.counters.map(counter => {
          counter.value = 0;
          return counter;
      });
      this.setState({ counters: counters });
  }

  handleIncrement = (counter) => {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value++;
      this.setState({ counters: counters });
  }

  render() {
    // Component is rendered here.
    return (
      <React.Fragment>
        <Navbar counters={this.state.counters.filter(counter => counter.value > 0).length}/>
        <main className="container">
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
