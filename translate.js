function rangetoTensors(x,y,w,h){
  var imgdata = ctx.getImageData(x,y,w,h).data
  imgdata = Array.from(imgdata);
  tensors=[]
  for (var i=0; i<w*h; i+=4){
    let data = [i%(w), Math.floor(i/w)]
    data.concat(imgdata.slice(i,i+4))
    tensors.push(tf.tensor1d(data))
  }
  return tensors;
}

function ImgtoTensors(){
  var x = 0;
  var y = 0;
  var w = canvas.width;
  var h = canvas.height;
  return rangetoTensors(x,y,w,h)
}
