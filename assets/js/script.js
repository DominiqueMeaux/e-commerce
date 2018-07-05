//Script Amélie
$(function(){
  //Section modal body
  $('.A_contentBasket').append('<div class="row px-3 pb-2">'
  //  + '<div class="A_imgProduct text-center font-weight-bold col-xs-12 col-sm-12 col-md-4 col-lg-2">Produit</div>'
  + '<div class="A_nameProduct text-left font-weight-bold col-xs-12 col-sm-12 col-md-10 col-lg-5">Produit</div>'
  + '<div class="A_refProduct text-center font-weight-bold col-xs-12 col-sm-12 col-md-2 col-lg-1">Réf.</div>'
  + '<div class="A_priceProduct text-center font-weight-bold col-xs-12 col-sm-12 col-md-4 col-lg-2">Prix unitaire</div>'
  + '<div class="A_quantity text-center font-weight-bold col-xs-12 col-sm-12 col-md-4 col-lg-2">Quantité</div>'
  + '<div class="A_totalPriceProduct text-left font-weight-bold col-xs-12 col-sm-12 col-md-4 col-lg-2">Sous-total</div>'
  + '</div>');
  //déclaration de la fonction récupérant les valeurs des produits
  $('.add').click(function(e){
    //var A_imgProduct = $(this).siblings().eq(2).attr("src");
    var A_nameProduct = $(this).siblings().eq(0).text();
    var A_refProduct = $(this).siblings().eq(1).text();
    var A_priceProduct = parseFloat($(this).siblings().eq(4).text());
    var A_quantityProduct = 1;
    var A_subtotal = A_quantityProduct * A_priceProduct;
    var A_total = A_subtotal;
    $('.A_contentBasket').append('<div class="row A_product px-3 pb-4">'
    //   + '<div class="A_imgProduct font-weight-bold col-xs-12 col-sm-12 col-md-4 col-lg-2">Produit</div>'
    + '<div class="A_nameProduct text-left col-xs-12 col-sm-12 col-md-10 col-lg-5">' + A_nameProduct + '</div>'
    + '<div class="A_refProduct text-center col-xs-12 col-sm-12 col-md-2 col-lg-1">' + A_refProduct + '</div>'
    + '<div class="A_priceProduct text-center col-xs-12 col-sm-12 col-md-4 col-lg-2">' + A_priceProduct + '</div>'
    + '<div class="text-center col-xs-12 col-sm-12 col-md-4 col-lg-2">'
    + '<button type="button name="A_buttonQuantity" class="A_buttonMinus" id="A_minus">-</button> '
    + '<span id="A_quantityProduct"> ' + A_quantityProduct + '</span>'
    + ' <button type="button name="A_buttonQuantity" class="A_buttonPlus">+</button>'
    + '</div>'
    + '<div class="A_subtotal text-center col-xs-12 col-sm-12 col-md-4 col-lg-2">' + A_subtotal + '</div>'
    + '</div>');
    //déclaration de la fonction qui modifie les quantités au clic sur le bouton plus
    $('.A_buttonPlus').click(function(){
      if(A_quantityProduct < 5){
        //récupération des valeurs quantité et sous-total
        A_quantityProduct = $(this).siblings().eq(1).text();
        //incrémentation de la quantité
        ++A_quantityProduct;
        //calcul du nouveau sous-total
        A_subtotal = A_quantityProduct * A_priceProduct;
        //affichage des nouvelles valeurs
        $('#A_quantityProduct').html(A_quantityProduct);
        $('.A_subtotal').html(A_subtotal.toFixed(2));
        $('#A_total').html('Total : ' + A_subtotal.toFixed(2) + ' €');
      }else{
        alert('La quantité demandée n\'est pas disponible en stock');
      }
    });
    //déclaration de la fonction qui modifie les quantités au clic sur le bouton moins
    $('.A_buttonMinus').click(function(){
      if(A_quantityProduct > 1){
        //récupération des valeurs quantité et sous-total
        A_quantityProduct = $('#A_quantityProduct').text();
        //décrémentation de la quantité
        --A_quantityProduct;
        //calcul du nouveau sous-total
        A_subtotal = A_quantityProduct * A_priceProduct;
        //affichage des nouvelles valeurs
        $('#A_quantityProduct').html(A_quantityProduct);
        $('.A_subtotal').html(A_subtotal.toFixed(2));
        $('#A_total').html('Total : ' + A_subtotal.toFixed(2) + ' €');
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
