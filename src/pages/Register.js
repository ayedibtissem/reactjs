
import React from "react"
import { useState } from "react"
import UserService from "../services/UserSevices";
import toast,{Toaster} from "react-hot-toast"
const Register=()=>{


   
const[firstname,setFirstname]=useState('')
const[lastname,setLastname]=useState('')
const[email,setEmail]=useState('')
const[password,setPassword]=useState('')
const[position,setPosition]=useState('')
const [errors,setErrors]=useState({
   
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    position:''




})

const formValidation=()=>{
    let status=true;
    let localErrors={...errors}
    
    if (firstname  ===""){
      localErrors.firstname='firstname required' ;
        status=false;
    }
    if (lastname  ===""){
        localErrors.lastname='lastname required' ;
        status=false;
    }
       
    if (password ===""|| password.length<8){
                localErrors.password='password required and min 8 caracters' ;
                status=false;
             }
             if (position ===""){
                localErrors.position='position required' ;
                status=false;
             }
     setErrors(localErrors)
console.log(localErrors)
return status;




}





const register=async(e)=>{
    e.preventDefault();
console.log("form sumbited")
console.log("form data",firstname,lastname,email,password,position)
if(formValidation()){

const data={
    firstname:firstname,
    lastname:lastname,
    email:email,
    password:password,
    position:position
}
    try {
  const response= await UserService.register(data)  

  console.log("response===>",response)
 
  toast.success('  user created Successfully!');
setFirstname('')
setLastname('')
setEmail('')
setPassword('')
setPosition('')

} catch (error) {
  console.log  (error)
  toast.error('failed  while sign up');
}
}else{

console.log("form invalid")


}
} 



return (

<div className="register">
<Toaster/>
<div className="register-cover">

</div>
<div className="register-content">
            <div>
                <h1>Dark Space    </h1>
                <p>Cyber Security Awarness Auiz Application</p>
            </div>

            <div>
                <form onSubmit={register}>
                    <div className="form-group">
                    <label>Firstname</label>
                    <input  className="input" type='text' value={firstname} onChange={ 
                        (e)=>setFirstname(e.target.value)}/>
                    {
                        errors.firstname!==" "?<div style={{textAlign:'center',color:'blue'}}>
                            {errors.firstname}
                            </div>:''
                    }
</div>
                    <div className="form-group">
                    <label>Lastname</label>
                    <input className="input" type='text'value={lastname} onChange={ 
                        (e)=>setLastname(e.target.value)}></input>
                    {
                        errors.lastname!==" "?<div style={{textAlign:'center',color:'blue'}}>
                            {errors.lastname}
                            </div>:''
                    }
                    </div>

                    <div className="form-group">
                    <label>Email</label>
                    <input className="input" type='mail'value={email} onChange={ 
                        (e)=>setEmail(e.target.value)}></input>
                        {
                        errors.email!==" "?<div style={{textAlign:'center',color:'blue'}}>
                            {errors.email}
                            </div>:''
                    }
                    </div>

                    <div className="form-group">
                    <label>Password</label>
                    <input  className="input" type='password'value={password} onChange={ 
                        (e)=>setPassword(e.target.value)}></input>
                        {
                        errors.password!==" "?<div style={{textAlign:'center',color:'blue'}}>
                            {errors.password}
                            </div>:''
                    }
                    </div>
                    <div className="form-group">
                    <label>Position</label>
                    <input className="input" type='text'value={position} onChange={ 
                        (e)=>setPosition(e.target.value)}></input>
                        {
                        errors.position!==" "?<div style={{textAlign:'center',color:'blue'}}>
                            {errors.position}
                            </div>:''
                    }
                    </div>

                    <button className="btn signup" type="sumbit">Sign up</button>

              </form>
         </div>

</div>

</div>
)

} 
export default Register