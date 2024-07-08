function setBuk(k) {
    const totaleSite = 40;
    const estera = totaleSite - k;
    const site = document.getElementById('Seats-left');
    const motSiteBuke = document.getElementById('set-site');
    motSiteBuke.innerText = k;
    site.innerText = estera
    const sitePrice = 500;
    return sitePrice * k;
};
const numAdd = 10;
const number = setBuk(numAdd);
const totalePrice = document.getElementById('Price-updete');
totalePrice.innerText = number;

document.getElementById('buttonli').addEventListener('click', function(){
    const liNewAdd = document.getElementById('ulNewli');
    const newli = document.createElement('li');
    const c = liNewAdd.appendChild(newli);
    const value = document.getElementById('buttonli');
    const btnText = value.innerText
    c.innerText = btnText ; 
    const color = document.getElementById('buttonli');
    color.style.backgroundColor = 'green'
});

//---------->From -------->


const n = 'ilo';
const numbers =525255;
if (n && number) {
    
} else {
    console.log('biye korbo na toma');
}

