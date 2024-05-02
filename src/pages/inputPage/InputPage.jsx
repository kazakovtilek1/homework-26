import {useState} from 'react';

function InputPage() {

    const [nameInput, setNameInput] = useState('');
    const [names, setNames] = useState([]);

    const handleInputChange = (e) => {
        setNameInput(e.target.value);
    }

    function addName () {
        setNames([...names, nameInput]);
        setNameInput('')
    }

    function changeName (index) {
        const newName = nameInput
        const newNames = [...names];
        newNames[index] = newName;
        setNames(newNames);
    }


    return (
        <div>
            <input type="text" onInput={handleInputChange}/>
            <button onClick={addName} disabled={nameInput === ''}>Add</button>
            <ul>
                {names.length > 0 ? (
                    names.map((name, index) => (
                        <li key={index}>
                            {name}
                            <button onClick={() => changeName(index)} disabled={nameInput === ''}>Поменять</button>
                        </li>
                    ))
                ) : (
                    <p>Список пуст</p>
                )}
            </ul>
        </div>
    );
}

export default InputPage;