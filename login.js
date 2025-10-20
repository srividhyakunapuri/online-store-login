import React, { useState } from 'react';


function Login() {
const [credentials, setCredentials] = useState({ email: "", password: "" });


const handleChange = (e) => {
setCredentials({ ...credentials, [e.target.name]: e.target.value });

};


const handleSubmit = (e) => { e.preventDefault();
alert("Login Successful!");

};


return (
<div>

<h2>Login</h2>
<form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required /><br />
<button type="submit">Login</button>
</form>
</div>

);
}


export default Login;
