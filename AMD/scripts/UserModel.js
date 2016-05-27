define(function() {
   return function(email, password, remember) {
       Object.defineProperty(this, "email", {
           get: function() { return email; }
       });

       Object.defineProperty(this, "password", {
           get: function() { return password; }
       });

       Object.defineProperty(this, "shouldBeRemembered", {
           get: function() { return remember; }
       });
   }
});