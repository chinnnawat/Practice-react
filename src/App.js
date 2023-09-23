import './App.css';
import React from 'react';
import FoodCard from "./components/foodCard"

class App extends React.Component {
  render()
  {
    const foodcardData = [
      {
        key:0,
        category: "อาหารคาว",
        foodName: "แซลมอน",
        describetion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima harum, totam ipsam, quos aliquid, labore culpa recusandae asperiores aut fugiat hic magni molestiae a eius provident distinctio maxime eaque nemo. At commodi molestias sint deleniti blanditiis amet voluptas, rerum magni possimus voluptatum quam molestiae sunt odio esse minus asperiores ab similique itaque maxime quibusdam accusamus officiis tenetur nostrum. Ullam, quae!",
        imgsrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Salmon_sashimi.jpg/640px-Salmon_sashimi.jpg"
      },
      {
        key:1,
        category: "อาหารหวาน",
        foodName: "บิงซู",
        describetion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima harum, totam ipsam, quos aliquid, labore culpa recusandae asperiores aut fugiat hic magni molestiae a eius provident distinctio maxime eaque nemo. At commodi molestias sint deleniti blanditiis amet voluptas, rerum magni possimus voluptatum quam molestiae sunt odio esse minus asperiores ab similique itaque maxime quibusdam accusamus officiis tenetur nostrum. Ullam, quae!",
        imgsrc: "https://www.clickstour.com/storage/system/2018/09/dEFS107203.jpg"
      },
      {
        key:2,
        category: "อาหารคาว",
        foodName: "ผัดไทย",
        describetion: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima harum, totam ipsam, quos aliquid, labore culpa recusandae asperiores aut fugiat hic magni molestiae a eius provident distinctio maxime eaque nemo. At commodi molestias sint deleniti blanditiis amet voluptas, rerum magni possimus voluptatum quam molestiae sunt odio esse minus asperiores ab similique itaque maxime quibusdam accusamus officiis tenetur nostrum. Ullam, quae!",
        imgsrc: "https://upload.wikimedia.org/wikipedia/commons/8/8a/PadThai_%E0%B8%9C%E0%B8%B1%E0%B8%94%E0%B9%84%E0%B8%97_Photographed_by_Trisorn_Triboon.JPG"
      }
    ];
  
    return(
      <div className='page'>
        <h1>โหวตอาหาร</h1>
        {foodcardData.map((info)=>(
          <FoodCard
            key={info.category}
            category={info.category}
            foodName={info.foodName}
            describetion={info.describetion}
            imgsrc={info.imgsrc}/>
        ))}
      </div>
    )
  }
}

export default App;
