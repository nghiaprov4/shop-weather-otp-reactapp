const AddToDo = (props) => {
    const { toDo, setToDo, handleClickButton } = props;

    return (
        <div>
            <label>Cong viec can lam</label>


            <input value={toDo} type="text" onChange={(event) => setToDo(event.target.value)} />

            <button type="button" onClick={(event) => handleClickButton(event, "button")}>Submit</button>
            <br />             <br />

            <div>Cong viec dự tính làm: {toDo}</div>


        </div>

    )
}
export default AddToDo