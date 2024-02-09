import './MakeupItemDetailPage.css'
import { useParams } from 'react-router-dom'; 
import { Carousel } from 'react-bootstrap';

export default function MakeupItemDetailPage({ makeupItems }) {

  const { item } = useParams();
  const selectedItem = makeupItems.find((picked) => picked.name === item)

  return (
    <div className='MakeupItemDetailPage'>
      <div>

      
        <h1>{item}</h1>
        {selectedItem.images.length > 1 ? (
          <Carousel>
            {selectedItem.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={image} alt={`Slide ${index}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <img src={selectedItem.images[0]} alt={selectedItem.name} />
        )}
      </div>
      <div>
        <h1>Details</h1>
        <p>{selectedItem.info}</p>
        <p>${selectedItem.price.toFixed(2)}</p>
      </div>
    </div>
  );
}