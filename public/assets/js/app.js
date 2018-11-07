$(document).ready(function () {

    $('.profDiv').hide();

    $('#home').on('click', function () {
        $('.infoDiv').show();
        $('.profDiv').hide();
    })

    $('#contactLink').on('click', function () {
        $('.infoDiv').show();
        $('.profDiv').hide();
        window.location.href = "http://localhost:8080/#!#contact"
    })

    $('#aboutLink').on('click', function () {
        $('.infoDiv').show();
        $('.profDiv').hide();
        window.location.href = "http://localhost:8080/#!#about";
    })

    $('#professionalView').on('click', function () {
        $('.infoDiv').hide();
        $('.profDiv').show();
    })

    $('.professionalView').on('click', function () {
        $('.infoDiv').hide();
        $('.profDiv').show();
    })

    $('#adminPage').on('click', function () {
        window.location.href = 'http://localhost:8080/AdminChanges';
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
});