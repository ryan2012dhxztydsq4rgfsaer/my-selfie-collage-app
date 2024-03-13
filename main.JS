var speechrecognition = window.webkitspeechrecognition;

var regognition = new speechrecognition();

function Start()
{
document.getElementById("textbox").innerHTML = ""
Recognition.start()
}


recognition.onresult = function(event){

    console.log(event);
    var content = event.results[0] [0].transcript

    document.getElementById("textbox").innerHTML = content
    console.log(content)
}

function speak(){

    var synth = speech.synthesis
    speak_data = document.getElementById("textbox").value
    var utterthis = new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterthis)
    webcam.attach(camera)

    settimeout(function()
    {

        take_snapshot();
        save()
        5000;

    }
    )
}
     

Webcam.set({
    width:360,
    height:250,
    image_format: 'png',
    png_quality:90
});
camera.getElementById("camera")

function take_snapshot()
{
    webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "selfie_image" scr="'+data_uri+'">';
    });
}

if(content =="take my selfie")
{
    console.log("taking selfie --- ");
    speak();
}

function settimeouttbutton() {

    settimkeout(
        function(){
            alert("set timeout button");
        }, 3000);

    }

function save()
{
    link = document.getElementById("link")
    image = document.getElementById("selfie_image").src
    link.href = image;
    link.click();
}

fuction take_snapshots
{
    console.log(img_uri);

        webcam.snap(fuction(data_uri) {
            if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" scr="'+data_uri+'"/>;'  
            
            }


            if(img_id=="selfie2"){
                document.getElementById("result2").innerHTML = '<img id="selfie2" scr="'+data_uri+'"/>;'  
                
                }


                if(img_id=="selfie3"){
                    document.getElementById("result3").innerHTML = '<img id="selfie3" scr="'+data_uri+'"/>;'  
                    
                    }
                })}











