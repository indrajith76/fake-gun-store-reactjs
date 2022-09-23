import React from "react";

const Modal = ({ data, setModalData }) => {
  const { name, img, bullet, action, category, price,capacity } = data;
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            onClick={() => setModalData(null)}
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="flex items-center mb-2">
            <h3 className="text-xl text-left font-bold">{name}</h3>
            <p className="badge badge-secondary ml-2 h-auto">{action}</p>
          </div>
          <div className="flex justify-center">
            <img src={img} className="w-72" alt="" />
          </div>

          <div className="flex gap-5 text-left mt-2">
            <p className="">Bullet : {bullet}</p>
            <p className="">Category : {category}</p>
            <p className="">Capacity : {capacity}</p>
          </div>
          <h3 className="text-xl text-left font-bold">Price : ${price}</h3>
        </div>
      </div>
    </div>
  );
};

export default Modal;
