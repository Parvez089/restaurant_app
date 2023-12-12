/** @format */

import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../../src/assets/home/featured.jpg";
import "./featured.css";

const Featured = () => {
  return (
    <section className='featured-item text-white pt-8 my-20 bg-fixed'>
      <SectionTitle
        subHeading='check it out'
        heading='Featured Item'></SectionTitle>
      <div className='md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36'>
        <div>
          <img src={featuredImg} alt='' />
        </div>
        <div className='md:ml-10 '>
          <p>Aug 20, 2029</p>
          <p className='uppercase'>Wher can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            fugit quisquam aspernatur, dolore consectetur magnam, natus
            necessitatibus quo tempore ullam autem odio. Saepe dolorum adipisci
            placeat ipsum repellendus nemo velit minima, sequi quam sit fuga
            facilis vero voluptates explicabo, assumenda deleniti ab reiciendis
            beatae est, facere omnis? Minima, libero sequi.
          </p>
          <button className='btn btn-outline bottom-0 border-b-4 mt-4'>
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
