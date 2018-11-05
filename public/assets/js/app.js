$(document).ready(function () {

    $('.profDiv').hide();

    var id = '';
    var firstName = '';
    var lastName = '';
    var profession = '';
    var facility = '';
    var languages = '';
    var fac_phone = '';
    var professionalHtml = '';
    var professionalFound;

    $('#home').on('click', function () {
        $('.infoDiv').show();
        $('.profDiv').hide();
    })

    $('#contactLink').on('click', function () {
        $('.infoDiv').show();
        $('.profDiv').hide();
    })

    $('#aboutLink').on('click', function () {
        $('.infoDiv').show();
        $('.profDiv').hide();
    })


    $('#professionalView').on('click', function () {
        $('.infoDiv').hide();
        $('.profDiv').show();
    })



    $('.btnUpdateCls').on('click', function () {
        alert('Getting ready to do Ajax call.');
        id = $('#id').val();
        firstName = $('#firstName').val();
        lastName = $('#lastName').val();
        profession = $('#profession').val();
        facility = $('#facility').val();
        languages = $('#languages').val();
        fac_phone = $('#fac_phone').val();
        $.when(ajaxUpdateProfessional()).done(function (a1) {
            window.location.href="http://localhost:8080/";
        });
    });

    function ajaxUpdateProfessional() {;
        console.log('Inside of Ajax.')
        return $.ajax({
            type: "PUT",
            url: `/api/UpdateProfessional/${id}&${firstName}&${lastName}&${profession}&${facility}&${languages}&${fac_phone}`,
            datatype: "json",
            success: updateProfessional,
        });
    }

    const updateProfessional = function(){
        console.log('Done updating professional.');
    };

});