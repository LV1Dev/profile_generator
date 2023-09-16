$(document).ready(function() {
    var userContainer = $('#user-container');
    var userImage = $('#user-image');
    var name = $('#name');
    var email = $('#email');
    var phone = $('#phone');
    var location = $('#location');
  
    function generateUser() {
      $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
          var user = data.results[0];
          var nameText = user.name.first + ' ' + user.name.last;
          var emailText = user.email;
          var phoneText = user.phone;
          var locationText = user.location.city + ', ' + user.location.country;
          var imageUrl = user.picture.large;
  
          name.text(nameText);
          email.text(emailText);
          phone.text(phoneText);
          location.text(locationText);
          userImage.css('background-image', 'url(' + imageUrl + ')');
        }
      });
    }
  
    generateUser();
  
    $('#generate-user').click(function() {
      generateUser();
      generatePassword();
    });
  
    $('#generate-password').click(function() {
      generatePassword();
    });
  });
  
  function generatePassword() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@$%^&*_+?.-';
  
    const passwordLength = 12;
  
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
  
    document.getElementById('password').textContent = password;
  }
  
  generatePassword();
  

  $(document).ready(function() {
    // Show the overlay when the page loads
    $("#overlay").show();

    // Handle the "Agree" button click
    $("#agree").click(function() {
        $("#overlay").hide();
        $("body").removeClass("agree");
    });

    // Handle the "Disagree" button click
    $("#disagree").click(function() {
        window.location.href = "https://www.google.com";
    });
});