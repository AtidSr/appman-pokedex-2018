import React from 'react'
import './styles/card.css'

const Mock = {
  id: 'ex8-98',
  name: 'Deoxys ex',
  nationalPokedexNumber: 386,
  imageUrl: 'https://images.pokemontcg.io/ex8/98.png',
  imageUrlHiRes: 'https://images.pokemontcg.io/ex8/98_hires.png',
  supertype: 'Pokémon',
  subtype: 'EX',
  ability: {
    name: 'Form Change',
    text: "Once during your turn (before your attack), you may search your deck for another Deoxys ex and switch it with Deoxys ex. (Any cards attached to Deoxys ex, damage counters, Special Conditions, and effects on it are now on the new Pokémon.) If you do, put Deoxys ex on top of your deck. Shuffle your deck afterward. You can't use more than 1 Form Change Poké-Power each turn.",
    type: 'Poké-Power',
  },
  hp: '110',
  retreatCost: ['Colorless', 'Colorless'],
  convertedRetreatCost: 2,
  number: '98',
  artist: 'Mitsuhiro Arita',
  rarity: 'Rare Holo EX',
  series: 'EX',
  set: 'Deoxys',
  setCode: 'ex8',
  text: [
    'When Pokémon-ex has been Knocked Out, your opponent takes 2 Prize cards.',
  ],
  attacks: [
    {
      cost: ['Psychic', 'Colorless', 'Colorless'],
      name: 'Psychic Burst',
      text: 'You may discard 2 Energy attached to Deoxys ex. If you do, this attack does 50 damage plus 20 more damage for each Energy attached to the Defending Pokémon.',
      damage: '50+',
      convertedEnergyCost: 3,
    },
  ],
  weaknesses: [
    {
      type: 'Psychic',
      value: '×2',
    },
  ],
  type: 'Psychic',
}

const CardComponent = () => {
  return (
    <div className="card-container">
      <div className="card-image">
        <img src={Mock.imageUrl} alt={Mock.name} />
      </div>
      <div className="card-info">
        <div className="card-title">{Mock.name}</div>
      </div>
    </div>
  )
}

export default CardComponent
