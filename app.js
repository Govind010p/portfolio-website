// ------------------- for about section ------------- 
var tablinks = document.getElementsByClassName("tab-links");
var tabcontants = document.getElementsByClassName("tab-contants");

function opentab(tabname){
    
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontant of tabcontants){
        tabcontant.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

//----------- for menu and cross button-------------
let sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right="-200px";

}


const scriptURL = 'https://script.google.com/macros/s/AKfycbwyhNlpOI3eq_TlmJpodAZe-EerWRsqqGtchAA9zSoDPV-0dz2JW0xmvj1W89v_Iew/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(() => {
            msg.innerHTML = "";
        }, 5000);
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })