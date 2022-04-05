
import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './Login.css';
function Login() {
  
    const [userId, setUserId] = useState("");
    const [userPwd, setUserPwd] = useState("");
    const [id, setId] = useState(0);

    
    const [userList, setUserList] = useState([]);
    const [userSearch, setUserSearch] =useState("");
    const addInfo = () =>{
      Axios.post('http://localhost:4000/api/users',{
        id: id,
        userId: userId,
        userPwd: userPwd
      }).then(()=>{
        setUserList([
          ...userList,
          {
            id: id,
            userId: userId,
            userPwd: userPwd,
          }
        ])
      });
      viewUser();
    };
    
    const viewUser = () =>{
      Axios.get('http://localhost:4000/api/get',{
      }).then((response)=>{setUserList(response.data);});
      
    }
    const updateUser= (id) =>{
      Axios.put('http://localhost:4000/update', { userPwd: userPwd, id: id}).then(()=>{
        setUserList(
          userList.map((val)=>{
            return val.id === id ?
            {
              id: id,
              userId: userId,
              userPwd: val.userPwd
            }
            : val;
          })
        )
      })
      viewUser();
    }

    const deleteUser = (id) =>{
      Axios.delete(`http://localhost:4000/delete/${id}`).then((response)=>{
        setUserList(
          userList.filter((val)=>{
            return val.id !== id;
          }).map((val)=>{
            return val;
          })
        )
        
      });
      
    }
    
    
    /*
    useEffect(()=>{
      viewUser();
      console.log(userList);
    },[userList]);  [userList]를 넣으면 계속 렌더링이 일어남, 계속 통신을 받고 있는 상태라서 계속 일어나고 있을 거라 예상됨 */
  return (
    <div className='signWrrap'>
      <div className='searchId'>
          <input type="text"
                 placeholder='user_id Search'
                 onChange={(e)=>{setUserSearch(e.target.value);}}
          />
        </div>
        <div className='userForm'>
          <div className='inputBox'>
            <div className='ctrWrrap'>
            <label>ID : 
              <input type="text" onChange={(e)=> {setUserId(e.target.value);}}/>
            </label>
            <label>PWD : 
              <input type="text" onChange={(e)=> {setUserPwd(e.target.value);}}/>
            </label>
            </div>
          <div className='controller'>
            <button type="submit" onClick={addInfo}>submit</button>
            <button type="submit" onClick={viewUser}>VIEW</button>
            
          </div>
          </div>
          {userList.filter((val)=>{
            if(userSearch ===''){
              return val;
            }else if(val.userId.toLowerCase().includes(userSearch.toLowerCase())){
              return val;
            }else{
              return console.log('no data');
            }
          }).map((val, key)=>{
            return( 
              <div key={key} className='userLists'>
                <span className='userIdx'>index : {val.id}</span>
                <span className='userIds'>ID : {val.userId}</span>
                <span className='userPwds'>password : {val.userPwd}</span>
                <div className='changeInfos'>
                  <div className='innerBtn'>
                    <button onClick={()=>{deleteUser(val.id);}}>
                    DELETE
                    </button>
                    <button onClick={()=>{updateUser(val.id);}}>
                    UPDATE
                    </button>
                  </div>
                  <input type="text"
                         placeholder='password CHANGE'
                         className='changeInput'
                         onChange={(e)=>{setUserPwd(e.target.value);}}
                  />
                </div>
              </div>
              
            )
          })}
        </div>
        
      
        
    </div>
  )
}

export default Login