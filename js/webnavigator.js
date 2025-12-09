function loadFrame(url) {
    document.getElementById("browserFrame").src = url;
}

function goAddress() {
    let url = document.getElementById("addressBar").value;

    if (!url.startsWith("http://") && !url.startsWith("https://") && !url.startsWith("//")) {
        url = "https://" + url;
    }

    document.getElementById("browserFrame").src = url;
}