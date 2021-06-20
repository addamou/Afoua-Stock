import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import FormAddStock from './FormAddStock'
import FormRemoveStock from './FormRemoveStock';

const ToggleForm = () => {

    const [togle, setTogle] = useState(true);

  function toggle() {
    setTogle(!togle);
    console.log(togle)
  }



  return (
    <div>
        <h4>Cliqué sur le bouton pour changé de formulaire</h4>
      <Button onClick={toggle} variant="contained" color="primary">
        {togle ? <h4>Formulaire de Sortie</h4> : <h4>Formulaire d'Entrée</h4>}
      </Button>
        <div style={{marginTop: 40}}>
          {togle ? <FormAddStock /> : <FormRemoveStock /> }
        </div>
    </div>
  );
}

export default ToggleForm
