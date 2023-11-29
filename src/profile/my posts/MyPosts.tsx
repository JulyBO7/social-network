import { Post } from './post/Post'

export const MyPosts = () => {
    return (
            <div>
                <textarea></textarea>
                <button>add post</button>
                <Post message={'Hello!'}/>
                <Post message={'How are you?'}/>
                <Post message={'I want will be a frontend developer'}/>
            </div>
    )
}