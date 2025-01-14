import TabButton from "./TabButton";
import {EXAMPLES} from "../data";
import {useState} from "react";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
    const [ selectedTopic, setSelectedTopic ] = useState();

    function handleClick(selectedButton) {
        console.log(selectedButton);
        setSelectedTopic(selectedButton);
    }

    return (
        <Section title="Examples" id="examples">
            <Tabs ButtonContainer={"menu"} buttons={(<><TabButton isSelected={selectedTopic === 'components'}
                                      onClick={() => handleClick('components')}>Components</TabButton>
                <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'}
                       onClick={() => handleClick('state')}>States</TabButton></>)}>
                {!selectedTopic ? <p>Please select a topic!</p> : null}
                {selectedTopic ? (<div id="tab-content"><h3>{EXAMPLES[selectedTopic].title}</h3>
                    <p>{EXAMPLES[selectedTopic].description}</p>
                    <pre>
                            <code>
                                {EXAMPLES[selectedTopic].code}
                            </code>
                        </pre>
                </div>) : null}
            </Tabs>

        </Section>
    );
}