'use strict'

/*
var data = [
    {
        "id":"1",
        "employee_name":"Tiger Nixon",
        "employee_salary":"320800",
        "employee_age":"61",
        "profile_image":"default_profile.png"
    },
    {
        "id":"2",
        "employee_name":"Garrett Winters",
        "employee_salary":"434343",
        "employee_age":"63",
        "profile_image":"default_profile.png"
    },
    {
        "id":"3",
        "employee_name":"Ashton Cox",
        "employee_salary":"86000",
        "employee_age":"66",
        "profile_image":"default_profile.png"
    },
    {
        "id":"4",
        "employee_name":"Cedric Kelly",
        "employee_salary":"433060",
        "employee_age":"22",
        "profile_image":"default_profile.png"
    }
];






$('#txt-search').keyup(function(){
    var searchField = $(this).val();
    if(searchField === '')  {
        $('#filter-records').html('');
        return;
    }

    $.getJSON('search-data.json', function(data) {
        var regex = new RegExp(searchField, "i");
        var output = '<div class="search-block">';
        var count = 1;
        $.each(data, function (key, val) {
            if ((val.employee_salary.search(regex) != -1) || (val.employee_name.search(regex) != -1)) {
                output += '<div class="search-result">';
                output += '<div class="search-result__image"><img class="search-result__image__main" src="' + val.profile_image + '" alt="' + val.employee_name + '" /></div>';
                output += '<div class="search-result__description">';
                output += '<h5>' + val.employee_name + '</h5>';
                output += '<p>' + val.employee_salary + '</p>';
                output += '<a href="#">more detail</a>';
                output += '</div>';
                output += '</div>';
                if (count % 2 == 0) {
                    output += '</div><div class="search-result">'
                }
                count++;
            }
        });
        output += '</div>';
        $('#filter-records').html(output);

    });

});
*/
/*

var searchVal = '';

$(function(){
    // if text box value is not null, then darken reset icon
    $(".slinput input").keyup(function(){
        var val = $(this).val();
        if(val.length > 0) {
            $(this).parent().find(".right-icon").css('color','#555');
        } else {
            $(this).parent().find(".right-icon").css('color','#ccc');
        }
    });

    // if user click on reset icon, clear text field
    $(".slinput .right-icon").click(function(){
        $(this).parent().find("input").val('');
        $(this).css('color','#ccc');
        loadData(userData);
    });

    loadData(userData);
});

// Displaying Information to Users
function loadData(data) {
    var htmlData = '';
    $.each(data, function(index, val){
        htmlData += '<div class="media user">'+
            '  <div class="media-left">'+
            '    <a href="#">'+
            '      <img class="media-object" src="'+val.pic+'" alt="...">'+
            '    </a>'+
            '  </div>'+
            '  <div class="media-body">'+
            '    <h4 class="media-heading">'+val.name+'</h4>'+
            '    '+val.place+
            '  </div>'+
            '</div>';
    });
    $("#users").html(htmlData);
}

// Search users data based input search keyword
function searchUsers() {
    var val = $("#searchInput").val();
    if(val == searchVal) {
        return;
    } else {
        searchVal = val;
        var searchResults = {};
        searchResults = [];
        $.each(userData, function(i, v) {
            if (v.name.toLowerCase().indexOf(val) != -1) {
                searchResults.push(v);
            }
        });
        loadData(searchResults);
    }
}

var userData = [
    {"id":"1", "name":"Srinivas Dasari", "place":"Chennai", "pic":"https://lh3.googleusercontent.com/-nBqk0jHahk8/VnL9EvT6IPI/AAAAAAAADdU/4JB3A-1zjTM/s160-Ic42/srinivas_dasari.jpg"},
    {"id":"2", "name":"Srinivas Tamada", "place":"Atlanta", "pic":"https://lh3.googleusercontent.com/-lkebnHGHGcs/VnL9E4nO_FI/AAAAAAAADdY/z2IWGONMG8E/s160-Ic42/srinivas_tamada.jpg"},
    {"id":"3", "name":"Sri Harsha", "place":"Hyderabad", "pic":"https://lh3.googleusercontent.com/-x69ytvh8GkA/VnL9Dqye1jI/AAAAAAAADdM/pBDbJRX8Vxo/s160-Ic42/harsha.jpg"},
    {"id":"4", "name":"Lokesh Raghuram", "place":"Chennai", "pic":"https://lh3.googleusercontent.com/-7XM-i20j7CQ/VnL9EZnDLYI/AAAAAAAADdQ/kR99DUgRhak/s160-Ic42/lokesh.jpg"},
    {"id":"5", "name":"Bala Ganesh", "place":"Chennai", "pic":"https://lh3.googleusercontent.com/-snzuBGu0CJE/VnL9DksYVSI/AAAAAAAADdA/7Y0EvQbWc7I/s160-Ic42/ganesh.jpg"},
    {"id":"6", "name":"Arun kumar", "place":"Chennai", "pic":"https://lh3.googleusercontent.com/-HiQ4bqPp-fk/VnL9Dqo7u0I/AAAAAAAADdc/NqhwXqgb4Ac/s160-Ic42/arun.jpg"}
];*/
