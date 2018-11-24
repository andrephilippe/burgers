import React from 'react';

import PageHeader from '../header/PageHeader';
import PageFooter from '../footer/PageFooter';
import PageBody from '../body/PageBody';
import Loader from '../loader/Loader';

const BaseTemplate = props => (
    <div id="base-template">
        <PageHeader />
        <PageBody>
            {props.children}
        </PageBody>
        <PageFooter />
        <Loader />
    </div>
)

export default BaseTemplate;

