import React from 'react'
import './Nav.css'
import ScreenRouter from './ScreenRouter'
import { Route, Switch, Router } from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import history from '../../utils/history'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100hv;
  background-color:#eeeeeeee;
`

export default function Nav() {
  console.log('ScreenRouter', ScreenRouter)
  return (
    <Container>
      <Router history={history}>
        <Switch>
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper-animated"
          >
            {ScreenRouter.map(val => (
              <Route component={val.component} path={val.path} exact />
            ))}
          </AnimatedSwitch>
        </Switch>
      </Router>
    </Container>
  )
}
