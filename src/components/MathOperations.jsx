import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const MathOperations = ({onClickOperation, onClickEqual}) => (
    <section className="math-operations">
        <Button text="+" clickHandler={onClickOperation} type></Button>
        <Button text="-" clickHandler={onClickOperation} type></Button>
        <Button text="*" clickHandler={onClickOperation} type></Button>
        <Button text="/" clickHandler={onClickOperation} type></Button>
        <Button text="=" clickHandler={onClickEqual} type></Button>
    </section>                     
)


MathOperations.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}
export default MathOperations;