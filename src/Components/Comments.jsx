import React,{ useState,  } from 'react';
import './Comments.css';
import PostList from './PostList';

function Comments(){
    
 return(
    <div className='Comments'>
         <h1>Отзывы</h1>
         <PostList />
    </div>
 )
}
export default Comments