const item1=[
  {
    id : '001' ,
    image : 'https://techsciblog.com/wp-content/uploads/2019/08/2019-What-is-AI-Really-Blog.jpg' ,
    item_name : 'Artificial Intelligent Course' ,
    current_price : 20 ,
    origional_price : 25
  }
];

const item2=[
  {
    id : '002' ,
    image : 'https://g9p3g3a3.rocketcdn.me/wp-content/uploads/2020/09/bear-vs-bull-markets-ig.jpg' ,
    item_name : 'Stock-Market Course' ,
    current_price : 24 ,
    origional_price : 30 
  }
];

const item3=[
  {
    id : '003' ,
    image : 'https://th.bing.com/th/id/OIP.JLeqgC7zqwFT8nIoI7txLwHaEK?rs=1&pid=ImgDetMain' ,
    item_name : 'Portrait Skill Course' ,
    current_price : 10 ,
    origional_price : 12.5 ,
  }
];

const items=[
  {
    id : '001' ,
    image : 'https://techsciblog.com/wp-content/uploads/2019/08/2019-What-is-AI-Really-Blog.jpg' ,
    item_name : 'Artificial Intelligent Course' ,
    current_price : 20 ,
    origional_price : 25 ,
    month : 2 ,
    days : 60 
  },
  {
    id : '002' ,
    image : 'https://g9p3g3a3.rocketcdn.me/wp-content/uploads/2020/09/bear-vs-bull-markets-ig.jpg' ,
    item_name : 'Stock-Market Course' ,
    current_price : 24 ,
    origional_price : 30 ,
    month : 3 ,
    days : 90 
  },
  {
    id : '003' ,
    image : 'https://th.bing.com/th/id/OIP.JLeqgC7zqwFT8nIoI7txLwHaEK?rs=1&pid=ImgDetMain' ,
    item_name : 'Portrait Skill Course' ,
    current_price : 10 ,
    origional_price : 12.5 ,
    month : 1 ,
    days : 30 
  }
];

let bagItems;

let bagItemStr = localStorage.getItem('bagItems');
bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];

displayBagIcon();

function addToBag(itemId){
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon(){
  let bagItemCountElement =document.querySelector('#item_count');
  if (!bagItemCountElement){
    return;
  }

  if(bagItems.length>0){
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerHTML= bagItems.length;
  }
  else{
    bagItemCountElement.style.visibility = 'hidden';
  }
}
