const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;
    switch (action.type) {
        case "ADDITEM":
            const exist = state.find((x) => x.id === product.id);
            if (exist) {
                // If the product already exists in the cart, increase its quantity
                return state.map((x) => 
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                // If the product does not exist, add it to the cart with qty = 1
                return [...state, { ...product, qty: 1 }];
            }

        case "DELETEITEM":
            const exist1 = state.find((x) => x.id === product.id);
            if (exist1) {
                if (exist1.qty === 1) {
                    // If the quantity is 1, remove the item from the cart
                    return state.filter((x) => x.id !== exist1.id);
                } else {
                    // If the quantity is more than 1, decrease the quantity
                    return state.map((x) => 
                        x.id === product.id ? { ...x, qty: x.qty - 1 } : x
                    );
                }
            }
            // If the product does not exist in the cart, return the current state
            return state;

        default:
            return state;
    }
};

export default handleCart;
