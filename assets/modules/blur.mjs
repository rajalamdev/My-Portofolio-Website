function callback(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.filter = 'blur(0px)';
        }
    })
}

let options = {
    threshold: 0.5
}

let observer = new IntersectionObserver(callback, options);
const achieveImg = document.querySelectorAll("img")
    achieveImg.forEach(img => {
    observer.observe(img)
})

export {callback, options, observer}