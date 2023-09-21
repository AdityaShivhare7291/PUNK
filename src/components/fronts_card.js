


import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import WhatshotIcon from '@mui/icons-material/Whatshot';

 export default function Products(props) {
    console.log(props.data.image_url);
     return(
        <div class="flip-card-front">
        <img src={props.data.image_url} alt="Avatar" width={240} height={350} />
        <div className='front-end-info'>
            <p>{props.data.name}</p>
            <p>{props.data.volume.value}L</p>
        </div>
        <div>
            <p>price:{props.data.target_og}</p>
           
        </div>
      </div>
     )
 }