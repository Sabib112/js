function validate(e) {
    e.preventDefault();
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var age = document.getElementById("age").value;
    var msgBox = document.getElementById("message");

    let message='';
    
    if (email === ''){message ='enter a email';

    } else if (password === ''){ message='enter a password';  

    } else if (age === ''){ message='enter a age';

    } else {
        message='login succsessful!';
    }
    msgBox.innerText = message
    } 