$(document).ready(function(){

    $('#homeBtn').on('click', function(){
        window.location.href="https://ancient-dawn-20880.herokuapp.com/"
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
    var healthcare = '';

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

    $('.btnCancel').on('click', function(){
            $('.btnCreateCls').show();
            $('.btnUpdateCls').show();
            $('.btnDeleteCls').show();
            $('.btnPostCls').hide();
            $('.btnSaveCls').hide();
            $('.btnRemoveCls').hide();
            $('.editProvidersDiv').hide();
            $('#btnEdit').show();
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
        $('#healthcareId').val('');
    })

    $(document).on('click', '.blah', function () {
        if (this.childNodes[5].childNodes[1].style.display === 'none' && this.childNodes[3].childNodes[1].style.display === 'none' && this.childNodes[7].childNodes[1].style.display === 'none') {
            this.childNodes[5].childNodes[1].style.display = 'block';
            this.childNodes[3].childNodes[1].style.display = 'block';
            this.childNodes[7].childNodes[1].style.display = 'block';
        } else {
            this.childNodes[5].childNodes[1].style.display = 'none';
            this.childNodes[3].childNodes[1].style.display = 'none';
            this.childNodes[7].childNodes[1].style.display = 'none';
        }
    });

    $('.btnSaveCls').on('click', function () {
        id = $('#id').val();
        firstName = $('#firstName').val();
        lastName = $('#lastName').val();
        profession = $('#profession').val();
        facility = $('#facility').val();
        languages = $('#languages').val();
        fac_phone = $('#fac_phone').val();
        address = $('#addressId').val();
        gender = $('#genderId').val();
        healthcare = $('#healthcareId').val();
        $.when(ajaxUpdateProfessional()).done(function (a1) {
            console.log("Inside the .when GET function.")
            window.location.href="https://ancient-dawn-20880.herokuapp.com/AdminChanges";
        });
    });

    function ajaxUpdateProfessional() {;
        return $.ajax({
            type: "PUT",
            url: `/api/UpdateProfessional/${id}&${firstName}&${lastName}&${profession}&${facility}&${languages}&${fac_phone}&${address}&${gender}&${healthcare}`,
            datatype: "json",
            success: updateProfessional
        });
    }

    const updateProfessional = function(){
        console.log('Done updating professional.');
    };

    $('.btnPostCls').on('click', function(){
        prof_firstName = $('#firstName').val();
        prof_lastName = $('#lastName').val();
        profession = $('#profession').val();
        facility = $('#facility').val();
        languages = $('#languages').val();
        fac_phone = $('#fac_phone').val();
        address = $('#addressId').val();
        gender = $('#genderId').val();
        healthcare = $('#healthcareId').val();
        $.when(ajaxPostProfessional()).done(function(a1){
            console.log('Inside the .when POST function.')
            window.location.href="https://ancient-dawn-20880.herokuapp.com/AdminChanges";
        });
    });

    function ajaxPostProfessional(){
        console.log('Inside of POST AJAX.');
        return $.ajax({
            type: "POST",
            url: `/api/PostProfessional/${prof_firstName}&${prof_lastName}&${profession}&${facility}&${languages}&${fac_phone}&${address}&${gender}&${healthcare}`,
            datatype: "json",
            success: postProfessional
        });
    };

    function postProfessional(){
        console.log('Done posting professional.')
    }

    $(".btnRemoveCls").on('click', function(){
        alert('Getting ready to delete from DB.');
        window.location.href="https://ancient-dawn-20880.herokuapp.com/AdminChanges";
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