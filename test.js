// const knop = document.getElementById("knop");
// const knop2 = document.getElementById("knop2");
// const knop3 = document.getElementById("knop3");
// const knop4 = document.getElementById("knop4");
// const ss = document.getElementById("ss");
// const arti = document.getElementById("arti");
// const eksi = document.getElementById("eksi");
// const imageContainer = document.querySelector("#imageInput2");
// const afbV = document.getElementById("afbV");
// var uploaded_image = "";

// knop.onclick = function () {
//     let widthValue = document.getElementById("width").value;
//     let heightValue = document.getElementById("height").value;
//     let backgroundColor = document.getElementById("color").value;
//     let borderColor = document.getElementById("borderColor").value;

//     document.querySelectorAll(".werk").forEach(function(e) {
//         e.style.width = widthValue + "px";
//     });
//     document.querySelectorAll(".werk").forEach(function(e) {
//         e.style.height = heightValue + "px";
//     });
//     document.querySelectorAll(".werk").forEach(function(e) {
//         e.style.backgroundColor = backgroundColor;
//     });
//     document.querySelectorAll(".werk").forEach(function(e) {
//         e.style.border = borderColor + " solid 3px";
//     })
// };

// knop2.onclick = function () {
//     let p1Color = document.getElementById("p1Color").value;
//     let inhoudp1 = document.getElementById("inhoudp1").value;
//     let fSize = document.getElementById("fSize").value;
//     let inhoudp1Size = document.getElementById("inhoudp1Size").value;
//     // let titel = document.getElementById("title").value;
//     let textKleur = document.getElementById("textColor").value;
//     let pValue = document.getElementById("pValue").value;
//     let fontSelector = document.getElementById("fontChoser").value;

//     document.querySelectorAll("#werk").forEach(function(e) {
//         e.style.fontFamily = fontSelector;
//     });
//     document.querySelectorAll("#p1").forEach(function(e) {
//         e.style.color = p1Color;
//     });
//     document.querySelectorAll("#p1").forEach(function(e) {
//         e.innerText = inhoudp1;
//     });
//     document.querySelectorAll("h1").forEach(function(e) {
//         e.style.fontSize = fSize + "px";
//     });
//     document.querySelectorAll("#p1").forEach(function(e) {
//         e.style.fontSize = inhoudp1Size + "px";
//     });
//     document.querySelectorAll("h1").forEach(function(e) {
//         e.style.color = textKleur;
//     });
//     document.querySelectorAll("#p1").forEach(function(e) {
//         e.style.top = pValue + "px";
//     });

//     // document.querySelector("h1").innerText = titel;
// };

// knop3.onclick = function () {
//     let imgWidth = document.querySelector("#iBreedte").value;
//     let imgHeight = document.querySelector("#iHoogte").value;
//     let topV = document.querySelector("#top-bottom").value;
//     let bottomV = document.querySelector("#bottom-top").value;
//     let rightV = document.querySelector("#right-left").value;
//     let leftV = document.querySelector("#left-right").value;

//     document.querySelectorAll(".image").forEach(function(e) {
//         e.style.width = imgWidth + "px";
//     });
//     document.querySelectorAll(".image").forEach(function(e) {
//         e.style.height = imgHeight + "px";
//     });
//     document.querySelectorAll(".image").forEach(function(e) {
//         e.style.bottom = topV + "px";
//     });
//     document.querySelectorAll(".image").forEach(function(e) {
//         e.style.top = bottomV + "px";
//     });
//     document.querySelectorAll(".image").forEach(function(e) {
//         e.style.right = leftV + "px";
//     });
//     document.querySelectorAll(".image").forEach(function(e) {
//         e.style.left = rightV + "px";
//     });
// };

// knop4.onclick = function () {
//     let naam1 = document.querySelector("#naam1").value;
//     let naam2 = document.querySelector("#naam2").value;
//     let naam3 = document.querySelector("#naam3").value;
//     let naam4 = document.querySelector("#naam4").value;

