if (document.readyState == "loading"){
    document.addEventListener('DOMContentLoaded',ready)

}
else
{
    ready();
}

function ready(){
/********* Favoris  **********/
    var favoris = document.getElementsByClassName('fa-heart')
    //var nbrFavoris = document.getElementById('favoris').innerHTML
    console.log(favoris)
    
    for(let el of favoris){
        el.addEventListener("click",function(){
            el.classList.toggle('red')
            var nb = document.getElementsByClassName('red').length;
            nb = nb.toString()
            document.getElementById('favoris').innerHTML=nb;
            
            
    })
    
}
function updateFavorisTotal(){
   
}




/***** Increamt - discreamnt quantity ******/
    var qte= document.getElementsByClassName("qty")
      
    let plus=document.getElementsByClassName("plus")
    let moin=document.getElementsByClassName("minus")

    for(let el of plus){
        el.addEventListener("click",function(){
            el.nextElementSibling.innerHTML++;
            updateCardTotal()
    })
    
    }
    for(let el of moin){
        el.addEventListener("click",function(){
          if(el.previousElementSibling.innerHTML>1){
            el.previousElementSibling.innerHTML--;
            console.log( el.previousElementSibling.innerHTML)
            
          }
          updateCardTotal()
    })
    
    }
}

  

    var removeItem = document.getElementsByClassName('remove');
    for (var i=0; i< removeItem.length; i++)
    {
        var button = removeItem[i].addEventListener('click', removeCartItem)
       
    }
    


function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.parentElement.remove()
    updateCardTotal()
}



function updateCardTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for (var i=0; i< cartRows.length; i++)
    {
        var cartRow = cartRows[i];
        var priceElement = cartRow.getElementsByClassName('price')[0];
        
        var quantityElement = cartRow.getElementsByClassName('qty')[0];
        
        var price = parseFloat(priceElement.innerText.replace('$',''));
       
        var quantity = quantityElement.innerText;
        total = total +(price * quantity);
      

    }
    document.getElementById('total').innerText = total + "$"
}
