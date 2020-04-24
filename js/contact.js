$(function() {
    $("form[name='contact']").validate({
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        name: "required",
        message: "required",
        email: {
          required: true,
          email: true
        },
      },
      messages: {
        name: "Please enter your name",
        message: "Please enter your message",
        email: "Please enter a valid email address"
      },
      submitHandler: function(form) {
        form.submit();
      }
    });
  });