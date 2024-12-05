import React, { ChangeEvent, useState } from 'react';
import './Search.css';

const Search = () : JSX.Element => {
    const[searchTerm, setSearchTerm] = useState<string>("")
    const[valid, setValid]=useState<boolean>(false)
    const[touched, setTouched]=useState<boolean>(false)

    const captureChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
        setSearchTerm(event.target.value)
        setTouched(true)
        setValid(searchTerm.trim().length > 0)
        
        
       // console.log('=====> changed value', searchTerm);
        
    }

    const submitSearch = (event:React.ChangeEvent<HTMLFormElement>) =>{
        event.preventDefault();
        console.log("====> Form Submit Search Result: ", searchTerm)
    }

    return (
        <div className="searchBox">
            <form onSubmit={submitSearch}>
                <label htmlFor="orderId">Order Id:</label>
                <input id="orderId" type="text" value={searchTerm} onChange={captureChange} className={touched && !valid ? 'searchBoxError' : 'searchBox'}/>
                <button type="submit" disabled={!valid}>Search</button>
            </form>
        </div>
    );
}

export default Search
