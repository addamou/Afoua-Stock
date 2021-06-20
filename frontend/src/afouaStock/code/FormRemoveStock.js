import React, {useState} from "react";
import './style.css'
import Button from '@material-ui/core/Button'
import SaveAltIcon from '@material-ui/icons/SaveAlt';

const FormRemoveStock = () => {
    const [references, setReference] = useState('')
    const [quantites, setQuantites] = useState('')
    const stock = () => {
        setReference('');
        setQuantites('')
    }

    const btn = references === '' || quantites === '' ? <Button disabled type="submit" variant="contained" color="secondary" size="small"
        startIcon={<SaveAltIcon/>}>ENREGISTRER</Button> : <Button type="submit" variant="contained" color="primary" size="small"
        startIcon={<SaveAltIcon/>}>ENREGISTRER</Button>


    const submite = e => {
        e.preventDefault()
        var data = {
            references,
            quantites
        }
        console.log(data)
        stock()
    }
    return (
        <form className="removeStock"
            onSubmit={submite}>
            <div>
                <h3>Formulaire de Sorti de Materiel</h3>
            </div>
            <div>
                <input type="number" id="ref"
                    value={references}
                    onChange={
                        e => {
                            setReference(e.target.value)
                        }
                    }
                    className="addStockInput"
                    placeholder="Entrer la Reference"
                    required={true}/>
            </div>
        <div>
            <input type="number" id="qteSorti"
                value={quantites}
                onChange={
                    e => {
                        setQuantites(e.target.value)
                    }
                }
                className="addStockInput"
                placeholder="Entrer le nouveau quantité"
                required={true}/>
        </div>
    <div> {btn} </div>
</form>
    )
}

export default FormRemoveStock
