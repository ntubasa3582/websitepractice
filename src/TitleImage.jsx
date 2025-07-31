import Watermelon from "./assets/Images/WatermelonBackGround.jpg";
import ImageStyle from "./ImageStyle.module.css";
import ImageTextStyle from "./TitleImageTextStyle.module.css";
import Marquee from "react-fast-marquee";


function TitleImage() {
    return (
        <div>
            <img className={ImageStyle.backgroundImageStyle} src={Watermelon} alt="FlowerTown"/>
            <h2 className={ImageTextStyle.TextStyle}>スイカサイト</h2>

        </div>
    )
}
export default TitleImage;