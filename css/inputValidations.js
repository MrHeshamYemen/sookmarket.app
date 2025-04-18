const reSpaces = /^\S*$/;

function validatePassword() {
    let e = document.getElementById("password");
    return e.classList.remove("is-valid"), e.classList.remove("is-invalid"), !(e.value.length < 6) || (e.classList.add("is-invalid"), !1)
}

function validateEmail() {
    let e = document.getElementById("email"),
        i = document.getElementById("emailValidationText");
    return (e.classList.remove("is-valid"), e.classList.remove("is-invalid"), 0 == e.value.length) ? (i.innerText = "Enter the user id", e.classList.add("is-invalid"), !1) : !!(reSpaces.test(e.value) && /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z0-9]){3,}\.([a-zA-Z]){2,5}$/.test(e.value)) || (e.classList.add("is-invalid"), i.innerText = "User Id incorrect", !1)
}

function scrollToFirstInvlidElement() {
    var e = document.querySelector(".is-invalid");
    e && e.scrollIntoView({
        block: "start",
        behavior: "smooth",
        inline: "nearest",
        block: "center",
        inline: "center",
        offsetTop: -100
    })
}

function removeBootStrapValidationClassess(e) {
    e && (e.classList.remove("is-valid"), e.classList.remove("is-invalid"))
}

 
 