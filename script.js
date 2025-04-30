    (function(){
      emailjs.init("xWSBbZSGHSlmpRmav"); // paste ang API KEY (PUBLIC)
    })();

    document.getElementById('contact-form').addEventListener('submit', function(e) {
      e.preventDefault();

      emailjs.sendForm('service_rrygv4s', 'template_fi6v2t9', this) //SERVICE ID AND TEMPLATE ID NI
        .then(function() {
          alert('Message sent successfully!');
        }, function(error) {
          alert('FAILED... ' + JSON.stringify(error));
        });
    });


  



    