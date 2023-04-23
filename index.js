document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener("click",function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior:"smooth"
        })
    })
})

// get a reference to the button element
const button = document.getElementById('hire');

// add a click event listener to the button
button.addEventListener('click', () => {
  // get a reference to the contact section element
  const contactSection = document.getElementById('contact');

  // use the scrollIntoView method to scroll the page to the contact section
  contactSection.scrollIntoView({ behavior: 'smooth' });
});


let i=0;
function read(){
    if(!i){
        document.getElementById("more").style.display="inline";
        // document.getElementById("dot").style.display="none";
        document.getElementById("read").innerHTML="Read less";
        i=1;
    }else{
        document.getElementById("more").style.display="none";
        // document.getElementById("dot").style.display="inline";
        document.getElementById("read").innerHTML="Read more";
        i=0;

    }

}

let j=0;
function read2(){
    if(!j){
        document.getElementById("more2").style.display="inline";
        // document.getElementById("dot").style.display="none";
        document.getElementById("read2").innerHTML="Read less";
        j=1;
    }else{
        document.getElementById("more2").style.display="none";
        // document.getElementById("dot").style.display="inline";
        document.getElementById("read2").innerHTML="Read more";
        j=0;

    }

}

let k=0;
function read3(){
    if(!k){
        document.getElementById("more3").style.display="inline";
        // document.getElementById("dot").style.display="none";
        document.getElementById("read3").innerHTML="Read less";
        k=1;
    }else{
        document.getElementById("more3").style.display="none";
        // document.getElementById("dot").style.display="inline";
        document.getElementById("read3").innerHTML="Read more";
        k=0;

    }

}





