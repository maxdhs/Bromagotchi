import React, { Component } from 'react';
import Stats from './Stats.js';
import Avatar from './Avatar';


class Bro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alive: true,
            energy: 10,
            muscle: 10,
            fat: 18,
            money: 100,
            happiness: 50,
            stress: 20,
            isTraining: false,
            isEating: false
        }
        this.gym = this.gym.bind(this);
        this.eatFood = this.eatFood.bind(this);
        this.goToWork = this.goToWork.bind(this);
    }

    setFalse() {
        setTimeout(() => {
            this.setState(
                {
                    isTraining: false,
                    isEating: false
                });
        }, 1000);
    }

    gym() {
        this.setState({
            muscle: this.state.muscle + 1,
            fat: this.state.fat - 2,
            energy: this.state.energy - 1,
            happiness: this.state.happiness + 1,
            isTraining: true
        });
        this.setFalse();
    }

    eatFood() {
        this.setState({
            fat: this.state.fat + 1,
            happiness: this.state.happiness + 1,
            energy: this.state.energy + 1,
            isEating: true
        });
        this.setFalse();
    }
    goToWork() {
        this.setState({
            stress: this.state.stress + 2,
            money: this.state.money + 3,
            energy: this.state.energy - 1
        })
    }

    render() {
        return (
            <div>
                <Avatar
                    energy={this.state.energy}
                    alive={this.state.alive}
                    muscle={this.state.muscle}
                    fat={this.state.fat}
                    money={this.state.money}
                    happiness={this.state.happiness}
                    stress={this.state.stress}
                    isTraining={this.state.isTraining}
                    isEating={this.state.isEating}
                />
                <button onClick={this.gym}>Hit the Gym</button>
                <button onClick={this.eatFood}>Eat Food</button>
                <button onClick={this.goToWork}>Go to Work</button>
                <button>Drink Beer</button>
                <button>Watch Sports</button>
                <button>Tinder Date</button>
                <button>Sleep</button>
                <Stats
                    energy={this.state.energy}
                    alive={this.state.alive}
                    muscle={this.state.muscle}
                    fat={this.state.fat}
                    money={this.state.money}
                    happiness={this.state.happiness}
                    stress={this.state.stress}
                />
            </div>
        );
    }
}

export default Bro;