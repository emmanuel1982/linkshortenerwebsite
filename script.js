const inputUrl = document.getElementById('userInput');
const outputUrl = document.getElementById('shortenURL');
const apiKey = 'da103ca180c8fb2d14ce705301de7180170ee'; // https://cutt.ly/api-documentation/cuttly-links-api

shortenURL.addEventListener('click', function() {
    const output = document.createElement('output');
    console.log(inputUrl.value);
    
});
//https://cutt.ly/api/api.php?key={apiKey}&short={}