  function check()
     {
          var username = document.getElementById("uname");
          var password = document.getElementById("pass");

           if((username.value=="Shreya" && password.value=="12345678")==true ||
              (username.value=="Rohan" && password.value=="rohan124")==true ||
              (username.value=="Prerna" && password.value=="Pr100@sharma")==true ||
              (username.value=="Radhika" && password.value=="hey12345")==true )
               
              window.open("success.html",'_blank');
                
          else
               alert("Invalid Username and Password!!!");
     }