const projects = document.querySelector(".projects")

const projectBtn = document.querySelector(".projectBtn")

const absBtn = document.querySelector(".absBtn")

const mybutton = document.getElementById("scrollBtn");



// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
})
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener('click', topFunction);
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

projectBtn.addEventListener("click", (e) => {
    projects.classList.toggle("show")
})

let num = 1; // Or any other number of columns you want
absBtn.addEventListener("click" , (e) =>  {
   num++
    if (num > 4 ){
        num = 1
        projects.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    }

      
    projects.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    

    console.log(`${projects.style}`)
    
})
