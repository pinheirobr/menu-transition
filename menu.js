
window.addEventListener("scroll", function(){
   let header = document.querySelector('#header')
   header.classList.toggle('rolagem',this.window.scrollY > 300)
})