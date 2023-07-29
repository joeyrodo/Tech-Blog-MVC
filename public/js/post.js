const postHandler = async function (event) {
    event.preventDefault();

    const postBody = document.querySelector('#blogpost-body');
    const postTitle = document.querySelector('#blogpost-title');

    const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
            body: postBody.value,
            title: postTitle.value,
            
        }),
        headers: { 'Content-Type': 'application/json' },
        
    });

    if (response.ok) {
        console.log(title + body);
    } else {
        alert('Failed to post');
    }
};

document.getElementById("post-button").addEventListener("submit", postHandler);