var globalAnnouncment = 

//HERE WRITE ANNOUNCMENT
'<i class="fa-solid fa-bell"></i> New project landed  : <a href="https://lukemech.github.io/ai-radio/" target="_blank">AI Radio</a>'



//HERE WRITE ADDITIONAL ANNOUNCMENTS FOR SPECIFIED FILES
var mainAnnouncment = '',
    aboutAnnouncment = '',
    docsAnnouncment = '';


var fileName = location.href.split("/").slice(-1), text;
var announcment = document.getElementById("announcment")
console.log(fileName[0])
if(fileName[0] == 'docs.html') text = docsAnnouncment
else if (fileName[0] == 'about.html') text = aboutAnnouncment
else if (fileName[0] == 'index.html') text = mainAnnouncment
text ? (globalAnnouncment ? text = text + '<br />' + globalAnnouncment : text = text) : (globalAnnouncment ? text = globalAnnouncment : text = '')

announcment.innerHTML = text