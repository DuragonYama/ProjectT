const knop = document.getElementById("knop");
const knop2 = document.getElementById("knop2");
const knop3 = document.getElementById("knop3");
const knop4 = document.getElementById("knop4");
const ss = document.getElementById("ss");
const arti = document.getElementById("arti");
const eksi = document.getElementById("eksi");
const imageContainer = document.querySelector("#imageInput2");
const afbV = document.getElementById("afbV");
var uploaded_image = "";

knop.onclick = function () {
    let widthValue = document.getElementById("width").value;
    let heightValue = document.getElementById("height").value;
    let backgroundColor = document.getElementById("color").value;
    let borderColor = document.getElementById("borderColor").value;

    document.querySelectorAll(".werk").forEach(function(e) {
        e.style.width = widthValue + "px";
    });
    document.querySelectorAll(".werk").forEach(function(e) {
        e.style.height = heightValue + "px";
    });
    document.querySelectorAll(".werk").forEach(function(e) {
        e.style.backgroundColor = backgroundColor;
    });
    document.querySelectorAll(".werk").forEach(function(e) {
        e.style.border = borderColor + " solid 3px";
    })
};
//Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae labore perferendis dolore in placeat id quam a, fugit corrupti expedita provident distinctio! Ut vitae praesentium fugiat quae magni, iusto consequatur.
knop2.onclick = function () {
    let p1Color = document.getElementById("p1Color").value;
    let inhoudp1 = document.getElementById("inhoudp1").value;
    let fSize = document.getElementById("fSize").value;
    let inhoudp1Size = document.getElementById("inhoudp1Size").value;
    // let titel = document.getElementById("title").value;
    let textKleur = document.getElementById("textColor").value;
    let pValue = document.getElementById("pValue").value;
    let fontSelector = document.getElementById("fontChoser").value;

    document.querySelectorAll("#werk").forEach(function(e) {
        e.style.fontFamily = fontSelector;
    });
    document.querySelectorAll("#p1").forEach(function(e) {
        e.style.color = p1Color;
    });
    document.querySelectorAll("#p1").forEach(function(e) {
        e.innerText = inhoudp1;
    });
    document.querySelectorAll("h1").forEach(function(e) {
        e.style.fontSize = fSize + "px";
    });
    document.querySelectorAll("#p1").forEach(function(e) {
        e.style.fontSize = inhoudp1Size + "px";
    });
    document.querySelectorAll("h1").forEach(function(e) {
        e.style.color = textKleur;
    });
    document.querySelectorAll("#p1").forEach(function(e) {
        e.style.top = pValue + "px";
    });

    // document.querySelector("h1").innerText = titel;
};

knop3.onclick = function () {
    let imgWidth = document.querySelector("#iBreedte").value;
    let imgHeight = document.querySelector("#iHoogte").value;
    let topV = document.querySelector("#top-bottom").value;
    let bottomV = document.querySelector("#bottom-top").value;
    let rightV = document.querySelector("#right-left").value;
    let leftV = document.querySelector("#left-right").value;

    document.querySelectorAll(".image").forEach(function(e) {
        e.style.width = imgWidth + "px";
    });
    document.querySelectorAll(".image").forEach(function(e) {
        e.style.height = imgHeight + "px";
    });
    document.querySelectorAll(".image").forEach(function(e) {
        e.style.bottom = topV + "px";
    });
    document.querySelectorAll(".image").forEach(function(e) {
        e.style.top = bottomV + "px";
    });
    document.querySelectorAll(".image").forEach(function(e) {
        e.style.right = leftV + "px";
    });
    document.querySelectorAll(".image").forEach(function(e) {
        e.style.left = rightV + "px";
    });
};

knop4.onclick = function () {
    let naam1 = document.querySelector("#naam1").value;
    let naam2 = document.querySelector("#naam2").value;
    let naam3 = document.querySelector("#naam3").value;
    let naam4 = document.querySelector("#naam4").value;

    document.querySelector("#voorNaam1").innerText = naam1;
    document.querySelector("#voorNaam2").innerText = naam2;
    document.querySelector("#voorNaam3").innerText = naam3;
    document.querySelector("#voorNaam4").innerText = naam4;
};

