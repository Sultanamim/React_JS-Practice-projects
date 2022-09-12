import React, { useEffect, useState } from 'react';

export default function Getpost1() {
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState({});
    const [error, setError] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => {
            setLoading(false);
            setError('');
            setPost(data);
        })
         .catch(() => {
            setLoading(false);
            setPost('');
            setError('There was a problem fetching!')
         })

    }, [])
    
  return (
    <>
    <div>
      <h2 style={{color: '#807D7D' }}>{'useReducer with useEffect(GET Post 1)'}</h2>
      {loading ? 'Loading...' : 
      <div style={{textAlign: 'left'}}>
          <h5>Post Title: </h5> <p>{post.title}</p>
         <h5>Post Body: </h5>  <p>{post.body}</p>
        </div>}
      {error || null}
    </div>
    </>
  )
}
