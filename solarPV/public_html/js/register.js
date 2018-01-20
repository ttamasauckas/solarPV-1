/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function() {
    $('#registrationForm').validate({
        rules: {
            Username:{
                required: true,
                maxlength: 8                
            },
            psw: {
                required: true,
                minlength: 4,
                pattern: /^[a-zA-Z]\w{3,7}$/,
                maxlength: 8
                
            },
            firstName: {
               required: false,
               lettersonly: true
            },
            middleName: {
                lettersonly: true,
                required: false
            },
            lastName: {
                required: false,
                lettersonly: true
            },
            Phone : {
                phoneUS: true
            },
            email: {
                email: true
            },
            zipcode: {
                digits: true,
                maxlength: 5
            }
                    
            
        },
            messages: {
                userName: {
                    required: "Please provide a username!",
                    maxlength: "Your username cannot exceed 8 characters!"
                },
                psw: {
                    required: "A password is required!",
                    pattern: "Must contain a digit, uppercase and lowercase letter and be no longer than 8 characters long.",
                    minlength: "Must be at least 4 characters long",
                    maxlength: "Can not be longer than 8 characters long"
                },
                firstName: {
                    lettersonly: "You can only use letters!"
                },
                middleName: {
                    lettersonly: "You can only use letters!"
                },
                lastName: {
                    lettersonly: "You can only use letters!"
                },
                phone: {
                  phoneUS: "Please provide a valid phone number"  
                },
                zipcode: {
                  digits: "Please provide a valid zipcode",
                  maxlength: "Your zipcode is too long"
                }
            
        }
       
    });
});
