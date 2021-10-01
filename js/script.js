var car = {
    make: 'VW',
    type: 'Polo',
    color: 'blue',
    isTurnedOn: false,
    numberOfWheels: 4,
    seats: ['seat1',
            'seat2',
            'seat3',
            'seat4'],
    turnOn: function(){
        this.isTurnedOn = true;
    },
    fly: function(){
        alert('Flying car')
    }
};

console.log('Hello world')