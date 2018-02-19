import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './index.less'
import favicon from '../assets/icon.png'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Thobi Sinaga"
      meta={[
        { name: 'description', content: 'Stefanus Thobi Sinaga - About Me' },
        { name: 'keywords', content: 'thobi, sthobis, about, contact' },
      ]}
    >
      <link
        rel="icon"
        type="image/png"
        href={favicon}
      />
    </Helmet>
    <div className="bg">
      <div className="bg-glitch" />
      <div className="bg-glitch" />
      <div className="bg-glitch" />
      <div className="bg-glitch" />
      <div className="bg-glitch" />
    </div>
    <main>
      {children()}
    </main>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
