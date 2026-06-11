function uploadMovie() {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];

  if (!file) {
    alert("Pick a movie first!");
    return;
  }

  const url = URL.createObjectURL(file);

  const video = document.createElement("video");
  video.src = url;
  video.controls = true;

  document.getElementById("movieList").appendChild(video);
}
