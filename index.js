import "./index.scss"
//import "images/big.jpg"
import "./zeroing.scss"

function  toggleClassClick(toggle)
    {
        let id = "nav-icon1";
        let toggleClass = "open";

        let p = document.getElementById(id);

        if(toggle) {
            p.classList.toggle(toggleClass);
            toggle = false;
            return;
        }

        p.addEventListener( "click" , () =>  p.classList.toggle(toggleClass));
       
       
    }

toggleClassClick();




function sliding_window_parameters(modalWindow, modalButton, modalCloseButton){

    let modal = document.getElementsByClassName(modalWindow)[0];
    let button = document.getElementById(modalButton);
    let closeBtn = document.getElementsByClassName(modalCloseButton)[0];
    
      button.onclick = function() {
        modal.style.animation = "slideIn 0.5s forwards";
        modal.style.display = "block";
    
    
      }
    
      // Закрываем модальное окно при нажатии на кнопку "Закрыть"
      closeBtn.onclick = function() {
        toggleClassClick(true);
        modal.style.animation = "slideOut 0.5s forwards";
    
        // Очищаем анимацию и скрываем окно
        setTimeout(function() {
          modal.style.animation = "";
          modal.style.display = "none";
        }, 500);
      }
    
    }
    
sliding_window_parameters("modalWindow","nav-icon1","modalCloseButton")