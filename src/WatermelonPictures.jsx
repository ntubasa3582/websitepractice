import WatermelonPicture1 from "./assets/Images/Watermelon1.jpg"
import WatermelonPicture2 from "./assets/Images/Watermelon2.jpg"
import WatermelonPicture3 from "./assets/Images/Watermelon3.jpg"
import WatermelonPicture4 from "./assets/Images/Watermelon4.jpg"
import WatermelonPicture5 from "./assets/Images/Watermelon5.jpg"
import PictureStyle from "./PictureStyle.module.css"

function WatermelonPictures() {
    // 1. 画像のインポートを `[]` を使って「配列」に格納します
    const pictures = [
        WatermelonPicture1,
        WatermelonPicture2,
        WatermelonPicture3,
        WatermelonPicture4,
        WatermelonPicture5
    ];

    //画像3つを交換しながら表示する

    var mainPicture = [pictures[0], pictures[1],pictures[2]]
    // var picturesCount = [0,1,2]
    return(
        <div className={PictureStyle.pictureSorting}>
            <img src={mainPicture[0]} width={100} height={100}></img>
            <img className={PictureStyle.left} src={mainPicture[1]} width={100} height={100}></img>
            <img className={PictureStyle.right} src={mainPicture[2]} width={100} height={100}></img>
        </div>
    )
}

export default WatermelonPictures;