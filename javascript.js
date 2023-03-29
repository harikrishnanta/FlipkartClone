import {ImageSlider} from "./ImageSlider.js"

/*****Image Slider**********/
let imageSliderListE1 = document.querySelector(".imageSliderList")
let imageSliderListHTML = ''
console.log(ImageSlider)

ImageSlider.forEach(el =>{
    imageSliderListHTML += `
    <div class="imageSliderItem">
        <a href="${el.link}">
            <img src="${el.img}"/>
        </a>
    </div>
    `
})
imageSliderListE1.innerHTML = imageSliderListHTML;

// let imageSliderListE1AllItems = document.querySelectorAll(".imageSliderList")
// console.log(imageSliderListE1AllItems)

let prev_imageE1 = document.getElementById("prev_image")
let next_imageE1 = document.getElementById("next_image")

let start=0;
let end=-300;

prev_imageE1.addEventListener("click",handlePreveImage)
next_imageE1.addEventListener("click",handleNextImage)

function handlePreveImage(){
    let imageallList = document.querySelectorAll(".imageSliderItem")
    console.log(imageallList)
    if(start < 0)
    start+=100
    imageallList.forEach(el=>{
        el.style.transform = `translatex(${start}%)`
    })
}
function handleNextImage(){
    let imageallList = document.querySelectorAll(".imageSliderItem")
    console.log(imageallList)
    if(start > end)
    start-=100
    imageallList.forEach(el=>{
        el.style.transform = `translatex(${start}%)`
    })
}

function renderImageSlider(){
    if(start > end){
        handleNextImage()
    }
    else{
        start = 100
    }
}

setInterval(renderImageSlider,5000)

/**********Popup**********/
document.querySelector("#loginbtn").addEventListener("click",function(){
    document.querySelector(".popuplogin").classList.add("active");
});

document.querySelector(".popuplogin .popuplogin1 .buttonclass1").addEventListener("click",function(){
    document.querySelector(".popuplogin").classList.remove("active");
});

