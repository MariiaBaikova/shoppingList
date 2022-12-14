import { Component } from "react";
import check from './check.jpg';

export class ShoppingList extends Component {
    state = {
        userInput: "",
        shoppingList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }
    
    addItem(input) {
        if(input=== '') {
            alert("Please enter on item!")
        } 
        else {
        let listArray = this.state.shoppingList;
        listArray.push(input);
        this.setState({shoppingList: listArray, userInput: ''})
        console.log(listArray);
    }
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    deleteItem() {
        let listArray=this.state.shoppingList;
        listArray = [];
        this.setState({shoppingList: listArray})
    }
    
    onFormSubmit(e) {
        e.preventDefault();
    }


    render() {
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="input">
                <input type="text"
                placeholder="What to you want to buy today?"
                onChange={(e) => this.onChangeEvent (e.target.value)}
                value={this.state.userInput}/>
            </div>
            <div className="btn">
                <button className="add" onClick={() => this.addItem(this.state.userInput)}>ADD</button>
            </div>
            <ul>
                {this.state.shoppingList.map((item, index) => (
                    <li onClick={this.crossedWord} key={ index }> 
                    <img src={ check } width="20px" alt="check"/>   {item}
                    </li>
                ))}
            </ul>
            <div className="btn">
                <button className="delete" onClick={() => this.deleteItem()}>DELETE</button>
            </div>
            </form>    
            
            
            </div>
        )
    }
}