
import React, {useState} from 'react'

function SignModal() {
    
    

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [telephone, setTelephone] = useState("");
    
    const onRemoveId= () =>{
        sessionStorage.clear();
    }
    const logIn = () =>{
        console.log(sessionStorage.getItem("name"));
        console.log(sessionStorage.getItem("email"));
        console.log(sessionStorage.getItem("telephone"));
        let ixid = sessionStorage.getItem("name");
        console.log(ixid, 'ID');
       
        
    }
    logIn();
    const [staticId, setId] = useState({
        id: '',
        email: '',
        telephone: '',
    });
    
    const onLog = (id, email, telephone) =>{
        const newMade = {
            id: id ? id: staticId.id,
            email: email ? email: staticId.email,
            telephone: telephone ? telephone: staticId.telephone,
        }
        setId(newMade);
        
    }
    let currentId = JSON.stringify({staticId});
    let changeId = JSON.stringify({setId});
    
    console.log(currentId, "현재값");
    console.log(changeId, "변경값");
    console.log(JSON.stringify(setId));
    const onCreate=()=>{
        sessionStorage.setItem("name", JSON.stringify(staticId.id));
        sessionStorage.setItem("email", JSON.stringify(staticId.email));
        sessionStorage.setItem("telephone", JSON.stringify(staticId.telephone));
    }
  return (
    <div>
        <form>
            <label htmlFor='name'>
                ID
                <input
                  autoComplete='off'
                  type="text"
                  name="name"
                  
                  placeholder="Draw up"
                  
                  onChange={(e)=>onLog(e.target.value,"","")}
                />
            </label>
            <label htmlFor='email'>
                E-mail
                <input
                   placeholder='Email'
                   type="email"
                   name="email"
                   onChange={(e)=>onLog("",e.target.value,"")}
                   
                />
            </label>
            <label htmlFor='telephone'>
                telephone
                <input
                    tpye="text"
                    placeholder='000-0000-0000'
                    name="telephone"
                    id="telephone"
                    onChange={(e)=>onLog("","",e.target.value)}
                   
                />
            </label>
            <button tpye="submit"
                    value="submit"
                    onClick={onCreate}
            >
            Create
            </button>
            <button tpye="submit"
                    value="submit"
                    onClick={logIn}
            >
            Login
            </button>
            <button tpye="submit"
                    value="submit"
                    onClick={onRemoveId}
            >
            Delete ID
            </button>
        </form>
        
    </div>
  )
}

export default SignModal