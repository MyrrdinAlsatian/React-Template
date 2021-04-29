// templatesReact/componentLazy/TemplateName.js

import React, {useState} from 'react'
import styles from './TemplateName.module.scss';

function TemplateName({}) {

    const [state, setState] = useState(initialState)
    
    return (
        <div className={styles.TemplateName}>
            TemplateName Component {state}
        </div>
    )
}

export default TemplateName
