import React from 'react'
import Form from "./components/Form"
import BookList from "./components/CountDiv"

class App extends React.Component {

  render() {
    return (
      <div>
        <div>
          <section>
            <div id="bluebox" className="resizable">
              <Form>

              </Form>
              <BookList>

              </BookList>
            </div>
            <div id="blackbox" className="resizable">I AM A BOARING BOX</div>
          </section>
        </div>
        <section>
          <div id="bigflex" className="resizable">THEY ARE JUST BOARING BOXES</div>
        </section>

      </div>
    )
  }

}

export default App