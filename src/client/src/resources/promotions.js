const lightPromotion = ingredients => {
    const lettuce = ingredients.find(ingredient => ingredient.id === 2);
    const bacon = ingredients.find(ingredient => ingredient.id === 6);
    const price = ingredients.reduce((val, ingredient) => {
        return val + ingredient.price
    }, 0);
    if (lettuce && !bacon) {
        return price * 0.10;
    }
    return 0;
}

const calculateMuchPromotions = (ingredients, idIngrientPromotion, withMany) => {
    let free = 0;
    let count = 0;
    const ingredientOfPromotion = ingredients.find(ingredient => ingredient.id === idIngrientPromotion);
    if (!ingredientOfPromotion) {
        return 0;
    }
    ingredients.forEach(ingredient => {
        if (ingredient.id === idIngrientPromotion && count === withMany) {
            count = 0;
            free++;
            return;
        }
        if (ingredient.id === idIngrientPromotion) {
            count++;
        }
    });
    return ingredientOfPromotion.price * free;
}


const muchMeatPromotion = ingredients => {
    return calculateMuchPromotions(ingredients, 3, 2);
}

const muchCheesePromotion = (ingredients, idIngrientPromotion, withMany) => {
    return calculateMuchPromotions(ingredients, 5, 2);
}

const promotions = [
    { name: 'Light', rule: lightPromotion.bind(this) },
    { name: 'Muita carne', rule: muchMeatPromotion.bind(this) },
    { name: 'Muito queijo', rule: muchCheesePromotion.bind(this) },
]

const verifyPromotions = ingredients => {
    const applied = [];
    let discount = 0;
    promotions.forEach(promotion => {
        const promo = promotion.rule(ingredients);
        if (promo) {
            discount += promo;
            applied.push({ name: promotion.name, discount: promo });
        }
    });
    return { discount, applied };
}

export default verifyPromotions