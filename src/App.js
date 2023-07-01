import React from "react";
import Card from "./Card";
import Modal from "./Modal";
import "./App.scss";

function App() {
  console.log("render");

  const [modalPlaceholder, setModalPlaceholder] = React.useState();
  const [cards, setCards] = React.useState([
    {
      id: 0,
      date: "04.06.2023",
      title: "Task #1",
      status: false,
    },
    {
      id: 1,
      date: "04.06.2023",
      title: "Task #2",
      status: false,
    },
    {
      id: 2,
      date: "04.06.2023",
      title: "Task #3",
      status: true,
    },
    {
      id: 3,
      date: "04.06.2023",
      title: "Task #4",
      status: true,
    },
    {
      id: 4,
      date: "04.06.2023",
      title: "Task #5",
      status: true,
    },
  ]);
  const sortCards = () => {
    setCards((prev) =>
      prev.sort(function (a, b) {
        if (a.id > b.id) return 1;
        else return -1;
      })
    );
    setCards((prev) =>
      prev.sort(function (a) {
        if (a.status) return 1;
        else return -1;
      })
    );
  };
  const createId = () => {
    let temp = cards;
    let id = temp[0].id;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id > id) id = temp[i].id;
    }
    return id + 1;
  };

  const openModal = () => {
    const content = document.querySelector(".content");
    const modal = document.querySelector(".modal");
    content.classList.add("content-hiden");
    modal.classList.add("modal-opened");
  };
  const closeModal = () => {
    setModalPlaceholder();
    const content = document.querySelector(".content");
    const modal = document.querySelector(".modal");
    content.classList.remove("content-hiden");
    modal.classList.remove("modal-opened");
  };
  const deleteCard = (elem) => {
    setCards((prev) =>
      prev.filter((item) => Number(item.id) !== Number(elem.id))
    );
  };
  const addCard = () => {
    console.log("addcardFunc", cards);
    const date = new Date();
    let title = document.querySelector(".modal-input").value;
    let newCard = {
      id: createId(),
      date: date.toLocaleString(),
      title: title,
      status: false,
    };

    if (
      cards.find(function (element, index, array) {
        if (
          element.title === title ||
          title[0] === " " ||
          title[0] === undefined
        )
          return true;
      })
    )
      alert(
        "The task with the same name is already exist or name starts with space, try to input another name!!!"
      );
    else {
      setCards((prev) => [...prev, newCard]);
      sortCards();
      closeModal();
    }
  };

  const changeCardStatus = (elem) => {
    let temp = cards;

    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id === elem.id) {
        temp[i].status = !temp[i].status;
      }
    }

    setCards((prev) => prev.map((item, index) => (item = temp[index])));
    sortCards();
  };
  const changeCardTitle = (card) => {
    const title = document.querySelector(".modal-input").value;
    if (
      cards.find(function (element, index, array) {
        if (
          element.title === title ||
          title[0] === " " ||
          title[0] === undefined
        )
          return true;
      })
    )
      alert(
        "The task with the same name is already exist or name starts with space, try to input another name!!!"
      );
    else {
      card.title = title;
      deleteCard(card);
      setCards((prev) => [...prev, card]);
      sortCards();
      closeModal();
    }
  };
  return (
    <>
      <Modal
        closeModal={closeModal}
        addCard={addCard}
        placeholder={modalPlaceholder}
        changeCardTitle={changeCardTitle}
      />
      <div className="wrapper">
        <div className="content">
          <h4 className="title">React-todos`</h4>
          <div className="params">
            <button className="btn" onClick={() => openModal()}>
              Add
            </button>
            <p>{cards.length}/20</p>
          </div>

          <ul>
            {cards.map((item) => (
              <Card
                card={item}
                deleteCard={deleteCard}
                changeCardStatus={changeCardStatus}
                setPlaceholder={setModalPlaceholder}
                openModal={openModal}
                key={item.id}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
