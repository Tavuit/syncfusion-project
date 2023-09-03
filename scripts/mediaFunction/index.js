// Get the modal
var mediaModal = document.getElementById("media-modal");
var editorModal = document.getElementById("editor-modal");
var settingModel = document.getElementById("settings-model");
// Get the close button
var closeMediaBtn = mediaModal.querySelector(".close");
var closeEditorBtn = editorModal.querySelector(".close");
var closeSettingBtn = settingModel.querySelector(".close");

var audioRecording = false;
var audioOutputDevices = [];
var audioInputDevices = [];

var hardwareEncording = false;
var videoDevice = {
  output: {
    enable: false,
    value: null
  },
  input: {
    enable: false,
    value: null
  }
}

var audioDevice = {
  playback: "true",
  mic: null
}

var STORAGE_KEY = "@SETTINGS"

function saveSettings() {
  const jsonSettings = {hardwareEncording, audioDevice, videoDevice};
  localStorage.setItem(STORAGE_KEY, JSON.stringify(jsonSettings));
}

function loadSettings() {
  const settings = localStorage.getItem(STORAGE_KEY);
  if (settings) {
    jsonSettings = JSON.parse(settings);
    hardwareEncording = !!jsonSettings['hardwareEncording'] ? jsonSettings['hardwareEncording'] : hardwareEncording;
    if (!!jsonSettings['videoDevice']) {
      videoDevice = jsonSettings['videoDevice'];
    } else {
      videoDevice = {
        output: {
          enable: false,
          value: null
        },
        input: {
          enable: false,
          value: null
        }
      }
    }
    if (!!jsonSettings['audioDevice']) {
      audioDevice = jsonSettings['audioDevice'];
    } else {
      audioDevice = {
        playback: "true",
        mic: null
      }
    }
  }
}

function setSelectedValue(selectObj, valueToSet) {
  for (var i = 0; i < selectObj.options.length; i++) {
    if (selectObj.options[i].value == valueToSet) {
      selectObj.options[i].selected = true;
      return;
    }
  }
}

function disableVideoSetting() {
  if (!videoDevice.output.enable) {
    document.querySelector('#audio-out-selection').setAttribute('disabled', 'disabled');
  } else {
    document.querySelector('#audio-out-selection').removeAttribute('disabled');
  }

  if (!videoDevice.input.enable) {
    document.querySelector('#audio-in-selection').setAttribute('disabled', 'disabled');
  } else {
    document.querySelector('#audio-in-selection').removeAttribute('disabled');
  }
}

function disableAudioSetting() {
  if (audioDevice.playback === "true") {
    document.querySelector("#audio-recording-playback").checked = true;
    document.querySelector("#mic-setting-selection").setAttribute("disabled", "disabled");
  }
  if (audioDevice.playback === "false") {
    document.querySelector("#audio-recording-mic").checked = true;
    document.querySelector("#mic-setting-selection").removeAttribute("disabled");
  }
}

function bindDataSetting() {
  document.querySelector("#hardwareSettings").checked = hardwareEncording;
  document.querySelector("#audio-out").checked = videoDevice.output.enable;
  document.querySelector("#audio-in").checked = videoDevice.input.enable;

  setSelectedValue(document.querySelector("#audio-out-selection"), videoDevice.output.value);
  setSelectedValue(document.querySelector("#audio-in-selection"), videoDevice.input.value);
  setSelectedValue(document.querySelector("#mic-setting-selection"), audioDevice.mic);

  disableVideoSetting();
  disableAudioSetting()
}

// When the user clicks on the button, open the modal
function openSettingModel() {
  settingModel.style.display = "block";
}

