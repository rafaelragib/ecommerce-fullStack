import React,{useState} from 'react'
import {Grid} from '@material-ui/core'
import Product from './Product/Product'
import useStyles from './styles'


const Products = ({addItem}) => {
    
    const [products,setProducts]=useState([{
        id:"1",
        name:'test1',
        media:require('../../assets/big-img-02.jpg'),
        price:'10$'},
        {
            id:"2",
            name:'test2',
            media:require('../../assets/banner-02.jpg'),
            price:'15$'}]);
    
    
    //console.log(cartItems);
    const classes= useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
            {products.map((product)=>
            (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} addItem={addItem}  />
                </Grid>
            ))}
            </Grid>
        </main>
    )
}

export default Products;

