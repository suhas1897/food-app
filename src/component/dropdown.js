import React, { useState } from 'react';
import { AiOutlineCaretUp, AiOutlineCaretDown } from 'react-icons/ai';
import list from '../list.json';
import './dropdown.css';

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="drop1">
            <button onClick={() => setIsOpen(prev => !prev)} className="drop2">
                Dropdown
                {!isOpen ? (
                    <AiOutlineCaretDown className="h-8" />
                ) : (
                    <AiOutlineCaretUp className="h-8" />
                )}
            </button>
            {isOpen && (
                <div className="drop3">
                    {list.map((item, i) => (
                        <div key={i}>
                            <h3>{item.day}</h3>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Dropdown;
