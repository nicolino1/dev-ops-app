// import React, {useState} from 'react';
// import ReactDOM from 'react-dom';
// import Modal from 'react-modal';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

// // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

// export default function UpdateForm(props) {
//     const [data, setData] = useState();
//   const [modalIsOpen, setIsOpen] = React.useState(false);

//   function openModal() {
//     setIsOpen(true);
//   }

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = '#f00';
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }

//   return (
//     <div>
//       <button onClick={openModal}>Open Modal</button>
//       <Modal
//         isOpen={modalIsOpen}
//         onAfterOpen={afterOpenModal}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Example Modal"
//       >
//         <button onClick={closeModal}>close</button>
//         <div>Update Book</div>
//         <form onSubmit={submitForm}>
//                 <input type="text" placeholder="Title..." value={title} onChange={updateTitle}></input>
//                 <input type="text" placeholder="Author..." value={author} onChange={updateAuthor}></input>
//                 <input type="text" placeholder="Genre..." value={genre} onChange={updateGenre}></input>
//                 <button type="submit">submit</button>
//         </form>
//       </Modal>
//     </div>
//   );
// }

// ReactDOM.render(<UpdateForm />, appElement);