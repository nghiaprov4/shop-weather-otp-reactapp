import { useState } from "react";

const AddNewProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState(0);
    const [color, setColor] = useState("");

    const handleClickBtn = () => {
        let object = { name, color, price, size }
        // console.log("checck du lieu data: ", object)
        // localStorage.setItem("productList", JSON.stringify(object));// chuyen kieu object thanh string

        //lay productList

        let productList = localStorage.getItem("productList");
        if (productList) {
            let arr = JSON.parse(productList)
            arr.push(object)
            localStorage.setItem("productList", JSON.stringify(arr));// chuyen kieu object thanh string
        } else {
            let a = [object]
            localStorage.setItem("productList", JSON.stringify(a));
        }
        // console.log("<< check producctList parase:", JSON.parse("productList")); // chuyen thanh array


        setName("");
        setPrice(0)
        setSize(0)
        setColor("")
    }
    const [isShowDetail, setIsShowDetail] = useState(false)

    const handleHideShow = () => {
        //cach 1 
        setIsShowDetail(!isShowDetail)
    }
    // const handleHideShow1 = () => {
    //     //cach 2
    //     let currentStatus = isShowDetail;
    //     if (isShowDetail === true) currentStatus = false;
    //     if (isShowDetail === false) currentStatus = true;

    //     setIsShowDetail(currentStatus)
    // }

    // const handleHideShow2 = (status) => {
    //     //cach 3


    //     setIsShowDetail(status)
    // }
    return (
        <div>
            {
                isShowDetail === true &&
                <fieldset>
                    <legend>Add a New Product</legend>
                    <div className="input-product">
                        <label>Name:</label>
                        <input value={name} type="text" onChange={(event) => setName(event.target.value)} />

                    </div>
                    <div className="input-product">
                        <label>Price:</label>
                        <input value={price} type="text" onChange={(event) => setPrice(event.target.value)} />

                    </div>
                    <div className="input-product">
                        <label>Size:</label>
                        <input value={size} type="text" onChange={(event) => setSize((event.target.value))} />

                    </div>

                    <div className="input-product">
                        <label>Color:</label>
                        <input value={color} type="text" onChange={(event) => setColor((event.target.value))} />

                    </div>
                    <div>
                        <button onClick={() => handleClickBtn()}> Add New</button>
                    </div>
                </fieldset>
            }
            {/* {

                isShowDetail === true && <div onClick={() => handleHideShow()}> Hide this form </div>
            }

            {

                isShowDetail === false && <div onClick={() => handleHideShow()}>Show the form </div>
            } */}


            {/* {

                isShowDetail === true && <div onClick={() => handleHideShow1()}> Hide this form </div>
            }

            {

                isShowDetail === false && <div onClick={() => handleHideShow1()}>Show the form </div>
            } */}

            {/* {

                isShowDetail === true && <div onClick={() => handleHideShow2(false)}> Hide this form </div>
            }

            {

                isShowDetail === false && <div onClick={() => handleHideShow2(true)}>Show the form </div>
            } */}
            {
                isShowDetail === true ? <div onClick={() => handleHideShow()}> Hide this form </div>
                    : <div onClick={() => handleHideShow()}>Show the form </div>
            }

            <div>
                <h3>Product list: </h3>
                <div>
                    {
                        localStorage.getItem("productList")

                    }
                </div>


            </div>

        </div>
    )
}
export default AddNewProduct;