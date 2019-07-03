import React, {useState} from 'react';

const Faves = ({film}) => {

  const [isFave, setIsFave] = useState(false);

  const handleClick = (event) => {
    event.stopPropagation();
    console.log("handling Fave click!");

    if (isFave == false) {
      setIsFave(true)
      console.log(isFave);
    } else if (isFave == true) {
      setIsFave(false)
      console.log(isFave);
    }
  }

  return (
    <div className="film-row-fave add_to_queue" onClick={handleClick}>
      <i className="material-icons">add_to_queue</i>
    </div>
  );
}

export default Faves;