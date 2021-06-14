function Display ({ display, evaluate, number, result, deleted }) {
  
  const formatter = require('../helpers/formatter')
  const lenResult = result.length

  let formatted = ''
  let infix = deleted ? display : evaluate

  if (result !== '' && display === result) {
    if (lenResult < 21) {
      formatted = formatter(result, true)
    } else {
      formatted = formatter(result, false)
    }
  } else {
    formatted = isNaN(parseFloat(number)) ? 0 : formatter(number, true)
  }

  return (
    <div className='display glass'>
      {formatted || '0'}
      <div className='preview'>{infix.trim().toLocaleString() || '0'}</div>
    </div>
  )
}

export default Display
