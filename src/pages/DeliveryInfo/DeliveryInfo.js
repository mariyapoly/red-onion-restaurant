import React, { useState } from "react";
import { useForm } from "react-hook-form";
import './DeliveryInfo.css'

const DeliveryInfo = () => {

    const [deliveryInfo, setDeliveryInfo] = useState();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => setDeliveryInfo(data);

    console.log(deliveryInfo?.Rood)

    return (
        <div className="input-form ">
            <h3>Edit Delivery Details</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input required placeholder="Deliver to Door"  {...register("delivery")} />
                <input required placeholder="107 Rd No 8"  {...register("Rood")} />
                <input required placeholder="Flat, suite or floor"  {...register("house")} />
                <input placeholder="Business Name"  {...register("businessName")} />
                <textarea className='instructor-feild' placeholder="Add delivery instructor"  {...register("instructor")} ></textarea>
                <input className="signin-btn" type="submit" value="save & Continue" />
            </form>
        </div>
    );
};

export default DeliveryInfo;