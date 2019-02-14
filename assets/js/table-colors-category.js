var lookup = Object.create( null );

Array.prototype.forEach.call( document.querySelectorAll('table td:nth-child(2)'), function( td ) {
    var id = td.textContent.trim();

    if( typeof lookup[ id ] === 'undefined' ) {
        lookup[ id ] = [ td ];
    }
    else {
        lookup[ id ].push( td );
    }
});
var colors = ['#808080', '#ffffff', '#e6e6e6', '#D3D3D3', '#cccccc','#f0f5f5'];
var i = 0;
Object.keys( lookup ).forEach(function( name ) {
    if( lookup[ name ] && lookup[ name ].length ) {
  var cc = colors[i];

        lookup[ name ].forEach(function( td ) {

            tr = td.closest('tr');
            tr.style.backgroundColor = cc;
        });
        i++;
    }

});

