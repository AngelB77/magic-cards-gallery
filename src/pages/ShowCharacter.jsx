import { useEffect } from "react";
import { useState } from "react";

const ShowCharacter = () => {
    const [character, setcharacter] = useState([]);
    function getAllcharacter() {
        fetch('https://api.magicthegathering.io/v1/cards')
            .then(response => response.json())
            .then(data => {
                console.log(data.cards)
                setcharacter(data.cards)
            });
    }
    useEffect(() => {
        getAllcharacter()
    }, []);
    return (
        <>
            <h1>Cartas</h1>
            {
              character.map((character) => (
                    <div key={character.id}>
                        <img src={character.imageUrl} alt={character.name} />
                        <p>Nombre: {character.name}</p>
                        <p>type: {character.type}</p>
                        <p>artist: {character.artist}</p>
                        <p>setName: {character.setName}</p>
                        <p>text:{character.text}</p>
                    </div>
                ))
            }

        </>
    );
};

export default ShowCharacter;