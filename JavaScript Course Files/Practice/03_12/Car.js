class Car{
    constructor(
        companyName,
        model,
        launchYear,
        color,
        price
    ){
        this.companyName=companyName;
        this.model=model;
        this.launchYear=launchYear;
        this.color=color;
        this.price=price;
    }
    calculatePrice(priceToCalculate){
        let totalPrice=priceToCalculate+priceToCalculate*0.28;
        this.price=totalPrice;
    }
}

export default Car;