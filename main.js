$(".A Third Eye for Blind").click(function (e) {
    e.preventDefault();
    $("aboutproject").text(
        "Third eye for people who are blind is an innovation which helps the blind people to navigate with speed and confidence by detecting the nearby obstacles using the help of ultrasonic waves and notify them with buzzer sound or vibration. They only need to wear this device as a band or cloth."
        );
    $(".all_projects div").css("background", "transparent");
    $(".A Third Eye for Blind").css("background-color", "lime");
});

$(".A Wearable Device for Emotional Stress level Monitoring and Intimation Through Mobile Application").click(function (e){
    e.preventDefault();
    $("aboutproject").text("This device can monitor the stress level with an continuous manner and the data will be shared on from cloud to mobile application. The stress rate will be cross-over the threshold limit, the message composition system will be enable to generate an message and forward your counselling person for making call to relive stress with an counselling.");
    $(".all_projects div").css("background", "transparent");
    $(".A Wearable Device for Emotional Stress level Monitoring and Intimation Through Mobile Application").css("background-color", "lime");
});