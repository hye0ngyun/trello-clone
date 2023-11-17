const Title = ({ children }: { children: any }) => {
  return <div className="modal-title">{children}</div>;
};
const Content = ({ children }: { children: any }) => {
  return <div className="modal-content">{children}</div>;
};
// Modal component
const Modal = ({ children }: { children: any }) => {
  return <div className="modal">{children}</div>;
};

Modal.Title = Title;
Modal.Content = Content;
// Usage in another component
// const MyComponent = () => {
//   return (
//     <Modal>
//       <Modal.Title>This is a modal title</Modal.Title>
//       <div className="modal-content">
//         <p>Modal content goes here...</p>
//       </div>
//     </Modal>
//   );
// };

export default Modal;
