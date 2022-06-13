import React, { useState } from "react";
import Receipedetails from "./Receipedetails";
import Receipelist from "./Receipelist";

function ReceipeApp(props) {


  const [receipeData, setreceipeData] = useState([
    {
      id: 1,
      name: "Gulab Jamun",
      image: "./R.jpg",
      title:"Steps to Gulab Jamun",
      steps:"Firstly, in a large bowl take ¾ cup milk powder, ½ cup Maida and ½ tsp baking powder. Mix well, homemade gulab jamun mix is ready. Now add 2 tbsp. ghee and mix well making the flour moist. Further, add milk as required start to combine. Combine well forming soft dough. do not knead the dough. Cover and rest for 10 minutes. Meanwhile, prepare the sugar syrup by taking 2 cup sugar, 2 cup water, 2 car damom and ¼ tsp saffron. Mix well and boil for 5 minutes or until the sugar syrup turns sticky. Do not attain any string consistency."
    },
    {
      id: 2,
      name: "Paneer Tikka",
      image: "./R (1).jpg",
      title:"Steps to make Paneer Tikka",
      steps:"1. Heat oil and add cumin seeds.1. Heat oil and add cumin seeds.3. Add vegetables, stir fry over low heat till half done.4. Add coriander powder, garam masala, haldi, salt, chilli powder and green chillies.5. Cook, covered for about 5 minutes and mix in the lemon juice and half the coriander.6. The water should be absorbed by now. Remove half the vegetables and layer with half the rice.7. Cover with the rest of the vegetable mixture and the rice again.8. Leave over low heat, covered for 10 minutes or so and serve garnished with the coriander."
    },
    {
      id: 3,
      name: "veg Biryani",
      image: "./vegb.jpg",
      title:"Steps to veg Biryani",
      steps:"Firstly, in a large bowl take ¾ cup milk powder, ½ cup Maida and ½ tsp baking powder. Mix well, homemade gulab jamun mix is ready. Now add 2 tbsp. ghee and mix well making the flour moist. Further, add milk as required start to combine. Combine well forming soft dough. do not knead the dough. Cover and rest for 10 minutes. Meanwhile, prepare the sugar syrup by taking 2 cup sugar, 2 cup water, 2 car damom and ¼ tsp saffron. Mix well and boil for 5 minutes or until the sugar syrup turns sticky. Do not attain any string consistency. Turn off the flame and add 1 tsp lemon juice and 1 tsp rose water. Lemon juice is added to prevent sugar syrup from crystallizing. Cover and keep the sugar syrup aside. After 10 minutes or resting the dough, start to prepare small ball sized jamuns. Make sure there are no cracks in the jamun. If there are cracks then there are high chances for jamuns to break while frying. Deep fry in medium hot oil or ghee. Frying in ghee gives good flavour to jamuns. Stir continuously and fry on low flame. Fry until the jamuns turn golden brown. Drain off and transfer the jamun into hot sugar syrup. Cover and rest for 2 hours or until jamuns absorb the sugar syrup and doubles in size.",

    },
  ]);

  const [dataFromAnotherComp, setdataFromAnotherComp] = useState([])



let getData=(receipeData)=>{
    setdataFromAnotherComp(
        receipeData
    )
}
  return (
    <div>
      <div>
        <nav className="navbar bg-success">
          <div className="container-fluid justify-content-center">
            <h1 className="">SLV Receipe book</h1>
          </div>
        </nav>
      </div>
      <div className="row d-flex">
        <div className="col-1 offset-1">
          <Receipelist receipeData={receipeData} getData={getData} />
        </div>

        <div className="col-6 offset-2 mt-5">
          <Receipedetails dataFromAnotherComp={dataFromAnotherComp} />
        </div>
      </div>
    </div>
  );
}

export default ReceipeApp;
