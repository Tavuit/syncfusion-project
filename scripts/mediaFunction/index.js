// Get the modal
var mediaModal = document.getElementById("media-modal");
var editorModal = document.getElementById("editor-modal");

// Get the close button
var closeMediaBtn = mediaModal.querySelector(".close");
var closeEditorBtn = editorModal.querySelector(".close");

// When the user clicks on the button, open the modal
function openMediaModal() {
  mediaModal.style.display = "block";
}

function closeMediaModal() {
  mediaModal.style.display = "none";
}

function openEditorModal() {
  editorModal.style.display = "block";
}

function closeEditorModal() {
  editorModal.style.display = "none";
}

// When the user clicks on the close button, close the modal
closeMediaBtn.onclick = function () {
  mediaModal.style.display = "none";
}
closeEditorBtn.onclick = function () {
  editorModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == mediaModal || event.target == editorModal) {
    mediaModal.style.display = "block";
    editorModal.style.display = "block";
  }
}

function dataURItoBlob(dataURI) {
  var byteString = atob(dataURI.split(',')[1]);
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0]
  var ab = new ArrayBuffer(byteString.length);
  var ia = new Uint8Array(ab);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
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

function createRecorder(stream) {
  let mimeType = 'video/webm';
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


var recordVideo = document.getElementById('record-video');
recordVideo.addEventListener('click', async function () {
  let stream = await recordScreen();
  createRecorder(stream)
})


var captureScreen = document.getElementById('capture-image');
captureScreen.addEventListener('click', async function () {
  let stream = await recordScreen();
  await createCapture(stream)
})


function imageEditor(URL, fileName) {
  closeMediaModal()
  openEditorModal()
  const imageEditor = new tui.ImageEditor(document.querySelector('#image-editor'), {
    includeUI: {
      loadImage: {
        path: URL,
        name: fileName,
      },
      initMenu: 'filter',
      menuBarPosition: 'bottom',
    },
    cssMaxWidth: 700,
    cssMaxHeight: 500,
    selectionStyle: {
      cornerSize: 20,
      rotatingPointOffset: 70,
    },
  });
}

var editor = document.getElementById('edit-image');
editor.addEventListener('click', function () {
  var upload = document.getElementById("fileUploadToEditor")
  upload.addEventListener('change', function () {
    var selectedFile = upload.files[0];
    var fileName = selectedFile.name
    var idxDot = fileName.lastIndexOf(".") + 1;
    var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (extFile=="jpg" || extFile=="jpeg" || extFile=="png"){
      fileName = fileName.split('.').slice(0, -1).join('.')
      var urlFile = URL.createObjectURL(selectedFile)
      imageEditor(urlFile, fileName)
    }else{
      alert("Only jpg/jpeg and png files are allowed!");
      upload.value = "";
    }
  });
  upload.click()
})