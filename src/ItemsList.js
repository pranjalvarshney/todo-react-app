import './ItemsList.css';
import React from 'react';
import FlipMove from 'react-flip-move';

export default function ItemsList(props) {
  
    const items = props.list    
    const listmap = items.map(data => {
            const d = data.itemKey.toString()
            return  <div key={data.itemKey} onDoubleClick={() => props.deleteItem(data.itemKey)}>
                        <p id="itemdata-div">
                            <input value={data.inputvalue} onChange={(e)=>{props.updateItem(e.target.value, data.itemKey)}}/> 
                            <span>{Date(d).slice(0,10)}</span>
                        </p>
                    </div>
        })

    return (
        <div className="ItemsList">
            <FlipMove duration={300}>
                {listmap}
            </FlipMove>
        </div>
    )
}
