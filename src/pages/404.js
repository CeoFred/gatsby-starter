import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout';

export default () => (
    <Layout>
        <div>
        <h1>Nothing is found</h1>
        {' | '}
        <Link to='/home'>Go Back Home</Link>

    </div>
    </Layout>
    
)