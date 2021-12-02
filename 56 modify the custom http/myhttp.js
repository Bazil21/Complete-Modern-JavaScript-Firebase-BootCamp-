function myHTTP() {
    this.http = new XMLHttpRequest();
}

myHTTP.prototype.get = function (url, cb) {
    this.http.open('GET', url, true)
    this.http.onload = function () {
        if (this.status === 200) {
            cb(null, this.responseText)
        } else {
            cb('There are errors ' + this.status)
        }
    }
    this.http.send()
}