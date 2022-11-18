const trimmedImage = document.getElementById('trimmed-image');
const cropNum = document.getElementById('cropNum');
console.log(cropNum)

cropNum.addEventListener('change', () => {

    const canvas = trimImage('/img/Screenshot_2022-11-10-14-02-47-93.png');
    trimmedImage.append(canvas);
})

function trimImage(src) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const img = new Image();
    img.src = src;
    img.onload = () => {
        const xOffset = 0;
        //const yOffset = -13;

        canvas.width = img.width / 1.5;
        canvas.height = 700 / 1.5;

        console.log(cropNum.value)

        // drawImage(image, xOffset, yOffset, width, height, x, y, width, height)
        ctx.drawImage(img, xOffset, -cropNum.value, 200, 433);
    };

    return canvas;
}


