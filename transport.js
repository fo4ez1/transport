function Tran(name) {
    this.name = name;
    this.about = "Я - " + name;
}

function AirTran(name) {
    Tran.apply(this, arguments);
    this.about = "Я - " + name + ". Я лечу";
}

function WaterTran(name) {
    Tran.apply(this, arguments);
    this.about = "Я - " + name + ". Я плыву";
}

function GroundTran(name) {
    Tran.apply(this, arguments);
    this.about = "Я - " + name + ". Я еду";
}

AirTran.prototype = Object.create(Tran.prototype);
AirTran.prototype.constructor = AirTran;

WaterTran.prototype = Object.create(Tran.prototype);
WaterTran.prototype.constructor = WaterTran;

GroundTran.prototype = Object.create(Tran.prototype);
GroundTran.prototype.constructor = GroundTran;



AirTran.prototype.go = function () {
    alert(this.about);
};

WaterTran.prototype.go = function () {
    alert(this.about);
};

GroundTran.prototype.go = function () {
    alert(this.about);
};

let transport = ["ракета", "самолёт", "теплоход", "катер", "автомобиль", "грузовик"];


let airtran1 = new AirTran(transport[0]);
airtran1.go();

let airtran2 = new AirTran(transport[1]);
airtran2.go();
let watertran1 = new WaterTran(transport[2]);
watertran1.go();

let watertran2 = new WaterTran(transport[3]);
watertran2.go();

let groundtran1 = new GroundTran(transport[4]);
groundtran1.go();

let groundtran2 = new GroundTran(transport[5]);
groundtran2.go();