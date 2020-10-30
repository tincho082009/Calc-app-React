import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Functions = ({onContentClear, onDelete}) => (
    <div className="functions">
        <Button text="Clear" clickHandler={onContentClear}/>
        <Button text="R" clickHandler={onDelete}/>
    </div>            
)


Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}
export default Functions;