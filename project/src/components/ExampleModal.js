import {useState} from 'react'
import { Modal} from 'react-bootstrap';
import '../css/modal.css'
import AddFood from './AddFood';
function TestModal(props) {
    const {data, showHandler} = props
   
    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false);
        showHandler(false);
    }
  
 
  
     let price = data.data.discount ? <div className='d-flex'><div className="modalPrice">{new Intl.NumberFormat().format(data.data.price - data.data.price * data.data.discount / 100)}₮ </div><strike className="strike-dark">{new Intl.NumberFormat().format(data.data.price)}₮ </strike> </div> : <div className='modalPrice'>{data.data.price}₮</div>
    
     return (
        <>
            <Modal dialogClassName="modal-dialog" show={show} onHide={handleClose} centered>
                <div className=' my-modal '>
                    <img className='modalimg' src={"https://mtars-fooddelivery.s3.ap-southeast-1.amazonaws.com" + data.data.image} alt="img"
                    />
                    <div className='modalMain'>
                        <div className='modalContent row '>
                            <div className='NameAndPrice'>
                                <div className='modalHeader'>{data.data.name}</div>
                                {price}
                            </div>
                            <div>
                                <h5 className='modalHeader'>Орц</h5>
                                <p className='modalIngredients'>{data.data.ingredients}</p>
                            </div>

                            <AddFood />
                        </div>
                    </div>
                    <button className='closeButton' onClick={handleClose}>x</button>
                </div>
            </Modal>
            
        </>
    );
}
export default TestModal
