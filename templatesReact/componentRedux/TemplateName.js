// templatesReact/componentRedux/TemplateName.js
import React from 'react'
import { connect } from 'react-redux'
import styles from './TemplateName.module.scss';

export const TemplateName = (props) => {
    return (
        <div className={styles.TemplateName}>
            TemplateName Component {state}
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(TemplateName)