//     document.querySelector("#voorNaam1").innerText = naam1;
//     document.querySelector("#voorNaam2").innerText = naam2;
//     document.querySelector("#voorNaam3").innerText = naam3;
//     document.querySelector("#voorNaam4").innerText = naam4;
// };

// document.getElementById("imageInput2").addEventListener("change", function() {
//     const reader = new FileReader();
//     reader.addEventListener("load", () => {
//         uploaded_image = reader.result;
//         document.querySelectorAll("#imageContainer").forEach(function(e) {
//             e.style.backgroundImage = `url(${uploaded_image})`;
//         });
//     });
//     reader.readAsDataURL(this.files[0]);
// });

// function removeUploadedImage() {
//     document.querySelectorAll("#imageContainer").forEach(function(e) {
//         e.style.backgroundImage = ""; // Set backgroundImage to an empty string
//     });
// };

// afbV.onclick = function () {
//     removeUploadedImage();
// };

// const kg1 = document.getElementById("kg1");
// const kg2 = document.getElementById("kg2");
// const kg3 = document.getElementById("kg3");
// const kg4 = document.getElementById("kg4");

// const ok1 = document.getElementById("ok1");
// const ok2 = document.getElementById("ok2");
// const ok3 = document.getElementById("ok3");
// const ok4 = document.getElementById("ok4");

// kg1.addEventListener("click", function() {
//     ok1.style.display = "block";
//     ok2.style.display = "none";
//     ok3.style.display = "none";
//     ok4.style.display = "none";
// });

// kg2.addEventListener("click", function() {
//     ok1.style.display = "none";
//     ok2.style.display = "block";
//     ok3.style.display = "none";
//     ok4.style.display = "none";
// });

// kg3.addEventListener("click", function() {
//     ok1.style.display = "none";
//     ok2.style.display = "none";
//     ok3.style.display = "block";
//     ok4.style.display = "none";
// });

// kg4.addEventListener("click", function() {
//     ok1.style.display = "none";
//     ok2.style.display = "none";
//     ok3.style.display = "none";
//     ok4.style.display = "block";
// });

// //save

// function saveData(key) {
//     const dataToSave = {
//         boxWidth: document.getElementById("width").value,
//         boxHeight: document.getElementById("height").value,
//         backgroundC: document.getElementById("color").value,
//         borderC: document.getElementById("borderColor").value,
//         tekstC: document.getElementById("p1Color").value,
//         tekstInhoud: document.getElementById("inhoudp1").value,
//         fSize: document.getElementById("fSize").value,
//         inhoudp1Size: document.getElementById("inhoudp1Size").value,
//         textColor: document.getElementById("textColor").value,
//         pValue: document.getElementById("pValue").value,
//         fontChoser: document.getElementById("fontChoser").value,
//         iBreedte: document.querySelector("#iBreedte").value,
//         iHoogte: document.querySelector("#iHoogte").value,
//         topBottom: document.querySelector("#top-bottom").value,
//         bottomTop: document.querySelector("#bottom-top").value,
//         rightLeft: document.querySelector("#right-left").value,
//         leftRight: document.querySelector("#left-right").value,
//         naam1: document.querySelector("#naam1").value,
//         naam2: document.querySelector("#naam2").value,
//         naam3: document.querySelector("#naam3").value,
//         naam4: document.querySelector("#naam4").value
//     };
//     localStorage.setItem(key, JSON.stringify(dataToSave));
// };

