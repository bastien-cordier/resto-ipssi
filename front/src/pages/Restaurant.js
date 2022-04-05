import React, { Fragment } from 'react'
import "./Restaurant.scss";

function Restaurant() {
  return (
    <Fragment>
    <img src="/assets/interieur.png" alt="interieur" className='notre-restaurant' />
    <h1>NOTRE RESTAURANT</h1>
    <p>Au coeur du 3ème arrondissement de Paris, Pizza de la mama de napolita vous offre une expérience culinaire comme nulle part ailleurs. Vous y retrouverez une cuisine de qualité rassemblant toutes les saveurs délicieuses de l'Italie.

Réalisées par nos chefs avec amour et des produits frais de qualité, venez tester nos best-sellers qui raviront vos papilles.

Faites-vous livrer ou vivez l'expérience sur place ou à emporter.

A bientôt chez Pizza de la mama 🍕</p>
    </Fragment>
  )
}

export default Restaurant