function closeSettingModel() {
  settingModel.style.display = "none";
}

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
  openMediaModal();
}
closeSettingBtn.onclick = function () {
  settingModel.style.display = "none";
  openMediaModal();
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == mediaModal || event.target == editorModal) {
    if (mediaModal.style.display == "block") {
      return
    }
    if (editorModal.style.display == "block") {
      return
    }
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

async function recordScreen(audio = true, video = true) {
  const constaints = {};
  if (!!audio) {
    constaints['audio'] = audio;
  }
  if (!!video) {
    constaints['video'] = {mediaSource: "screen"}
  }
  if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
    return await navigator.mediaDevices.getDisplayMedia(constaints);
  }
  return null
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
    stream.getTracks().forEach(item=>item.stop());
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
  stream.getTracks().forEach(item=>item.stop());
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


function imageEditor(URL, fileName) {
  closeMediaModal()
  openEditorModal()
  const imageEditor = new tui.ImageEditor(document.querySelector('#image-editor'), {
    includeUI: {
      loadImage: {
        path: URL, name: fileName,
      }, initMenu: 'filter', menuBarPosition: 'bottom',
    }, cssMaxWidth: 700, cssMaxHeight: 500, selectionStyle: {
      cornerSize: 20, rotatingPointOffset: 70,
    },
  });
}

$(document).on("click", `#record-video`, async function () {
  let stream = await recordScreen(true, false);
  if (stream) {
    createRecorder(stream)
  } else {
    alert("Browser not supported! Please use a different browser.");
  }
})

$(document).on("click", `#capture-image`, async function () {
  let stream = await recordScreen(true, false);
  if (stream) {
    await createCapture(stream)
  } else {
    alert("Browser not supported! Please use a different browser.");
  }
})

$(document).on("click", `#edit-image`, function () {
  var upload = document.getElementById("fileUploadToEditor")
  $(document).on('change', '#fileUploadToEditor', function () {
    var selectedFile = upload.files[0];
    var fileName = selectedFile.name
    var idxDot = fileName.lastIndexOf(".") + 1;
    var extFile = fileName.substr(idxDot, fileName.length).toLowerCase();
    if (extFile == "jpg" || extFile == "jpeg" || extFile == "png") {
      fileName = fileName.split('.').slice(0, -1).join('.')
      var urlFile = URL.createObjectURL(selectedFile)
      imageEditor(urlFile, fileName)
    } else {
      alert("Only jpg/jpeg and png files are allowed!");
      upload.value = "";
    }
  })
  upload.click()
});
var mediaRecorder = null;
var stopRecordAuto = $('#stop-record-audio');
$(document).on("click", `#record-audio`, async function () {
  try {
    let stream = await navigator.mediaDevices.getUserMedia({audio: true, video: false});
    if (stream) {
      mediaRecorder = new MediaRecorder(stream);
      mediaRecorder.start();
      let chunks = [];
      mediaRecorder.ondataavailable = (e) => {
        chunks.push(e.data);
      }
      mediaRecorder.onerror = (e) => {
        alert(e.error);
      }
      mediaRecorder.onstop = (e) => {
        let blod = new Blob(chunks);
        saveAs(blod, 'audio-record.mp3');
        this.style.display = "block"
        stopRecordAuto[0].style.display = "none";
        stream.getTracks().forEach(item=>item.stop());
      }
      this.style.display = "none"
      stopRecordAuto[0].style.display = "block";
    }
  } catch (err) {
    console.error(err)
  }
})

$(document).on("click", '#stop-record-audio', function () {
  mediaRecorder.stop();
});

$(document).on("change", '#hardwareSettings', function(event) {
  hardwareEncording = document.querySelector("#hardwareSettings").checked;
  saveSettings()
})

$(document).on("change", '#audio-out', function() {
  videoDevice.output.enable = document.querySelector('#audio-out').checked;
  disableVideoSetting()
  saveSettings()
})

$(document).on("change", '#audio-in', function() {
  videoDevice.input.enable = document.querySelector('#audio-in').checked;
  disableVideoSetting()
  saveSettings()
})

$(document).on("change", '#audio-out-selection', function() {
  const selector  = document.querySelector('#audio-out-selection');
  const value = selector.options[selector.selectedIndex].value;
  videoDevice.output.value = value;
  saveSettings()
})

$(document).on("change", '#audio-in-selection', function() {
  const selector  = document.querySelector('#audio-in-selection');
  const value = selector.options[selector.selectedIndex].value;
  videoDevice.input.value = value;
  saveSettings()
})

$(document).on("change", '#mic-setting-selection', function() {
  const selector  = document.querySelector('#mic-setting-selection');
  const value = selector.options[selector.selectedIndex].value;
  audioDevice.mic = value
  saveSettings()
})

$(document).on("click", "#settings", function () {
  closeMediaModal();
  openSettingModel();
})

function handleOnChangeAudioOut(myRadio) {
  audioDevice.playback = myRadio.value
  disableAudioSetting()
  saveSettings();
}

async function getDevices() {
  // Check if the enumerateDevices method is available
  if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
    // Enumerate devices
    await navigator.mediaDevices.getUserMedia({audio: true, video: false});
    await navigator.mediaDevices.enumerateDevices()
      .then(devices => {
        devices = devices.filter(item=> item.deviceId != 'default');
        audioOutputDevices = devices.filter(device => device.kind === 'audiooutput');
        audioInputDevices = devices.filter(device => device.kind === 'audioinput');
        var audio_out_select = settingModel.querySelector("#audio-out-selection");
        var audio_in_select = settingModel.querySelector("#audio-in-selection");
        var mic_select = settingModel.querySelector("#mic-setting-selection");
        audioOutputDevices.forEach(item => {
          var option = document.createElement("option");
          option.text = item['label'];
          option.value = item['deviceId'];
          audio_out_select.appendChild(option);
        })
        audioInputDevices.forEach(item => {
          var optionAudioIn = document.createElement("option");
          var optionMicIn = document.createElement("option");
          optionAudioIn.text = item['label'];
          optionAudioIn.value = item['deviceId'];
          audio_in_select.appendChild(optionAudioIn);
          optionMicIn.text = item['label'];
          optionMicIn.value = item['deviceId'];
          mic_select.appendChild(optionMicIn);
        })
      })
      .then(devices => {
        loadSettings();
        bindDataSetting()
      })
      .catch(error => {
        console.error('Error enumerating devices:', error);
      });
  } else {
    console.error('enumerateDevices not supported.');
  }
}

