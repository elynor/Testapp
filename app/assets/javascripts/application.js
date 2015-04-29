// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.remotipart
//= require turbolinks
//= require bootstrap
//= require datatables.jquery
//= require datatables
//= require_tree .

$(document).ready(function(){
    updateDatatables();
});

toggleAlert = function(){
    $(".alert_placeholder").fadeIn(800, function(){ $(this).fadeOut() });
};

updateDatatables = function(){
    $('.users_list').DataTable({
        "order": [[ 1, "asc" ]],
        "paging":   false,
        "info":     false,
        "columnDefs": [
            {
                "targets": [ 0 ],
                "searchable": false,
                "orderable": false
            },
            {
                "targets": [ 3 ],
                "searchable": false,
                "orderable": false
            },
            {
                "targets": [ 4 ],
                "searchable": false,
                "orderable": false
            }]
    });
};