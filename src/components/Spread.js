import React from "react"
import PropTypes from 'prop-types';
import { MoonCard } from './MoonCard'
import { MoonLevel } from "./MoonLevel"
import { MoonMsgBar } from './MoonMsgBar'

export const Spread = ({deck, hand, draw}) => {
    return (
        <section className="card-spread">
              <MoonMsgBar />
              <MoonLevel levels={deck}/>
              <MoonCard cards={hand} draw={draw} />
            </section>
  )
}

Spread.propTypes = {
  deck: PropTypes.array,
  hand: PropTypes.array,
  draw: PropTypes.func
}