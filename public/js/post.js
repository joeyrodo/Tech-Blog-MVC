const postHandler = async function (event) {
    event.preventDefault();

    const content = document.getElementById('content-input').value;
    const title = document.getElementById('title-input').value;

    await fetch('/api/blogs', {
        method: 'POST',
        body: JSON.stringify({
            content,
            title,
            
        }),
        headers: { 'Content-Type': 'application/json' },
        
    });

        console.log(content, title);
        document.location.replace('/dashboard');

};

document.querySelector("#newpost").addEventListener("submit", postHandler);