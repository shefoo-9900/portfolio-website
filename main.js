let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
       let top = window.scrollY;
       let offset = sec.offsetTop - 150;
       let height = sec.offsetHeight;
       let id = sec.getAttribute('id');

       if(top >= offset && top < offset + height) {
           navlinks.forEach(links => {
              links.classList.remove('active');
              document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
           });
       };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100)

};


var typed = new Typed(".multiple-text", { strings: ["WEP Developer","Graphic Design",  "Photographic","Blogger","YouTuber"], 

typeSpeed: 100,

backSpeed: 100,

backDelay: 1000,

loop: true
})








const form = document.querySelector("form");

const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");
function sendEmail() {
  
  
  const bodyMessage = `Full Name: ${fullName.value}<br> 
  Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;
  
  
      Email.send({
       
      SecureToken : "579903b8-0540-4e3f-9ded-40543c8c1d83",
      
      To: 'alshafe9900@gmail.com',
      
      From: "alshafe9900@gmail.com",
      
      Subject: "subject.value",
      
      Body: "bodyMessage", 
      
  }).then(
  
    message => {
         
        if (message == "OK") {
         
           Swal.fire({
           title: "success!",
           
           text: "Message sent successfully!",
           
           icon: "success"
           
           });
         
         
        }
         
      } 
         
  );
    
}  
      function checkInputs() {

const items = document.querySelectorAll(".item");

  for (const item of items) {
    
       if (item.value == "") {

  item.classList.add("error"); 
  
  item.parentElement.classList.add("error"); }
  
  
  if (items[1].value != "") {checkEmail();
    
  }
  
  items[1].addEventListener("keyup", () => { checkEmail();
       
       });
  
  
  item.addEventListener("keyup", () => {

         if (item.value != "") {

         item.classList.remove("error");

         item.parentElement.classList.remove("error");
           
       }

else{

   item.classList.add("error");

   item.parentElement.classList.add("error");
        
          }
       
      });
    
    }

}

function checkEmail() {

 const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
 
 const errorTxtEmail = document.querySelector(".error-txt.email");

  if (!email.value.match(emailRegex)) {

  email.classList.add("error");

  email.parentElement.classList.add("error");
        

if (email.value != "") {

  errorTxtEmail.innerText = "Enter a valid email address";}

  else {
  errorTxtEmail.innerText = "Email Address can't be blank";}
  
   }    

else {
email.classList.remove("error");

email.parentElement.classList.remove("error");


   }
 
 
}

form.addEventListener("submit", (e) => {

e.preventDefault();

checkInputs();

if (!fullName.classList.contains("error") && !email.classList.contains ("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error")) {
      
              sendEmail();
                                   
                              
      form.reset();
                          
      return false;

        }

});









