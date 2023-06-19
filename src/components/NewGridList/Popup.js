import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Popup({ prop }) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCard, setSelectedCard] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    const formData = {
      name,
      email,
      selectedCard,
    };
    console.log(formData);
    window.open(prop, '_blank');
    handleClose();
  };

  return (
    <>
      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute bottom-3 md:right-3 left-1/2 md:left-auto transform -translate-x-1/2 md:-translate-x-0"  variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Get your bonus</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="w-full max-w-sm">
          <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
                  Full Name
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-email">
                  Email
                </label>
              </div>
              <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3"></div>
              <label className="md:w-2/3 block text-gray-500 font-bold">
                <input className="mr-2 leading-tight" type="radio" name="card" value="card1" checked={selectedCard === "card1"} onChange={(e) => setSelectedCard(e.target.value)}/>
                <span className="text-sm">
                  card1
                </span>
              </label>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3"></div>
              <label className="md:w-2/3 block text-gray-500 font-bold">
                <input className="mr-2 leading-tight" type="radio" name="card" value="card2" checked={selectedCard === "card2"} onChange={(e) => setSelectedCard(e.target.value)}/>
                <span className="text-sm">
                  card2
                </span>
              </label>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3"></div>
              <label className="md:w-2/3 block text-gray-500 font-bold">
                <input className="mr-2 leading-tight" type="radio" name="card" value="card3" checked={selectedCard === "card3"} onChange={(e) => setSelectedCard(e.target.value)}/>
                <span className="text-sm">
                  card3
                </span>
              </label>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" color='bg-purple-500' type="button" onClick={handleSubmit}>
          Continue2
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Popup;
