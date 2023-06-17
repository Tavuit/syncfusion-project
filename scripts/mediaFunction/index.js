// Get the modal
var modal = document.getElementById("media-modal");

// Get the close button
var closeBtn = modal.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function openModal() {
  modal.style.display = "block";
}

// When the user clicks on the close button, close the modal
closeBtn.onclick = function () {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "block";
  }
}

async function recordScreen() {
  console.log(navigator.mediaDevices, 'navigator.mediaDevices')
  return await navigator.mediaDevices.getDisplayMedia({
    audio: true,
    video: { mediaSource: "screen"}
  });
}

function createRecorder (stream, mimeType) {
  // the stream data is stored in this array
  let recordedChunks = [];

  const mediaRecorder = new MediaRecorder(stream);

  mediaRecorder.ondataavailable = function (e) {
    if (e.data.size > 0) {
      recordedChunks.push(e.data);
    }
  };
  mediaRecorder.onstop = function () {
    saveFile(recordedChunks);
    recordedChunks = [];
  };
  mediaRecorder.start(200); // For every 200ms the stream data will be stored in a separate chunk.
  return mediaRecorder;
}


function saveFile(recordedChunks){

  const blob = new Blob(recordedChunks, {
    type: 'video/webm'
  });
  let filename = window.prompt('Enter file name'),
    downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = `＄{filename}.webm`;

  document.body.appendChild(downloadLink);
  downloadLink.click();
  URL.revokeObjectURL(blob); // clear from memory
  document.body.removeChild(downloadLink);
}

let recordVideo = document.getElementById('record-video'), mediaRecorder;
recordVideo.addEventListener('click', async function(){
  console.log('record-video')
  let stream = await recordScreen();
  let mimeType = 'video/webm';
  mediaRecorder = createRecorder(stream, mimeType);
})
