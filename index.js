import "./index.scss"
//import "images/big.jpg"
import "./zeroing.scss"

function  toggleClass(id, toggleClass)
    {
        let p = document.getElementById(id);

        p.addEventListener( "click" , () =>  p.classList.toggle(toggleClass));

    }

toggleClass("nav-icon1","open");
