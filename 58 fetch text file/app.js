document.getElementById('button1').addEventListener('click', getText)

function getText() {

    fetch('test.txt').then(function (res) {
        console.log(res)
        return (res.text())
    }).then(function (data) {
        console.log(data)
        data = data.split(' ');
        // data.push("sameem")
        let str = '';
        data.map(val => {
            console.log(val)
            str += val + "<br>";
        }) 
        document.getElementById('output').innerHTML = str
    }).catch(function (err) {
        console.log('ERROR: ' + err)
    })
}