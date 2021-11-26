var x=document.getElementById('login');
		var y=document.getElementById('register');
		var z=document.getElementById('btn');
        
		function register()
		{
			x.style.left='-400px';
			y.style.left='50px';
			z.style.left='110px';
		}
		function login()
		{
			x.style.left='50px';
			y.style.left='450px';
			z.style.left='0px';
		}
	
        
       
 function CheckPassword() 
 {
    let pass=document.getElementById('pass').value;
    var regularExpression  = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(regularExpression.test(pass) || pass.length<8) {
        alert("password should contain atleast one number and one special character");
        return true;}



 }