// function loadData(key) {
//     const savedData = JSON.parse(localStorage.getItem(key));
//     if(savedData) {
//         document.getElementById("width").value = savedData.boxWidth;
//         document.getElementById("height").value = savedData.boxHeight;
//         document.getElementById("color").value = savedData.backgroundC;
//         document.getElementById("borderColor").value = savedData.borderC;
//         document.getElementById("p1Color").value = savedData.tekstC;
//         document.getElementById("inhoudp1").value = savedData.tekstInhoud;
//         document.getElementById("fSize").value = savedData.fSize;
//         document.getElementById("inhoudp1Size").value = savedData.inhoudp1Size;
//         document.getElementById("textColor").value = savedData.textColor;
//         document.getElementById("pValue").value = savedData.pValue;
//         document.getElementById("fontChoser").value = savedData.fontChoser;
//         document.querySelector("#iBreedte").value = savedData.iBreedte;
//         document.querySelector("#iHoogte").value = savedData.iHoogte;
//         document.getElementById("naam1").value = savedData.naam1;
//         document.getElementById("naam2").value = savedData.naam2;
//         document.getElementById("naam3").value = savedData.naam3;
//         document.getElementById("naam4").value = savedData.naam4;
//     };
// };

// document.getElementById("saveButton").addEventListener("click", function() {
//     const saveKey = prompt("Geef een naam aan dit ontwerp om te kunnen opslaan");
//     if (saveKey) {
//         saveData(saveKey);
//         alert("Data is opgeslagen");
//     }
// });

// document.getElementById("loadButton").addEventListener("click", function() {
//     const loadKey = prompt("Geef aan het naam van je werk dat je wilt openen");
//     if(loadKey) {
//         loadData(loadKey);
//         alert("Je werk is geopend!");
//         document.getElementById("knop").click();
//         document.getElementById("knop2").click();
//         document.getElementById("knop3").click();
//         document.getElementById("knop4").click();
//     }
// });

// function getSavedKey() {
//     const keys = [];
//     for (let i = 0; i < localStorage.length; i++) {
//         keys.push(localStorage.key(i));
//     }
//     return keys;
// };

// function displaySavedKeys() {
//     const savedKeys = getSavedKey();
//     const listContainer = document.getElementById("savedKeyL");

//     listContainer.innerHTML = "";

//     savedKeys.forEach(function(e) {
//         const listItem = document.createElement("li");
//         listItem.textContent = e;
//         listContainer.appendChild(listItem);
//     });
//     document.getElementById("stop").style.display = "block";

//     document.getElementById("stop").addEventListener("click", function () {
//         listContainer.innerHTML = "";
//         document.getElementById("stop").style.display = "none";
//     });
// };

// function hakai() {
//     const hakaii = prompt("Wat wil je verwijderen? voer het naam in.");

//     if(hakaii) {
//         localStorage.removeItem(hakaii);
//         alert("Je werk " + hakaii + " is verwijdert");
//     } else {
//         alert("Dit bestaat niet!");
//     }
// };

// document.getElementById("fontUploadInput").addEventListener("change", fontChange);

// function fontChange(e) {
//     const fontFile = e.target.files[0];

//     if (fontFile) {
//         const fontFileURL = URL.createObjectURL(fontFile);
//         const fontFace = new FontFace('CustomFont', `url('${fontFileURL}')`);

//         fontFace.load().then(function(loadedFont) {
//             document.fonts.add(loadedFont);
//             setInterval(() => {
//                 document.querySelectorAll("#werk").forEach(function(e) {
//                     e.style.fontFamily = "CustomFont, Arial, sans-serif";
//                 });
//             }, 1000);
//         }).catch(function(error) {
//             console.error('Font loading failed: ', error);
//         });
//     }
// }

// //niet mijn code
// document.addEventListener('DOMContentLoaded', function () {
//     const canvas = document.getElementById('canvas');
//     const imageInput = document.getElementById('imageInput');

//     imageInput.addEventListener('change', handleImageUpload);

//     canvas.addEventListener('dragover', (e) => e.preventDefault());
//     canvas.addEventListener('drop', handleDrop);

//     function handleImageUpload(event) {
//         const file = event.target.files[0];

//         if (file) {
//             const reader = new FileReader();

//             reader.onload = function (e) {
//                 const img = new Image();
//                 img.src = e.target.result;

//                 img.onload = function () {
//                     addImageToCanvas(img);
//                     imageInput.value = '';
//                 };
//             };

