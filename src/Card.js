import React from "react";

function Card({
  card,
  deleteCard,
  changeCardStatus,
  setPlaceholder,
  openModal,
}) {
  const [activeStatus, setActiveStatus] = React.useState(card.status);
  const onClickStatus = () => {
    setActiveStatus(!activeStatus);
    changeCardStatus(card);
  };
  const onClickDelete = () => {
    deleteCard(card);
  };
  const onClickTitle = () => {
    setPlaceholder(card);
    openModal();
  };
  return (
    <li>
      <img
        src={activeStatus ? "../img/check.png" : "../img/cancel.png"}
        alt="status-icon"
        onClick={onClickStatus}
      />
      <p>{card.title}</p>
      <a href="#">
        <img src="../img/draw.png" alt="pencil-icon" onClick={onClickTitle} />
      </a>
      <a href="#">
        <img
          src="../img/trash-can.png"
          alt="trashbin-icon"
          onClick={onClickDelete}
        />
      </a>
    </li>
  );
}

export default Card;
