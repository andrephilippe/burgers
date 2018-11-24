import React from 'react';

import './PageBody.scss';

const PageBody = props => (
    <main className='app-body'>
        {props.children}
    </main>
)

export default PageBody;