getDevices();

function getArea(start = null, end = null) {
  return new Promise((resolve) => {
    var container = document.getElementById("app-content");
    var selectionArea = document.getElementById("selection-area");

    function drawSelectionArea(isReset = false) {
      // Set the style and position of the selection area element
      if (isReset) {
        selectionArea.style.left = 0;
        selectionArea.style.top = 0;
        selectionArea.style.width = 0;
        selectionArea.style.height = 0;
      } else {
        selectionArea.style.left = Math.min(start.x, end.x) + "px";
        selectionArea.style.top = Math.min(start.y, end.y) + "px";
        selectionArea.style.width = Math.abs(start.x - end.x) + "px";
        selectionArea.style.height = Math.abs(start.y - end.y) + "px";
      }
    }

    function onMouseDown(e) {
      start = getCursorPosition(e);
      selectionArea.style.display = "block";
    }

    function onMouseMove(e) {
      if (!start) return;

      // Get the end point and draw the selection area
      end = getCursorPosition(e);
      drawSelectionArea();
    }

    function onMouseUp(e) {
      if (!start) return;
      selectionArea.style.display = "none";
      container.style.opacity = 1
      container.removeEventListener("mousedown", onMouseDown);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseup", onMouseUp);

      resolve({startX: start.x, startY: start.y, endX: end.x, endY: end.y})
    }

    function getCursorPosition(e) {
      var rect = container.getBoundingClientRect();
      var x = e.clientX - rect.left;
      var y = e.clientY - rect.top;
      return {x: x, y: y};
    }


    function initArea() {
      drawSelectionArea(true);
      container.style.opacity = 0.5
      container.addEventListener("mousedown", onMouseDown);
      container.addEventListener("mousemove", onMouseMove);
      container.addEventListener("mouseup", onMouseUp);
    }

    initArea()
  })
}