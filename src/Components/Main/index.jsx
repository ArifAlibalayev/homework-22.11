import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

function Main() {
  return (
    <main>
        <section className='Features'>
            <div className="feature_tagline"><h2>A better way to start building.</h2></div>
            <div className="cardwrapper">
                <div className="card">
                    <div className="cardicon">
                    <FontAwesomeIcon icon="fa-regular fa-file-code"/>
                    </div>
                    <h3>Featured title</h3>
                    <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                </div>
                <div className="card">
                    <div className="cardicon">
                    <FontAwesomeIcon icon="fa-regular fa-file-code"/>
                    </div>
                    <h3>Featured title</h3>
                    <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                </div>
                <div className="card">
                    <div className="cardicon">
                    <FontAwesomeIcon icon="fa-regular fa-file-code"/>
                    </div>
                    <h3>Featured title</h3>
                    <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                </div>
                <div className="card">
                    <div className="cardicon">
                    <FontAwesomeIcon icon="fa-regular fa-file-code"/>
                    </div>
                    <h3>Featured title</h3>
                    <p>Paragraph of text beneath the heading to explain the heading. Here is just a bit more text.</p>
                </div>
            </div>
        </section>
    <section className='Bootstrap'>
        <div className="bootstrap-content">
        <h4>"Working with Start Bootstrap templates has saved me tons of development time when building new projects! Starting with a Bootstrap template just makes things easier!"</h4>
        <p>Tom Ato <span>/</span> CEO, Pomodoro</p>
        </div>
    </section>
    </main>
  )
}

export default Main