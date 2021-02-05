import React from 'react';
import './sign-in.styles.scss';
import FormInput from './../form-input/form-input.component';
import CustomButton from './../custom-button/custom-button.component';
import { signInWithGoogle } from './../../firebase/firebase.utils';


 class SignIn extends React.Component {
     constructor() {
         super();
         
         this.state = {
             email:'',
             password : ''
         }
     }
      handleSubmit = event => {
           event.preventDefault();
           this.setState ({email :'' , password:''})
      }
       handleChange =  event => {
           const { value, name} = event.target;
           this.setState({[name]: value})
       }

     render() {
         return (
             <div className="sign-in">
              <h2>I Already have an account</h2>
              <span>Sign in with your email and password </span>
                 <form onSubmit={this.handleSubmit}>
                     <FormInput name='email'
                      type="email"
                     handleChange={this.handleChange}
                      value={this.state.email} 
                      label="email"
                      required 
                      />
                      
                     <FormInput name='password'  
                     type="password" 
                     value={this.state.password} 
                     handleChange={this.handleChange}
                     label="password"
                     required 
                     />
                     
                     <CustomButton type="submit" > SIGN IN </CustomButton>
                     <CustomButton  onClick= {signInWithGoogle}
                      
                      >
                          {''}
                           Sign in with google {' '} </CustomButton>

                 </form>
             </div>
         )
     }
 }

 export default SignIn;