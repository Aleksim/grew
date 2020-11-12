import React from 'react'
import Post from './Post'
import "../../css/main.css"

const Posts = ({posts, title}) => {
    return (
        <section className="section">
            <div className="container is-max-desktop">
                
                <article>
                    {posts.map(post=>{
                        return <Post key={post.id} {...post}  />
                    })}
                </article>
            </div>
        </section>
    )
}

export default Posts
