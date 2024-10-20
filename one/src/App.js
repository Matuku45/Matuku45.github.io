import React, { useState } from 'react';

function Car() {
    return <h2>Hi, I am a Car!</h2>;
}

function Person() {
    return <h3>Person Information</h3>;
}

function Form() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Name: ${name}, Surname: ${surname}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:
                    <input 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </label>
            </div>
            <div>
                <label>
                    Surname:
                    <input 
                        type="text" 
                        value={surname} 
                        onChange={(e) => setSurname(e.target.value)} 
                    />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

function App() {
    return (
        <div>
            <Car />
            <Person />
            <Form /> {/* Adding the Form component */}
        </div>
    );
}

export default App; // Exporting the App component