// ss.onclick = function () {
//     html2canvas(document.querySelector(".werk")).then(canvas => {
//         const blobURL = canvas.toDataURL();
//         const downloadLink = document.createElement("a");
//         downloadLink.href = blobURL;
//         downloadLink.download = "screenshot.png";
//         downloadLink.click();
//     });
// };

document.getElementById("imageInput2").addEventListener("change", function() {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.querySelectorAll("#imageContainer").forEach(function(e) {
            e.style.backgroundImage = `url(${uploaded_image})`;
        });
    });
    reader.readAsDataURL(this.files[0]);
});

function removeUploadedImage() {
    document.querySelectorAll("#imageContainer").forEach(function(e) {
        e.style.backgroundImage = ""; // Set backgroundImage to an empty string
    });
};

afbV.onclick = function () {
    removeUploadedImage();
};

const kg1 = document.getElementById("kg1");
const kg2 = document.getElementById("kg2");
const kg3 = document.getElementById("kg3");
const kg4 = document.getElementById("kg4");

const ok1 = document.getElementById("ok1");
const ok2 = document.getElementById("ok2");
const ok3 = document.getElementById("ok3");
const ok4 = document.getElementById("ok4");

kg1.addEventListener("click", function() {
    ok1.style.display = "block";
    ok2.style.display = "none";
    ok3.style.display = "none";
    ok4.style.display = "none";
});

kg2.addEventListener("click", function() {
    ok1.style.display = "none";
    ok2.style.display = "block";
    ok3.style.display = "none";
    ok4.style.display = "none";
});

kg3.addEventListener("click", function() {
    ok1.style.display = "none";
    ok2.style.display = "none";
    ok3.style.display = "block";
    ok4.style.display = "none";
});

kg4.addEventListener("click", function() {
    ok1.style.display = "none";
    ok2.style.display = "none";
    ok3.style.display = "none";
    ok4.style.display = "block";
});

//niet mijn code
document.addEventListener('DOMContentLoaded', function () {
    const canvas = document.getElementById('canvas');
    const imageInput = document.getElementById('imageInput');

    imageInput.addEventListener('change', handleImageUpload);

    canvas.addEventListener('dragover', (e) => e.preventDefault());
    canvas.addEventListener('drop', handleDrop);

    function handleImageUpload(event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const img = new Image();
                img.src = e.target.result;

                img.onload = function () {
                    addImageToCanvas(img);
                    // Clear the value of the file input
                    imageInput.value = '';
                };
            };

            reader.readAsDataURL(file);
        }
    }

    function handleDrop(event) {
        event.preventDefault();

        const file = event.dataTransfer.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const img = new Image();
                img.src = e.target.result;

                img.onload = function () {
                    addImageToCanvas(img, event.clientX, event.clientY);
                    // Clear the value of the file input
                    imageInput.value = '';
                };
            };

            reader.readAsDataURL(file);
        }
    }

    function addImageToCanvas(img, x = 0, y = 0) {
        const draggableImage = document.createElement('img');
        draggableImage.src = img.src;
        draggableImage.className = 'draggable';
    
        // Set initial position
        draggableImage.style.position = 'absolute';
        draggableImage.style.left = x + 'px';
        draggableImage.style.top = y + 'px';
    
        draggableImage.draggable = true;
    
        draggableImage.addEventListener('dragstart', (event) => {
            event.dataTransfer.setData('text/plain', 'draggable'); // For Firefox support
        });
    
        // Handle double-click to remove the image
        draggableImage.addEventListener('dblclick', () => {
            draggableImage.remove();
        });
    
        document.querySelector('.werk').appendChild(draggableImage); // Append to .werk directly
    
        // Handle real-time movement during mousemove
        const handleMouseMove = (event) => {
            const boundingRect = document.querySelector('.werk').getBoundingClientRect();
            const newX = event.clientX - boundingRect.left;
            const newY = event.clientY - boundingRect.top;
    
            draggableImage.style.left = newX + 'px';
            draggableImage.style.top = newY + 'px';
        };
    
        // Add event listener for mousemove
        document.addEventListener('mousemove', handleMouseMove);
    
        // Remove event listener after mouseup
        document.addEventListener('mouseup', () => {
            document.removeEventListener('mousemove', handleMouseMove);
        });
    }
});