function myHTTP() {

    // Initialising new XMLHttpRequest method
    this.http = new XMLHttpRequest();
}
// Make an HTTP GET Request
myHTTP.prototype.get = function (url) {

    // Open an obejct (GET/POST, PATH, 
    // ASYN-TRUE/FALSE) 
    this.http.open('GET', url, true)

    // When response is ready 
    this.http.onload = function () {

         // Checking status
        if (this.status === 200) {

            // Callback function (Error, response text)
            console.log(this.responseText)
        }
    }
    this.http.send()
}