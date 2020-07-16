import React, { useContext } from 'react'
import UserInfoContext from '../contexts/UserInfoContext'
import multiInfoContext from '../contexts/MultiInfoContext';

function HelloHookMulti() {
    const userInfo = useContext(UserInfoContext);
    const multiInfo = useContext(multiInfoContext);

    return (
        <div>
            <h2>Hello {multiInfo} {userInfo}</h2>
        </div>
    )
}

export default HelloHookMulti
