let postFormButton = document.getElementById("new-post-button");
let postForm = document.getElementById("newpost");

postFormButton.addEventListener('click', showPost);

function showPost() {
    postForm.classList.remove("hidden");
   console.log("post unhidden");
}


