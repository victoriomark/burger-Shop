const socialn = document.querySelector(".social"); 
const img_Container = document.querySelectorAll(".im");
const hero_section = document.querySelector(".hero_section");
img_Container.forEach(e => {
  e.addEventListener("click", () => {
    let source = e.getAttribute("src");
   hero_section.style.backgroundImage = `url('${source}')`;
    console.log(source);
  });
});
let ul_link = document.getElementById("ul_link");
let navbar = document.getElementById("navbar").addEventListener("click",()=>{
  if(ul_link.classList.contains("active")){
    socialn.style.zIndex = "1";
    ul_link.classList.remove("active");
   
  }
 else{
  socialn.style.zIndex = "-1";
  ul_link.classList.add("active");

 }
  console.log("j")
  
})
