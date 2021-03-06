import React from "react"

import Layout from "../components/Layout"
import HeaderFolio from "../components/HeaderFolio"
import TopScroll from "../components/TopScroll"

import "../styles/grandmasCouch.css"

const GrandmasCouchPage = props => {
  return (
    <Layout>
      <TopScroll>
        <div
          className={`flex bg-white font-body h-screen w-2/5 overflow-hidden`}
        ></div>
        <picture>
          <source
            srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch1.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/grandmasCouch/kbGrandmasCouch1.jpg`}
            alt="Grandma's couch 1"
            className="one-gc abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch2.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/grandmasCouch/kbGrandmasCouch2.jpg`}
            alt="Grandma's couch 2"
            className="two-gc abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch3.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/grandmasCouch/kbGrandmasCouch3.jpg`}
            alt="Grandma's couch 3"
            className="three-gc abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch4.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/grandmasCouch/kbGrandmasCouch4.jpg`}
            alt="Grandma's couch 4"
            className="four-gc abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch5.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/grandmasCouch/kbGrandmasCouch5.jpg`}
            alt="Grandma's couch 5"
            className="five-gc abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch6.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/grandmasCouch/kbGrandmasCouch6.jpg`}
            alt="Grandma's couch 6"
            className="six-gc abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch7.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/grandmasCouch/kbGrandmasCouch7.jpg`}
            alt="Grandma's couch 7"
            className="seven-gc abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch8.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/grandmasCouch/kbGrandmasCouch8.jpg`}
            alt="Grandma's couch 8"
            className="eight-gc abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch9.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/grandmasCouch/kbGrandmasCouch9.jpg`}
            alt="Grandma's couch 9"
            className="nine-gc abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch10.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/grandmasCouch/kbGrandmasCouch10.jpg`}
            alt="Grandma's couch 10"
            className="ten-gc abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch11.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/grandmasCouch/kbGrandmasCouch11.jpg`}
            alt="Grandma's couch 11"
            className="eleven-gc abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch12.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/grandmasCouch/kbGrandmasCouch12.jpg`}
            alt="Grandma's couch 12"
            className="twelve-gc abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch13.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/grandmasCouch/kbGrandmasCouch13.png`}
            alt="Grandma's couch 13"
            className="thirteen-gc abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/grandmasCouch/kbGrandmasCouch14.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/grandmasCouch/kbGrandmasCouch14.jpg`}
            alt="Grandma's couch 14"
            className="fourteen-gc abs"
          />
        </picture>
        <div className="flex-1 bg-white font-body h-screen w-2/5 overflow-hidden"></div>
        <HeaderFolio bgColor="bg-transparent z-50" />
      </TopScroll>
    </Layout>
  )
}

export default GrandmasCouchPage
