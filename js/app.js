
document.getElementById("calculate-btn").addEventListener("click", function(){
    var feet = document.getElementById("feet").value;
    var inch = document.getElementById("inch").value;
    var weight = document.getElementById("kg").value;

feet = feet * 0.305;
inch = inch * 0.0254;
var height = feet + inch;
height = height * height
var bmi = weight / height;
bmi = bmi.toFixed(2);
    if ( feet == " ") {
        alert("দয়া করে আপনার উচ্চতা কত ফুট তা প্রদান করুন");
    } else if ( inch == " ") {
        alert("দয়া করে আপনার উচ্চতা কত ইঞ্চি তা প্রদান করুন");
    } else if ( weight == "") {
        alert("দয়া করে আপনার ওজন কত কেজি তা প্রদান করুন");
    }
    if (bmi < 18) {
        document.getElementById("result").innerHTML = "আপনার ওজন অনেক কম, নিজের যত্ন নিন" + " " + "আপনার স্কোর" + bmi;
        document.getElementById("calculate-section").style.display = "none";
    } else if (bmi > 18 && bmi <=24.9 ) {
        document.getElementById("result").innerHTML = "আপনার ওজন ঠিকঠাক, আপনি খুব সচেতন ব্যক্তি" + " " + "আপনার স্কোর" + bmi;
        document.getElementById("calculate-section").style.display = "none";
    }else if (bmi > 24.9 && bmi <=29.9 ) {
        document.getElementById("result").innerHTML = "আপনার ওজন একটু বেড়ে গেছে, একটু কন্ট্রোল করা শুরু করে দেন" + " " + "আপনার স্কোর" + bmi;
        document.getElementById("calculate-section").style.display = "none";
    }else if (bmi > 29.9 && bmi <=34.9 ) {
        document.getElementById("result").innerHTML = "আপনার ওজন একটু বেশি, কন্ট্রোল করতে হবে" + " " + "আপনার স্কোর" + bmi;
        document.getElementById("calculate-section").style.display = "none";
    }else if (bmi > 34.9 && bmi <=39.9 ) {
        document.getElementById("result").innerHTML = "আপনার ওজন বেশি, খাবার কন্ট্রোলের পাশাপাশি নিয়মিত ব্যায়াম করুন" + " " + "আপনার স্কোর" + bmi;
        document.getElementById("calculate-section").style.display = "none";
    }else if (bmi => 40 ) {
        document.getElementById("result").innerHTML = "আপনার ওজন খুবই বেশি, খাবার গ্রহণে খুবই সতর্ক হতে হবে, পাশাপাশি নিয়মিত ব্যায়াম করতে হবে" + " " + "আপনার স্কোর" + bmi;
        document.getElementById("calculate-section").style.display = "none";
    }
})