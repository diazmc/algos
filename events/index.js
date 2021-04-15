//Create an events library

class Events {
  constructor() {
    this.events = {};
  }

  //Register an event handler
  on(eventName, callback) {
    if(this.events[eventName]) {
      this.events[eventName].push(callback)
    } else {
      this.events[eventName] = [];
    }
  }

  //Trigger all callbacks associated with a given eventName
  trigger(eventName) {
    if(this.events[eventName]) {
      for(let callback of this.events[eventName]) {
        callback();
      }
    }
  }

  //Remove all event handler associated with the eventName
  off(eventName) {
    delete this.events[eventName];
  }
}