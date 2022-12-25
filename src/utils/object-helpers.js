
export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    return items.map(user => {
        if (user[objPropName] === itemId) {
            return {...user, ...newObjProps}
        }
        return user;
    })
}

// updateObjectInArray содержит эту логику const follow,  const unfollow в users-reducer.js:

/* users: state.users.map(user => {
    if (user.id === action.userId) {
        return { ...user, followed: true }; // копия пользователя
    }
    return user;
}) */

// где
// items = state.users
// newObjProps = followed: true 
// у newObjProps может быть одно свойство followed: true, а может быть несколько
