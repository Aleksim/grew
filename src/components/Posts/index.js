import React from 'react'
import Post from './Post'
import "../../css/main.css"

const Posts = ({posts, title}) => {
    return (
        <div className="section">
            <div className="container is-max-desktop">

                <article className="list-items">
                    {posts.map(post=>{
                        return <Post key={post.id} {...post}  />
                    })}
                </article>
            </div>
        </div>
    )
}

export default Posts
