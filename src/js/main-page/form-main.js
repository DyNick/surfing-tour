'use strict'

$(document).ready(function() {
    load_json_data('country');

    function load_json_data(id, parent_id) {
        var html_code = '';

        $.getJSON('country_state_city.json', function(data) {
            html_code += '<option value="">Select '+id+'</option>';

            $.each(data, function(key, value) {

                if(id === 'country') {

                    if(value.parent_id === '0')
                        html_code += '<option value="'+value.id+'">'+value.name+'</option>';

                }

                else

                    if(value.parent_id === parent_id)
                        html_code += '<option value="'+value.id+'">'+value.name+'</option>';


            });

            $('#'+id).html(html_code);

        });

    }

    $(document).on('change', '#country', function() {
        var country_id = $(this).val();

        if(country_id !== '')
            load_json_data('state', country_id);

        else
            $('#state').html('<option value=""></option>');
            $('#city').html('<option value=""></option>');

    });

    $(document).on('change', '#state', function() {
        var state_id = $(this).val();

        if(state_id !== '')
            load_json_data('city', state_id);

        else
            $('#city').html('<option value="">Select City</option>');

    });
});


$(function() {

    $('.form-signup').focusout(function() {

        var focusFancy = $(this).val();

        if(focusFancy === '')
            $(this).removeClass('focusFancy');

        else
            $(this).addClass('focusFancy');
            $(this).removeClass('error');

    });
    $('.search-main-form').on('click', function() {

        $('.main-form__block__select').each(function() {
            var $this = $(this);

            if($this.val().length === 0)
                $this.addClass('error');


        })

    });
    $('.main-form__block__select').change(function() {
        var $this = $(this);

        if($this.val() !=='0')
            $this.removeClass('error');

    });

});