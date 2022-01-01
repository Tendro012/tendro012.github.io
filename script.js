// SideBar 

const home = document.getElementById('home');
const shop = document.getElementById('shop');
const about = document.getElementById('about');
const help = document.getElementById('help');




function listener(web, redir) {
    web.addEventListener('click', () => {

        window.location.replace(redir + '.html')
    
    
    });
}

listener(home, 'home');
listener(shop, 'shop');
listener(about, 'about');
listener(help, 'help');

// Counter
const clicker = document.getElementById('clicker')
let count = 0


clicker.addEventListener('click', () => {
    count++
    clicker.innerText = count
})