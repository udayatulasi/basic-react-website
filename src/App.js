import React, { Component } from 'react';
import './App.css';
// import classes from "./App.css"
import Persons from './components/Persons/Persons'
import Cockpit from "./components/Cockpit/Cockpit"
// import WithClass from "./hoc/WithClass"
import Authcontext  from './context/Auth-context'

class App extends Component {
state ={
  persons:[
    {name:"udaya", age:"25", id: 1},
    {name:"shiva", age:"26", id: 2 },
],
otherState:'some other value',
showPersons: false,
Auth: false
}

nameChangeHandler =(event,id)=>{
  const personIndex = this.state.persons.findIndex(p =>{
    return p.id === id;
  })

  const person ={
    ...this.state.persons[personIndex]
  }
  // const person = Object.assign({},this.state.persons[personIndex])

  person.name = event.target.value;

  let persons = [...this.state.persons];
  persons[personIndex] = person;
  this.setState({persons:persons});
}

deletePeersonHandler = (personIndex)=>{
  let persons = [...this.state.persons];
  persons.splice(personIndex,1);
  this.setState({persons:persons});
}


togglePersonshandler =()=>{
  const doesShow = this.state.showPersons;
  this.setState({showPersons:!doesShow});
}

AuthF =()=>{
  this.setState({
    Auth: true,
  })
}
  render(){
    
    let persons = null;
    if(this.state.showPersons){
      persons =(
        <div>
          <Persons persons={this.state.persons}
          clicked={this.deletePeersonHandler}
          changed={this.nameChangeHandler}
          />
        </div>
      );
      
    }

    

  return (
    
    // <WithClass classes={classes.App}>
    <div className="App"> 
    <Authcontext.Provider 
    value={{auth:this.state.Auth,
    login:this.AuthF
    }}
    >
      <Cockpit persons={this.state.persons}
      toggle={this.togglePersonshandler}
      />
      {persons}    
      </Authcontext.Provider>
     </div>
     
  );
  
  // return React.createElement('div',{className:'App'},React.createElement('h1',"HI"))
}
}

export default App;
