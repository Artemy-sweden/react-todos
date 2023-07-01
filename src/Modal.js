function Modal({
  closeModal,
  addCard,
  placeholder = undefined,
  changeCardTitle,
}) {
  const onClickAdd = () => {
    placeholder ? changeCardTitle(placeholder) : addCard();
  };
  return (
    <div className="modal">
      <div className="modal-inner" onClick={closeModal}></div>
      <div className="modal-container">
        <h4 className="title">
          {placeholder ? "Rename task" : "Add new task`"}
        </h4>
        <p>Type the task name here and press ENTER...</p>
        <input
          type="text"
          name="field"
          className="modal-input"
          placeholder={placeholder}
        />
        <button className="btn" onClick={onClickAdd}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Modal;
