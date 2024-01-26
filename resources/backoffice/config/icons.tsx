import { faCheckCircle, faDashboard, faAd, faUsers, faList, faTriangleExclamation, faListCheck ,faPuzzlePiece, faCopyright, faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const VerifiedEmailIcon = (props: any) => (
    <FontAwesomeIcon icon={faCheckCircle} {...props} />
)

export const DashboardIcon = (props: any) => (
    <FontAwesomeIcon icon={faDashboard} {...props} />
)

// advertising icon
export const AdvertisingIcon = (props: any) => (
    <FontAwesomeIcon icon={faAd} {...props} />
)

// user icon
export const UsersIcon = (props: any) => (
    <FontAwesomeIcon icon={faUsers} {...props} />
)

export const ListIcon = (props: any) => (
    <FontAwesomeIcon icon={faList} {...props} />
)

export const ExclamationIcon = (props: any) => (
    <FontAwesomeIcon icon={faTriangleExclamation} {...props} />
)

export const PuzzlePieceIcon = (props: any) => (
    <FontAwesomeIcon icon={faPuzzlePiece} {...props} />
)

export const LayerGroupIcon = (props: any) => (
    <FontAwesomeIcon icon={faLayerGroup} {...props} />
)

export const CopyIcon = (props: any) => (
    <FontAwesomeIcon icon={faCopyright} {...props} />
)

export const ListCheckIcon = (props: any) => (
    <FontAwesomeIcon icon={faListCheck} {...props} />
)


export const ICON_INDEX = {
    verifiedEmail: VerifiedEmailIcon,
    dashboard: DashboardIcon,
    advertising: AdvertisingIcon,
    users: UsersIcon,
    list: ListIcon,
    exclamation: ExclamationIcon,
    puzzlePiece: PuzzlePieceIcon,
    layerGroup: LayerGroupIcon,
    copy: CopyIcon,
    listCheck: ListCheckIcon,
}
