const paragraph = document.getElementsByTagName('p');
const changebtn = document.getElementById('change');
const unchangebtn = document.getElementById('unchange')
const header = document.getElementById('heading');

changebtn.addEventListener('click', function(){
    for (i=0; i<paragraph.length;i++)
    {
    paragraph[i].style.backgroundColor = "green";
    changebtn.textContent = "Changed"
    changebtn.style.color = "";
    }
})

unchangebtn.addEventListener('click', function(){
    for (j=0; j<paragraph.length; j++)
    {
        paragraph[j].style.backgroundColor = "";
    }
})