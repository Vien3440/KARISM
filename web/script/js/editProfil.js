$("#validEditProfil").click(function (e) {
//    e.preventDefault();
    $.ajax({
        type: 'POST',
        async: true,
        dataType: 'json',
        url: "update",
        data:
                {
                    "firstname": $("#firstname").val(),
                    "lastname": $("#lastname").val(),
                    "username": $("#username").val(),
                    "phone": $("#phone").val(),
                    "bio": $("#bio").val(),
                    "adress": $("#adress").val(),
                    "genre": $("#genre").val(),
//                    "user_profilPicture": $("#user_profilPicture").attr('src')
                },
        success: function (data, textStatus, jqXHR) {
//            alert(data);
        }
    });
});
//
//
$(document).ready(function(){
$.ajax({
            type: 'GET',
            async: true,
            dataType: 'json',
            url: "get/user",
            data:
                    {
                        "firstname": $("#firstname").val(),
                        "lastname": $("#lastname").val(),
                        "username": $("#username").val(),
                        "phone": $("#phone").val(),
                        "bio": $("#bio").val(),
                        "adress": $("#adress").val(),
                        "genre": $("#genre").val(),
//                        "user_profilPicture": $("#user_profilPicture").attr('src')
                    },
            success: function (data, textStatus, jqXHR) {
                $("#firstname").val(data.firstname);
                $("#lastname").val(data.lastname);
                $("#username").val(data.username);
                $("#phone").val(data.phone);
                $("#bio").val(data.bio);
                $("#adress").val(data.adress);
                $("#genre").val(data.genre);
//                $("#user_profilPicture").attr('src');
//                alert(data.user_profilPicture);
            }
        }
        );
});