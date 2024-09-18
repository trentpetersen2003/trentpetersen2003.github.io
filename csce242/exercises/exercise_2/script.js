/* When the hamburger is clicked, toggle between showing and hiding
and showing the nav items */
//document.getElementByID("toggle-nav")
document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
};

/* Don't go to links destination when clicked */
document.getElementById("click-link").onclick = (event) => {
    event.preventDefault(); //Don't go to the links destination
    console.log("you clicked a link");
};

/* Change the ball color */
document.getElementById("txt-color").onchange = (e) => {
    document.querySelector(":root").style.setProperty("--ball-color", e.target.value);
}