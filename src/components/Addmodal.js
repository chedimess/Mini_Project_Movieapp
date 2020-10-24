import React,{useState} from 'react'
import { Modal, Button } from 'react-bootstrap'

function Addmodal({addnew}) {

    const [show, setShow] = useState(false);
    const[inputval,setinputval]=useState("");
    const[inputrate,setinputrate]=useState(0);
    const[inputim,setinputim]=useState("");
    const[inputyear,setinputyear]=useState(0);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handlesave=() => { ((inputim !== "" && inputim.trim()) && (inputyear !== 0 && inputyear.trim()) && (inputrate !== 0 ) && (inputval !== "" && inputval.trim())) ? addnew(inputim,inputval,inputyear,inputrate) : alert("fill in empty fields");
      
    setShow(false);
    setinputim("");
    setinputval("");
    setinputrate(0);
    setinputyear(0);
    }

    const handlechangeva=(e) => setinputval(e.target.value);
    const handlechangera=(e) => setinputrate(parseInt(e.target.value, 10));
    const handlechangeim=(e) => setinputim(e.target.value);
    const handlechangeye=(e) => setinputyear(e.target.value);

    return (
        <>
         <Button variant="primary" onClick={handleShow} className="plus-button">
          +
         </Button>
  
         <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add new movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div>
              <label>Image:</label>
              <input onChange={handlechangeim} className="input-image"/>
              </div>
              <div>
              <label type="text" >Title:</label>
              <input onChange={handlechangeva} className="input-title"/>
              </div>
              <div>
              <label >Year:</label>
              <input onChange={handlechangeye} className="input-year"/>
              </div>
              <div>
              <label>Rating:</label>
              <input type="number" onChange={handlechangera} className="input-rating"/>
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handlesave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
}

export default Addmodal
