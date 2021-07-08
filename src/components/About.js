import React from 'react'
import { ValidationError, useForm } from '@formspree/react'
import './about.css'



const About = () => {

   const [state, handleSubmit] = useForm("meqvklpb");
      if (state.succeeded) {
        return <div><h1>Thank you! </h1></div>
      }
      
    return(
      <div id="contact-card">
         <h1>Contact Me</h1>
         <div>
            <h4 id="contact-header">Thank you for stopping by! If you'd like to contact me regarding a project, or have any questions at all, please feel free to send me a message below.</h4>
         </div>
            <form onSubmit={handleSubmit}>
               <ValidationError field="email" prefix="Email" errors={state.errors} />
               <label className="contact-label">First Name</label>
                  {/* <br/> */}
               <input className="inputs"
                  type="name"
                  name="first name"
                  placeholder="Required">
               </input>
                  <br/>
               <label className="contact-label">Last Name</label>
               {/* <br/> */}
               <input className="inputs"
                  type="name"
                  name="last name"
                  placeholder="Required">
               </input>
                  <br/>
               <label className="contact-label">Email Address</label>
                  {/* <br/> */}
               <input className="inputs"
                  type="email"
                  name="email"
                  placeholder="Required">
               </input>
                  <br/>
               <label className="contact-label">Message</label>
                  {/* <br/> */}
               <textarea
                  id="message"
                  name="message">
               </textarea>
                  <br/>
               <button className="card-button" type="submit" disabled={state.submitting}><h4>Submit</h4></button>
            </form>
      </div>
   )
}

export default About