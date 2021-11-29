
var photos = ["Images/img1.jpg","Images/img2.jpg","Images/img3.jpg","Images/img4.jpg","Images/img5.jpg","Images/img6.jpg","Images/img7.jpg","Images/img8.jpg","Images/img9.jpg"]
var imgTag = document.querySelector("img");
var count = 0;





function next(){
   count ++;
  if(count>=photos.length)
  {
    count = 0;
    imgTag.src = photos[count];
  }
 else{
    imgTag.src = photos[count];
 }



}



function prev(){

    count --;
    if(count< 0)
    {
      count = photos.length -1;
      imgTag.src = photos[count];
    }
   else{
      imgTag.src = photos[count];
   }
  
  
    
}