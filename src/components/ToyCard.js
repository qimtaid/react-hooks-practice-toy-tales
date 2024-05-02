import axios from "axios";
import React from "react";

function ToyCard({toy, deleteToy, updateToy}) {
  //const{ id, name, image, likes} = toy;

  function deleteToy(){
    axios.delete(`http://localhost:3001/toys/${toy.id}`)
    .then((res)=> deleteToy(res.data))
  }

  function likeToy(){
    const updateLikes = {
      likes: toy.likes + 1,
    };
    axios.patch(`http://localhost:3001/toys${toy.id}`,updateLikes)
    .then((res)=>updateToy(res.data))
  }
  
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img
        src={toy.image}
        alt={toy.name}
        className="toy-avatar"
      />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={likeToy}>Like {"<3"}</button>
      <button className="del-btn" onClick={deleteToy}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
