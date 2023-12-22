import { PostType } from '../../..'
import s from './Post.module.css'



export const Post: React.FC<{post: PostType}>= ({post}) => {
    return (
            <div className={s.item}>
              <img src="https://shop-cdn1-2.vigbo.tech/shops/19661/products/21612973/images/3-a5029c863128167fb8cacc6702247f10.png" />
              <p>{post.message}</p>
            </div>
    )
}