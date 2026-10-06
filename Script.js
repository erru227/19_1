//Collecting elements for easier reading later
var output = document.getElementById("output");
var link = document.getElementById("link");

function print(msg){
    output.innerHTML += '<p>';
    output.innerHTML += msg;
    output.innerHTML += '</p>';
}

function getPromise(){
    let url = link.value;
    output.textContent = "";
    fetch(url)
        .then(function(response) {
            print("status is "+response.status);
            print("ok is "+response.ok);
            print("headers are "+response.headers);
            print("text is "+response.text());
            print("json is "+response.json());
        })
        .then(html => print("HTML:" + html))
        .then(data => print("Data:" + data))
        .catch(function(error) {
            output.textContent = "Request failed";
        });
}
