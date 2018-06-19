const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));
model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});
function run_model(){
  imgtensors = imgtoTensors()
  model.fit(imgtensors[0], imgtensors[1], {epochs: 10}).then(()=>{
    model.predict(tf.tensor1d([100,200])).print();
  });
}
