import react from 'react';

export default class AddTodoItem extends react.Component{

    state = {
        tasks: []
    }

    handleAddTask = (e) => {

        if(e.key === 'Enter'){
            
            // this.state.tasks.push(e.target.value)

            this.setState({
                tasks: this.state.tasks.push(e.target.value)
            })


            document.getElementById("addInput").value = ""

            // this.state.tasks.forEach(task => {
            //     console.log(task)
            // });

        }

    }


    render(){
        return (
            <div>
                AddTodoItem.js
                <br/>
                <input id="addInput" type="text" placeholder="Task" onKeyDown={this.handleAddTask}/>
            </div>
        );
    }

}