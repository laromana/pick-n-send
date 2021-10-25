let map;

let options = {
    center: { lat: 51.517, lng: -0.127 },    
    zoom: 10,
}

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), options);

  //Array of Markers

  let markers = [
      {
        coordinates:{lat: 51.505, lng: -0.187},
        content: "<h6>Kensington Palace Office</h6>"
      },
      {
        coordinates:{lat: 51.508, lng: -0.076}, 
        content:"<h6>Tower of London Office</h6>"  
      },
      {
        coordinates:{lat: 51.515, lng: -0.098},
        content:"<h6>St. Paul's Cathedral Office</h6>"
      }
  ];

  // Loop through markers array 
  for(let i = 0; i <markers.length; i++){
      //Add marker from array
    addMarker(markers[i]);
  };

    //Function to add marker individually, replaced for markers array for simplicity  
    
    //   addMarker({
    //     coordinates:{lat: 51.508, lng: -0.076}, 
    //     content:"<h6>Tower of London Office</h6>"
    //     });
    //   addMarker({
    //       coordinates:{lat: 51.515, lng: -0.098},
    //       content:"<h6>St. Paul's Cathedral Office</h6>"
    //     }); 
  
  
  
  function addMarker(props){   

        let marker = new google.maps.Marker ({
            position:props.coordinates,
            map : map,        
            icon: "img/logo2.png",
        }); 
        
    // Add condition to avoid undefined values for markers without infoWindow    
        if(props.content){
            let infoWindow = new google.maps.InfoWindow({
                content: props.content
            });   

            marker.addListener("click", function(){
                infoWindow.open(map, marker);
        });
        };
        
         
    };

   
  
}

