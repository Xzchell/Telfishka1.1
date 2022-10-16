function scrollTo(element){
    window.scroll({
        left:0,
        top: element.offsetTop,
        behavior: "smooth"
    })
}
var button = document.querySelector('#verh');
var ava = document.querySelector('#ava')
var telfishka = document.querySelector('#footer h3')
button.addEventListener('click', () => {
    scrollTo(ava);
})
telfishka.addEventListener('click', () => {
    scrollTo(ava);
})