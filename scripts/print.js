function click_toprint() {
  var summary = document.getElementById("cv_print").innerHTML;
  var markup = '<div style="display:none;" id="cv_print_element">' + summary + "</div>";
  function newWindow(id) {
    var html = jQuery(id).html();
    var win = window.open("", "_blank", "resizable,height=1125,width=1500");
    var crit_style = '<link rel="stylesheet" type="text/css" href="/styles/print-window.css" />';
    var open_style = '<link rel="stylesheet" type="text/css" href="/styles/opensans.css" />';
    var bitt_style = '<link rel="stylesheet" type="text/css" href="/styles/bitter.css" />';
    
    var fullHTML = '<!DOCTYPE html>' +
      '<html>' +
      '<head>' +
      '<title>James Valeii CV</title>' +
      '<meta charset="utf-8">' +
      crit_style + open_style + bitt_style +
      '</head>' +
      '<body>' + html + 
      '<script>setTimeout(function(){window.print();}, 100);<\/script>' +
      '</body>' +
      '</html>';
    
    win.document.open();
    win.document.write(fullHTML);
    win.document.close();
  }
  jQuery("body").append(markup);
  newWindow("#cv_print_element");
}