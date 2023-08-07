const postHandler = async function (event) {
    event.preventDefault();

    const postContent = document.getElementById('content-input');
    const postTitle = document.getElementById('title-input');

    await fetch('/api/blogs', {
        method: 'POST',
        body: JSON.stringify({
            content: postContent.value,
            title: postTitle.value,
            
        }),
        headers: { 'Content-Type': 'application/json' },
        
    });

        console.log(postContent.value + postTitle.value);
        document.location.replace('/dashboard');

};

document.querySelector("#newpost").addEventListener("submit", postHandler);