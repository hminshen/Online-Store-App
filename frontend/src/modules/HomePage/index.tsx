import { useCurrentUser } from "@/lib/SWR";
import HomeUser from "./HomeUserPage";
import HomeAdmin from "./HomeAdminPage";
import {UserRole} from "../../common/types/frontendEnums";


export default function HomePage() {
    const {data} = useCurrentUser();
    return (
        <div>
            {data?.role_id == UserRole.Admin ? (<HomeAdmin/>) : (<HomeUser/>)}
        </div>
    )
}