discounts = {
    'bd' : 5,
    'ho' : 4,
    'mh' : 3,
}

const returnAllDiscounts = function(order) {

    let totalDiscount = 0;

    discounts.array.forEach(discount => {
        if (apiCall(order, discount)) totalDiscount+= discoounts[discount];
    });

    return totalDiscount;

}