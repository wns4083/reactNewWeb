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
        {name: 'Javascript+ES6', persent: '6'},
        {name: 'react', persent:'4'}
    ];
    const GGASD = <Pagination/>
    console.log(GGASD);
    const categoryKind = CATEGORY.filter((val)=>{
        if(search === ''){
            return val;
        }else if(val.name.toLowerCase().includes(search.toLowerCase())){
            return val;
        }
    }).map((val, index)=>{
        const idxdata = val;
        const nameChange = (idxdata.persent>5) ?
        idxdata.name : <span style={{color: 'red'}}>{idxdata.name}</span> 
    return (
        <dl key={index}>
                <dt>{nameChange}<span>{val.persent}</span>
                </dt>
        </dl>
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
                {categoryKind}
          </section>
          <section className='productItems'>
              <ProductItem
                    src='/images/category-1.jpg'
                    alt='items1'
                    className='js'
              />
              <ProductItem
                    src='/images/category-2.jpg'
                    alt='items2'
                    className='html'
              />
              <ProductItem
                    src='/images/category-3.jpg'
                    alt='items2'
                    className='css'
              />
              <ProductItem
                    src='/images/category-4.1.jpg'
                    alt='items2'
                    className='react'
              />
          </section>
          <section>
              <Pagination/>
          </section>
        </>
    )
}

export default CheckIt

