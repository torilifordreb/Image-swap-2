"use strict";

/*Author: Victoria Liford*/

/* arrays for the img src*/
var initial_imgs = [
    "imgs/toad-img.jpg",
    "imgs/bowser-jr-img.jpg",
    "imgs/shy-guy-img.png",
    "imgs/yoshi-img.jpg"
];

/* array for img alt text */
var initial_alt = [
    "Toad",
    "Bowser Jr.",
    "Shy Guy",
    "Yoshi"
];

var extra_imgs = [
    "imgs/hammer-bro-img.jpg",
    "imgs/goomba-img.jpg",
    "imgs/dry-bones-img.jpg",
    "imgs/boo-img.jpg"
];

var extra_alt = [
    "Hammer Bro",
    "Goomba",
    "Dry Bones",
    "Boo"
];

window.onload = createLrgImg();
window.onload = createSmlImgs();

function createLrgImg() {
    //create img element for large-img div
    var largeImg = document.createElement('img');
    //set properties
    largeImg.src = initial_imgs[0];
    largeImg.id = "img0";
    largeImg.alt = initial_alt;
    //append to div parent
    document.getElementById('large-img').appendChild(largeImg);
}

//function to load initial imgs 
function createSmlImgs() {
    //loop to create small img items
    for (var i = 0; i < initial_imgs.length; i++) {
        var p = document.createElement('img');
        p.id = "img" + (i + 1);
        p.src = initial_imgs[i];
        p.alt = initial_alt[i];
        //p.className = "smallClass";
        document.getElementById('small-imgs').appendChild(p);
    }
}


//dblclick listener for large img
document.getElementById("img0").addEventListener('dblclick',
    function (e) {
        console.log(e.target.id);
        //if the clicked image's alt text exists in the initial_alt array
        if (initial_alt.indexOf(e.target.alt) > -1) {
            //set large img to extra_img, 0 index
            document.getElementById('img0').src = extra_imgs[0];
            document.getElementById('img0').alt = extra_alt[0];

            //outer for loop to create variable names for ids
            for(var i = 0; i <= initial_alt.length; i++) {
                //start at img1 (img0 is taken)
                var imgId = "img" + (i + 1);
                document.getElementById(imgId).src = extra_imgs[i];
                document.getElementById(imgId).alt = extra_alt[i];
            }

        //else, if large-img is in the extra_img group
        } else {
            //set large img to initial_img, 0 index
            document.getElementById('img0').src = initial_imgs[0];
            document.getElementById('img0').alt = initial_alt[0];

            //set small imgs to all initial_imgs
            for (var i = 0; i <= initial_imgs.length; i++) {
                var imgId = "img" + (i + 1);
                document.getElementById(imgId).src = initial_imgs[i];
                document.getElementById(imgId).alt = initial_alt[i];
            }
        }
    }
);


//set eventlisteners for bottom pictures to switch to top picture
for (var i = 0; i <= initial_imgs.length; i++) {
    //store the idNames of the imgs in a variable
    var idName = "img" + (i + 1);
    //store object in variable 
    var myImg = document.getElementById(idName);

    //for img 1-4, set event listener
    myImg.addEventListener('click',       //eventlistener here gives me an error in the browser
        function (e) {
            console.log(e.target.src);
            //pull data from clicked img
            var clickedSrc = e.target.src;
            var clickedAlt = e.target.alt;
            //set large imag to clicked img
            document.getElementById('img0').src = clickedSrc;
            document.getElementById('img0').alt = clickedAlt;
        }
    );
}






