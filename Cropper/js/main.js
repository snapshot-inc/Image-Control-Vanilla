var cropperImg = document.getElementById('cropper-img');
var cropper = new Cropper(cropperImg);

document.getElementById('crop-btn').addEventListener('click', function () {
    resultImgUrl = cropper.getCroppedCanvas().toDataURL();
    var result = document.getElementById('result-img');
    result.src = resultImgUrl;
    alert("切り抜き完了しました。");
});