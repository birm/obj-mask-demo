var canvas = document.getElementsByTagName("canvas")[0]
var ctx = canvas.getContext('2d');
var loader = document.getElementById("fileup");
loader.addEventListener('change', handleImage, false);

var defImg = new Image();
defImg.src = "http://blog.vangoghgallery.com/wp-content/uploads/cafe.jpg";
defImg.onload = function() {
    canvas.width = defImg.width;
    canvas.height = defImg.height;
    ctx.drawImage(defImg, 0, 0);
};
// user loaded image
function handleImage() {
    if (this.files && this.files[0]) {
        var reader = new FileReader();
        reader.onload = function(event) {
            var img = new Image();
            img.src = event.target.result;
            img.onload = function() {
                canvas.width = img.width;
                canvas.height = img.height;
                ctx.drawImage(img, 0, 0);
            };
        };
        reader.readAsDataURL(this.files[0]);
    }
}
