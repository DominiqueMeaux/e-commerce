//Script Amélie
$(function(){
  //déclaration des variables
  //var A_total = priceProduct;
  //Section modal body
  $('.A_contentBasket').append('<div class="row">'
  + '<div class="A_imgProduct text-center font-weight-bold col-xs-12 col-sm-12 col-md-4 col-lg-2">Produit</div>'
  + '<div class="A_nameProduct text-center font-weight-bold col-xs-12 col-sm-12 col-md-6 col-lg-4"></div>'
  + '<div class="A_refProduct text-center font-weight-bold col-xs-12 col-sm-12 col-md-2 col-lg-2">Référence</div>'
  + '<div class="A_priceProduct text-center font-weight-bold col-xs-12 col-sm-12 col-md-4 col-lg-1">Prix unitaire</div>'
  + '<div class="A_quantityProduct text-center font-weight-bold col-xs-12 col-sm-12 col-md-4 col-lg-2">Quantité</div>'
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
     $('.A_contentBasket').append('<div class="row">'
  //   + '<div class="A_imgProduct font-weight-bold col-xs-12 col-sm-12 col-md-4 col-lg-2">Produit</div>'
     + '<div class="A_nameProduct text-center col-xs-12 col-sm-12 col-md-10 col-lg-6">' + A_nameProduct + '</div>'
     + '<div class="A_refProduct text-center col-xs-12 col-sm-12 col-md-2 col-lg-2">' + A_refProduct + '</div>'
     + '<div class="A_priceProduct text-center col-xs-12 col-sm-12 col-md-4 col-lg-1">' + A_priceProduct + '</div>'
     + '<div class="A_quantityProduct text-center col-xs-12 col-sm-12 col-md-4 col-lg-2">' + A_quantityProduct + '</div>'
     + '<div class="A_totalPriceProduct text-center col-xs-12 col-sm-12 col-md-4 col-lg-1">' + A_subtotal + '</div>'
     + '</div>');
 });

  //Ajout de la section footer du modal
  $('#A_totalSection').append('<p class="w-100 text-center" id="A_total">Total : ' + 15 + ' €</p>'
  + '<button type="button" name="A_buttonContinue" class=" w-50 A_modalButton" data-dismiss="modal">Retour</button>'
  + '<button type="button" name="A_buttonPay" class="w-50 A_modalButton">Payer</button>');
});
//Fin script Amélie
