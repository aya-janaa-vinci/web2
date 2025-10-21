import type { User } from "../../types";

interface UserCardProps {
    user : User;
}

const UserCard = (props : UserCardProps) => {
    return(
        <div>
        <h2>{props.user.name}</h2>
        <p>Age: {props.user.name}</p>
      </div>
    )
} 

export default UserCard;