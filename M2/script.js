document.addEventListener('DOMContentLoaded', function () {
    var cameraStream = document.getElementById('camera-stream');
    var captureButton = document.getElementById('capture-btn');
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            cameraStream.srcObject = stream;
        })
        .catch(function (error) {
            console.error("Cannot access camera: ", error);
        });

    captureButton.addEventListener('click', function () {
        canvas.width = cameraStream.videoWidth;
        canvas.height = cameraStream.videoHeight;
        context.drawImage(cameraStream, 0, 0);
        // You can now save or process the image data from the canvas
    });
});
