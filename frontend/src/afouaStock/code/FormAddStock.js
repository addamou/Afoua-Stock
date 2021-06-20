import React, { useState } from "react";
import './style.css'
import Button from '@material-ui/core/Button'
import SaveAltIcon from '@material-ui/icons/SaveAlt';

const FormAddStock = () => {
    
    const [references, setReference] = useState('')
    const [quantites, setQuantites] = useState('')
    const vider = () => {
        setReference('');
        setQuantites('')
    }

    const btn = references === '' || quantites === ''? 
<Button disabled type="submit" variant="contained" color="secondary" size="small" startIcon={<SaveAltIcon/>}>ENREGISTRER</Button>
:
<Button type="submit" variant="contained" color="primary" size="small" startIcon={<SaveAltIcon/>}>ENREGISTRER</Button>

    const submite = e => {
        e.preventDefault()
        var data = { references , quantites }
        console.log(data)
        vider()
    }
    return (
        <form className="addStock" onSubmit={submite}>
            <div>
                <h3>Formulaire Stock Entrant</h3>
            </div>
            <div> 
                <input type="number" id="ref" value={references} onChange={e =>{ setReference(e.target.value)}} className="addStockInput" placeholder="Entrer la Reference" required={true} />
            </div>
            <div>
                <input type="number" id="qte" value={quantites} onChange={e =>{setQuantites(e.target.value)}} className="addStockInput" placeholder="Entrer le nouveau quantité" required={true} />
            </div>
            <div> 
                {btn}
            </div>
        </form>
    )
}

export default FormAddStock
