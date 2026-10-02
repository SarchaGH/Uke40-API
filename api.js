
//api
alert("Welcome!");
const apiKey = "YrniSrqhbngTI300whuwtWkx4bfSzEOrDrWGTEDu"; //api key

// Function to toggle between Dark and Light mode
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
}

fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
.then(response => {
if (!response.ok) {
throw new Error("Failed to load data!");//error
}
return response.json();
})
.then(data => {
console.log(data);//api console log
document.getElementById("photo").src = data.url;
})
//error
.catch(error => {
console.log(error);
document.getElementById("photo").src ="image/error.png";
});

//##########################################################################################################################//

fetch("https://science.nasa.gov/wp-json/wp/v2/apod-basic")
.then(response => {
if (!response.ok) {
throw new Error("Failed to load data!");
}
return response.json();
})
.then(data => {
console.log("NASA API 2");
console.log(data);
const apod = data[1]; // chage here
document.getElementById("title2").textContent =apod.title;
document.getElementById("photo2").src =apod.hdurl;
document.getElementById("text2").innerHTML =apod.explanation;
})
.catch(error => {
document.getElementById("text2").innerHTML ="Failed to load data!";
document.getElementById("text2").style.color ="red";
document.getElementById("text2").style.textAlign ="center";
document.getElementById("photo2").src ="image/error.png";
console.log(error);
});


fetch("https://science.nasa.gov/wp-json/wp/v2/apod-basic")
.then(response => {
if (!response.ok) {
throw new Error("Failed to load data!");
}
return response.json();
})
.then(data => {
const apod = data[2];
document.getElementById("title3").textContent =apod.title;
document.getElementById("photo3").src =apod.hdurl;
document.getElementById("text3").innerHTML =apod.explanation;
})
.catch(error => {
document.getElementById("text3").innerHTML ="Failed to load data!";
document.getElementById("text3").style.color ="red";
document.getElementById("text3").style.textAlign ="center";
document.getElementById("photo3").src ="image/error.png";
console.log(error);
});


fetch("https://science.nasa.gov/wp-json/wp/v2/apod-basic")
.then(response => {
if (!response.ok) {
throw new Error("Failed to load data!");
}
return response.json();
})
.then(data => {
const apod = data[3];
document.getElementById("title4").textContent =apod.title;
document.getElementById("photo4").src =apod.hdurl;
document.getElementById("text4").innerHTML =apod.explanation;
})
.catch(error => {
document.getElementById("text4").innerHTML ="Failed to load data!";
document.getElementById("text4").style.color ="red";
document.getElementById("text4").style.textAlign ="center";
document.getElementById("photo4").src ="image/error.png";
console.log(error);
});

// problemmm
fetch("https://science.nasa.gov/wp-json/wp/v2/apod-basic")
.then(response => {
if (!response.ok) {
throw new Error("Failed to load data!");
}
return response.json();
})
.then(data => {
const apod = data[6];
document.getElementById("title5").textContent =apod.title;
document.getElementById("photo5").src =apod.hdurl;
document.getElementById("text5").innerHTML =apod.explanation;
})
.catch(error => {
document.getElementById("text5").innerHTML ="Failed to load data!";
document.getElementById("text5").style.color ="red";
document.getElementById("text5").style.textAlign ="center";
document.getElementById("photo5").src ="image/error.png";
console.log(error);
});


fetch("https://science.nasa.gov/wp-json/wp/v2/apod-basic")
.then(response => {
if (!response.ok) {
throw new Error("Failed to load data!");
}
return response.json();
})
.then(data => {
const apod = data[5];
document.getElementById("title6").textContent =apod.title;
document.getElementById("photo6").src =apod.hdurl;
document.getElementById("text6").innerHTML =apod.explanation;
})
.catch(error => {
document.getElementById("text6").innerHTML ="Failed to load data!";
document.getElementById("text6").style.color ="red";
document.getElementById("text6").style.textAlign ="center";
document.getElementById("photo6").src ="image/error.png";
console.log(error);
});

