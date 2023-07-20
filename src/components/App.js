import React from "react";
import blogData from "../data/blog";




function App() {
  return (
    <div className="App">
     <Header title={blogData.name} />
     <About src = {blogData.image} about={blogData.about}  />
     <ArticleList posts ={blogData.posts} />
    </div>
  );
  function Header (props){
    return(
      <h1>{props.title}</h1>
   
    )
     }
  function About(props){
    return(
      <aside>
        <img src={props.image} placeholder ="https://via.placeholder.com/215Links to an external site." alt='blog logo' />
        <p>{props.about} </p>
      </aside>
    )
  }  
  function  ArticleList(props){
    let array = props.posts
    
    let articleArray = []
    
    array.forEach(x => {
      articleArray.push(<Article key = {x.id} postTitle = {x.title} postDate = {x.date} postPreview={x.preview}/>
      
   ) })
    
     

    

    return(
      <main>
        {articleArray}
        
      </main>
     )}
      }
    function Article(props){
      return(
      <article>
        <h3>{props.postTitle}</h3>
        <small>{props.postDate}</small>
        <p>{props.postPreview}</p>
      </article>
      )
      

    }
  


  
export default App;
