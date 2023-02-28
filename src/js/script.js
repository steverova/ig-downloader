document.getElementById("uri").addEventListener("click", () => {
  document.getElementById("myalert01").style.display = "none";
});

function clearData() {
  document.getElementById("uri").value = "";
  document.getElementById("image1").src = "";
  document.getElementById("image1").style.display = "none";
  document.getElementById("card-img").style.display = "none";
}

function geturi() {
  const uri = document.getElementById("uri").value;

  const ur = uri.split("/p/");
  if (
    uri === "" ||
    (ur[0] === "https://www.instagram.com" && ur[1].length < 12) ||
    ur[0] != "https://www.instagram.com"
  ) {
    document.getElementById(
      "alert"
    ).innerHTML = `<p id="myalert01">Ingrese una direccion valida</p>`;
  } else {
    const url = uri + "media/?size=l";
    document.getElementById("image1").style.display = "block";
    document.getElementById("download").href = url;
    document.getElementById("image1").src = url;
    let newUri1 = new cDg("image1").view();
    console.log("New_Image_Url 1: " + newUri1);
    document.getElementById("card-img").style.display = "block";
  }
}

// function downloadImage() {
//   var url = document.getElementById("image1").src;
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", url, true);
//   xhr.responseType = "blob";
//   xhr.onload = function () {
//     var urlCreator = window.URL || window.webkitURL;
//     var imageUrl = urlCreator.createObjectURL(this.response);
//     var tag = document.createElement("a");
//     tag.href = imageUrl;
//     tag.download = "image.jpg";
//     document.body.appendChild(tag);
//     tag.click();
//     document.body.removeChild(tag);
//     window.URL.revokeObjectURL(imageUrl);
//   };
//   xhr.send();
// }

function downloadImage() {
  const image = document.getElementById("image1");
  const url = image.src;
  const filename = "image.jpg";
  const anchor = document.createElement("a");
  anchor.download = filename;
  anchor.href = url;
  anchor.click();
}
