import React, { Component } from 'react'
import './register.css'
import classnames from 'classnames';

class Register extends Component {
  constructor(props) {
  super(props);
  this.state = {
    name: '',
     password: '',
      prenom: '',
      email: '',
      
       errors:{}
  };

  this.handleChange = this.handleChange.bind(this);
}
 


  


    submit = e => {
        
        e.preventDefault();
     
       const {  name,email,password } = this.state;

        const reg = /^[a-z A-Z 0-9 _]+@(gmail)\.com$/;
         const regp = /^(?=.*[0-9])(?=.*[!@])[a-zA-Z0-9!@]{8,14}$/
        const regn = /^[A-Z][A-Z a-z]+$/
 

        if(!regn.test(name)){

               this.setState({errors: {name:"Format Name not valide must be beging with majsc"}})
               return;
            
         
        }

       if(!reg.test(email)){

               this.setState({errors: {email:"Format eamil not valide @gmail.com"}})
               return;
            
         
        }
        
       if(!regp.test(password)){
        
            
             this.setState({errors: {password:"must be containet @ A-Z a-z 1-9 annd min 8 carcter"}})
               return;

        }
     
      
    }

 handleChange(e) {
     console.log("chnage work")
       this.setState({
           [e.target.name]: e.target.value
        });
   
   } 
   

    render() {
       
         const {  errors } = this.state;
         
        return (
            
            <div>
                
               
                     <form className="form-sty mt-5" onSubmit={this.submit}>

                          <div className="form-group mt-5">
                                    <label for="exampleInputEmail1">name :</label>
                                        <input  type="text"  name="name" 
                                        className={classnames('form-control' , {
                                            'is-invalid' : errors.name
                                         })}
                                        placeholder="name"
                                        onChange={this.handleChange.bind(this)}
                                        />
                                   <div className="invalid-feedback">
                                     {errors.name}
                                   </div>
                            </div>
                              
                             
                              <div className="form-group mt-5">
                                    <label for="exampleInputEmail1">email:</label>
                                        <input  type="text"  name="email" 
                                         className={classnames('form-control' , {
                                            'is-invalid' : errors.email
                                         })}
                                        placeholder="eamil"
                                        onChange={this.handleChange.bind(this)}
                                        />
                                   <div className="invalid-feedback">
                                     {errors.email}
                                   </div>
                            </div>
                            <div className="form-group mt-5">
                                    <label for="exampleInputEmail1">password:</label>
                                        <input  type="text"  name="password" 
                                         className={classnames('form-control' , {
                                            'is-invalid' : errors.password
                                         })}
                                        placeholder="password"
                                        onChange={this.handleChange.bind(this)}
                                        />
                                   <div className="invalid-feedback">
                                     {errors.password}
                                   </div>
                            </div>
                          
        
                       <button type="submit" className="btn btn-primary centre-btn ">Submit</button>

                </form>
                    
                
           
           </div>
        )
    }
}

export default Register