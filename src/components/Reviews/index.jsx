import './style.css';
import ShowMore from '../Common/ShowMore';
import MockObject from './MockObject'
import ReviewItem from '../Common/ReviewItem';

function Reviews() {
    return (
        <section className="reviews">
            <div className="container">
                <ShowMore 
                    title='Reviews'
                    pText='What people says about Golobe facilities'
                    btnText='See All'
                />
                <div className="row g-5 py-5">
                    {
                        MockObject.map((el, index)=>{
                            return (
                                <div key={index} className="col-md-4">
                                    <ReviewItem 
                                        title={el.title}
                                        pText={el.pText}
                                        imgSrc={el.imgSrc}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Reviews;