// Navbar
var links=document.querySelectorAll(".nav-link");
$(document).on('click','.nav-link', function(event) {
    event.preventDefault();
    clickedLink=this.getAttribute('href')
    console.log(clickedLink);
    for(let i=0;i<links.length;i++){
        var className=links[i];
        $(className).removeClass('active');
    }
    $("#toggleButton").addClass("collapsed");
    $("#navbarSupportedContent").removeClass("show");
    $target=$(event.target);
    $target.addClass('active');
});
$(document).on('click','.search-btn', function(event){
    event.preventDefault();
    $("#toggleButton").addClass("collapsed");
    $("#navbarSupportedContent").removeClass("show");
});