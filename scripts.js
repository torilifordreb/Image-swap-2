"use strict";

/*Author: Victoria Liford*/

/* arrays for the img src*/
var initial_imgs = [
    "imgs/toad-img.jpg",
    "imgs/bowser-jr-img.jpg",
    "imgs/shy-guy-img.png",
    "imgs/koopa-img.png",
    "imgs/yoshi-img.jpg"
];

/* array for img alt text */
var initial_alt = [
    "Toad",
    "Bowser Jr.",
    "Shy Guy",
    "Koopa Troopa",
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

document.onload = init();

//universal variables
var lrgImg;
var smImg1;
var smImg2;
var smImg3;
var smImg4;

//function to load initial imgs 
function init() {

    //create large image
    lrgImg = document.createElement("img");
    //set large img src/alt/id
    Object.assign(lrgImg, {
        id: "img0",
        src: initial_imgs[0],
        alt: initial_alt[0]
    });

    //append the large img to large-img div
    document.getElementById('large-img').appendChild(lrgImg);

    //create smaller imgs
    smImg1 = document.createElement("img");
    smImg2 = document.createElement("img");
    smImg3 = document.createElement("img");
    smImg4 = document.createElement("img");

    /*In this section, I tried to create an array to hold the image objects, then cycle through that array and fill their attributes/properties but I don't believe it worked*/
    //var smImgArray = [smImg1, smImg2, smImg3, smImg4];
    // //fill img attributes/properties
    // for (i = 0; i <= smImgArray.length; i++) {
    //     //set ids for small imgs
    //     smImgArray[i].id = "img" + (i + 1);
    //     //set srcs for small imgs
    //     smImgArray[i].src = initial_imgs[i + 1]; //plus one because first img (img0) is the large image
    //     //set alt text for small imgs
    //     smImgArray[i].alt = initial_alt[i + 1];
    // };



    Object.assign(smImg1, {
        id: "img1",
        src: initial_imgs[1],
        alt: initial_alt[1],
        //onclick: swapSmallImg(smImg1)   //when this isnt commented, it makes my lrgImg disappear
        //onclick: swapImg(smImg1)
    });
    Object.assign(smImg2, {
        id: "img2",
        src: initial_imgs[2],
        alt: initial_alt[2]
        //onclick: swapImg(smImg2)
    });
    Object.assign(smImg3, {
        id: "img3",
        src: initial_imgs[3],
        alt: initial_alt[3]
        //onclick: swapImg(smImg3)
    });
    Object.assign(smImg4, {
        id: "img4",
        src: initial_imgs[4],
        alt: initial_alt[4]
        //onclick: swapImg(smImg4)
    });


    //append 4 small imgs to small-imgs div
    document.getElementById('small-imgs').appendChild(smImg1);
    document.getElementById('small-imgs').appendChild(smImg2);
    document.getElementById('small-imgs').appendChild(smImg3);
    document.getElementById('small-imgs').appendChild(smImg4);

    /*another loop that used the objects in the array i commented out above*/
    // //counter
    // var y = 0;
    // //loop to append child(ren) to small-imgs div
    // do{
    //     document.getElementById('small-imgs').appendChild(smImgArray[y]);
    //     y++;
    // }while(y < smImgArray.length);

} //end of init

//tried to recreate my swap function in many different ways, and none worked so far
function swapSmallImg(img) {
    //var topSrc = document.getElementById('img0').src;
    //var topSrc = lrgImg.src;
    // var topImgObj = document.getElementById('large-img').firstChild;
    var topSrc = topImgObj.src;
    var switchSrc = img.src;

    // document.getElementById('large-img').replaceChild(img);
    topImgObj.src = switchSrc;
    img.src = topSrc;
}


//here's where I try the dblclick event listener
//it registers the double click, because the popup window comes up, but nothing else works.
document.getElementById("large-img").firstChild.addEventListener('dblclick',
    function () {

        var imageGroupCheck = document.getElementById('large-img').firstChild.src;

        console.log(imageGroupCheck);

        //if double click, confirm they want to change the images
        if (confirm("Would you like more options?")) {

            //pull the src of the first child of the small-images div into a variable
            

            

            //check if current large img belongs in initial_imgs or extra_imgs (would return -1 if it never occurs in initial img)
            // switch(initial_imgs.indexOf(imageGroupCheck)){
            //     case 1: 
                
            //     case -1:
                    
            // }


            if (initial_imgs.indexOf(imageGroupCheck) != -1) { //so, if large img src is in array

                // //remove all the current small imgs (works but results in error)
                // while (document.getElementById('small-imgs').hasChildNodes) {
                //     document.getElementById('small-imgs').removeChild(document.getElementById('small-imgs').lastChild);
                // }

                // smImg1.src = extra_imgs[0];
                // smImg2.src = extra_imgs[1];
                // smImg3.src = extra_imgs[2];
                // smImg4.src = extra_imgs[3];


            }






            // //if the small imgs are the initial_img array
            // if (isInitialImg) {

            //     exImg1 = document.createElement("img");
            //     exImg2 = document.createElement("img");
            //     exImg3 = document.createElement("img");
            //     exImg4 = document.createElement("img");

            //     Object.assign(exImg1, {
            //         id: "img1-1",
            //         src: extra_imgs[0],
            //         alt: extra_alt[0],
            //     });
            //     Object.assign(exImg2, {
            //         id: "img2-1",
            //         src: extra_imgs[1],
            //         alt: extra_alt[1]
            //         //onclick: swapImg(smImg2)
            //     });
            //     Object.assign(exImg3, {
            //         id: "img3-1",
            //         src: extra_imgs[2],
            //         alt: extra_alt[2]
            //         //onclick: swapImg(smImg3)
            //     });
            //     Object.assign(exImg4, {
            //         id: "img4-1",
            //         src: extra_imgs[3],
            //         alt: extra_alt[3]
            //         //onclick: swapImg(smImg4)
            //     });

            //     document.getElementById('small-imgs').appendChild(exImg1);
            //     document.getElementById('small-imgs').appendChild(exImg2);
            //     document.getElementById('small-imgs').appendChild(exImg3);
            //     document.getElementById('small-imgs').appendChild(exImg4);
            // }
            // else {

            // }
        }
    }
); //end dblclick event listener



// var e1 = document.getElementById('html-img0');
// //add event listener to first img
// e1.addEventListener('dblclick',
//     function () {
//         if (confirm("Would you like more options?")) {
//             //add a new array to hold 5 srcs
//             var newArray = [5];
//             //make first array object the img at the top of page
//             newArray[0] = e1.src;
//             //fill rest of array with other pictures from extraImgs array
//             for (var i = 1; i <= 5; i++) {
//                 newArray[i] = extra_imgs[i - 1];
//             }


//             //displays new imgs at bottom
//             for (var i = 0; i <= initial_imgs.length; i++) {
//                 var numStr = i.toString();
//                 var srcName = "html-img";
//                 var fullName = srcName.concat(numStr);
//                 document.getElementById(fullName).src = newArray[i];
//             }
//         }
//     }
// );




