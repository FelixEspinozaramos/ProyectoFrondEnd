const nav = document.querySelector(".nav"),
navList = nav.querySelector("li"),
totalNavList = navList.length;
for(let i=0; i<totalNavList; i++){
  console.log(navList[i])
  const a = navList[i].querySelector("a");
  a,addEventListener('click',function()
  {
    for(let j=0 ; j<totalNavList; j++)
    {
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active")
    showSection(this);
  })
}
function showSection(element){
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#"+target).classList.add("active")
}


