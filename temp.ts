class Environment {
public getCurrentTemperature(): number {
return 35;
  }
}

class TemperatureEvent {
  constructor(value: number) {
this.value = value;
  }

public value: number;
}

class TemperatureSensor {
  env: Environment = new Environment();
  enabled: boolean = false;

  start() {
this.enabled = true;
while (this.enabled){
var temperature = this.env.getCurrentTemperature();
      EventBus.instance.publish(new TemperatureEvent(temperature));
      sleep(1000);
    }
  }

  stop() {
this.enabled = false;
  }
}

class TemperatureAlarm {
  start() {
    EventBus.instance.subscribe(onTemperatureChanged)
  }

  onTemperatureChanged(temperature: TemperatureEvent){
if (temperature.value > 30){
      showMessage();
    }
    console.log(temperature.value);
  }

  stop() {
    EventBus.instance.unsubcribe(...)
  }
}

class EventBus {
  // get from the medium article
}

var alarm = new TemperatureAlarm();
var sensor = new TemperatureSensor();

alarm.start();
sensor.start();
