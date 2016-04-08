var app = {
   // Application Constructor
   initialize: function () {
      this.bindEvents();
   },
   // Bind Event Listeners
   //
   // Bind any events that are required on startup. Common events are:
   // 'load', 'deviceready', 'offline', and 'online'.
   bindEvents: function () {
      document.addEventListener('deviceready', this.onDeviceReady, false);
   },
   // deviceready Event Handler
   //
   // The scope of 'this' is the event. In order to call the 'receivedEvent'
   // function, we must explicitly call 'app.receivedEvent(...);'
   onDeviceReady: function () {
      app.receivedEvent('deviceready');
      app.loadPicture();
   },

   loadPicture: function () {
      $('#album').click(function () {
         function cameraSuccess(imageData) {
            var image = document.getElementById('image');
            image.src = "data:image/jpeg;base64," + imageData;
         };

         function cameraError(message) {
            alert('onError!' + message);
         };

         var cameraOptions = {
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            popoverOptions: new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY)
         };

         navigator.camera.getPicture(cameraSuccess, cameraError, cameraOptions);
      });
   },

   // Update DOM on a Received Event
   receivedEvent: function (id) {
      var parentElement = document.getElementById(id);
      var listeningElement = parentElement.querySelector('.listening');
      var receivedElement = parentElement.querySelector('.received');

      listeningElement.setAttribute('style', 'display:none;');
      receivedElement.setAttribute('style', 'display:block;');

      console.log('Received Event: ' + id);
   }

};

app.initialize();