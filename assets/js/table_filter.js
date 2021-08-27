function filter_tables(val_to_hide){
         var x = document.getElementById(val_to_hide);
          if (x.style.display === "none") {
            x.style.display = "block";
          } else {
            x.style.display = "none";
          }
      }


function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}

var show = GetURLParameter('show');

if (show === "strategic"){
 filter_tables("engagement")

} else if (show === "engagement") {
filter_tables("strategic")

}
