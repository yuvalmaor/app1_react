import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import {
    Card,
    Input,
    Checkbox,
    
    Typography,
  } from "@material-tailwind/react";

function Popup(prop) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute bottom-3 right-3" variant="primary" onClick={handleShow}>
        Launch
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" />
          <Input size="lg" label="Email" />
          <Input type="password" size="lg" label="Password" />
        </div>
        <Checkbox
          label={
            (
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-blue-500"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            )
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth>
          Register
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a
            href="#"
            className="font-medium text-blue-500 transition-colors hover:text-blue-700"
          >
            Sign In
          </a>
        </Typography>
      </form>








        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Popup;