import React,{Component} from 'react'
import AuthContext from '../../../context/Auth-context'
// import './Person.css';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Auxiliary from '../../../hoc/Auxiliary'
import Persons from '../Persons';

let StyledDiv = styled.div`
width:60%;
margin: auto;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc ;
padding: 16px;
text-align: center;
@media (min-width: 500px){
width:450px;
}`
class Person extends Component{

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }
    static contextType = AuthContext;
   componentDidMount(){
    //    this.inputElement.focus();
    this.inputElementRef.current.focus()
    console.log(this.context.auth)
   }
    render(){
        const style ={
            '@media (min-width: 500px)':{
                width: '450px',
            }
        }
    return (
        // <div className="Person">
        <React.Fragment>
           {this.context.auth?<p>good</p>:<p>log in</p>}
            
           
            <p onClick={this.props.click}> i am {this.props.name} and i am {this.props.age} years old</p>
            <input onChange={this.props.changed} 
            value={this.props.name} 
            type="text"
            // ref={(inputEl)=>{this.inputElement = inputEl}}
            ref={this.inputElementRef}
             />
        
            </React.Fragment> 
    )}
}

// Person.prototype = {
//     click: PropTypes.func,
//     name: PropTypes.string,
//     age: PropTypes.number,
//     changed:PropTypes.func
// };

export default Person
