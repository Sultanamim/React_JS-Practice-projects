import React from 'react'

export default function BookDetail(props) {
  return (
    <div>
       <img width="100%" src={props.image} alt="Book" />
       <hr />
       <h1 style={{color: "#0984e3", textAlign: "center"}}>{props.title}</h1>
       <h5 style={{textAlign: "center"}} > Writer: {props.writer}</h5>
       <h5 style={{textAlign: "center"}}> Published Year: {props.year}</h5>
       <h5> Description: </h5><p>{props.description}</p>
       <hr />
       <h3 style={{textAlign: "center", color: "green"}}>Price: {props.price} BDT</h3>
    </div>
  )
}
