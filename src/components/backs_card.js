import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import WhatshotIcon from '@mui/icons-material/Whatshot';

 export default function Productsy(props) {
     return(
        <div class="flip-card-back">
          <p>{props.data.description}</p>
          <p>{props.data.tagline}</p>
          <button>Buy</button>
        </div>
     )
 }