nose_x = 0;
nose_y = 0;

function preload(){
mustache=loadImage(" https://i.postimg.cc/3x3QzSGq/m.png");
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
image(mustache,nose_x,nose_y,100,100);

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
        nose_x = result[0].pose.nose.x - 35;
        nose_y = result[0].pose.nose.y - 35;
        console.log("Nose X="+nose_x);
        console.log("Nose Y="+nose_y);
    }
}