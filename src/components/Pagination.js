import React, {useEffect, useState} from 'react'
import ReactPaginate from 'react-paginate'

function Pagination() {
    const [items, setItems] =useState([]);
    const [pageCount, setpageCount] = useState(0);
    const [search,setSearch] = useState("");
    let limit = 8;
    useEffect(()=>{
     const getPages = async () =>{
        const res = await fetch(
            `http://localhost:3004/pages?_page=1&_limit=${limit}`
        );
        const data = await res.json();
        const total = res.headers.get('x-total-count');
        
        setpageCount(Math.ceil(total/limit));
        setItems(data);
    };
        getPages();
    },[limit]);
    
    const fetchPages = async (currentPage) =>{
        const res = await fetch(
            `http://localhost:3004/pages?_page=${currentPage}&_limit=${limit}`
        );
        const data = await res.json();
        return data;
    };
    const handlePageClick = async (data)=>{
        let currentPage = data.selected +1;
        const pagesFormServer = await fetchPages(currentPage);
        setItems(pagesFormServer);
    }
    return(
    <div className='container'>
        <h2>Pagination</h2>
      <div className='row m-2'>
        {items.filter((item)=>{
            if(search === ''){
                return item;
            }else if(item.email.toLowerCase().includes(search.toLowerCase())){
                return item;
            }else{
                return console.log('no data');
            }
        })
        .map((item, id)=>{
            return (
            <div className='col-sm-6 col-md-3 v my-2' key={id}>
                <div className='card-shadow-sm w-100' style={{minHeight:225}}>
                    <div className='card-body'>
                        <h5 className='card-title text-center h2'>id:{item.id}</h5>
                        <h6 className='card-subtitle md-2 text-muted text-center'>{item.email}</h6>
                        <p className='card-text'>{item.body}</p>
                    </div>
                </div>
            </div>
            );
        })}
        </div>
        <ReactPaginate
            previousLabel={'<<'}
            nextLabel={'>>'}
            breakLabel={'...'}
            pageCount={5}
            marginPagesDisplayed={1}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'pagination justify-content-center'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            activeClassName={'active'}
            />
        <input type="text"
               placeholder='Email Search'
               onChange={(e)=>{setSearch(e.target.value);}}
        />
    </div>
  )
}

export default Pagination