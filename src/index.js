import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";

// importing local images:
import img1 from "./assets/extracurricular.jpg";
import img2 from "./assets/friends.jpg";
import img3 from "./assets/queens-gambit.jpg";
import img4 from "./assets/stranger-things.jpg";
import img5 from "./assets/teen-wolf.jpg";
import img6 from "./assets/the-office.jpg";



ReactDOM.render(
<>
  <h1 className="heading">List of top Netflix Series in 2023</h1>
  <div className="body">
    <Card imgsrc={img1} title="EXTRACURRICULAR" desc="A Netflix original Series" link="https://fmovies.to/tv/extracurricular-6wkz7/1-1"/>
    <Card imgsrc={img2} title="FRIENDS" desc="A Netflix original Series" link="https://fmovies.to/tv/friends-3rvj9/1-1"/>
    <Card imgsrc={img3} title="QUEEN'S GAMBIT" desc="A Netflix original Series" link="https://fmovies.to/tv/the-queens-gambit-725vj/1-1"/>
    <Card imgsrc={img4} title="STRANGER THINGS" desc="A Netflix original Series" link="https://fmovies.to/tv/stranger-things-yj91j/1-1"/>
    <Card imgsrc={img5} title="TEEN WOLF" desc="A Netflix original Series" link="https://fmovies.to/tv/teen-wolf-7j3w8/1-1"/>
    <Card imgsrc={img6} title="THE OFFICE" desc="A Netflix original Series" link="https://fmovies.to/tv/the-office-1q4p/1-1"/>
  </div>
</>,
  document.getElementById("root")
);