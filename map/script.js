var color = "#234c24";
var styleArray =   [];

 $(document).ready(function() {
     var types = ['school', 'department_store', 'bank', 'bus_station', 'cafe', 'church', 'doctor', 'hindu_temple', 'hospital', 'home_goods_store', 'mosque', 'movie_theater', 'park', 'restaurant', 'shopping_mall', 'train_station', 'university'];
     var html = '<option value="">Select POI</option>';
     $.each(types, function(index, value) {
         var name = value.replace(/_/g, " ");
         html += '<option value="' + value + '">' + capitalizeFirstLetter(name) + '</option>';
     });
     $('#types').html(html);
     $('#types').on('change', function() {
         renderMap(this.value);
     });
 });
 
 function capitalizeFirstLetter(string) {
     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
 }
 
 var map;
 var infowindow;
 var autocomplete;
 var markers = [];
 var latitude = 19.1773929;
 var longitude = 72.9552148;
 
 function initialize() {
     autocomplete = new google.maps.places.Autocomplete((document.getElementById('address')), {
         types: ['(regions)'],
     });
		var mrugarchana = new google.maps.LatLng(latitude, longitude);
		map = new google.maps.Map(document.getElementById('map'), {
         center: mrugarchana,
         zoom: 14,
         mapTypeControlOptions: {
             mapTypeIds: []
         },
         fullscreenControl: 0,
         streetViewControl: 0,
         styles: styleArray,
         id: 'marker'
		});
		marker = new google.maps.Marker({
         position: mrugarchana,
         map: map
		});
		var mrugarchanaLabel = new google.maps.InfoWindow({
				content: "<b>mrugarchana Residency</b>"
		});
	
	google.maps.event.addListener(marker, "click", function(e) {
		mrugarchanaLabel.open(map, this);
	});
 }
 
 function renderMap(selectedType) {
     type = [];
     type.push(selectedType);
     var address = document.getElementById('address').value;
     var radius = parseInt(document.getElementById('radius').value) * 1000;
     var geocoder = new google.maps.Geocoder();
     var selLocLat = 0;
     var selLocLng = 0;
	 console.log(address);
     geocoder.geocode({
         'address': address
     }, function(results, status) {
			console.log(results)
			console.log(status)
		 
         if (status === 'OK') {
             selLocLat = results[0].geometry.location.lat();
             selLocLng = results[0].geometry.location.lng();
             var mrugarchana = new google.maps.LatLng(selLocLat, selLocLng);
             map = new google.maps.Map(document.getElementById('map'), {
                 center: mrugarchana,
                 zoom: 14,
                 mapTypeControlOptions: {
                     mapTypeIds: []
                 },
                 fullscreenControl: 0,
                 streetViewControl: 0,
                 styles: styleArray,
             });
             var request = {
                 location: mrugarchana,
                 radius: radius,
                 types: type
             };
             infowindow = new google.maps.InfoWindow();
             if (type[0] != "") {
				 console.log(type[0]);
                 var service = new google.maps.places.PlacesService(map);
                 service.nearbySearch(request, callback);
             } else {
                 marker = new google.maps.Marker({
                     position: mrugarchana,
                     map: map,
					 labelContent: "ABCD",
                 });
				var mrugarchanaLabel = new google.maps.InfoWindow({
				content: "mrugarchana Residency"
				});
				google.maps.event.addListener(marker, "click", function(e) {
				mrugarchanaLabel.open(map, this);
				});
				$('#details').html('<li class="list_text">Explore your point of interest with 5km radius of the project.</li>');
             }
         } else {
             alert('Geocode was not successful for the following reason: ' + status);
         }
     });
 }
 
 
 function callback(results, status) {
	 console.log('this is callback');
	 console.log(results)
    console.log(status)
     if (status == google.maps.places.PlacesServiceStatus.OK) {
         var mrugarchana = new google.maps.LatLng(latitude, longitude);
         marker = new google.maps.Marker({
             position: mrugarchana,
             map: map
         });
		 var mrugarchanaLabel = new google.maps.InfoWindow({
				content: "mrugarchana Residency"
				});
				google.maps.event.addListener(marker, "click", function(e) {
				mrugarchanaLabel.open(map, this);
				});
         var html = '';
		 markers = [];
		 console.log(results);
         for (var i = 0; i < results.length; i++) {
             createMarker(results[i], results[i].icon, i);
             html += '<li><a href="javascript:triggerClick(' + i + ')" title="' + results[i].vicinity + '">' + capitalizeFirstLetter(results[i].name) + '</a></li>';
         }
         $('#details').html(html);
     }
 }
 
 
 
 function createMarker(place, icon, i) {
     var placeLoc = place.geometry.location;
     var marker = new google.maps.Marker({
         map: map,
         position: place.geometry.location,
         icon: {
             url: 'marker.svg',
             scaledSize: new google.maps.Size(25, 40) // pixels
         },
         animation: google.maps.Animation.DROP
     });
	 markers.push(marker);
	google.maps.event.addListener(marker, 'mouseover', (function (marker, i) {
		return function () {
		
			infowindow.setContent('<div class="mapOver" style="max-width:200px">'+place.name + '<br>' + place.vicinity+'</div>');
			infowindow.open(map, this);
		}
	})(marker, i));
	google.maps.event.addListener(marker, 'click', (function (marker, i) {
		return function () {
			infowindow.setContent('<div class="mapOver" style="max-width:200px">'+place.name + '<br>' + place.vicinity+'</div>');
			infowindow.open(map, this);
		}
	})(marker, i));

	google.maps.event.addDomListener(window, 'load', initialize);
 }
 
  
 function triggerClick(i) {
     google.maps.event.trigger(markers[i], 'click');
 }