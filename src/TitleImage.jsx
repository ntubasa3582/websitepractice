import Watermelon from "../public/Images/WatermelonBackGround.jpg";
import ImageStyle from "./ImageStyle.module.css";
import ImageTextStyle from "./TitleImageTextStyle.module.css";


function TitleImage() {
    return (
        <div>
            <video className={ImageStyle.backgroundImageStyle} autoPlay loop muted>
                <source src={"douga.mp4"} type="video/mp4"/>
            </video>
            <h2 className={ImageTextStyle.TextStyle}>スイカサイト</h2>

        </div>
    )
}
export default TitleImage;