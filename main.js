function setup(){
    canvas = createCanvas(2000, 2000)
    canvas.position(110, 250)
    video = createCapture(VIDEO)  
    video.hide()
    filter_color = ""
}
function draw(){
    fill(0, 100, 255)
    stroke(0, 100, 255)
    rect(0, 20, 2000, 1000)

    image(video, 50, 50, 640, 480)
    tint(filter_color)

    image(video, 50, 50, 620, 460)
    tint(filter_color)

    image(video,50, 50, 620, 460)
    tint(filter_color)

    image(video, 50, 50, 600, 440)
    tint(filter_color)

    image(video, 50, 50, 580, 420)
    tint(filter_color)

    image(video,50, 50, 560, 400)
    tint(filter_color)

    image(video, 50, 50, 540, 380)
    tint(filter_color)

    image(video, 50, 50, 520, 360)
    tint(filter_color)
}
function take_snapshot(){
    save('ameya.png')
}
function filtercolor(){
    filter_color = document.getElementById("color_name").value;
}