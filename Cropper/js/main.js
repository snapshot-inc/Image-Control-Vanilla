let cropperImg = document.getElementById('cropper-img');
let cropper = new Cropper(cropperImg);

document.getElementById('crop-btn').addEventListener('click', () => {
    resultImgUrl = cropper.getCroppedCanvas().toDataURL();
    console.log(resultImgUrl, typeof resultImgUrl, "resultImgUrl");
    let result = document.getElementById('result-img');
    result.src = resultImgUrl;
    alert("切り抜き完了しました。");
});