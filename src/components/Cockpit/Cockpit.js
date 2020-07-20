import React ,{useContext}from "react"
import './Cockpit.css'
import Authcontext from '../../context/Auth-context'
const Cockpit=(props) =>{
   
    let classes =[];
    if(props.persons.length <=2){
      classes.push('red');
    }
    if(props.persons.length <=1){
      classes.push('bold');
    }
return (<>
    <h1>hi i am using react app</h1>
    <p className={classes.join(' ')}> this is really working</p>
   <button className="button"
    onClick={props.toggle}>toggle persons
    </button>
    <Authcontext.Consumer>
    {(context)=><button className="button" onClick={context.login}>Log in</button>}
    </Authcontext.Consumer>
    </>
)
}

export default Cockpit