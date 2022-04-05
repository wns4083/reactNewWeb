import React, {useState} from 'react'
import ProductItem from './ProductItem';
import './CheckIt.css';
import Pagination from './Pagination';



function CheckIt() {
    const [search,setSearch] = useState("");
    const CATEGORY =[
        {name: 'HTML', persent: '8'},
        {name: 'CSS', persent: '8'},
        {name: 'Jquery', persent: '7'},
        {name: 'Javascript', persent: '6'},
        {name: 'React', persent:'4'},
        {name: 'SCSS', persent:'3'},
        {name: 'Typescript', persent:'2'},
        {name: 'Bootstrap', persent:'0'}
    ];
    
    const categoryKind = CATEGORY.filter((val)=>{
        if(search === ''){
            return val;
        }else if(val.name.toLowerCase().includes(search.toLowerCase())){
            return val;
        }
    }).map((val, index)=>{
        const idxdata = val;
        const nameChange = (idxdata.persent<5) ?
        idxdata.name : <span style={{color: 'red'}}>{idxdata.name}</span>
        const pictureChange = <ProductItem
                                src={`/images/category-${index}.jpg`}  
                                alt={`items${index}`}
                                className={`categoty${index}`}/>
    return (
        
                <li className='studyCategory' key={index}>
                    {pictureChange}
                    <div className='categoryInfo'>
                        <h2>{nameChange}</h2>
                        <p><span className='persent'>{val.persent}</span></p>
                    </div>
                </li>
    )
    });
    return (
        <>
          <section className='category'>
            <input tpye="text"
                   placeholder='search...'
                   onChange={(e)=>{
                       setSearch(e.target.value);
                   }}
            />
            <ul className='categoryWrrap'>
                {categoryKind}
            </ul>   
          </section>
          <section className='jsonplaceholderGet'>
              <Pagination/>
          </section>
        </>
    )
}

export default CheckIt

