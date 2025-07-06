export function ProductCard({product, cart, setCart}) {
    
    function handleClick() {
        setCart([...cart, product])
    }
    
    return (
        <>
            <h2>{product.title}</h2>
            <p>{product.desc}</p>
            <button>R{product.price}</button>
            <button onClick={() => handleClick()}>
                {cart.find((item) => item.title == product.title) ? "Added to Cart" : "Add to Cart"}
            </button>
        </>
    )
}