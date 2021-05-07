import React from 'react'

function PaymentCard(props) {
    return (
        <>
  
            <div className="paymentCard">
                <div className="paymentWrapper">
                <h1>{props.Title}</h1>
                <h2><span className="spanTitle">{props.Subtitle}</span> <span className="crossOutSpan">{props.SecondTitle}</span></h2>
              
                <li>{props.itemOne}</li>
                <li>{props.itemTwo}</li>
                <li>{props.itemThree}</li>
                <li>{props.itemFour}</li>
                <li>{props.itemFive}</li>
                <li>{props.itemSix}</li>
                </div>
            </div>
    
        </>
    )
}

export default PaymentCard
