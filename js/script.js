    function validate()
      { 
     
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 
      if( document.REGISTER.fname.value == "")
   {
     alert( "Please provide your First Name!" );
     document.REGISTER.fname.focus() ;
     return false;
   }
 
      if( document.REGISTER.lname.value == "")
   {
     alert( "Please provide your Last Name!" );
     document.REGISTER.lname.focus() ;
     return false;
   }
    if (!/^[a-zA-Z]*$/g.test(document.REGISTER.fname.value)) 
    {
        alert("numbers and special characters not allowed in name field");
        document.REGISTER.fname.focus();
        return false;
    }
    if (!/^[a-zA-Z]*$/g.test(document.REGISTER.lname.value)) 
    {
        alert("numbers and special characters not allowed in name field");
        document.REGISTER.lname.focus();
        return false;
    }
    if( document.REGISTER.email.value == "")
   {
     alert( "Please enter your email!" );
     document.REGISTER.email.focus() ;
     return false;
   }
      if( document.REGISTER.password.value == "")
   {
     alert( "Please create a password!" );
     document.REGISTER.password.focus() ;
     return false;
   }
      if( document.REGISTER.password.value.length < 8)
   {
     alert( "Password should have atleast 8 characters!" );
     document.REGISTER.password.focus() ;
     return false;
   }
      if( document.REGISTER.cp.value == "" || document.REGISTER.cp.value != document.REGISTER.password.value)
   {
     alert( "Please confirm your password!" );
     document.REGISTER.cp.focus() ;
     return false;
   }
   if(document.REGISTER.email.value.match(mailformat))
   {
    document.form1.text1.focus();
    return true;
   }
   else
   {
    alert("You have entered an invalid email address!");
    document.REGISTER.email.focus();
    return false;
   }
var frm = document.getElementsByName('REGISTER')[0];
frm.submit();
frm.reset();
return false;
}