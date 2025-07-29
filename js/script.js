// sidebar, hidden list
const logonav = document.getElementById('logo-nav');
const menulist = document.getElementById('menu-list');

  logonav.addEventListener('click', () => {
    menulist.classList.toggle("hiddenlist");
  });
// contact form ke email
(function(){
  emailjs.init("dVZu-coM37y7WuH15") //installasi emailjs dengan user id
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  //submit data dari form
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  //kirim email menggunakan emailjs
  emailjs.send("service_1xfzazs", "template_m34wbrz",{
    name: name,
    email: email,
    message: message
  })
  .then(function(response) {
    console.log('SUCCESS', response.status, response.text); //log sukses

    //notif SweetAlert sukses
    Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'Message sent successfully',
      showConfirmButton: false,
      timer: 1500
    })

    //Kosongkan form setelah kirim
  document.getElementById('contact-form').reset();
  }, function(error) {
    console.log('FAILED...', error); //log error

    //tampilkan Sweetalert gagal
    Swal.fire({
      icon: 'error',
      title: 'OOps...',
      text: 'Message failed to send. Please try again',
      showConfirmButton: true
    });
  });
});