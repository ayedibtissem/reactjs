import toast,{Toaster} from "react-hot-toast"
import { useState } from "react"
import UserService from "../services/UserSevices";


const Login=()=>{
    const[email,setEmail]=useState('')
    const[password,setPassword]=useState('')
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
        
        if (email ==""){
          localErrors.email='email required' ;
            status=false;
        }
        
        if (password ==""|| password.length<8){
                    localErrors.password='password required and min 8 caracters' ;
                    status=false;
                 }
                
         setErrors(localErrors)
    console.log(localErrors)
    return status;
    
    
    
    
    }
    
    
    

    const signin=async(e)=>{
        e.preventDefault();
    console.log("form sumbited")
    if(formValidation()){
    
    const data={
        email:email,
        password:password,
       
    }
    try {
        const response= await UserService.signin(data)  
      
        console.log("response===>",response)
       
        toast.success('  user login ...')
      setEmail('')
      setPassword('')
     
      
      } catch (err) {
        console.log  (err)
        toast.error(err.response.data.message);
      }
      }else{
      
      console.log("form invalid")
      
      
      
      }
      } 
      


return (

<div className="login">
<Toaster/>
<div className="login-cover"></div>
<div className="login-content">

<div>
                <h1>Dark Space    </h1>
                <p>Cyber Security Awarness quiz Application</p>
            </div>

            <div>
                <form onSubmit={signin}>

                

<div className="form-group">
<label>Email</label>
<input className="input" type='mail'value={email} onChange={ 
    (e)=>setEmail(e.target.value)}></input>
    {
    errors.email !==" "?<div style={{textAlign:'center',color:'blue'}}>
        {errors.email}
        </div>:''
}
</div>

<div className="form-group">
<label>Password</label>
<input  className="input" type='password'value={password} onChange={ 
    (e)=>setPassword(e.target.value)}></input>
    {
    errors.password !==" "?<div style={{textAlign:'center',color:'blue'}}>
        {errors.password}
        </div>:''
}
</div>




                <button className="btn signin" type="sumbit">Sign in</button>


                </form>
                </div>



</div>
</div>

)
}
export default Login


