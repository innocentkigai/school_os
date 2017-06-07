$(document).ready(function(){
    $("#first_name").on("blur",function(){
        if(!$(this).val().match("^[a-zA-Z]")){
            $("#first_name").addClass("has-success");
        }
    });
    
    $("#finish").on("click",function(){
        
        });
    
});