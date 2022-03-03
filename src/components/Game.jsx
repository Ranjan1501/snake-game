import React, { Component } from "react";
import Food from "./Food";
import "./Game.css";
import Snake from "./Snake";
import ReactAudioPlayer from "react-audio-player";
import intro from "../Sound/intro.mp3";

const randomCoordinates = () => {
  let min = 1;
  let max = 90;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
};

const initialState = {
  food: randomCoordinates(),
  // set speed for movement of snake
  speed: 200,
  direction: "RIGHT",
  snakeDots: [
    [0, 0],
    [2, 0],
  ],
};
export class Game extends Component {
  state = {
    food: randomCoordinates(),
    // set speed for movement of snake
    speed: 200,
    direction: "RIGHT",
    snakeDots: [
      [0, 0],
      [2, 0],
    ],
  };
  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.onKeyDown;
  }

  componentDidUpdate() {
    this.checkOutOfBorder();
    this.checkIfCollapsed();
    // calling checkEatfood in componentDidUpdate will create an infinite loop so that's why code is breaking out
    this.checkEatFood();
  }

  checkOutOfBorder = () => {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
      this.gameOver();
    }
  };

  checkIfCollapsed() {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach((dot) => {
      if (head[0] === dot[0] && head[1] === dot[1]) {
        this.gameOver();
      }
    });
  }
  checkEatFood = () => {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;
    if (head[0] === food[0] && head[1] === food[1]) {
      this.setState({
        food: randomCoordinates(),
      });
      this.enLargeSnake();
      // after eating the food speed  should increased
      this.increaseSpeed();
    }
  };
  enLargeSnake() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([]);
    this.setState({
      snakeDots: newSnake,
    });
  }

  increaseSpeed() {
    if (this.state.speed > 10) {
      this.setState({
        speed: this.state.speed - 10,
      });
    }
  }

  gameOver = () => {
    alert("Game Over");
    this.setState(initialState);
    // let res = this.state.snakeDots.length;
    // return res;
  };

  onKeyDown = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        this.setState({ direction: "UP" });
        break;

      case 40:
        this.setState({ direction: "DOWN" });
        break;

      case 37:
        this.setState({ direction: "LEFT" });
        break;

      case 39:
        this.setState({ direction: "RIGHT" });
        break;
      default:
    }
  };
  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];
    switch (this.state.direction) {
      // here head[0]= x coordinates and head[1]= y coordinates
      case "RIGHT":
        head = [head[0] + 2, head[1]];
        break;
      case "LEFT":
        head = [head[0] - 2, head[1]];
        break;
      case "UP":
        head = [head[0], head[1] - 2];
        break;
      case "DOWN":
        head = [head[0], head[1] + 2];
        break;
      default:
        head = [head[0], head[1]];
    }
    dots.push(head);
    dots.shift();
    this.setState({
      snakeDots: dots,
    });
  };
  render() {
    return (
      <div>
        <div className="audio">
          <ReactAudioPlayer className="audio" src={intro} autoPlay controls />
        </div>
        <div className="gameArea">
          <Snake snakeDots={this.state.snakeDots} />
          <Food dot={this.state.food} />
          <div>Score: {this.state.snakeDots.length}</div>
        </div>
      </div>
    );
  }
}

export default Game;
