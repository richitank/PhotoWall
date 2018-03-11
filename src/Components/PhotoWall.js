import React from 'react'
import Photo from './Photo';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function PhotoWall(props) { 
    return <div>  
                <Link className="addButton-icon" to="/AddPhoto"> </Link>
                <div className="photo-grid">
                    {props.posts
                        .sort(function(x,y) {
                            return y.id - x.id
                        })
                        .map((post, index) => <Photo key={index} post1 = {post} {...props}/>)}
                </div>
            </div>
}

PhotoWall.PropType = {
    posts: PropTypes.array.isRequired,
   
}

export default PhotoWall