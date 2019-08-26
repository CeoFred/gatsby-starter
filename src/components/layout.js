import React from 'react';
import styles from './layout.module.scss';

import Header from './header';

export default ({children}) => (
    <div className={styles.container}>
        <Header/>
        {children}
        {console.log(styles)}
    </div>
)