console.log("Image is ready");

let inputElement = document.getElementById('fileInput');
let selectElement = document.getElementById('ImgType');

let filename = "";

inputElement.addEventListener('change', (e) => {
    filename = e.target.files[0];
    SettingImage();
}, false);

selectElement.addEventListener('change', () => {
    if (filename === "") {

    } else {
        SettingImage();
    }
}, false);

SettingImage = () => {
    let imgElement = document.createElement('img');
    imgElement.src = URL.createObjectURL(filename);
    imgElement.onload = () => {
        let dsize = new cv.Size(imgElement.naturalWidth / 2, imgElement.naturalHeight / 2);
        let mat = cv.imread(imgElement);
        let dst = new cv.Mat();
        cv.resize(mat, dst, dsize, 0, 0, cv.INTER_AREA);
        if (selectElement.value === "グレー") {
            cv.cvtColor(dst, dst, cv.COLOR_RGB2GRAY);
        }
        cv.imshow('canvasOutput', dst);
        mat.delete();
        dst.delete();
    }
}

function onOpenCvReady() {
    document.getElementById('status').innerHTML = 'OpenCV.js is ready.';
}