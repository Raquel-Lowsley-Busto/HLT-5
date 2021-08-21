import logo from './cat-vector-2.svg';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">      </header>

      <div className="left-side">
        <h3>Why spend months trying to understand complex concepts when Hypno Cat can have you job ready in just 3 minutes?</h3>
        <br></br>
        <br></br>
        <p className="quote">"I did the Hypno Cat treatment<br></br> and it worked for me."<br></br><span className="reviewer"><i>Natalia, Dalston</i></span></p>


      </div>

      <div className="center">
        <h1>HYPNO CAT</h1>
        <br></br>
        <br></br>

        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <h2>
          Stare into the cat's eyes and<br></br> it will teach you all you need<br></br> to know about JavaScript.
        </h2>
        <p className="footer"><i>Put your trust in hypno cat to get ahead.</i></p>
      </div>

      <div className="right-side">
        <ul>
          <li>
            <p className="step-title">Step 1</p>
            <p className="step-body">Make sure you are alone in a quiet room where you will not be distracted.</p>
          </li>
          <li>
            <p className="step-title">Step 2</p>
            <p className="step-body">Start breathing deeply in and out through the nose until you are in a relaxed meditative state.</p>
          </li>
          <li>
            <p className="step-title">Step 3</p>
            <p className="step-body">Continue breathing deeply and now stare into Hypno Cat's eyes for three minutes, avoid blinking or looking away at any point. Please note learning effect may be strengthened if you play ambience music in the background.</p>
          </li>
          <li>
            <p className="step-title">Step 4</p>
            <p className="step-body">You're done! Hypno Cat has now taught you all you need to know about JavaScript and you are ready to hit the programming scene. Thanks Hypno Cat!</p>
          </li>
        </ul>
      </div>
    </div >
  );
}

export default App;
