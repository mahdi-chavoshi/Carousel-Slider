const slides = document.querySelector('.slides')
const slide = document.querySelectorAll('.slide')
const perView = 3
let rightnow = 0
let delay = 300
let lastclick


let current = function () 
{
    console.log(slides.clientWidth)
    return Math.floor((slides.scrollLeft) / (slides.clientWidth/perView))
}

function go (to) {

    if (to > rightnow)
    {
        if (((slide.length - (to + 1)) + rightnow) < (to - rightnow))
        {
            slides.scrollTo({left: 0 , behavior: 'smooth'})
            wait = setInterval (function () {
                slides.scrollTo({left: (slides.childElementCount - perView) * slides.clientWidth/perView, behavior: 'auto'})
                slides.scrollTo({left: to * slides.clientWidth/perView, behavior: 'smooth'})
                clearInterval(wait)
            }, 200)
            
            console.log("1")
        }
        else
        {
            slides.scrollTo({left: to * slides.clientWidth/perView, behavior: 'smooth'})
            console.log("2")
        }
    }
    else if (to != rightnow)
    {
        if (((slide.length - (rightnow + 1)) + to) < (rightnow - to))
        {
            slides.scrollTo({left: (slides.childElementCount - perView) * slides.clientWidth/perView , behavior: 'smooth'})
            wait = setInterval (function () {
                slides.scrollTo({left: 0, behavior: 'auto'})
                slides.scrollTo({left: to * slides.clientWidth/perView, behavior: 'smooth'})
                clearInterval(wait)                
            }, 300)
            console.log("3")
        }
        else
        {
            slides.scrollTo({left: to * slides.clientWidth/perView, behavior: 'smooth'})
            console.log("4")
        }
    }

    rightnow = to
    // slides.scrollTo({left: slide * slides.clientWidth/perView, behavior: 'auto'})
}

// setInterval(() => {
//     console.clear()
//     console.log(rightnow)
//     console.log(rightnow * slides.clientWidth/perView)
//     console.log(slides.scrollLeft)

// }, 500)

// console.log(document.querySelector('.slides').clientWidth)

console.log(slide)

for (i = 0; i < perView; i++)
{ 
    clone = slide[i].cloneNode(true)
    slides.append(clone)
}

function right()
{
    if (lastclick >= Date.now() - delay) {return}
    lastclick = Date.now()
    rightnow += 1;
    if (rightnow > 4) {rightnow = 0}


    if (slides.scrollLeft >= (slides.childElementCount - perView) * slides.clientWidth/perView)
    {
        console.log("hello motherfucker")
        slides.scrollTo({left: 0, behavior: 'auto'})
    }

    slides.scrollTo({left: slides.scrollLeft + slides.clientWidth/perView, behavior: 'smooth'}) 

}

// slide[3].scrollIntoView({behavior: 'smooth'})
// slide[2].scrollIntoView({behavior: 'smooth'})
// slide[4].scrollIntoView({behavior: 'smooth'})
// slide[1].scrollIntoView({behavior: 'smooth'})
// slide[2].scrollIntoView({behavior: 'smooth'})
// slide[4].scrollIntoView({behavior: 'smooth'})

function left()
{
    if (lastclick >= Date.now() - delay) {return}
    lastclick = Date.now()
    rightnow -= 1;
    if (rightnow < 0) {rightnow = 4}
    if (slides.scrollLeft == 0)
    {
        console.log("hello motherfucker")
        slides.scrollTo({left: (slides.childElementCount - perView) * slides.clientWidth/perView , behavior: 'auto'})
    }
    slides.scrollTo({left: slides.scrollLeft - slides.clientWidth/perView, behavior: 'smooth'})  
}


// to keep in right position on resize
window.onresize = () => 
{
    console.log(rightnow)
    rightnow = Math.floor((slides.scrollLeft) / slide[0].clientWidth)
    if ((slides.scrollLeft / slide[0].clientWidth - Math.floor(slides.scrollLeft / slide[0].clientWidth))  < 0.5)
    {
        slides.scrollTo({left: Math.floor((slides.scrollLeft) / slide[0].clientWidth) * slides.clientWidth/perView})
    }
    else
    {
        rightnow = Math.floor((slides.scrollLeft) / slide[0].clientWidth)
        slides.scrollTo({left: (Math.floor((slides.scrollLeft) / slide[0].clientWidth) + 1) * slides.clientWidth/perView})
    }
}






// setTimeout(() => {slides.scrollBy({left: 1, behavior: 'auto'})}, 4000)
// setTimeout(() => {slides.scrollBy({left: 1, behavior: 'auto'})}, 5000)
// setTimeout(() => {slides.scrollBy({left: 1, behavior: 'auto'})}, 6000)
// setTimeout(() => {slides.scrollBy({left: 1, behavior: 'auto'})}, 7000)



// function scrollByX (elm, x, t)
// {
//     var per = t / x
    

//     if (x < 0)
//     {
//         for (i = x; i < 0; i++)
//         {
//             setTimeout(() => {
//                 elm.scrollBy({left: -1, behavior: 'auto'})
//             }, i*per)
//         }
//         console.log(x)
//     }
//     else
//     {
//         for (i = 0; i < x; i++)
//         {
//             setTimeout(() => {
//                 elm.scrollBy({left: 1, behavior: 'auto'})
//             }, i*per)
//         }
//     }
    
// }

// console.log(slide[0].clientWidth)
// console.log(20)
// console.log(slide[0].clientWidth / 8000)



// scrollByX(slides, slide[0].clientWidth, 123)
// setTimeout(() => {slides.scrollBy({left: 1, behavior: 'auto'})}, 1000)
// setTimeout(() => {slides.scrollBy({left: 1, behavior: 'auto'})}, 1000)
// setTimeout(() => {slides.scrollBy({left: 1, behavior: 'auto'})}, 1000)
// setTimeout(() => {slides.scrollBy({left: 1, behavior: 'auto'})}, 1000)
// setTimeout(() => {slides.scrollBy({left: 1, behavior: 'auto'})}, 1000)
// setTimeout(() => {slides.scrollBy({left: 1, behavior: 'auto'})}, 1000)






// scrollByX(slides, slide[0].clientWidth, 123)

// its more like freezing an d not responding :)
// function wait(milliseconds) 
// {
//     const endDate = Date.now() + milliseconds;
//     while (Date.now() < endDate) {}
// }




// wait 2.0

// wait = setInterval (function () {
//     console.log("10s later")
//     clearInterval(wait)
// }, 10000)




























// slides.scrollBy(300, 0)

// function goRight()
// {
//     slides[0].
//     slides.append(slides.firstChild) 
// }

// var clone = slides.lastElementChild.cloneNode(true)

// function test() 
// {
//     console.log(clone)
//     slides.prepend(clone)
// }

// test()
// test()
// test()

// // const go = setInterval(test, 1000)

// // slides.onscroll = function(){
// //     slides.scrollTo(0, scrollX);
// //     slides.onscroll = null;
// // };