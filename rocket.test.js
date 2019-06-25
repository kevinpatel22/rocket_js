
const Rocket = require('./rocket');

describe('Rocket', () => {

  describe('constructor', () => {
    test('it should set default attributes if nothing is passed', () => {
      let rocket = new Rocket();
      expect(rocket.name).toBeTruthy;
      expect(typeof rocket.name).toBe('string');
      expect(rocket.flying).toBe(false);
    });

    test("it should set the rocket's name if provided", () => {
      let rocket_nam = new Rocket({name: 'Falcon Heavy'})
      expect(rocket_nam.name).toBe('Falcon Heavy')
    });
    
    test("it should set the rocket's colour if provided", () => {
      let rocket_col = new Rocket({colour: 'Blue'})
      expect(rocket_col.colour).toBe('Blue')
    });

    test("it should set the rocket's status", () => {
      let rocket_fly = new Rocket({flying: 'nah but its ready for launch'})
      expect(rocket_fly.flying).toBe('nah but its ready for launch')
    });
  });

  describe('liftOff', () => {
    test("it should liffoff the rocket if its status is false and set its new status by returning true", () => {
      let rocket = new Rocket({flying: false})
      //  or 
      //  let rocket = new Rocket()
      expect(rocket.liftOff()).toBe(true)
      expect(rocket.flying).toBe(true)
    });

    test("it should tell if rocket is already flying by rertruning false and set its status to true", () => {
      let rocket_stat = new Rocket({flying: true});
      expect(rocket_stat.liftOff()).toBe(false);
      expect(rocket_stat.flying).toBe(true)
      
    });
  }); 

  describe('land', () => {
    test("it should tell if the rocket is not flying by returning false and also set it status to false", () => {
      let rocket_stat = new Rocket();
      // or 
      // let rocket = new Rocket({flying: false})
      expect(rocket_stat.land()).toBe(false);
      expect(rocket_stat.flying).toBe(false);
    });

    test("it should tell if the rocket is flying and if it is then it will land the rocket and change its flying status to false", () => {
      let rocket_stat = new Rocket({flying: true});
      expect(rocket_stat.land()).toBe(true);
      expect(rocket_stat.flying).toBe(false);
    })
  }); 

  describe('status', () => {
    test("it should tell if the rocket is flying", () => {
      let rocket = new Rocket();
      // or
      // let rocket = new Rocket({flying: false});
      let stat = rocket.status();
      expect(stat).toBe(`Rocket ${rocket.name} is ready for liftoff!`);


    })

    test("it shuld tell if the rocket is not flying and that it's ready for launch", () => {
      let rocket = new Rocket({flying: true})
      let stat = rocket.status() 
      expect(stat).toBe(`Rocket ${rocket.name} is flying through the sky!`)
    })
  })

  describe('sendCodedSignal', () => {
    test("it should return the datatype of messageCode and return 'boop' if nothing is passed in the argument", () => {
      let rocket = new Rocket();
      let msg = rocket.sendCodedSignal();
      expect(typeof msg).toBe('string');
      expect(msg).toBe('boop');
    });
    
    test("it should return 'beep' if rocket is not flying and messageCode is under 10", () => {
      let rocket = new Rocket();
      let msg = rocket.sendCodedSignal(9);
      expect(msg).toBe('beep');
    });

    test("it should return 'beep beep' if rocket is flying and messageCode is under 10", () => {
      let rocket = new Rocket({flying: true});
      let msg = rocket.sendCodedSignal(7);
      expect(msg).toBe('beep beep');
    });

    test("it should return 'boop boop boop' if rocket is flying and messageCode is over 10", () => {
      let rocket = new Rocket({flying: true});
      let msg = rocket.sendCodedSignal('Something else')
      let msg2 = rocket.sendCodedSignal(89);
      expect(msg).toBe('boop boop boop');
      expect(msg2).toBe('boop boop boop');
    });

    test("it should return 'boop beep beep' if rocket is not flying and messageCode is over 10", () => {
      let rocket = new Rocket();
      let msg = rocket.sendCodedSignal('Something else')
      let msg2 = rocket.sendCodedSignal(11);
      expect(msg).toBe('boop beep beep');
      expect(msg2).toBe('boop beep beep');
    });

  });

});

