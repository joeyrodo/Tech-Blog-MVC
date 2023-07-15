let blogpost = document.getElementsByClassName("blogpost");
hidden.addEventListener("click", showPost);

function showPost() {
    blogpost.children[2].classList.remove("hidden");
    console.log("post unhidden");
}


