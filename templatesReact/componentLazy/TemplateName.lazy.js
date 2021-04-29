// templatesReact/componentLazy/TemplateName.js

import React, {lazy, Suspense} from 'react'

const LazyTemplateName = lazy(() => import('./TemplateName.js'));

const TemplateName = props =>  (
        <Suspense fallback={null}>
            <LazyTemplateName {...props}/>    
        </Suspense>
    );

export default TemplateName
