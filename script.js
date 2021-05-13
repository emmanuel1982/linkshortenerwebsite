const inputUrl = document.getElementById('userInput');
const outputUrl = document.getElementById('shortenURL');
const apiKey = 'da103ca180c8fb2d14ce705301de7180170ee';

shortenURL.addEventListener('click', async function() {
    const output = document.createElement('div');
    let json = '';
    let url = `https://cutt.ly/api/api.php?key=${apiKey}&short=${inputUrl.value}`;
    let response = await fetch(url);

    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json();
        const obj = json.url.shortLink;
        document.getElementById('output').innerHTML = obj;
      } else {
        alert("HTTP-Error: " + response.status);
      }
    /*    let response = fetch(`https://cutt.ly/api/api.php?key=${apiKey}&short=${inputUrl.value}`, {
        method: "GET",
        headers: {"Content-type": "application/json;charset=UTF-8"}
    })
    .then(response => response.json())
    .then(json => console.log(json.url.shortLink))
    .catch(err => console.log(err));
    const obj = json.url.shortLink;
    document.getElementById('output').innerHTML = obj;
    */
});