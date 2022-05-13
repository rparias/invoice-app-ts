import React from 'react'
import { Box } from 'grommet'

const Navbar: React.FC = (): JSX.Element => (
  <nav className="navbar" style={{ height: '100%' }}>
    <Box
      flex
      background="brand"
      pad="medium"
      round={{ corner: 'right', size: '15px' }}
      style={{ height: '100%', justifyContent: 'space-between' }}
    >
      <div className="navbar__top">
        <div className="navbar__logo">logo</div>
      </div>
      <div className="navbar__bottom">
        <div className="navbar__buttons">
          <button type="button">moon</button>
          <div>image</div>
        </div>
      </div>
    </Box>
  </nav>
)

export default Navbar
