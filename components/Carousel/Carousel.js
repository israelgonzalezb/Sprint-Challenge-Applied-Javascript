class Carousel {
  constructor (carousel){
    this.leftButton = carousel.querySelector('.left-button');
    
    this.rightButton = carousel.querySelector('.right-button');
    
    this.images = carousel.querySelectorAll('img');
    
    this.current = 0;
    this.images[this.current].style.display="block"; 
    
    this.leftButton.addEventListener('click',x=>this.left());
    this.rightButton.addEventListener('click',x=>this.right());
    
  }
    left(){
      if (this.current===0){
        this.current=3;
        
      }else{
        this.current--;
      }
      
      this.setImage();
    }
  right(){
    if (this.current===3){
      this.current=0;
    }else{
      this.current++;
    }
    
    this.setImage();
  }
  setImage(){
    this.images.forEach( x => x.style.display="none");
    this.images[this.current].style.display="block";
  }
    
  }


let carousel = document.querySelector('.carousel');

new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
