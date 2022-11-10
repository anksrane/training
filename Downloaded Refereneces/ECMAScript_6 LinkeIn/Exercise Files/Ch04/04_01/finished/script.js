function skier(name, sound) {
  return {
    name,     //Same as name:name
    sound,    //Same as sound:sound
    powderYell: function () {
      let yell = this.sound.toUpperCase();
      console.log(`${yell}! ${yell}!`);
    }
  };
}

skier("Sendy", "yeah").powderYell();
