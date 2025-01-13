import { useState } from 'react';

import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import {CORE_CONCEPTS, EXAMPLES} from "./data";
import TabButton from "./components/TabButton";

function App() {
    const [ selectedTopic, setSelectedTopic ] = useState();

    function handleClick(selectedButton) {
        console.log(selectedButton);
        setSelectedTopic(selectedButton);
    }

    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>

                    <ul>
                        {CORE_CONCEPTS.map((concept) => (<CoreConcept key={concept.title} {...concept}/>))}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleClick('components')}>Components</TabButton>
                        <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
                        <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleClick('state')}>States</TabButton>
                    </menu>
                </section>
                {!selectedTopic ? <p>Please select a topic!</p> : null}
                {selectedTopic ? (<div id="tab-content"><h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                        <code>
                            {EXAMPLES[selectedTopic].code}
                        </code>
                    </pre>
                </div>) : null}
            </main>
        </div>
    );
}

export default App;
