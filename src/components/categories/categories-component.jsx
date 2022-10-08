import './categories-component.scss';
const Categories = ({ categories }) => {

   return (
      <div className="categories">
         <div className="categories-container">
            {categories.map((category, index) =>
            (
               <div key={index} className={`category-container category${category.id}`}>
                  <div className="backgroundImage" style={
                     { backgroundImage: `url(${category.imageUrl})` }
                  } />
                  <div className={`category-body-container ${category.title}`}>
                     <h2>{category.title}</h2>
                     <p>Book Now</p>
                  </div>
               </div>
            ))
            }
         </div>
      </div>
   );
};
export default Categories;