import { useState } from "react";

const ListToDo = (props) => {
    const handeClickDelete = (id) => {
        props.deleteToDo(id);


    }
    const listToDo = props.childData
    return (

        <div>
            <div>
                Danh sach cong viec can lam:


            </div>
            {listToDo.map((item, index) => {
                return (
                    <div key={item.id} onClick={() =>
                        handeClickDelete(item.id)
                    }> {item.name}</div>

                )
            })}

        </div>
    )

}
export default ListToDo