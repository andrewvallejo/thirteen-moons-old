import React from "react"
import { useRouteMatch, Route } from 'react-router-dom';
import { MoonCard } from './MoonCard'
import { MoonLevel } from "./MoonLevel"
import { MoonMsgBar } from './MoonMsgBar'

export const Spread = ({deck, hand, draw}) => {
  const match = useRouteMatch().url;
    return (
      <Route path={`${match}`} >
        <section className="card-spread">
              <MoonMsgBar />
              <MoonLevel levels={deck}/>
              <MoonCard deck={hand}/>
            </section>
        </Route>
  )
}