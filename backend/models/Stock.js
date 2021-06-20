const mongoose = require('mongoose'); // Erase if already required

var stockSchema = new mongoose.Schema({

    date: {
        type: Date,
        default: Date.now
    },
    reference:{
        type:Number,
        required:true,
        unique:true,
        index:true,
    },
    name:{
        type:String,
        required:true,
        unique:true,
    },
    prix:{
        type:Number
    },
    fournisseur:{
        type:String
    },
    agent: {
        type: String
      },

    Entrant: [
        {   
            reference : {
                type: Number,
              },

            quantite: {
                type: Number
              },
          
          date: {
            type: Date,
            default : Date.now
          },
        }
      ],

      Sortant: [
        {
            reference: {
                type: Number 
              },
              
            quantite: {
                type: Number
              },
          
          date: {
            type: Date,
            default : Date.now
          },
        }
      ],
},
{
    timestamps: true,
});

//Export the model
module.exports = mongoose.model('Stock', stockSchema);