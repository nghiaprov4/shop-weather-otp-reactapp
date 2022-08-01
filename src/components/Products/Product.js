import "./Product.scss";
import giay1 from "../../assets/image/giay1.jpg"
import giay2 from "../../assets/image/giay2.jpg"
import giay3 from "../../assets/image/giay3.jpg"
import giay4 from "../../assets/image/giay4.jpg"
import { useState } from "react";
import Lightbox from 'react-image-lightbox';


const Product = () => {
    const images = [
        giay1,
        giay2,
        giay3,
        giay4
    ]
    const [imgUp, setImgUp] = useState(giay1)
    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0);
    const handleClickPreview = () => {
        let index = images.findIndex(item => item === imgUp)
        setPhotoIndex(index)
        setIsOpen(true)
    }
    return (
        <div>
            <div className="product-container">
                <div className="content-left">

                    <div className="img-up">
                        <img src={imgUp} onClick={() => { handleClickPreview() }} />
                    </div>

                    <div className="img-down">
                        <div className="img-small" onClick={() => { setImgUp((giay1)) }}>
                            <img src={giay1} className={imgUp === giay1 ? "active" : ""} />

                        </div>
                        <div className="img-small" onClick={() => { setImgUp((giay2)) }}>
                            <img src={giay2} className={imgUp === giay2 ? "active" : ""} />

                        </div>
                        <div className="img-small" onClick={() => { setImgUp((giay3)) }}>
                            <img src={giay3} className={imgUp === giay3 ? "active" : ""} />

                        </div>
                        <div className="img-small" onClick={() => { setImgUp((giay4)) }}>
                            <img src={giay4} className={imgUp === giay4 ? "active" : ""} />

                        </div>

                    </div>
                </div>

                <div className="content-right">

                    <div className="name">
                        Giày chạy bộ nam New Balance Classic - ML574
                    </div>
                    <div className="price">
                        1.098.000 ₫
                    </div>
                    <div className="size">
                        Size: 41.5
                    </div>
                    <div className="quantity">
                        <label> Số lượng</label>
                        <input type={"number"} min={1} value={1} />

                    </div>
                    < div className="action">
                        <button className="buy">Chọn mua</button>

                    </div>
                </div>

            </div>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setIsOpen(false)}
                    onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                    animationDuration={1000}
                />
            )}
        </div>
    )
}
export default Product;