import React from 'react'
import { ValidationError, useForm } from '@formspree/react'



const About = () => {

   const [state, handleSubmit] = useForm("meqvklpb");
      if (state.succeeded) {
        return <div><h1>Thank you!</h1></div>
      }
      
    return(
      <>
         <div>
            <p></p>
         </div>
         <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
               <ValidationError field="email" prefix="Email" errors={state.errors} />
               <input
                  type="name"
                  name="first name"
                  placeholder="First Name">
               </input>
                  <br/>
               <input
                  type="name"
                  name="last name"
                  placeholder="Last Name">
               </input>
                  <br/>
               <input
                  type="email"
                  name="email"
                  placeholder="Email Address">
               </input>
                  <br/>
               <input
                  id="message"
                  name="message">
               </input>
                  <br/>
               <button className="card-button" type="submit" disabled={state.submitting}><h4>Submit</h4></button>
            </form>
      </>
   )
}

export default About