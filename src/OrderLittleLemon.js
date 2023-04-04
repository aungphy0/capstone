import React, {useState} from 'react';

/*
const data = [
    {
        id: "1",
        title: "Tiramisu",
        description: "The best tiramisu in town",
        image: "https://picsum.photos/200/300/?random",
        price: "$5.00",
    },
    {
        id: "2",
        title: "Lemon Ice Cream",
        description: "Mind blowing taste",
        image: "https://picsum.photos/200/300/?random",
        price: "$4.50",
    },
    {
        id: "3",
        title: "Chocolate mousse",
        description: "Unexplored flavour",
        image: "https://picsum.photos/200/300/?random",
        price: "$6.00",
    },
]

const topMenuItems = data.map( item => {
    return{
        content: `${item.title} - ${item.description}`,
        price: item.price,
    }
})
*/

const ToDo = (props) => (
    <tr>
        <td>
            <label>{props.id}</label>
        </td>
        <td>
            <input />
        </td>
        <td>
            <label>{props.createdAt}</label>
        </td>
    </tr>
);
export default function OrderLittleLemon(){
    // console.log(topMenuItems)
    const [todos, setTodos] = useState([
        {
            id: 'todo1',
            createdAt: '18:00',
        },
        {
            id: 'todo2',
            createdAt: '20:30',
        }
    ]);

    const reverseOrder = () => {
        setTodos([...todos].reverse());
    }

    return (
        // <h1>OrderLittleLemon</h1>
        <div>
            <button onClick={reverseOrder}>Reverse</button>
            <table>
                <tbody>
                    {todos.map((todo, index) => (
                        <ToDo key={index} id={todo.id} createdAt={todo.createdAt} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}