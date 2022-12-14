import { writeFavoriteToDatabase } from "../services/favoritesService.js"

export default function Card({ business }) {
  return (
    <div className="business">
      <h1 className="business_name">{business.name}</h1>
      <div className="business_image">
        <img src={business.image_url} width="125" alt="buisness" />
      </div>
      <div>
        <div className="business_address">
          <p>{business.location.address1}</p>
          <p>{business.location.address2}</p>
          <p>{business.location.address3}</p>
          <p>{business.location.city}</p>
        </div>
        <div>{business.display_phone}</div>
        <div>Rating: {business.rating}/5</div>
        <button onClick={()=>writeFavoriteToDatabase(business)}>❤️</button>
      </div>
    </div>
  );
}
