jQuery(document).ready(function($){

    var item_core_fields = [ 'write', 'bonsai', 'read', 'work', 'gist', 'project', 'resource', 'general' ];

    function activate_field( target ){
        $( target ).data('data-active', 'true');
        $( target ).attr('data-active', 'true');
    }

    function deactivate_field( target ){
        $( target ).data('data-active', 'false');
        $( target ).attr('data-active', 'false');
    }

    function reset_field( target, datatype){
        if( 'select' == datatype ){
            $( target +' select' ).prop('selectedIndex', 0);
        } else {
            $( target +' input' ).val('');
        }
    }

    $('form select').change( function(){

        var field_value      = $(this).val();
        var field_wrapper    = $(this).parent().parent();
        var field_data_level = $( field_wrapper ).attr('data-level');
        var field_wrapper_id = $( field_wrapper ).attr('id');

        // deactivate and clear
        $('[data-active="true"]')
        .filter(
            function( index ){
                var this_data_level      = $(this).attr('data-level');
                var this_field_id        = $(this).attr('id');
                var this_field_data_type = $(this).attr('data-type');
//                 console.log( 'item in foreach data level '+ this_data_level+', changed field data level '+ field_data_level  );
//                 console.log( 'item in foreach level ( ID '+ this_field_id +' ) >= than field data level ( ID '+ field_wrapper_id +' ):');
//                 console.log( this_data_level >= field_data_level );
// if not self
// if lesser value than select that was changed
// if select that was changed is 3 or lesser
// or if top level select that was changed
                if ( this_field_id !== field_wrapper_id && this_data_level >= field_data_level && 2 <= field_data_level || 1 == field_data_level ){
                    reset_field( '#'+ this_field_id, this_field_data_type );
                    deactivate_field( '#'+ this_field_id );
                }
            }
        );

        // activate targets of changed select
        activate_field( '.item-' + field_value );

        // maybe activate item core fields for changed select
        if( -1 !== $.inArray( field_value, item_core_fields ) ){
            activate_field( '.item-core' );
        }

    });

});