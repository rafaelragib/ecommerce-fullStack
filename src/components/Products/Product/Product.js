import React from 'react'
import {Card,CardMedia,CardContent,CardActions,Typography,IconButton} from '@material-ui/core'
import {AddShoppingCart} from '@material-ui/icons'
import useStyles from './styles'
//import image from '../../../assets/big-img-02.jpg'
function Product({product,addItem}) {
    const classes = useStyles();

    return (
        
        <Card className={classes.root} >
            <CardMedia className={classes.media} image={`${product.media.default}`}  title={product.name}/>
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" >
                        {product.price}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{__html: product.description}} variant="body2" color="textSecondary"/>
                <CardActions disableSpacing className={classes.cardAction} onClick={()=> addItem(product.id)} >
                    <IconButton aria-label='shopping cart' >
                        <AddShoppingCart/>
                    </IconButton>
                </CardActions>
            </CardContent>
        </Card>
    )
}


export default Product
