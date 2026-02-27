window.onload=function(){
    const button=document.getElementById("mybutton");
    const text=document.getElementById("Testing");

    button.addEventListener("Click",function()
    {
        text.innerText="Button Function"
        text.style.color="green";

    });
}