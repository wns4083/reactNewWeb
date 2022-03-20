import React,{useState} from 'react'

function Search() {
    const [search, setSearch] = useState("");
    const CATEGORY =[
        {name: 'HTML', persent: '8'},
        {name: 'CSS', persent: '8'},
        {name: 'Jquery', persent: '7'},
        {name: 'Javascript+ES6', persent: '6'},
        {name: 'react', persent:'4'}
    ];
  return (
    <>
        <input type="text"
               placeholder='search...'
               onChange={(e)=>{
                   setSearch(e.target.value);
               }}
        />
            {CATEGORY.filter((val)=>{
                if(search==""){
                    return val
                }else if(val.name.toLowerCase().includes(search.toLowerCase())){
                    return val
                }
            }).map((val, idx)=>{
                return(
                    <ul className='kindof' key={idx}>
                        <li>{val.name}</li>
                        <li>{val.persent}</li>    
                    </ul>
                )
            })}
            
    </>
  )
}

export default Search