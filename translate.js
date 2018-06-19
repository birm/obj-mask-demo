// create a list of [x,y] tensors and a list of [r,g,b,a] tensors from an image
function rangeToTensors(x,y,w,h){
  var imgdata = ctx.getImageData(x,y,w,h).data
  imgdata = Array.from(imgdata);
  coords=[]
  datas=[]
  for (var i=0; i<w*h; i+=4){
    let coord = [i%(w), Math.floor(i/w)]
    let data =imgdata.slice(i,i+4)
    datas.push(tf.tensor1d(data))
    coords.push(tf.tensor1d(coord))
  }
  return tensors;
}

function imgtoTensors(){
  var x = 0;
  var y = 0;
  var w = canvas.width;
  var h = canvas.height;
  return rangeToTensors(x,y,w,h)
}
