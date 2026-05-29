import React from 'react'
import MinamoBrandChar from './MinamoBrandChar'

function SiteFooter(): React.JSX.Element {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__brand">
          <MinamoBrandChar variant="footer" />
        </p>
        <p className="site-footer__copy">© {new Date().getFullYear()} MINAMO Studio. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default SiteFooter
