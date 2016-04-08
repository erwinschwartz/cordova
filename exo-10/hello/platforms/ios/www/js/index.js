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
      app.findContacts();
   },

   findContacts: function () {
      $('#findButton').click(function () {
         var finder = $('#find').val();
         // document.getElementById('email').innerHTML = finder; // new Date();

         function onSuccess(contacts) {
            $('#name').html(contacts[0].name.givenName + ' ' + contacts[0].name.familyName);
         };

         function onError(contactError) {
            alert('onError!');
         };

         //find all contacts
         var options = new ContactFindOptions();
         options.filter = finder;
         var fields = ["displayName", "name"];
         navigator.contacts.find(fields, onSuccess, onError, options);
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