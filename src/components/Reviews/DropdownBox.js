import React, { useState } from 'react'
import { Form, } from 'react-bootstrap';
import { IoMdArrowDropdown } from 'react-icons/io'
import "./reviewStyles.css";
import "./Dropdown.css";
export const DropdownBox = (props) => {
    const [active, setActive] = useState(false);
    return (
        <div className='DropDown'>
            <Form.Group className="question-grp">
                <div>
                    <Form.Label className="label-container">
                        <div className='dropdown-title'>
                            Can you share an example of a flexible work arrangement you've experienced at this company?"
                        </div>
                        <div className='dropdown-button' button onClick={() => setActive(!active)}><IoMdArrowDropdown /></div>
                    </Form.Label>
                </div>
                <div>
                    {active && <Form.Control
                        className="input-box"
                        type="text"
                        placeholder="Type answer here..."
                        value={props?.value}
                        onChange={(e) => props?.func(e.target.value)}
                        required
                    />}
                </div>
            </Form.Group>
        </div>
    )
}
