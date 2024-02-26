var form = document.querySelector("form")
const Commentform = document.querySelector("form")
form.addEventListener("submit", validerLeFormulaire)
function validerLeFormulaire(event) {
    event.preventDefault()
    var commentList = document.getElementById("comment-list")
    var nom = document.getElementById("last-name").value;
    var prenom = document.getElementById("first-name").value;
    var error = document.getElementById("error-message");
    var message = document.getElementById("message").value;
    if (nom === '' || prenom === '' || message === '') {
        error.style.display = "block"
    }
    else {
        error.style.display = "none"
        var div1 = document.createElement("div")
        var div2 = document.createElement("div")
        var h3 = document.createElement("h3")
        var div3 = document.createElement("div")
        var p = document.createElement("p")
        div1.classList.add("flex", "space-x-4", "text-sm", "text-gray-500")
        div2.classList.add("flex-1", "py-10", "border-t", "border-gray-200")
        h3.classList.add("font-medium", "text-gray-900")
        h3.textContent = prenom + " " + nom
        div3.classList.add("prose", "prose-sm", "mt-4", "max-w-none", "text-gray-500")
        p.textContent = message
        div1.appendChild(div2)
        div2.appendChild(h3)
        div2.appendChild(div3)
        div3.appendChild(p)
        commentList.appendChild(div1)
        Commentform.reset()
    }
}
