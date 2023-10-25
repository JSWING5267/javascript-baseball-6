import { Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    Console.print("HI");
    console.log("BYE");
  }
}

const game = new App();
game.play();

export default App;
