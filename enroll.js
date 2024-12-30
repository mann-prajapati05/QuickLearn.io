const CONVENIENCE_CHARGE = 2 ;
let bagItemObjects;
onLoad();


function onLoad(){
  loadBagItemObjects();
  displayBagItems();
  displayBagSummary();
}

function loadBagItemObjects(){
  console.log(bagItems);

  bagItemObjects = bagItems.map(itemId  => {
    for ( let i=0 ; i < items.length ; i++ ){
      if ( itemId == items[i].id) {
        return items[i];
      }
    }
  });
  console.log(bagItemObjects);

}

function displayBagSummary(){
  let bagSummaryElement = document.querySelector('.summary');
  let totalItems = bagItemObjects.length;
  let totalMRP = 0;
  let discount = 0;
  

  bagItemObjects.forEach(bagItem => {
    totalMRP += bagItem.origional_price;
    discount += bagItem.origional_price - bagItem.current_price;
  })

  let finalpay = totalMRP - discount + CONVENIENCE_CHARGE;
  if (totalItems==0){
    
  }

  bagSummaryElement.innerHTML = `
    <div id="summary_title">
          <p id="yourcourse">Your Courses </p> <span id="item_count"> ${totalItems} </span>
      </div>
      <div id="bill">
        <div class="price_item"><span class="price_tag">Total MRP</span><span class="price_value">${totalMRP} $</span></div>
        <div class="price_item"><span class="price_tag">Discount On MRP</span><span class="price_value">${discount} $</span></div>
        <div class="price_item" id="charge"><span class="price_tag">Convenience Charge</span><span class="price_value">2 $</span></div>
        <hr>
        <div class="total">
          <span class="price_tag">Total Amount</span><span class="price_value">${finalpay} $</span>
        </div>
        <div class="place_order_box">
        <button class="place_order"> Place Order </button>
        </div>
    </div>
  `;
}

function displayBagItems(){


  let containerElement=document.querySelector('.item_container');
  let innerHTML = '';
  bagItemObjects.forEach(bagItems => {
    innerHTML += generateItemHTML(bagItems);
    
  });
  containerElement.innerHTML = innerHTML;
}

function removeFromBag(itemId){
  bagItems = bagItems.filter(bagItemId => bagItemId != itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  loadBagItemObjects();
  displayBagItems();
  displayBagSummary();
  
}

function generateItemHTML(item){

  return ` 
  <div class="item">
    <div class="img">
    <img src="${item.image}" alt="item ${item.id}">
    </div>
    <div class="details">
    <div class="name">
        ${item.item_name}
    </div>
    <p class="price"> Duration : ${item.month} months(${item.days} Days)   ||   Price : ${item.current_price} $ <del style="font-size:smaller; color:red">  ${item.origional_price} $ </del></p>
    </div>
    <div class="remove_from_cart">
          <button id="x" onclick="removeFromBag(${item.id})"> X </button>
          </div>
  </div>`

}