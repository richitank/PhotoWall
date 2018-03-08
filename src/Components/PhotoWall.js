import React from 'react'
import Photo from './Photo';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function PhotoWall(props) { 
    return <div>  
                <Link className="addButton-icon" to="/AddPhoto"> </Link>
                <div className="photo-grid">
                    {props.posts.map((post, index) => <Photo key={index} post1 = {post} onRemovePhoto = {props.onRemovePhoto}/>)}
                </div>
            </div>
}

PhotoWall.PropType = {
    posts: PropTypes.array.isRequired,
    onRemovePhoto: PropTypes.func.isRequired 
}

export default PhotoWall