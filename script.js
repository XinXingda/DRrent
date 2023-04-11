const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 2000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
     navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

 const PostPage = () =>{
  window.location.assign("http://127.0.0.1:5500/post.html");
 }

/* var Post = document.getElementsByClassName("posts");
var PostTitle = Post.title;
var PostCap = document.getElementsByClassName("caption");


const FuncPostTitle = () =>{
  PostCap.textContent = PostTitle;
}
window.onload = (FuncPostTitle());*/



//Search Filteration

const SearchFilter = ()=>{
  var searchinput = document.getElementById("search-value").value.toUpperCase();
  var PostsLocations = document.getElementsByClassName("location");
 if( searchinput === "DUHABI" || searchinput === "BIRATNAGAR" || searchinput === "ITAHARI" || searchinput === "DHARAN"){
  
  window.location.assign("http://127.0.0.1:5500/available.html");
    for( var i = 0; i < PostsLocations.length; i++){
      var postlocation = PostsLocations[i];
      if(postlocation){
       let postlocationvalue = postlocation.textContent || postlocation.innerHTML;
      if(postlocationvalue.toUpperCase().indexOf(searchinput) > -1){
        postlocation[i].style.display = "";
      }else{
        postlocation[i].style.display = "none";
      }
      }else{
        console.log("eroor");
      }
    }
  
  
 }else{
  console.error(error);
 }
}
 
/*const FilterLocation = () =>{
  let PostsLocations = document.getElementsByClassName("location");
  let searchinput = document.getElementById("search-value").value;
  for( let i = 0; i < PostsLocations.length; i++){
    if(PostsLocations[i].innerHTML === searchinput){
      window.location.assign("http://127.0.0.1:5500/available.html");
      console.log("duccess");
    }else{
      console.log("eroor");
    }
  }
}
*/
 