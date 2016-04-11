//STEP 1 Wrap in ready method
$(document).ready(function(){

  function bodycamapp(){
    console.log("INIT APP");

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
    var incidentTemplate = _.template("<li class='incident incident-<%= index %>'><h6 class='kicker'><%= date %> | <%= city %>, <%= state %></h6><h2><%= headline %></h2><time><%= length %></time><div class='yt-video'></div></li>");

    //STEP 6 loop through data
    _.each(data,function(incident,index){

        

    });


  }

  //STEP X Run your application
  bodycamapp();

});