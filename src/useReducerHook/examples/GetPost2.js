import React, { useEffect, useReducer, } from 'react';

const initialState = {
    loading: true,
    post: {},
    error: '',
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: '',
            };
        case 'FAILED': 
            return {
                loading: false,
                post: {},
                error: 'There was a problem fetched!',
            }
    }
}

export default function GetPost2() {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/2')
        .then(response => response.json())
        .then(data => {
           dispatch({type: 'SUCCESS', payload: data});
        })
         .catch(() => {
            dispatch({type: 'FAILED'});
         })

    }, [])
    
  return (
    <>
    <div>
      <h2 style={{color: '#807D7D' }}>{'useReducer with useEffect(GET post 2)'}</h2>
      {state.loading ? 'Loading...' : 
      <div style={{textAlign: 'left'}}>
          <h5>Post Title: </h5>  <p>{state.post.title}</p>
          <h5>Post Body: </h5> <p>{state.post.body}</p>
        </div>}
      {state.error || null}
    </div>
    </>
  )
}