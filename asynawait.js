function getCheese() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cheese = "cheese";
            resolve(cheese);
        }, 2000);
    })
}

function makeDough(cheese) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dough = cheese + " dough";
            resolve(dough);
        }, 2000);
    })
}

function bakePizza(dough) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pizza = dough + ' Pizza';
            resolve(pizza);
        }, 2000);
    })
}

async function OrderPizza() {
    try {
        const cheese = await getCheese();
        console.log("here is the ", cheese);
        const dough = await makeDough(cheese);
        console.log("here is the ", dough);
        const pizza = await bakePizza(dough);
        console.log("Here is the ", pizza);
    } catch (err) {
        console.log(err);
    }
}

OrderPizza();