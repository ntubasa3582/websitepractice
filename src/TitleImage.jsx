import Watermelon from "../../websitepractice/src/Images/Watermelon.jpg";
import ImageStyle from "./ImageStyle.module.css";
import ImageTextStyle from "./TitleImageTextStyle.module.css";


function TitleImage() {
    return (
        <div>
            <img className={ImageStyle.backgroundImageStyle} src={Watermelon} alt="FlowerTown"/>
            <h2 className={ImageTextStyle.TextStyle}>fafafa</h2>
        </div>
    )
}
export default TitleImage;