fetch("https://science.nasa.gov/wp-json/wp/v2/apod-basic")
.then(response => {
if (!response.ok) {
throw new Error("Failed to load data!");
}
return response.json();
})
.then(data => {
const apod = data[7];
document.getElementById("title7").textContent =apod.title;
document.getElementById("photo7").src =apod.hdurl;
document.getElementById("text7").innerHTML =apod.explanation;
})
.catch(error => {
document.getElementById("text7").innerHTML ="Failed to load data!";
document.getElementById("text7").style.color ="red";
document.getElementById("text7").style.textAlign ="center";
document.getElementById("photo7").src ="image/error.png";
console.log(error);
});

fetch("https://science.nasa.gov/wp-json/wp/v2/apod-basic")
.then(response => {
if (!response.ok) {
throw new Error("Failed to load data!");
}
return response.json();
})
.then(data => {
const apod = data[8];
document.getElementById("title8").textContent =apod.title;
document.getElementById("photo8").src =apod.hdurl;
document.getElementById("text8").innerHTML =apod.explanation;
})
.catch(error => {
document.getElementById("text8").innerHTML ="Failed to load data!";
document.getElementById("text8").style.color ="red";
document.getElementById("text8").style.textAlign ="center";
document.getElementById("photo8").src ="image/error.png";
console.log(error);
});

fetch("https://science.nasa.gov/wp-json/wp/v2/apod-basic")
.then(response => {
if (!response.ok) {
throw new Error("Failed to load data!");
}
return response.json();
})
.then(data => {
const apod = data[9];
document.getElementById("title9").textContent =apod.title;
document.getElementById("photo9").src =apod.hdurl;
document.getElementById("text9").innerHTML =apod.explanation;
})
.catch(error => {
document.getElementById("text9").innerHTML ="Failed to load data!";
document.getElementById("text9").style.color ="red";
document.getElementById("text9").style.textAlign ="center";
document.getElementById("photo9").src ="image/error.png";
console.log(error);
});

fetch("https://science.nasa.gov/wp-json/wp/v2/apod-basic")
.then(response => {
if (!response.ok) {
throw new Error("Failed to load data!");
}
return response.json();
})
.then(data => {
const apod = data[10];
document.getElementById("title10").textContent =apod.title;
document.getElementById("photo10").src =apod.hdurl;
document.getElementById("text10").innerHTML =apod.explanation;
})
.catch(error => {
document.getElementById("text10").innerHTML ="Failed to load data!";
document.getElementById("text10").style.color ="red";
document.getElementById("text10").style.textAlign ="center";
document.getElementById("photo10").src ="image/error.png";
console.log(error);
});

fetch("https://science.nasa.gov/wp-json/wp/v2/apod-basic")
.then(response => {
if (!response.ok) {
throw new Error("Failed to load data!");
}
return response.json();
})
.then(data => {
const apod = data[11];
document.getElementById("title11").textContent =apod.title;
document.getElementById("photo11").src =apod.hdurl;
document.getElementById("text11").innerHTML =apod.explanation;
})
.catch(error => {
document.getElementById("text11").innerHTML ="Failed to load data!";
document.getElementById("text11").style.color ="red";
document.getElementById("text11").style.textAlign ="center";
document.getElementById("photo11").src ="image/error.png";
console.log(error);
});

fetch("https://science.nasa.gov/wp-json/wp/v2/apod-basic")
.then(response => {
if (!response.ok) {
throw new Error("Failed to load data!");
}
return response.json();
})
.then(data => {
const apod = data[12];
document.getElementById("title12").textContent =apod.title;
document.getElementById("photo12").src =apod.hdurl;
document.getElementById("text12").innerHTML =apod.explanation;
})
.catch(error => {
document.getElementById("text12").innerHTML ="Failed to load data!";
document.getElementById("text12").style.color ="red";
document.getElementById("text12").style.textAlign ="center";
document.getElementById("photo12").src ="image/error.png";
console.log(error);
});

fetch("https://science.nasa.gov/wp-json/wp/v2/apod-basic")
.then(response => {
if (!response.ok) {
throw new Error("Failed to load data!");
}
return response.json();
})
.then(data => {
const apod = data[13];
document.getElementById("title13").textContent =apod.title;
document.getElementById("photo13").src =apod.hdurl;
document.getElementById("text13").innerHTML =apod.explanation;
})
.catch(error => {
document.getElementById("text13").innerHTML ="Failed to load data!";
document.getElementById("text13").style.color ="red";
document.getElementById("text13").style.textAlign ="center";
document.getElementById("photo13").src ="image/error.png";
console.log(error);
});

