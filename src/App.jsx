import React, { useState } from 'react'
import './App.css';

const App= () => {
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')
  const [city,setcity]=useState('')
  const [gender,setgender]=useState('')


const handleClick =(e)=>{
  e.preventDefault();
  const obj={
    name:name,
    email:email,
    password:password,
    city:city,
    gender:gender
  }
  localStorage.setItem('employee',JSON.stringify(obj))
  console.log(obj);
  setname('');
  setemail('');
  setpassword('');
  setcity('');
  setgender('');


}
return (
    <div style={{height:"500px", width:"500px",backgroundColor:"whitesmoke",alignContent:"center",position:"absolute",left:"35%",top:"10%"}}>
    <h1 style={{textAlign:"center"}}>
      Form
    </h1>
    <form  style={{textAlign:"center"}}action="" onSubmit={handleClick}>
      Name : <input  type="text" placeholder='  Enter your name ' value={name} onChange={(e)=>setname(e.target.value)}/><br />
      Email : <input  type="email" placeholder='Enter your email' value={email} onChange={(e)=>setemail(e.target.value)}/><br />
      Password : <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setpassword(e.target.value)}/><br />
      Select city : <select name="" id=""  onChange={(e)=>setcity(e.target.value)}>
        <option value="">city</option>
        <option value="delhi">delhi</option>
        <option value="surat">surat</option>
        <option value="mumbai">mumbai</option>
        <option value="mumbai">mahesana</option>
      </select><br />
      male <input  type="radio" value={"male"} name="gender"   onChange={(e)=>{setgender(e.target.value)}}/>
      female <input  type="radio" value={"female"} name="gender"  onChange={(e)=>{setgender(e.target.value)}} /> <br />
      
 

      <input  style={{fontSize:'20px'}} type="submit" value="submit"/>


    </form>



    </div>
)
}

export default App
