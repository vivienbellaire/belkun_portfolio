const darkness = document.querySelector('.darkness')
const pathway = darkness.querySelector('.pathway')

const floorTiles = pathway.querySelectorAll('.floor-tile')
const floorLights = pathway.querySelectorAll('.floor-light')
const tiles = pathway.querySelectorAll('.tile')
const circleLights = pathway.querySelectorAll('.circle-light')
const circleTiles = pathway.querySelectorAll('.circle-tile')

const title = pathway.querySelectorAll('.title')
const text = pathway.querySelectorAll('.text')
const tales = pathway.querySelectorAll('.tale')



// const scrollActivation = () =>
// {
//     // let index = 0
//     for(const floorLight of floorLights)
//     {
//         // floorLight.style.background = 'red'
//         // const translateY = window.scrollY * (index * 100)
         
//         // const observer = new IntersectionObserver(function(entries) 
//         // {
//         //     // isIntersecting is true when element and viewport are overlapping
//         //     // isIntersecting is false when element and viewport don't overlap
//         //     if(entries[0].isIntersecting === true)
// 		//     console.log('Element has just become visible in screen');
//         // }, 
//         // { threshold: [0.5] });
//     }  
// }

// window.addEventListener('scroll',scrollActivation)


// const observer = new IntersectionObserver((entries, observer) => 
// {
//     for(const entry of entries)
//     {
//         let index = entry.target.floorLights_index
//         if (entry.isIntersecting) 
//         {
//             console.log(index, 'on')
//             // entry.style.color = 'red'
//         } 
//         else 
//         {
//             console.log(index, 'off')
//         }
        
//     }    
// })
// for(const floorLight of floorLights)
// {
//     floorLight.floorLights_index = index
//     observer.observe(floorLight)
//     console.log(floorLight)   
// }

const observer = new IntersectionObserver(entries => 
{
    entries.forEach(entry => 
    {
        // entry.target.classList.add('active', entry.isIntersecting)
        entry.target.style.background = 'red'
        if(entry.isIntersecting) 
        {
            entry.target.style.background = 'blue'
            observer.unobserve(entry.target)
            console.log(observer)
        }  
    })
},
{
    // delay: 10,
    threshold: 0.7,
    // rootMargin: "10px 10px 10px 10px"
})

floorLights.forEach(floorLight => 
{
    observer.observe(floorLight)
})
circleLights.forEach(circleLight => 
{
    observer.observe(circleLight)
})

