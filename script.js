// SideBar 

const home = document.getElementById('home');
const shop = document.getElementById('shop');
const about = document.getElementById('about');
const help = document.getElementById('help');
const clicker = document.getElementById('clicker');
const upgradeBtn = document.getElementById('upgrade');

// variables

let count = 0;
let upgrade = {
    click: 1,
    clickUpgrade: 1,
    clickUpgradeCost: 10,
    clickUpgradeCost2: 100,
    clickUpgradeCost3: 1000,
    clickUpgradeCost4: 10000,
    clickUpgradeCost5: 100000,
};

function listener(web, redir) {
    web.addEventListener('click', () => {

        window.location.replace(redir + '.html')
    
    
    });
}

listener(home, 'index');
listener(shop, 'shop');
listener(about, 'about');
listener(help, 'help');


clicker.addEventListener('click', () => {
    count += upgrade.click;
    clicker.innerHTML = count;
});


upgradeBtn.addEventListener('click', () => {
    if (count >= upgrade.clickUpgradeCost) {
        // set variable count to the value of count + 1
        count = count - upgrade.clickUpgradeCost;
        upgrade.clickUpgrade = upgrade.clickUpgrade + 1;
        upgrade.clickUpgradeCost = upgrade.clickUpgradeCost * 2;
        upgrade.clickUpgradeCost = upgrade.clickUpgradeCost * 2;
        upgrade.clickUpgradeCost = upgrade.clickUpgradeCost * 2;
        upgrade.clickUpgradeCost = upgrade.clickUpgradeCost * 2;
        upgrade.clickUpgradeCost = upgrade.clickUpgradeCost * 2;
        clicker.innerHTML = count;
        upgradeBtn.innerHTML = `Upgrade (${upgrade.clickUpgradeCost})`;
        console.log(count);
    }
}
);