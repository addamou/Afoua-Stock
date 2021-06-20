import React, {useState} from 'react'
import {TextField, Button} from "@material-ui/core";
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import './style.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {baseURL} from "../url";
import axios from "axios";

const FormAdd = () => {
    const [reference, setReference] = useState("")
    const [name, setName] = useState("")
    const [prix, setPrix] = useState("")
    const [fournisseur, setFournisseur] = useState("")
    const [agent, setAgent] = useState("")
    const vider = () => {
        setReference('');
        setName('');
        setPrix('');
        setFournisseur('')
        setAgent('')
    }

    const btn = reference === '' || name === '' || prix === '' || fournisseur === '' || agent === '' ? <Button disabled type="submit" variant="contained" color="primary" size="small"
        startIcon={<SaveAltIcon/>}>ENREGISTRER</Button> : <Button type="submit" variant="contained" color="primary" size="small"
        startIcon={<SaveAltIcon/>}>ENREGISTRER</Button>

/**Submit foncion */
    const submit = async e => {
        e.preventDefault();
        var data = {
            reference,
            name,
            prix,
            fournisseur
        } 
        
        console.log(baseURL)
        try {
            
            await axios.post(`${baseURL}/stocks/`, data );
            toast.success("Objet enregistré avec succés !", { position: toast.POSITION.TOP_RIGHT });
            
        } catch (err) {
            toast.error(" Désolé l'objet n'est pas enregistré; vérifié si le Numéro de réferences ou le nom n'existe pas déjà", { position: toast.POSITION.TOP_RIGHT });
        }
        
        vider()
      };
    

    return (
        <form onSubmit={submit}
        autoComplete="off">
        <ToastContainer />
            <h2>Ajout Produit ou Matériel</h2>
            <div>
                <TextField type="number" label="Numéro de référence" variant="outlined"
                    value={reference}
                    onChange=
                    {(e) => setReference(e.target.value)}
                    fullWidth
                    required/>
            </div>
            <div>
                <TextField name="nomProduit" label="Nom du produit ou Matériel" variant="outlined"
                    value={name}
                    onChange=
                    {e => setName(e.target.value)}
                    fullWidth
                    required/>
            </div>
            <div>
                <TextField name="prix" label="Prix Unitaire" variant="outlined"
                    value={prix}
                    onChange=
                    {e => setPrix(e.target.value)}
                    fullWidth
                    required
                    type="number"/>
            </div>
            <div>
                <TextField label="Fournisseur" variant="outlined"
                    value={fournisseur}
                    onChange=
                    {e => setFournisseur(e.target.value)}
                    fullWidth
                    required/>
            </div>
            <div>
                <TextField label="Nom et prénom du Gestionnaire" variant="outlined"
                    value={agent}
                    onChange=
                    {e => setAgent(e.target.value)}
                    fullWidth
                    required/>
            </div>
            {btn} </form>
    )
}

export default FormAdd;
