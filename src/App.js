import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './pages/About';
import Media from './components/Media';
import Header from './components/Header';

import AddTodo from './components/AddTodo';
import axios from 'axios';


class App extends React.Component {
  state = {
    media: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(res => this.setState({ media: res.data }))
  }

  markComplete = (id) => {
    console.log('app js id: ' + id);
    this.setState({
      media: this.state.media.map(med => {
        if (med.id === id) {
          med.completed = !med.completed;
        }
        return med;
      })
    })
  }

  delTodo = (id) => {
    console.log('delete: ' + id);
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ media: [...this.state.media.filter(med => med.id !== id)] }));
  }
  addTodo = (title) => {
    // console.log(title);
    // const newMedia = {
    //   id: uuid.v4(),
    //   title: title,
    //   completed: false
    // }
    axios.post('https://jsonplaceholder.typicode.com/todos/', {
      title,
      completed: false
    })
      .then(res => this.setState({ media: [...this.state.media, res.data] }))

  }
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <h1>Main App</h1>
                <h2>React Components injected below this line</h2>
                <Media media={this.state.media} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
