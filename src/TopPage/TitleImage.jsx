import ImageStyle from "./ImageStyle.module.css";
import ImageTextStyle from "./TitleImageTextStyle.module.css";

function TitleImage() {
    return (
        <div>
            <video className={ImageStyle.backgroundImageStyle} autoPlay loop muted>
                <source src={"Video/douga.mp4"} type="video/mp4"/>
            </video>
            <h2 className={ImageTextStyle.content5}>スイカしてますか？</h2>

        </div>
    )
}
export default TitleImage;