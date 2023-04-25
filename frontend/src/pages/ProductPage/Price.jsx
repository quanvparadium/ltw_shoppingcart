const priceStyle = {
    margin: "8px 0",
    display: "flex",
    flexDirection: "column",
    borderRadius: "4px",
    backgroundColor: "rgb(250, 250, 250)",
    padding: "0px 16px 12px",
}

const productPrice = {
    color: "rgb(255, 66, 78)",
    paddingTop: "12px",
    display: "flex",
    alignItems: "flex-end",
}

const price = {
    fontSize: "32px",
    lineHeight: "40px",
    marginRight: "8px",
    fontWeight: "bold",
}

const originalprice = {
    color: "rgb(128, 128, 137)",
    textDecoration: "line-through",
    fontSize: "14px",
    lineHeight: "20px",
}

const discount = {
    fontWeight: "bold",
    marginLeft: "4px",
    color: "rgb(255, 66, 78)",
    marginTop: "3px",
    lineHeight: "18px",
    fontSize: "14px",
    padding: "0px 4px",
}

export default function (props) {
    return (
        <div style={priceStyle}>
            <div>
                <div style={productPrice}>
                    <div style={price}>{props.price.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    })}</div>
                    <div style={originalprice}>{props.original_price.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                    })}</div>
                    <div style={discount}>-{props.discount_rate}</div>
                </div>
            </div>
        </div>
    )
}