(function(window, document){

var itemContainer = document.getElementById('itemContainer');
var showListBtn = document.getElementById('showListBtn');
var showSelectedContainer = document.getElementById('showSelectedContainer');
var itemList;
var selectedItems;
var counter;
function initItems(){
  itemList = [
    {name: 'item1', id: '1', position: 0},
    {name: 'item2', id: '2', position: 0},
    {name: 'item3', id: '3', position: 0},
    {name: 'item4', id: '4', position: 0},
    {name: 'item5', id: '5', position: 0}
  ];
  selectedItems = [];
  counter = 1;

  showSelectedContainer.innerHTML = '';
};

initItems();

document.reset = function(){
  initItems();
};

document.toggleList = function(){
  if(itemContainer.style.display === 'none'){
    itemContainer.style.display = 'block';
  } else {
    itemContainer.style.display = 'none';
  }
};
for(var i=0; i<itemList.length; i++){
  itemContainer.innerHTML += '<li>' + itemList[i].name + '</li>';
}
var children = itemContainer.childNodes;
[].forEach.call(children, function(child){
  child.addEventListener('click', function(e){
    console.log('clicked: ', e);
    for(var j=0; j<itemList.length; j++){
      if(itemList[j].name === e.target.innerText && itemList[j].position === 0){
        itemList[j].position = counter;
        selectedItems.push(itemList[j]);
        counter ++;
        showSelectedContainer.innerHTML += '<p> position: ' + itemList[j].position + ' name: ' + itemList[j].name + '</p>';
      }
    }
  });
});


}(window, document));
