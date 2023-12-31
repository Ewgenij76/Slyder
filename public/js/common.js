!function(){
    const e=[{url:"'./img/Rostov-on-Don, Admiral.png'",title:"Rostov-on-Don, Admiral",city:"Rostov-on-Don<br> LCD admiral",area:"81 m2",time:"3.5 months"},{url:"'./img/Sochi Thieves.png'",title:"Sochi Thieves",city:"Sochi<br> Thieves",area:"105 m2",time:"4 months"},{url:"'./img/Rostov-on-Don Patriotic.png'",title:"Rostov-on-Don Patriotic",city:"Rostov-on-Don<br> Patriotic",area:"93 m2",time:"3 months"}];
    document.addEventListener("DOMContentLoaded",(
        function(){
            if(!e||!e.length)
                return;
                let t=document.querySelector(".slider__images"),
                i=document.querySelector(".slider__nav"),
                c=document.querySelector(".slider__dots"),
                a=document.querySelector(".slider__titles"),
                r=document.querySelector(".info__city"),
                s=document.querySelector(".info__area"),
                o=document.querySelector(".info__time");
                function n(e){
                    t.querySelector(".active").classList.remove("active"),
                    t.querySelector(".n"+e).classList.add("active"),
                    c.querySelector(".dot__active").classList.remove("dot__active"),
                    c.querySelector(".n"+e).classList.add("dot__active"),
                    a.querySelector(".title__active").classList.remove("title__active"),
                    a.querySelector(".n"+e).classList.add("title__active"),
                    r.querySelector(".cards__active").classList.remove("cards__active"),
                    r.querySelector(".n"+e).classList.add("cards__active"),
                    s.querySelector(".cards__active").classList.remove("cards__active"),
                    s.querySelector(".n"+e).classList.add("cards__active"),
                    o.querySelector(".cards__active").classList.remove("cards__active"),
                    o.querySelector(".n"+e).classList.add("cards__active")}
                    e.forEach(((i,l)=>{let d=`<div class="image n${l} ${0===l?"active":""}" style="background-image:url(${e[l].url});" data-index="${l}"></div>`;
                    t.innerHTML+=d;
                    let _=`<div class="dot_item n${l} ${0===l?"dot__active":""}" data-index="${l}"></div>`;
                    c.innerHTML+=_,
                    c.querySelectorAll(".dot_item").forEach((e=>{e.addEventListener("click",(function(){n(this.dataset.index)}))}));
                    let v=`<div class="slider__title n${l} ${0===l?"title__active":""}" data-index="${l}">${e[l].title}</div>`;
                    a.innerHTML+=v,
                    a.querySelectorAll(".slider__title").forEach((e=>{e.addEventListener("click",(function(){n(this.dataset.index)}))}));
                    let u=`<p class="cards__text n${l} ${0===l?"cards__active":""}" data-index="${l}">${e[l].city}</p>`;
                    r.innerHTML+=u;
                    let m=`<p class="cards__text n${l} ${0===l?"cards__active":""}" data-index="${l}">${e[l].area}</p>`;
                    s.innerHTML+=m;
                    let y=`<p class="cards__text n${l} ${0===l?"cards__active":""}" data-index="${l}">${e[l].time}</p>`;
                    o.innerHTML+=y})),
                    i.querySelectorAll(".slider__arrow").forEach((i=>{i.addEventListener("click",(function(){let c,a=+t.querySelector(".active").dataset.index;c=i.classList.contains("left")?0===a?e.length-1:a-1:a===e.length-1?0:a+1,n(c)}))}))}))}();
