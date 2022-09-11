document.getElementById("uri").addEventListener("click", () => {
  document.getElementById("myalert01").style.display="none";
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
  if (uri === "" ||
   (ur[0] === "https://www.instagram.com" && ur[1].length <12)
   || ur[0] != "https://www.instagram.com") {
    document.getElementById(
      "alert"
    ).innerHTML = `<div id="myalert01" class="alert alert-warning" role="alert">
  Ingrese una direccion valida
</div>`;
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
