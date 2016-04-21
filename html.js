import React from 'react'
import DocumentTitle from 'react-document-title'

import { prefixLink } from 'gatsby-helpers'
import { TypographyStyle } from 'utils/typography'

module.exports = React.createClass({
  propTypes () {
    return {
      title: React.PropTypes.string,
    }
  },
  render () {
    const title = DocumentTitle.rewind()

    let cssLink
    if (process.env.NODE_ENV === 'production') {
      cssLink = <link rel="stylesheet" href={prefixLink('/styles.css')} />
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0 maximum-scale=1.0"
          />
          <title>{title}</title>
          <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Varela+Round" />
          <link id="favicon" rel="shortcut icon" href="/favicon.png" sizes="16x16 32x32 64x64" type="image/png" />
          <TypographyStyle />
          {cssLink}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          <script src={prefixLink('/bundle.js')} />
            <script src="//static.getclicky.com/js" type="text/javascript"></script>
            <script type="text/javascript">{"try{ clicky.init(100945198); }catch(e){}"}</script>
            <noscript><p><img alt="Clicky" width="1" height="1" src="//in.getclicky.com/100945198ns.gif" /></p></noscript>
        </body>
      </html>
    )
  },
})
