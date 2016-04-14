import React from 'react'
import './styles.scss'

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <div className="header">
          <div className="nav">
            <div className="logo">
              <img width="60" height="60" src="/logo.png" /> <h1>Reploy</h1>
            </div>
            <div className="subnav">
              <a href="#features">Features</a>
              <a href="#team">Team</a>
              <a href="https://app.reploy.io/signup">Sign up</a>
            </div>
          </div>
          <div className="tagline">
            <h2>Speed up your react native app development</h2>
            <h3>Skip app testing headaches.</h3>
            <h4>Keep your team and customers in the loop with in-browser app testing tools.</h4>
          </div>
          <a href="https://app.reploy.io/signup"><button>Sign up and setup your first app</button></a>
        </div>
        <div id="features" className="features">
          <h2>Features</h2>
          <div className="features-block">
            <div className="push">
              <div className="feature-image">
                <img src="/feature-push.png" />
              </div>
              <h4>push</h4>
              <p>Build and push your app from the command line.</p>
            </div>
            <div className="test">
              <div className="feature-image">
                <img src="/feature-test.png" />
              </div>
              <h4>test</h4>
              <p>Get people testing immediately <em>in-browser</em> on iOS and Android simulators.</p>
            </div>
            <div className="comment">
              <div className="feature-image">
                <img src="/feature-comment.png" />
              </div>
              <h4>comment</h4>
              <p>Your testers comment on screen captures of bugs or suggestions.</p>
            </div>
            <div className="review">
              <div className="feature-image">
                <img src="/feature-review.png" />
              </div>
              <h4>review</h4>
              <p>You review feedback from your team and your customers.</p>
            </div>
          </div>
        </div>
        <div id="team" className="team">
          <h2>Meet the team</h2>
          <p className="blurb">
            We're co-creators of the <a href="https://rnplay.org">React Native Playground</a>, contribute to React Native core,
            and are friends from the way back in the flamenco music scene in Spain.</p>
          <p className="blurb">We also build apps! We found it's a hassle to distribute apps to phones, to get people to test, and to get visual feedback.</p>
          <p>We built Reploy to solve this problem!</p>
          <div className="bios">
            <div>
              <img src="/chris.png" />
              <h3>Christopher Dro</h3>
                <p>I'm passionate about building cross-platform apps and contributing to React Native.
                  In my free time I play guitar and work on Reploy :)
                  </p>
                  <h4><a href="http://chris.si">chris.si</a></h4>
            </div>
            <div>
              <img src="/joshua.png" />
                <h3>Joshua Sierles</h3>
                <p>I spent some of my time working on Reploy and React Native apps.
                  The rest of my time I enjoy a slow life in southern Spain playing flamenco guitar or drinking small beers.
                  </p>
                  <h4><a href="http://joshua.si">joshua.si</a></h4>
            </div>
          </div>
        </div>
        <div className="footer">
          <img src="/logo.png" />
          <h5><a href="mailto:team@reploy.io">team@reploy.io</a></h5>
        </div>
      </div>
    )
  }
}
