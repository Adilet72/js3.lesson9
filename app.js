

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
const recipes_buttons = document.querySelector('.recipes-buttons')
const recipes_cards = document.querySelector('.recipes-cards')

const buttonsName = [
    "Starter",
    "Beef",
    "Breakfast",
    "Chicken",
    "Pasta",
    "Dessert",
    "Vegan",
]
let btnIndex = 0

let url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c='

function renderBtn(){
    recipes_buttons.innerHTML = buttonsName.map( (btn ,index)=> {
        let clas = btnIndex == index ? "active" : ""
        return `<button class="${clas}">${btn}</button>`
    }).join("")
    recipes_buttons.querySelectorAll('button').forEach( (btn, i )=> {
        btn.addEventListener('click', () => {
            fetch(url + btn.innerText)
            .then(res => res.json())
            .then( ( {meals} ) => {
                console.log("meals", meals);
                recipes_cards.innerHTML = meals.map(f => {
                    return` <div class="card">
                    <div class="card-img">
                        <img src="./img/Recipe Image.svg" alt="">
                    </div>
                    <div class="card-text">
                        <h4>Savory Herb-Infused Chicken</h4>
                        <p>Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken</p>
                        <div>
                            <p>40 Min - easy prep - 3 serves</p>
                            <button>view recipe</button>
                        </div>
                    </div>
                </div>`
                })
            })
            btnIndex = i
            renderBtn()
            
        })
    })
}

renderBtn()



menuEl.innerHTML = menu.map( m => {
    return`
        <div>
            <img src="../img/${m.img}" alt="">
            <h4>${m.name}</h4>
        </div>
    `
}).join('')