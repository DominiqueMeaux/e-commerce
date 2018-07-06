//Script Amélie
$(function(){
  //Section modal body
  $('.A_contentBasket').append('<div class="row">'
  + '<div class="A_imgProduct text-center font-weight-bold col-xs-12 col-sm-12 col-md-4 col-lg-2">Produit</div>'
  + '<div class="A_nameProduct text-center font-weight-bold col-xs-12 col-sm-12 col-md-6 col-lg-4"></div>'
  + '<div class="A_refProduct text-center font-weight-bold col-xs-12 col-sm-12 col-md-2 col-lg-2">Référence</div>'
  + '<div class="A_priceProduct text-center font-weight-bold col-xs-12 col-sm-12 col-md-4 col-lg-1">Prix unitaire</div>'
  + '<div class="A_quantity text-center font-weight-bold col-xs-12 col-sm-12 col-md-4 col-lg-2">Quantité</div>'
  + '<div class="A_totalPriceProduct text-center font-weight-bold col-xs-12 col-sm-12 col-md-4 col-lg-1">Sous-total</div>'
  + '</div>');
  //déclaration de la fonction récupérant les valeurs des produits
  $('.add').click(function(e){
    //var A_imgProduct = $(this).siblings().eq(2).attr("src");
    var A_nameProduct = $(this).siblings().eq(0).text();
    var A_refProduct = $(this).siblings().eq(1).text();
    var A_priceProduct = parseFloat($(this).siblings().eq(4).text());
    var A_quantityProduct = 1;
    var A_subtotal = A_quantityProduct * A_priceProduct;
    var A_total = A_quantityProduct;
    $('.A_contentBasket').append('<div class="row A_product">'
    //   + '<div class="A_imgProduct font-weight-bold col-xs-12 col-sm-12 col-md-4 col-lg-2">Produit</div>'
    + '<div class="A_nameProduct text-center col-xs-12 col-sm-12 col-md-10 col-lg-6">' + A_nameProduct + '</div>'
    + '<div class="A_refProduct text-center col-xs-12 col-sm-12 col-md-2 col-lg-2">' + A_refProduct + '</div>'
    + '<div class="A_priceProduct text-center col-xs-12 col-sm-12 col-md-4 col-lg-1">' + A_priceProduct + '</div>'
    + '<div class="text-center col-xs-12 col-sm-12 col-md-4 col-lg-2">'
    + '<button type="button name="A_buttonQuantity" class="A_buttonQuantity" id="A_buttonMinus">-</button> '
    + '<span id="A_quantityProduct"> ' + A_quantityProduct + '</span>'
    + ' <button type="button name="A_buttonQuantity" class="A_buttonQuantity" id="A_buttonPlus">+</button>'
    + '</div>'
    + '<div class="A_subtotal text-center col-xs-12 col-sm-12 col-md-4 col-lg-1">' + A_subtotal + '</div>'
    + '</div>');
    //déclaration de la fonction qui modifie les quantités au clic sur le bouton plus
     $('#A_buttonPlus').click(function(){
       if(A_quantityProduct < 5){
         //récupération des valeurs quantité et sous-total
         A_quantityProduct = $('#A_quantityProduct').text();
         A_subtotal = $('.A_subtotal').text();
         //incrémentation de la quantité
         ++A_quantityProduct;
         //calcul du nouveau sous-total
         A_subtotal = A_quantityProduct * A_priceProduct;
         //affichage des nouvelles valeurs
         $('#A_quantityProduct').html(A_quantityProduct);
         $('.A_subtotal').html(A_subtotal.toFixed(2));
       }else{
         alert('La quantité demandée n\'est pas disponible en stock');
       }
     });
     //déclaration de la fonction qui modifie les quantités au clic sur le bouton moins
     $('#A_buttonMinus').click(function(){
       if(A_quantityProduct > 1){
         //récupération des valeurs quantité et sous-total
         A_quantityProduct = $('#A_quantityProduct').text();
         A_subtotal = $('.A_subtotal').text();
         //décrémentation de la quantité
         --A_quantityProduct;
         //calcul du nouveau sous-total
         A_subtotal = A_quantityProduct * A_priceProduct;
         //affichage des nouvelles valeurs
         $('#A_quantityProduct').html(A_quantityProduct);
         $('.A_subtotal').html(A_subtotal.toFixed(2));
       }else{
         $('.A_product').remove();
       }
     });
    //Ajout de la section footer du modal
    $('#A_totalSection').append('<p class="w-100 text-center" id="A_total">Total : ' + A_total + ' €</p>'
    + '<button type="button" name="A_buttonContinue" class=" w-50 A_modalButton" data-dismiss="modal">Retour</button>'
    + '<button type="button" name="A_buttonPay" class="w-50 A_modalButton">Payer</button>');
  });

});
//Fin script Amélie
var name = $('buyName');
var carte = $('creditCard');
var date = $('validityCard');
$('w-50 A_modalButton').click(function(){
  alert(name + carte +date);
});
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
var acc = document.getElementsByClassName("accordion2");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
};
$('#hptxt1').click(function(){
  $('#accessories').hide();
  $('.accessories').hide();
  $('.woodPool').show();
  $('#woodPool').show();
  $('#accordionPool').show();
});
$('#hptxt2').click(function(){
  $('.woodPool').hide();
  $('#woodPool').hide();
  $('#accordionPool').hide();
  $('#accessories').show();
  $('.accessories').show();
});
$(function(){
$('#hbutton').click(function(){
  $("html, body").animate({scrollTop: 0},"slow");
});
});
