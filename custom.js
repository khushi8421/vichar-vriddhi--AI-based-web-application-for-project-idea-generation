
$(document).ready(function(){
    $('#btn-search').click(function(){
        if ($('#img-search').is(':visible')) {
            $('#img-search').hide();
            $('#recommendation').show();
        } else {
            $('#img-search').show();
            $('#recommendation').hide();
        }
    });
});
