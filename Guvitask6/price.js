// Write a class to calculate the uber price


class UberRide {
  constructor(Distance, RatePerKm, Tax ) {
    this.Distance = Distance;
      this.RatePerKm = RatePerKm;
      this.Tax = Tax;
  }

  
  calculatetotalridefare() {
    let distanceFare = this.Distance* this.RatePerKm;
    return this.Tax + distanceFare;
  }
}


let Uberride1 = new UberRide(23, 15, 13.40); 
let Uberride2 = new UberRide(15, 15, 12.55);  

console.log("Ride 1 Fare: Rs" + Uberride1.calculatetotalridefare());
console.log("Ride 2 Fare: Rs" + Uberride2.calculatetotalridefare());
