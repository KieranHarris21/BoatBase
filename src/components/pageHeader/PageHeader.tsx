import { IonHeader, IonIcon, IonTitle, IonToolbar } from "@ionic/react"
import { FC } from "react"
import { SearchBar } from "../searchBar/SearchBar"
import { IPageHeader } from "../../interfaces/interfaces"
import { menuSharp } from "ionicons/icons"

export const PageHeader: FC<IPageHeader> = ({ title }) => {

  return (
    <IonHeader>
      <IonToolbar>
        <div className='flex items-center justify-between'>
          <IonTitle>{title}</IonTitle>
          {/* <SearchBar data={mockData} onFilter={(data) => setFilteredData(data)} /> */}
          <div className="flex align-middle">
            <IonIcon className="h-10 w-10 pr-4 text-gray-200" icon={menuSharp} />
          </div>
        </div>
      </IonToolbar>
    </IonHeader>
  )
}