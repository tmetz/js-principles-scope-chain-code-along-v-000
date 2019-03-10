/* Your code goes here */

var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overWriteBestCustomer() {
  bestCustomer = 'me';
}

const leastFavoriteCustomer;

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'me';
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'bob';
  const favoriteCustomer = 'me';
}
