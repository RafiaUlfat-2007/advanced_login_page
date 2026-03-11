// INDEX PAGE FORM VALIDATION
let btn = document.querySelector("#btn")

btn.addEventListener("click", (e) => {

     e.preventDefault();   // form submit hone se rokta hai


        let username_Pattern = /^[A-Za-z0-9]{4,}$/;
        let phone_Pattern = /^\d{11}$/;
        let password_Pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d]).+$/;

        let username = document.querySelector("#username").value;
        let phone = document.querySelector("#phone").value;
        let password = document.querySelector("#password").value;

        if (username.match(username_Pattern)) {

            if (phone.match(phone_Pattern)) {

                if (password.match(password_Pattern)) {
                    window.location.href = "home.html";
                }

                else {
                    alert("Invalid Password")
                }

            }

            else {
                alert("Invalid Number")
            }

        }

        else {
            alert("Invalid Username")
        }

    });
