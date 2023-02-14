import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

// Aggiornata da class a function!
function SingleBook(props) {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setSelected(props.selectedBook === props.book.asin);
  }, [props.selectedBook, props.book.asin]);

  return (
    <>
      <Card
        onClick={() => props.changeSelectedBook(props.book.asin)}
        style={{
          border: selected ? "3px solid red" : "none",
        }}>
        <Card.Img variant="top" src={props.book.img} />
        <Card.Body>
          <Card.Title style={{ color: "black" }}>{props.book.title}</Card.Title>
        </Card.Body>
      </Card>
      {/* {selected && <CommentArea asin={props.book.asin} />} */}
    </>
  );
}

export default SingleBook;
