import { useState } from 'react';

import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcept';
import { CORE_CONCEPTS } from "./data";
import TabButton from "./components/TabButton";

function App() {
    const [ selectedTopic, setSelectedTopic ] = useState('Please click the button');

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
                        <CoreConcept {...CORE_CONCEPTS[0]}/>
                        <CoreConcept {...CORE_CONCEPTS[1]}/>
                        <CoreConcept {...CORE_CONCEPTS[2]}/>
                        <CoreConcept {...CORE_CONCEPTS[3]}/>
                    </ul>
                </section>
                <section id="examples">
                    <h2>Examples</h2>
                    <menu>
                        <TabButton onClick={() => handleClick('Components')}>Components</TabButton>
                        <TabButton onClick={() => handleClick('JSX')}>JSX</TabButton>
                        <TabButton onClick={() => handleClick('Props')}>Props</TabButton>
                        <TabButton onClick={() => handleClick('States')}>States</TabButton>
                    </menu>
                </section>
                <h2>Time to get started!</h2>
                {selectedTopic}
            </main>
        </div>
    );
}

export default App;
