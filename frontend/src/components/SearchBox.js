import React,{useState} from 'react';
import {Form,Button} from'react-bootstrap';

const SearchBox = ({history}) => {
    const [keyword,setKeyWord]=useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        if(keyword.trim())
        {
            history.push(`/search/${keyword}`);
        }
        else
        {
            history.push("/");
        }
    }  // This function is triggered when the form is submitted

    return (
        <Form onSubmit={submitHandler} className='d-flex'>
            <Form.Control type='text' name='q' onChange={e=>setKeyWord(e.target.value)} placeholder='Search Products...' className='mr-sm-2 ml-sm-5'></Form.Control>
            <Button type='submit' variant='outline-info' className='p-2'>Search</Button>  
        </Form>
    )
}

export default SearchBox
