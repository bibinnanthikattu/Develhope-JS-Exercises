const order = {
// 
  customer: {
    name: "jhon",
    address: {
      number: 5,
      street: "",
    }
  }
};

if (!order?.customer?.address?.city) {
  console.log('City is required');
} else {
  console.log(order);
}
// const order = {};

// if (order && order.customer && order.customer.address && !order.customer.address.city) {
//   console.log('City is required');
// }