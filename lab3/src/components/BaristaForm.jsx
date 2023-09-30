import React, { Component, useState } from "react";
import RecipeChoices from "./RecipeChoices";
import drinksJson from "./drinks.json"


const BaristaForm = () => {

    const [currentDrink, setCurrentDrink] = useState('');

    const [trueRecipe, setTrueRecipe] = useState({});

    const [inputs, setInputs] = useState({
        'temperature': '',
        'milk': '',
        'syrup': '',
        'blended': ''
    });
    const ingredients = {
        'temperature': ['hot', 'lukewarm', 'cold'],
        'syrup': ['mocha', 'vanilla', 'toffee', 'maple', 'caramel', 'other', 'none'],
        'milk': ['cow', 'oat', 'goat', 'almond', 'none'],
        'blended': ['yes', 'turbo', 'no']
    }
    const getNextDrink = () => {
        let randomDrinkIndex = Math.floor(Math.random() * drinksJson.drinks.length);
        setCurrentDrink(drinksJson.drinks[randomDrinkIndex].name);
        setTrueRecipe(drinksJson.drinks[randomDrinkIndex].ingredients);

    }

    const onNewDrink = () => {
        setInputs({
            'temperature': '',
            'milk': '',
            'syrup': '',
            'blended': ''
        });

        getNextDrink();

    }

    const onCheckAnswer = () => {
        if (trueRecipe.temp != inputs['temperature']) {
            setCheckedTemperature('wrong');
        }
        else {
            setCheckedTemperature("correct");
        }

        if (trueRecipe.temp != inputs['milk']) {
            setCheckedTemperature('wrong');
        }
        else {
            setCheckedTemperature("correct");
        }
        if (trueRecipe.temp != inputs['syrup']) {
            setCheckedTemperature('wrong');
        }
        else {
            setCheckedTemperature("correct");
        }
        if (trueRecipe.temp != inputs['blended']) {
            setCheckedTemperature('wrong');
        }
        else {
            setCheckedTemperature("correct");
        }




    }


    return (
        <div>
            <h2>Hi, I'd like to order a:</h2>
            <div className="drink-container">
                <h2 className="mini-header" style={{backgroundColor:"lightseagreen"}}> {currentDrink} </h2>
                <button type="new-drink-button" className="button newdrink" onClick={onNewDrink}> 🔄 </button>




            </div>

            <form className="container" style={{ display: "flex", justifyContent: "space-evenly", alignItems: "flex-start", margin: "auto", position: "relative" }}>

                <div className="mini-container" style={{ display: "flex", justifyContent: "space-evenly", flexDirection: "column", margin: "50px" }}>
                    <h3>Temperature</h3>
                    <div className="answer-space" style={{ backgroundColor: "lightblue", width: "200px", height: "50px" }} id="temperature-answer-space">
                        {inputs["syrup"]} {/* id is not same as codepath instruction */}
                        {inputs["temperature"]}
                    </div>
                    <RecipeChoices
                        handleChange={(e) =>
                            setInputs((prevState) => ({
                                ...prevState,
                                [e.target.name]: e.target.value,
                            }))
                        }
                        label="temperature"
                        choices={ingredients["temperature"]}
                        currentVal={inputs["temperature"]}
                    />
                </div>


                <div className="rmini-container" style={{ display: "flex", justifyContent: "space-evenly", flexDirection: "column", margin: "50px" }}>
                    <h3>Milk</h3>
                    <div className="answer-space" style={{ backgroundColor: "lightgreen", width: "200px", height: "50px" }} id="milk-answer-space"> {/* id is not same as codepath instruction */}
                        {inputs["milk"]}
                        {inputs["milk"]}
                    </div>

                    <RecipeChoices
                        handleChange={(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                        label="milk"
                        choices={ingredients["milk"]}
                        checked={inputs["milk"]}

                    />
                </div>

                <div className="mini-container" style={{ display: "flex", justifyContent: "space-evenly", flexDirection: "column", margin: "50px" }}>
                    <h3>Syrup</h3>
                    <div className="answer-space" style={{ backgroundColor: "orange", width: "200px", height: "50px" }} id="syrup-answer-space"> {/* id is not same as codepath instruction */}
                        {inputs["syrup"]} 
                        {inputs["syrup"]}
                    </div>
                    <RecipeChoices
                        handleChange={(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                        label="syrup"
                        choices={ingredients["syrup"]}
                        checked={inputs["syrup"]}
                    />
                </div>
                <div className="mini-container" style={{ display: "flex", justifyContent: "space-evenly", flexDirection: "column", margin: "50px" }}>
                    <h3>Blended</h3>
                    <div className="answer-space" style={{ backgroundColor: "lightpink", width: "200px", height: "50px" }} id="blended-answer-space">{/* id is not same as codepath instruction */}
                        {inputs["blended"]} 
                        {inputs["blended"]}
                    </div>
                    <RecipeChoices
                        handleChange={(e) => setInputs((prevState) => ({
                            ...prevState,
                            [e.target.name]: e.target.value,
                        }))}
                        label="blended"
                        choices={ingredients["blended"]}
                        checked={inputs["blended"]}
                    />
                </div>

            </form>
            <button type="submit" className="button submit" onClick={onCheckAnswer}> Check Answer </button>
            <button type="new-drink-button" className="button submit" onClick={onNewDrink}> New Drink </button>

        </div>
    );

};

export default BaristaForm;