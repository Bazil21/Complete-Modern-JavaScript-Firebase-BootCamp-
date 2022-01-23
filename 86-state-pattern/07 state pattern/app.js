const PageState = function () {
    let currentState = new homeState(this);
    this.init = function () {
        this.change(new homeState)
    }
    this.change = function (state) {
        currentState = state;
    }
}

const homeState = function (page) {
    document.querySelector('#heading').textContent = null;
    document.querySelector('#content').innerHTML = '<h1>Home</h1>';
}
const aboutState = function (page) {
    document.querySelector('#heading').textContent = 'About page';
    document.querySelector('#content').innerHTML = '<p>about</p>';
}
const contactState = function (page) {
    document.querySelector('#heading').textContent = 'Contact page';
    document.querySelector('#content').innerHTML = '<p>contact<p>';
}

const page = new PageState();
page.init();

const home = document.getElementById('home'),
    about = document.getElementById('about'),
    contact = document.getElementById('contact');

home.addEventListener('click', e => {
    page.change(new homeState)
})
about.addEventListener('click', e => {
    page.change(new aboutState)
})
contact.addEventListener('click', e => {
    page.change(new contactState)
})