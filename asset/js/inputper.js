$(document).ready(function(){
    $('#submit').click(function(){
        username=$('#username').val()
      
        $.ajax({
            url:'inputper/tambah',
            method:'POST',
            data:{
                pusername:$('#username').val(),
                ppassword:$('#password').val(), 
                pnama:$('#nama').val(),
                pidDesa:$('#id_desa').val(),
                plevel:$('#level').val(),
                pNoHp:$('#no_hp').val() 
            },
            success:function(say){
                alert(say)
               
            }
       });
      
    });
});