import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.components'
import {SearBox} from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFields: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response => console.log(response))
        .then(response =>response.json())
        .then(users => this.setState({monsters:users}))
  }

  render() {
      const{monsters, searchFields} = this.state;
      const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFields.toLowerCase()));
    return (
        <div className="App">
            <SearBox
              placeholder='search monster'
              handleChange={e => this.setState({searchFields: e.target.value})}
            />
          <CardList monsters={filteredMonsters} />
        </div>
    )
  }
}

export default App;
