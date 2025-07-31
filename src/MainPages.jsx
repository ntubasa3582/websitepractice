import MainPagesStyle from "./MainPagesStyle.module.css";
import WatermelonPictures from "./WatermelonPictures.jsx";

function MainPages() {
    return (
        <div>
            <h1 className={MainPagesStyle.textStyle}>スイカの画像</h1>
            <WatermelonPictures/>
        </div>
    );
}

export default MainPages