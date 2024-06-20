import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { AiOutlineLike } from "react-icons/ai";

function ProjectModal({ item, onClose }) {
  const [color, setColor] = useState("black");
  return (
    <>
      <Modal
        show={true}
        onClose={onClose}
        inline
        className="flex items-center"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Modal.Header>{item.featureTxt}</Modal.Header>
        <h4 className="mx-5">{item.feUser}</h4>
        <Modal.Body className="flex flex-col items-center justify-center h-full">
          <img src={item.featureImg} alt={item.featureImg} />
        </Modal.Body>
        <Modal.Footer className="flex justify-center">
          <Button
            color="gray"
            onClick={() => setColor("red")}
            className="my-5 rounded-full "
            style={{ color: color }}
          >
            <AiOutlineLike className="mx-2" /> Like
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProjectModal;
