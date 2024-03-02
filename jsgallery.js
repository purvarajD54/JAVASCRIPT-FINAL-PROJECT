/*Name this external file gallery.js*/

function addTabIndex() {
    imagePanel = document.querySelector("#image");
    imagePanel.setAttribute("tabindex", "0")
    imagesArray = document.querySelectorAll("img");
    for (let i = 0; i < imagesArray.length; i++) {
        console.log("Image " + i);
        imagesArray[i].setAttribute("tabindex", "0");
    }
}

function upDate(previewPic){
    x = document.getElementById("image");
    x.style.backgroundImage = "url(" + previewPic.src + ")";
    x.innerHTML = previewPic.alt;
}
   
function unDo(){
    x = document.getElementById("image");
    x.style.backgroundImage = "url('')";
    x.innerHTML = "Hover over an image below to display here.";
    
}