import React from "react";
import { useState } from "react";
import Modal from "../Modal/Modal";

const Card = (props) => {
  const [modalData, setModalData] = useState({});

  const { gun, countIncrease } = props;
  const { name, img, bullet, action, price, category } = gun;
  return (
    <div className="card bg-base-100 shadow-xl border border-slate-600">
      <figure>
        <img src={img} className="w-full h-64" alt="Shoes" />
      </figure>
      <div className="card-body p-5">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary h-auto">{action}</div>
        </h2>
        <div className="flex">
          <p className="text-left">Bullet : {bullet}</p>
          <p className="text-left">Category : {category}</p>
        </div>
        <h2 className="card-title">Price ${price}</h2>
        <div className="card-actions justify-between">
          <button onClick={()=>countIncrease()} className="btn btn-outline w-[48%]">Add To Cart</button>
          <label onClick={()=>setModalData(gun)} htmlFor="my-modal-3" className="btn btn-outline w-[48%]">
            Details
          </label>
        </div>
      </div>
      { modalData && <Modal data={modalData} setModalData={setModalData}></Modal>}
    </div>
  );
};

export default Card;
