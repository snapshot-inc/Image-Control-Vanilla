function cropImg() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    var image = new Image();
    image.src = "/img/Screenshot_2022-11-10-14-02-47-93.png";
    console.log(image.src, typeof image.src, "image.src");

    image.onload = function () {
        ctx.drawImage(image, 150, 200, 500, 300, 60, 60, 500, 300);
    }
    console.log(ctx)
}

cropImg();