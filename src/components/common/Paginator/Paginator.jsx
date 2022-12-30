import React from "react"; // нужен для транспиляции babel'ом jsx в js для браузера
import styles from "./Paginator.module.css"; 

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


// PREV - NEXT
// import React, {useState} from "react"; // нужен для транспиляции babel'ом jsx в js для браузера
// import styles from "./Paginator.module.css"; 
// import cn from "classnames";

// let Paginator = ({ totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 10 }) => {
//     // Количество страниц с пользователями (1 2 3 4 ...)
//     // pageSize - по сколько пользователей надо выводить на страницу по дизайну
//     let pagesCount = Math.ceil(totalItemsCount / pageSize);


//     // массив, из которго компонента берет нужную страницу для отрисовки
//     let pages = [];
//     for (let i = 1; i <= pagesCount; i++) {
//         if (pages.length < 10) {
//             pages.push(i);
//         }
//     }

//     let portionCount = Math.ceil(pagesCount / portionSize);
//     let [portionNumber, setPortionNumber] = useState(1);
//     let leftPortionPageNumber = (portionNumber - 1) + portionSize + 1;
//     let rightPortionPageNumber = portionNumber + portionSize;

//     return (
//         <div className={styles.paginator}>
//             {portionNumber > 1 &&
//                 <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}
//             {pages
//                 .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
//                 .map(p => {
//                     return <span className={ cn({
//                         [styles.selectedPage] : currentPage === p
//                     }, styles.pageNumber) }
//                                  key={p}
//                                  onClick={(e) => { onPageChanged(p) }}>
//                                 {p}
//                             </span>
//                 })}
//             {portionCount > portionNumber &&
//                 <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>}
//         </div>
//     )
// }

// export default Paginator;