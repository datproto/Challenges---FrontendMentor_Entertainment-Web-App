import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'

function Icon({ name }) {
    return (
        <FontAwesomeIcon icon={brands("twitter")} />
    )
}

export default Icon