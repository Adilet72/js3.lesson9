

const menu = [
    {
        img: 'icon1.svg',
        name: 'breakfest'
    },
    {
        img: 'icon2.svg',
        name: 'lunch'
    },
    {
        img: 'icon3.svg',
        name: 'dinner'
    },
    {
        img: 'icon4.svg',
        name: 'dessert'
    },
    {
        img: 'icon5.svg',
        name: 'quick bite!'
    },
]

const menuEl = document.getElementById('menu')

menuEl.innerHTML = menu.map( m => {
    return`
        <div>
            <img src="../img/${m.img}" alt="">
            <h4>${m.name}</h4>
        </div>
    `
}).join('')