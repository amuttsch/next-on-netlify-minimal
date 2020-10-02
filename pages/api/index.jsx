import React, {useEffect, useState} from 'react';

export default ({somePropFrom_app}) => {
    const [someState, setSomeState] = useState('waiting for client side code execution...');

    useEffect(() => {
        setSomeState('client side code was executed properly!')
    });

    return (
        <main>
            <p>{somePropFrom_app}</p>
            <p>{someState}</p>
        </main>
    )
}