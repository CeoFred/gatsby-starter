import React from 'react';
import {Link} from 'gatsby';

import Layout from '../components/layout';

export default () => (
    <Layout>
        <div>
        <h1>About Page</h1>
        <Link to='/about'>About</Link>
        {' | '}
        <Link to='/'>Index</Link>

    </div>
    </Layout>
    
)