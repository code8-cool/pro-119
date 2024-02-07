Webcam.set({
    width:350,
    height:350,
    image_format : 'png',
    png_quality:90
    });
    
    camera = document.getElementById("camera");
    
    Webcam.attach( '#camera');
    
    function take_snapshot()
        {
    
    Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML = '<img id = "captured_image" src="'+data_uri+'">';
    
    });
    
    
        }
    
    console.log('ml5 version:', ml5.version);
    
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/QwVhwo5fR/model.json',modelLoaded);
    
    function speak() {
        var synth = window.speechSynthesis;
        speak_data_1 = " The first guess is " + prediction_1;
        speak_data_2 = " And the second guess is " + prediction_2;
        speak_data_3 = " And the third guess is " + prediction_3;
        var  utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2 + speak_data_3);
        utterThis.rate = 0.68
        synth.speak(utterThis);
        }
    
    function modelLoaded() {
       console.log('Model Loaded!');
    }

    function check() {
  img = document.getElementById('captured_image');
  classifier.classify(img, gotResult);
    }

    
    function gotResult(error, results) {
        if (error) {
            console.error(error);
        } else {

            document.getElementById("result_gesture_name").innerHTML = results[0].label;
            document.getElementById("result_gesture_name2").innerHTML = results[1].label;
            document.getElementById("result_gesture_name3").innerHTML = results[2].label;
            prediction_1 = results[0].label;
            prediction_2 = results[1].label;
            prediction_3 = results[2].label;



           speak(); 



   if (results[0].label == "victory")
    {
        document.getElementById("update_emoji").innerHTML = "&#9996;";  
    }
    
    if(results[0].label == "rock")
    {
        document.getElementById("update_emoji").innerHTML = "&#129304;";  
    }
    
    if(results[0].label == "thumbs up")
    {
        document.getElementById("update_emoji").innerHTML = "&#128077;";  
    }

    if (results[0].label == "high five")
    {
        document.getElementById("update_emoji").innerHTML = "&#128075;";  
    }
    
    if(results[0].label == "gun")
    {
        document.getElementById("update_emoji").innerHTML = "&#128073;";  
    }
    if(results[0].label == "okay")
    {
        document.getElementById("update_emoji").innerHTML = "&#128076;";  
    }






    if (results[1].label == "victory")
    {
        document.getElementById("update_emoji2").innerHTML = "&#9996;";  
    }
    
    if(results[1].label == "rock")
    {
        document.getElementById("update_emoji2").innerHTML = "&#129304;";  
    }
    
    if(results[1].label == "thumbs up")
    {
        document.getElementById("update_emoji2").innerHTML = "&#128077;";  
    }

    if (results[1].label == "high five")
    {
        document.getElementById("update_emoji2").innerHTML = "&#128075;";  
    }
    
    if(results[1].label == "gun")
    {
        document.getElementById("update_emoji2").innerHTML = "&#128073;";  
    }
    if(results[1].label == "okay")
    {
        document.getElementById("update_emoji2").innerHTML = "&#128075;";  
    }





    if (results[2].label == "victory")
    {
        document.getElementById("update_emoji3").innerHTML = "&#9996;";  
    }
    
    if(results[2].label == "rock")
    {
        document.getElementById("update_emoji3").innerHTML = "&#129304;";  
    }
    
    if(results[2].label == "thumbs up")
    {
        document.getElementById("update_emoji3").innerHTML = "&#128077;";  
    }

    if (results[2].label == "high five")
    {
        document.getElementById("update_emoji3").innerHTML = "&#128075;";  
    }
    
    if(results[2].label == "gun")
    {
        document.getElementById("update_emoji3").innerHTML = "&#128073;";  
    }
    if(results[2].label == "okay")
    {
        document.getElementById("update_emoji3").innerHTML = "&#128076;";  
    }
    
    
        }
    }
    
    
    
    
    
    




