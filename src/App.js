import React,{useState} from 'react'
import Movielist from './components/Movielist'
import Addmodal from './components/Addmodal'
import Rating from './components/Rating'
import { Card } from 'react-bootstrap'
import './App.css';




function App() {

  const [tabmoviee, settabmoviee] = useState([
    {image:"https://images-na.ssl-images-amazon.com/images/I/51NbVEuw1HL._SX355_.jpg",name:"Incpection",year:2010,rating:4},
    {image:"https://media.senscritique.com/media/000005676799/source_big/Avengers.jpg",name:"Avengers",year:2006,rating:5},
    {image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOYf9QpDjVV8I79KWnFHqHn8acd0gjnqxAbQ&usqp=CAU",name:"Lion",year:2007,rating:2}]);

    const [tabmovie, settabmovie] = useState(tabmoviee);

    const [searchval, setsearchval] = useState("");

    function addnew (im,text,ye,ra) {
      const newtab=[...tabmoviee,{image:im,name:text,year:ye,rating:ra}];
      settabmoviee(newtab);
      settabmovie(newtab);
  }

function handlesearch(e){
  e.preventDefault();
setsearchval(e.target.value);
settabmoviee(tabmovie);
}

function handleclicksearch(e,val){
  e.preventDefault();

 if ((val !== "") && (val.trim())){
  const newarr=tabmoviee.slice();
 settabmoviee(newarr.filter((el)=> el.name.toLocaleLowerCase().includes(val.toLocaleLowerCase()) ));
 }else {(alert("type search name"));}
}

const ratingsearch=(ra)=>{
  const newarr=tabmovie.slice();
  settabmoviee(newarr.filter((el)=> el.rating >=  ra));
}

    return (
        <div className="movie-container">
          <div className="header-container">
            <h1>Movie App</h1>
            <form className="button-form">
               <input type="text" placeholder="Enter Title ..." onChange={handlesearch}/>
               <button onClick={(e)=>handleclicksearch(e,searchval)}>Search By Title</button>
            </form>
          <div className="rating-search">
            <p>Minimum rating:</p>
            <Rating ratingsearch={ratingsearch}/>
          </div>
          </div>
        <div className="Addmovie-list">
          <Movielist tabmoviee={tabmoviee}/>
          <Card className="card-style">
          <Addmodal addnew={addnew} />
          </Card>
        </div>       
        </div>
    )
}

export default App;
