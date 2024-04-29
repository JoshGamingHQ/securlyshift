document.getElementById('urlForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form submission
    var urlInput = document.getElementById('urlInput').value.trim(); // get the entered URL
    var urlType = document.getElementById('toggleBase64').checked ? 'base64' : 'normal'; // get the selected URL type

    var url;
    if (urlType === 'base64') {
        url = atob(urlInput); // decode base64 URL (if present)
    } else {
        url = urlInput;
    }

    url = url.startsWith('http') ? url : 'https://' + url; // ensure URL starts with http:// or https://

    var appendedUrl = url + '#youtube.com-youtubei/v1/search'; // add the exploiy

    var newTab = window.open(appendedUrl, '_blank'); // open the modified URL in a new tab
    newTab.focus(); // focus on the new tab
});
