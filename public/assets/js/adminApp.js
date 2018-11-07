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

    $('.phone').usPhoneFormat({
        format: 'xxx-xxx-xxxx',
    })

    $('.btnCreateCls').on('click', function(){
        $('.btnPostCls').show();
        $('.btnUpdateCls').hide();
        $('.btnDeleteCls').hide();
        $('.btnCreateCls').hide();
    })

    $('.btnUpdateCls').on('click', function(){
        $('.btnSaveCls').show();
        $('.btnUpdateCls').hide();
        $('.btnDeleteCls').hide();
        $('.btnCreateCls').hide();
    })

    $('.btnDeleteCls').on('click', function(){
        $('.btnRemoveCls').show();
        $('.btnUpdateCls').hide();
        $('.btnDeleteCls').hide();
        $('.btnCreateCls').hide();
    })

    $('.btnCancelCls').on('click', function(){
        if($('.btnCreateCls').style.display==="none"||$('.btnDeleteCls').style.display==='none'||$('.btnUpdateCls').style.display==="none"){
            $('.btnCreateCls').show();
            $('.btnUpdateCls').show();
            $('.btnDeleteCls').show();
            $('.btnPostCls').hide();
            $('.btnSaveCls').hide();
            $('.btnRemoveCls').hide();
        }else if($('.btnCreateCls').style.display==="show"&&$('.btnUpdateCls').style.display==="show"&&$('btnDeleteCls').style.display==="show"){
            $('.editProvidersDiv').hide();
            $('#btnEdit').show();
        }
        
    })

    $('.btnClearCls').on('click', function(){
        $('#id').val('');
        $('#firstName').val('');
        $('#lastName').val('');
        $('#profession').val('');
        $('#facility').val('');
        $('#languages').val('');
        $('#fac_phone').val('');
        $('#addressId').val('');
        $('#genderId').val('');
    })

    $(document).on('click', '.blah', function () {
        if (this.childNodes[5].childNodes[1].style.display === 'none' && this.childNodes[3].childNodes[1].style.display === 'none') {
            this.childNodes[5].childNodes[1].style.display = 'block';
            this.childNodes[3].childNodes[1].style.display = 'block';
        } else {
            this.childNodes[5].childNodes[1].style.display = 'none';
            this.childNodes[3].childNodes[1].style.display = 'none';
        }
    });

    $('.btnSaveCls').on('click', function () {
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

    $('.btnPostCls').on('click', function(){
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

    $(".btnRemoveCls").on('click', function(){
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