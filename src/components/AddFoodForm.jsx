import { useState } from "react";
import { Input } from 'antd';



function AddFoodForm(props) {
const [name, setName] = useState("");
const [image, setImage] = useState("");
const [calories, setCalories] = useState("");
const [servings, setServings] = useState("");

const handleName = e => setName(e.target.value) 
const handleImage = e => setImage(e.target.value)
const handleCalories = e => setCalories(e.target.value)
const handleServings = e => setServings(e.target.value)


const handleSubmit = (e) => {
    e.preventDefault()
    const newFood = { name, image, calories, servings}
    props.addNewFood(newFood)

    setName("");
    setImage("");
    setCalories("");
    setServings("");

}


    return (
        <div>
            <h3>Add Food Entry</h3>

            <form onSubmit={handleSubmit}>
            <lable>Name: </lable>
            <Input
                type="text"
                name="name"
                value={name}
                onChange={handleName}
            />

            <lable>Imgage: </lable>
            <Input
                type="text"
                name="image"
                value={image}
                onChange={handleImage}
            />

            <lable>Calories: </lable>
            <Input
                type="text"
                name="calories"
                value={calories}
                onChange={handleCalories}
            />

            <lable>Servings: </lable>
            <Input
                type="text"
                name="servings"
                value={servings}
                onChange={handleServings}
            />

            <button type="submit">Create</button>

            </form>


        </div>
    )
}

export default AddFoodForm