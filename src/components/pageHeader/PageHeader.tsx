import { IonHeader, IonIcon, IonTitle, IonToolbar } from "@ionic/react"
import { FC } from "react"
import { SearchBar } from "../searchBar/SearchBar"
import { IPageHeader } from "../../interfaces/interfaces"
import { arrowBackSharp, menuSharp } from "ionicons/icons"
import { useHistory } from "react-router"

export const PageHeader = (
  {
    title,
    back
  }: {
    title: string
    back?: boolean
  }) => {

  const history = useHistory();

  return (
    <IonHeader>
      <IonToolbar>
        <div className='flex items-center justify-between h-12'>
          <div className="text-xl mx-auto" >{title}</div>
          {back &&
            <div className="absolute top-3 left-3">
              <IonIcon
                className="h-8 w-8 pr-4"
                icon={arrowBackSharp}
                onClick={() => history.goBack()}
              />
            </div>
          }
        </div>
      </IonToolbar>
    </IonHeader>
  )
}