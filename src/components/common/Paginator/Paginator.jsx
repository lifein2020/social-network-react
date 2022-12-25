import React from "react"; // нужен для транспиляции babel'ом jsx в js для браузера
import styles from './Paginator.module.css';

let Paginator = ({ totalUsersCount, pageSize, onPageChanged, currentPage }) => {
    // Количество страниц с пользователями (1 2 3 4 ...)
    // pageSize - по сколько пользователей надо выводить на страницу по дизайну
    let pagesCount = Math.ceil(totalUsersCount / pageSize);
    

    // массив, из которго компонента берет нужную страницу для отрисовки
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        if (pages.length < 10) {
            pages.push(i);
        }
    }

    return (
        <div>
            {pages.map(p => {
                return <span className={currentPage === p ? styles.selectedPage : " "}
                             onClick={(e) => { onPageChanged(p) }}
                             key={p.id}>
                                {`${p} ${" "}`}
                       </span>
            })}
        </div>
    )
}

export default Paginator;