var accounts_ul = document.querySelector('.xn-h-header-tabs ul li:nth-child(2) ul');
var next_menu_item = document.querySelector('.xn-h-header-tabs ul li:nth-child(2) ul li:nth-child(3)');

var new_menu_item = next_menu_item.cloneNode(true);
new_menu_item.firstChild.setAttribute('href', '/Accounts/Receivable/Quotes/');
new_menu_item.firstChild.innerHTML = 'Quotes';

accounts_ul.insertBefore(new_menu_item, next_menu_item);
