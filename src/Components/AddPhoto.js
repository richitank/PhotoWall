import React, {Component} from 'react'
class AddPhoto extends Component {
    constructor() {
        super()
        this.submit = this.submit.bind(this);
    }

    submit(event){ //by deafult page refreshes when submit button is pressed. To prevent this we access the event object
        event.preventDefault(); // methos of the event object.
        const imageLink = event.target.elements.link.value; // accessing the name attribute through the event object
        const description = event.target.elements.description.value; //target refers to the form. elements refer to all the attributes
        console.log(imageLink);
        console.log(description);
        const post = {
            id:0,
            description:description,
            imageLink:imageLink
        }
        if(imageLink && description){
            this.props.onAddPhoto(post) //invoking onAddPhoto and passing 'post' array
        }
    }
    render(){
        return (
        <div>
            <h1> Photowall </h1>
            <div className="form">
            <form onSubmit={this.submit}>
                <input type="text" placeholder="Insert link here" name="link"/>
                <input type="text" placeholder="Description" name="description"/>
                <button> Submit</button>
                </form>
            </div>
        </div>


        )
    }
}
export default AddPhoto