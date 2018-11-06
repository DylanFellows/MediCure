$(document).ready(function(){

    $('#homeBtn').on('click', function(){
        window.location.href="http://localhost:8080/"
    });

    var id = '';
    var prof_firstName = '';
    var prof_lastName = '';
    var firstName = '';
    var lastName = '';
    var profession = '';
    var facility = '';
    var languages = '';
    var fac_phone = '';
    var address = '';
    var gender = '';

    $('#btnEdit').on('click', function(){
        $('.editProvidersDiv').show();
        $('#btnEdit').hide();
    });

    $(document).on('click', '.blah', function () {
        if (this.childNodes[5].childNodes[1].style.display === 'none' && this.childNodes[3].childNodes[1].style.display === 'none') {
            this.childNodes[5].childNodes[1].style.display = 'block';
            this.childNodes[3].childNodes[1].style.display = 'block';
        } else {
            this.childNodes[5].childNodes[1].style.display = 'none';
            this.childNodes[3].childNodes[1].style.display = 'none';
        }
    });

    $('.btnUpdateCls').on('click', function () {
        alert('Getting ready to do Ajax call.');
        id = $('#id').val();
        firstName = $('#firstName').val();
        lastName = $('#lastName').val();
        profession = $('#profession').val();
        facility = $('#facility').val();
        languages = $('#languages').val();
        fac_phone = $('#fac_phone').val();
        address = $('#addressId').val();
        gender = $('#genderId').val();
        $.when(ajaxUpdateProfessional()).done(function (a1) {
            console.log("Inside the .when GET function.")
            window.location.href="http://localhost:8080/AdminChanges";
        });
    });

    function ajaxUpdateProfessional() {;
        console.log('Inside of Ajax.')
        return $.ajax({
            type: "PUT",
            url: `/api/UpdateProfessional/${id}&${firstName}&${lastName}&${profession}&${facility}&${languages}&${fac_phone}&${address}&${gender}`,
            datatype: "json",
            success: updateProfessional
        });
    }

    const updateProfessional = function(){
        console.log('Done updating professional.');
    };

    $('.btnCreateCls').on('click', function(){
        alert('Getting ready to post data to the DB.')
        prof_firstName = $('#firstName').val();
        prof_lastName = $('#lastName').val();
        profession = $('#profession').val();
        facility = $('#facility').val();
        languages = $('#languages').val();
        fac_phone = $('#fac_phone').val();
        address = $('#addressId').val();
        gender = $('#genderId').val();
        $.when(ajaxPostProfessional()).done(function(a1){
            console.log('Inside the .when POST function.')
            window.location.href="http://localhost:8080/AdminChanges";
        });
    });

    function ajaxPostProfessional(){
        console.log('Inside of POST AJAX.');
        return $.ajax({
            type: "POST",
            url: `/api/PostProfessional/${prof_firstName}&${prof_lastName}&${profession}&${facility}&${languages}&${fac_phone}&${address}&${gender}`,
            datatype: "json",
            success: postProfessional
        });
    };

    function postProfessional(){
        console.log('Done posting professional.')
    }

    $(".btnDeleteCls").on('click', function(){
        alert('Getting ready to delete from DB.');
        window.location.href="http://localhost:8080/AdminChanges";
        id= $('#id').val();
        ajaxDeleteProfessional()
    });

    function ajaxDeleteProfessional(){;
        console.log("Inside of Delete Ajax.")
        return $.ajax({
            type: "DELETE",
            url: `/api/DeleteProfessional/${id}`,
            datatype: "json",
            success: deleteProfessional,
        });
    };
    
    const deleteProfessional = function(){
        console.log('Done deleting professional.');
    }

})