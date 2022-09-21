import { } from './assets/js';
console.log('assets/js/index.js --- loading')
import './assets/css/main.css';
console.log('assets/css/main.css --- loading')

/* 
<div class="hi-text">
    <p>Hi, i'm</p>
    <h2>Yevheniy Alekseyev</h2>
    <p>but those who know me call me </p>
    <h2><em>Jeka</em></h2>
</div>
<div class="after-hi">
    <p>I spend a lot of my time trying to make a perfect espresso, and I think I got it few times.
    </p>
    <p>In 2018 I won <strong>"Flow King"</strong> reward by Dalla Corte and Santander bank in
        Madrid. Competing with 14 other contestants.</p>
    <p>Then in may of 2020 I managed to win <em>"Best Specialty Coffee House - Madrid"</em> from
        <em>LUX Culinary Excellence Award 2020: Healthy Breakfast Cuisine</em>
    </p>
    <p>All that happen while my own coffee shop was at Top 1 place of Spain by <em>The TOP Café
            APP</em></p>
    <br>
    <p>But I think I'm done with coffee and barista stuff. I really apreciate all that good moments
        coffee gaved to me but It's time to think in future and bet for something that I like even
        more...</p>
    <p>... Full stack development. So wish me luck!</p>
</div>
*/

const navs = document.querySelectorAll('.link'),
    workArea = document.querySelector('.default--content');


// adding "active" to clicked link from ".link"
const activeLink = (el) => {
    navs.forEach((link) => {
        link.classList.remove("active");
        el.classList.add("active");
    });
};
// adding listener to all links from ".link"
navs.forEach((link) => {
    link.addEventListener("click", () => {
        activeLink(link)
    });
});



for (let link of navs) {
    link.addEventListener('click', () => {
        if (link.getAttribute('data-att') == 'home') {
            workArea.innerHTML = `
            <div class="hi-text">
    <p>Hi, i'm</p>
    <h2>Yevheniy Alekseyev</h2>
    <p>but those who know me call me </p>
    <h2><em>Jeka</em></h2>
</div>
<div class="after-hi">
    <p>I spend a lot of my time trying to make a perfect espresso, and I think I got it few times.
    </p>
    <p>In 2018 I won <strong>"Flow King"</strong> reward by Dalla Corte and Santander bank in
        Madrid. Competing with 14 other contestants.</p>
    <p>Then in may of 2020 I managed to win <em>"Best Specialty Coffee House - Madrid"</em> from
        <em>LUX Culinary Excellence Award 2020: Healthy Breakfast Cuisine</em>
    </p>
    <p>All that happen while my own coffee shop was at Top 1 place of Spain by <em>The TOP Café
            APP</em></p>
    <br>
    <p>But I think I'm done with coffee and barista stuff. I really apreciate all that good moments
        coffee gaved to me but It's time to think in future and bet for something that I like even
        more...</p>
    <p>... Full stack development. So wish me luck!</p>
</div>
            `

        } else if (link.getAttribute('data-att') == 'experience') {
            workArea.innerHTML = `
            <h1> Experiencia laboral</h1>
            `;
        } else if (link.getAttribute('data-att') == 'skills') {
            workArea.innerHTML = `
            <h1> Habilidades</h1>
            `;
        } else if (link.getAttribute('data-att') == 'contact') {
            workArea.innerHTML = `
            <h1>Contacto</h1>
            `;
        }

    })
}
// if (this.link.getAttribute('href') == 'Inicio') {
//     this.link.classList.add('active');
//     console.log(this.link);

// } else {
//     link.classList.remove('active')
// }