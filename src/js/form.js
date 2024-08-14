$(document).ready(function () {
    let nameUser = $('#name');
    let phoneUser = $('#phone');
    let hasError = false;

    $('.send-request').click(function (e) {
        e.preventDefault();

        $('.error-input').hide();

        if(!nameUser.val()){
            nameUser.prev().show();
            nameUser.css({
                border: '2px solid red'
            });
            hasError = true;
        }else{
            nameUser.css('border', "1px solid rgb(130, 19, 40)");
        }

        if (!phoneUser.val()){
            phoneUser.prev().show();
            phoneUser.css({
                border: '2px solid red'
            });
            hasError = true;
        }else{
            phoneUser.css('border', "1px solid rgb(130, 19, 40)");
        }

        if (!hasError) {
            $.ajax({
                method: "POST",
                url: "https://testologia.ru/checkout",
                data: {name: nameUser.val(), phone: phoneUser.val()}
            })
                .done(function(msg){
                    if (msg.success){
                        $('.popup-title').text("Спасибо за Ваш заказ. Мы скоро свяжемся с Вами!")
                        nameUser.hide();
                        phoneUser.hide();
                        $('.send-request').hide();
                    }else{
                        $('.popup-title').text("Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ")
                        nameUser.hide();
                        phoneUser.hide();
                        $('.send-request').hide();
                    }
                })
        }

        $('#form')[0].reset();
    })

});
  
  
  
  