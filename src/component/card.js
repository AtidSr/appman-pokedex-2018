import React from 'react'
import './styles/card.css'

const CardComponent = (props) => {
  const {
    isFullWidth = true,
    clickSign = 'Add',
    cardInfo,
    onClickEvent,
  } = props

  const progressBar = (width = 0) => {
    return {
      height: '100%',
      backgroundColor: '#f3701a',
      width: `${width}%`,
    }
  }

  const calculateHp = () => {
    let hp = cardInfo.hp
    if (hp > 100) hp = 100
    return Number(hp)
  }

  const calculateDamage = () => {
    let damageArray = cardInfo?.attacks?.map(
      (attack) => `${attack.damage}`.match(/(\d+)/)?.[0],
    )
    if (damageArray) {
      let sumDamage = damageArray.reduce(
        (acc, current) => (acc += Number(current)),
        0,
      )
      return sumDamage || 0
    }
    return 0
  }

  const calculateWeakness = () => {
    const weakness = cardInfo?.weaknesses?.length * 100 || 0
    if (weakness > 100) return 100 / 100
    return weakness / 100
  }

  const renderHappiness = () => {
    const calculateHappiness = Math.ceil(
      (calculateHp() / 10 +
        calculateDamage() / 10 +
        10 -
        calculateWeakness()) /
        5,
    )
    if (calculateHappiness > 0) {
      let happinessArray = []
      for (let i = 0; i < calculateHappiness; i++) {
        happinessArray.push(
          <img
            className="card-happiness-image"
            src={require('./images/cute.png')}
            alt="cute"
            key={`${cardInfo.id}_happiness_${i}`}
          />,
        )
      }
      return happinessArray
    }
    return ''
  }

  const renderCard = () => {
    if (!cardInfo) return <></>
    return (
      <div
        className={`card-container ${
          isFullWidth ? 'card-full-width' : 'card-half-width'
        }`}
        onClick={() => onClickEvent(cardInfo)}
      >
        <div className="card-hide">{clickSign}</div>
        <img
          className="card-image"
          src={cardInfo.imageUrl}
          alt={cardInfo.name}
        />
        <div className="card-info">
          <div className="card-title">{cardInfo.name}</div>
          <div className="card-description">
            <div className="card-description-tilte">HP</div>
            <div className="bar">
              <div style={progressBar(cardInfo.hp)}></div>
            </div>
          </div>
          <div className="card-description">
            <div className="card-description-tilte">str</div>
            <div className="bar">
              <div
                style={progressBar(
                  cardInfo?.attacks?.length * 50 || 0,
                )}
              ></div>
            </div>
          </div>
          <div className="card-description">
            <div className="card-description-tilte">weak</div>
            <div className="bar">
              <div
                style={progressBar(
                  cardInfo?.weaknesses?.length * 100 || 0,
                )}
              ></div>
            </div>
          </div>
          <div className="card-happiness">{renderHappiness()} </div>
        </div>
      </div>
    )
  }
  return renderCard()
}

export default CardComponent
