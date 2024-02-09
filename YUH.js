let knop = document.getElementById("knop");
let knop2 = document.getElementById("knop2");
let ss = document.getElementById("ss");
let arti = document.getElementById("arti");
let eksi = document.getElementById("eksi");

knop.onclick = function () {
    let widthValue = document.getElementById("width").value;
    document.querySelector(".werk").style.width = widthValue + "px";
    let heightValue = document.getElementById("height").value;
    document.querySelector(".werk").style.height = heightValue + "px";
    let backgroundColor = document.getElementById("color").value;
    document.querySelector(".werk").style.backgroundColor = backgroundColor;
    let textKleur = document.getElementById("textColor").value;
    document.querySelector("h1").style.color = textKleur;
    let borderColor = document.getElementById("borderColor").value;
    document.querySelector(".werk").style.border = borderColor + " solid 3px";
};

knop2.onclick = function () {
    let fSize = document.getElementById("fSize").value;
    document.querySelector("h1").style.fontSize = fSize + "px";
    let titel = document.getElementById("title").value;
    document.querySelector("h1").innerText = titel;
    let inhoudp1 = document.getElementById("inhoudp1").value; 
    document.getElementById("p1").innerText = inhoudp1;
    let inhoudp1Size = document.getElementById("inhoudp1Size").value;
    document.getElementById("p1").style.fontSize = inhoudp1Size + "px";
    let p1Color = document.getElementById("p1Color").value;
    document.getElementById("p1").style.color = p1Color;
}

ss.onclick = function () {
    const container = document.querySelector(".werk");

    html2canvas(container, {
        scrollY: -window.scrollY,
        scrollX: -window.scrollX
    }).then(function (canvas) {
        canvas.toBlob(function (blob) {
            const blobURL = URL.createObjectURL(blob);
            const downloadLink = document.createElement("a");

            downloadLink.href = blobURL;
            downloadLink.download = "screenshot.png";
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        });
    });
};

arti.onclick = function () {
    const originalElement = document.querySelector(".werk");
    const clonedElement = originalElement.cloneNode(true);
    clonedElement.classList.add("clone");
    
    clonedElement.id = "cloned_" + Math.floor(Math.random() * 1000);
    
    originalElement.parentNode.appendChild(clonedElement);
    clonedElement.style.marginLeft = "10px";
};

eksi.onclick = function () {
    const clonedElements = document.querySelectorAll(".werk.clone");

    clonedElements.forEach(function (clonedElement) {
        clonedElement.remove();
    });
};

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

