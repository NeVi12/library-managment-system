//Side Bar Collapsed
const toggler = document.querySelector(".nav_button");
const navBar = document.querySelector(".navbar");
var topnavSearchElement = document.getElementById("top_nav-search");
var topNavProfElement = document.getElementById("navbarDropdown");


toggler.addEventListener("click", function(){
        //Sidebar collapsed in mobileview
        if (window.innerWidth <= 768){
                document.querySelector("#sidebar").classList.toggle("collapsed");
                navBar.classList.toggle("collapsed");
                if (topnavSearchElement.style.display === "none") {
                        topnavSearchElement.style.display = "block";
                        topNavProfElement.style.display = "block"; 
 
                } else {
                        topnavSearchElement.style.display = "none";
                        topNavProfElement.style.display = "none";

                }




        }else{
        //Sidebar collapsed in desktopview

        document.querySelector("#sidebar").classList.toggle("collapsed");
        document.querySelector("#content").classList.toggle("collapsed");
        }

});
