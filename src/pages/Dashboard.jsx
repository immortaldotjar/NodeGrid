import React, { useState, useEffect } from 'react';
import NoteCompGrp from "../components/NoteCompGrp";
import NoteCardGrp from '../components/NoteCardGrp';
import { CardContext } from '../components/Context/Context';

const Dashboard = () => {
    const [cards, setCards] = useState(() => {
        const data = localStorage.getItem("cards");
        return data ? JSON.parse(data) : [];
    })
    const [edit, setEdit] = useState(null);


    useEffect(() => {
        localStorage.setItem("cards", JSON.stringify(cards));
    }, [cards]);

    const addCard = (head, detail, category, color) => {
        setCards(data => [...data, { head, detail, category, color }]);
    }

    const saveCard = (head, detail, category, color) => {
        setCards(data =>
            data.map((c, i) => i === edit ? { head, detail, category, color } : c)
        );
        setEdit(null)
    };

    const deleteCard = (index) => {
        setCards(data => data.filter((item, i) => i !== index));
    };

    const startEdit = (index) => {
        setEdit(index);
    };

    return (
        <CardContext.Provider value={{ cards, addCard, saveCard, deleteCard, edit, startEdit }}>
            <div className="md:flex h-full w-full p-6 space-x-10 space-y-10">
                <div className="md:w-1/3 w-full h-full">
                    <NoteCompGrp />
                </div>
                <div className="md:w-2/3 w-full h-full">
                    <NoteCardGrp />
                </div>
            </div>
        </CardContext.Provider>
    );
};

export default Dashboard;
