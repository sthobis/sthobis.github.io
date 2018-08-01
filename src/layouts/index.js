import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import favicon from '../assets/icon.png';
import '../styles/_global.less';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Thobi Sinaga"
      meta={[
        { name: 'description', content: 'Stefanus Thobi Sinaga - Web/Mobile Developer' },
        { name: 'keywords', content: 'stefanus, thobi, sinaga, sthobis, contact' },
      ]}
    >
      <link
        rel="icon"
        type="image/png"
        href={favicon}
      />
    </Helmet>
    <div className="the-glitch">
      <div/>
      <div/>
      <div/>
      <div/>
      <div/>
    </div>
    <main>{children()}</main>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
