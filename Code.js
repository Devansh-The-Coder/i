function setup() {
    canvas = createCanvas(300,300); canvas.center(); video = createCapture(VIDEO); video.hide(); classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/MTjoEs6Bt/model.json",modelLoaded);
} function modelLoaded() {
    console.log("model is loaded at port 4400, Err display code: 1231, array number: 12 classifer.setup = true")
}
function draw() {
    image(video,0,0, 300, 300);
    classifier.classify(video, gotResult); 
}
function gotResult(Results,error) {
    if (error) {
        console.log("An unexpected error has occured at port 4400")
    } else {
        console.log(Results);
        document.getElementById("objectName").innerHTML = Results[0].label
        document.getElementById("objectAccuracy").innerHTML = Results[0].confidence.toFixed(3) * 100
    }}
