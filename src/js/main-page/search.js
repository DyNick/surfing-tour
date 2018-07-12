'use strict'

$('#txt-search').keyup(function(){
    var searchField = $(this).val();
    if(searchField === '')  {
        $('#filter-records').html('');
        return;
    }

    $.getJSON('search-data.json', function(data) {
        var regex = new RegExp(searchField, "i");
        var output = '<div class="search-block">';
        //var count = 1;
        $.each(data, function (key, val) {
            if ((val.tour.search(regex) != -1) || (val.name.search(regex) != -1) ) {
                output += '<div class="search-result">';
                output += '<div class="search-result__image"><img class="search-result__image__main" src="' + val.tour_image + '" alt="' + val.employee_name + '" /></div>';
                output += '<div class="search-result__description">';
                output += '<h5 class="search-result__title">' + val.name + '</h5>';
                output += '<p class="search-result__text">' + val.tour_description + '</p>';
                output += '<a href="#" class="search-result__link">more details</a>';
                output += '</div>';
                output += '</div>';

           /*     if (count % 2 == 0) {
                    output += '</div><div class="search-block">'
                }
                count++;*/
            }
        });
        output += '</div>';
        $('#filter-records').html(output);

    });
});