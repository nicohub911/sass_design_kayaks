const navDropDownContainer = document.getElementById("nav_optionsContainer");
const btnNavDropDown = document.getElementById("btnDropDpwn");

navDropDownContainer.style.height = "0px";

window.addEventListener("resize",()=>{
    if (window.innerWidth > 600) {
        navDropDownContainer.style.height = "100%";
    }else{
        navDropDownContainer.style.height = "0px";
    }
});
btnNavDropDown.addEventListener("click", ()=>{
    if (navDropDownContainer.style.height === "0px") {
        navDropDownContainer.style.height = "247px";
    }else{
        navDropDownContainer.style.height = "0px";
    }
});