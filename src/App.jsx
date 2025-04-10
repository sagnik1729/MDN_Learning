
function App() {


  return (
    <div className="container">
      <h1 className="main-heading">Topics Covered</h1>
      <p className="intro-text">The following is a list of all the topics we cover in the MDN learning area.</p>
      <div className="topic-section">
        <a href="#" className="topic-link" >Getting started with the web</a>
        <p className="topic-description">
          Provides a practical introduction to web development for complete beginners.
        </p>

      </div>
      <div className="topic-section">

        <a href="#" className="topic-link">HTML - Structuring the web</a>
        <p className="topic-description">HTML is the language that we use to structure the different 
          parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.

        </p>
      </div>
      <div className="topic-section">

        <a href="#" className="topic-link">CSS - Styling the web</a>

        <p className="topic-description">CSS is the language that we use to control our web content's style and
          layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.
        </p>
      </div>


    </div>
  )
}

export default App
// MDN_Learning