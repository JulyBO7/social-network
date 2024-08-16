import { useState } from "react"
import style from './Paginator.module.css'
import rightArrow from '../../../assets/image/Frame-18svg.svg'
import leftArrow from '../../../assets/image/Frame-11svg.svg'

type Props = {
    totalCount: number
    pageSize: number
    currentPage: number
    portionSize: number
    onPageChanged: (page: number) => void
}
export const Paginator = (props: Props) => {
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const [portionNumber, setPortionNumber] = useState(1)
    const portionsCount = Math.ceil(pagesCount / props.portionSize)
    const leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1
    const rightPortionPageNumber = portionNumber * props.portionSize
    const onPageChanged = () => {
        setPortionNumber(portionNumber + 1)
        props.onPageChanged(rightPortionPageNumber + 1)
    }

    return (
        <div className={style.paginator}>
            {leftPortionPageNumber > 1
                && <button className={style.btn} onClick={() => setPortionNumber(portionNumber - 1)}>
                    <img src={leftArrow} />
                </button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p, i) => {
                    return <>
                        <span key={i} onClick={() => props.onPageChanged(p)} className={props.currentPage === p ? style.carrentPage : ''}> {p} </span>
                    </>
                })
            }
            {rightPortionPageNumber < pagesCount
                && <button className={style.btn} onClick={onPageChanged}>
                    <img src={rightArrow} />
                </button>}

        </div>
    )

}