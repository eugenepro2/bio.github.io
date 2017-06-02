  window.onload=function(){
    //Галерея документации
    baguetteBox.run('.gallery');
  }

  //Плавное появление заголовоков
  new WOW().init();
  //Плавный скролл
  smoothScroll.init();

  //Слайдер партнеров
  var swiper = new Swiper('.swiper-container__partners', {
    slidesPerView: 4,
    spaceBetween: 0,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop: true
  });

  //Слайдер документации
  var swiper = new Swiper('.swiper-container__document', {
    slidesPerView: 3,
    spaceBetween: 0,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    loop: true
  });
  //Слайдер блока "О компании"
  var swiper = new Swiper('.swiper-container__slider', {
    slidesPerView: 1,
    autoplay: 3000,
    speed: 1000,
    loop: true,
    effect: 'fade'
  });

  //Модальные окна
  var modalBackCall = new tingle.modal();
  var modalConsultation = new tingle.modal();
  var modalPresentation1 = new tingle.modal();
  var modalPresentation2 = new tingle.modal();
  modalBackCall.setContent(document.querySelector('.back-call').innerHTML);
  modalConsultation.setContent(document.querySelector('.modal-consultation').innerHTML);
  modalPresentation1.setContent(document.querySelector('.modal-presentation-1').innerHTML);
  modalPresentation2.setContent(document.querySelector('.modal-presentation-2').innerHTML);



  //Ajax отправка формы
  document.querySelectorAll('.form').forEach(function(item) {
  item.addEventListener('submit', function(event) {
    sendAjaxForm(this, event);
  })});
  function sendAjaxForm(form, event) {
    var fields = form.querySelectorAll('input, textarea')

    var formHasError =  Array.prototype.reduce.call(fields, function(invalidCount, currentItem) {
      if (currentItem.matches(':invalid')) invalidCount++;
    }, 0);

    if (formHasError) {
      return true;
    } else {
      event.preventDefault();

      var formData = new FormData(form);
      var xhr = new XMLHttpRequest();

      xhr.open('POST', 'send.php');
      xhr.onreadystatechange = function() {
        if ((xhr.readyState == 4) && (xhr.status == 200)) {
          data = xhr.responseText;
          form.outerHTML = '<h3 style="color: #fff; text-align: center;">Спасибо, ваша заявка отправлена</h3><p style="color: #fff; text-align: center">Наши менеджеры свяжутся с вами в течение дня</p>';
        }
      }
      xhr.send(formData);

      return false;
    }
  }



  
