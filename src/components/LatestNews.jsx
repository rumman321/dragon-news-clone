import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  const [latest, setLatest] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/category/01")
      .then((res) => res.json())
      .then((data) => setLatest(data.data));
  }, []);
  return (
    <div className="flex gap-2 items-center bg-base-200 p-2">
      <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest</p>
      {/* <Marquee pauseOnHover={true} speed={100} className="space-x-10">
        <Link to="/news">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
          illum.
        </Link>
        <Link to="/news">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
          illum.
        </Link>
        <Link to="/news">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid,
          illum.
        </Link>
      </Marquee> */}
      
        
          
          <Marquee > 
           <div className="flex gap-10">
           {
              latest.map((title)=>(
                <Link key={title.title} to={`/news/${title._id}`}>
                  {
                    title.title
                  }
                </Link>
              )  )
            }
           </div>
          </Marquee>
         
    </div>
  );
};

export default LatestNews;
