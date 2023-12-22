import { PostsType } from '../..'
import { Post } from './post/Post'



export const MyPosts: React.FC<{ posts: PostsType }> = ({ posts }) => {
    return (
        <div>
            <p>My posts:</p>
            {posts.map(post => <Post post={post} /> )}
        
        </div>
    )
}