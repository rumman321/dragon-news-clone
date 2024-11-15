import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import { FaStar } from 'react-icons/fa';
import { AiOutlineEye } from 'react-icons/ai';

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(news);
  return (
    <div>
      <header>
        <Header></Header>
      </header>

      <main className="w-11/12 mx-auto grid md:grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="font-semibold mb-5">Dragon News</h2>
          {/* card */}
          <div className="card w-full bg-base-100 shadow-md border border-gray-200 rounded-lg p-4  mx-auto">
            <figure>
              <img
                src={news.image_url}
                alt="News Thumbnail"
                className="w-full rounded-t-lg"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {news.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4">{news.details}</p>

              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center">
                  {Array.from({ length: 5 }, (_, index) => (
                    <FaStar
                      key={index}
                      className={`${
                        index < Math.round(news.rating.number)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {news.rating.number}
                  </span>
                </div>

                <div className="flex items-center">
                  <AiOutlineEye className="text-gray-500 mr-1" />
                  <span className="text-sm text-gray-600">
                    {news.total_view}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <Link  to={`/category/${news.category_id}`} className="btn btn-outline btn-sm btn-primary">
                  Back to category
                </Link >
              </div>
            </div>
          </div>
        </section>
        <section className="col-span-3"></section>
      </main>
    </div>
  );
};

export default NewsDetails;
