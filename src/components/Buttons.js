import Button from './Button'
const buttons = require('../helpers/data.js')

function Buttons ({ userInput }) {

  const keys = buttons.map(item => {
    return (
      <Button 
        key={item.info.symbol}
        category={item.info.category}
        evaluate={item.info.evaluate}
        symbol={item.info.symbol}
        className={item.className}
        userInput={userInput}
      />
    )
  })

  return <>{keys}</>
}

export default Buttons
