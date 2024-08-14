$(document).ready(function () {
    let orderUser = $('#orderTeas');
    let nameUser = $('#nameOrder');
    let phoneUser = $('#phoneOrder');
    let hasError = false;

    $('.send-order').click(function (e) {
        e.preventDefault();

        $('.error-input').hide();

        if(!orderUser.val()){
            orderUser.prev().show();
            orderUser.css({
                border: '2px solid red'
            });
            hasError = true;
        }else{
            orderUser.css('border', "1px solid rgb(130, 19, 40)");
        }

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
                data: {order:orderUser.val(), name: nameUser.val(), phone: phoneUser.val()}
            })
                .done(function(msg){
                    if (msg.success){
                        $('.popup-title').text("Спасибо за Ваш заказ. Мы скоро свяжемся с Вами!");
                        orderUser.hide()
                        nameUser.hide();
                        phoneUser.hide();
                        $('.send-order').hide();
                    }else{
                        $('.popup-title').text("Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ");
                        orderUser.hide()
                        nameUser.hide();
                        phoneUser.hide();
                        $('.send-order').hide();
                    }
                })
        }

        $('#form-order')[0].reset();
    })

});
  
  
  
  