import React from 'react'
import Style from "./bannerBemVindo.module.css"
import BemVindoimg from "/LP-banner1.svg"


const BannerBemVindo = () => {
  return (
    <div>
        <h2 className={Style.bemVindo}> Bem-vindo ao Finanças+</h2>
        <p className={Style.texto1}> O seu aliado para uma gestão financeira bem-sucedida e a realização dos seus objetivos financeiros.</p>
        <p className={Style.texto2}> Nosso aplicativo foi projetado para proporcionar a você o controle total sobre suas finanças pessoais, tornando o processo de gerenciar suas receitas, despesas e metas financeiras uma tarefa simples e prazerosa.</p>
        <img src={BemVindoimg} alt="mulher em cima de moedas" />
    </div>
  )
}

export default BannerBemVindo