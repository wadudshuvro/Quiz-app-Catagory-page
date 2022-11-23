import React from 'react';
//import Navbar from './components/Navbar/Navbar';
//import { Outlet } from "react-router-dom";
import Card from './components/Sunday_card/Card';


function App() {

  return (
    <div> 
      <div className="wrapper">
      <Card
        img="https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/Ekran-Resmi-2019-11-18-18.08.13.png"
        title="React"
        description="A library for building composable user interfaces."
        
      />

      <Card
        img="https://play-lh.googleusercontent.com/vzHVyL8G7birnPZ0zuCQQ2uDxuLIXzYOUGjFDFzIqfx-ww1fq8IysoEiWzhWI3Dw08g"
        title="HTML 5"
        description="HTML describes the structure of a Web page"
        
      />
      <Card
        img="https://rastonosumardi.tech/wp-content/uploads/2022/06/unnamed.png"
        title="CSS"
        description="Used to describe the look markup language"
        
      />
      <Card
        img="https://miro.medium.com/max/1200/1*VMM3yJ94Rydzn96y3Xit7Q.jpeg"
        title="SCSS"
        description="Syntactically Awesome Style Sheets"
        
      />

       <Card
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
        title="JavaScript"
        description="A dynamic computer programming language"
        
      />

<Card
        img="https://www.devonblog.com/wp-content/uploads/2022/06/tailwind-thumb.jpg"
        title="Tailwind CSS"
        description="Qicker to write and maintain the code of your application"
        
      />

<Card
        img="https://www.howtogeek.com/wp-content/uploads/2022/08/github_hero_2.jpg?height=200p&trim=2,2,2,2"
        title="GitHub"
        description="A distributed version-control platform "
        
      />

<Card
        img="https://miro.medium.com/max/991/1*LnKNv2daerwEzbO5KMUgXQ.png"
        title="Eloqua"
        description="A software as a service (SaaS) platform"
        
      />
    </div>
      
    </div>
  );
}

export default App;
