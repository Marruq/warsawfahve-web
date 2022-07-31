
import React, { useState } from 'react'

import { auth, provider, app} from '../../firebase'






const Home = () => {

    


  

    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')


    return(
        <div style={{display:"flex", flexDirection:"column", textAlign:"center", alignItems:"center", height:"100%", marginTop:200 }}>
            <label>Login: 
                <input type="text" name="login" onChange={(e)=>{setLogin(e.target.value)}}/>
            </label>
            <label>Hasło: 
                <input type="password" name="login"  onChange={(e)=>{setPassword(e.target.value)}}/>
            </label>
            <button onClick={()=>{}}>google?</button>
        </div>
    )
}

export default Home