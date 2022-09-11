function clearData() {
  document.getElementById("uri").value = "";
  document.getElementById("image1").src = "";
  document.getElementById("image1").style.display = "none";
  document.getElementById("card-img").style.display = "none";
}

function geturi() {
  document.getElementById("image1").style.display = "block";
  const uri = document.getElementById("uri").value + "media/?size=l";
  document.getElementById("download").href = uri;
  document.getElementById("image1").src = uri;
  let newUri1 = new cDg("image1").view();
  console.log("New_Image_Url 1: " + newUri1);
  document.getElementById("card-img").style.display = "block";
}
