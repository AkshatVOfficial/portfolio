alert("Welcome to my Portfolio! Click the button to know more about me 😁.");
 
 function changeText(btn) {
        if (btn.innerText === "To know more") {
            btn.innerText = "HIRE ME 😎";
            btn.style.backgroundColor = "red";
            btn.style.color = "white";
        } else {
            btn.innerText = "To know more";
            btn.style.backgroundColor = "white";
            btn.style.color = "black";
        }
    }