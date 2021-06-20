const express = require("express");
const router = require('express').Router();
const Stock = require("../../models/Stock");

/** =====Trouver tous les objets de notre base de donnee =====**/
router.get('/', async (req, res) => {
    try {
        const produits = await Stock.find()
        res.status(200).json({success: true, message: `Données reçu avec succés!`, stock: produits})

    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

/**==== Creation d'un objet dans la base de donnee ====**/

router.post('/', async (req, res) => {
    const {
        reference,
        name,
        fournisseur,
        prix,
        agent,
        Entrant,
        Sortant
    } = req.body
    const produit = new Stock({
        reference,
        name,
        fournisseur,
        prix,
        agent,
        Entrant,
        Sortant
    })

    try {
        const newProduit = await produit.save()
        res.status(201).json({success: true, message: `Produit créer avec succés`, stock: newProduit})
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

/**==== Trouver un Objet grace a son ID =====**/
router.get("/:_id", async (req, res) => {

    try {
        const stock = await Stock.findOne({_id: req.params._id})
        if (! stock) 
            return res.status(400).json({message: "Aucun Objet trouvé avec ce ID"})
        
        res.status(200).json({success: true, message: `Objet trouvé avec succés!`, stock: stock})

    } catch (error) {
        res.status(500).json({message: err.message})
    }

})

/**========= Envoi de donnees dans les arrays Stock Entrant ==========**/

router.put('/entre/:_id', (req, res) => {
    
    Stock.findOne({_id: req.params._id})

    .then(Stock => {
        const newQte = {
          reference: req.body.reference,
          quantite: req.body.quantite
        };
  
        // Add to exp array
        Stock.Entrant.unshift(newQte);
  
        Stock.save().then(Stock => 
            res.status(201).json({success: true, message: `Quantite créer avec succés`, stock: Stock}));
      })

      .catch(err => res.status(400).json("Error: " + err))
});

/**======= Envoi de donnees dans les arrays Stock Sortant ========**/

router.put('/sortie/:_id', (req, res) => {
    
    Stock.findOne({_id: req.params._id})

    .then(Stock => {
        const newQte = {
          reference: req.body.reference,
          quantite: req.body.quantite
        };
  
        // Add to exp array
        Stock.Sortant.unshift(newQte);
  
        Stock.save().then(Stock => 
            res.status(201).json({success: true, message: `Quantite rétirer avec succés`, stock: Stock}));
      });
});


module.exports = router