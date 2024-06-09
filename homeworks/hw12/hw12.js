'use strict';

class Transport {
    #weight
    constructor (manufacturer, speed, weight) {
        this.manufacturer = manufacturer,
        this.speed = speed,
        this.#weight = weight
    }
    transportMaxSpeed = () => console.log(`Max speed is ${this.speed}`)
    transportWeight = () => console.log(this.#weight)
    transportManufacturer = () => console.log(this.manufacturer)
}

class Car extends Transport{
    #year
    constructor (manufacturer, speed, weight, model, year, color, engineType) {
        super(manufacturer, speed, weight)
        this.model = model
        this.#year = year
        this.color = color
        this.engineType = engineType
    }
    carAge = () => console.log(Date.prototype.getFullYear() - this.#year);
    carColor = () => console.log(`${this.model} is ${this.color}`);
    transportManufacturer = () => console.log(`${this.manufacturer} released ${this.model}`)
    showEngine = () => console.log(`${this.model} has ${this.engineType} engine`)
}

class ElectricCar extends Car {
    #chargeTime
    constructor (manufacturer, speed, weight, model, year, color, chargeTime, batteryCapacity, chargePower) {
        super(manufacturer, speed, weight, model, year, color, 'BEV')
        this.#chargeTime = chargeTime
        this.batteryCapacity = batteryCapacity
        this.chargePower = chargePower

    }
    yell = () => console.log("The best car ever!")
    displayChargeTime = () => console.log(`ChargeTime is ${this.#chargeTime}`)
    displayBatteryCapacity = () => console.log(`BatteryCapacity is ${batteryCapacity}`)
    displayChargePower = () => console.log(`Charge power is ${chargePower}`)
}

class PetrolCar extends Car {
    #mileage
    constructor (manufacturer, speed, weight, model, year, color, tankVolume, mileage, fuelType) {
        super(manufacturer, speed, weight, model, year, color, 'ESS')
        this.tankVolume = tankVolume
        this.#mileage = mileage
        this.fuelType = fuelType
    }
    carMileage = () => console.log(`Mileage is ${this.#mileage}`)
    showTankVolume = () => console.log(`${this.model}'s tank volume is ${this.tankVolume}`)
    showFuelType = () => console.log(fuelType)
}
