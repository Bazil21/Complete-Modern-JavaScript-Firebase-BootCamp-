const http = new myHTTP

// get posts
// http.get('https://jsonplaceholder.typicode.com/posts').then(data => console.log(data)).catch(err => console.log(err))

//user data
const data = {
    title: 'Custom title',
    body: 'this is a custom post'
}

//create post
// http.post('https://jsonplaceholder.typicode.com/posts', data).then(data => console.log(data)).catch(err => console.log(err))

//update post
// http.put('https://jsonplaceholder.typicode.com/posts/2', data).then(data => console.log(data)).catch(err => console.log(err))

// //delete post
http.delete('https://jsonplaceholder.typicode.com/posts/2').then(data => console.log(data)).catch(err => console.log(err))
