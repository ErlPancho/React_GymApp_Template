

export function Cart({cart, setCart}) {

      function handleClick(item){
                setCart(cart.filter((product) => product.title != item.title))
            }

    return (
        <>
            {cart.map((item) => {
                return (
                    <>
                        <h2>{item.desc}</h2>
                        <p>{item.desc}</p>
                        <button onClick={() => handleClick(item)}>Remove Item From Cart</button>
                    </>
                    
                )
            })}
        </>
    )
}