import { IonHeader, IonIcon, IonTitle, IonToolbar, useIonRouter } from "@ionic/react"
import { FC } from "react"
import { SearchBar } from "../searchBar/SearchBar"
import { IPageHeader } from "../../interfaces/interfaces"
import { arrowBackSharp, menuSharp } from "ionicons/icons"

export const PageHeader = (
  {
    title,
    back
  }: {
    title: string
    back?: boolean
  }) => {

  const router = useIonRouter();

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
                onClick={() => router.goBack()}
              />
            </div>
          }
        </div>
      </IonToolbar>
    </IonHeader>
  )
}