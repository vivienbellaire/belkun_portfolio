const darkness = document.querySelector('.darkness')
const pathway = darkness.querySelector('.pathway')

const floorTiles = pathway.querySelectorAll('.floor-tile')
const floorLights = pathway.querySelectorAll('.floor-light')
const tiles = pathway.querySelectorAll('.tile')
const circleLights = pathway.querySelectorAll('.circle-light')
const circleTiles = pathway.querySelectorAll('.circle-tile')

const titles = pathway.querySelectorAll('.title')
const texts = pathway.querySelectorAll('.text')
const tales = pathway.querySelectorAll('.tale')


// floorLightsDetect
const floorLightsDetect = () =>
{
    const observer = new IntersectionObserver(entries => 
    {
        entries.forEach(entry => 
        {
            if(entry.isIntersecting) 
            {
                entry.target.classList.add('floor-lights-activated', entry.isIntersecting)
                
                observer.unobserve(entry.target)
                console.log(observer)
            }  
        })
    },
    {
        // delay: 10,
        threshold: 0.3,
        // rootMargin: "10px 10px 10px 10px"
    })
    // floorLights observe
    floorLights.forEach(floorLight => 
    {
        observer.observe(floorLight)
    })
}
floorLightsDetect()

// circleLightsDetect
const circleLightsDetect = () =>
{
    const observer = new IntersectionObserver(entries => 
    {
        entries.forEach(entry => 
        {
            if(entry.isIntersecting) 
            {
                entry.target.classList.add('circle-lights-activated', entry.isIntersecting)
                observer.unobserve(entry.target)
                console.log(observer)
            }  
        })
    },
    {
        // delay: 10,
        threshold: 1,
        // rootMargin: "10px 10px 10px 10px"
    })
    // circleLights observe
    circleLights.forEach(circleLight => 
    {
        observer.observe(circleLight)
    })
}
circleLightsDetect()

// titlesDetect
const titlesDetect = () =>
{
    const observer = new IntersectionObserver(entries => 
    {
        entries.forEach(entry => 
        {
            if(entry.isIntersecting) 
            {
                entry.target.classList.add('titles-activated', entry.isIntersecting)
                observer.unobserve(entry.target)
                console.log(observer)
            }  
        })
    },
    {
        // delay: 10,
        threshold: 1,
        // rootMargin: "10px 10px 10px 10px"
    })
    // titles observe
    titles.forEach(title => 
    {
        observer.observe(title)
    })
}
titlesDetect()

// textsDetect
const textsDetect = () =>
{
    const observer = new IntersectionObserver(entries => 
    {
        entries.forEach(entry => 
        {
            if(entry.isIntersecting) 
            {
                entry.target.classList.add('texts-activated', entry.isIntersecting)
                observer.unobserve(entry.target)
                console.log(observer)
            }  
        })
    },
    {
        // delay: 10,
        threshold: 1,
        // rootMargin: "10px 10px 10px 10px"
    })
    // texts observe
    texts.forEach(text => 
    {
        observer.observe(text)
    })
}
textsDetect()

// talesDetect
const talesDetect = () =>
{
    const observer = new IntersectionObserver(entries => 
    {
        entries.forEach(entry => 
        {
            if(entry.isIntersecting) 
            {
                entry.target.classList.add('tales-activated', entry.isIntersecting)
                observer.unobserve(entry.target)
                console.log(observer)
            }  
        })
    },
    {
        // delay: 10,
        threshold: 1,
        // rootMargin: "10px 10px 10px 10px"
    })

    // tales observe
    tales.forEach(tale => 
    {
        observer.observe(tale)
    })
}
talesDetect()


// const returnButton = pathway.querySelector('.return-button')
// const restart = () =>
// {
//     windows.scrollY = 0
    
    
// }
// returnButton.addEventListener('click', restart())