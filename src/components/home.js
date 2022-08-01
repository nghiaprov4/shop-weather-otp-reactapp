import React, { useState } from "react";
import _ from 'lodash'
import ListToDo from "./ListToDo";
import AddToDo from "./AddToDo";
const Home = () => {
    // const [name, setName] = useState("Thieu Quang Nghia")
    const [toDo, setToDo] = useState("");
    const [listToDo, setListToDo] = useState(

        [
            { id: 'toDo1', name: "Hoc ReactJs" },
            { id: 'toDo2', name: "Lam Do An" },
            { id: 'toDo3', name: "Hoc ReactJs" }


        ]

    )
    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    // const handleClickButton = (event, msg) => {
    //     console.log("chay handle clickbutton------:", name)
    // }
    const handleClickButton = (event, msg) => {
        let toDoId = randomIntFromInterval(1, 100)
        let toDoItem = {
            id: `todDo${toDoId}`, name: toDo
        }


        setListToDo([...listToDo, toDoItem]) //CACCH 1: UU TIEN DUNG//DAU ... LÀ dùng để copy listtodo sau đó thêm cái item mới vào cái listtodo

        // let giatrinhap = _.clone(listToDo) // cach 2: phai import thu vien loadash
        // giatrinhap.push(toDoItem)
        // setListToDo(giatrinhap)
    }
    const handeClickDelete = (id) => {
        alert('clickme có id là   ' + id)
        let giatrinhap = _.clone(listToDo)
        // giatrinhap = giatrinhap.filter(item => item.id !== id) // cach 1
        giatrinhap = giatrinhap.filter(item => {
            if (item.id !== id) return item
        })
        setListToDo(giatrinhap)
    }
    return (

        <div>
            <AddToDo
                toDo={toDo}
                setToDo={setToDo}
                handleClickButton={handleClickButton}

            />

            <ListToDo
                childData={listToDo}
                name={"thieu qquang nghhia"}
                deleteToDo={handeClickDelete}


            />

        </div>
    );

}
// class home extends React.Component {
//     state = {
//         name: "Thieu Quang Nghia"
//     }
//     render() {
//         return (

//             <div>
//                 <label>Name</label>
//                 <br />                 <br />
//                 <input type="text" onChange={(event) => this.setState({ name: event.target.value })} />

//                 <br />
//                 Tôi tên là = {this.state.name}
//             </div>

//         );

//     }
// }
export default Home;