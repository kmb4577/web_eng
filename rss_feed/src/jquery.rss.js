/* <![CDATA[ */
jQuery(document).ready(function(){
  jQuery.noConflict();
  var jq = jQuery;
  jq.ajax({
    url: '/rss',
    type: 'GET',
    dataType: 'xml',
    error: function (xhr, status, e) {
    },
    success: function(feed){
        console.log("SUCCESS IN jquery.rss.js");
    //   var html  = '';
    //   var item  = null;
    //   var items = ;

    //   var title, text, link = null;

    //   jq(feed).find('item').each(function(i){

    //     item = $(this);

    //     title = jq(item).find('title').text();
    //     text  = jq(item).find('description').text();
    //     link  = jq(item).find('guid').text();

    //     html += '<li><em>' + title + '</em><br />';
    //     html += text;
    //     if (html.substr(-1, 1) != ' ') {
    //         html += '&nbsp;';
    //     }
    //     html += '<a href="' + link + '" class="newsmore">Read more</a>';
    //     html += '</li>';

    //     if (i == 2) {
    //         break
    //     }

    //   });

    //   jq('#blogposts').append(html);
    }
  });
});
/* ]]> */