import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An ecommerce clothing website is a virtual platform where users can browse, select, and 
                purchase a variety of clothing items online.
                 It offers convenience by allowing customers to shop from the comfort of their homes, 
                 eliminating the need to visit physical stores. With features like detailed product descriptions,
                  size guides, and customer reviews, it enhances the shopping experience, aiding customers in making informed decisions. 
                  </p>
        <p>
        Additionally, these websites often employ personalized recommendations and targeted marketing strategies, 
                  enhancing user engagement and increasing sales. Overall, an ecommerce clothing website effectively bridges
                   the gap between fashion enthusiasts and their desired wardrobe, catering to diverse preferences and styles.
        </p>
        </div>
    </div>
  )
}

export default DescriptionBox