//             reader.readAsDataURL(file);
//         }
//     }

//     function handleDrop(event) {
//         event.preventDefault();

//         const file = event.dataTransfer.files[0];

//         if (file) {
//             const reader = new FileReader();

//             reader.onload = function (e) {
//                 const img = new Image();
//                 img.src = e.target.result;

//                 img.onload = function () {
//                     addImageToCanvas(img, event.clientX, event.clientY);
//                     imageInput.value = '';
//                 };
//             };

//             reader.readAsDataURL(file);
//         }
//     }

//     function addImageToCanvas(img, x = 0, y = 0) {
//         const draggableImage = document.createElement('img');
//         draggableImage.src = img.src;
//         draggableImage.className = 'draggable';
    
//         draggableImage.style.position = 'absolute';
//         draggableImage.style.left = x + 'px';
//         draggableImage.style.top = y + 'px';
    
//         draggableImage.draggable = true;
    
//         draggableImage.addEventListener('dragstart', (event) => {
//             event.dataTransfer.setData('text/plain', 'draggable');
//         });
    
//         draggableImage.addEventListener('dblclick', () => {
//             draggableImage.remove();
//         });
    
//         document.querySelector('.werk').appendChild(draggableImage);
    
//         const handleMouseMove = (event) => {
//             const boundingRect = document.querySelector('.werk').getBoundingClientRect();
//             const newX = event.clientX - boundingRect.left;
//             const newY = event.clientY - boundingRect.top;
    
//             draggableImage.style.left = newX + 'px';
//             draggableImage.style.top = newY + 'px';
//         };
    
//         document.addEventListener('mousemove', handleMouseMove);
    
//         document.addEventListener('mouseup', () => {
//             document.removeEventListener('mousemove', handleMouseMove);
//         });
//     }
// });
//version 2

const rijen = $("#aantalRijen");
const C = $("#aantalKolommen");
const rijenMin = $("#aantalRijen-");
const CMin = $("#aantalKolommen-");
var aantal = 0;
var aantal2 = 62;
let class1;

rijen.on("click", function() {
    aantal += 1;
    if (aantal % 2 == 0) {
        class1 = "miniBoxContainerv1";
    } else {
        class1 = "miniBoxContainerv2";
    }

    document.querySelector(".v2Box").innerHTML += `<div class="${class1}">
    ${aantalMiniBoxes}
    </div>`;
});

var aantalMiniBoxes = `<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>
<div class="miniBox"></div>` ;

C.on("click", function() {
    aantal2 += 1;
    aantalMiniBoxes = "";

    $(".miniBoxContainerv1").append(`<div class="miniBox"></div>`);
    $(".miniBoxContainerv2").append(`<div class="miniBox"></div>`);

    for (let i = 0; i <= aantal2; i++) {
        aantalMiniBoxes += `<div class="miniBox"></div>`;
    }
});

rijenMin.on("click", function() {
    $(".v2Box .miniBoxContainerv1").last().remove();
    $(".v2Box .miniBoxContainerv2").last().remove();
});

CMin.on("click", function() {
    aantal2 -=1;
    aantalMiniBoxes = "";

    $(".miniBoxContainerv1").each(function() {
        $(this).find(".miniBox").last().remove();
    });
    
    $(".miniBoxContainerv2").each(function() {
        $(this).find(".miniBox").last().remove();
    });

    for (let i = 0; i <= aantal2; i++) {
        aantalMiniBoxes += `<div class="miniBox"></div>`
    }
});
//neither versions

// const v1 = document.getElementById("v1Choser");
// const v2 = document.getElementById("v2Choser");


// v1.addEventListener("click", function() {
//     document.querySelector(".versie1").style.display = "block";
//     document.getElementById("versionChooser").style.display = "none";
// });

// v2.addEventListener("click", function() {
//     document.querySelector(".versie2").style.display = "block";
//     document.getElementById("versionChooser").style.display = "none";
// });