//STEP 1 Wrap in ready method
$(document).ready(function(){

  function bodycamapp(){

    //STEP 2 create a reference for your data
    var data = incidents;
    console.log(data);

    //STEP 3 sort data in meaningful order
    var chronData = sortData(data);
    console.log(chronData);

    //STEP 4 add formatted data to page
    addToPage(chronData);
    
  }

  function sortData(data){

    var chronOrder = _.sortBy(data,'date');
    return chronOrder;

  }

  function addToPage(data){

    //STEP 5 define template
    var itemTemplate = _.template("<li class='incident incident-<%= order %>'><div class='yt-info'><h6 class='kicker'><%= date %> | <%= city %>, <%= state %></h6><h2><%= headline %></h2><time><%= length %></time></div><div class='yt-video'><iframe width='400' height='225' src='https://www.youtube.com/embed/<%= youtube_id %>' frameborder='0' allowfullscreen></iframe></div></li>");

    //STEP 6 loop through data
    _.each(data,function(item,index){

        //STEP 7 add order property
        item.order = index + 1;

        //STEP 8 pass object to incident template
        var listItem = itemTemplate(item);
        console.log(listItem);

        //STEP 9 append to page
        $('#incidents ul').append(listItem);

    });

  }

  //STEP 10 Run your application
  bodycamapp();

});