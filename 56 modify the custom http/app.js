const http = new myHTTP();
const posts = http.get('https://jsonplaceholder.typicode.com/posts', function (err, res) {
    if (err) {
        console.log(err)
    } else {
        console.log(res)

    }
})

