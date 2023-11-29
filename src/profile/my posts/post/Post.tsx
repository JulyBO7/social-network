import s from './Post.module.css'


type PostPropsType = {
    message: string
}

export const Post = (props: PostPropsType) => {
    return (
            <div className={s.item}>
                  <p>My posts:</p>
              <img src="https://shop-cdn1-2.vigbo.tech/shops/19661/products/21612973/images/3-a5029c863128167fb8cacc6702247f10.png" />
            
              <p>{props.message}</p>
            </div>
    )
}