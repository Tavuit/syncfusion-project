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

function dataURItoBlob(dataURI) {
  // convert base64 to raw binary data held in a string
  // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
  var byteString = atob(dataURI.split(',')[1]);

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]

  // write the bytes of the string to an ArrayBuffer
  var ab = new ArrayBuffer(byteString.length);

  // create a view into the buffer
  var ia = new Uint8Array(ab);

  // set the bytes of the buffer to the correct values
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  // write the ArrayBuffer to a blob, and you're done
  var blob = new Blob([ab], {type: mimeString});
  return blob;

}

async function recordScreen() {
  if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
    console.log("Let's get this party started")
    return await navigator.mediaDevices.getDisplayMedia({
      audio: true,
      video: {mediaSource: "screen"}
    });
  }

}

function createRecorder(stream, mimeType) {
  let recordedChunks = [];
  const mediaRecorder = new MediaRecorder(stream);
  mediaRecorder.ondataavailable = function (e) {
    if (e.data.size > 0) {
      recordedChunks.push(e.data);
    }
  };
  mediaRecorder.onstop = function () {
    saveFileVideo(recordedChunks);
    recordedChunks = [];
  };
  mediaRecorder.start(200);
  return mediaRecorder
}

async function createCapture(stream) {
  const videoTrack = stream.getVideoTracks()[0];
  const imageCapture = new ImageCapture(videoTrack);
  const imageBitmap = await imageCapture.grabFrame();
  const canvas = document.createElement('canvas');
  canvas.width = imageBitmap.width;
  canvas.height = imageBitmap.height;
  canvas.getContext('2d').drawImage(imageBitmap, 0, 0);
  const dataURL = canvas.toDataURL('image/png');
  stream.getTracks().forEach(function (track) {
    track.stop();
  });
  saveFileCapture(dataURL)
}


function saveFileVideo(recordedChunks) {
  const blob = new Blob(recordedChunks, {
    type: 'video/webm'
  });
  saveAs(blob, 'screen-record.webm')
}



function saveFileCapture(base64Image) {
  var blobImage = dataURItoBlob(base64Image)
  saveAs(blobImage, "screen-capture.png");
}


var recordVideo = document.getElementById('record-video'), mediaRecorder;
recordVideo.addEventListener('click', async function () {
  let mimeType = 'video/webm';
  let stream = await recordScreen();
  mediaRecorder = createRecorder(stream, mimeType);
})


var captureScreen = document.getElementById('capture-image');
captureScreen.addEventListener('click', async function () {
  let stream = await recordScreen();
  await createCapture(stream)
})


