$(document).ready(function (){
    $('#nav-btn').click(function (){
        $('#nav-btn').toggleClass('fa-bars',100)
        $('#nav-btn').toggleClass('fa-times',100)
        $('.menu').toggleClass('active',500)
    })
})