
import { GoTrashcan } from "react-icons/go";
import Button from './Button';
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunks";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AblumsList";

function UserListItems({ user }) {
    const [doRemoveUser, isLoading, error] = useThunk(removeUser);

    const handleClick = () => {
        doRemoveUser(user);
    }
    // Example of JSX fragment
    const header = <>
        <Button className="mr-3" loading={isLoading} onClick={handleClick}>
            <GoTrashcan  />
        </Button>
        {error && <div>Error deleting user.</div>}
        {user.name}
    </>;

    return (
        <ExpandablePanel header={header}>
            <AlbumsList user={user} />
        </ExpandablePanel>
                    
                
    );
}

export default UserListItems;