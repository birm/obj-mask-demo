function rangetoTensor(x,y,w,h){
  var imgdata = ctx.getImageData(x,y,w,h).data
  imgdata = Array.from(imgdata);
  return tf.tensor2d(imgdata, [4,w*h])
}

function ImgtoTensor(){
  var x = 0;
  var y = 0;
  var w = canvas.width;
  var h = canvas.height;
  return rangetoTensor(x,y,w,h)
}
