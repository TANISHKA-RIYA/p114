function preload(){

}

function setup(){
canvas= createCanvas(400 , 400);
canvas.center();

video = createCapture(VIDEO);
video.size(400 , 400);
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotposes);
}

function draw(){
image(video,0,0,400,400);
}

function takesnapshot(){
    save("filteredimage.png");
}

function modelLoaded(){
    console.log("posenet model loaded")
}

function gotposes(result){
    if (result.length > 0){
        console.log(result);
        console.log(result[0].pose.nose.x);
        console.log(result[0].pose.nose.y);
    }
}