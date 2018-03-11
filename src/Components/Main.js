import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'
import { withRouter } from "react-router-dom"
import {removePost} from '../redux/actions'

class Main extends Component {

    constructor(){
        super()            
    }

    componentDidMount() {
        this.props.removePost(1)
    }

    render(){
        console.log(this.props)
        return (<div>  
            <Route exact path = "/" render = {() => (        
                    <div>
                        <Title title = {"Photowall"} />   
                        <PhotoWall {...this.props} />
                    </div>
                    )}/>   
            {/* <Route path = "/AddPhoto" render = {(history) => (
             <AddPhoto onAddPhoto = {(addedPost) => { //The array post is being stored in the variable addPost
                    this.addPhoto(addedPost)
                    this.props.history.push("/")
             }}/>
        )}/> */}
                </div>
        )                  
    }

}
export default withRouter(Main)